'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { t } from '@/lib/translations';
import { cn } from '@/lib/utils';

export function Footer() {
  const { language, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: {
        en: 'Product',
        ar: 'المنتج'
      },
      links: [
        { key: 'nav.features', href: '/modules' },
        { key: 'nav.solutions', href: '/modules/healthcare' },
        { key: 'nav.contact', href: '/contact' },
      ],
    },
    {
      title: {
        en: 'Company',
        ar: 'الشركة'
      },
      links: [
        { key: 'nav.about', href: '/about' },
        { 
          key: 'careers', 
          href: '/careers',
          label: {
            en: 'Careers',
            ar: 'الوظائف'
          }
        },
        { 
          key: 'press', 
          href: '/press',
          label: {
            en: 'Press',
            ar: 'الصحافة'
          }
        },
      ],
    },
    {
      title: {
        en: 'Resources',
        ar: 'الموارد'
      },
      links: [
        { 
          key: 'documentation', 
          href: '/docs',
          label: {
            en: 'Documentation',
            ar: 'الوثائق'
          }
        },
        { 
          key: 'support', 
          href: '/support',
          label: {
            en: 'Support',
            ar: 'الدعم'
          }
        },
        { 
          key: 'training', 
          href: '/training',
          label: {
            en: 'Training',
            ar: 'التدريب'
          }
        },
        { 
          key: 'status', 
          href: '/status',
          label: {
            en: 'Status',
            ar: 'حالة النظام'
          }
        },
      ],
    },
    {
      title: {
        en: 'Legal',
        ar: 'قانوني'
      },
      links: [
        { key: 'footer.privacy', href: '/privacy' },
        { key: 'footer.terms', href: '/terms' },
        { 
          key: 'security', 
          href: '/security',
          label: {
            en: 'Security',
            ar: 'الأمان'
          }
        },
      ],
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] border-t border-white/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#D5A849]/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Logo and info */}
          <div className="col-span-2 relative z-10">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/Logo.png" 
                alt="BCor Solutions" 
                width={140} 
                height={46}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className={cn(
              "text-sm text-gray-300 mb-4 max-w-xs",
              isRTL ? "font-cairo text-right" : ""
            )}>
              {isRTL 
                ? "نقدم حلول متكاملة لتخطيط موارد المؤسسات لمساعدة الشركات على تحسين كفاءتها وزيادة إنتاجيتها."
                : "We provide integrated ERP solutions to help businesses optimize efficiency and increase productivity."}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Link href="#" className="text-gray-400 hover:text-[#D5A849] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#D5A849] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#D5A849] transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#D5A849] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx} className={cn("relative z-10", isRTL ? "text-right" : "")}>
              <h3 className={cn(
                "font-medium text-sm mb-4 text-white",
                isRTL ? "font-cairo" : ""
              )}>
                {column.title[language]}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      href={link.href}
                      className={cn(
                        "text-sm text-gray-300 hover:text-[#D5A849] transition-colors",
                        isRTL ? "font-cairo" : ""
                      )}
                    >
                      {link.label 
                        ? link.label[language]
                        : t(link.key, language)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={cn(
          "mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center relative z-10",
          isRTL ? "md:flex-row-reverse" : ""
        )}>
          <p className={cn(
            "text-sm text-gray-300",
            isRTL ? "font-cairo" : ""
          )}>
            &copy; {currentYear} BCor Solutions. {t('footer.rights', language)}
          </p>
          <div className={cn(
            "mt-4 md:mt-0 flex space-x-4",
            isRTL ? "space-x-reverse" : ""
          )}>
            <Link 
              href="/terms"
              className={cn(
                "text-sm text-gray-300 hover:text-[#D5A849] transition-colors",
                isRTL ? "font-cairo" : ""
              )}
            >
              {t('footer.terms', language)}
            </Link>
            <Link 
              href="/privacy"
              className={cn(
                "text-sm text-gray-300 hover:text-[#D5A849] transition-colors",
                isRTL ? "font-cairo" : ""
              )}
            >
              {t('footer.privacy', language)}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}