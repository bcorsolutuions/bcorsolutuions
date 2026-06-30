'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  BarChart2,
  DollarSign,
  Truck,
  FileText,
  Settings,
  AlertCircle
} from 'lucide-react';

export default function TradingPage() {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'Trading Module',
      subtitle: 'Efficiently manage your buying and selling operations with BCor\'s comprehensive trading solution',
      fromLastMonth: 'from last month',
      features: [
        {
          title: 'Sales Management',
          description: 'Streamline your sales process with comprehensive order management and tracking'
        },
        {
          title: 'Procurement',
          description: 'Optimize purchasing with automated workflows and vendor management'
        },
        {
          title: 'Customer Relations',
          description: 'Maintain strong customer relationships with integrated CRM features'
        },
        {
          title: 'Performance Analytics',
          description: 'Track key metrics and generate insights for better decision making'
        },
        {
          title: 'Logistics Integration',
          description: 'Seamlessly manage shipping and delivery operations'
        },
        {
          title: 'Configuration',
          description: 'Customize trading parameters and business rules'
        }
      ],
      metrics: [
        { title: 'Total Sales' },
        { title: 'Revenue' },
        { title: 'Orders' },
        { title: 'Pending' }
      ]
    },
    ar: {
      title: 'وحدة التجارة',
      subtitle: 'إدارة عمليات البيع والشراء الخاصة بك بكفاءة مع حل التجارة الشامل من بي كور',
      fromLastMonth: 'مقارنةً بالشهر الماضي',
      features: [
        {
          title: 'إدارة المبيعات',
          description: 'تبسيط عملية المبيعات مع إدارة وتتبع شامل للطلبات'
        },
        {
          title: 'المشتريات',
          description: 'تحسين المشتريات مع سير العمل الآلي وإدارة الموردين'
        },
        {
          title: 'علاقات العملاء',
          description: 'الحفاظ على علاقات قوية مع العملاء مع ميزات إدارة علاقات العملاء المتكاملة'
        },
        {
          title: 'تحليلات الأداء',
          description: 'تتبع المقاييس الرئيسية وتوليد رؤى لاتخاذ قرارات أفضل'
        },
        {
          title: 'تكامل الخدمات اللوجستية',
          description: 'إدارة عمليات الشحن والتسليم بسلاسة'
        },
        {
          title: 'الإعداد والتكوين',
          description: 'تخصيص معايير التجارة وقواعد العمل'
        }
      ],
      metrics: [
        { title: 'إجمالي المبيعات' },
        { title: 'الإيرادات' },
        { title: 'الطلبات' },
        { title: 'قيد الانتظار' }
      ]
    }
  };

  const c = content[language];

  const featureIcons = [
    <ShoppingCart className="h-8 w-8 text-blue-600" />,
    <Package className="h-8 w-8 text-green-600" />,
    <Users className="h-8 w-8 text-purple-600" />,
    <TrendingUp className="h-8 w-8 text-orange-600" />,
    <Truck className="h-8 w-8 text-red-600" />,
    <Settings className="h-8 w-8 text-teal-600" />
  ];

  const metricData = [
    { icon: <BarChart2 className="h-6 w-6 text-blue-600" />, value: '$1.2M', trend: '+12%' },
    { icon: <DollarSign className="h-6 w-6 text-green-600" />, value: '$850K', trend: '+8%' },
    { icon: <FileText className="h-6 w-6 text-purple-600" />, value: '1,234', trend: '+15%' },
    { icon: <AlertCircle className="h-6 w-6 text-orange-600" />, value: '45', trend: '-5%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <motion.h1
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white",
              isRTL && "font-cairo text-right"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {c.title}
          </motion.h1>

          <motion.p
            className={cn(
              "text-lg text-gray-600 dark:text-gray-300 mb-8",
              isRTL && "font-cairo text-right"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {c.subtitle}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metricData.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className={cn(
                      "text-sm font-medium",
                      isRTL && "font-cairo"
                    )}>
                      {c.metrics[i].title}
                    </CardTitle>
                    {metric.icon}
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <p className={cn(
                      "text-xs text-muted-foreground",
                      metric.trend.startsWith('+') ? "text-green-600" : "text-red-600"
                    )}>
                      {metric.trend} {c.fromLastMonth}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {c.features.map((feature, i) => (
                <Card key={i} className="bg-white dark:bg-gray-900">
                  <CardHeader>
                    <div className={cn("mb-4", isRTL && "flex justify-end")}>
                      {featureIcons[i]}
                    </div>
                    <CardTitle className={cn(
                      "text-xl font-semibold mb-2",
                      isRTL && "font-cairo text-right"
                    )}>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={cn(
                      "text-gray-600 dark:text-gray-300",
                      isRTL && "font-cairo text-right"
                    )}>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
