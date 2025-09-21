'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, Globe, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const navigation = [
  { name: 'home', href: '/' },
  { name: 'services', href: '/services' },
  { name: 'portfolio', href: '/portfolio' },
  { name: 'about', href: '/about' },
  { name: 'blog', href: '/blog' },
  { name: 'contact', href: '/contact' },
];

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    const path = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${newLocale}${path}`);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <Link href={`/${locale}`} className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">{{AgencyName}}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6 mx-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={`/${locale}${item.href}`}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {t(item.name as any)}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-2 md:space-x-4 mr-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="hidden sm:flex items-center space-x-1"
          >
            <Globe className="h-4 w-4" />
            <span>{locale === 'ar' ? 'EN' : 'ع'}</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="hidden sm:flex"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Button asChild className="hidden sm:inline-flex">
            <Link href={`/${locale}/contact`}>
              {locale === 'ar' ? 'اطلب عرض سعر' : 'Get Quote'}
            </Link>
          </Button>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side={locale === 'ar' ? 'left' : 'right'}>
              <div className="flex flex-col space-y-4 mt-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={`/${locale}${item.href}`}
                    className="text-sm font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(item.name as any)}
                  </Link>
                ))}
                <div className="flex items-center space-x-2 pt-4 border-t">
                  <Button variant="outline" size="sm" onClick={toggleLanguage}>
                    <Globe className="h-4 w-4 mr-1" />
                    {locale === 'ar' ? 'EN' : 'ع'}
                  </Button>
                  <Button variant="outline" size="sm" onClick={toggleTheme}>
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  </Button>
                </div>
                <Button asChild className="w-full">
                  <Link href={`/${locale}/contact`} onClick={() => setIsOpen(false)}>
                    {locale === 'ar' ? 'اطلب عرض سعر' : 'Get Quote'}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}