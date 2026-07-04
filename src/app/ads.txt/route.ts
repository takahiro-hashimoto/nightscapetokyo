const ADS_TXT_CONTENT = `google.com, pub-1569785771112521, DIRECT, f08c47fec0942fa0`;

// headers() を使うと毎リクエストFunction実行になるため静的化する。
// www→apex は next.config.ts のリダイレクトで正規化済みなので Host 検証は不要。
export const dynamic = "force-static";

export async function GET() {
  return new Response(ADS_TXT_CONTENT, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
