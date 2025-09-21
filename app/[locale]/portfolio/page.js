import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export default function PortfolioPage() {
  const projects = [
    {
      title: 'منصة التجارة الإلكترونية',
      description: 'متجر إلكتروني شامل مع نظام إدارة المنتجات وبوابات الدفع المتعددة',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
      technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      results: ['زيادة 150% في المبيعات', 'تحسن 40% في تجربة المستخدم'],
      category: 'ecommerce'
    },
    {
      title: 'لوحة تحكم إدارية',
      description: 'نظام إدارة شامل للشركات مع تقارير تفاعلية وإدارة المستخدمين',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      results: ['تحسن 60% في الإنتاجية', 'توفير 8 ساعات يومياً'],
      category: 'dashboard'
    },
    {
      title: 'تطبيق حجز المواعيد',
      description: 'منصة لحجز المواعيد الطبية مع إشعارات تلقائية وإدارة التقويم',
      image: 'https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Twilio'],
      results: ['تقليل 70% من المكالمات', 'رضا 95% من المرضى'],
      category: 'web'
    },
    {
      title: 'منصة التعلم الإلكتروني',
      description: 'موقع تعليمي تفاعلي مع فيديوهات، امتحانات، وشهادات معتمدة',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
      technologies: ['Next.js', 'Firebase', 'Vimeo API', 'PWA'],
      results: ['20,000+ طالب مسجل', 'معدل إكمال 85%'],
      category: 'education'
    },
    {
      title: 'نظام إدارة المخازن',
      description: 'حل متكامل لإدارة المخازن مع تتبع المخزون والتقارير المالية',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      technologies: ['Vue.js', 'Express', 'MySQL', 'Redis'],
      results: ['تقليل 50% من الأخطاء', 'زيادة 30% في الكفاءة'],
      category: 'system'
    },
    {
      title: 'موقع شركة الاستشارات',
      description: 'موقع احترافي مع نظام إدارة المحتوى وحجز الاستشارات',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
      technologies: ['Next.js', 'Sanity CMS', 'Vercel', 'Analytics'],
      results: ['زيادة 200% في الزيارات', 'تحسن SEO بنسبة 80%'],
      category: 'corporate'
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
                  أعمالنا المميزة
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  مجموعة من المشاريع الناجحة التي طورناها لعملائنا باستخدام أحدث التقنيات
                </p>
              </div>
            </div>
          </section>

          {/* Portfolio Grid */}
          <section className="py-24">
            <div className="container px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium mb-2">التقنيات المستخدمة:</p>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium mb-2 text-green-600">النتائج:</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {project.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button size="sm" variant="outline" className="flex-1">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          عرض المشروع
                        </Button>
                        <Button size="sm" variant="outline">
                          <Github className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CTA Section */}
              <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  هل أنت مستعد لبدء مشروعك؟
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  دعنا نساعدك في تحويل فكرتك إلى واقع رقمي ناجح مثل هذه المشاريع
                </p>
                <Button asChild size="lg" className="px-8">
                  <Link href="/ar/contact">
                    ابدأ مشروعك الآن
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}