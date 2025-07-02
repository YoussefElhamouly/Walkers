'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './SizeSelector.module.scss';

const sizes = ['s', 'm', 'l', 'xl'];

export default function SizeSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sizeParam = searchParams.get('size');
  const variantParam = searchParams.get('variant');
  const [isLoading, setIsLoading] = useState(false);
  const selectedSize = sizeParam || 'm';

  useEffect(() => {
    setIsLoading(false);
  }, [sizeParam]);

  const handleSizeClick = (size) => {
    // Don't do anything if the same size is already selected
    if (size === selectedSize) {
      return;
    }

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
            disabled={isLoading || selectedSize === size}
            aria-label={`Select size ${size}`}
          >
            {size.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
