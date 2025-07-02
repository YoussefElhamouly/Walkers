'use client';

import { useState, useRef, useEffect } from 'react';
import Slider from '../../ui/Slider/Slider';
import styles from './ProductGallery.module.scss';

const ProductGallery = ({ images, _id, selectedVariantIdx = 0 }) => {
  const [mainImage, setMainImage] = useState(0);
  const [currentImages, setCurrentImages] = useState(images);
  const actualSwiperRef = useRef(null);

  // Update images when variant changes without resetting slider
  useEffect(() => {
    setCurrentImages(images);
    // Reset main image to first image when variant changes
    setMainImage(0);
    // Update swiper if it exists
    if (actualSwiperRef.current) {
      actualSwiperRef.current.slideTo(0);
    }
  }, [images]);

  const sampleImages = currentImages.map(
    (image) => `/api/products/${_id}/loadImage/${image?.fileName}`,
  );

  return (
    <div className={styles.imageSection}>
      {/* <img src={mainImage} alt="Main Product" className={styles.mainImage} /> */}
      <Slider
        blobs={currentImages}
        id="product-gallery"
        actualSwiperRef={actualSwiperRef}
        callback={setMainImage}
        endpoint={`/api/products/${_id}/loadImage`}
      />
      <div className={styles.carouselContainer}>
        {sampleImages.map((img, index) => (
          <button
            onClick={() => {
              actualSwiperRef.current.slideTo(index);
            }}
            key={index}
            className={`${styles.thumbnailContainer} ${
              mainImage === index ? styles.activeThumbnail : ''
            }`}
          >
            <img src={img} alt={`Thumbnail ${index}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
