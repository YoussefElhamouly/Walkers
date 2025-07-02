import ResetScroll from '@/utils/ResetScroll';
import Navbar from '@/components/layouts/Navbar/Navbar';
import Footer from '@/components/layouts/Footer/Footer';

const MainPagesLayout = ({ children }) => {
  return (
    <>
      <ResetScroll />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainPagesLayout;
