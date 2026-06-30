"use client";

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Home, Key, LineChart } from "lucide-react";

export default function PropertyPage() {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'Property Management',
      stats: [
        { label: 'Total Properties', note: '+4 from last month', value: '245' },
        { label: 'Occupancy Rate', note: '+2.1% from last month', value: '92%' },
        { label: 'Active Leases', note: '+12 from last month', value: '189' },
        { label: 'Revenue', note: '+12.5% from last month', value: '$284,392' }
      ],
      overviewTitle: 'Property Overview',
      overviewDescription: 'Manage your properties, tenants, and maintenance requests',
      recentActivities: 'Recent Activities',
      activities: [
        'New lease signed for Property #123',
        'Maintenance request completed at Property #456',
        'Rent payment received for Property #789'
      ],
      financialTitle: 'Financial Summary',
      financialDescription: 'Track your property-related income and expenses',
      monthlyOverview: 'Monthly Overview',
      financials: [
        'Total Revenue: $284,392',
        'Operating Expenses: $98,745',
        'Net Operating Income: $185,647'
      ]
    },
    ar: {
      title: 'إدارة العقارات',
      stats: [
        { label: 'إجمالي العقارات', note: '+4 مقارنةً بالشهر الماضي', value: '245' },
        { label: 'معدل الإشغال', note: '+2.1% مقارنةً بالشهر الماضي', value: '92%' },
        { label: 'عقود الإيجار النشطة', note: '+12 مقارنةً بالشهر الماضي', value: '189' },
        { label: 'الإيرادات', note: '+12.5% مقارنةً بالشهر الماضي', value: '284,392$' }
      ],
      overviewTitle: 'نظرة عامة على العقارات',
      overviewDescription: 'إدارة العقارات والمستأجرين وطلبات الصيانة',
      recentActivities: 'الأنشطة الأخيرة',
      activities: [
        'توقيع عقد إيجار جديد للعقار رقم 123',
        'إتمام طلب الصيانة في العقار رقم 456',
        'استلام دفعة إيجار للعقار رقم 789'
      ],
      financialTitle: 'الملخص المالي',
      financialDescription: 'تتبع الإيرادات والمصروفات المتعلقة بالعقارات',
      monthlyOverview: 'النظرة الشهرية',
      financials: [
        'إجمالي الإيرادات: 284,392$',
        'المصروفات التشغيلية: 98,745$',
        'صافي الدخل التشغيلي: 185,647$'
      ]
    }
  };

  const c = content[language];

  const statIcons = [
    <Building2 className="h-4 w-4 text-muted-foreground" />,
    <Home className="h-4 w-4 text-muted-foreground" />,
    <Key className="h-4 w-4 text-muted-foreground" />,
    <LineChart className="h-4 w-4 text-muted-foreground" />
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto py-8 px-4 md:px-6 space-y-8">
      <div className={cn("flex justify-between items-center", isRTL && "flex-row-reverse")}>
        <h1 className={cn(
          "text-4xl font-bold tracking-tight text-gray-900 dark:text-white",
          isRTL && "font-cairo"
        )}>
          {c.title}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {c.stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className={cn(
              "flex flex-row items-center justify-between space-y-0 pb-2",
              isRTL && "flex-row-reverse"
            )}>
              <CardTitle className={cn("text-sm font-medium", isRTL && "font-cairo")}>
                {stat.label}
              </CardTitle>
              {statIcons[i]}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={cn("text-xs text-muted-foreground", isRTL && "font-cairo text-right")}>
                {stat.note}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className={cn(isRTL && "font-cairo text-right")}>{c.overviewTitle}</CardTitle>
            <CardDescription className={cn(isRTL && "font-cairo text-right")}>
              {c.overviewDescription}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className={cn("font-semibold", isRTL && "font-cairo text-right")}>{c.recentActivities}</h3>
              <ul className="space-y-2">
                {c.activities.map((activity, i) => (
                  <li key={i} className={cn("text-sm text-muted-foreground", isRTL && "font-cairo text-right")}>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className={cn(isRTL && "font-cairo text-right")}>{c.financialTitle}</CardTitle>
            <CardDescription className={cn(isRTL && "font-cairo text-right")}>
              {c.financialDescription}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className={cn("font-semibold", isRTL && "font-cairo text-right")}>{c.monthlyOverview}</h3>
              <ul className="space-y-2">
                {c.financials.map((item, i) => (
                  <li key={i} className={cn("text-sm text-muted-foreground", isRTL && "font-cairo text-right")}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
    </div>
  );
}
