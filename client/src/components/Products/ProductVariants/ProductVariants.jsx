'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './ProductVariants.module.scss';

export default function ProductVariants({ gallery, productId }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const variantParam = searchParams.get('variant');
  const sizeParam = searchParams.get('size');
  const [isLoading, setIsLoading] = useState(false);
  const selectedVariant = gallery.findIndex(
    (v) =>
      v.variant &&
      v.variant.toLowerCase() ===
        (variantParam || gallery[0].variant).toLowerCase(),
  );

  useEffect(() => {
    setIsLoading(false);
  }, [variantParam]);

  const handleVariantClick = (variant) => {
    setIsLoading(true);

    // Create new URLSearchParams object
    const newSearchParams = new URLSearchParams(searchParams);

    // Update the variant parameter
    newSearchParams.set('variant', variant);

    // Preserve the size parameter if it exists
    if (sizeParam) {
      newSearchParams.set('size', sizeParam);
    }

    // Replace the current URL with the new search params
    router.replace(`?${newSearchParams.toString()}`);
  };

  return (
    <div className={styles.variantSection}>
      <span>Variants:</span>
      <div
        className={styles.variants}
        style={isLoading ? { pointerEvents: 'none' } : {}}
      >
        {gallery.map((variant, idx) => (
          <div
            key={variant.variant}
            className={`${styles.variantBtn} ${selectedVariant === idx ? styles.active : ''}`}
            aria-label={variant.variant}
            type="button"
            onClick={() => handleVariantClick(variant.variant)}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={`/api/products/${productId}/loadImage/${variant.images[0]?.fileName}`}
              alt={variant.variant}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
