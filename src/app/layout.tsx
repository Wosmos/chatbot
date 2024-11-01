import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chat Assistant',
  description: 'Chat with any website content',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.className} bg-blue-400/20  dark:border-neutral-800 dark:bg-zinc-800/30 `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
