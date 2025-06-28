import styles from './FeaturedBrands.module.scss';
const featuredBrands = [
  '/assets/brand1.png',
  '/assets/brand2.png',
  '/assets/brand3.png',
  '/assets/brand4.png',
  '/assets/brand5.png',
  '/assets/brand6.png',
  '/assets/brand7.png',
  '/assets/brand8.png',
  '/assets/brand9.png',
  '/assets/brand10.png',
];

const FeaturedBrands = () => {
  return (
    <section className={styles.brandsCarouselSection}>
      <h2 className={styles.brandsCarouselTitle}>Featured Brands</h2>
      <div className={styles.brandsCarousel}>
        <div className={styles.brandsTrack}>
          {[...featuredBrands, ...featuredBrands].map((logo, idx) => (
            <div className={styles.brandLogo} key={idx}>
              <img src={logo} alt={`Brand ${(idx % 10) + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
