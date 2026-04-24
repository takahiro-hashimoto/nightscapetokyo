CREATE TABLE IF NOT EXISTS amazon_products (
  asin        TEXT        PRIMARY KEY,
  title       TEXT        NOT NULL DEFAULT '',
  image_url   TEXT        NOT NULL DEFAULT '',
  price       TEXT        NOT NULL DEFAULT '',
  detail_url  TEXT        NOT NULL DEFAULT '',
  fetched_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
