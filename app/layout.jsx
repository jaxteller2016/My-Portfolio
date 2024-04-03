import { Outfit } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';

// components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// theme provider
import ThemeProvider from '@/components/ThemeProvider';

import { Toaster } from '@/components/ui/toaster';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Sorin Craciunescu - Web Developer',
  description: 'Creating beautiful and performant web applications.',
  publisher: 'Sorin Craciunescu',
  icons: {
    icon: '/icon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
