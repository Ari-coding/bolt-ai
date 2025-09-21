'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  Database, 
  Server, 
  ShoppingCart, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle 
} from 'lucide-react';

const services = [
  {
    key: 'web_development',
    icon: Globe,
    features: ['Next.js 14', 'TypeScript', 'SSR/SSG', 'تحسين الصور', 'تحسين الأداء'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    key: 'saas_dashboards',
    icon: Database,
    features: ['مصادقة آمنة', 'أدوار مستخدمين', 'جداول تفاعلية', 'تقارير', 'إشعارات'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    key: 'backend_systems',
    icon: Server,
    features: ['REST APIs', 'GraphQL', 'قواعد البيانات', 'Webhooks', 'تكاملات خارجية'],
    color: 'from-green-500 to-teal-500'
  },
  {
    key: 'ecommerce',
    icon: ShoppingCart,
    features: ['سلة التسوق', 'بوابات الدفع', 'إدارة المنتجات', 'تتبع الطلبات', 'تقارير المبيعات'],
    color: 'from-orange-500 to-red-500'
  }
];

export function ServicesSection() {
  const t = useTranslations('services');
  const locale = useLocale();

  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <Tabs defaultValue={services[0].key} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {services.map((service) => (
              <TabsTrigger key={service.key} value={service.key} className="text-sm">
                {t(`${service.key}.title`)}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <TabsContent key={service.key} value={service.key} className="mt-8">
                <Card className="border-none shadow-lg">
                  <CardHeader className="text-center pb-8">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl mb-4">
                      {t(`${service.key}.title`)}
                    </CardTitle>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      {t(`${service.key}.description`)}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 p-3 rounded-lg bg-muted/50">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <Button asChild size="lg" className="px-8">
                        <Link href={`/${locale}/contact?service=${service.key}`}>
                          {t('get_quote')}
                          <ArrowIcon className="h-5 w-5 mr-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}