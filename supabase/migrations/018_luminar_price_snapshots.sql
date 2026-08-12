-- Luminar の価格・セール状況を日次で記録するログテーブル。
--
-- 目的:
--   セール時期と割引率のデータを貯めること。記事への反映は今は行わない。
--   1年ほど貯まれば「例年いつセールをやるか」「割引率はどの程度か」を
--   推測ではなく実測で言えるようになる。
--   （現在は記事本文に「2025年のブラックフライデーは最大77%OFF」といった
--     出典の曖昧な数字がベタ書きされている状態）
--
-- 設計の考え方:
--   1) 期間単位の「セール履歴」ではなく、1日1行の観測ログにしている。
--      観測ログからは期間も割引率の推移も後から復元できるが、
--      期間だけを持つと「セール中に価格が変わった」といった動きを取りこぼす。
--
--   2) アプリが書くのは「観測した事実」だけにする。
--      割引率は価格から必ず導けるので、生成列（GENERATED）にして DB に計算させる。
--      アプリ側で計算して保存すると、計算式を直したときに過去行と食い違う。
--
--   3) 列名は「プラン名 + 項目」で統一する。
--      当初 max_discount_rate を「全プラン中の最大割引率」の意味で使っていたが、
--      max_sale / max_regular（Maxプランの価格）と並ぶと Maxプランの割引率に読める。
--      プラン別は *_discount_rate、全体の最大は best_discount_rate とする。

CREATE TABLE IF NOT EXISTS luminar_price_snapshots (
  id                 BIGSERIAL   PRIMARY KEY,

  -- 観測日（JST）。1日1行に制限し、同期が複数回走っても重複しない
  observed_on        DATE        NOT NULL,

  -- ── セール状況（観測値）──
  sale_active        BOOLEAN     NOT NULL,
  -- 公式ページの「Sale ends ◯◯」から起こした終了日
  sale_end           DATE,
  -- 公式ページの生表記（例: "August 31st"）。解析がズレたときの検証用
  sale_end_raw       TEXT,

  -- ── 買い切り3プランの価格（税込・円・観測値）──
  desktop_sale          INTEGER,
  desktop_regular       INTEGER,
  all_platforms_sale    INTEGER,
  all_platforms_regular INTEGER,
  max_sale              INTEGER,
  max_regular           INTEGER,

  -- ── 割引率(%)（価格から自動計算・書き込み不可）──
  -- 割引なし（セール価格＝通常価格）は 0。価格が欠けている場合は NULL。
  desktop_discount_rate SMALLINT GENERATED ALWAYS AS (
    CASE WHEN desktop_regular > 0 AND desktop_sale IS NOT NULL
         THEN GREATEST(0, round((1 - desktop_sale::numeric / desktop_regular) * 100))::smallint
    END
  ) STORED,
  all_platforms_discount_rate SMALLINT GENERATED ALWAYS AS (
    CASE WHEN all_platforms_regular > 0 AND all_platforms_sale IS NOT NULL
         THEN GREATEST(0, round((1 - all_platforms_sale::numeric / all_platforms_regular) * 100))::smallint
    END
  ) STORED,
  max_discount_rate SMALLINT GENERATED ALWAYS AS (
    CASE WHEN max_regular > 0 AND max_sale IS NOT NULL
         THEN GREATEST(0, round((1 - max_sale::numeric / max_regular) * 100))::smallint
    END
  ) STORED,

  -- 3プラン中の最大割引率。記事で「最大◯%OFF」と書くならこれを使う。
  -- Skylum が広告する「最大77%OFF」は旧定価など別基準のため一致しないことがある。
  -- GREATEST は NULL を無視し、全てNULLのときだけ NULL を返す。
  -- COALESCE で 0 を埋めると「価格が取れなかった日」が「割引0%の日」と
  -- 区別できなくなるため、あえて埋めない。
  best_discount_rate SMALLINT GENERATED ALWAYS AS (
    GREATEST(
      CASE WHEN desktop_regular > 0 AND desktop_sale IS NOT NULL
           THEN GREATEST(0, round((1 - desktop_sale::numeric / desktop_regular) * 100)) END,
      CASE WHEN all_platforms_regular > 0 AND all_platforms_sale IS NOT NULL
           THEN GREATEST(0, round((1 - all_platforms_sale::numeric / all_platforms_regular) * 100)) END,
      CASE WHEN max_regular > 0 AND max_sale IS NOT NULL
           THEN GREATEST(0, round((1 - max_sale::numeric / max_regular) * 100)) END
    )::smallint
  ) STORED,

  -- ── Luminar Prime の更新価格（税込・円・観測値）──
  prime_desktop      INTEGER,
  prime_max          INTEGER,

  -- 将来ショップ側の項目が増えたとき、スキーマ変更なしで拾えるようにする逃げ道
  raw                JSONB,

  created_at         TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE luminar_price_snapshots IS
  'Luminar 公式ストアの価格・セール状況の日次観測ログ。/api/luminar/sale-sync が1日1行書き込む。
   記事表示には使っていない（2026-08 時点）。セール時期と割引率の実績を貯めるためのもの。
   *_discount_rate と best_discount_rate は価格から自動計算される生成列で、アプリからは書き込めない。';

-- 1日1行。同期が複数回走っても増えず、再実行時は上書きされる
CREATE UNIQUE INDEX IF NOT EXISTS luminar_price_snapshots_observed_on_uniq
  ON luminar_price_snapshots (observed_on);

-- 「セール中だった日」を期間で引くときに使う
CREATE INDEX IF NOT EXISTS luminar_price_snapshots_sale_active_idx
  ON luminar_price_snapshots (sale_active, observed_on DESC);
