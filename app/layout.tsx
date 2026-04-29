import type { Metadata } from 'next';
import './globals.css';
import Nav from './components/Nav';
import Starscape from './components/Starscape';

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Starscape />
        <Nav />
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
