import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ContactForm } from '@/components/forms/contact-form';
import { ThemeProvider } from '@/components/theme-provider';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-16">
          <div className="container px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t('title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">إرسال رسالة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* WhatsApp Card */}
                <Card className="border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-700 dark:text-green-300">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      تواصل فوري
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-600 dark:text-green-400 mb-4">
                      للحصول على رد سريع وتوضيحات فورية
                    </p>
                    <Button 
                      asChild 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <Link href="https://wa.me/964750123456" target="_blank">
                        {t('form.whatsapp')}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>معلومات التواصل</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">البريد الإلكتروني</p>
                        <p className="text-muted-foreground">{t('info.email')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">رقم الهاتف</p>
                        <p className="text-muted-foreground">{t('info.phone')}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">الموقع</p>
                        <p className="text-muted-foreground">{t('info.address')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle>أوقات العمل</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>الأحد - الخميس</span>
                      <span className="text-muted-foreground">9:00 ص - 6:00 م</span>
                    </div>
                    <div className="flex justify-between">
                      <span>الجمعة</span>
                      <span className="text-muted-foreground">مغلق</span>
                    </div>
                    <div className="flex justify-between">
                      <span>السبت</span>
                      <span className="text-muted-foreground">10:00 ص - 2:00 م</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}