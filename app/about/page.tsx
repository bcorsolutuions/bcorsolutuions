'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'About Us',
      missionTitle: 'Our Mission',
      missionText: 'We are dedicated to providing innovative enterprise solutions that empower businesses to achieve their full potential. Our comprehensive suite of modules and solutions is designed to streamline operations, enhance productivity, and drive growth across various industries.',
      visionTitle: 'Our Vision',
      visionText: 'To be the leading provider of integrated business solutions, helping organizations transform their operations through cutting-edge technology and exceptional service.',
      valuesTitle: 'Our Values',
      values: [
        {
          title: 'Innovation',
          description: 'Continuously pushing boundaries to deliver state-of-the-art solutions.'
        },
        {
          title: 'Excellence',
          description: 'Maintaining the highest standards in everything we do.'
        },
        {
          title: 'Integrity',
          description: 'Building trust through honest and ethical business practices.'
        },
        {
          title: 'Customer Focus',
          description: 'Putting our clients\' success at the heart of our operations.'
        }
      ]
    },
    ar: {
      title: 'من نحن',
      missionTitle: 'مهمتنا',
      missionText: 'نحن ملتزمون بتقديم حلول مؤسسية مبتكرة تمكّن الشركات من تحقيق إمكاناتها الكاملة. مجموعتنا الشاملة من الوحدات والحلول مصممة لتبسيط العمليات وتعزيز الإنتاجية ودفع النمو عبر مختلف القطاعات.',
      visionTitle: 'رؤيتنا',
      visionText: 'أن نكون المزود الرائد لحلول الأعمال المتكاملة، ومساعدة المؤسسات على تحويل عملياتها من خلال التكنولوجيا المتقدمة والخدمة الاستثنائية.',
      valuesTitle: 'قيمنا',
      values: [
        {
          title: 'الابتكار',
          description: 'الدفع المستمر لحدود الممكن لتقديم حلول متطورة.'
        },
        {
          title: 'التميز',
          description: 'الحفاظ على أعلى المعايير في كل ما نقوم به.'
        },
        {
          title: 'النزاهة',
          description: 'بناء الثقة من خلال ممارسات أعمال صادقة وأخلاقية.'
        },
        {
          title: 'التركيز على العميل',
          description: 'وضع نجاح عملائنا في صميم عملياتنا.'
        }
      ]
    }
  };

  const c = content[language];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className={cn(
          "text-4xl font-bold mb-8 text-gray-900 dark:text-white",
          isRTL && "font-cairo text-right"
        )}>
          {c.title}
        </h1>

        <Card className="p-6 mb-8">
          <h2 className={cn(
            "text-2xl font-semibold mb-4 text-gray-900 dark:text-white",
            isRTL && "font-cairo text-right"
          )}>
            {c.missionTitle}
          </h2>
          <p className={cn(
            "text-gray-700 dark:text-gray-300 mb-4",
            isRTL && "font-cairo text-right"
          )}>
            {c.missionText}
          </p>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className={cn(
            "text-2xl font-semibold mb-4 text-gray-900 dark:text-white",
            isRTL && "font-cairo text-right"
          )}>
            {c.visionTitle}
          </h2>
          <p className={cn(
            "text-gray-700 dark:text-gray-300 mb-4",
            isRTL && "font-cairo text-right"
          )}>
            {c.visionText}
          </p>
        </Card>

        <Card className="p-6">
          <h2 className={cn(
            "text-2xl font-semibold mb-4 text-gray-900 dark:text-white",
            isRTL && "font-cairo text-right"
          )}>
            {c.valuesTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {c.values.map((value, i) => (
              <div key={i}>
                <h3 className={cn(
                  "text-xl font-medium mb-2 text-gray-900 dark:text-white",
                  isRTL && "font-cairo text-right"
                )}>
                  {value.title}
                </h3>
                <p className={cn(
                  "text-gray-700 dark:text-gray-300",
                  isRTL && "font-cairo text-right"
                )}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
