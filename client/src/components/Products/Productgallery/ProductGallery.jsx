'use client';

import { useState, useRef } from 'react';
import Slider from '../../ui/Slider/Slider';
import styles from './ProductGallery.module.scss';
const ProductGallery = ({ images, _id }) => {
  const [mainImage, setMainImage] = useState(0);
  const sampleImages = images.map(
    (image) => `/api/products/${_id}/loadImage/${image?.fileName}`,
  );
  const actualSwiperRef = useRef(null);
  return (
    <div className={styles.imageSection}>
      {/* <img src={mainImage} alt="Main Product" className={styles.mainImage} /> */}
      <Slider
        blobs={images}
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
