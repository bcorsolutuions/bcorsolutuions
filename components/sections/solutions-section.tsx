'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { motion } from '@/lib/motion';

export function SolutionsSection() {
  const { language, isRTL } = useLanguage();

  const industries = [
    {
      name: {
        en: 'Trading & Distribution',
        ar: 'التجارة والتوزيع'
      },
      description: {
        en: 'Streamline your trading operations with comprehensive inventory management, order processing, and distribution tracking.',
        ar: 'تبسيط عمليات التجارة مع إدارة شاملة للمخزون ومعالجة الطلبات وتتبع التوزيع.'
      },
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg',
      features: [
        {
          en: 'Advanced inventory management',
          ar: 'إدارة متقدمة للمخزون'
        },
        {
          en: 'Order processing automation',
          ar: 'أتمتة معالجة الطلبات'
        },
        {
          en: 'Distribution tracking',
          ar: 'تتبع التوزيع'
        }
      ]
    },
    {
      name: {
        en: 'Manufacturing',
        ar: 'التصنيع'
      },
      description: {
        en: 'Optimize production processes, manage resources, and enhance quality control with our manufacturing solutions.',
        ar: 'تحسين عمليات الإنتاج وإدارة الموارد وتعزيز مراقبة الجودة مع حلولنا للتصنيع.'
      },
      image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg',
      features: [
        {
          en: 'Production planning & scheduling',
          ar: 'تخطيط وجدولة الإنتاج'
        },
        {
          en: 'Resource management',
          ar: 'إدارة الموارد'
        },
        {
          en: 'Quality control systems',
          ar: 'أنظمة مراقبة الجودة'
        }
      ]
    },
    {
      name: {
        en: 'Construction & Contracting',
        ar: 'البناء والمقاولات'
      },
      description: {
        en: 'Manage construction projects efficiently with integrated project management, resource allocation, and cost control.',
        ar: 'إدارة مشاريع البناء بكفاءة مع إدارة المشاريع المتكاملة وتخصيص الموارد ومراقبة التكاليف.'
      },
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg',
      features: [
        {
          en: 'Project management',
          ar: 'إدارة المشاريع'
        },
        {
          en: 'Resource allocation',
          ar: 'تخصيص الموارد'
        },
        {
          en: 'Cost control',
          ar: 'مراقبة التكاليف'
        }
      ]
    },
    {
      name: {
        en: 'Healthcare',
        ar: 'الرعاية الصحية'
      },
      description: {
        en: 'Comprehensive solutions for clinics and hospitals, including patient management, billing, and medical records.',
        ar: 'حلول شاملة للعيادات والمستشفيات، بما في ذلك إدارة المرضى والفواتير والسجلات الطبية.'
      },
      image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg',
      features: [
        {
          en: 'Patient management',
          ar: 'إدارة المرضى'
        },
        {
          en: 'Medical records',
          ar: 'السجلات الطبية'
        },
        {
          en: 'Billing & insurance',
          ar: 'الفواتير والتأمين'
        }
      ]
    },
    {
      name: {
        en: 'Real Estate & Property',
        ar: 'العقارات وإدارة الممتلكات'
      },
      description: {
        en: 'Streamline property management, tenant relations, and maintenance scheduling with our real estate solutions.',
        ar: 'تبسيط إدارة العقارات وعلاقات المستأجرين وجدولة الصيانة مع حلولنا العقارية.'
      },
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
      features: [
        {
          en: 'Property management',
          ar: 'إدارة العقارات'
        },
        {
          en: 'Tenant management',
          ar: 'إدارة المستأجرين'
        },
        {
          en: 'Maintenance scheduling',
          ar: 'جدولة الصيانة'
        }
      ]
    },
    {
      name: {
        en: 'Readymix & Concrete',
        ar: 'الخرسانة الجاهزة'
      },
      description: {
        en: 'Specialized solutions for concrete production, delivery management, and quality control.',
        ar: 'حلول متخصصة لإنتاج الخرسانة وإدارة التوصيل ومراقبة الجودة.'
      },
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      features: [
        {
          en: 'Production management',
          ar: 'إدارة الإنتاج'
        },
        {
          en: 'Delivery scheduling',
          ar: 'جدولة التوصيل'
        },
        {
          en: 'Quality assurance',
          ar: 'ضمان الجودة'
        }
      ]
    },
    {
      name: {
        en: 'Automotive & Workshop',
        ar: 'السيارات وورش العمل'
      },
      description: {
        en: 'Complete workshop management system including service scheduling, parts inventory, and customer management.',
        ar: 'نظام إدارة ورشة عمل كامل يشمل جدولة الخدمة وجرد قطع الغيار وإدارة العملاء.'
      },
      image: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg',
      features: [
        {
          en: 'Service management',
          ar: 'إدارة الخدمة'
        },
        {
          en: 'Parts inventory',
          ar: 'جرد قطع الغيار'
        },
        {
          en: 'Customer tracking',
          ar: 'تتبع العملاء'
        }
      ]
    },
    {
      name: {
        en: 'Fixed Asset Management',
        ar: 'إدارة الأصول الثابتة'
      },
      description: {
        en: 'Track and manage fixed assets, depreciation, and maintenance across your organization.',
        ar: 'تتبع وإدارة الأصول الثابتة والإهلاك والصيانة في جميع أنحاء مؤسستك.'
      },
      image: 'https://images.pexels.com/photos/159275/macro-focus-cogwheel-gear-159275.jpeg',
      features: [
        {
          en: 'Asset tracking',
          ar: 'تتبع الأصول'
        },
        {
          en: 'Depreciation management',
          ar: 'إدارة الإهلاك'
        },
        {
          en: 'Maintenance scheduling',
          ar: 'جدولة الصيانة'
        }
      ]
    },
    {
      name: {
        en: 'Wholesale & Supply Chain',
        ar: 'تجارة الجملة وسلسلة التوريد'
      },
      description: {
        en: 'Optimize your supply chain with advanced inventory management and supplier relationship tools.',
        ar: 'تحسين سلسلة التوريد الخاصة بك مع إدارة المخزون المتقدمة وأدوات علاقات الموردين.'
      },
      image: 'https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg',
      features: [
        {
          en: 'Supply chain optimization',
          ar: 'تحسين سلسلة التوريد'
        },
        {
          en: 'Supplier management',
          ar: 'إدارة الموردين'
        },
        {
          en: 'Inventory control',
          ar: 'مراقبة المخزون'
        }
      ]
    },
    {
      name: {
        en: 'Hospitality & Restaurants',
        ar: 'الضيافة والمطاعم'
      },
      description: {
        en: 'Manage reservations, inventory, and staff scheduling for hospitality businesses.',
        ar: 'إدارة الحجوزات والمخزون وجدولة الموظفين لأعمال الضيافة.'
      },
      image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
      features: [
        {
          en: 'Reservation management',
          ar: 'إدارة الحجوزات'
        },
        {
          en: 'Inventory tracking',
          ar: 'تتبع المخزون'
        },
        {
          en: 'Staff scheduling',
          ar: 'جدولة الموظفين'
        }
      ]
    },
    {
      name: {
        en: 'Logistics & Transportation',
        ar: 'الخدمات اللوجستية والنقل'
      },
      description: {
        en: 'Streamline logistics operations with route planning, fleet management, and delivery tracking.',
        ar: 'تبسيط العمليات اللوجستية مع تخطيط المسار وإدارة الأسطول وتتبع التسليم.'
      },
      image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg',
      features: [
        {
          en: 'Fleet management',
          ar: 'إدارة الأسطول'
        },
        {
          en: 'Route optimization',
          ar: 'تحسين المسار'
        },
        {
          en: 'Delivery tracking',
          ar: 'تتبع التسليم'
        }
      ]
    },
    {
      name: {
        en: 'Financial Services',
        ar: 'الخدمات المالية'
      },
      description: {
        en: 'Comprehensive financial management solutions for banking, insurance, and investment firms.',
        ar: 'حلول إدارة مالية شاملة للبنوك وشركات التأمين والاستثمار.'
      },
      image: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg',
      features: [
        {
          en: 'Financial reporting',
          ar: 'التقارير المالية'
        },
        {
          en: 'Risk management',
          ar: 'إدارة المخاطر'
        },
        {
          en: 'Compliance tracking',
          ar: 'تتبع الامتثال'
        }
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
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
            {isRTL ? 'حلول مخصصة لصناعتك' : 'Industry-Specific Solutions'}
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
              ? 'حلول بي كور مصممة خصيصًا لتلبية الاحتياجات الفريدة لمختلف الصناعات' 
              : 'BCor solutions are tailored to meet the unique needs of different industries'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, i) => (
            <motion.div 
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative h-48">
                <Image
                  src={industry.image}
                  alt={industry.name[language]}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className={cn(
                    "text-xl font-bold text-white mb-2",
                    isRTL && "font-cairo text-right"
                  )}>
                    {industry.name[language]}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className={cn(
                  "text-gray-600 dark:text-gray-300 mb-6",
                  isRTL && "font-cairo text-right"
                )}>
                  {industry.description[language]}
                </p>
                
                <ul className="space-y-3">
                  {industry.features.map((feature, j) => (
                    <li key={j} className={cn(
                      "flex items-center gap-3",
                      isRTL && "flex-row-reverse text-right"
                    )}>
                      <CheckCircle2 className="h-5 w-5 text-[#D5A849] flex-shrink-0" />
                      <span className={cn(
                        "text-gray-700 dark:text-gray-300",
                        isRTL && "font-cairo"
                      )}>
                        {feature[language]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}