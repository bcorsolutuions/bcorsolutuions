"use client";

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, ShoppingCart, CreditCard, BarChart } from "lucide-react";

export default function POSSolutionPage() {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'Point of Sale Solutions',
      subtitle: 'Transform your retail operations with our comprehensive POS system designed for modern businesses.',
      requestDemo: 'Request a Demo',
      cards: [
        {
          title: 'Intuitive Interface',
          description: 'User-friendly touchscreen interface that minimizes training time and maximizes efficiency.'
        },
        {
          title: 'Inventory Management',
          description: 'Real-time tracking and automated reordering to keep your stock levels optimized.'
        },
        {
          title: 'Payment Processing',
          description: 'Secure, fast payment processing supporting multiple payment methods and currencies.'
        },
        {
          title: 'Analytics & Reporting',
          description: 'Detailed insights into sales, inventory, and customer behavior to drive better decisions.'
        }
      ]
    },
    ar: {
      title: 'حلول نقاط البيع',
      subtitle: 'حوّل عمليات البيع بالتجزئة لديك مع نظام نقاط البيع الشامل المصمم للشركات الحديثة.',
      requestDemo: 'طلب عرض توضيحي',
      cards: [
        {
          title: 'واجهة سهلة الاستخدام',
          description: 'واجهة شاشة لمس سهلة الاستخدام تقلل وقت التدريب وتزيد الكفاءة إلى أقصى حد.'
        },
        {
          title: 'إدارة المخزون',
          description: 'تتبع في الوقت الفعلي وإعادة طلب آلية للحفاظ على مستويات مخزونك محسّنة.'
        },
        {
          title: 'معالجة المدفوعات',
          description: 'معالجة مدفوعات آمنة وسريعة تدعم طرق دفع وعملات متعددة.'
        },
        {
          title: 'التحليلات والتقارير',
          description: 'رؤى تفصيلية حول المبيعات والمخزون وسلوك العملاء لاتخاذ قرارات أفضل.'
        }
      ]
    }
  };

  const c = content[language];

  const cardIcons = [
    <Monitor className="h-12 w-12 text-primary mb-4" />,
    <ShoppingCart className="h-12 w-12 text-primary mb-4" />,
    <CreditCard className="h-12 w-12 text-primary mb-4" />,
    <BarChart className="h-12 w-12 text-primary mb-4" />
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className={cn(
          "text-4xl font-bold text-gray-900 dark:text-white mb-6",
          isRTL && "font-cairo text-right"
        )}>
          {c.title}
        </h1>

        <p className={cn(
          "text-lg text-gray-600 dark:text-gray-300 mb-12",
          isRTL && "font-cairo text-right"
        )}>
          {c.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {c.cards.map((card, i) => (
            <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
              <div className={cn(isRTL && "flex justify-end")}>{cardIcons[i]}</div>
              <h3 className={cn(
                "text-xl font-semibold mb-2 text-gray-900 dark:text-white",
                isRTL && "font-cairo text-right"
              )}>
                {card.title}
              </h3>
              <p className={cn(
                "text-gray-600 dark:text-gray-300",
                isRTL && "font-cairo text-right"
              )}>
                {card.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className={cn("bg-primary text-white hover:bg-primary/90", isRTL && "font-cairo")}>
            {c.requestDemo}
          </Button>
        </div>
      </div>
    </div>
  );
}
