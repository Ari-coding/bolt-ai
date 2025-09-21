import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const articles = [
    {
      title: 'دليل شامل لتطوير مواقع الويب باستخدام Next.js 14',
      excerpt: 'اكتشف أحدث ميزات Next.js 14 وكيفية استخدامها لبناء مواقع ويب سريعة وقابلة للتطوير',
      readTime: '8 دقائق',
      date: '2024-01-15',
      category: 'تطوير الويب',
      tags: ['Next.js', 'React', 'TypeScript'],
      image: 'https://images.pexels.com/photos/11035544/pexels-photo-11035544.jpeg',
      slug: 'nextjs-14-guide'
    },
    {
      title: 'أفضل الممارسات في تصميم واجهات المستخدم العربية',
      excerpt: 'نصائح وإرشادات لتصميم واجهات مستخدم حديثة ومتجاوبة تدعم اللغة العربية بشكل مثالي',
      readTime: '6 دقائق',
      date: '2024-01-10',
      category: 'UI/UX',
      tags: ['تصميم', 'RTL', 'تجربة المستخدم'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      slug: 'arabic-ui-design'
    },
    {
      title: 'بناء تطبيقات SaaS قابلة للتطوير',
      excerpt: 'استراتيجيات وتقنيات لتطوير تطبيقات SaaS قوية قادرة على التعامل مع آلاف المستخدمين',
      readTime: '12 دقيقة',
      date: '2024-01-05',
      category: 'SaaS',
      tags: ['Node.js', 'PostgreSQL', 'Architecture'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      slug: 'scalable-saas-apps'
    },
    {
      title: 'تحسين أداء مواقع الويب: دليل شامل للمطورين',
      excerpt: 'تقنيات متقدمة لتحسين سرعة وأداء مواقع الويب وتحقيق نتائج ممتازة في Core Web Vitals',
      readTime: '10 دقائق',
      date: '2024-01-01',
      category: 'الأداء',
      tags: ['Performance', 'SEO', 'Web Vitals'],
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
      slug: 'web-performance-optimization'
    },
    {
      title: 'الأمان في تطبيقات الويب: ما يجب أن يعرفه كل مطور',
      excerpt: 'المخاطر الأمنية الشائعة وكيفية حماية تطبيقات الويب من الثغرات والهجمات الإلكترونية',
      readTime: '15 دقيقة',
      date: '2023-12-28',
      category: 'الأمان',
      tags: ['Security', 'OWASP', 'Best Practices'],
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
      slug: 'web-security-guide'
    },
    {
      title: 'التجارة الإلكترونية في 2024: اتجاهات وتقنيات',
      excerpt: 'أحدث اتجاهات التجارة الإلكترونية والتقنيات المستخدمة في بناء متاجر إلكترونية ناجحة',
      readTime: '7 دقائق',
      date: '2023-12-25',
      category: 'التجارة الإلكترونية',
      tags: ['E-commerce', 'Trends', 'Payment'],
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
      slug: 'ecommerce-trends-2024'
    }
  ];

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  مدونة التقنية
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  أحدث المقالات والنصائح في عالم تطوير البرمجيات والتقنيات الحديثة
                </p>
              </div>
            </div>
          </section>

          {/* Featured Article */}
          <section className="py-16">
            <div className="container px-4">
              <div className="mb-8">
                <Badge className="mb-4">مقال مميز</Badge>
                <Card className="overflow-hidden border-none shadow-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="aspect-video lg:aspect-auto">
                      <img 
                        src={articles[0].image} 
                        alt={articles[0].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <Badge variant="outline">{articles[0].category}</Badge>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(articles[0].date).toLocaleDateString('ar-SA')}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {articles[0].readTime}
                          </div>
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                          {articles[0].title}
                        </h2>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {articles[0].excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {articles[0].tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button asChild className="w-fit">
                          <Link href={`/ar/blog/${articles[0].slug}`}>
                            اقرأ المقال كاملاً
                            <ArrowLeft className="h-4 w-4 mr-2" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="py-16">
            <div className="container px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">
                أحدث المقالات
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.slice(1).map((article, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(article.date).toLocaleDateString('ar-SA')}
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight line-clamp-2">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/ar/blog/${article.slug}`}>
                            اقرأ المزيد
                            <ArrowLeft className="h-3 w-3 mr-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-24 bg-muted/30">
            <div className="container px-4">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">
                  اشترك في النشرة التقنية
                </h2>
                <p className="text-muted-foreground mb-8">
                  احصل على أحدث المقالات والنصائح التقنية مباشرة في بريدك الإلكتروني
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="بريدك الإلكتروني"
                    className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
                  />
                  <Button>اشترك الآن</Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}