"use client";

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDollarSign, Building2, BarChart3, FileSpreadsheet } from "lucide-react";
import { ScheduleDemoModal } from '@/components/ui/schedule-demo-modal';

export default function FixedAssetSolution() {
  const { language, isRTL } = useLanguage();
  const [demoOpen, setDemoOpen] = useState(false);

  const content = {
    en: {
      title: 'Fixed Asset Management Solution',
      subtitle: 'Comprehensive fixed asset lifecycle management for optimal resource utilization and compliance',
      requestDemo: 'Request Demo',
      learnMore: 'Learn More',
      cards: [
        {
          title: 'Asset Tracking & Valuation',
          description: 'Maintain detailed records of all fixed assets with accurate valuation and depreciation calculations',
          items: [
            'Automated depreciation calculations using multiple methods',
            'Real-time asset valuation and reporting',
            'Barcode/RFID integration for asset tracking',
            'Historical cost and maintenance records'
          ]
        },
        {
          title: 'Maintenance Management',
          description: 'Schedule and track maintenance activities to extend asset life and prevent downtime',
          items: [
            'Preventive maintenance scheduling',
            'Work order management',
            'Maintenance cost tracking',
            'Service history documentation'
          ]
        },
        {
          title: 'Analytics & Reporting',
          description: 'Gain insights into asset performance and make data-driven decisions',
          items: [
            'Customizable dashboards and reports',
            'Asset utilization metrics',
            'Maintenance cost analysis',
            'Compliance and audit reporting'
          ]
        }
      ]
    },
    ar: {
      title: 'حل إدارة الأصول الثابتة',
      subtitle: 'إدارة شاملة لدورة حياة الأصول الثابتة لتحقيق أمثل استخدام للموارد والامتثال التنظيمي',
      requestDemo: 'طلب عرض توضيحي',
      learnMore: 'اكتشف المزيد',
      cards: [
        {
          title: 'تتبع الأصول والتقييم',
          description: 'الحفاظ على سجلات مفصلة لجميع الأصول الثابتة مع حسابات دقيقة للتقييم والاستهلاك',
          items: [
            'حسابات استهلاك آلية باستخدام طرق متعددة',
            'تقييم الأصول وإعداد التقارير في الوقت الفعلي',
            'تكامل الباركود وRFID لتتبع الأصول',
            'سجلات التكلفة التاريخية والصيانة'
          ]
        },
        {
          title: 'إدارة الصيانة',
          description: 'جدولة وتتبع أنشطة الصيانة لإطالة عمر الأصول ومنع التوقف عن العمل',
          items: [
            'جدولة الصيانة الوقائية',
            'إدارة أوامر العمل',
            'تتبع تكاليف الصيانة',
            'توثيق سجل الخدمة'
          ]
        },
        {
          title: 'التحليلات والتقارير',
          description: 'الحصول على رؤى حول أداء الأصول واتخاذ قرارات مستندة إلى البيانات',
          items: [
            'لوحات معلومات وتقارير قابلة للتخصيص',
            'مقاييس استخدام الأصول',
            'تحليل تكاليف الصيانة',
            'تقارير الامتثال والتدقيق'
          ]
        }
      ]
    }
  };

  const c = content[language];

  const cardIcons = [
    <CircleDollarSign className="h-6 w-6" />,
    <Building2 className="h-6 w-6" />,
    <BarChart3 className="h-6 w-6" />
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className={cn(
          "text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white",
          isRTL && "font-cairo text-right"
        )}>
          {c.title}
        </h1>
        <p className={cn(
          "text-lg text-muted-foreground mb-8",
          isRTL && "font-cairo text-right"
        )}>
          {c.subtitle}
        </p>

        <div className="grid gap-8 mb-12">
          {c.cards.map((card, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className={cn("flex items-center gap-2", isRTL && "font-cairo flex-row-reverse")}>
                  {cardIcons[i]}
                  {card.title}
                </CardTitle>
                <CardDescription className={cn(isRTL && "font-cairo text-right")}>
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className={cn("list-disc list-inside space-y-2 text-muted-foreground", isRTL && "font-cairo text-right")}>
                  {card.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={cn("flex justify-center gap-4", isRTL && "flex-row-reverse")}>
          <Button
            size="lg"
            onClick={() => setDemoOpen(true)}
            className={cn('bg-gradient-to-r from-[#D5A849] to-[#f59e0b] hover:from-[#c49842] hover:to-[#e08e00] text-white border-0 font-semibold', isRTL && "font-cairo")}
          >
            {c.requestDemo}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => setDemoOpen(true)}
            className={cn(isRTL && "font-cairo")}
          >
            {c.learnMore}
          </Button>
        </div>
      </div>

      <ScheduleDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </main>
  );
}
