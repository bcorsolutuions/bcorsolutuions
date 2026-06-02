'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import { ScheduleDemoModal } from '@/components/ui/schedule-demo-modal';
import {
  BarChart3,
  Box,
  Boxes,
  ClipboardCheck,
  QrCode,
  RefreshCw,
  Truck,
} from 'lucide-react';

export default function InventoryPage() {
  const { language, isRTL } = useLanguage();
  const [demoOpen, setDemoOpen] = useState(false);

  const content = {
    en: {
      title: 'Inventory Management',
      subtitle: 'A comprehensive inventory management solution with real-time tracking and supply chain optimization',
      benefitsTitle: 'Benefits of Our Inventory Solution',
      learnMore: 'Learn More',
      features: [
        {
          title: 'Real-Time Inventory Tracking',
          description: 'Monitor levels across warehouses and bins with instant updates and alerts.'
        },
        {
          title: 'Stock Replenishment Automation',
          description: 'Set reorder levels, safety stocks, and receive restock alerts automatically.'
        },
        {
          title: 'Lot & Batch Management',
          description: 'Track lots, serials, and batches for complete product traceability.'
        },
        {
          title: 'Barcode & RFID Support',
          description: 'Streamline warehouse operations with integrated scanning solutions.'
        },
        {
          title: 'Stock Auditing & Adjustment',
          description: 'Maintain accurate inventory counts with built-in auditing tools.'
        },
        {
          title: 'Warehouse Transfer Management',
          description: 'Manage stock movements between locations with full traceability.'
        }
      ],
      benefits: [
        'Lower inventory carrying costs',
        'Enhanced supply chain agility',
        'Accurate, real-time inventory records',
        'Reduced losses due to expiry or theft'
      ]
    },
    ar: {
      title: 'إدارة المخزون',
      subtitle: 'حل متكامل لإدارة المخزون مع تتبع في الوقت الفعلي وتحسين سلسلة التوريد',
      benefitsTitle: 'فوائد حل إدارة المخزون',
      learnMore: 'اكتشف المزيد',
      features: [
        {
          title: 'تتبع المخزون في الوقت الفعلي',
          description: 'مراقبة المستويات عبر المستودعات والصناديق مع تحديثات وتنبيهات فورية.'
        },
        {
          title: 'أتمتة تجديد المخزون',
          description: 'تعيين مستويات إعادة الطلب والمخزون الاحتياطي وتلقي تنبيهات إعادة التخزين تلقائياً.'
        },
        {
          title: 'إدارة الدفعات والمجموعات',
          description: 'تتبع المجموعات والأرقام التسلسلية والدفعات للتتبع الكامل للمنتج.'
        },
        {
          title: 'دعم الباركود وRFID',
          description: 'تبسيط عمليات المستودع مع حلول المسح المتكاملة.'
        },
        {
          title: 'تدقيق وتعديل المخزون',
          description: 'الحفاظ على عد دقيق للمخزون مع أدوات التدقيق المدمجة.'
        },
        {
          title: 'إدارة نقل المستودعات',
          description: 'إدارة حركات المخزون بين المواقع مع إمكانية التتبع الكامل.'
        }
      ],
      benefits: [
        'خفض تكاليف حمل المخزون',
        'تعزيز مرونة سلسلة التوريد',
        'سجلات مخزون دقيقة في الوقت الفعلي',
        'تقليل الخسائر بسبب انتهاء الصلاحية أو السرقة'
      ]
    }
  };

  const c = content[language];

  const featureIcons = [
    <Boxes className="h-8 w-8 text-[#D5A849]" />,
    <RefreshCw className="h-8 w-8 text-[#D5A849]" />,
    <Box className="h-8 w-8 text-[#D5A849]" />,
    <QrCode className="h-8 w-8 text-[#D5A849]" />,
    <ClipboardCheck className="h-8 w-8 text-[#D5A849]" />,
    <Truck className="h-8 w-8 text-[#D5A849]" />
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={cn(
            "text-4xl font-bold mb-6 text-gray-900 dark:text-white",
            isRTL && "font-cairo"
          )}>
            {c.title}
          </h1>
          <p className={cn(
            "text-xl text-gray-600 dark:text-gray-300",
            isRTL && "font-cairo"
          )}>
            {c.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {c.features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={cn("mb-4", isRTL && "flex justify-end")}>
                {featureIcons[i]}
              </div>
              <h3 className={cn(
                "text-xl font-semibold mb-3 text-gray-900 dark:text-white",
                isRTL && "font-cairo text-right"
              )}>
                {feature.title}
              </h3>
              <p className={cn(
                "text-gray-600 dark:text-gray-300",
                isRTL && "font-cairo text-right"
              )}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-[#1F3541] text-white rounded-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className={cn(
              "text-2xl md:text-3xl font-bold mb-6 text-center",
              isRTL && "font-cairo"
            )}>
              {c.benefitsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {c.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex items-center gap-3",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  <BarChart3 className="h-5 w-5 text-[#D5A849] flex-shrink-0" />
                  <span className={cn(
                    "text-gray-100",
                    isRTL && "font-cairo text-right"
                  )}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button
                size="lg"
                onClick={() => setDemoOpen(true)}
                className={cn(
                  'bg-gradient-to-r from-[#D5A849] to-[#f59e0b] hover:from-[#c49842] hover:to-[#e08e00] text-white border-0 px-8 font-semibold shadow-lg',
                  isRTL && 'font-cairo'
                )}
              >
                {c.learnMore}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <ScheduleDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}
