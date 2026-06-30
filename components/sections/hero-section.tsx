'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { DashboardMockup } from '@/components/ui/dashboard-mockup';
import { t } from '@/lib/translations';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { motion } from '@/lib/motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScheduleDemoModal } from '@/components/ui/schedule-demo-modal';

interface HeroSectionProps {
  description?: { en: string; ar: string } | string;
}

export function HeroSection({ description }: HeroSectionProps) {
  const { language, isRTL } = useLanguage();
  const [demoOpen, setDemoOpen] = useState(false);

  const features = [
    {
      en: 'Complete ERP Solution',
      ar: 'حل تخطيط موارد المؤسسات الكامل'
    },
    {
      en: 'Multi-Industry Support',
      ar: 'دعم متعدد الصناعات'
    },
    {
      en: 'Cloud & On-Premise',
      ar: 'سحابي وفي الموقع'
    }
  ];

  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#D5A849]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#D5A849]/5 to-transparent rounded-full"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <motion.div
            className={cn("text-center lg:text-left", isRTL && "lg:order-2 lg:text-right")}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <div className="w-2 h-2 bg-[#D5A849] rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">
                {isRTL ? 'حلول متقدمة لتخطيط موارد المؤسسات' : 'Advanced ERP Solutions'}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className={cn(
                "text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight",
                isRTL && "font-cairo"
              )}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {isRTL ? 'تحويل' : 'Transform'}
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#D5A849] to-[#f59e0b] bg-clip-text text-transparent">
                {isRTL ? 'أعمالك' : 'Your Business'}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {typeof description === 'object'
                ? description[language]
                : description || (isRTL
                  ? 'حل شامل لتخطيط موارد المؤسسات يدمج جميع عمليات أعمالك في منصة واحدة قوية'
                  : 'Complete ERP solution that integrates all your business operations into one powerful platform'
                )}
            </motion.p>

            {/* Features List */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-[#D5A849]" />
                  <span className={cn("text-sm", isRTL && "font-cairo")}>
                    {feature[language]}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className={cn(
                "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start",
                isRTL && "sm:flex-row-reverse"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => setDemoOpen(true)}
                className="bg-gradient-to-r from-[#D5A849] to-[#f59e0b] hover:from-[#c49842] hover:to-[#e08e00] text-white border-0 px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-[#D5A849]/25 transition-all duration-300 group"
              >
                {t('hero.cta.demo', language)}
                <ArrowRight className={cn("ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform", isRTL && "rotate-180 ml-0 mr-2")} />
              </Button>

            </motion.div>

          </motion.div>

          {/* Visual — Animated Dashboard */}
          <motion.div
            className={cn("relative", isRTL && "lg:order-1")}
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="absolute -z-10 -top-10 -right-10 w-48 h-48 bg-[#D5A849]/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-56 h-56 bg-blue-500/15 rounded-full blur-3xl" />

            {/* Floating cards — bottom-right: New Order + Automation side by side */}
            <motion.div
              className="absolute -bottom-4 -right-4 z-20 flex items-center gap-2 pointer-events-none"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="bg-[#1a2230] border border-white/10 rounded-xl px-3 py-2 shadow-xl">
                <div className="text-white/50 text-[10px] mb-0.5">🚀 New Order</div>
                <div className="text-green-400 font-bold text-xs">+$12,400 confirmed</div>
              </div>
              <div className="bg-[#1a2230] border border-white/10 rounded-xl px-3 py-2 shadow-xl">
                <div className="text-white/50 text-[10px] mb-0.5">⚡ Automation</div>
                <div className="font-bold text-xs" style={{ color: '#F5A623' }}>3 tasks completed</div>
              </div>
            </motion.div>

            <DashboardMockup />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-sm">
              {isRTL ? 'اكتشف المزيد' : 'Discover More'}
            </span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <ScheduleDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  );
}
