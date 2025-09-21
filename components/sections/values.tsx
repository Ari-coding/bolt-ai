'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Shield, Layers, Sparkles } from 'lucide-react';

const values = [
  {
    key: 'performance',
    icon: Zap,
    color: 'text-blue-600 dark:text-blue-400'
  },
  {
    key: 'security',
    icon: Shield,
    color: 'text-green-600 dark:text-green-400'
  },
  {
    key: 'scalability',
    icon: Layers,
    color: 'text-purple-600 dark:text-purple-400'
  },
  {
    key: 'experience',
    icon: Sparkles,
    color: 'text-orange-600 dark:text-orange-400'
  }
];

export function ValuesSection() {
  const t = useTranslations('values');

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            لماذا تختارنا؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نحن نقدم حلولاً تقنية متميزة تركز على النتائج والقيمة المضافة لعملائنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={value.key} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`h-8 w-8 ${value.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {t(`${value.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {t(`${value.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}