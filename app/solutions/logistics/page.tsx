"use client";

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Package, BarChart3, Clock } from "lucide-react";

export default function LogisticsSolutionPage() {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'Logistics Management Solution',
      subtitle: 'Streamline your logistics operations with our comprehensive management solution. From fleet management to warehouse optimization, we help you deliver excellence at every step.',
      requestDemo: 'Request Demo',
      cards: [
        {
          title: 'Fleet Management',
          description: 'Track and optimize your vehicle fleet with real-time monitoring and maintenance scheduling.'
        },
        {
          title: 'Warehouse Operations',
          description: 'Manage inventory, optimize storage, and streamline picking and packing processes.'
        },
        {
          title: 'Analytics & Reporting',
          description: 'Make data-driven decisions with comprehensive analytics and customizable reports.'
        },
        {
          title: 'Route Optimization',
          description: 'Reduce delivery times and costs with intelligent route planning and optimization.'
        }
      ]
    },
    ar: {
      title: 'حل إدارة الخدمات اللوجستية',
      subtitle: 'تبسيط عملياتك اللوجستية مع حل الإدارة الشامل لدينا. من إدارة الأسطول إلى تحسين المستودعات، نساعدك على تقديم التميز في كل خطوة.',
      requestDemo: 'طلب عرض توضيحي',
      cards: [
        {
          title: 'إدارة الأسطول',
          description: 'تتبع وتحسين أسطولك من المركبات مع المراقبة في الوقت الفعلي وجدولة الصيانة.'
        },
        {
          title: 'عمليات المستودع',
          description: 'إدارة المخزون وتحسين التخزين وتبسيط عمليات الاختيار والتعبئة.'
        },
        {
          title: 'التحليلات والتقارير',
          description: 'اتخاذ قرارات مستندة إلى البيانات مع تحليلات شاملة وتقارير قابلة للتخصيص.'
        },
        {
          title: 'تحسين المسارات',
          description: 'تقليل أوقات التوصيل والتكاليف مع تخطيط المسارات الذكي وتحسينها.'
        }
      ]
    }
  };

  const c = content[language];

  const cardIcons = [
    <Truck className="h-12 w-12 text-primary mb-4" />,
    <Package className="h-12 w-12 text-primary mb-4" />,
    <BarChart3 className="h-12 w-12 text-primary mb-4" />,
    <Clock className="h-12 w-12 text-primary mb-4" />
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 px-4 py-12">
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
            <Card key={i} className="p-6">
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
          <Button size="lg" className={cn("px-8", isRTL && "font-cairo")}>
            {c.requestDemo}
          </Button>
        </div>
      </div>
    </div>
  );
}
