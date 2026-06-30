'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import { 
  Hospital, 
  Stethoscope, 
  ClipboardList, 
  Users, 
  Calendar,
  FileText,
  Clock,
  Shield,
  ChartBar,
  Building2
} from 'lucide-react';

export default function HealthcarePage() {
  const { language, isRTL } = useLanguage();

  const features = [
    {
      icon: <Stethoscope className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Patient Management',
        ar: 'إدارة المرضى'
      },
      description: {
        en: 'Comprehensive patient records, history tracking, and appointment scheduling',
        ar: 'سجلات المرضى الشاملة وتتبع التاريخ وجدولة المواعيد'
      }
    },
    {
      icon: <ClipboardList className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Medical Records',
        ar: 'السجلات الطبية'
      },
      description: {
        en: 'Secure electronic health records with easy access and updates',
        ar: 'سجلات صحية إلكترونية آمنة مع سهولة الوصول والتحديثات'
      }
    },
    {
      icon: <Calendar className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Appointment Scheduling',
        ar: 'جدولة المواعيد'
      },
      description: {
        en: 'Efficient scheduling system with reminders and calendar integration',
        ar: 'نظام جدولة فعال مع التذكيرات وتكامل التقويم'
      }
    },
    {
      icon: <FileText className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Billing & Insurance',
        ar: 'الفواتير والتأمين'
      },
      description: {
        en: 'Streamlined billing processes and insurance claim management',
        ar: 'عمليات الفواتير المبسطة وإدارة مطالبات التأمين'
      }
    },
    {
      icon: <Clock className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Resource Management',
        ar: 'إدارة الموارد'
      },
      description: {
        en: 'Optimize staff scheduling and facility resource allocation',
        ar: 'تحسين جدولة الموظفين وتخصيص موارد المنشأة'
      }
    },
    {
      icon: <Shield className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Compliance & Security',
        ar: 'الامتثال والأمان'
      },
      description: {
        en: 'HIPAA compliance and robust data security measures',
        ar: 'الامتثال لـ HIPAA وتدابير أمان البيانات القوية'
      }
    }
  ];

  const benefits = [
    {
      icon: <ChartBar className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Improved Efficiency',
        ar: 'تحسين الكفاءة'
      },
      description: {
        en: 'Streamline operations and reduce administrative overhead',
        ar: 'تبسيط العمليات وتقليل الأعباء الإدارية'
      }
    },
    {
      icon: <Users className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Enhanced Patient Care',
        ar: 'تعزيز رعاية المرضى'
      },
      description: {
        en: 'Better patient experience through organized care delivery',
        ar: 'تجربة أفضل للمرضى من خلال تقديم الرعاية المنظمة'
      }
    },
    {
      icon: <Building2 className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Scalable Solution',
        ar: 'حل قابل للتوسع'
      },
      description: {
        en: 'Grow your practice with a flexible healthcare management system',
        ar: 'نمو ممارستك مع نظام مرن لإدارة الرعاية الصحية'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <motion.h1 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white text-center",
              isRTL && "font-cairo"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {isRTL ? 'حلول الرعاية الصحية' : 'Healthcare Solutions'}
          </motion.h1>
          
          <motion.p 
            className={cn(
              "text-lg text-gray-600 dark:text-gray-300 mb-8 text-center",
              isRTL && "font-cairo"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {isRTL 
              ? 'نظام إدارة شامل للمستشفيات والعيادات، يدمج جميع جوانب الرعاية الصحية في منصة واحدة سهلة الاستخدام'
              : 'A comprehensive management system for hospitals and clinics, integrating all aspects of healthcare delivery into one user-friendly platform'
            }
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {features.map((feature, i) => (
              <div 
                key={i}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={cn("mb-4", isRTL && "flex justify-end")}>
                  {feature.icon}
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
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-[#1F3541] rounded-2xl p-8 md:p-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className={cn(
              "text-2xl md:text-3xl font-bold mb-8 text-center",
              isRTL && "font-cairo"
            )}>
              {isRTL ? 'مزايا حلول الرعاية الصحية' : 'Benefits of Healthcare Solutions'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className={cn(
                    "text-xl font-semibold mb-2",
                    isRTL && "font-cairo"
                  )}>
                    {benefit.title[language]}
                  </h3>
                  <p className={cn(
                    "text-gray-300",
                    isRTL && "font-cairo"
                  )}>
                    {benefit.description[language]}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button 
                size="lg"
                className="bg-[#D5A849] hover:bg-[#c49842] text-white"
              >
                {isRTL ? 'اطلب عرضاً توضيحياً' : 'Request a Demo'}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}