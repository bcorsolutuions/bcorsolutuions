'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import { ScheduleDemoModal } from '@/components/ui/schedule-demo-modal';
import {
  HeartHandshake,
  Users,
  TrendingUp,
  Building2,
  GitBranch,
  Mail,
  Megaphone,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export default function CRMPage() {
  const { language, isRTL } = useLanguage();
  const [demoOpen, setDemoOpen] = useState(false);

  const content = {
    en: {
      badge: 'BCor CRM',
      title: 'Customer Relationship Management',
      tagline: 'Build Stronger Connections. Close More Deals.',
      subtitle:
        'BCor CRM gives your sales and marketing teams a single, unified platform to manage every customer interaction — from first contact to long-term loyalty.',
      requestDemo: 'Request Demo',

      featuresTitle: 'Core Features',
      features: [
        {
          title: 'Contact Management',
          description:
            'Maintain a rich, unified profile for every contact — interaction history, communication logs, documents, and notes, all in one place.',
        },
        {
          title: 'Lead & Opportunity Tracking',
          description:
            'Capture leads from any source, qualify them with custom scoring, and move opportunities through configurable sales stages.',
        },
        {
          title: 'Account Management',
          description:
            'Track business accounts, subsidiaries, and key stakeholders with full visibility into relationship health and deal history.',
        },
        {
          title: 'Sales Pipeline',
          description:
            'Visualize your entire pipeline — deal stages, weighted probabilities, and revenue forecasts — in a drag-and-drop board or list view.',
        },
        {
          title: 'Email & Communication Tracking',
          description:
            'Integrated email, call logs, and meeting notes auto-linked to the right contact or deal so no conversation is ever lost.',
        },
        {
          title: 'Campaign Management',
          description:
            'Plan, launch, and measure targeted marketing campaigns. Track opens, clicks, and conversions tied directly to revenue.',
        },
        {
          title: 'Analytics & Reporting',
          description:
            'Real-time dashboards for sales KPIs, win/loss rates, team performance, and revenue forecasting with drill-down capability.',
        },
        {
          title: 'Task & Activity Management',
          description:
            'Schedule follow-ups, set reminders, and assign activities to team members so no customer opportunity falls through the cracks.',
        },
      ],

      benefitsTitle: 'Why BCor CRM?',
      benefits: [
        '360° view of every customer relationship',
        'Shorter sales cycles with full pipeline visibility',
        'Higher conversion rates through lead scoring',
        'Improved team collaboration and accountability',
        'Data-driven decisions with real-time dashboards',
        'Seamlessly integrated with Finance, Trading & HCM',
      ],

      integrationsTitle: 'Integrated With',
      integrations: [
        { label: 'Finance', icon: '💰' },
        { label: 'Trading', icon: '🛒' },
        { label: 'HR & Payroll', icon: '👥' },
        { label: 'Inventory', icon: '📦' },
      ],

      ctaTitle: 'Ready to Grow Your Customer Relationships?',
      ctaSubtitle:
        'See how BCor CRM connects your sales, marketing, and service teams on one platform.',
    },
    ar: {
      badge: 'بي كور لإدارة علاقات العملاء',
      title: 'إدارة علاقات العملاء',
      tagline: 'بناء علاقات أقوى. إتمام المزيد من الصفقات.',
      subtitle:
        'يمنح بي كور CRM فرق المبيعات والتسويق لديك منصة موحدة واحدة لإدارة كل تفاعل مع العملاء — من أول اتصال إلى ولاء طويل الأمد.',
      requestDemo: 'طلب عرض توضيحي',

      featuresTitle: 'الميزات الأساسية',
      features: [
        {
          title: 'إدارة جهات الاتصال',
          description:
            'الحفاظ على ملف تعريف غني وموحد لكل جهة اتصال — سجل التفاعلات وسجلات التواصل والمستندات والملاحظات، كلها في مكان واحد.',
        },
        {
          title: 'تتبع العملاء المحتملين والفرص',
          description:
            'التقاط العملاء المحتملين من أي مصدر وتأهيلهم بتقييم مخصص ونقل الفرص عبر مراحل المبيعات القابلة للتهيئة.',
        },
        {
          title: 'إدارة الحسابات',
          description:
            'تتبع حسابات الأعمال والشركات التابعة وأصحاب المصلحة الرئيسيين مع رؤية كاملة لصحة العلاقة وتاريخ الصفقات.',
        },
        {
          title: 'مسار المبيعات',
          description:
            'تصور مسار المبيعات بالكامل — مراحل الصفقة والاحتمالات الموزونة وتوقعات الإيرادات — في لوح سحب وإفلات أو عرض قائمة.',
        },
        {
          title: 'تتبع البريد الإلكتروني والتواصل',
          description:
            'بريد إلكتروني متكامل وسجلات مكالمات وملاحظات اجتماعات مرتبطة تلقائياً بجهة الاتصال أو الصفقة الصحيحة حتى لا تضيع محادثة.',
        },
        {
          title: 'إدارة الحملات التسويقية',
          description:
            'تخطيط وإطلاق وقياس الحملات التسويقية المستهدفة. تتبع معدلات الفتح والنقر والتحويلات المرتبطة مباشرة بالإيرادات.',
        },
        {
          title: 'التحليلات والتقارير',
          description:
            'لوحات معلومات فورية لمؤشرات أداء المبيعات ومعدلات الفوز والخسارة وأداء الفريق وتوقعات الإيرادات مع إمكانية التعمق في البيانات.',
        },
        {
          title: 'إدارة المهام والأنشطة',
          description:
            'جدولة المتابعات وتعيين التذكيرات وتخصيص الأنشطة لأعضاء الفريق حتى لا تفوت أي فرصة مع العملاء.',
        },
      ],

      benefitsTitle: 'لماذا بي كور CRM؟',
      benefits: [
        'رؤية 360° لكل علاقة مع العملاء',
        'دورات مبيعات أقصر مع رؤية كاملة للمسار',
        'معدلات تحويل أعلى من خلال تقييم العملاء المحتملين',
        'تعاون وتوافق أفضل بين أعضاء الفريق',
        'قرارات مستندة إلى البيانات مع لوحات معلومات فورية',
        'تكامل سلس مع المالية والتجارة وإدارة الموارد البشرية',
      ],

      integrationsTitle: 'متكامل مع',
      integrations: [
        { label: 'المالية', icon: '💰' },
        { label: 'التجارة', icon: '🛒' },
        { label: 'الموارد البشرية والرواتب', icon: '👥' },
        { label: 'المخزون', icon: '📦' },
      ],

      ctaTitle: 'هل أنت مستعد لتنمية علاقاتك مع العملاء؟',
      ctaSubtitle:
        'اكتشف كيف يربط بي كور CRM فرق المبيعات والتسويق والخدمة على منصة واحدة.',
    },
  };

  const c = content[language];

  const featureIcons = [
    <Users className="h-7 w-7 text-[#D5A849]" />,
    <TrendingUp className="h-7 w-7 text-[#D5A849]" />,
    <Building2 className="h-7 w-7 text-[#D5A849]" />,
    <GitBranch className="h-7 w-7 text-[#D5A849]" />,
    <Mail className="h-7 w-7 text-[#D5A849]" />,
    <Megaphone className="h-7 w-7 text-[#D5A849]" />,
    <BarChart3 className="h-7 w-7 text-[#D5A849]" />,
    <CalendarCheck className="h-7 w-7 text-[#D5A849]" />,
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">

        {/* ── Hero ── */}
        <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f2744] py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-[#D5A849] rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              className={cn('max-w-3xl', isRTL ? 'mr-auto text-right font-cairo' : 'mx-auto text-center')}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 bg-[#D5A849]/20 border border-[#D5A849]/40 text-[#D5A849] rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <HeartHandshake className="h-4 w-4 flex-shrink-0" />
                {c.badge}
              </span>

              <h1 className={cn('text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4', isRTL && 'font-cairo')}>
                {c.title}
              </h1>
              <p className="text-xl md:text-2xl text-[#D5A849] font-semibold mb-6">
                {c.tagline}
              </p>
              <p className="text-lg text-gray-300 mb-10">
                {c.subtitle}
              </p>

              <div className={cn('flex justify-center', isRTL && 'justify-end')}>
                <Button
                  size="lg"
                  onClick={() => setDemoOpen(true)}
                  className={cn(
                    'bg-gradient-to-r from-[#D5A849] to-[#f59e0b] hover:from-[#c49842] hover:to-[#e08e00] text-white border-0 px-8 font-semibold shadow-lg',
                    isRTL && 'font-cairo'
                  )}
                >
                  {c.requestDemo}
                  <ArrowRight className={cn('h-4 w-4', isRTL ? 'mr-2 rotate-180' : 'ml-2')} />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Core Features ── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className={cn('text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white', isRTL && 'font-cairo')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {c.featuresTitle}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {c.features.map((feat, i) => (
                <motion.div
                  key={i}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <div className="w-13 h-13 rounded-xl bg-[#D5A849]/10 flex items-center justify-center mb-4 w-12 h-12">
                    {featureIcons[i]}
                  </div>
                  <h3 className={cn('text-lg font-semibold mb-2 text-gray-900 dark:text-white', isRTL && 'font-cairo text-right')}>
                    {feat.title}
                  </h3>
                  <p className={cn('text-sm text-gray-600 dark:text-gray-300 leading-relaxed', isRTL && 'font-cairo text-right')}>
                    {feat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="py-16 md:py-20 bg-[#0f172a]">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className={cn('text-3xl md:text-4xl font-bold text-center mb-12 text-white', isRTL && 'font-cairo')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {c.benefitsTitle}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {c.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  className={cn('flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-5', isRTL && 'flex-row-reverse')}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-[#D5A849] flex-shrink-0 mt-0.5" />
                  <span className={cn('text-gray-200 leading-snug', isRTL && 'font-cairo text-right')}>
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Integrations ── */}
        <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.h2
              className={cn('text-2xl md:text-3xl font-bold mb-10 text-gray-900 dark:text-white', isRTL && 'font-cairo')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {c.integrationsTitle}
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-4">
              {c.integrations.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <span>{item.icon}</span>
                  <span className={cn(isRTL && 'font-cairo')}>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-[#D5A849] to-[#f59e0b]">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className={cn('text-3xl md:text-4xl font-bold text-white mb-4', isRTL && 'font-cairo')}>
                {c.ctaTitle}
              </h2>
              <p className={cn('text-white/85 text-lg mb-8', isRTL && 'font-cairo')}>
                {c.ctaSubtitle}
              </p>
              <Button
                size="lg"
                onClick={() => setDemoOpen(true)}
                className={cn('bg-white text-[#D5A849] hover:bg-gray-100 border-0 px-8 font-semibold shadow-lg', isRTL && 'font-cairo')}
              >
                {c.requestDemo}
              </Button>
            </motion.div>
          </div>
        </section>
      </div>

      <ScheduleDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  );
}
