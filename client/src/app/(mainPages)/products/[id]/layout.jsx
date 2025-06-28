import ResetScroll from '@/utils/ResetScroll';

const ProductLayout = ({ children }) => {
  return (
    <>
      <ResetScroll />
      {children}
    </>
  );
};

export default ProductLayout;
