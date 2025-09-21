'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'الاسم يجب أن يكون أكثر من حرفين'),
  email: z.string().email('البريد الإلكتروني غير صحيح'),
  phone: z.string().optional(),
  service: z.string().min(1, 'يرجى اختيار نوع الخدمة'),
  budget: z.string().min(1, 'يرجى تحديد الميزانية'),
  message: z.string().min(10, 'الرسالة يجب أن تكون أكثر من 10 أحرف'),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const t = useTranslations('contact');
  const servicesT = useTranslations('services');
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your API
      console.log('Form submitted:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form on successful submission
      form.reset();
      
      // You could show a success toast here
      alert(locale === 'ar' ? 'تم إرسال الرسالة بنجاح!' : 'Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(locale === 'ar' ? 'حدث خطأ أثناء إرسال الرسالة' : 'Error sending message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { value: 'web_development', label: servicesT('web_development.title') },
    { value: 'saas_dashboards', label: servicesT('saas_dashboards.title') },
    { value: 'backend_systems', label: servicesT('backend_systems.title') },
    { value: 'ecommerce', label: servicesT('ecommerce.title') },
  ];

  const budgets = [
    { value: '1000-5000', label: locale === 'ar' ? '1000-5000 دولار' : '$1000-$5000' },
    { value: '5000-10000', label: locale === 'ar' ? '5000-10000 دولار' : '$5000-$10000' },
    { value: '10000-25000', label: locale === 'ar' ? '10000-25000 دولار' : '$10000-$25000' },
    { value: '25000+', label: locale === 'ar' ? '25000+ دولار' : '$25000+' },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('form.name')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('form.name')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('form.email')}</FormLabel>
                <FormControl>
                  <Input type="email" placeholder={t('form.email')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('form.phone')}</FormLabel>
              <FormControl>
                <Input type="tel" placeholder={t('form.phone')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('form.service')}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t('form.service')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('form.budget')}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t('form.budget')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {budgets.map((budget) => (
                      <SelectItem key={budget.value} value={budget.value}>
                        {budget.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('form.message')}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t('form.message')}
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              {locale === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
            </div>
          ) : (
            <div className="flex items-center">
              <Send className="h-4 w-4 mr-2" />
              {t('form.submit')}
            </div>
          )}
        </Button>
      </form>
    </Form>
  );
}