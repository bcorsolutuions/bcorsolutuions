'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, FileText, Users, BarChart2, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function ProjectsPage() {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'Project Management',
      subtitle: 'Deliver projects on time and within scope with comprehensive project management tools',
      cards: [
        {
          title: 'Project Planning',
          description: 'Plan and track project timelines',
          items: ['Timeline management', 'Milestone tracking', 'Resource allocation']
        },
        {
          title: 'Task Management',
          description: 'Organize and assign project tasks',
          items: ['Task assignment', 'Progress tracking', 'Priority management']
        },
        {
          title: 'Team Collaboration',
          description: 'Enable team communication',
          items: ['Team messaging', 'File sharing', 'Role management']
        },
        {
          title: 'Project Analytics',
          description: 'Track project performance',
          items: ['Progress reports', 'Resource utilization', 'Cost tracking']
        },
        {
          title: 'Risk Management',
          description: 'Identify and mitigate risks',
          items: ['Risk assessment', 'Issue tracking', 'Mitigation planning']
        },
        {
          title: 'Quality Assurance',
          description: 'Ensure project quality',
          items: ['Quality metrics', 'Review processes', 'Compliance checks']
        }
      ]
    },
    ar: {
      title: 'إدارة المشاريع',
      subtitle: 'تسليم المشاريع في الوقت المحدد وضمن النطاق المحدد مع أدوات إدارة المشاريع الشاملة',
      cards: [
        {
          title: 'تخطيط المشاريع',
          description: 'تخطيط وتتبع الجداول الزمنية للمشاريع',
          items: ['إدارة الجداول الزمنية', 'تتبع المراحل الرئيسية', 'تخصيص الموارد']
        },
        {
          title: 'إدارة المهام',
          description: 'تنظيم وتوزيع مهام المشروع',
          items: ['توزيع المهام', 'تتبع التقدم', 'إدارة الأولويات']
        },
        {
          title: 'تعاون الفريق',
          description: 'تمكين التواصل بين أعضاء الفريق',
          items: ['مراسلة الفريق', 'مشاركة الملفات', 'إدارة الأدوار']
        },
        {
          title: 'تحليلات المشاريع',
          description: 'تتبع أداء المشاريع',
          items: ['تقارير التقدم', 'استخدام الموارد', 'تتبع التكاليف']
        },
        {
          title: 'إدارة المخاطر',
          description: 'تحديد المخاطر والتخفيف منها',
          items: ['تقييم المخاطر', 'تتبع المشكلات', 'تخطيط التخفيف']
        },
        {
          title: 'ضمان الجودة',
          description: 'ضمان جودة المشروع',
          items: ['مقاييس الجودة', 'عمليات المراجعة', 'فحوصات الامتثال']
        }
      ]
    }
  };

  const c = content[language];

  const cardIcons = [
    <Clock className="h-8 w-8 text-blue-600 mb-2" />,
    <FileText className="h-8 w-8 text-green-600 mb-2" />,
    <Users className="h-8 w-8 text-purple-600 mb-2" />,
    <BarChart2 className="h-8 w-8 text-orange-600 mb-2" />,
    <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />,
    <CheckCircle2 className="h-8 w-8 text-teal-600 mb-2" />
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
