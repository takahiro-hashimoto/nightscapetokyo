/**
 * Amazon Creators API クライアント
 *
 * 環境変数:
 *   AMAZON_CREATORS_CREDENTIAL_ID      - クレデンシャル ID
 *   AMAZON_CREATORS_CREDENTIAL_SECRET  - クレデンシャルシークレット
 *   AMAZON_CREATORS_VERSION            - バージョン (例: "2.3" / "3.3")
 *   AMAZON_CREATORS_PARTNER_TAG        - アソシエイトタグ (例: nightscape-22)
 *
 * バージョン体系:
 *   2.x → Cognito 認証 (application/x-www-form-urlencoded, scope: creatorsapi/default)
 *   3.x → LWA 認証    (application/json,                  scope: creatorsapi::default)
 */

const BASE_URL  = "https://creatorsapi.amazon";
const MARKETPLACE = "www.amazon.co.jp";

const TOKEN_ENDPOINTS: Record<string, string> = {
  // Cognito (v2.x)
  "2.1": "https://creatorsapi.auth.us-east-1.amazoncognito.com/oauth2/token",
  "2.2": "https://creatorsapi.auth.eu-south-2.amazoncognito.com/oauth2/token",
  "2.3": "https://creatorsapi.auth.us-west-2.amazoncognito.com/oauth2/token",
  // LWA (v3.x)
  "3.1": "https://api.amazon.com/auth/o2/token",
  "3.2": "https://api.amazon.co.uk/auth/o2/token",
  "3.3": "https://api.amazon.co.jp/auth/o2/token",
};

// ── 型定義 ────────────────────────────────────────────────────

export interface AmazonProduct {
  asin: string;
  title: string;
  imageUrl: string;
  price: string;     // "¥25,000" 形式（取得できない場合は空文字）
  detailUrl: string; // アソシエイトタグ付き URL
  fetchedAt: Date;
}

// ── トークン管理（インメモリキャッシュ） ──────────────────────

let cachedToken: string | null = null;
let tokenExpiresAt = 0;

async function getAccessToken(): Promise<string | null> {
  const now = Date.now();
  if (cachedToken && now < tokenExpiresAt) return cachedToken;

  const credentialId     = process.env.AMAZON_CREATORS_CREDENTIAL_ID?.trim()     ?? "";
  const credentialSecret = process.env.AMAZON_CREATORS_CREDENTIAL_SECRET?.trim() ?? "";
  const version          = process.env.AMAZON_CREATORS_VERSION?.trim()           ?? "";
  const tokenEndpoint    = TOKEN_ENDPOINTS[version];

  if (!credentialId || !credentialSecret || !tokenEndpoint) return null;

  const isLwa = version.startsWith("3.");

  try {
    const res = await fetch(tokenEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": isLwa
          ? "application/json"
          : "application/x-www-form-urlencoded",
      },
      body: isLwa
        ? JSON.stringify({
            grant_type:    "client_credentials",
            client_id:     credentialId,
            client_secret: credentialSecret,
            scope:         "creatorsapi::default",
          })
        : new URLSearchParams({
            grant_type:    "client_credentials",
            client_id:     credentialId,
            client_secret: credentialSecret,
            scope:         "creatorsapi/default",
          }),
      cache: "no-store",
    });

    if (!res.ok) return null;

    const json = await res.json() as { access_token: string; expires_in: number };
    cachedToken    = json.access_token;
    tokenExpiresAt = now + (json.expires_in - 30) * 1000;
    return cachedToken;
  } catch {
    return null;
  }
}

// ── ASIN 抽出 ────────────────────────────────────────────────

export function extractAsin(urlOrAsin: string): string | null {
  const s = urlOrAsin.trim();
  if (/^[A-Z0-9]{10}$/i.test(s)) return s.toUpperCase();
  const m = s.match(/\/(?:dp|gp\/product|ASIN)\/([A-Z0-9]{10})/i);
  return m ? m[1].toUpperCase() : null;
}

// ── GetItems API 呼び出し ──────────────────────────────────────

