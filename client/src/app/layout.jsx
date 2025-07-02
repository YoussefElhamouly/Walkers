import '@/styles/globals.scss';
import { Poppins } from 'next/font/google';

import { AuthProvider } from '@/contexts/AuthContext';

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
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
};

export default Rootlayout;
