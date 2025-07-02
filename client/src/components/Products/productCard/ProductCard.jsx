import styles from './ProductCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const apiUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

const ProductCard = ({
  title,
  price,
  discount,
  rating,
  gallery,
  _id,
  description,
  sizes,
}) => {
  const hasDiscount = typeof discount === 'number' && discount > 0;
  const discountedPrice = hasDiscount ? price * (1 - discount / 100) : price;

  // Get the first variant and first size for the URL
  const firstVariant = (gallery?.[0]?.variant || '').toLowerCase();
  const firstSize = (sizes?.[0] || '').toLowerCase();

  // Build the URL with query parameters
  const productUrl = `/products/${_id}?variant=${encodeURIComponent(firstVariant)}&size=${encodeURIComponent(firstSize)}`;

  return (
    <Link className={styles.card} href={productUrl}>
      <div className={styles.imageWrapper}>
        <Image
          src={`/api/products/${_id}/loadImage/${gallery[0]?.images[0]?.fileName}`}
          alt={title}
          width={450}
          height={300}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.priceRow}>
          {hasDiscount ? (
            <>
              <span className={styles.oldPrice}>${price.toFixed(2)}</span>
              <span className={styles.price}>
                ${discountedPrice.toFixed(2)}
              </span>
              <span className={styles.discountBadge}>-{discount}%</span>
            </>
          ) : (
            <span className={styles.price}>${price.toFixed(2)}</span>
          )}
        </div>
      </div>
      <div className={styles.stars}>
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>{i < rating ? '★' : '☆'}</span>
        ))}
      </div>
    </Link>
  );
};

export default ProductCard;
