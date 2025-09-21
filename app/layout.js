import './globals.css';
import { Inter } from 'next/font/google';
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'وكالة البرمجيات الاحترافية | تطوير مواقع وتطبيقات',
  description: 'وكالة متخصصة في تطوير المواقع والتطبيقات باستخدام Next.js وأحدث التقنيات',
  keywords: 'تطوير مواقع, برمجة تطبيقات, Next.js, React, تطوير ويب',
};

export default async function RootLayout({ children }) {
  // Redirect to default locale
  redirect('/ar');
}