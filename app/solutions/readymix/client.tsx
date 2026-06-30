'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Ruler, ChartBar, ClipboardCheck, MapPin, Calculator } from 'lucide-react';

export default function ReadymixPage() {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'BCor Readymix: Precision in Every Pour',
      subtitle: 'BCor Readymix is purpose-built for concrete suppliers and construction companies. It supports batching, quality control, delivery tracking, and billing, ensuring consistency, compliance, and customer satisfaction across your operations.',
      features: [
        {
          title: 'Concrete Batching and Mix Design',
          description: 'Manage mix designs, track raw materials, and ensure consistent quality with automated batching controls.'
        },
        {
          title: 'Delivery Logistics with GPS',
          description: 'Real-time tracking of delivery trucks, optimized route planning, and automated delivery scheduling.'
        },
        {
          title: 'Weighbridge Integration',
          description: 'Seamless integration with weighbridge systems for accurate material measurement and quality control.'
        },
        {
          title: 'Quality and Moisture Checks',
          description: 'Comprehensive quality control system with moisture monitoring and automated testing procedures.'
        },
        {
          title: 'Order-to-Invoice Flow',
          description: 'Streamlined process from order placement to delivery confirmation and automated invoicing.'
        },
        {
          title: 'Production Analytics',
          description: 'Advanced reporting and analytics for production efficiency, resource utilization, and cost analysis.'
        }
      ]
    },
    ar: {
      title: 'بي كور للخرسانة الجاهزة: دقة في كل صبّة',
      subtitle: 'بُني حل بي كور للخرسانة الجاهزة خصيصاً لموردي الخرسانة وشركات البناء. يدعم عمليات الخلط ومراقبة الجودة وتتبع التوصيل والفوترة، مما يضمن الاتساق والامتثال ورضا العملاء عبر جميع عملياتك.',
      features: [
        {
          title: 'خلط الخرسانة وتصميم المزيج',
          description: 'إدارة تصميمات المزيج وتتبع المواد الخام وضمان جودة متسقة مع ضوابط الخلط الآلية.'
        },
        {
          title: 'لوجستيات التوصيل مع GPS',
          description: 'تتبع شاحنات التوصيل في الوقت الفعلي وتخطيط المسارات المحسّنة وجدولة التوصيل الآلية.'
        },
        {
          title: 'تكامل جسر الوزن',
          description: 'تكامل سلس مع أنظمة جسر الوزن لقياس دقيق للمواد ومراقبة الجودة.'
        },
        {
          title: 'فحوصات الجودة والرطوبة',
          description: 'نظام شامل لمراقبة الجودة مع مراقبة الرطوبة وإجراءات الاختبار الآلية.'
        },
        {
          title: 'تدفق الطلب إلى الفاتورة',
          description: 'عملية مبسطة من تقديم الطلب إلى تأكيد التوصيل والفوترة الآلية.'
        },
        {
          title: 'تحليلات الإنتاج',
          description: 'تقارير وتحليلات متقدمة لكفاءة الإنتاج واستخدام الموارد وتحليل التكاليف.'
        }
      ]
    }
  };

  const c = content[language];

  const featureIcons = [
    <Truck className="h-8 w-8 text-[#D5A849]" />,
    <MapPin className="h-8 w-8 text-[#D5A849]" />,
    <Ruler className="h-8 w-8 text-[#D5A849]" />,
    <ClipboardCheck className="h-8 w-8 text-[#D5A849]" />,
    <Calculator className="h-8 w-8 text-[#D5A849]" />,
    <ChartBar className="h-8 w-8 text-[#D5A849]" />
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <motion.h1
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white",
              isRTL && "font-cairo text-right"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {c.title}
          </motion.h1>

          <motion.p
            className={cn(
              "text-lg text-gray-600 dark:text-gray-300 mb-8",
              isRTL && "font-cairo text-right"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {c.subtitle}
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {c.features.map((feature, i) => (
              <Card key={i} className="bg-white dark:bg-gray-900">
                <CardHeader>
                  <div className={cn("mb-2", isRTL && "flex justify-end")}>
                    {featureIcons[i]}
                  </div>
                  <CardTitle className={cn("text-xl", isRTL && "font-cairo text-right")}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={cn("text-gray-600 dark:text-gray-300", isRTL && "font-cairo text-right")}>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
