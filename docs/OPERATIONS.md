# 運用手順書（nightscape.tokyo）

2026-08 の Cloudflare 移行時点の構成。**障害時はまずこのファイルを読む。**

## インフラ全体図

```
ドメイン        お名前.com（レジストラ）
DNS           Cloudflare（ネームサーバー: quinton / wally .ns.cloudflare.com）
サイト本体      Cloudflare Workers「nightscape-tokyo」
                zone route: nightscape.tokyo/* と www.nightscape.tokyo/*
ISRキャッシュ    R2「nightscape-next-cache」+ D1「nightscape-next-tag-cache」
画像           R2「nightscape-images」（pub-7d43...r2.dev で直配信）
                ★これはキャッシュではなく本体。消すと復旧不能
DB / 認証      Supabase「nightscapetokyo」(idnhefzhidetbiqiveci)
メール          Xserver（MX: sv15008.xserver.jp。DNSレコードは Cloudflare 上）
                *.nightscape.tokyo は必ずグレー雲（プロキシOFF）。
                オレンジにするとメールソフトが接続不能になる
定期実行        Worker「nightscape-cron」+ GitHub Actions「db-backup」
```

## デプロイ

```bash
npm run deploy        # フル（R2キャッシュ投入+D1テーブル作成込み。大きな変更時）
npm run deploy:quick  # 小修正用。R2が増えない。普段はこちら
npm run deploy:cron   # workers/cron を変更したとき
```

- push 前に `npm run build` が通ることを確認する（CLAUDE.md ルール）
- `build` は css:minify を自動実行する（non-critical.css の反映漏れ防止）
- 本番稼働ブランチは `cloudflare-poc`（main は Vercel 時代の系譜）

## バックアップ

| 種類 | 場所 | 頻度 | 保持 |
|---|---|---|---|
| pg_dump 完全ダンプ | GitHub Actions artifact（このリポジトリ→Actions→db-backup） | 毎日 3:30 JST | 90日 |
| JSON スナップショット | ローカル `backups/`（`npm run backup:json` で随時） | 手動 | 無期限 |

- ダンプには nightscape と used-lab の両方が入る
- 接続情報は GitHub Secrets の `SUPABASE_DB_URL` / `SUPABASE_DB_URL_USEDLAB`
  （Session pooler の URI。Direct connection は IPv6 専用で Actions から届かない。
  パスワードに記号がある場合は URL エンコード必須）
- 最新ダンプの取得: Actions の実行ページ下部 Artifacts、または `gh run download`

### 復元

```bash
# 新しい/空の Postgres に向けて
pg_restore --no-owner --clean --if-exists -d "<接続URI>" nightscape.dump
```

- pg_dump/pg_restore はサーバーと同メジャー版以上を使う（2026-08 時点でサーバーは 17.x）
- 認証ユーザー（auth スキーマ）はダンプ対象外。管理者2件は
  Supabase ダッシュボード → Authentication → Users から手で作り直す
  （info@nightscape.tokyo / bridge.takahiro.1539@gmail.com）

## 定期実行ジョブ

| いつ(JST) | 何 | どこ |
|---|---|---|
| 0:10 | /api/revalidate?mode=daily（日次再生成+スポット件数更新）+ keepalive | nightscape-cron |
| 7:00 | /api/luminar/sale-sync + keepalive | nightscape-cron |
| 3:30 | DB バックアップ | GitHub Actions |

keepalive は Supabase Free の「7日無活動で一時停止」の防止。
nightscape と used-lab の両プロジェクトに SELECT を1件ずつ投げる。

## 障害対応

### サイトが表示されない

1. `https://nightscape-tokyo.bridge-takahiro-1539.workers.dev` は無効化済み。
   確認は本番ドメインで行う
2. Cloudflare ダッシュボード → Workers & Pages → nightscape-tokyo → メトリクスでエラー率確認
3. ログ確認: `npx wrangler tail nightscape-tokyo --format json`（名前は位置引数。--name は不可）
4. 直近デプロイが原因なら: ダッシュボード → デプロイ → 前バージョンへロールバック

### 管理画面に入れない

- 経路は三層: Cloudflare Access（メールでコード）→ Supabase ログイン → ADMIN_EMAILS
- Access のコードが届かない: Zero Trust → Access → Applications のポリシーを確認
- Supabase のパスワード忘れ: アプリ内にリセット導線は無い。
  Supabase ダッシュボード → Authentication → Users から対象を開き復旧、
  または Admin API（service role key）で直接パスワード設定
- ADMIN_EMAILS 未設定の本番は誰も通さない設計（フェイルクローズ）。
  シークレット確認: `npx wrangler secret list --name nightscape-tokyo`

### DB（Supabase）が停止した

- Free プランで7日無活動だと一時停止。ダッシュボードから Restore で復旧
- 停止中もサイトの大半は R2 キャッシュ（SWR 30日）で表示され続ける。
  壊れるのは再生成と管理画面のみ。慌てなくてよい
- 完全削除は「停止から90日放置+警告メール複数回」の後にしか起きない

### 更新が反映されない

- タグキャッシュの動作確認: D1 に無効化レコードを入れてページ再生成を見る
  （詳細はこのリポジトリの git log `perf(cache):` 系コミット参照）
- スポット保存は該当ページ群のみ無効化される設計。全ページ無効化は仕様上起きない
- 「掲載スポット数N件」は日次 cron でのみ更新（リアルタイムでなくて正常）

## シークレット一覧（値は各サービス側にのみ存在）

```
Cloudflare Worker (nightscape-tokyo):
  ADMIN_EMAILS / SUPABASE_SERVICE_ROLE_KEY / CRON_SECRET / REVALIDATE_SECRET
  R2_* / WEATHERAPI_KEY / AMAZON_* / ANTHROPIC_API_KEY
Cloudflare Worker (nightscape-cron):
  CRON_SECRET（vars: SITE_URL, KEEPALIVE_TARGETS ※anonキーは公開情報）
GitHub Actions:
  SUPABASE_DB_URL / SUPABASE_DB_URL_USEDLAB
ローカル .env.local:
  Supabase URL/keys, R2 keys ほか（このファイルが失われたら各サービスで再発行）
```

## 課金の見張り所（月1回）

- Cloudflare: Workers & Pages → メトリクス（呼び出し 1,000万/月・CPU 3,000万ms/月 が枠）
- R2: 3バケット合計が 10GB 以内か（next-cache 系は 14日で自動削除のルール設定済み）
- Supabase: プロジェクト数が増えていないか（1プロジェクト≒$10/月の Compute が乗る）

## 歴史的経緯（ハマりどころ）

- `opennextjs-cloudflare deploy` を使う。素の `wrangler deploy` で初回構築すると
  D1 テーブル作成が抜けて revalidateTag が全滅する（2026-08 に実際に起きた）
- Workers Free プランは CPU 10ms 制限で SSR が Error 1102 を吐く。Paid 必須
- 日付処理は必ず timeZone: "Asia/Tokyo" を明示（ビルド環境のTZで1日ずれる）
- proxy.ts(middleware) は OpenNext 非対応。認可は (protected)/layout.tsx が担う
