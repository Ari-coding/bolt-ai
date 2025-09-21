import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ServicesSection } from '@/components/sections/services';
import { ThemeProvider } from '@/components/theme-provider';
import { useTranslations } from 'next-intl';

export default function ServicesPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-16">
          <div className="container px-4 py-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                خدماتنا التقنية المتخصصة
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                نقدم مجموعة شاملة من الحلول البرمجية المتقدمة لتلبية احتياجات عملك الرقمي
              </p>
            </div>
          </div>
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}