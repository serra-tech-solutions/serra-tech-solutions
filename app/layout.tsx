import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Serra Tech Solutions',
  description:
    'Focus on what you do best—running your business. We take care of the software development, ensuring seamless, efficient solutions that drive your success.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
