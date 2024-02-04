import type { Metadata } from 'next';
import './globals.css';
import { inter } from '@/utils/fonts';

export const metadata: Metadata = {
  title: 'Alfin Ilham Maulidi | Portfolio',
  description: "Alfin's personal portfolio website.",
  openGraph: {
    title: 'Alfin Ilham Maulidi | Portfolio',
    description: "Alfin's personal portfolio website.",
    url: 'https://alfinilham.vercel.app',
    images: [
      {
        url: './opengraph-image.png',
        width: 800,
        height: 600,
      },
      {
        url: './opengraph-image.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className='scroll-smooth'
    >
      <body className={`${inter.className} text-white`}>{children}</body>
    </html>
  );
}
