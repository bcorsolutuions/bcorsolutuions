'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function GlanceSection() {
  const { language, isRTL } = useLanguage();

  const features = [
    {
      title: {
        en: 'Cloud-based & On-premises',
        ar: 'سحابي وفي الموقع'
      },
      description: {
        en: 'BCor is a suite of business applications with ERP functionalities, available both in the cloud and on-premises.',
        ar: 'بي كور هي مجموعة من تطبيقات الأعمال مع وظائف تخطيط موارد المؤسسات، متوفرة في السحابة وفي الموقع.'
      }
    },
    {
      title: {
        en: 'Comprehensive Platform',
        ar: 'منصة شاملة'
      },
      description: {
        en: 'A complete platform that meets all requirements for modern business management.',
        ar: 'منصة كاملة تلبي جميع متطلبات إدارة الأعمال الحديثة.'
      }
    },
    {
      title: {
        en: 'Scalable Solution',
        ar: 'حل قابل للتوسع'
      },
      description: {
        en: 'Designed for small and medium-sized businesses, both affordable and scalable to support rapid growth.',
        ar: 'مصممة للشركات الصغيرة والمتوسطة، بأسعار معقولة وقابلة للتوسع لدعم النمو السريع.'
      }
    }
  ];

  const benefits = [
    {
      title: {
        en: 'Enhanced Efficiency',
        ar: 'كفاءة معززة'
      },
      description: {
        en: 'BCor ERP simplifies operations, fostering enhanced collaboration and responsiveness, while seamlessly navigating complexities within your business environment.',
        ar: 'يبسط نظام بي كور العمليات، ويعزز التعاون والاستجابة، مع التنقل السلس في تعقيدات بيئة عملك.'
      }
    },
    {
      title: {
        en: 'Innovation & Adaptability',
        ar: 'الابتكار والتكيف'
      },
      description: {
        en: 'Unlocking the potential to innovate and adapt in a dynamic business landscape, BCor ERP empowers organizations to overcome internal inefficiencies, paving the way for the seamless introduction of new products and services.',
        ar: 'يفتح نظام بي كور إمكانات الابتكار والتكيف في بيئة الأعمال الديناميكية، ويمكن المؤسسات من التغلب على عدم الكفاءة الداخلية، مما يمهد الطريق لإدخال منتجات وخدمات جديدة بسلاسة.'
      }
    },
    {
      title: {
        en: 'User Experience & Integration',
        ar: 'تجربة المستخدم والتكامل'
      },
      description: {
        en: 'BCor ERP meets elevated user expectations by ensuring responsive, user-friendly, and secure access across locations and devices. It seamlessly integrates internal processes with those of customers, suppliers, and partners, enabling competitive agility in a globalized market. Additionally, it provides in-context business analysis for informed real-time decisions and long-term strategic goals.',
        ar: 'يلبي نظام بي كور توقعات المستخدم المرتفعة من خلال ضمان الوصول السريع والسهل والآمن عبر المواقع والأجهزة. يدمج العمليات الداخلية بسلاسة مع عمليات العملاء والموردين والشركاء، مما يتيح المرونة التنافسية في السوق العالمي. بالإضافة إلى ذلك، يوفر تحليلاً تجارياً في السياق لاتخاذ قرارات مستنيرة في الوقت الفعلي وأهداف استراتيجية طويلة المدى.'
      }
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white",
              isRTL && "font-cairo"
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {isRTL ? 'بي كور في لمحة' : 'BCor at a Glance'}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <div className={cn("mb-4", isRTL && "flex justify-end")}>
                <CheckCircle2 className="h-8 w-8 text-[#D5A849]" />
              </div>
              <h3 className={cn(
                "text-xl font-semibold mb-2 text-gray-900 dark:text-white",
                isRTL && "font-cairo text-right"
              )}>
                {feature.title[language]}
              </h3>
              <p className={cn(
                "text-gray-600 dark:text-gray-300",
                isRTL && "font-cairo text-right"
              )}>
                {feature.description[language]}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "flex-1",
                  isRTL && "text-right"
                )}>
                  <h3 className={cn(
                    "text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2",
                    isRTL && "font-cairo justify-end"
                  )}>
                    {benefit.title[language]}
                    <ArrowRight className={cn(
                      "h-5 w-5 text-[#D5A849]",
                      isRTL && "rotate-180"
                    )} />
                  </h3>
                  <p className={cn(
                    "text-gray-600 dark:text-gray-300 leading-relaxed",
                    isRTL && "font-cairo"
                  )}>
                    {benefit.description[language]}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}