'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import { ScheduleDemoModal } from '@/components/ui/schedule-demo-modal';
import {
  Truck,
  MapPin,
  ShoppingCart,
  Smartphone,
  BarChart3,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  Package,
  CreditCard,
} from 'lucide-react';

export default function VanSalesPage() {
  const { language, isRTL } = useLanguage();
  const [demoOpen, setDemoOpen] = useState(false);

  const content = {
    en: {
      badge: 'Powered by BCor ERP',
      title: 'BCor Van Sales',
      tagline: 'Mobilize Your Sales. Sell Anywhere. Collect Instantly.',
      subtitle:
        'Equip your sales reps with a complete mobile ERP — route planning, on-van inventory, invoicing, and payment collection all working seamlessly in the field.',
      requestDemo: 'Request Demo',

      modulesTitle: 'Core Capabilities',
      modules: [
        {
          title: 'Route Planning & Visit Scheduling',
          description:
            'Plan daily routes, assign customers to reps, and track visits on a map. Ensure every outlet is covered efficiently — maximize calls per day while minimizing travel time.',
        },
        {
          title: 'Mobile Sales & Instant Invoicing',
          description:
            'Sales reps take orders and print or share invoices directly from their device. Browse the full catalogue, apply discounts, and confirm orders in seconds — no paperwork.',
        },
        {
          title: 'On-Van Inventory Management',
          description:
            'Load stock onto the van before departure and track every sale and return in real time. Know exactly what is on each van at any moment — no shortages, no overloading.',
        },
        {
          title: 'Payment Collection & Receipts',
          description:
            'Collect cash, cheque, or card payments on the spot and issue digital receipts instantly. All transactions sync to Finance automatically — zero manual entry at the end of the day.',
        },
        {
          title: 'Returns & Credit Notes',
          description:
            'Handle product returns and issue credit notes from the field without trips back to the office. Credits are reflected in the customer account in real time.',
        },
        {
          title: 'Real-Time Sync & Management Dashboards',
          description:
            'Every sale, collection, and visit syncs to HQ the moment connectivity is available. Managers see live sales totals, outstanding receivables, and rep performance from one dashboard.',
        },
      ],

      benefitsTitle: 'Why BCor Van Sales?',
      benefits: [
        'More sales calls per rep per day',
        'Zero paper — fully digital invoicing & receipts',
        'Real-time inventory on every van',
        'Instant payment posting — no end-of-day delays',
        'GPS visit verification for field managers',
        'Works offline — syncs when back online',
        'Integrated with Finance, Inventory & CRM',
        'Reduce van loading errors and stock discrepancies',
      ],

      integrationsTitle: 'Seamlessly Integrated With',
      integrations: [
        { label: 'Finance', icon: '💰' },
        { label: 'Inventory', icon: '📦' },
        { label: 'CRM', icon: '🤝' },
        { label: 'Trading', icon: '📊' },
      ],

      ctaTitle: 'Ready to Put Your Sales Team in the Fast Lane?',
      ctaSubtitle:
        'Get a live demo of BCor Van Sales and see how your field team can sell more, collect faster, and stay in sync.',
    },
    ar: {
      badge: 'مدعوم من بي كور ERP',
      title: 'بي كور للمبيعات المتنقلة',
      tagline: 'حرّك فريق مبيعاتك. بع في أي مكان. احصّل الدفعات فوراً.',
      subtitle:
        'زوّد مندوبي مبيعاتك بنظام ERP متكامل على الجوال — تخطيط المسارات ومخزون السيارة والفوترة وتحصيل المدفوعات، كل ذلك في الميدان.',
      requestDemo: 'طلب عرض توضيحي',

      modulesTitle: 'القدرات الأساسية',
      modules: [
        {
          title: 'تخطيط المسارات وجدولة الزيارات',
          description:
            'خطط للمسارات اليومية وخصص العملاء للمندوبين وتتبع الزيارات على الخريطة. تأكد من تغطية كل نقطة بيع بكفاءة — أكثر زيارات في يوم بأقل وقت تنقل.',
        },
        {
          title: 'المبيعات المتنقلة والفوترة الفورية',
          description:
            'يأخذ المندوبون الطلبات ويطبعون أو يشاركون الفواتير مباشرة من أجهزتهم. تصفح الكتالوج الكامل وطبّق الخصومات وأكّد الطلبات في ثوانٍ دون أوراق.',
        },
        {
          title: 'إدارة مخزون السيارة',
          description:
            'حمّل البضاعة على السيارة قبل الانطلاق وتتبع كل عملية بيع وإرجاع في الوقت الفعلي. اعرف بالضبط ما يوجد في كل سيارة في أي لحظة — لا نقص ولا تحميل زائد.',
        },
        {
          title: 'تحصيل المدفوعات والإيصالات',
          description:
            'احصّل المدفوعات نقداً أو بالشيك أو ببطاقة الائتمان في الموقع وأصدر إيصالات رقمية فوراً. تتزامن جميع المعاملات مع الحسابات تلقائياً — لا إدخال يدوي في نهاية اليوم.',
        },
        {
          title: 'المرتجعات وإشعارات الدائن',
          description:
            'تعامل مع مرتجعات المنتجات وأصدر إشعارات الدائن من الميدان دون العودة إلى المكتب. تنعكس الأرصدة فوراً في حساب العميل.',
        },
        {
          title: 'المزامنة الفورية ولوحات تحكم الإدارة',
          description:
            'تتزامن كل عملية بيع وتحصيل وزيارة مع المقر الرئيسي فور توفر الاتصال. يرى المديرون إجماليات المبيعات الحية والمستحقات وأداء المندوبين من لوحة تحكم واحدة.',
        },
      ],

      benefitsTitle: 'لماذا بي كور للمبيعات المتنقلة؟',
      benefits: [
        'مزيد من مكالمات المبيعات لكل مندوب يومياً',
        'بلا ورق — فوترة وإيصالات رقمية كاملة',
        'مخزون فوري لكل سيارة',
        'ترحيل فوري للمدفوعات — دون تأخير في نهاية اليوم',
        'التحقق من الزيارات بالـGPS للمدراء الميدانيين',
        'يعمل بلا إنترنت — يتزامن عند الاتصال',
        'متكامل مع المالية والمخزون وإدارة علاقات العملاء',
        'تقليل أخطاء تحميل السيارات وفوارق المخزون',
      ],

      integrationsTitle: 'تكامل سلس مع',
      integrations: [
        { label: 'المالية', icon: '💰' },
        { label: 'المخزون', icon: '📦' },
        { label: 'إدارة علاقات العملاء', icon: '🤝' },
        { label: 'التجارة', icon: '📊' },
      ],

      ctaTitle: 'هل أنت مستعد لتحريك فريق مبيعاتك بسرعة أكبر؟',
      ctaSubtitle:
        'احصل على عرض حي لبي كور للمبيعات المتنقلة وشاهد كيف يبيع فريقك أكثر ويحصّل أسرع ويبقى متزامناً.',
    },
  };

  const c = content[language];

  const moduleIcons = [
    <MapPin className="h-7 w-7 text-[#D5A849]" />,
    <ShoppingCart className="h-7 w-7 text-[#D5A849]" />,
    <Package className="h-7 w-7 text-[#D5A849]" />,
    <CreditCard className="h-7 w-7 text-[#D5A849]" />,
    <RefreshCw className="h-7 w-7 text-[#D5A849]" />,
    <BarChart3 className="h-7 w-7 text-[#D5A849]" />,
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
                <Truck className="h-4 w-4 flex-shrink-0" />
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
                  className={cn('bg-gradient-to-r from-[#D5A849] to-[#f59e0b] hover:from-[#c49842] hover:to-[#e08e00] text-white border-0 px-8 font-semibold shadow-lg', isRTL && 'font-cairo')}
                >
                  {c.requestDemo}
                  <ArrowRight className={cn('h-4 w-4', isRTL ? 'mr-2 rotate-180' : 'ml-2')} />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Core Capabilities ── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className={cn('text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white', isRTL && 'font-cairo')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {c.modulesTitle}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.modules.map((mod, i) => (
                <motion.div
                  key={i}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#D5A849]/10 flex items-center justify-center mb-4">
                    {moduleIcons[i]}
                  </div>
                  <h3 className={cn('text-lg font-semibold mb-2 text-gray-900 dark:text-white', isRTL && 'font-cairo text-right')}>
                    {mod.title}
                  </h3>
                  <p className={cn('text-gray-600 dark:text-gray-300 leading-relaxed text-sm', isRTL && 'font-cairo text-right')}>
                    {mod.description}
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {c.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  className={cn('flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4', isRTL && 'flex-row-reverse')}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-[#D5A849] flex-shrink-0 mt-0.5" />
                  <span className={cn('text-gray-200 leading-snug text-sm', isRTL && 'font-cairo text-right')}>
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
