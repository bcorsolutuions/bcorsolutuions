'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export function ImplementationSection() {
  const { language, isRTL } = useLanguage();

  const stages = [
    {
      title: {
        en: 'Project Planning',
        ar: 'تخطيط المشروع'
      },
      description: {
        en: 'Define scope, objectives, and implementation strategy',
        ar: 'تحديد النطاق والأهداف واستراتيجية التنفيذ'
      }
    },
    {
      title: {
        en: 'System Configuration',
        ar: 'تكوين النظام'
      },
      description: {
        en: 'Setup and customize according to business requirements',
        ar: 'الإعداد والتخصيص وفقًا لمتطلبات العمل'
      }
    },
    {
      title: {
        en: 'Data Migration',
        ar: 'ترحيل البيانات'
      },
      description: {
        en: 'Transfer and validate existing business data',
        ar: 'نقل والتحقق من صحة بيانات الأعمال الحالية'
      }
    },
    {
      title: {
        en: 'User Training',
        ar: 'تدريب المستخدمين'
      },
      description: {
        en: 'Comprehensive training for all system users',
        ar: 'تدريب شامل لجميع مستخدمي النظام'
      }
    },
    {
      title: {
        en: 'Testing & Quality Assurance',
        ar: 'الاختبار وضمان الجودة'
      },
      description: {
        en: 'Rigorous testing to ensure system reliability',
        ar: 'اختبار دقيق لضمان موثوقية النظام'
      }
    },
    {
      title: {
        en: 'Go-Live & Support',
        ar: 'الإطلاق والدعم'
      },
      description: {
        en: 'Smooth transition and ongoing support',
        ar: 'انتقال سلس ودعم مستمر'
      }
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white",
            isRTL && "font-cairo"
          )}>
            {isRTL ? 'مراحل التنفيذ' : 'Implementation Stages'}
          </h2>
          <p className={cn(
            "text-lg text-gray-600 dark:text-gray-300",
            isRTL && "font-cairo"
          )}>
            {isRTL 
              ? 'عملية تنفيذ منظمة وفعالة لضمان نجاح مشروعك'
              : 'A structured and efficient implementation process to ensure your project success'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className={cn("mb-4", isRTL && "flex justify-end")}>
                  <CheckCircle2 className="h-8 w-8 text-[#D5A849]" />
                </div>
                <h3 className={cn(
                  "text-xl font-semibold mb-2 text-gray-900 dark:text-white",
                  isRTL && "font-cairo text-right"
                )}>
                  {stage.title[language]}
                </h3>
                <p className={cn(
                  "text-gray-600 dark:text-gray-300",
                  isRTL && "font-cairo text-right"
                )}>
                  {stage.description[language]}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}