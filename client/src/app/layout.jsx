import '@/styles/globals.scss';
import Navbar from '@/components/Layouts/navbar/Navbar';
import { Poppins } from 'next/font/google';
import Footer from '@/components/Layouts/footer/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'Walkers',
  description: 'This is my app',
  icons: {
    icon: '/favicon.ico', // or '/favicon.png'
  },
};
const Rootlayout = ({ children }) => {
  return (
    <html lang="en" className={poppins.className}>
      <body
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Rootlayout;
