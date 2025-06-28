'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './SizeSelector.module.scss';

const sizes = ['S', 'M', 'L', 'XL'];

export default function SizeSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sizeParam = searchParams.get('size');
  const variantParam = searchParams.get('variant');
  const [isLoading, setIsLoading] = useState(false);
  const selectedSize = sizeParam || 'M';

  useEffect(() => {
    setIsLoading(false);
  }, [sizeParam]);

  const handleSizeClick = (size) => {
    setIsLoading(true);

    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set('size', size);

    if (variantParam) {
      newSearchParams.set('variant', variantParam);
    }

    router.replace(`?${newSearchParams.toString()}`);
  };

  return (
    <div className={styles.sizeSection}>
      <span className={styles.sizeLabel}>Size:</span>
      <div
        className={styles.sizes}
        style={isLoading ? { pointerEvents: 'none' } : {}}
      >
        {sizes.map((size) => (
          <button
            key={size}
            className={`${styles.sizeBtn} ${selectedSize === size ? styles.active : ''}`}
            onClick={() => handleSizeClick(size)}
            disabled={isLoading}
            aria-label={`Select size ${size}`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
