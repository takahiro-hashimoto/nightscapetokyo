/**
 * Amazon Creators API 動作確認スクリプト
 * 実行: node --env-file=.env.local scripts/test-amazon.mjs
 */

const BASE_URL = "https://creatorsapi.amazon";
const MARKETPLACE = "www.amazon.co.jp";

const TOKEN_ENDPOINTS = {
  "2.1": "https://creatorsapi.auth.us-east-1.amazoncognito.com/oauth2/token",
  "2.2": "https://creatorsapi.auth.eu-south-2.amazoncognito.com/oauth2/token",
  "2.3": "https://creatorsapi.auth.us-west-2.amazoncognito.com/oauth2/token",
  "3.1": "https://api.amazon.com/auth/o2/token",
  "3.2": "https://api.amazon.co.uk/auth/o2/token",
  "3.3": "https://api.amazon.co.jp/auth/o2/token",
};

const credentialId     = process.env.AMAZON_CREATORS_CREDENTIAL_ID?.trim();
const credentialSecret = process.env.AMAZON_CREATORS_CREDENTIAL_SECRET?.trim();
const version          = process.env.AMAZON_CREATORS_VERSION?.trim() ?? "3.3";
const partnerTag       = process.env.AMAZON_CREATORS_PARTNER_TAG?.trim() ?? "";
const tokenEndpoint    = TOKEN_ENDPOINTS[version];
const isLwa            = version.startsWith("3.");

const TEST_ASIN = "B0CXPRP216";

console.log("=== Amazon Creators API テスト ===");
console.log(`バージョン    : ${version} (${isLwa ? "LWA" : "Cognito"})`);
console.log(`トークンURL   : ${tokenEndpoint}`);
console.log(`パートナータグ: ${partnerTag || "(未設定)"}`);
console.log("");

// 1. トークン取得
console.log("▶ 1. トークン取得...");
const tokenRes = await fetch(tokenEndpoint, {
  method: "POST",
  headers: { "Content-Type": isLwa ? "application/json" : "application/x-www-form-urlencoded" },
  body: isLwa
    ? JSON.stringify({
        grant_type: "client_credentials",
        client_id: credentialId,
        client_secret: credentialSecret,
        scope: "creatorsapi::default",
      })
    : new URLSearchParams({
        grant_type: "client_credentials",
        client_id: credentialId,
        client_secret: credentialSecret,
        scope: "creatorsapi/default",
      }),
});

console.log(`   ステータス: ${tokenRes.status} ${tokenRes.statusText}`);
if (!tokenRes.ok) {
  console.error("   エラー:", await tokenRes.text());
  process.exit(1);
}
const tokenJson = await tokenRes.json();
const token = tokenJson.access_token;
console.log(`   取得成功 (expires_in: ${tokenJson.expires_in}s)`);
console.log("");

// 2. GetItems
console.log(`▶ 2. GetItems (ASIN: ${TEST_ASIN})...`);
const authHeader = isLwa ? `Bearer ${token}` : `Bearer ${token}, Version ${version}`;
const itemsRes = await fetch(`${BASE_URL}/catalog/v1/getItems`, {
  method: "POST",
  headers: {
    "Content-Type":  "application/json",
    "Accept":        "application/json",
    "Authorization": authHeader,
    "x-marketplace": MARKETPLACE,
  },
  body: JSON.stringify({
    itemIds: [TEST_ASIN],
    ...(partnerTag && { partnerTag, partnerType: "Associates" }),
    resources: ["itemInfo.title", "offersV2.listings.price", "images.primary.medium"],
  }),
});

console.log(`   ステータス: ${itemsRes.status} ${itemsRes.statusText}`);
const itemsJson = await itemsRes.json();

if (!itemsRes.ok) {
  console.error("   エラー:", JSON.stringify(itemsJson, null, 2));
  process.exit(1);
}

// 3. パース結果
const items = itemsJson?.itemsResult?.items ?? [];
if (items.length > 0) {
  const item = items[0];
  const amount = item?.offersV2?.listings?.[0]?.price?.money?.amount;
  const currency = item?.offersV2?.listings?.[0]?.price?.money?.currency ?? "JPY";
  console.log("");
  console.log("▶ 3. パース結果:");
  console.log(`   タイトル : ${item?.itemInfo?.title?.displayValue ?? "(なし)"}`);
  console.log(`   画像URL  : ${item?.images?.primary?.medium?.url ?? "(なし)"}`);
  console.log(`   価格     : ${amount ? new Intl.NumberFormat("ja-JP", { style: "currency", currency }).format(amount) : "(なし)"}`);
  console.log(`   詳細URL  : https://www.amazon.co.jp/dp/${item.asin}/${partnerTag ? `?tag=${partnerTag}` : ""}`);
  console.log("");
  console.log("✓ 正常動作しています");
} else {
  console.log("   レスポンス:", JSON.stringify(itemsJson, null, 2));
}
