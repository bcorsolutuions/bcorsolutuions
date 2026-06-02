'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CircleUser, Building2, BarChart3, MessageSquare, Calendar, FileSpreadsheet, Settings2 } from "lucide-react";

export default function CRMSolution() {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      badge: 'Customer Relationship Management',
      title: 'Transform Your Customer Relationships',
      subtitle: 'Streamline customer interactions, boost engagement, and drive growth with our comprehensive CRM solution.',
      integrationTitle: 'Seamless Integration',
      integrationSubtitle: 'Our CRM solution integrates perfectly with your existing business tools and workflows.',
      ctaTitle: 'Ready to Transform Your Customer Relationships?',
      ctaSubtitle: 'Start managing your customer relationships more effectively today.',
      requestDemo: 'Request a Demo',
      features: [
        {
          title: 'Contact Management',
          description: 'Centralize customer data and maintain detailed contact profiles with complete interaction history.'
        },
        {
          title: 'Account Management',
          description: 'Track and manage business accounts, opportunities, and relationships effectively.'
        },
        {
          title: 'Sales Analytics',
          description: 'Gain insights into sales performance with detailed analytics and reporting tools.'
        },
        {
          title: 'Communication Tools',
          description: 'Integrated email, chat, and communication tracking to keep conversations organized.'
        },
        {
          title: 'Task Management',
          description: 'Schedule meetings, set reminders, and manage follow-ups efficiently.'
        },
        {
          title: 'Document Management',
          description: 'Store and manage customer-related documents, contracts, and files securely.'
        }
      ],
      integrationCards: [
        {
          title: 'Easy Configuration',
          description: 'Customize fields, workflows, and processes to match your business needs without complex coding.'
        },
        {
          title: 'Advanced Reporting',
          description: 'Generate detailed reports and dashboards to track performance metrics and customer insights.'
        }
      ]
    },
    ar: {
      badge: 'إدارة علاقات العملاء',
      title: 'حوّل علاقاتك مع العملاء',
      subtitle: 'تبسيط تفاعلات العملاء وتعزيز المشاركة ودفع النمو مع حل إدارة علاقات العملاء الشامل لدينا.',
      integrationTitle: 'تكامل سلس',
      integrationSubtitle: 'يتكامل حل إدارة علاقات العملاء لدينا بشكل مثالي مع أدوات العمل وسير العمل الحالية لديك.',
      ctaTitle: 'هل أنت مستعد لتحويل علاقاتك مع العملاء؟',
      ctaSubtitle: 'ابدأ في إدارة علاقات عملائك بشكل أكثر فعالية اليوم.',
      requestDemo: 'طلب عرض توضيحي',
      features: [
        {
          title: 'إدارة جهات الاتصال',
          description: 'مركزة بيانات العملاء والحفاظ على ملفات تعريف تفصيلية مع سجل تفاعل كامل.'
        },
        {
          title: 'إدارة الحسابات',
          description: 'تتبع وإدارة حسابات الأعمال والفرص والعلاقات بفعالية.'
        },
        {
          title: 'تحليلات المبيعات',
          description: 'الحصول على رؤى حول أداء المبيعات مع أدوات تحليل وإعداد تقارير مفصلة.'
        },
        {
          title: 'أدوات التواصل',
          description: 'تتبع متكامل للبريد الإلكتروني والمحادثة والتواصل لتنظيم المحادثات.'
        },
        {
          title: 'إدارة المهام',
          description: 'جدولة الاجتماعات وتعيين التذكيرات وإدارة المتابعات بكفاءة.'
        },
        {
          title: 'إدارة المستندات',
          description: 'تخزين وإدارة المستندات والعقود والملفات المتعلقة بالعملاء بأمان.'
        }
      ],
      integrationCards: [
        {
          title: 'إعداد سهل',
          description: 'تخصيص الحقول وسير العمل والعمليات لتناسب احتياجات عملك دون ترميز معقد.'
        },
        {
          title: 'تقارير متقدمة',
          description: 'إنشاء تقارير ولوحات معلومات مفصلة لتتبع مقاييس الأداء ورؤى العملاء.'
        }
      ]
    }
  };

  const c = content[language];

  const featureIcons = [
    <CircleUser className="h-12 w-12 mb-4 text-primary" />,
    <Building2 className="h-12 w-12 mb-4 text-primary" />,
    <BarChart3 className="h-12 w-12 mb-4 text-primary" />,
    <MessageSquare className="h-12 w-12 mb-4 text-primary" />,
    <Calendar className="h-12 w-12 mb-4 text-primary" />,
    <FileSpreadsheet className="h-12 w-12 mb-4 text-primary" />
  ];

  const integrationIcons = [
    <Settings2 className="h-8 w-8 mb-4 text-primary" />,
    <BarChart3 className="h-8 w-8 mb-4 text-primary" />
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 px-4 py-16">
      <div className="container mx-auto">
      <div className="text-center mb-16">
        <Badge className="mb-4" variant="secondary">{c.badge}</Badge>
        <h1 className={cn(
          "text-4xl font-bold mb-6 text-gray-900 dark:text-white",
          isRTL && "font-cairo"
        )}>
          {c.title}
        </h1>
        <p className={cn(
          "text-xl text-muted-foreground max-w-2xl mx-auto",
          isRTL && "font-cairo"
        )}>
          {c.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {c.features.map((feature, i) => (
          <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
            <div className={cn(isRTL && "flex justify-end")}>{featureIcons[i]}</div>
            <h3 className={cn(
              "text-xl font-semibold mb-2 text-gray-900 dark:text-white",
              isRTL && "font-cairo text-right"
            )}>
              {feature.title}
            </h3>
            <p className={cn(
              "text-muted-foreground",
              isRTL && "font-cairo text-right"
            )}>
              {feature.description}
            </p>
          </Card>
        ))}
      </div>

      <div className="bg-secondary/10 rounded-2xl p-8 mb-16">
        <div className="text-center mb-8">
          <h2 className={cn(
            "text-3xl font-bold mb-4 text-gray-900 dark:text-white",
            isRTL && "font-cairo"
          )}>
            {c.integrationTitle}
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground",
            isRTL && "font-cairo"
          )}>
            {c.integrationSubtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {c.integrationCards.map((card, i) => (
            <Card key={i} className="p-6">
              <div className={cn(isRTL && "flex justify-end")}>{integrationIcons[i]}</div>
              <h3 className={cn(
                "text-xl font-semibold mb-2 text-gray-900 dark:text-white",
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

      <div className="text-center">
        <h2 className={cn(
          "text-3xl font-bold mb-4 text-gray-900 dark:text-white",
          isRTL && "font-cairo"
        )}>
          {c.ctaTitle}
        </h2>
        <p className={cn(
          "text-lg text-muted-foreground mb-8",
          isRTL && "font-cairo"
        )}>
          {c.ctaSubtitle}
        </p>
        <button className={cn(
          "bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors",
          isRTL && "font-cairo"
        )}>
          {c.requestDemo}
        </button>
      </div>
      </div>
    </div>
  );
}
