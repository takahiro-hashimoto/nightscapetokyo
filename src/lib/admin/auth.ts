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
  const supabase = await createAuthClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user?.email) return null;
  if (ADMIN_EMAILS.length > 0 && !ADMIN_EMAILS.includes(user.email.toLowerCase())) {
    return null;
  }

  return user;
}
