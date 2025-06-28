import React from 'react';
import styles from './UserReviews.module.scss';
import CreateReview from './CreateReview';

const UserReviews = ({ reviews = [] }) => {
  if (!reviews.total) {
    return <div className={styles.noReviews}>No reviews yet.</div>;
  }

  return (
    <div className={styles.reviewSection}>
      <div className={styles.reviewTitle}>
        Customers Reviews ({reviews.total})
      </div>
      <div className={styles.reviewList}>
        {reviews.reviews.map((review, idx) => {
          // Compute initials and  name from user_id
          const user = review.user || {};
          const initials =
            (user.firstName?.[0] || '') + (user.lastName?.[0] || '');
          const name = `${user.firstName || ''} ${user.lastName || ''}`.trim();
          return (
            <div className={styles.reviewItem} key={review._id || idx}>
              <div className={styles.avatar}>{initials || '?'}</div>
              <div className={styles.reviewContent}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span className={styles.reviewerName}>
                    {name || user.username || 'Anonymous'}
                  </span>
                  <span className={styles.stars}>
                    {'★'.repeat(review.rating)}
                    {'☆'.repeat(5 - review.rating)}
                  </span>
                  <span className={styles.reviewDate}>
                    {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className={styles.reviewText}>{review.comment}</div>
              </div>
            </div>
          );
        })}
      </div>
      <CreateReview />
    </div>
  );
};

export default UserReviews;
