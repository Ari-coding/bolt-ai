'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const navT = useTranslations('nav');
  const servicesT = useTranslations('services');
  const locale = useLocale();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">وكالة البرمجيات</h3>
            <p className="text-sm text-muted-foreground">
              {t('description')}
            </p>
            <div className="flex space-x-3 rtl:space-x-reverse">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t('quick_links')}</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href={`/${locale}/about`} className="text-muted-foreground hover:text-primary transition-colors">
                {navT('about')}
              </Link>
              <Link href={`/${locale}/portfolio`} className="text-muted-foreground hover:text-primary transition-colors">
                {navT('portfolio')}
              </Link>
              <Link href={`/${locale}/blog`} className="text-muted-foreground hover:text-primary transition-colors">
                {navT('blog')}
              </Link>
              <Link href={`/${locale}/careers`} className="text-muted-foreground hover:text-primary transition-colors">
                {navT('careers')}
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t('services_links')}</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href={`/${locale}/services`} className="text-muted-foreground hover:text-primary transition-colors">
                {servicesT('web_development.title')}
              </Link>
              <Link href={`/${locale}/services`} className="text-muted-foreground hover:text-primary transition-colors">
                {servicesT('saas_dashboards.title')}
              </Link>
              <Link href={`/${locale}/services`} className="text-muted-foreground hover:text-primary transition-colors">
                {servicesT('backend_systems.title')}
              </Link>
              <Link href={`/${locale}/services`} className="text-muted-foreground hover:text-primary transition-colors">
                {servicesT('ecommerce.title')}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t('contact_info')}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@agency.com</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Phone className="h-4 w-4 text-primary" />
                <span>+964 750 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{locale === 'ar' ? 'بغداد، العراق' : 'Baghdad, Iraq'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            {currentYear} وكالة البرمجيات - {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}