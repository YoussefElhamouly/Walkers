import Hero from '@/components/HomePage/HeroSection/Hero';
import FeaturedSection from '@/components/HomePage/FeaturedSection/FeaturedSection';
import Testimonials from '@/components/HomePage/Testimonials/Testimonials';
import ProductCardSkeleton from '@/components/Products/productCard/ProductsSkeletons';
import { Suspense } from 'react';
import WhyShopWithUs from '@/components/HomePage/WhyShopWithUs/WhyShopWithUs';
import FeaturedBrands from '@/components/HomePage/FeaturedBramds/FeaturedBrands';
import OnSaleSection from '@/components/HomePage/OnSaleSection/OnSaleSection';
import Navbar from '@/components/layouts/Navbar/Navbar';
import Footer from '@/components/layouts/Footer/Footer';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

async function loadFeaturedProducts() {
  const featuredProducts = await fetch(`${baseUrl}/api/products/featured`, {
    next: { revalidate: 60 * 5 },
  });
  const products = await featuredProducts.json();
  console.log(products);
  return products;
}

async function loadOnSaleProducts() {
  const onSaleProducts = await fetch(`${baseUrl}/api/products/on-sale`, {
    next: { revalidate: 60 * 5 },
  });
  const products = await onSaleProducts.json();
  return products;
}

const HomePage = async () => {
  const featuredProducts = await loadFeaturedProducts();
  const onSaleProducts = await loadOnSaleProducts();
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense
        fallback={Array.from({ length: 4 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      >
        <FeaturedSection featuredProducts={featuredProducts} />
      </Suspense>
      <WhyShopWithUs />
      <FeaturedBrands />

      <Suspense
        fallback={Array.from({ length: 4 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      >
        <OnSaleSection onSaleProducts={onSaleProducts} />
      </Suspense>
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
