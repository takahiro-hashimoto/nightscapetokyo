import { MessageCircle, Star } from "lucide-react";
import type { SpotReview as SpotReviewType } from "@/lib/types";
import type { ReviewLabels } from "@/lib/i18n-labels";

type Props = {
  spotName: string | null;
  reviews: SpotReviewType[];
  labels: ReviewLabels;
};

function ReviewStars({ rating, ariaLabel }: { rating: number; ariaLabel: string }) {
  return (
    <span className="review-stars" aria-label={ariaLabel}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          className={i <= rating ? "star-filled" : "star-empty"}
          fill={i <= rating ? "#eab308" : "#d1d5db"}
          stroke="none"
        />
      ))}
    </span>
  );
}

export default function SpotReview({ spotName, reviews = [], labels }: Props) {
  const l = labels;

  return (
    <section
      className="content-card card-padding cv-auto"
      id="review"
      aria-labelledby="review-heading"
    >
      <h2 id="review-heading">
        <span className="heading-icon">
          <MessageCircle size={18} aria-hidden="true" />
        </span>
        {l.heading(spotName)}
      </h2>

      <div className="reviews-container">
        <div className="review-list">
          {reviews.length === 0 ? (
            <p className="no-reviews">{l.noReviews}</p>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="review-item" itemProp="review" itemScope itemType="https://schema.org/Review">
                <div className="review-header">
                  <span itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={String(review.rating)} />
                    <meta itemProp="bestRating" content="5" />
                    <ReviewStars rating={review.rating} ariaLabel={l.ariaRating(review.rating)} />
                  </span>
                  <span className="review-title" itemProp="name">{review.title}</span>
                </div>
                <p className="review-content" itemProp="reviewBody">{review.content}</p>
                <div className="review-meta">
                  <span className="review-author" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">{review.name}</span>
                  </span>
                  <time className="review-date" dateTime={review.created_at} itemProp="datePublished">
                    {new Date(review.created_at).toLocaleDateString("ja-JP")}
                  </time>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="review-form-container">
          <div className="review-form-header">{l.formTitle}</div>
          <div className="review-form-body">
            <p className="review-form-text">{l.formDesc}</p>
            <form className="review-form" action="#" method="post">
              <div className="form-field">
                <label htmlFor="review-rating">{l.ratingLabel}</label>
                <select id="review-rating" name="rating" required>
                  <option value="">{l.ratingPlaceholder}</option>
                  <option value="5">★★★★★（5）</option>
                  <option value="4">★★★★☆（4）</option>
                  <option value="3">★★★☆☆（3）</option>
                  <option value="2">★★☆☆☆（2）</option>
                  <option value="1">★☆☆☆☆（1）</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="review-title">{l.titleLabel}</label>
                <input
                  type="text"
                  id="review-title"
                  name="title"
                  required
                  placeholder={l.titlePlaceholder}
                />
              </div>
              <div className="form-field">
                <label htmlFor="review-content">{l.contentLabel}</label>
                <textarea
                  id="review-content"
                  name="content"
                  required
                  rows={5}
                  placeholder={l.contentPlaceholder}
                />
              </div>
              <div className="form-field">
                <label htmlFor="review-name">{l.nameLabel}</label>
                <input
                  type="text"
                  id="review-name"
                  name="name"
                  required
                  placeholder={l.namePlaceholder}
                />
              </div>
              <div className="form-submit">
                <button type="submit">{l.submit}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
