-- nightscape.tokyo
-- Row Level Security の有効化と、公開読み取りポリシーの付与。
--
-- 背景: 全テーブルで RLS が無効だったため、サイトのHTMLに埋め込まれている
-- anon キーで誰でも全データを書き換え・削除できる状態だった（Supabase の
-- セキュリティ警告 rls_disabled_in_public。2026-08-25 に実測で確認）。
--
-- 方針:
-- ・全テーブルで RLS を有効化 → anon の INSERT/UPDATE/DELETE が全て拒否される
-- ・SELECT のみ anon に許可 → 公開サイトの読み取りは今までどおり動く
-- ・管理画面と Server Actions は service_role キーで、RLS をバイパスするため影響なし
--
-- 適用: Supabase ダッシュボード > SQL Editor に貼り付けて実行（何度実行しても安全）

alter table public.amazon_products enable row level security;
drop policy if exists "public read" on public.amazon_products;
create policy "public read" on public.amazon_products for select to anon, authenticated using (true);

alter table public.articles enable row level security;
drop policy if exists "public read" on public.articles;
create policy "public read" on public.articles for select to anon, authenticated using (true);

alter table public.categories enable row level security;
drop policy if exists "public read" on public.categories;
create policy "public read" on public.categories for select to anon, authenticated using (true);

alter table public.luminar_price_snapshots enable row level security;
drop policy if exists "public read" on public.luminar_price_snapshots;
create policy "public read" on public.luminar_price_snapshots for select to anon, authenticated using (true);

alter table public.luminar_sale_settings enable row level security;
drop policy if exists "public read" on public.luminar_sale_settings;
create policy "public read" on public.luminar_sale_settings for select to anon, authenticated using (true);

alter table public.spot_events enable row level security;
drop policy if exists "public read" on public.spot_events;
create policy "public read" on public.spot_events for select to anon, authenticated using (true);

alter table public.spot_faqs enable row level security;
drop policy if exists "public read" on public.spot_faqs;
create policy "public read" on public.spot_faqs for select to anon, authenticated using (true);

alter table public.spot_hotels enable row level security;
drop policy if exists "public read" on public.spot_hotels;
create policy "public read" on public.spot_hotels for select to anon, authenticated using (true);

alter table public.spot_images enable row level security;
drop policy if exists "public read" on public.spot_images;
create policy "public read" on public.spot_images for select to anon, authenticated using (true);

alter table public.spot_reviews enable row level security;
drop policy if exists "public read" on public.spot_reviews;
create policy "public read" on public.spot_reviews for select to anon, authenticated using (true);

alter table public.spot_tags enable row level security;
drop policy if exists "public read" on public.spot_tags;
create policy "public read" on public.spot_tags for select to anon, authenticated using (true);

alter table public.spot_translations enable row level security;
drop policy if exists "public read" on public.spot_translations;
create policy "public read" on public.spot_translations for select to anon, authenticated using (true);

alter table public.spots enable row level security;
drop policy if exists "public read" on public.spots;
create policy "public read" on public.spots for select to anon, authenticated using (true);

alter table public.tag_page_faqs enable row level security;
drop policy if exists "public read" on public.tag_page_faqs;
create policy "public read" on public.tag_page_faqs for select to anon, authenticated using (true);

alter table public.tag_page_pr_banner_links enable row level security;
drop policy if exists "public read" on public.tag_page_pr_banner_links;
create policy "public read" on public.tag_page_pr_banner_links for select to anon, authenticated using (true);

alter table public.tag_page_pr_banners enable row level security;
drop policy if exists "public read" on public.tag_page_pr_banners;
create policy "public read" on public.tag_page_pr_banners for select to anon, authenticated using (true);

alter table public.tag_page_section_spots enable row level security;
drop policy if exists "public read" on public.tag_page_section_spots;
create policy "public read" on public.tag_page_section_spots for select to anon, authenticated using (true);

alter table public.tag_page_sections enable row level security;
drop policy if exists "public read" on public.tag_page_sections;
create policy "public read" on public.tag_page_sections for select to anon, authenticated using (true);

alter table public.tag_page_translations enable row level security;
drop policy if exists "public read" on public.tag_page_translations;
create policy "public read" on public.tag_page_translations for select to anon, authenticated using (true);

alter table public.tag_pages enable row level security;
drop policy if exists "public read" on public.tag_pages;
create policy "public read" on public.tag_pages for select to anon, authenticated using (true);

alter table public.tags enable row level security;
drop policy if exists "public read" on public.tags;
create policy "public read" on public.tags for select to anon, authenticated using (true);
