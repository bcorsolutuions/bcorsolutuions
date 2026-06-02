'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import { ScheduleDemoModal } from '@/components/ui/schedule-demo-modal';
import {
  Warehouse,
  ScanLine,
  PackageCheck,
  ArrowDownToLine,
  LayoutGrid,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export default function WMSPage() {
  const { language, isRTL } = useLanguage();
  const [demoOpen, setDemoOpen] = useState(false);

  const content = {
    en: {
      badge: 'Powered by BCor ERP',
      title: 'BCor WMS',
      tagline: 'From Receiving to Dispatch — Total Warehouse Control.',
      subtitle:
        'A purpose-built Warehouse Management System that eliminates paper, reduces errors, and gives you real-time visibility over every bin, pallet, and shipment in your warehouse.',
      requestDemo: 'Request Demo',

      modulesTitle: 'Core Capabilities',
      modules: [
        {
          title: 'Goods Receiving & Put-Away',
          description:
            'Scan inbound shipments against purchase orders, validate quantities and conditions, and direct staff to the optimal bin location automatically — cutting receiving time and misplacement.',
        },
        {
          title: 'Bin & Location Management',
          description:
            'Define zones, aisles, racks, and bins. Assign items to locations by size, weight, or velocity. Keep high-movers near dispatch and slow-movers in deep storage — automatically.',
        },
        {
          title: 'Pick, Pack & Dispatch',
          description:
            'Generate optimized pick lists by zone or wave. Guide pickers via mobile device, verify with barcode scan, and pack into the right carton — all tracked to the shipment level.',
        },
        {
          title: 'Stock Counting & Cycle Count',
          description:
            'Run full physical counts or targeted cycle counts without stopping operations. Count by location, zone, or item category — discrepancies are flagged and resolved on the spot.',
        },
        {
          title: 'Multi-Warehouse & Branch Support',
          description:
            'Manage stock across multiple warehouses, branches, or 3PL locations from a single platform. Transfer stock between locations with full traceability and instant ledger updates.',
        },
        {
          title: 'Barcode, QR & RFID Ready',
          description:
            'Works with standard barcode scanners, mobile QR readers, and RFID infrastructure. No bespoke hardware required — deploy on Android handheld devices your team already uses.',
        },
      ],

      benefitsTitle: 'Why BCor WMS?',
      benefits: [
        'Eliminate paper-based receiving and picking',
        'Up to 99.9% stock location accuracy',
        'Faster order fulfillment — fewer picking errors',
        'Real-time inventory across all locations',
        'Reduce excess stock and carrying costs',
        'Full audit trail for every stock movement',
        'Integrated with Finance, Trading & Production',
        'Scales from a single shed to a large DC',
      ],

      integrationsTitle: 'Seamlessly Integrated With',
      integrations: [
        { label: 'Finance', icon: '💰' },
        { label: 'Trading', icon: '📊' },
        { label: 'Inventory', icon: '📦' },
        { label: 'Production', icon: '🏭' },
      ],

      ctaTitle: 'Ready to Take Full Control of Your Warehouse?',
      ctaSubtitle:
        'Book a live demo of BCor WMS and see how fast your team can go paperless, accurate, and efficient.',
    },
    ar: {
      badge: 'مدعوم من بي كور ERP',
      title: 'بي كور لإدارة المستودعات',
      tagline: 'من الاستلام إلى الشحن — تحكم كامل بمستودعاتك.',
      subtitle:
        'نظام إدارة مستودعات متخصص يلغي الورق ويقلل الأخطاء ويمنحك رؤية فورية لكل خانة وحامل شحن وشحنة في مستودعك.',
      requestDemo: 'طلب عرض توضيحي',

      modulesTitle: 'القدرات الأساسية',
      modules: [
        {
          title: 'استلام البضاعة والتخزين',
          description:
            'امسح الشحنات الواردة مقابل أوامر الشراء وتحقق من الكميات والحالة ووجّه الموظفين تلقائياً إلى موقع الخانة الأمثل — لتقليل وقت الاستلام ومنع سوء التخزين.',
        },
        {
          title: 'إدارة الخانات والمواقع',
          description:
            'حدد المناطق والممرات والرفوف والخانات. خصص المواد للمواقع حسب الحجم أو الوزن أو معدل الحركة. ضع الأصناف الأكثر طلباً قرب الشحن والبطيئة في التخزين العميق — تلقائياً.',
        },
        {
          title: 'التجميع والتعبئة والشحن',
          description:
            'أنشئ قوائم تجميع محسّنة حسب المنطقة أو الدفعة. وجّه عمال التجميع عبر الجوال وتحقق بمسح الباركود وعبّئ في الكرتون المناسب — كل شيء مُتتبع حتى مستوى الشحنة.',
        },
        {
          title: 'جرد المخزون والجرد الدوري',
          description:
            'أجرِ جرداً كاملاً أو جرداً دورياً مستهدفاً دون إيقاف العمليات. الجرد حسب الموقع أو المنطقة أو فئة الصنف — يُعلم عن الفوارق ويُحلّها في الموقع فوراً.',
        },
        {
          title: 'دعم متعدد المستودعات والفروع',
          description:
            'أدر المخزون عبر مستودعات وفروع ومواقع لوجستية متعددة من منصة واحدة. انقل المخزون بين المواقع مع تتبع كامل وتحديثات فورية للدفاتر.',
        },
        {
          title: 'جاهز للباركود وQR وRFID',
          description:
            'يعمل مع ماسحات الباركود القياسية وقراء QR المحمولة وبنية RFID. لا حاجة لأجهزة مخصصة — شغّله على أجهزة الأندرويد المحمولة التي يستخدمها فريقك.',
        },
      ],

      benefitsTitle: 'لماذا بي كور WMS؟',
      benefits: [
        'إلغاء الاستلام والتجميع الورقي',
        'دقة تصل إلى 99.9% في مواقع المخزون',
        'تنفيذ أسرع للطلبات وأخطاء تجميع أقل',
        'مخزون فوري عبر جميع المواقع',
        'تقليل المخزون الزائد وتكاليف الاحتجاز',
        'سجل تدقيق كامل لكل حركة مخزون',
        'متكامل مع المالية والتجارة والإنتاج',
        'يتوسع من مستودع واحد إلى مركز توزيع كبير',
      ],

      integrationsTitle: 'تكامل سلس مع',
      integrations: [
        { label: 'المالية', icon: '💰' },
        { label: 'التجارة', icon: '📊' },
        { label: 'المخزون', icon: '📦' },
        { label: 'الإنتاج', icon: '🏭' },
      ],

      ctaTitle: 'هل أنت مستعد للسيطرة الكاملة على مستودعاتك؟',
      ctaSubtitle:
        'احجز عرضاً حياً لبي كور WMS وشاهد مدى سرعة تحول فريقك إلى العمل بلا ورق بدقة عالية وكفاءة.',
    },
  };

  const c = content[language];

  const moduleIcons = [
    <ArrowDownToLine className="h-7 w-7 text-[#D5A849]" />,
    <LayoutGrid className="h-7 w-7 text-[#D5A849]" />,
    <PackageCheck className="h-7 w-7 text-[#D5A849]" />,
    <ScanLine className="h-7 w-7 text-[#D5A849]" />,
    <Warehouse className="h-7 w-7 text-[#D5A849]" />,
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
                <Warehouse className="h-4 w-4 flex-shrink-0" />
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
