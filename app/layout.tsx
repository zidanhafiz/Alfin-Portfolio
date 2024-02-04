import type { Metadata } from 'next';
import './globals.css';
import { inter } from '@/utils/fonts';

export const metadata: Metadata = {
  title: 'Alfin Ilham Maulidi | Portfolio',
  description: "Alfin's personal portfolio website.",
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
