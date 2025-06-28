import styles from './FeaturedSection.module.scss';
import ProductCard from '@/components/Products/productCard/ProductCard';

const FeaturedSection = ({ featuredProducts }) => {
  return (
    <section className={styles.section} style={{ paddingTop: '2rem' }}>
      <h2 className={styles.sectionTitle}>Featured Products</h2>
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {featuredProducts.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
