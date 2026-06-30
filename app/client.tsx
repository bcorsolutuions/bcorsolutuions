'use client';

import { useLanguage } from '@/lib/language-context';
import { t } from '@/lib/translations';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { SplashHeroSection } from '@/components/sections/splash-hero-section';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { SolutionsSection } from '@/components/sections/solutions-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CtaSection } from '@/components/sections/cta-section';
import { GlanceSection } from '@/components/sections/glance-section';
import { ImplementationSection } from '@/components/sections/implementation-section';
import { ClientsSection } from '@/components/sections/clients-section';

export default function Home() {
  const { language, isRTL } = useLanguage();

  return (
    <div className={cn("min-h-screen", isRTL ? "font-cairo" : "")}>
      <SplashHeroSection />
      <HeroSection
        description={{
          en: 'Unlock seamless efficiency and innovation across diverse industries with BCor Solutions—an all-in-one ERP software tailored for comprehensive management of HR, fixed assets, trading, manufacturing, and beyond.',
          ar: 'أطلق العنان للكفاءة والابتكار عبر مختلف القطاعات مع حلول بي كور—برنامج ERP متكامل مصمم لإدارة شاملة للموارد البشرية والأصول الثابتة والتجارة والتصنيع والمزيد.'
        }}
      />
      <GlanceSection />
      <FeaturesSection />
      <SolutionsSection />
      <ClientsSection />
      <ImplementationSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}