import styles from './ProductCard.module.scss';
const ProductCardSkeleton = () => (
  <div className={styles.skeletonCard}>
    <div className={styles.skeletonImage} />
    <div className={styles.skeletonContent}>
      <div className={styles.skeletonTitle} />
      <div className={styles.skeletonPriceRow}>
        <div className={styles.skeletonOldPrice} />
        <div className={styles.skeletonPrice} />
        <div className={styles.skeletonDiscountBadge} />
      </div>
    </div>
    <div className={styles.skeletonStars} />
  </div>
);

export default ProductCardSkeleton;
