"use client";

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScheduleDemoModal } from '@/components/ui/schedule-demo-modal';
import {
  Car,
  Settings,
  PenTool as Tool,
  Users,
  Warehouse,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function AutomotivePage() {
  const { language, isRTL } = useLanguage();
  const [demoOpen, setDemoOpen] = useState(false);

  const content = {
    en: {
      title: 'Automotive Management',
      subtitle: 'Comprehensive solution for automotive service centers, dealerships, and repair shops',
      cards: [
        {
          title: 'Vehicle Management',
          description: 'Track and manage vehicle inventory and service history',
          items: [
            'Vehicle registration and details',
            'Service history tracking',
            'Maintenance schedules',
            'Parts inventory management',
          ],
        },
        {
          title: 'Service Operations',
          description: 'Streamline workshop operations and service delivery',
          items: [
            'Work order management',
            'Service scheduling',
            'Labor tracking',
            'Quality control',
          ],
        },
        {
          title: 'Customer Relations',
          description: 'Enhance customer experience and communication',
          items: [
            'Customer database',
            'Service reminders',
            'Feedback management',
            'Communication history',
          ],
        },
        {
          title: 'Business Analytics',
          description: 'Data-driven insights for better decision making',
          items: [
            'Performance metrics',
            'Revenue analysis',
            'Service efficiency',
            'Resource utilization',
          ],
        },
      ],
      inventory: {
        badge: 'Inventory Control',
        title: 'Centralized Inventory Management',
        description:
          'Gain full visibility and control over your parts inventory across all service locations — from a single, unified platform that eliminates stock-outs and reduces excess holding costs.',
        features: [
          'Real-time stock visibility across all branches',
          'Automated reorder points & low-stock alerts',
          'Multi-location parts tracking and transfers',
          'Supplier management and purchase orders',
          'Parts usage analytics and cost reports',
          'Barcode / QR scanning for fast parts lookup',
        ],
        cta: 'Request Demo',
      },
    },
    ar: {
      title: 'إدارة السيارات',
      subtitle: 'حل شامل لمراكز خدمة السيارات والوكالات وورش الإصلاح',
      cards: [
        {
          title: 'إدارة المركبات',
          description: 'تتبع وإدارة مخزون المركبات وسجل الخدمة',
          items: [
            'تسجيل بيانات المركبة وتفاصيلها',
            'تتبع سجل الخدمة',
            'جداول الصيانة',
            'إدارة مخزون قطع الغيار',
          ],
        },
        {
          title: 'عمليات الخدمة',
          description: 'تبسيط عمليات الورشة وتقديم الخدمة',
          items: [
            'إدارة أوامر العمل',
            'جدولة الخدمة',
            'تتبع ساعات العمل',
            'مراقبة الجودة',
          ],
        },
        {
          title: 'علاقات العملاء',
          description: 'تعزيز تجربة العملاء والتواصل معهم',
          items: [
            'قاعدة بيانات العملاء',
            'تذكيرات الخدمة',
            'إدارة التغذية الراجعة',
            'سجل التواصل',
          ],
        },
        {
          title: 'تحليلات الأعمال',
          description: 'رؤى مستندة إلى البيانات لاتخاذ قرارات أفضل',
          items: [
            'مقاييس الأداء',
            'تحليل الإيرادات',
            'كفاءة الخدمة',
            'استخدام الموارد',
          ],
        },
      ],
      inventory: {
        badge: 'التحكم في المخزون',
        title: 'إدارة المخزون المركزية',
        description:
          'احصل على رؤية كاملة والتحكم في مخزون قطع الغيار عبر جميع مواقع الخدمة — من منصة موحدة واحدة تمنع نفاد المخزون وتقلل تكاليف الاحتفاظ الزائد.',
        features: [
          'رؤية فورية للمخزون عبر جميع الفروع',
          'نقاط إعادة الطلب الآلية وتنبيهات انخفاض المخزون',
          'تتبع قطع الغيار ونقلها بين المواقع',
          'إدارة الموردين وأوامر الشراء',
          'تحليلات استخدام القطع وتقارير التكاليف',
          'مسح الباركود / رمز QR للبحث السريع عن القطع',
        ],
        cta: 'طلب عرض توضيحي',
      },
    },
  };

  const c = content[language];

  const cardIcons = [
    <Car className="w-6 h-6 text-primary" />,
    <Tool className="w-6 h-6 text-primary" />,
    <Users className="w-6 h-6 text-primary" />,
    <Settings className="w-6 h-6 text-primary" />,
  ];

  return (
    <>
      <div className="container mx-auto py-8 space-y-8">
        {/* ── Page Header ── */}
        <div className={cn("flex flex-col gap-4", isRTL && "items-end")}>
          <h1 className={cn(
            "text-4xl font-bold tracking-tight text-gray-900 dark:text-white",
            isRTL && "font-cairo"
          )}>
            {c.title}
          </h1>
          <p className={cn(
            "text-lg text-muted-foreground",
            isRTL && "font-cairo text-right"
          )}>
            {c.subtitle}
          </p>
        </div>

        {/* ── Feature Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {c.cards.map((card, i) => (
            <Card key={i}>
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  {cardIcons[i]}
                </div>
                <CardTitle className={cn(isRTL && "font-cairo text-right")}>{card.title}</CardTitle>
                <CardDescription className={cn(isRTL && "font-cairo text-right")}>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className={cn("list-disc list-inside text-sm text-muted-foreground", isRTL && "font-cairo text-right")}>
                  {card.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* ── Centralized Inventory Management ── */}
      <section className="py-16 md:py-20 bg-[#0f172a] mt-8">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className={cn(
              'flex flex-col lg:flex-row items-center gap-12',
              isRTL && 'lg:flex-row-reverse'
            )}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Left — Icon + Heading + Description + CTA */}
            <div className={cn('flex-1 max-w-lg', isRTL && 'text-right')}>
              {/* Badge */}
              <span className="inline-flex items-center gap-2 bg-[#D5A849]/20 border border-[#D5A849]/40 text-[#D5A849] rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                <Warehouse className="h-4 w-4 flex-shrink-0" />
                {c.inventory.badge}
              </span>

              <h2 className={cn(
                'text-3xl md:text-4xl font-bold text-white mb-4 leading-tight',
                isRTL && 'font-cairo'
              )}>
                {c.inventory.title}
              </h2>
              <p className={cn(
                'text-gray-300 text-lg mb-8 leading-relaxed',
                isRTL && 'font-cairo'
              )}>
                {c.inventory.description}
              </p>

              <Button
                size="lg"
                onClick={() => setDemoOpen(true)}
                className={cn(
                  'bg-gradient-to-r from-[#D5A849] to-[#f59e0b] hover:from-[#c49842] hover:to-[#e08e00] text-white border-0 px-8 font-semibold shadow-lg',
                  isRTL && 'font-cairo'
                )}
              >
                {c.inventory.cta}
                <ArrowRight className={cn('h-4 w-4', isRTL ? 'mr-2 rotate-180' : 'ml-2')} />
              </Button>
            </div>

            {/* Right — Feature Checklist */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {c.inventory.features.map((feat, i) => (
                  <motion.div
                    key={i}
                    className={cn(
                      'flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4',
                      isRTL && 'flex-row-reverse'
                    )}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#D5A849] flex-shrink-0 mt-0.5" />
                    <span className={cn('text-gray-200 text-sm leading-snug', isRTL && 'font-cairo text-right')}>
                      {feat}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ScheduleDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  );
}
