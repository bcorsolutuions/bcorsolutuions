'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';

export function StatsSection() {
  const { language, isRTL } = useLanguage();
  
  const stats = [
    {
      value: "98%",
      label: {
        en: "Customer Satisfaction",
        ar: "رضا العملاء"
      }
    },
    {
      value: "30+",
      label: {
        en: "Countries Served",
        ar: "الدول التي نخدمها"
      }
    },
    {
      value: "500+",
      label: {
        en: "Enterprise Clients",
        ar: "عملاء الشركات"
      }
    },
    {
      value: "10+",
      label: {
        en: "Years Experience",
        ar: "سنوات الخبرة"
      }
    }
  ];

  return (
    <section className="py-16 bg-[#1F3541] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p className="text-4xl md:text-5xl font-bold text-[#D5A849] mb-2">
                {stat.value}
              </p>
              <p className={cn(
                "text-lg text-gray-300",
                isRTL && "font-cairo"
              )}>
                {stat.label[language]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}