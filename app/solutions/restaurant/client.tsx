'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import { ScheduleDemoModal } from '@/components/ui/schedule-demo-modal';
import {
  UtensilsCrossed,
  ChefHat,
  ClipboardList,
  Bike,
  Package,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  MonitorSmartphone,
} from 'lucide-react';

export default function RestaurantPage() {
  const { language, isRTL } = useLanguage();
  const [demoOpen, setDemoOpen] = useState(false);

  const content = {
    en: {
      badge: 'Powered by BCor ERP',
      title: 'BCor Restaurant',
      tagline: 'From Table to Kitchen to Cashier — All in One.',
      subtitle:
        'A complete restaurant management system built for restaurants, cafés, cloud kitchens, and multi-branch food businesses. Manage orders, kitchen flow, delivery, inventory, and financials from a single platform.',
      requestDemo: 'Request Demo',

      modulesTitle: 'Core Capabilities',
      modules: [
        {
          title: 'Table & Order Management',
          description:
            'Manage dine-in, takeaway, and drive-through from one screen. Assign tables, split bills, merge orders, and handle special requests — all tracked in real time by your team.',
        },
        {
          title: 'Kitchen Display System (KDS)',
          description:
            'Replace printed tickets with a live kitchen display. Orders appear instantly, priority items are highlighted, and prep times are tracked — faster service with fewer mistakes.',
        },
        {
          title: 'Menu & Pricing Management',
          description:
            'Build your menu with modifiers, combos, and timed pricing. Launch happy-hour deals, seasonal specials, or branch-specific items without touching the code — just the back office.',
        },
        {
          title: 'Delivery & Takeaway',
          description:
            'Manage delivery orders alongside dine-in from the same interface. Integrate with aggregators or run your own delivery fleet. Track order status from placement to doorstep.',
        },
        {
          title: 'Recipe & Ingredient Costing',
          description:
            'Define recipes per dish, track ingredient consumption automatically, and get notified when stock falls below par. Know your food cost percentage in real time — not at month end.',
        },
        {
          title: 'Sales Analytics & Branch Reporting',
          description:
            'Monitor revenue, covers, average check, and staff performance from one dashboard. Compare branches side by side and identify your best-sellers and slow-movers instantly.',
        },
      ],

      benefitsTitle: 'Why BCor Restaurant?',
      benefits: [
        'Faster order taking — fewer mistakes',
        'Live kitchen visibility across all stations',
        'Real-time food cost & recipe tracking',
        'Manage multiple branches from one account',
        'Built-in loyalty & discount management',
        'Integrated with Finance & HR & Payroll',
        'Delivery tracking & aggregator integration',
        'End-of-day cash reconciliation in seconds',
      ],

      integrationsTitle: 'Seamlessly Integrated With',
      integrations: [
        { label: 'Finance', icon: '💰' },
        { label: 'HR & Payroll', icon: '👥' },
        { label: 'Inventory', icon: '📦' },
        { label: 'POS', icon: '🖥️' },
      ],

      ctaTitle: 'Ready to Run a Smarter Restaurant?',
      ctaSubtitle:
        'Book a live demo of BCor Restaurant and see how it brings your front-of-house, kitchen, and back-office together.',
    },
    ar: {
      badge: 'مدعوم من بي كور ERP',
      title: 'بي كور للمطاعم',
      tagline: 'من الطاولة إلى المطبخ إلى الصندوق — كل شيء في واحد.',
      subtitle:
        'نظام إدارة مطاعم متكامل مصمم للمطاعم والمقاهي والمطابخ السحابية وسلاسل الأغذية متعددة الفروع. أدر الطلبات وتدفق المطبخ والتوصيل والمخزون والشؤون المالية من منصة واحدة.',
      requestDemo: 'طلب عرض توضيحي',

      modulesTitle: 'القدرات الأساسية',
      modules: [
        {
          title: 'إدارة الطاولات والطلبات',
          description:
            'أدر تناول الطعام في المطعم والوجبات الجاهزة والـDrive-through من شاشة واحدة. خصص الطاولات وقسّم الفواتير واجمع الطلبات وتعامل مع الطلبات الخاصة — كل شيء يتبعه فريقك فورياً.',
        },
        {
          title: 'نظام عرض المطبخ (KDS)',
          description:
            'استبدل التذاكر المطبوعة بشاشة مطبخ مباشرة. تظهر الطلبات فوراً وتُبرز الأصناف ذات الأولوية وتُتبع أوقات التحضير — خدمة أسرع وأخطاء أقل.',
        },
        {
          title: 'إدارة القائمة والأسعار',
          description:
            'ابنِ قائمتك مع الإضافات والوجبات المدمجة والأسعار الزمنية. أطلق عروض الساعة السعيدة أو الأصناف الموسمية أو العناصر الخاصة بكل فرع دون لمس الكود — فقط من الباك أوفيس.',
        },
        {
          title: 'التوصيل والوجبات الجاهزة',
          description:
            'أدر طلبات التوصيل جنباً إلى جنب مع الطعام في المطعم من نفس الواجهة. تكامل مع التطبيقات أو أدر أسطول توصيلك الخاص. تتبع حالة الطلب من اللحظة الأولى حتى الباب.',
        },
        {
          title: 'الوصفات وتكلفة المكونات',
          description:
            'حدد وصفات كل طبق وتتبع استهلاك المكونات تلقائياً واحصل على تنبيهات عند نفاد المخزون. اعرف نسبة تكلفة الطعام فورياً — لا تنتظر نهاية الشهر.',
        },
        {
          title: 'تحليلات المبيعات وتقارير الفروع',
          description:
            'راقب الإيرادات والأغطية ومتوسط الفاتورة وأداء الموظفين من لوحة تحكم واحدة. قارن الفروع جنباً إلى جنب وحدد الأصناف الأكثر مبيعاً والبطيئة فوراً.',
        },
      ],

      benefitsTitle: 'لماذا بي كور للمطاعم؟',
      benefits: [
        'أخذ الطلبات أسرع — أخطاء أقل',
        'رؤية فورية للمطبخ عبر جميع المحطات',
        'تتبع تكلفة الطعام والوصفات في الوقت الفعلي',
        'إدارة فروع متعددة من حساب واحد',
        'إدارة الولاء والخصومات المدمجة',
        'متكامل مع المالية والموارد البشرية والرواتب',
        'تتبع التوصيل والتكامل مع تطبيقات التوصيل',
        'تسوية نقدية في نهاية اليوم في ثوانٍ',
      ],

      integrationsTitle: 'تكامل سلس مع',
      integrations: [
        { label: 'المالية', icon: '💰' },
        { label: 'الموارد البشرية والرواتب', icon: '👥' },
        { label: 'المخزون', icon: '📦' },
        { label: 'نقاط البيع', icon: '🖥️' },
      ],

      ctaTitle: 'هل أنت مستعد لإدارة مطعم أكثر ذكاءً؟',
      ctaSubtitle:
        'احجز عرضاً حياً لبي كور للمطاعم وشاهد كيف يجمع بين الواجهة الأمامية والمطبخ والباك أوفيس.',
    },
  };

  const c = content[language];

  const moduleIcons = [
    <UtensilsCrossed className="h-7 w-7 text-[#D5A849]" />,
    <MonitorSmartphone className="h-7 w-7 text-[#D5A849]" />,
    <ClipboardList className="h-7 w-7 text-[#D5A849]" />,
    <Bike className="h-7 w-7 text-[#D5A849]" />,
    <Package className="h-7 w-7 text-[#D5A849]" />,
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
                <ChefHat className="h-4 w-4 flex-shrink-0" />
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
