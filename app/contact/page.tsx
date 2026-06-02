"use client";

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our team',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Your message',
      sendButton: 'Send Message',
      contactInfoTitle: 'Contact Information',
      emailTitle: 'Email',
      phoneTitle: 'Phone',
      addressTitle: 'Address',
      phone: '+1 (555) 123-4567',
      email: 'info@company.com',
      address: '123 Business Street\nSuite 100\nCity, State 12345'
    },
    ar: {
      title: 'تواصل معنا',
      subtitle: 'تواصل مع فريقنا',
      nameLabel: 'الاسم',
      namePlaceholder: 'اسمك',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'بريدك@الإلكتروني.com',
      messageLabel: 'الرسالة',
      messagePlaceholder: 'رسالتك',
      sendButton: 'إرسال الرسالة',
      contactInfoTitle: 'معلومات التواصل',
      emailTitle: 'البريد الإلكتروني',
      phoneTitle: 'الهاتف',
      addressTitle: 'العنوان',
      phone: '+1 (555) 123-4567',
      email: 'info@company.com',
      address: '123 شارع الأعمال\nالجناح 100\nالمدينة، الولاية 12345'
    }
  };

  const c = content[language];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className={cn(
            "text-4xl font-bold text-gray-900 dark:text-white mb-4",
            isRTL && "font-cairo"
          )}>
            {c.title}
          </h1>
          <p className={cn(
            "text-lg text-gray-600 dark:text-gray-300",
            isRTL && "font-cairo"
          )}>
            {c.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ── Contact Form ── */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className={cn(
                  "block text-sm font-medium text-gray-700 dark:text-gray-300",
                  isRTL && "font-cairo text-right"
                )}>
                  {c.nameLabel}
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder={c.namePlaceholder}
                  className={cn("mt-1", isRTL && "text-right font-cairo")}
                />
              </div>
              <div>
                <label htmlFor="email" className={cn(
                  "block text-sm font-medium text-gray-700 dark:text-gray-300",
                  isRTL && "font-cairo text-right"
                )}>
                  {c.emailLabel}
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder={c.emailPlaceholder}
                  className="mt-1"
                />
              </div>
              <div>
                <label htmlFor="message" className={cn(
                  "block text-sm font-medium text-gray-700 dark:text-gray-300",
                  isRTL && "font-cairo text-right"
                )}>
                  {c.messageLabel}
                </label>
                <Textarea
                  id="message"
                  placeholder={c.messagePlaceholder}
                  className={cn("mt-1", isRTL && "text-right font-cairo")}
                  rows={6}
                />
              </div>
              <Button
                type="submit"
                className={cn(
                  "w-full bg-gradient-to-r from-[#D5A849] to-[#f59e0b] hover:from-[#c49842] hover:to-[#e08e00] text-white border-0 font-semibold",
                  isRTL && "font-cairo"
                )}
              >
                {c.sendButton}
              </Button>
            </form>
          </div>

          {/* ── Contact Info ── */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <h2 className={cn(
              "text-2xl font-semibold text-gray-900 dark:text-white mb-6",
              isRTL && "font-cairo text-right"
            )}>
              {c.contactInfoTitle}
            </h2>
            <div className="space-y-6">
              <div className={cn("flex items-start", isRTL && "flex-row-reverse")}>
                <Mail className="h-6 w-6 text-[#D5A849] mt-1 flex-shrink-0" />
                <div className={cn("ml-4", isRTL && "ml-0 mr-4")}>
                  <h3 className={cn(
                    "text-lg font-medium text-gray-900 dark:text-white",
                    isRTL && "font-cairo text-right"
                  )}>
                    {c.emailTitle}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{c.email}</p>
                </div>
              </div>
              <div className={cn("flex items-start", isRTL && "flex-row-reverse")}>
                <Phone className="h-6 w-6 text-[#D5A849] mt-1 flex-shrink-0" />
                <div className={cn("ml-4", isRTL && "ml-0 mr-4")}>
                  <h3 className={cn(
                    "text-lg font-medium text-gray-900 dark:text-white",
                    isRTL && "font-cairo text-right"
                  )}>
                    {c.phoneTitle}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{c.phone}</p>
                </div>
              </div>
              <div className={cn("flex items-start", isRTL && "flex-row-reverse")}>
                <MapPin className="h-6 w-6 text-[#D5A849] mt-1 flex-shrink-0" />
                <div className={cn("ml-4", isRTL && "ml-0 mr-4")}>
                  <h3 className={cn(
                    "text-lg font-medium text-gray-900 dark:text-white",
                    isRTL && "font-cairo text-right"
                  )}>
                    {c.addressTitle}
                  </h3>
                  <p className={cn("text-gray-600 dark:text-gray-300 whitespace-pre-line", isRTL && "font-cairo text-right")}>
                    {c.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
