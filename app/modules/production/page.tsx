"use client";

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Settings, Truck, Package, BarChart2, Clock } from "lucide-react";

export default function ProductionPage() {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'Production Management',
      subtitle: 'Streamline your manufacturing processes and optimize production efficiency',
      cards: [
        {
          title: 'Production Planning',
          description: 'Schedule and optimize production runs',
          items: ['Resource allocation', 'Capacity planning', 'Production scheduling']
        },
        {
          title: 'Quality Control',
          description: 'Maintain high product standards',
          items: ['Quality metrics', 'Inspection protocols', 'Defect tracking']
        },
        {
          title: 'Inventory Management',
          description: 'Track materials and finished goods',
          items: ['Stock levels', 'Warehouse management', 'Inventory optimization']
        },
        {
          title: 'Material Requirements',
          description: 'Manage raw materials and supplies',
          items: ['Material planning', 'Supplier management', 'Order tracking']
        },
        {
          title: 'Performance Analytics',
          description: 'Monitor production metrics',
          items: ['Efficiency metrics', 'Production reports', 'Cost analysis']
        },
        {
          title: 'Maintenance Schedule',
          description: 'Equipment upkeep and repairs',
          items: ['Preventive maintenance', 'Equipment tracking', 'Service history']
        }
      ]
    },
    ar: {
      title: 'إدارة الإنتاج',
      subtitle: 'تبسيط عمليات التصنيع وتحسين كفاءة الإنتاج',
      cards: [
        {
          title: 'تخطيط الإنتاج',
          description: 'جدولة دورات الإنتاج وتحسينها',
          items: ['تخصيص الموارد', 'تخطيط الطاقة الإنتاجية', 'جدولة الإنتاج']
        },
        {
          title: 'مراقبة الجودة',
          description: 'الحفاظ على معايير المنتج العالية',
          items: ['مقاييس الجودة', 'بروتوكولات الفحص', 'تتبع العيوب']
        },
        {
          title: 'إدارة المخزون',
          description: 'تتبع المواد والبضائع التامة الصنع',
          items: ['مستويات المخزون', 'إدارة المستودع', 'تحسين المخزون']
        },
        {
          title: 'متطلبات المواد',
          description: 'إدارة المواد الخام واللوازم',
          items: ['تخطيط المواد', 'إدارة الموردين', 'تتبع الطلبات']
        },
        {
          title: 'تحليلات الأداء',
          description: 'مراقبة مقاييس الإنتاج',
          items: ['مقاييس الكفاءة', 'تقارير الإنتاج', 'تحليل التكاليف']
        },
        {
          title: 'جدول الصيانة',
          description: 'صيانة المعدات وإصلاحها',
          items: ['الصيانة الوقائية', 'تتبع المعدات', 'سجل الخدمة']
        }
      ]
    }
  };

  const c = content[language];

  const cardIcons = [
    <Factory className="h-8 w-8 text-blue-600 mb-2" />,
    <Settings className="h-8 w-8 text-green-600 mb-2" />,
    <Truck className="h-8 w-8 text-purple-600 mb-2" />,
    <Package className="h-8 w-8 text-orange-600 mb-2" />,
    <BarChart2 className="h-8 w-8 text-red-600 mb-2" />,
    <Clock className="h-8 w-8 text-teal-600 mb-2" />
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
