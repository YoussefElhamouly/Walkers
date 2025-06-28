import ProductCard from '@/components/Products/productCard/ProductCard';
import Pagination from '@/components/ui/pagination/Pagination';
import styles from './ProductGrid.module.scss';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const getProducts = async (searchParams) => {
  const search = searchParams?.category || '';
  const brand = searchParams?.brand || '';
  const rating = searchParams?.rating || '';
  const condition = searchParams?.condition || '';
  const sort = searchParams?.sort || '';
  const page = searchParams?.page || '1';

  const res = await fetch(
    `${baseUrl}/api/products?category=${search}&brand=${brand}&rating=${rating}&condition=${condition}&sort=${sort}&page=${page}`,
    {
      next: {
        revalidate: 60 * 2,
      },
    },
  );

  const data = await res.json();
  return data;
};

const ProductGrid = async ({ searchParams }) => {
  const { products, pagination } = await getProducts(searchParams);

  return (
    <>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          currentPage={pagination.page}
          totalPages={pagination.totalPages}
          totalItems={pagination.total}
          itemsPerPage={pagination.limit}
        />
      </div>
    </>
  );
};

export default ProductGrid;
