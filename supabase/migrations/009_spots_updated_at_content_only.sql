-- spots の updated_at をコンテンツ変更時のみ更新するよう変更
-- published / published_at / rating_* の変更では updated_at を更新しない

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  IF (
    NEW.slug               IS DISTINCT FROM OLD.slug OR
    NEW.title              IS DISTINCT FROM OLD.title OR
    NEW.type               IS DISTINCT FROM OLD.type OR
    NEW.category_id        IS DISTINCT FROM OLD.category_id OR
    NEW.content            IS DISTINCT FROM OLD.content OR
    NEW.name               IS DISTINCT FROM OLD.name OR
    NEW.lead               IS DISTINCT FROM OLD.lead OR
    NEW.report             IS DISTINCT FROM OLD.report OR
    NEW.address            IS DISTINCT FROM OLD.address OR
    NEW.official_url       IS DISTINCT FROM OLD.official_url OR
    NEW.official_label     IS DISTINCT FROM OLD.official_label OR
    NEW.sns_url            IS DISTINCT FROM OLD.sns_url OR
    NEW.sns_label          IS DISTINCT FROM OLD.sns_label OR
    NEW.relation_url       IS DISTINCT FROM OLD.relation_url OR
    NEW.relation_label     IS DISTINCT FROM OLD.relation_label OR
    NEW.hours              IS DISTINCT FROM OLD.hours OR
    NEW.holiday            IS DISTINCT FROM OLD.holiday OR
    NEW.money              IS DISTINCT FROM OLD.money OR
    NEW.station            IS DISTINCT FROM OLD.station OR
    NEW.parking            IS DISTINCT FROM OLD.parking OR
    NEW.map                IS DISTINCT FROM OLD.map OR
    NEW.height             IS DISTINCT FROM OLD.height OR
    NEW.movie              IS DISTINCT FROM OLD.movie OR
    NEW.asoview            IS DISTINCT FROM OLD.asoview OR
    NEW.asoview_02         IS DISTINCT FROM OLD.asoview_02 OR
    NEW.latitude           IS DISTINCT FROM OLD.latitude OR
    NEW.longitude          IS DISTINCT FROM OLD.longitude OR
    NEW.featured_image     IS DISTINCT FROM OLD.featured_image
  ) THEN
    NEW.updated_at = now();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
