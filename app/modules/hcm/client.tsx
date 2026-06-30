'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import {
  Users, Bell, FileText, Calendar,
  Ticket, Calculator, UserCog, Coins
} from 'lucide-react';

export default function HcmPage() {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'BCorHCM - Human Capital Management',
      subtitle: 'Your comprehensive solution for managing human capital, designed to empower organizations with efficient workforce management capabilities',
      features: [
        {
          title: 'GCC Compliance',
          description: 'Ensures adherence to regulations specific to the GCC region'
        },
        {
          title: 'Attendance Report',
          description: 'Monitor and track employee attendance effortlessly with detailed reports that provide insights into working hours, absences, and tardiness'
        },
        {
          title: 'Leave Management',
          description: 'Streamline leave requests, approvals, and tracking with our intuitive leave management system'
        },
        {
          title: 'Document Expiry Alert',
          description: 'Stay compliant and organized — get timely alerts for document expiry'
        },
        {
          title: 'Ticket Management',
          description: 'Efficiently handle employee queries, requests, and grievances'
        },
        {
          title: 'Provisions & Accounts Management',
          description: 'Seamlessly handle employee provisions and accounts'
        },
        {
          title: 'Employee Self-Service (ESS)',
          description: 'Empower employees to manage their own information through our user-friendly self-service portal'
        },
        {
          title: 'Loan Management',
          description: 'Manage employee loans efficiently, from application and approval to repayment'
        }
      ]
    },
    ar: {
      title: 'بي كور لإدارة رأس المال البشري',
      subtitle: 'حل شامل لإدارة رأس المال البشري، مصمم لتمكين المؤسسات من إدارة القوى العاملة بكفاءة عالية',
      features: [
        {
          title: 'الامتثال لدول مجلس التعاون الخليجي',
          description: 'ضمان الامتثال للوائح الخاصة بمنطقة دول مجلس التعاون الخليجي'
        },
        {
          title: 'تقرير الحضور',
          description: 'مراقبة وتتبع حضور الموظفين بسهولة مع تقارير مفصلة توفر رؤى حول ساعات العمل والغياب والتأخير'
        },
        {
          title: 'إدارة الإجازات',
          description: 'تبسيط طلبات الإجازة والموافقات والتتبع مع نظام إدارة الإجازات البديهي'
        },
        {
          title: 'تنبيه انتهاء صلاحية المستندات',
          description: 'البقاء ممتثلاً ومنظماً — احصل على تنبيهات في الوقت المناسب لانتهاء صلاحية المستندات'
        },
        {
          title: 'إدارة التذاكر',
          description: 'معالجة استفسارات الموظفين وطلباتهم وشكاواهم بكفاءة'
        },
        {
          title: 'إدارة المخصصات والحسابات',
          description: 'إدارة مخصصات وحسابات الموظفين بسلاسة'
        },
        {
          title: 'خدمة الموظف الذاتية (ESS)',
          description: 'تمكين الموظفين من إدارة معلوماتهم الخاصة من خلال بوابة الخدمة الذاتية سهلة الاستخدام'
        },
        {
          title: 'إدارة القروض',
          description: 'إدارة قروض الموظفين بكفاءة، من التقديم والموافقة إلى السداد'
        }
      ]
    }
  };

  const c = content[language];

  const featureIcons = [
    <Users className="h-8 w-8 text-[#D5A849]" />,
    <Calendar className="h-8 w-8 text-[#D5A849]" />,
    <FileText className="h-8 w-8 text-[#D5A849]" />,
    <Bell className="h-8 w-8 text-[#D5A849]" />,
    <Ticket className="h-8 w-8 text-[#D5A849]" />,
    <Calculator className="h-8 w-8 text-[#D5A849]" />,
    <UserCog className="h-8 w-8 text-[#D5A849]" />,
    <Coins className="h-8 w-8 text-[#D5A849]" />
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white",
              isRTL && "font-cairo"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {c.title}
          </motion.h1>
          <motion.p
            className={cn(
              "text-lg text-gray-600 dark:text-gray-300",
              isRTL && "font-cairo"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {c.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {c.features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={cn("mb-4", isRTL && "flex justify-end")}>
                {featureIcons[i]}
              </div>
              <h2 className={cn(
                "text-xl font-semibold mb-2 text-gray-900 dark:text-white",
                isRTL && "font-cairo text-right"
              )}>
                {feature.title}
              </h2>
              <p className={cn(
                "text-gray-600 dark:text-gray-300",
                isRTL && "font-cairo text-right"
              )}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
