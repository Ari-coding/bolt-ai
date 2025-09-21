'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

export function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();

  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          {/* Trust Badge */}
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <Star className="h-4 w-4 fill-current" />
                <span>{t('trusted_by')}</span>
              </div>
            </Badge>
          </div>

          {/* Main Headlines */}
          <div className="space-y-6 animate-fade-in-up animate-delay-200">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-400">
            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <Link href={`/${locale}/contact`}>
                {t('cta_primary')}
                <ArrowIcon className="h-5 w-5 mr-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg">
              <Link href={`/${locale}/services`}>
                {t('cta_secondary')}
              </Link>
            </Button>
          </div>

          {/* Trust Logos Placeholder */}
          <div className="pt-16 animate-fade-in-up animate-delay-400">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-center">
                  <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center text-sm text-muted-foreground">
                    {locale === 'ar' ? `شريك ${i}` : `Partner ${i}`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"></div>
      </div>
    </section>
  );
}