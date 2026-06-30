'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import { ScheduleDemoModal } from '@/components/ui/schedule-demo-modal';
import {
  Clipboard,
  Heart,
  Users,
  FlaskConical,
  Pill,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export default function HealthcarePage() {
  const { language, isRTL } = useLanguage();
  const [demoOpen, setDemoOpen] = useState(false);

  const content = {
    en: {
      badge: 'Powered by BCor ERP',
      title: 'BCor Healthcare System',
      tagline: 'Empowering Healthcare with Efficiency, Accuracy & Care',
      subtitle:
        'We engineer healthcare solutions that are tailored to the needs of today and tomorrow.',
      requestDemo: 'Request Demo',
      callNow: 'Call Now',
      phone: '+973-38020846',
      website: 'www.bcorsolutions.com',

      modulesTitle: 'Core Modules',
      modules: [
        {
          title: 'OP Registration',
          description:
            'Streamlined outpatient registration with fast patient onboarding, appointment scheduling, and queue management for a better patient experience.',
        },
        {
          title: 'Electronic Medical Records (EMR)',
          description:
            'Comprehensive digital patient records — clinical notes, diagnoses, prescriptions, and history — all accessible securely in one place.',
        },
        {
          title: 'Pharmacy Management',
          description:
            'End-to-end pharmacy operations: drug inventory, dispensing, expiry tracking, and integration with prescriptions for zero dispensing errors.',
        },
        {
          title: 'Laboratory Management',
          description:
            'Automate lab test requests, result entry, and reporting. Connect lab data directly to patient EMRs for instant clinical decisions.',
        },
      ],

      benefitsTitle: 'Why BCor HCS?',
      benefits: [
        'Faster service & improved patient experience',
        'Automated workflows, fewer errors',
        'Single platform for Healthcare Operations & Business Management',
        'Centralized data accessible anytime, anywhere',
        'Integrated with Finance, HR, Payroll, Inventory & Fixed Assets',
        'Scalable for hospitals & clinics of all sizes',
      ],

      integrationsTitle: 'Seamlessly Integrated With',
      integrations: [
        { label: 'Finance', icon: '💰' },
        { label: 'HR & Payroll', icon: '👥' },
        { label: 'Inventory', icon: '📦' },
        { label: 'Fixed Assets', icon: '🏢' },
      ],

      ctaTitle: 'Ready to Transform Your Healthcare Operations?',
      ctaSubtitle:
        'Get a personalized demo of BCor HCS and see how it fits your hospital or clinic.',
    },
    ar: {
      badge: 'مدعوم من بي كور ERP',
      title: 'نظام بي كور للرعاية الصحية',
      tagline: 'تمكين الرعاية الصحية بالكفاءة والدقة والرعاية',
      subtitle:
        'نصمم حلول رعاية صحية مصممة خصيصاً لتلبية احتياجات اليوم والمستقبل.',
      requestDemo: 'طلب عرض توضيحي',
      callNow: 'اتصل الآن',
      phone: '+973-38020846',
      website: 'www.bcorsolutions.com',

      modulesTitle: 'الوحدات الأساسية',
      modules: [
        {
          title: 'تسجيل المرضى الخارجيين',
          description:
            'تسجيل سريع وسلس للمرضى الخارجيين مع جدولة المواعيد وإدارة قوائم الانتظار لتحسين تجربة المريض.',
        },
        {
          title: 'السجلات الطبية الإلكترونية (EMR)',
          description:
            'سجلات مريض رقمية شاملة — ملاحظات سريرية وتشخيصات ووصفات وتاريخ طبي — كلها متاحة بأمان في مكان واحد.',
        },
        {
          title: 'إدارة الصيدلية',
          description:
            'عمليات صيدلية متكاملة: مخزون الأدوية والصرف وتتبع انتهاء الصلاحية والتكامل مع الوصفات الطبية لتفادي أخطاء الصرف.',
        },
        {
          title: 'إدارة المختبر',
          description:
            'أتمتة طلبات الفحوصات المخبرية وإدخال النتائج وإعداد التقارير. ربط بيانات المختبر مباشرة بسجلات المرضى الإلكترونية.',
        },
      ],

      benefitsTitle: 'لماذا بي كور HCS؟',
      benefits: [
        'خدمة أسرع وتجربة أفضل للمريض',
        'سير عمل آلي وأخطاء أقل',
        'منصة موحدة لعمليات الرعاية الصحية وإدارة الأعمال',
        'بيانات مركزية متاحة في أي وقت ومن أي مكان',
        'تكامل مع المالية والموارد البشرية والرواتب والمخزون والأصول الثابتة',
        'قابل للتوسع للمستشفيات والعيادات بجميع أحجامها',
      ],

      integrationsTitle: 'تكامل سلس مع',
      integrations: [
        { label: 'المالية', icon: '💰' },
        { label: 'الموارد البشرية والرواتب', icon: '👥' },
        { label: 'المخزون', icon: '📦' },
        { label: 'الأصول الثابتة', icon: '🏢' },
      ],

      ctaTitle: 'هل أنت مستعد لتحويل عمليات الرعاية الصحية لديك؟',
      ctaSubtitle:
        'احصل على عرض توضيحي مخصص لنظام بي كور HCS وشاهد كيف يناسب مستشفاك أو عيادتك.',
    },
  };

  const c = content[language];

  const moduleIcons = [
    <Users className="h-7 w-7 text-[#D5A849]" />,
    <Clipboard className="h-7 w-7 text-[#D5A849]" />,
    <Pill className="h-7 w-7 text-[#D5A849]" />,
    <FlaskConical className="h-7 w-7 text-[#D5A849]" />,
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
              {/* Badge */}
              <span className="inline-flex items-center gap-2 bg-[#D5A849]/20 border border-[#D5A849]/40 text-[#D5A849] rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Heart className="h-4 w-4 flex-shrink-0" />
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

        {/* ── Core Modules ── */}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {c.modules.map((mod, i) => (
                <motion.div
                  key={i}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className={cn('flex items-start gap-4', isRTL && 'flex-row-reverse')}>
                    <div className="w-14 h-14 rounded-xl bg-[#D5A849]/10 flex items-center justify-center flex-shrink-0">
                      {moduleIcons[i]}
                    </div>
                    <div className={isRTL ? 'text-right' : ''}>
                      <h3 className={cn('text-xl font-semibold mb-2 text-gray-900 dark:text-white', isRTL && 'font-cairo')}>
                        {mod.title}
                      </h3>
                      <p className={cn('text-gray-600 dark:text-gray-300 leading-relaxed', isRTL && 'font-cairo')}>
                        {mod.description}
                      </p>
                    </div>
                  </div>
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
              <div className="flex justify-center">
                <Button
                  size="lg"
                  onClick={() => setDemoOpen(true)}
                  className={cn('bg-white text-[#D5A849] hover:bg-gray-100 border-0 px-8 font-semibold shadow-lg', isRTL && 'font-cairo')}
                >
                  {c.requestDemo}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <ScheduleDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  );
}
