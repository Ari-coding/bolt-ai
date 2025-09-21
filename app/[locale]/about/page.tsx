import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'رؤيتنا',
      description: 'أن نكون الوكالة الرائدة في تطوير البرمجيات الحديثة في المنطقة'
    },
    {
      icon: Lightbulb,
      title: 'رسالتنا',
      description: 'تمكين الشركات من النمو الرقمي من خلال حلول تقنية مبتكرة'
    },
    {
      icon: Award,
      title: 'قيمنا',
      description: 'الجودة، الابتكار، الشفافية، والالتزام بمواعيد التسليم'
    },
    {
      icon: Users,
      title: 'فريقنا',
      description: 'مطورون خبراء ومصممون محترفون يعملون معاً لإنجاح مشروعك'
    }
  ];

  const team = [
    {
      name: 'أحمد محمد',
      role: 'مطور Full Stack',
      skills: ['Next.js', 'Node.js', 'PostgreSQL'],
    },
    {
      name: 'فاطمة علي',
      role: 'مصممة UI/UX',
      skills: ['Figma', 'Adobe XD', 'User Research'],
    },
    {
      name: 'محمد حسن',
      role: 'مطور Backend',
      skills: ['Node.js', 'Python', 'AWS'],
    },
    {
      name: 'سارة أحمد',
      role: 'مديرة المشاريع',
      skills: ['Agile', 'Scrum', 'Team Leadership'],
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
                  من نحن
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  وكالة برمجيات متخصصة في تطوير الحلول الرقمية المتقدمة. نحن نؤمن بقوة التكنولوجيا في تحويل الأفكار إلى واقع رقمي ناجح يحقق النمو المستدام لعملائنا.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-24">
            <div className="container px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  قيمنا ومبادئنا
                </h2>
                <p className="text-xl text-muted-foreground">
                  المبادئ التي توجه عملنا وتحدد هويتنا المهنية
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="py-24 bg-muted/30">
            <div className="container px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  منهجية العمل
                </h2>
                <p className="text-xl text-muted-foreground">
                  خطوات واضحة ومجربة لضمان نجاح مشروعك
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {[
                  { title: 'الاكتشاف', description: 'فهم احتياجاتك وأهدافك' },
                  { title: 'التخطيط', description: 'وضع استراتيجية شاملة' },
                  { title: 'التصميم', description: 'تصميم واجهات جذابة ومتجاوبة' },
                  { title: 'التطوير', description: 'بناء الحل بأفضل التقنيات' },
                  { title: 'التشغيل', description: 'إطلاق ودعم مستمر' }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-24">
            <div className="container px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  فريق العمل
                </h2>
                <p className="text-xl text-muted-foreground">
                  خبراء متخصصون في أحدث التقنيات
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <Card key={index} className="text-center border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary mb-4">{member.role}</p>
                      <div className="flex flex-wrap justify-center gap-1">
                        {member.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}