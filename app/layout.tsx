import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'وكالة البرمجيات الاحترافية | تطوير مواقع وتطبيقات',
  description: 'وكالة متخصصة في تطوير المواقع والتطبيقات باستخدام Next.js وأحدث التقنيات',
  keywords: 'تطوير مواقع, برمجة تطبيقات, Next.js, React, تطوير ويب',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Redirect to default locale
  redirect('/ar');
}