import ResetScroll from '@/utils/ResetScroll';

const MainPagesLayout = ({ children }) => {
  return (
    <>
      <ResetScroll />
      {children}
    </>
  );
};

export default MainPagesLayout;
