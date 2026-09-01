-- 全テーブルの Row Level Security を有効化し、公開読み取りだけを許可する。
--
-- 背景: RLS が無効だったため、サイトのHTMLに埋め込まれる anon キーで
-- 誰でも全データを書き換え・削除できる状態だった
-- （Supabase の警告 rls_disabled_in_public。2026-08 に実測で確認）。
--
-- 効果:
--   anon の INSERT/UPDATE/DELETE  → 全て拒否される
--   anon の SELECT                → 従来どおり（公開サイトは影響なし）
--   管理画面・Server Actions       → service_role キーが RLS をバイパスするため影響なし
--
-- public スキーマの全テーブルを自動で処理するので、
-- テーブルが増えても同じSQLを再実行すれば追随できる（何度実行しても安全）。
-- 拡張機能が所有するテーブル（権限が無いもの）は自動でスキップする。

do $$
declare t text;
begin
  for t in select tablename from pg_tables where schemaname = 'public'
  loop
    begin
      execute format('alter table public.%I enable row level security', t);
      execute format('drop policy if exists "public read" on public.%I', t);
      execute format('create policy "public read" on public.%I for select to anon, authenticated using (true)', t);
      raise notice 'ok: %', t;
    exception when insufficient_privilege then
      raise notice 'skip (権限なし): %', t;
    end;
  end loop;
end $$;
