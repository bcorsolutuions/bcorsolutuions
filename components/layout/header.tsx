'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/lib/language-context';
import { t } from '@/lib/translations';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { ScheduleDemoModal } from '@/components/ui/schedule-demo-modal';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const moduleItems = [
    { key: 'finance',      href: '/modules/finance',      label: { en: 'Finance',      ar: 'المالية' },          desc: { en: 'Accounting, budgets & reporting',        ar: 'محاسبة وموازنة وتقارير مالية' } },
    { key: 'trading',      href: '/modules/trading',      label: { en: 'Trading',      ar: 'التجارة' },          desc: { en: 'Sales, procurement & vendors',            ar: 'مبيعات ومشتريات وإدارة موردين' } },
    { key: 'inventory',    href: '/modules/inventory',    label: { en: 'Inventory',    ar: 'المخزون' },          desc: { en: 'Stock control & warehouse ops',           ar: 'مراقبة مخزون وعمليات مستودع' } },
    { key: 'hcm',          href: '/modules/hcm',          label: { en: 'HCM',          ar: 'الموارد البشرية' },  desc: { en: 'HR, attendance, payroll & compliance',    ar: 'موارد بشرية وحضور ورواتب' } },
    { key: 'projects',     href: '/modules/projects',     label: { en: 'Projects',     ar: 'المشاريع' },         desc: { en: 'Planning, tasks & collaboration',         ar: 'تخطيط ومهام وتعاون الفريق' } },
    { key: 'production',   href: '/modules/production',   label: { en: 'Production',   ar: 'الإنتاج' },          desc: { en: 'Manufacturing & shop floor control',      ar: 'تصنيع والتحكم في خط الإنتاج' } },
    { key: 'fixed-assets', href: '/modules/fixed-assets', label: { en: 'Fixed Assets', ar: 'الأصول الثابتة' },  desc: { en: 'Asset lifecycle & depreciation',          ar: 'دورة حياة الأصول والاستهلاك' } },
    { key: 'crm',          href: '/modules/crm',          label: { en: 'CRM',          ar: 'علاقات العملاء' },   desc: { en: 'Leads, pipeline & customer tracking',     ar: 'عملاء محتملون ومسار وتتبع' } },
    { key: 'property',     href: '/modules/property',     label: { en: 'Property',     ar: 'العقارات' },         desc: { en: 'Leases, rent & maintenance tracking',     ar: 'إيجارات وتتبع وصيانة' } },
    { key: 'ready-mix',    href: '/modules/ready-mix',    label: { en: 'Ready Mix',    ar: 'الخرسانة الجاهزة' }, desc: { en: 'Batching, delivery & quality control',    ar: 'خلط وتوصيل ومراقبة جودة' } },
  ];

  const solutionItems = [
    { key: 'healthcare', href: '/modules/healthcare',    label: { en: 'BCor Healthcare', ar: 'بي كور للرعاية الصحية' },    desc: { en: 'Hospitals, clinics & medical centers',  ar: 'مستشفيات وعيادات ومراكز طبية' } },
    { key: 'automotive', href: '/modules/automotive',    label: { en: 'BCor Automotive', ar: 'بي كور للسيارات' },          desc: { en: 'Service centers & dealerships',         ar: 'مراكز صيانة ووكالات سيارات' } },
    { key: 'restaurant', href: '/solutions/restaurant',  label: { en: 'BCor Restaurant', ar: 'بي كور للمطاعم' },           desc: { en: 'Restaurants, cafés & cloud kitchens',   ar: 'مطاعم ومقاهي ومطابخ سحابية' } },
    { key: 'van-sales',  href: '/solutions/van-sales',   label: { en: 'BCor Van Sales',  ar: 'بي كور للمبيعات المتنقلة' }, desc: { en: 'Mobile sales, routes & field collection', ar: 'مبيعات متنقلة ومسارات وتحصيل ميداني' } },
    { key: 'wms',        href: '/solutions/wms',         label: { en: 'BCor WMS',        ar: 'بي كور لإدارة المستودعات' }, desc: { en: 'Warehouse ops, picking & stock control', ar: 'عمليات المستودع والتجميع والمخزون' } },
    { key: 'workshop',   href: '/solutions/workshop',    label: { en: 'BCor Workshop',   ar: 'بي كور للورشة' },            desc: { en: 'Repair shops & maintenance businesses', ar: 'ورش إصلاح وأعمال الصيانة' } },
    { key: 'pos',        href: '/solutions/pos',         label: { en: 'BCor POS',        ar: 'بي كور لنقاط البيع' },       desc: { en: 'Retail & point-of-sale systems',        ar: 'تجزئة وأنظمة نقاط البيع' } },
    { key: 'logistics',  href: '/solutions/logistics',   label: { en: 'BCor Logistics',  ar: 'بي كور للخدمات اللوجستية' }, desc: { en: 'Fleet, delivery & warehousing',         ar: 'أسطول وتوصيل ومستودعات' } },
    { key: 'readymix',   href: '/solutions/readymix',    label: { en: 'BCor Readymix',   ar: 'بي كور للخرسانة الجاهزة' }, desc: { en: 'Concrete production & delivery',        ar: 'إنتاج الخرسانة الجاهزة وتوصيلها' } },
  ];

  const navItems = [
    { key: 'nav.home', href: '/' },
    {
      key: 'nav.features',
      href: '/modules',
      items: moduleItems
    },
    {
      key: 'nav.solutions',
      href: '/solutions',
      items: solutionItems
    },
    { key: 'nav.about', href: '/about' },
    { key: 'nav.contact', href: '/contact' },
  ];

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
          : "bg-[#0f172a]/80 backdrop-blur-sm text-white"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/BCorLogoLatest4.png"
              alt="BCor ERP"
              className={cn(
                "w-auto object-contain transition-all duration-300",
                isScrolled ? "h-10" : "h-14",
                !isScrolled && "brightness-0 invert"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.key} className={item.key === 'nav.contact' ? 'ml-6' : ''}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className={cn(
                          "text-sm font-medium transition-colors",
                          !isScrolled && "text-white hover:text-white hover:bg-white/10 data-[state=open]:bg-white/10",
                          isRTL ? "font-cairo" : ""
                        )}>
                          {t(item.key, language)}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-2 p-4 md:w-[520px] md:grid-cols-2 lg:w-[640px]">
                            {item.items.map((subItem) => (
                              <li key={subItem.key}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className={cn(
                                      "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                      isRTL && "text-right"
                                    )}
                                  >
                                    <div className={cn("text-sm font-semibold leading-none mb-1 text-gray-900 dark:text-white", isRTL && "font-cairo")}>{subItem.label[language]}</div>
                                    {subItem.desc && (
                                      <p className={cn("text-xs leading-snug text-muted-foreground", isRTL && "font-cairo")}>{subItem.desc[language]}</p>
                                    )}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "text-sm font-medium transition-colors",
                          isScrolled ? "hover:text-primary" : "text-white hover:text-white/80",
                          isRTL ? "font-cairo" : ""
                        )}
                      >
                        {t(item.key, language)}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className={cn("gap-1", !isScrolled && "text-white hover:text-white hover:bg-white/10")}>
                  {language === 'en' ? 'English' : 'العربية'}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('ar')}>
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={cn(!isScrolled && "text-white hover:text-white hover:bg-white/10")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Demo Button */}
            <Button
              onClick={() => setDemoOpen(true)}
              className={cn(
                "bg-[#1F3541] hover:bg-[#1a2c37] text-white",
                isRTL ? "font-cairo" : ""
              )}
            >
              {t('hero.cta.demo', language)}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={cn(!isScrolled && "text-white hover:text-white hover:bg-white/10")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button variant="ghost" size="icon" onClick={toggleMenu} className={cn(!isScrolled && "text-white hover:text-white hover:bg-white/10")}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-background border-b">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.key} className={item.key === 'nav.contact' ? 'mt-4' : ''}>
                {item.items ? (
                  <div className="space-y-2">
                    <div className={cn(
                      "text-sm font-medium",
                      isRTL ? "font-cairo text-right" : ""
                    )}>
                      {t(item.key, language)}
                    </div>
                    <div className="pl-4 space-y-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.key}
                          href={subItem.href}
                          className={cn(
                            "block text-sm text-muted-foreground hover:text-primary",
                            isRTL ? "font-cairo text-right" : ""
                          )}
                          onClick={closeMenu}
                        >
                          {subItem.label[language]}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      isRTL ? "font-cairo text-right" : ""
                    )}
                    onClick={closeMenu}
                  >
                    {t(item.key, language)}
                  </Link>
                )}
              </div>
            ))}

            <div className="flex flex-col space-y-3 pt-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="justify-between">
                    {language === 'en' ? 'English' : 'العربية'}
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLanguage('en')}>
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('ar')}>
                    العربية
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                className={cn(
                  "bg-[#1F3541] hover:bg-[#1a2c37] text-white",
                  isRTL ? "font-cairo" : ""
                )}
              >
                {t('hero.cta.demo', language)}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>

    <ScheduleDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  );
}
