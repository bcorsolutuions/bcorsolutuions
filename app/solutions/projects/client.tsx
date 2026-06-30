"use client";

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Clock, Users, Building2 } from "lucide-react";
import { ScheduleDemoModal } from '@/components/ui/schedule-demo-modal';

export default function ProjectsSolutionPage() {
  const { language, isRTL } = useLanguage();
  const [demoOpen, setDemoOpen] = useState(false);

  const content = {
    en: {
      title: 'Project Management Solutions',
      subtitle: 'Streamline your project operations with our comprehensive project management solution designed for modern businesses.',
      learnMore: 'Learn more',
      ctaTitle: 'Enterprise-Grade Project Management',
      ctaBody: 'Our project management solution is built to handle complex enterprise projects while maintaining simplicity and ease of use. From resource planning to budget tracking, we provide all the tools you need to deliver successful projects.',
      scheduleDemo: 'Schedule a Demo',
      cards: [
        {
          title: 'Project Planning',
          description: 'Comprehensive tools for project planning, scheduling, and resource allocation.'
        },
        {
          title: 'Time Tracking',
          description: 'Monitor project timelines and team productivity with advanced time tracking features.'
        },
        {
          title: 'Team Collaboration',
          description: 'Enhanced tools for team communication and collaboration across projects.'
        }
      ]
    },
    ar: {
      title: 'حلول إدارة المشاريع',
      subtitle: 'تبسيط عمليات مشاريعك مع حل إدارة المشاريع الشامل المصمم للشركات الحديثة.',
      learnMore: 'اكتشف المزيد',
      ctaTitle: 'إدارة مشاريع على مستوى المؤسسات',
      ctaBody: 'حل إدارة المشاريع لدينا مبني للتعامل مع مشاريع المؤسسات المعقدة مع الحفاظ على البساطة وسهولة الاستخدام. من تخطيط الموارد إلى تتبع الميزانية، نوفر جميع الأدوات التي تحتاجها لتسليم مشاريع ناجحة.',
      scheduleDemo: 'جدولة عرض توضيحي',
      cards: [
        {
          title: 'تخطيط المشاريع',
          description: 'أدوات شاملة لتخطيط المشاريع وجدولتها وتخصيص الموارد.'
        },
        {
          title: 'تتبع الوقت',
          description: 'مراقبة الجداول الزمنية للمشاريع وإنتاجية الفريق مع ميزات تتبع الوقت المتقدمة.'
        },
        {
          title: 'تعاون الفريق',
          description: 'أدوات محسّنة للتواصل والتعاون بين أعضاء الفريق عبر المشاريع المختلفة.'
        }
      ]
    }
  };

  const c = content[language];

  const cardIcons = [
    <Briefcase className="h-8 w-8 text-primary" />,
    <Clock className="h-8 w-8 text-primary" />,
    <Users className="h-8 w-8 text-primary" />
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16 px-4">
      <div className="container mx-auto">
      <div className={cn("max-w-3xl mx-auto text-center mb-16", isRTL && "font-cairo")}>
        <h1 className={cn(
          "text-4xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white",
          isRTL && "font-cairo"
        )}>
          {c.title}
        </h1>
        <p className={cn(
          "text-lg text-muted-foreground",
          isRTL && "font-cairo"
        )}>
          {c.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {c.cards.map((card, i) => (
          <Card key={i} className="p-6">
            <div className={cn("mb-4", isRTL && "flex justify-end")}>
              {cardIcons[i]}
            </div>
            <h3 className={cn(
              "text-xl font-semibold mb-2 text-gray-900 dark:text-white",
              isRTL && "font-cairo text-right"
            )}>
              {card.title}
            </h3>
            <p className={cn(
              "text-muted-foreground mb-4",
              isRTL && "font-cairo text-right"
            )}>
              {card.description}
            </p>
            <Button
              variant="link"
              onClick={() => setDemoOpen(true)}
              className={cn("group p-0 text-[#D5A849] hover:text-[#c49842]", isRTL && "font-cairo flex-row-reverse")}
            >
              {c.learnMore}
              <ArrowRight className={cn("h-4 w-4 group-hover:translate-x-1 transition-transform", isRTL ? "mr-2 rotate-180" : "ml-2")} />
            </Button>
          </Card>
        ))}
      </div>

      <div className="bg-muted rounded-lg p-8">
        <div className="max-w-4xl mx-auto">
          <div className={cn("flex items-start gap-6", isRTL && "flex-row-reverse")}>
            <Building2 className="h-12 w-12 text-primary flex-shrink-0" />
            <div>
              <h2 className={cn(
                "text-2xl font-semibold mb-4 text-gray-900 dark:text-white",
                isRTL && "font-cairo text-right"
              )}>
                {c.ctaTitle}
              </h2>
              <p className={cn(
                "text-muted-foreground mb-6",
                isRTL && "font-cairo text-right"
              )}>
                {c.ctaBody}
              </p>
              <Button
                onClick={() => setDemoOpen(true)}
                className={cn(
                  'bg-gradient-to-r from-[#D5A849] to-[#f59e0b] hover:from-[#c49842] hover:to-[#e08e00] text-white border-0 font-semibold',
                  isRTL && "font-cairo flex-row-reverse"
                )}
              >
                {c.scheduleDemo}
                <ArrowRight className={cn("h-4 w-4", isRTL ? "mr-2 rotate-180" : "ml-2")} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ScheduleDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
      </div>
    </div>
  );
}
