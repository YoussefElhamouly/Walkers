import styles from '../FeaturedSection/FeaturedSection.module.scss';
import ProductCard from '@/components/Products/productCard/ProductCard';

const OnSaleSection = ({ onSaleProducts }) => {
  return (
    <section
      className={`${styles.section} ${styles.onSaleSection}`}
      style={{ paddingTop: '2rem' }}
    >
      <h2 className={`${styles.sectionTitle} ${styles.onSaleTitle}`}>
        On Sale
      </h2>
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {onSaleProducts.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default OnSaleSection;
