import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { ValuesSection } from '@/components/sections/values';
import { ServicesSection } from '@/components/sections/services';
import { ThemeProvider } from '@/components/theme-provider';

export default function HomePage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ValuesSection />
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}