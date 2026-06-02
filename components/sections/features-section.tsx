'use client';

import { useLanguage } from '@/lib/language-context';
import { t } from '@/lib/translations';
import { cn } from '@/lib/utils';
import { 
  BarChart3, Users, ShoppingCart, CreditCard, 
  Building2, Workflow, Hospital, Truck, 
  HeartHandshake, Building, Factory, Wrench,
  FileSpreadsheet, Mail, MessageSquare, Shield
} from 'lucide-react';
import { motion } from '@/lib/motion';

export function FeaturesSection() {
  const { language, isRTL } = useLanguage();

  const sections = [
    {
      title: {
        en: 'Core BCor Modules',
        ar: 'وحدات بي كور الأساسية'
      },
      description: {
        en: 'BCor Solutions boasts a versatile platform featuring multi-company and multi-currency support, alongside an intuitive approval system, ensuring seamless management across diverse business environments.',
        ar: 'تتميز حلول بي كور بمنصة متعددة الاستخدامات تدعم الشركات المتعددة والعملات المتعددة، إلى جانب نظام موافقة سهل الاستخدام، مما يضمن الإدارة السلسة عبر بيئات الأعمال المختلفة.'
      },
      features: [
        {
          icon: <BarChart3 className="h-8 w-8 text-[#D5A849]" />,
          title: {
            en: 'Finance',
            ar: 'المالية'
          },
          description: {
            en: 'Gain comprehensive financial visibility and control with our robust financial management solution',
            ar: 'احصل على رؤية مالية شاملة وتحكم مع حل إدارة مالية قوي'
          }
        },
        {
          icon: <ShoppingCart className="h-8 w-8 text-[#D5A849]" />,
          title: {
            en: 'Trading',
            ar: 'التجارة'
          },
          description: {
            en: 'Empower your trading activities with real-time insights and agile decision-making tools',
            ar: 'تمكين أنشطتك التجارية مع رؤى في الوقت الفعلي وأدوات صنع القرار المرنة'
          }
        },
        {
          icon: <Truck className="h-8 w-8 text-[#D5A849]" />,
          title: {
            en: 'Inventory',
            ar: 'المخزون'
          },
          description: {
            en: 'Optimize inventory management and streamline supply chain operations for improved efficiency',
            ar: 'تحسين إدارة المخزون وتبسيط عمليات سلسلة التوريد لتحسين الكفاءة'
          }
        },
        {
          icon: <Users className="h-8 w-8 text-[#D5A849]" />,
          title: {
            en: 'HCM',
            ar: 'إدارة رأس المال البشري'
          },
          description: {
            en: 'Optimize workforce management and HR processes for enhanced productivity and engagement',
            ar: 'تحسين إدارة القوى العاملة وعمليات الموارد البشرية لتعزيز الإنتاجية والمشاركة'
          }
        }
      ]
    },
    {
      title: {
        en: 'BCor Module Extensions',
        ar: 'امتدادات وحدات بي كور'
      },
      description: {
        en: 'BCor offers a dynamic suite of features including a customizable report designer, intuitive dashboards, stringent security measures, and comprehensive log traceability, ensuring data integrity and informed decision-making at every level.',
        ar: 'يقدم بي كور مجموعة ديناميكية من الميزات تشمل مصمم تقارير قابل للتخصيص، ولوحات معلومات سهلة الاستخدام، وإجراءات أمنية صارمة، وتتبع شامل للسجلات، مما يضمن سلامة البيانات واتخاذ القرارات المستنيرة على كل مستوى.'
      },
      features: [
        {
          icon: <Building2 className="h-8 w-8 text-[#D5A849]" />,
          title: {
            en: 'Fixed Asset',
            ar: 'الأصول الثابتة'
          },
          description: {
            en: 'Efficiently track, manage, and maximize the value of your fixed assets with precision',
            ar: 'تتبع وإدارة وتعظيم قيمة أصولك الثابتة بدقة وكفاءة'
          }
        },
        {
          icon: <Workflow className="h-8 w-8 text-[#D5A849]" />,
          title: {
            en: 'Projects',
            ar: 'المشاريع'
          },
          description: {
            en: 'Simplify project management and resource allocation for seamless construction operations',
            ar: 'تبسيط إدارة المشاريع وتخصيص الموارد لعمليات البناء السلسة'
          }
        },
        {
          icon: <Factory className="h-8 w-8 text-[#D5A849]" />,
          title: {
            en: 'Production',
            ar: 'الإنتاج'
          },
          description: {
            en: 'Drive efficiency and innovation in production processes with our advanced manufacturing module',
            ar: 'دفع الكفاءة والابتكار في عمليات الإنتاج مع وحدة التصنيع المتقدمة لدينا'
          }
        },
        {
          icon: <Wrench className="h-8 w-8 text-[#D5A849]" />,
          title: {
            en: 'Garage / Workshop',
            ar: 'المرآب / ورشة العمل'
          },
          description: {
            en: 'Enhance maintenance and repair operations with intuitive tools designed for workshop management',
            ar: 'تعزيز عمليات الصيانة والإصلاح مع أدوات سهلة الاستخدام مصممة لإدارة ورش العمل'
          }
        }
      ]
    },
    {
      title: {
        en: 'Industry Solutions',
        ar: 'حلول الصناعة'
      },
      description: {
        en: 'BCor offers seamless document traceability, customizable workflows, and integrated email and SMS functionalities, empowering efficient communication and task management within your organization.',
        ar: 'يقدم بي كور تتبع المستندات بسلاسة، وسير العمل القابل للتخصيص، ووظائف البريد الإلكتروني والرسائل القصيرة المتكاملة، مما يعزز التواصل الفعال وإدارة المهام داخل مؤسستك.'
      },
      features: [
        {
          icon: <Hospital className="h-8 w-8 text-[#D5A849]" />,
          title: {
            en: 'Healthcare',
            ar: 'الرعاية الصحية'
          },
          description: {
            en: 'Empowers small and medium hospitals with patient management, billing, EMR, and operational efficiency',
            ar: 'تمكين المستشفيات الصغيرة والمتوسطة من إدارة المرضى والفواتير والسجلات الطبية الإلكترونية والكفاءة التشغيلية'
          }
        },
        {
          icon: <Truck className="h-8 w-8 text-[#D5A849]" />,
          title: {
            en: 'Readymix',
            ar: 'الخرسانة الجاهزة'
          },
          description: {
            en: 'Offers precise control and optimization in the concrete mixing process, operations & Batch process and more',
            ar: 'يوفر تحكمًا دقيقًا وتحسينًا في عملية خلط الخرسانة والعمليات وعملية الدفعات والمزيد'
          }
        },
        {
          icon: <HeartHandshake className="h-8 w-8 text-[#D5A849]" />,
          title: {
            en: 'CRM',
            ar: 'إدارة علاقات العملاء'
          },
          description: {
            en: 'Build strong customer relationships and drive business growth with our powerful CRM capabilities',
            ar: 'بناء علاقات قوية مع العملاء ودفع نمو الأعمال مع قدرات إدارة علاقات العملاء القوية لدينا'
          }
        },
        {
          icon: <Building className="h-8 w-8 text-[#D5A849]" />,
          title: {
            en: 'Property',
            ar: 'العقارات'
          },
          description: {
            en: 'Delivers comprehensive management solutions, ensuring seamless control and optimization across all facets of property management',
            ar: 'يقدم حلول إدارة شاملة، مما يضمن التحكم السلس والتحسين عبر جميع جوانب إدارة العقارات'
          }
        }
      ]
    }
  ];

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
            {isRTL ? 'وحدات قوية' : 'Powerful Modules'}
          </motion.h2>
        </div>

        <div className="space-y-24">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-12">
              <motion.div 
                className="text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className={cn(
                  "text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white",
                  isRTL && "font-cairo"
                )}>
                  {section.title[language]}
                </h3>
                <p className={cn(
                  "text-lg text-gray-600 dark:text-gray-300",
                  isRTL && "font-cairo"
                )}>
                  {section.description[language]}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.features.map((feature, i) => (
                  <motion.div 
                    key={i}
                    className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
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
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}