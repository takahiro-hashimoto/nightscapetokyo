import { createAuthClient } from "@/lib/supabase/server";

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS ?? "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

/**
 * 現在のセッションユーザーが管理者かどうかを検証する。
 * ADMIN_EMAILS 環境変数にメールアドレスが含まれていない場合は null を返す。
 */
export async function requireAdmin() {
  // ADMIN_EMAILS 未設定の本番環境では誰も通さない（フェイルクローズ）。
  // 以前は「未設定なら全員許可」だったため、環境変数の入れ忘れが
  // そのまま認可の全開放になっていた。本番相当のURLは複数ある
  // （カスタムドメイン / workers.dev / Vercel のプレビュー）ので、
  // どこか一つの設定漏れも事故につながる。
  // ローカル開発だけは .env.local に ADMIN_EMAILS が無くても使えるよう許可する。
  if (ADMIN_EMAILS.length === 0 && process.env.NODE_ENV === "production") {
    return null;
  }

  const supabase = await createAuthClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user?.email) return null;
  if (ADMIN_EMAILS.length > 0 && !ADMIN_EMAILS.includes(user.email.toLowerCase())) {
    return null;
  }

  return user;
}
