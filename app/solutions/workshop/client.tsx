"use client";

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { Card } from "@/components/ui/card";
import { Wrench } from "lucide-react";

export default function WorkshopSolution() {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'Workshop Management Solution',
      cards: [
        {
          title: 'Work Order Management',
          description: 'Efficiently manage and track work orders, from creation to completion, with our comprehensive workflow system.'
        },
        {
          title: 'Inventory Control',
          description: 'Keep track of spare parts, tools, and equipment with real-time inventory management and automated reordering.'
        },
        {
          title: 'Labor Tracking',
          description: 'Monitor technician productivity, track labor hours, and optimize workforce scheduling for maximum efficiency.'
        },
        {
          title: 'Equipment Maintenance',
          description: 'Schedule and track preventive maintenance tasks, manage equipment lifecycle, and reduce downtime.'
        },
        {
          title: 'Cost Tracking',
          description: 'Monitor repair costs, labor expenses, and parts usage to optimize workshop operations and profitability.'
        },
        {
          title: 'Reporting & Analytics',
          description: 'Generate detailed reports on workshop performance, maintenance history, and key performance indicators.'
        }
      ]
    },
    ar: {
      title: 'حل إدارة الورشة',
      cards: [
        {
          title: 'إدارة أوامر العمل',
          description: 'إدارة وتتبع أوامر العمل بكفاءة، من الإنشاء إلى الإتمام، مع نظام سير العمل الشامل لدينا.'
        },
        {
          title: 'التحكم في المخزون',
          description: 'تتبع قطع الغيار والأدوات والمعدات مع إدارة المخزون في الوقت الفعلي وإعادة الطلب الآلية.'
        },
        {
          title: 'تتبع العمالة',
          description: 'مراقبة إنتاجية الفنيين وتتبع ساعات العمل وتحسين جدولة القوى العاملة لتحقيق أقصى كفاءة.'
        },
        {
          title: 'صيانة المعدات',
          description: 'جدولة وتتبع مهام الصيانة الوقائية وإدارة دورة حياة المعدات وتقليل وقت التوقف عن العمل.'
        },
        {
          title: 'تتبع التكاليف',
          description: 'مراقبة تكاليف الإصلاح ومصاريف العمالة واستخدام القطع لتحسين عمليات الورشة والربحية.'
        },
        {
          title: 'التقارير والتحليلات',
          description: 'إنشاء تقارير مفصلة عن أداء الورشة وتاريخ الصيانة ومؤشرات الأداء الرئيسية.'
        }
      ]
    }
  };

  const c = content[language];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 px-4 py-12">
      <div className="container mx-auto">
      <div className={cn("flex items-center gap-3 mb-8", isRTL && "flex-row-reverse")}>
        <Wrench className="h-8 w-8 text-primary flex-shrink-0" />
        <h1 className={cn(
          "text-4xl font-bold text-gray-900 dark:text-white",
          isRTL && "font-cairo"
        )}>
          {c.title}
        </h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {c.cards.map((card, i) => (
          <Card key={i} className="p-6">
            <h3 className={cn(
              "text-xl font-semibold mb-4 text-gray-900 dark:text-white",
              isRTL && "font-cairo text-right"
            )}>
              {card.title}
            </h3>
            <p className={cn(
              "text-muted-foreground",
              isRTL && "font-cairo text-right"
            )}>
              {card.description}
            </p>
          </Card>
        ))}
      </div>
      </div>
    </div>
  );
}