async function callGetItems(asins: string[]): Promise<AmazonProduct[]> {
  const partnerTag = process.env.AMAZON_CREATORS_PARTNER_TAG?.trim() ?? "";
  const version    = process.env.AMAZON_CREATORS_VERSION?.trim()     ?? "";
  const token      = await getAccessToken();
  if (!token) return [];

  const isLwa = version.startsWith("3.");
  const now   = new Date();

  // API の上限は 10 件/リクエスト
  const chunks: string[][] = [];
  for (let i = 0; i < asins.length; i += 10) chunks.push(asins.slice(i, i + 10));

  const results: AmazonProduct[] = [];
  for (const chunk of chunks) {
    try {
      const res = await fetch(`${BASE_URL}/catalog/v1/getItems`, {
        method: "POST",
        headers: {
          "Content-Type":  "application/json",
          "Accept":        "application/json",
          "Authorization": isLwa
            ? `Bearer ${token}`
            : `Bearer ${token}, Version ${version}`,
          "x-marketplace": MARKETPLACE,
        },
        body: JSON.stringify({
          itemIds: chunk,
          ...(partnerTag && { partnerTag, partnerType: "Associates" }),
          resources: [
            "itemInfo.title",
            "offersV2.listings.price",
            "images.primary.medium",
          ],
        }),
        next: { revalidate: 3600 },
      });

      if (!res.ok) continue;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const json = await res.json() as any;
      const items: unknown[] = json?.itemsResult?.items ?? json?.ItemsResult?.Items ?? [];

      const parsed = items
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((item: any): AmazonProduct | null => {
          const asin = (item?.asin ?? item?.ASIN) as string | undefined;
          if (!asin) return null;

          const title =
            (item?.itemInfo?.title?.displayValue as string | undefined) ??
            (item?.ItemInfo?.Title?.DisplayValue as string | undefined) ??
            "";

          const imageUrl =
            (item?.images?.primary?.medium?.url as string | undefined) ??
            (item?.Images?.Primary?.Medium?.URL as string | undefined) ??
            "";

          const listing = item?.offersV2?.listings?.[0] ?? item?.Offers?.Listings?.[0];
          const amount: number =
            listing?.price?.money?.amount ??
            listing?.Price?.Amount ??
            0;
          const currency: string =
            listing?.price?.money?.currency ??
            listing?.Price?.Currency ??
            "JPY";

          const price = amount > 0
            ? new Intl.NumberFormat("ja-JP", { style: "currency", currency }).format(amount)
            : "";

          const detailUrl = partnerTag
            ? `https://www.amazon.co.jp/dp/${asin}/?tag=${partnerTag}`
            : `https://www.amazon.co.jp/dp/${asin}/`;

          return { asin, title, imageUrl, price, detailUrl, fetchedAt: now };
        })
        .filter((p): p is AmazonProduct => p !== null);

      results.push(...parsed);
    } catch {
      // チャンク単位で失敗しても続行
    }
  }

  return results;
}

// ── DB キャッシュ ─────────────────────────────────────────────

const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7日

async function getAdminClient() {
  const { createAdminClient } = await import("./supabase/server");
  return createAdminClient();
}

async function loadFromDb(asins: string[]): Promise<Map<string, AmazonProduct>> {
  try {
    const db = await getAdminClient();
    const { data } = await db
      .from("amazon_products")
      .select("asin, title, image_url, price, detail_url, fetched_at")
      .in("asin", asins);
    if (!data) return new Map();
    return new Map(
      data.map((row) => [
        row.asin,
        {
          asin:      row.asin,
          title:     row.title,
          imageUrl:  row.image_url,
          price:     row.price,
          detailUrl: row.detail_url,
          fetchedAt: new Date(row.fetched_at),
        } satisfies AmazonProduct,
      ])
    );
  } catch {
    return new Map();
  }
}

async function upsertToDb(products: AmazonProduct[]): Promise<void> {
  if (products.length === 0) return;
  try {
    const db = await getAdminClient();
    await db.from("amazon_products").upsert(
      products.map((p) => ({
        asin:       p.asin,
        title:      p.title,
        image_url:  p.imageUrl,
        price:      p.price,
        detail_url: p.detailUrl,
        fetched_at: p.fetchedAt.toISOString(),
      })),
      { onConflict: "asin" }
    );
  } catch {
    // upsert 失敗は無視してレンダリングを続ける
  }
}

// ── 公開 API ──────────────────────────────────────────────────

/**
 * HTML 内の [amazonLink ...] ショートコードを走査して ASIN を収集し、
 * DB キャッシュ優先で取得（7日以上経過した場合は API から再取得）して
 * Map<asin, AmazonProduct> を返す。
 */
export async function prefetchAmazonProducts(
  html: string
): Promise<Map<string, AmazonProduct>> {
  const asins: string[] = [];
  const re = /\[amazonLink\s+([\s\S]*?)\s*\]/g;
  let m: RegExpExecArray | null;

  while ((m = re.exec(html)) !== null) {
    const attrs = Object.fromEntries(
      [...m[1].matchAll(/(\w+)="([^"]*)"/g)].map(([, k, v]) => [k, v])
    );
    const asin = extractAsin(attrs.url ?? "");
    if (asin && !asins.includes(asin)) asins.push(asin);
  }

  if (asins.length === 0) return new Map();

  // DB から既存キャッシュを取得
  const cached = await loadFromDb(asins);

  const now = Date.now();
  const staleAsins = asins.filter((asin) => {
    const hit = cached.get(asin);
    return !hit || now - hit.fetchedAt.getTime() > CACHE_TTL_MS;
  });

  // 未キャッシュ・期限切れ分だけ API で取得して DB に保存
  if (staleAsins.length > 0) {
    const fresh = await callGetItems(staleAsins);
    upsertToDb(fresh); // fire-and-forget
    for (const p of fresh) cached.set(p.asin, p);
  }

  return cached;
}
