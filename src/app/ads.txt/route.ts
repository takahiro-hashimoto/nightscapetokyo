import { headers } from "next/headers";

const ADS_TXT_CONTENT = `google.com, pub-1569785771112521, DIRECT, f08c47fec0942fa0`;

const ALLOWED_HOSTS = ["nightscape.tokyo", "www.nightscape.tokyo"];

export async function GET() {
  const headersList = await headers();
  const host = headersList.get("host") ?? "";

  if (!ALLOWED_HOSTS.includes(host)) {
    return new Response("Not Found", { status: 404 });
  }

  return new Response(ADS_TXT_CONTENT, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
