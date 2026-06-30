'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Factory, BarChart2, ClipboardCheck, Settings, Clock } from "lucide-react";

export default function ReadyMixPage() {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'Ready Mix Concrete Management',
      subtitle: 'Comprehensive solution for concrete batching, delivery, and quality control',
      cards: [
        {
          title: 'Batching Control',
          description: 'Precise mixing and production management',
          items: ['Automated mix design', 'Real-time batch monitoring', 'Quality control checks']
        },
        {
          title: 'Fleet Management',
          description: 'Optimize delivery operations',
          items: ['GPS tracking', 'Route optimization', 'Delivery scheduling']
        },
        {
          title: 'Quality Assurance',
          description: 'Maintain product standards',
          items: ['Strength testing', 'Compliance monitoring', 'Quality reports']
        },
        {
          title: 'Analytics & Reporting',
          description: 'Data-driven insights',
          items: ['Production metrics', 'Cost analysis', 'Performance tracking']
        },
        {
          title: 'Plant Maintenance',
          description: 'Equipment upkeep management',
          items: ['Preventive maintenance', 'Equipment monitoring', 'Service scheduling']
        },
        {
          title: 'Resource Planning',
          description: 'Optimize resource allocation',
          items: ['Material inventory', 'Staff scheduling', 'Resource forecasting']
        }
      ]
    },
    ar: {
      title: 'إدارة الخرسانة الجاهزة',
      subtitle: 'حل شامل لعمليات خلط الخرسانة والتوصيل ومراقبة الجودة',
      cards: [
        {
          title: 'التحكم في عمليات الخلط',
          description: 'إدارة دقيقة للخلط والإنتاج',
          items: ['تصميم مزيج آلي', 'مراقبة الدُفعات في الوقت الفعلي', 'فحوصات مراقبة الجودة']
        },
        {
          title: 'إدارة الأسطول',
          description: 'تحسين عمليات التوصيل',
          items: ['تتبع GPS', 'تحسين المسارات', 'جدولة التوصيل']
        },
        {
          title: 'ضمان الجودة',
          description: 'الحفاظ على معايير المنتج',
          items: ['اختبار المقاومة', 'مراقبة الامتثال', 'تقارير الجودة']
        },
        {
          title: 'التحليلات والتقارير',
          description: 'رؤى مستندة إلى البيانات',
          items: ['مقاييس الإنتاج', 'تحليل التكاليف', 'تتبع الأداء']
        },
        {
          title: 'صيانة المصنع',
          description: 'إدارة صيانة المعدات',
          items: ['الصيانة الوقائية', 'مراقبة المعدات', 'جدولة الخدمة']
        },
        {
          title: 'تخطيط الموارد',
          description: 'تحسين تخصيص الموارد',
          items: ['مخزون المواد', 'جدولة الموظفين', 'التنبؤ بالموارد']
        }
      ]
    }
  };

  const c = content[language];

  const cardIcons = [
    <Factory className="h-8 w-8 text-[#D5A849] mb-2" />,
    <Truck className="h-8 w-8 text-[#D5A849] mb-2" />,
    <ClipboardCheck className="h-8 w-8 text-[#D5A849] mb-2" />,
    <BarChart2 className="h-8 w-8 text-[#D5A849] mb-2" />,
    <Settings className="h-8 w-8 text-[#D5A849] mb-2" />,
    <Clock className="h-8 w-8 text-[#D5A849] mb-2" />
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className={cn(
          "text-4xl font-bold text-gray-900 dark:text-white mb-4",
          isRTL && "font-cairo text-right"
        )}>
          {c.title}
        </h1>
        <p className={cn(
          "text-lg text-gray-600 dark:text-gray-300",
          isRTL && "font-cairo text-right"
        )}>
          {c.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {c.cards.map((card, i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              {cardIcons[i]}
              <CardTitle className={cn(isRTL && "font-cairo text-right")}>{card.title}</CardTitle>
              <CardDescription className={cn(isRTL && "font-cairo text-right")}>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className={cn("space-y-2 text-gray-600 dark:text-gray-300", isRTL && "font-cairo text-right")}>
                {card.items.map((item, j) => (
                  <li key={j}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
    </div>
  );
}
