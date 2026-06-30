'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import Link from 'next/link';
import {
  BarChart3, ShoppingCart, Package, Users,
  ClipboardList, Factory, Building2, Car,
  Hospital, HeartHandshake, Building, Truck
} from 'lucide-react';

export default function ModulesPage() {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'BCOR Modules',
      subtitle: 'Comprehensive solutions for all your business needs',
      modules: [
        {
          title: 'Finance',
          description: 'Take full control of your organization\'s financial health with comprehensive accounting tools.',
          href: '/modules/finance'
        },
        {
          title: 'Trading',
          description: 'Manage procurement, sales, and vendor-customer relationships efficiently.',
          href: '/modules/trading'
        },
        {
          title: 'Inventory',
          description: 'Optimize inventory control and warehouse management with real-time analytics.',
          href: '/modules/inventory'
        },
        {
          title: 'HCM',
          description: 'Streamline HR operations from recruitment to payroll and performance management.',
          href: '/modules/hcm'
        },
        {
          title: 'Projects',
          description: 'Deliver projects on time and within scope with comprehensive project management.',
          href: '/modules/projects'
        },
        {
          title: 'Production',
          description: 'Support manufacturing operations with intelligent workflows and shop floor control.',
          href: '/modules/production'
        },
        {
          title: 'Fixed Assets',
          description: 'Manage asset lifecycle from acquisition to disposal with automated compliance.',
          href: '/modules/fixed-assets'
        },
        {
          title: 'Automotive',
          description: 'Streamline service bookings, spare parts, and customer engagement for automotive businesses.',
          href: '/modules/automotive'
        },
        {
          title: 'Healthcare',
          description: 'Manage patient care, medical records, and appointments with utmost efficiency.',
          href: '/modules/healthcare'
        },
        {
          title: 'CRM',
          description: 'Build lasting relationships with prospects and customers through every interaction.',
          href: '/modules/crm'
        },
        {
          title: 'Property',
          description: 'Simplify lease management, rent tracking, and maintenance for real estate operations.',
          href: '/modules/property'
        },
        {
          title: 'Ready Mix',
          description: 'Manage concrete batching, delivery, and quality control with precision.',
          href: '/modules/ready-mix'
        }
      ]
    },
    ar: {
      title: 'وحدات بي كور',
      subtitle: 'حلول شاملة لجميع احتياجات عملك',
      modules: [
        {
          title: 'المالية',
          description: 'تحكم كامل في الصحة المالية لمؤسستك مع أدوات محاسبة شاملة.',
          href: '/modules/finance'
        },
        {
          title: 'التجارة',
          description: 'إدارة المشتريات والمبيعات وعلاقات الموردين والعملاء بكفاءة.',
          href: '/modules/trading'
        },
        {
          title: 'المخزون',
          description: 'تحسين التحكم في المخزون وإدارة المستودعات مع تحليلات في الوقت الفعلي.',
          href: '/modules/inventory'
        },
        {
          title: 'إدارة رأس المال البشري',
          description: 'تبسيط عمليات الموارد البشرية من التوظيف إلى الرواتب وإدارة الأداء.',
          href: '/modules/hcm'
        },
        {
          title: 'المشاريع',
          description: 'تسليم المشاريع في الوقت المحدد وضمن النطاق المحدد مع إدارة مشاريع شاملة.',
          href: '/modules/projects'
        },
        {
          title: 'الإنتاج',
          description: 'دعم عمليات التصنيع مع سير عمل ذكي والتحكم في أرضية المصنع.',
          href: '/modules/production'
        },
        {
          title: 'الأصول الثابتة',
          description: 'إدارة دورة حياة الأصول من الاقتناء إلى التصرف مع الامتثال الآلي.',
          href: '/modules/fixed-assets'
        },
        {
          title: 'السيارات',
          description: 'تبسيط حجوزات الخدمة وقطع الغيار وتفاعل العملاء في قطاع السيارات.',
          href: '/modules/automotive'
        },
        {
          title: 'الرعاية الصحية',
          description: 'إدارة رعاية المرضى والسجلات الطبية والمواعيد بأعلى كفاءة.',
          href: '/modules/healthcare'
        },
        {
          title: 'إدارة علاقات العملاء',
          description: 'بناء علاقات دائمة مع العملاء المحتملين والحاليين في كل تفاعل.',
          href: '/modules/crm'
        },
        {
          title: 'العقارات',
          description: 'تبسيط إدارة عقود الإيجار وتتبع الإيجارات والصيانة لعمليات العقارات.',
          href: '/modules/property'
        },
        {
          title: 'الخرسانة الجاهزة',
          description: 'إدارة عمليات خلط الخرسانة والتوصيل ومراقبة الجودة بدقة عالية.',
          href: '/modules/ready-mix'
        }
      ]
    }
  };

  const c = content[language];

  const moduleIcons = [
    <BarChart3 className="h-8 w-8 text-[#D5A849]" />,
    <ShoppingCart className="h-8 w-8 text-[#D5A849]" />,
    <Package className="h-8 w-8 text-[#D5A849]" />,
    <Users className="h-8 w-8 text-[#D5A849]" />,
    <ClipboardList className="h-8 w-8 text-[#D5A849]" />,
    <Factory className="h-8 w-8 text-[#D5A849]" />,
    <Building2 className="h-8 w-8 text-[#D5A849]" />,
    <Car className="h-8 w-8 text-[#D5A849]" />,
    <Hospital className="h-8 w-8 text-[#D5A849]" />,
    <HeartHandshake className="h-8 w-8 text-[#D5A849]" />,
    <Building className="h-8 w-8 text-[#D5A849]" />,
    <Truck className="h-8 w-8 text-[#D5A849]" />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {c.modules.map((module, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={module.href} className="block">
                <div className={cn("mb-4", isRTL && "flex justify-end")}>
                  {moduleIcons[i]}
                </div>
                <h2 className={cn(
                  "text-xl font-semibold mb-2 text-gray-900 dark:text-white",
                  isRTL && "font-cairo text-right"
                )}>
                  {module.title}
                </h2>
                <p className={cn(
                  "text-gray-600 dark:text-gray-300",
                  isRTL && "font-cairo text-right"
                )}>
                  {module.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
