'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { motion } from '@/lib/motion';

export function TestimonialsSection() {
  const { language, isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      content: {
        en: "BCor has revolutionized how we manage our operations. The financial module alone has saved us countless hours on monthly reporting. The interface is intuitive, and their support team is always responsive.",
        ar: "لقد أحدث بي كور ثورة في كيفية إدارتنا لعملياتنا. وحدة المالية وحدها وفرت علينا ساعات لا تحصى في إعداد التقارير الشهرية. الواجهة بديهية، وفريق الدعم دائمًا سريع الاستجابة."
      },
      author: {
        en: "Sarah Johnson",
        ar: "سارة جونسون"
      },
      role: {
        en: "CFO, Global Manufacturing Ltd",
        ar: "المدير المالي، شركة التصنيع العالمية المحدودة"
      },
      avatar: "S"
    },
    {
      content: {
        en: "The inventory management in BCor ERP is second to none. We've reduced stockouts by 42% and optimized our warehousing costs. The real-time visibility into our supply chain has been a game-changer.",
        ar: "إدارة المخزون في نظام بي كور لتخطيط موارد المؤسسات لا مثيل لها. لقد قللنا من نفاد المخزون بنسبة 42٪ وقمنا بتحسين تكاليف المستودعات. كانت الرؤية في الوقت الفعلي لسلسلة التوريد الخاصة بنا بمثابة نقلة نوعية."
      },
      author: {
        en: "Michael Chen",
        ar: "مايكل تشن"
      },
      role: {
        en: "Operations Director, RetailNext",
        ar: "مدير العمليات، ريتيل نكست"
      },
      avatar: "M"
    },
    {
      content: {
        en: "Implementing BCor has transformed our HR processes. From recruitment to payroll, everything is streamlined and connected. Our employees love the self-service portal, and our HR team can focus on strategic initiatives.",
        ar: "أدى تنفيذ بي كور إلى تحويل عمليات الموارد البشرية لدينا. من التوظيف إلى كشوف المرتبات، كل شيء منظم ومتصل. يحب موظفونا بوابة الخدمة الذاتية، ويمكن لفريق الموارد البشرية لدينا التركيز على المبادرات الاستراتيجية."
      },
      author: {
        en: "Fatima Al-Mansoori",
        ar: "فاطمة المنصوري"
      },
      role: {
        en: "HR Manager, Gulf Services Group",
        ar: "مدير الموارد البشرية، مجموعة خدمات الخليج"
      },
      avatar: "F"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

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
            {isRTL ? 'ما يقوله عملاؤنا' : 'What Our Clients Say'}
          </motion.h2>
          <motion.p 
            className={cn(
              "text-lg text-gray-600 dark:text-gray-300",
              isRTL && "font-cairo"
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {isRTL 
              ? 'اكتشف كيف تساعد حلول بي كور الشركات على تحقيق أهدافها' 
              : 'Discover how BCor solutions help companies achieve their goals'}
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="absolute top-8 left-8">
              <Quote className="h-12 w-12 text-[#D5A849]/20" />
            </div>
            
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="pt-8"
            >
              <blockquote className={cn(
                "text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8",
                isRTL && "font-cairo text-right"
              )}>
                "{testimonials[currentIndex].content[language]}"
              </blockquote>
              
              <div className={cn(
                "flex items-center gap-4",
                isRTL && "flex-row-reverse"
              )}>
                <Avatar className="h-12 w-12 border-2 border-[#D5A849]">
                  <AvatarFallback className="bg-[#1F3541] text-white">
                    {testimonials[currentIndex].avatar}
                  </AvatarFallback>
                </Avatar>
                <div className={isRTL ? "text-right" : ""}>
                  <p className={cn(
                    "font-semibold text-gray-900 dark:text-white",
                    isRTL && "font-cairo"
                  )}>
                    {testimonials[currentIndex].author[language]}
                  </p>
                  <p className={cn(
                    "text-sm text-gray-600 dark:text-gray-400",
                    isRTL && "font-cairo"
                  )}>
                    {testimonials[currentIndex].role[language]}
                  </p>
                </div>
              </div>
            </motion.div>
            
            <div className={cn(
              "absolute bottom-8 right-8 flex gap-2",
              isRTL && "right-auto left-8"
            )}>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevTestimonial}
                className="h-8 w-8 rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextTestimonial}
                className="h-8 w-8 rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}