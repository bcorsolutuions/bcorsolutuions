"use client";

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Building2, Calculator, Clock, Package } from "lucide-react";

export default function FixedAssetsPage() {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'Fixed Assets Management',
      stats: [
        { label: 'Total Assets', note: '+4 from last month' },
        { label: 'Asset Value', note: '+$50K from last month' },
        { label: 'Maintenance Due', note: 'Assets need attention' },
        { label: 'New Assets', note: 'Acquired this month' }
      ],
      recentAssetsTitle: 'Recent Assets',
      tableHeaders: ['Asset ID', 'Name', 'Category', 'Purchase Date', 'Value', 'Status'],
      rows: [
        {
          id: 'FA-2025-001',
          name: 'Industrial Printer XL-5000',
          category: 'Equipment',
          date: '2025-01-15',
          value: '$25,000',
          status: 'Active',
          statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
        },
        {
          id: 'FA-2025-002',
          name: 'Office Workstation Set',
          category: 'Furniture',
          date: '2025-02-01',
          value: '$3,500',
          status: 'Active',
          statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
        },
        {
          id: 'FA-2024-089',
          name: 'Delivery Van - Model X',
          category: 'Vehicles',
          date: '2024-12-10',
          value: '$45,000',
          status: 'Maintenance',
          statusColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
        }
      ]
    },
    ar: {
      title: 'إدارة الأصول الثابتة',
      stats: [
        { label: 'إجمالي الأصول', note: '+4 مقارنةً بالشهر الماضي' },
        { label: 'قيمة الأصول', note: '+50,000$ مقارنةً بالشهر الماضي' },
        { label: 'الصيانة المستحقة', note: 'أصول تحتاج إلى اهتمام' },
        { label: 'الأصول الجديدة', note: 'تم الاقتناء هذا الشهر' }
      ],
      recentAssetsTitle: 'الأصول الأخيرة',
      tableHeaders: ['رقم الأصل', 'الاسم', 'الفئة', 'تاريخ الشراء', 'القيمة', 'الحالة'],
      rows: [
        {
          id: 'FA-2025-001',
          name: 'طابعة صناعية XL-5000',
          category: 'معدات',
          date: '2025-01-15',
          value: '25,000$',
          status: 'نشط',
          statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
        },
        {
          id: 'FA-2025-002',
          name: 'مجموعة محطات عمل مكتبية',
          category: 'أثاث',
          date: '2025-02-01',
          value: '3,500$',
          status: 'نشط',
          statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
        },
        {
          id: 'FA-2024-089',
          name: 'شاحنة توصيل - موديل X',
          category: 'مركبات',
          date: '2024-12-10',
          value: '45,000$',
          status: 'صيانة',
          statusColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
        }
      ]
    }
  };

  const c = content[language];

  const statIcons = [
    <Building2 className="h-4 w-4 text-muted-foreground" />,
    <Calculator className="h-4 w-4 text-muted-foreground" />,
    <Clock className="h-4 w-4 text-muted-foreground" />,
    <Package className="h-4 w-4 text-muted-foreground" />
  ];

  const statValues = ['245', '$1.2M', '12', '8'];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto py-8 px-4 md:px-6 space-y-8">
      <div className={cn("flex justify-between items-center", isRTL && "flex-row-reverse")}>
        <h1 className={cn(
          "text-3xl font-bold tracking-tight text-gray-900 dark:text-white",
          isRTL && "font-cairo"
        )}>
          {c.title}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {c.stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className={cn(
              "flex flex-row items-center justify-between space-y-0 pb-2",
              isRTL && "flex-row-reverse"
            )}>
              <CardTitle className={cn("text-sm font-medium", isRTL && "font-cairo")}>
                {stat.label}
              </CardTitle>
              {statIcons[i]}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statValues[i]}</div>
              <p className={cn("text-xs text-muted-foreground", isRTL && "font-cairo text-right")}>
                {stat.note}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className={cn(isRTL && "font-cairo text-right")}>{c.recentAssetsTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                {c.tableHeaders.map((header, i) => (
                  <TableHead key={i} className={cn(isRTL && "font-cairo text-right")}>{header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {c.rows.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell className={cn(isRTL && "font-cairo")}>{row.name}</TableCell>
                  <TableCell className={cn(isRTL && "font-cairo")}>{row.category}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.value}</TableCell>
                  <TableCell>
                    <span className={cn(
                      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                      row.statusColor,
                      isRTL && "font-cairo"
                    )}>
                      {row.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
