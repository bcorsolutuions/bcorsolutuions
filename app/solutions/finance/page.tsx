'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "@/lib/motion";
import { Wallet, ChartBar, Globe, FileText, BarChart } from "lucide-react";

export default function FinancePage() {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'BCor Finance',
      subtitle: 'Empower Your Financial Backbone',
      description: 'BCor Finance is a comprehensive financial management suite designed to bring accuracy, visibility, and control to your organization\'s financial operations. From core accounting to advanced reporting, BCor Finance helps streamline financial processes, enforce compliance, and support strategic decision-making.',
      cards: [
        {
          title: 'General Ledger & Accounts',
          body: 'Comprehensive management of accounts payable and receivable with integrated ledger system.'
        },
        {
          title: 'Budgeting and Forecasting',
          body: 'Advanced tools for financial planning, budgeting, and future projections.'
        },
        {
          title: 'Multi-Currency Support',
          body: 'Handle transactions in multiple currencies with automated exchange rate management.'
        },
        {
          title: 'Compliance Reporting',
          body: 'Generate compliant financial reports and statements with ease.'
        },
        {
          title: 'Real-Time Dashboards',
          body: 'Monitor key financial KPIs and metrics in real-time with interactive dashboards.'
        }
      ]
    },
    ar: {
      title: 'بي كور للمالية',
      subtitle: 'تعزيز عمودك المالي الفقري',
      description: 'بي كور للمالية هي مجموعة متكاملة لإدارة الشؤون المالية، مصممة لتوفير الدقة والرؤية والتحكم في العمليات المالية لمؤسستك. من المحاسبة الأساسية إلى التقارير المتقدمة، تساعد بي كور للمالية على تبسيط العمليات المالية وتطبيق الامتثال ودعم اتخاذ القرارات الاستراتيجية.',
      cards: [
        {
          title: 'دفتر الأستاذ العام والحسابات',
          body: 'إدارة شاملة للحسابات الدائنة والمدينة مع نظام دفتر الأستاذ المتكامل.'
        },
        {
          title: 'الموازنة والتنبؤ',
          body: 'أدوات متقدمة للتخطيط المالي وإعداد الموازنات والتوقعات المستقبلية.'
        },
        {
          title: 'دعم العملات المتعددة',
          body: 'معالجة المعاملات بعملات متعددة مع إدارة آلية لأسعار الصرف.'
        },
        {
          title: 'التقارير الامتثالية',
          body: 'إنشاء تقارير وبيانات مالية متوافقة مع المعايير بسهولة.'
        },
        {
          title: 'لوحات المعلومات الآنية',
          body: 'مراقبة مؤشرات الأداء المالي الرئيسية والمقاييس في الوقت الفعلي من خلال لوحات تفاعلية.'
        }
      ]
    }
  };

  const c = content[language];

  const cardIcons = [
    <Wallet className="h-8 w-8 text-blue-600 mb-2" />,
    <ChartBar className="h-8 w-8 text-green-600 mb-2" />,
    <Globe className="h-8 w-8 text-purple-600 mb-2" />,
    <FileText className="h-8 w-8 text-orange-600 mb-2" />,
    <BarChart className="h-8 w-8 text-red-600 mb-2" />
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4">
      <div className="container mx-auto">
      <motion.div
        className="max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={cn(
          "text-4xl font-bold mb-4 text-gray-900 dark:text-white",
          isRTL && "font-cairo text-right"
        )}>
          {c.title}
        </h1>
        <p className={cn(
          "text-xl text-gray-600 dark:text-gray-300 mb-6",
          isRTL && "font-cairo text-right"
        )}>
          {c.subtitle}
        </p>
        <p className={cn(
          "text-gray-600 dark:text-gray-300",
          isRTL && "font-cairo text-right"
        )}>
          {c.description}
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {c.cards.map((card, i) => (
          <Card key={i}>
            <CardHeader>
              {cardIcons[i]}
              <CardTitle className={cn(isRTL && "font-cairo text-right")}>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={cn("text-gray-600 dark:text-gray-300", isRTL && "font-cairo text-right")}>
                {card.body}
              </p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
      </div>
    </div>
  );
}
