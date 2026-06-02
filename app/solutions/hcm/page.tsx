"use client";

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Brain, Clock, LineChart, Shield, Workflow } from "lucide-react";
import { ScheduleDemoModal } from '@/components/ui/schedule-demo-modal';

export default function HCMSolutionPage() {
  const { language, isRTL } = useLanguage();
  const [demoOpen, setDemoOpen] = useState(false);

  const content = {
    en: {
      title: 'Human Capital Management Solution',
      subtitle: 'Transform your HR operations with our comprehensive HCM solution. Streamline workforce management and enhance employee experience.',
      scheduleDemo: 'Schedule Demo',
      learnMore: 'Learn More',
      ctaTitle: 'Ready to transform your HR operations?',
      ctaSubtitle: 'Get started with our HCM solution today and see the difference.',
      contactSales: 'Contact Sales',
      features: [
        {
          title: 'Employee Management',
          description: 'Comprehensive employee data management, from onboarding to offboarding.'
        },
        {
          title: 'Talent Development',
          description: 'Track and manage employee training, skills, and career development paths.'
        },
        {
          title: 'Time & Attendance',
          description: 'Advanced time tracking with flexible scheduling and leave management.'
        },
        {
          title: 'Performance Management',
          description: 'Set and track KPIs, conduct reviews, and measure employee performance.'
        },
        {
          title: 'Compliance Management',
          description: 'Stay compliant with labor laws and internal policies automatically.'
        },
        {
          title: 'Workflow Automation',
          description: 'Streamline HR processes with automated workflows and approvals.'
        }
      ]
    },
    ar: {
      title: 'حل إدارة رأس المال البشري',
      subtitle: 'حوّل عمليات الموارد البشرية لديك مع حل إدارة رأس المال البشري الشامل من بي كور. تبسيط إدارة القوى العاملة وتعزيز تجربة الموظفين.',
      scheduleDemo: 'جدولة عرض توضيحي',
      learnMore: 'اكتشف المزيد',
      ctaTitle: 'هل أنت مستعد لتحويل عمليات الموارد البشرية لديك؟',
      ctaSubtitle: 'ابدأ مع حل إدارة رأس المال البشري اليوم ولاحظ الفرق.',
      contactSales: 'تواصل مع المبيعات',
      features: [
        {
          title: 'إدارة الموظفين',
          description: 'إدارة شاملة لبيانات الموظفين، من الإلحاق إلى إنهاء الخدمة.'
        },
        {
          title: 'تطوير المواهب',
          description: 'تتبع وإدارة تدريب الموظفين ومهاراتهم ومسارات التطوير الوظيفي.'
        },
        {
          title: 'الوقت والحضور',
          description: 'تتبع متقدم للوقت مع جدولة مرنة وإدارة الإجازات.'
        },
        {
          title: 'إدارة الأداء',
          description: 'تحديد وتتبع مؤشرات الأداء الرئيسية وإجراء المراجعات وقياس أداء الموظفين.'
        },
        {
          title: 'إدارة الامتثال',
          description: 'البقاء ممتثلاً لقوانين العمل والسياسات الداخلية تلقائياً.'
        },
        {
          title: 'أتمتة سير العمل',
          description: 'تبسيط عمليات الموارد البشرية من خلال سير العمل الآلي والموافقات.'
        }
      ]
    }
  };

  const c = content[language];

  const featureIcons = [
    <Users className="h-6 w-6 text-primary" />,
    <Brain className="h-6 w-6 text-primary" />,
    <Clock className="h-6 w-6 text-primary" />,
    <LineChart className="h-6 w-6 text-primary" />,
    <Shield className="h-6 w-6 text-primary" />,
    <Workflow className="h-6 w-6 text-primary" />
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 px-4 py-16">
      <div className="container mx-auto">
      <div className={cn("text-center mb-16", isRTL && "font-cairo")}>
        <h1 className={cn(
          "text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white",
          isRTL && "font-cairo"
        )}>
          {c.title}
        </h1>
        <p className={cn(
          "text-xl text-muted-foreground max-w-2xl mx-auto mb-8",
          isRTL && "font-cairo"
        )}>
          {c.subtitle}
        </p>
        <Button
          size="lg"
          onClick={() => setDemoOpen(true)}
          className={cn('mr-4 bg-gradient-to-r from-[#D5A849] to-[#f59e0b] hover:from-[#c49842] hover:to-[#e08e00] text-white border-0 font-semibold', isRTL && 'font-cairo ml-4 mr-0')}
        >
          {c.scheduleDemo}
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => setDemoOpen(true)}
          className={cn(isRTL && 'font-cairo')}
        >
          {c.learnMore}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {c.features.map((feature, index) => (
          <Card key={index} className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className={cn("mb-4", isRTL && "flex justify-end")}>{featureIcons[index]}</div>
              <CardTitle className={cn(isRTL && "font-cairo text-right")}>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className={cn(isRTL && "font-cairo text-right")}>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-primary/5 border-none">
        <CardContent className={cn(
          "flex flex-col md:flex-row items-center justify-between p-8",
          isRTL && "md:flex-row-reverse"
        )}>
          <div className="mb-6 md:mb-0">
            <h3 className={cn(
              "text-2xl font-bold mb-2 text-gray-900 dark:text-white",
              isRTL && "font-cairo text-right"
            )}>
              {c.ctaTitle}
            </h3>
            <p className={cn("text-muted-foreground", isRTL && "font-cairo text-right")}>
              {c.ctaSubtitle}
            </p>
          </div>
          <Button size="lg" className="min-w-[200px]">
            {c.contactSales}
          </Button>
        </CardContent>
      </Card>

      <ScheduleDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
      </div>
    </div>
  );
}
