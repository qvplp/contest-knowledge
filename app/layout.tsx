import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LayoutContent from '@/components/LayoutContent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AnimeHub - AIアニメ創作コミュニティ',
  description: 'AIを活用したアニメ・イラスト創作コミュニティ。コンテスト参加、攻略記事、作品投稿など。',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-gray-950 text-white overflow-x-hidden max-w-full`}>
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
