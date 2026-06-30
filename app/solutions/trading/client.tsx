'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScheduleDemoModal } from '@/components/ui/schedule-demo-modal';
import {
  ShoppingCart,
  TrendingUp,
  Users,
  BarChart2,
  Truck,
  FileText,
  Settings,
  Globe,
} from 'lucide-react';

export default function TradingPage() {
  const { language, isRTL } = useLanguage();
  const [demoOpen, setDemoOpen] = useState(false);

  const features = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Sales Management',
        ar: 'إدارة المبيعات'
      },
      description: {
        en: 'Streamline your sales process with comprehensive order management and tracking',
        ar: 'تبسيط عملية المبيعات مع إدارة وتتبع شامل للطلبات'
      }
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Purchase Management',
        ar: 'إدارة المشتريات'
      },
      description: {
        en: 'Optimize procurement with automated purchase orders and vendor management',
        ar: 'تحسين المشتريات مع أوامر الشراء الآلية وإدارة الموردين'
      }
    },
    {
      icon: <Users className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Customer Relations',
        ar: 'علاقات العملاء'
      },
      description: {
        en: 'Build and maintain strong customer relationships with integrated CRM features',
        ar: 'بناء والحفاظ على علاقات قوية مع العملاء مع ميزات إدارة علاقات العملاء المتكاملة'
      }
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Analytics & Reporting',
        ar: 'التحليلات والتقارير'
      },
      description: {
        en: 'Gain insights with real-time analytics and customizable reports',
        ar: 'الحصول على رؤى مع تحليلات في الوقت الفعلي وتقارير قابلة للتخصيص'
      }
    },
    {
      icon: <Truck className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Logistics Integration',
        ar: 'تكامل الخدمات اللوجستية'
      },
      description: {
        en: 'Seamlessly manage shipping and delivery operations',
        ar: 'إدارة عمليات الشحن والتسليم بسلاسة'
      }
    },
    {
      icon: <FileText className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Document Management',
        ar: 'إدارة المستندات'
      },
      description: {
        en: 'Efficiently handle invoices, quotations, and other trading documents',
        ar: 'التعامل بكفاءة مع الفواتير وعروض الأسعار والمستندات التجارية الأخرى'
      }
    },
    {
      icon: <Settings className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Process Automation',
        ar: 'أتمتة العمليات'
      },
      description: {
        en: 'Automate routine tasks and streamline workflows',
        ar: 'أتمتة المهام الروتينية وتبسيط سير العمل'
      }
    },
    {
      icon: <Globe className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Multi-Currency Support',
        ar: 'دعم العملات المتعددة'
      },
      description: {
        en: 'Handle international transactions with ease',
        ar: 'التعامل مع المعاملات الدولية بسهولة'
      }
    }
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
            {isRTL ? 'حلول التجارة المتكاملة' : 'Integrated Trading Solutions'}
          </h1>
          <p className={cn(
            "text-xl text-gray-600 dark:text-gray-300",
            isRTL && "font-cairo"
          )}>
            {isRTL 
              ? 'إدارة عملياتك التجارية بكفاءة مع حلولنا الشاملة للتجارة'
              : 'Efficiently manage your trading operations with our comprehensive trading solutions'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className={cn("mb-4", isRTL && "flex justify-end")}>
                    {feature.icon}
                  </div>
                  <CardTitle className={cn(
                    "text-xl mb-2",
                    isRTL && "font-cairo text-right"
                  )}>
                    {feature.title[language]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={cn(
                    "text-gray-600 dark:text-gray-300",
                    isRTL && "font-cairo text-right"
                  )}>
                    {feature.description[language]}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            size="lg"
            onClick={() => setDemoOpen(true)}
            className={cn(
              'bg-gradient-to-r from-[#D5A849] to-[#f59e0b] hover:from-[#c49842] hover:to-[#e08e00] text-white border-0 font-semibold shadow-lg',
              isRTL && 'font-cairo'
            )}
          >
            {isRTL ? 'اكتشف المزيد' : 'Learn More'}
          </Button>
        </motion.div>
      </div>

      <ScheduleDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}