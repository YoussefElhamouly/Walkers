import ProductCardSkeleton from '@/components/Products/productCard/ProductsSkeletons';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import styles from './ProductsPage.module.scss';
import { Suspense } from 'react';
import ProductGrid from '@/components/Products/ProductGrid/ProductGrid';

const categories = [
  { label: 'All Categories', value: 'All' },
  { label: 'Watches', value: 'Watches' },
  { label: 'Headphones', value: 'Headphones' },
  { label: 'Phones', value: 'Phones' },
  { label: 'Laptops', value: 'Laptops' },
  { label: 'Cameras', value: 'Cameras' },
  { label: 'Consoles', value: 'Consoles' },
  { label: 'Speakers', value: 'Speakers' },
  { label: 'Drones', value: 'Drones' },
  { label: 'E-Readers', value: 'E-Readers' },
];

const brands = [
  { label: 'All Brands', value: 'All' },
  { label: 'Apple', value: 'Apple' },
  { label: 'Samsung', value: 'Samsung' },
  { label: 'Sony', value: 'Sony' },
  { label: 'Dell', value: 'Dell' },
  { label: 'Canon', value: 'Canon' },
  { label: 'Nintendo', value: 'Nintendo' },
  { label: 'GoPro', value: 'GoPro' },
  { label: 'DJI', value: 'DJI' },
  { label: 'Bose', value: 'Bose' },
  { label: 'Fitbit', value: 'Fitbit' },
  { label: 'Garmin', value: 'Garmin' },
  { label: 'JBL', value: 'JBL' },
  { label: 'Microsoft', value: 'Microsoft' },
  { label: 'Amazon', value: 'Amazon' },
];

const ratings = [
  { label: 'All Ratings', value: '' },
  { label: '5★ & up', value: '5' },
  { label: '4★ & up', value: '4' },
  { label: '3★ & up', value: '3' },
  { label: '2★ & up', value: '2' },
  { label: '1★ & up', value: '1' },
];

const sortOptions = [
  { label: 'Sort: Featured', value: '' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest Arrivals', value: 'newest' },
  { label: 'Best Rated', value: 'best-rated' },
];

const conditionOptions = [
  { label: 'Any Condition', value: '' },
  { label: 'New', value: 'new' },
  { label: 'Used', value: 'used' },
  { label: 'Refurbished', value: 'refurbished' },
];

const ProductPage = ({ searchParams }) => {
  return (
    <main className={styles.container}>
      <div className={styles.filtersBar}>
        <Dropdown
          options={categories}
          param="category"
          placeholder="Category"
        />
        <Dropdown options={brands} param="brand" placeholder="Brand" />
        <Dropdown options={ratings} param="rating" placeholder="Rating" />
        <Dropdown options={sortOptions} param="sort" placeholder="Sort" />
        {/* <Dropdown
          options={conditionOptions}
          param="condition"
          placeholder="Condition"
        /> */}
      </div>
      <Suspense
        fallback={
          <div className={styles.grid}>
            {Array.from({ length: 12 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        }
      >
        <ProductGrid searchParams={searchParams} />
      </Suspense>
    </main>
  );
};

export default ProductPage;
