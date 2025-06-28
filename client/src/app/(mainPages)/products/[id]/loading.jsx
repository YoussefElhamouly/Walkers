import styles from './ProductPage.module.scss';

export default function Loading() {
  return (
    <div className={styles.productPageContainer}>
      <div className={styles.productPage}>
        {/* Gallery Skeleton */}
        <div className={styles.skeletonGallery}>
          <div className={styles.skeletonMainImage} />
          <div className={styles.skeletonThumbnails}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={styles.skeletonThumbnail} />
            ))}
          </div>
        </div>
        {/* Details Skeleton */}
        <div className={styles.detailsSection}>
          <div className={styles.skeletonTitle} />
          <div className={styles.skeletonBrand} />
          <div className={styles.skeletonRating} />
          <div className={styles.skeletonPriceRow}>
            <div className={styles.skeletonOldPrice} />
            <div className={styles.skeletonPrice} />
          </div>
          <div className={styles.skeletonDescription1} />
          <div className={styles.skeletonDescription2} />
          <div className={styles.skeletonButtonRow}>
            <div className={styles.skeletonButton} />
            <div className={styles.skeletonButton} />
          </div>
        </div>
      </div>
      {/* Reviews Skeleton */}
      <div className={styles.reviewSection}>
        <div className={styles.skeletonReviewTitle} />
        <div className={styles.reviewList}>
          {[1, 2, 3].map((i) => (
            <div className={styles.reviewItem} key={i}>
              <div className={styles.skeletonAvatar} />
              <div className={styles.reviewContent}>
                <div className={styles.skeletonReviewerName} />
                <div className={styles.skeletonReviewText} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Add pulse animation if not present in global styles
// @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.6; } 100% { opacity: 1; } }
