import styles from './ProductPage.module.scss';
import ProductGallery from '@/components/Products/Productgallery/ProductGallery';
import ProductVariants from '@/components/Products/ProductVariants/ProductVariants';
import SizeSelector from '@/components/Products/ProductVariants/SizeSelector';
import Button from '@/components/ui/Button/Button';
import { notFound } from 'next/navigation';
import UserReviews from '@/components/Products/ProductReviews/UserReviews';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export default async function ProductPage({
  params,
  searchParams: searchParamsPromise,
}) {
  const searchParams = await searchParamsPromise;

  const getProduct = async (id) => {
    const res = await fetch(`${baseUrl}/api/products/${id}`, {
      cache: 'no-store',
    });
    const data = await res.json();
    if (!data?._id) return notFound();

    return data;
  };
  const { id } = await params;
  const product = await getProduct(id);

  let selectedVariantIdx = 0;
  if (searchParams && searchParams.variant && product.gallery) {
    const idx = product.gallery.findIndex(
      (v) =>
        v.variant &&
        v.variant.toLowerCase() === searchParams.variant.toLowerCase(),
    );
    selectedVariantIdx = idx >= 0 ? idx : 0;
  }

  return (
    <div className={styles.productPageContainer}>
      <div className={styles.productPage}>
        <ProductGallery
          key={selectedVariantIdx + product._id}
          images={product.gallery[selectedVariantIdx].images}
          _id={product._id}
        />
        <div className={styles.detailsSection}>
          <h1 className={styles.productTitle}>{product.title}</h1>
          <p className={styles.model}>{product.brand}</p>
          <div className={styles.rating}>
            {'★'.repeat(product.rating)}
            {'☆'.repeat(5 - Math.floor(product.rating))}
          </div>
          {/* Price Section */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
            }}
          >
            {product.discount > 0 ? (
              <>
                <span className={styles.oldPrice}>
                  ${product.price.toFixed(2)}
                </span>
                <span className={styles.price}>
                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
                <span className={styles.discountBadge}>
                  -{product.discount}%
                </span>
              </>
            ) : (
              <span className={styles.price}>${product.price.toFixed(2)}</span>
            )}
          </div>
          <p className={styles.description}>{product.description}</p>
          <ProductVariants gallery={product.gallery} productId={product._id} />
          <SizeSelector />
          <div className={styles.buttonRow}>
            <Button customStyles={styles.addToCart} size="lg">
              Add to Cart
            </Button>

            <Button customStyles={styles.buyNow} size="lg">
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      <UserReviews reviews={product.reviews} />
    </div>
  );
}
