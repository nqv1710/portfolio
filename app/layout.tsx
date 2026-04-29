import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Nav from './components/Nav';
import Starscape from './components/Starscape';
import CustomCursor from './components/CustomCursor';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '600', '800'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Nguyen Quoc Viet | Full-stack Developer',
  description: 'Portfolio of Nguyen Quoc Viet, Full-stack Web Developer specializing in Laravel, Vue.js, and architectural design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <CustomCursor />
        <Starscape />
        <Nav />
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
