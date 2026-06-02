'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CheckCircle2, Calendar, Building2, User, Mail, Phone, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WHATSAPP_NUMBER, CALLMEBOT_API_KEY } from '@/lib/whatsapp-config';
import { useLanguage } from '@/lib/language-context';

interface ScheduleDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  industry: string;
  timeSlot: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  industry: '',
  timeSlot: '',
  message: '',
};

const industries = [
  { value: 'Trading & Distribution',  en: 'Trading & Distribution',  ar: 'التجارة والتوزيع' },
  { value: 'Manufacturing',           en: 'Manufacturing',           ar: 'التصنيع' },
  { value: 'Healthcare',              en: 'Healthcare',              ar: 'الرعاية الصحية' },
  { value: 'Construction',           en: 'Construction',            ar: 'البناء والإنشاء' },
  { value: 'Real Estate',            en: 'Real Estate',             ar: 'العقارات' },
  { value: 'Automotive',             en: 'Automotive',              ar: 'السيارات' },
  { value: 'Retail & POS',           en: 'Retail & POS',            ar: 'التجزئة ونقاط البيع' },
  { value: 'Readymix & Concrete',    en: 'Readymix & Concrete',     ar: 'الخرسانة الجاهزة' },
  { value: 'Other',                  en: 'Other',                   ar: 'أخرى' },
];

const timeSlots = [
  '9:00 AM – 10:00 AM (GST)',
  '10:00 AM – 11:00 AM (GST)',
  '11:00 AM – 12:00 PM (GST)',
  '1:00 PM – 2:00 PM (GST)',
  '2:00 PM – 3:00 PM (GST)',
  '3:00 PM – 4:00 PM (GST)',
  '4:00 PM – 5:00 PM (GST)',
];

export function ScheduleDemoModal({ open, onOpenChange }: ScheduleDemoModalProps) {
  const { language, isRTL } = useLanguage();
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const c = {
    en: {
      title: 'Schedule a Demo',
      subtitle: 'See BCor ERP in action — tailored to your business',
      successTitle: "You're all set!",
      successMsg: (name: string, email: string) =>
        <>Thanks <span className="text-white font-medium">{name}</span>! Your request has been sent. Our team will reach out to <span className="text-[#D5A849]">{email}</span> within 24 hours to confirm your demo.</>,
      done: 'Done',
      fullName: 'Full Name *',
      namePlaceholder: 'John Smith',
      workEmail: 'Work Email *',
      emailPlaceholder: 'you@company.com',
      company: 'Company *',
      companyPlaceholder: 'Acme Corp',
      phone: 'Phone',
      phonePlaceholder: '+973 3000 0000',
      industry: 'Industry *',
      industryPlaceholder: 'Select industry',
      preferredTime: 'Preferred Time *',
      timePlaceholder: 'Pick a slot',
      notes: 'Notes',
      optional: '(optional)',
      notesPlaceholder: "Any specific modules or use cases you'd like to explore…",
      submit: 'Request Demo →',
      sending: 'Sending…',
      errName: 'Full name is required',
      errEmail: 'Work email is required',
      errEmailInvalid: 'Enter a valid email address',
      errCompany: 'Company name is required',
      errIndustry: 'Please select an industry',
      errTime: 'Please select a preferred time',
    },
    ar: {
      title: 'جدولة عرض توضيحي',
      subtitle: 'شاهد بي كور ERP في العمل — مصمم خصيصاً لأعمالك',
      successTitle: 'تم بنجاح!',
      successMsg: (name: string, email: string) =>
        <>شكراً <span className="text-white font-medium">{name}</span>! تم إرسال طلبك. سيتواصل فريقنا مع <span className="text-[#D5A849]">{email}</span> خلال 24 ساعة لتأكيد موعد العرض التوضيحي.</>,
      done: 'تم',
      fullName: 'الاسم الكامل *',
      namePlaceholder: 'محمد أحمد',
      workEmail: 'البريد الإلكتروني العملي *',
      emailPlaceholder: 'you@company.com',
      company: 'الشركة *',
      companyPlaceholder: 'اسم شركتك',
      phone: 'الهاتف',
      phonePlaceholder: '+973 3000 0000',
      industry: 'القطاع *',
      industryPlaceholder: 'اختر القطاع',
      preferredTime: 'الوقت المفضل *',
      timePlaceholder: 'اختر موعداً',
      notes: 'ملاحظات',
      optional: '(اختياري)',
      notesPlaceholder: 'أي وحدات أو حالات استخدام محددة تود استكشافها...',
      submit: '← طلب عرض توضيحي',
      sending: 'جارٍ الإرسال...',
      errName: 'الاسم الكامل مطلوب',
      errEmail: 'البريد الإلكتروني العملي مطلوب',
      errEmailInvalid: 'أدخل عنوان بريد إلكتروني صحيح',
      errCompany: 'اسم الشركة مطلوب',
      errIndustry: 'يرجى اختيار القطاع',
      errTime: 'يرجى اختيار الوقت المفضل',
    },
  } as const;

  const t = c[language];

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = t.errName;
    if (!form.email.trim()) newErrors.email = t.errEmail;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = t.errEmailInvalid;
    if (!form.company.trim()) newErrors.company = t.errCompany;
    if (!form.industry) newErrors.industry = t.errIndustry;
    if (!form.timeSlot) newErrors.timeSlot = t.errTime;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    // Build WhatsApp message (always in English for readability)
    const lines = [
      '🗓️ *New Demo Request — BCor ERP*',
      '',
      `👤 *Name:* ${form.name}`,
      `📧 *Email:* ${form.email}`,
      `🏢 *Company:* ${form.company}`,
    ];
    if (form.phone.trim()) lines.push(`📞 *Phone:* ${form.phone}`);
    lines.push(`🏭 *Industry:* ${form.industry}`);
    lines.push(`⏰ *Preferred Time:* ${form.timeSlot}`);
    if (form.message.trim()) lines.push(`📝 *Notes:* ${form.message}`);

    // Send silently via CallMeBot — no redirect for the visitor
    try {
      await fetch(
        `https://api.callmebot.com/whatsapp.php?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(lines.join('\n'))}&apikey=${CALLMEBOT_API_KEY}`,
        { mode: 'no-cors' }
      );
    } catch {
      // Fire-and-forget — show success regardless
    }

    setLoading(false);
    setSubmitted(true);
  };

  const handleClose = (open: boolean) => {
    onOpenChange(open);
    if (!open) {
      setTimeout(() => {
        setSubmitted(false);
        setForm(initialForm);
        setErrors({});
      }, 300);
    }
  };

  const field = (
    id: keyof FormData,
    value: string,
    onChange: (v: string) => void
  ) => ({
    value,
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      onChange(e.target.value);
      if (errors[id]) setErrors((prev) => ({ ...prev, [id]: undefined }));
    },
  });

  // Icon side based on direction
  const iconClass = isRTL
    ? 'absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30'
    : 'absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30';
  const inputPad = isRTL ? 'pr-9' : 'pl-9';

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[560px] p-0 overflow-hidden border-0 bg-[#0f172a] text-white">
        {/* Header band */}
        <div className="bg-gradient-to-r from-[#D5A849] to-[#f59e0b] px-6 py-5">
          <div className={cn('flex items-center gap-3', isRTL && 'flex-row-reverse')}>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div className={isRTL ? 'text-right font-cairo' : ''}>
              <DialogTitle className="text-white text-xl font-bold m-0">
                {t.title}
              </DialogTitle>
              <DialogDescription className="text-white/80 text-sm m-0">
                {t.subtitle}
              </DialogDescription>
            </div>
          </div>
        </div>

        {submitted ? (
          /* ── Success state ── */
          <div className="flex flex-col items-center justify-center py-14 px-8 text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className={cn('text-2xl font-bold text-white', isRTL && 'font-cairo')}>
              {t.successTitle}
            </h3>
            <p className={cn('text-white/60 max-w-sm', isRTL && 'font-cairo')}>
              {t.successMsg(form.name, form.email)}
            </p>
            <Button
              onClick={() => handleClose(false)}
              className="mt-4 bg-gradient-to-r from-[#D5A849] to-[#f59e0b] hover:from-[#c49842] hover:to-[#e08e00] text-white border-0 px-8"
            >
              {t.done}
            </Button>
          </div>
        ) : (
          /* ── Form ── */
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Row 1 — Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name" className={cn('text-white/80 text-xs uppercase tracking-wider', isRTL && 'font-cairo')}>
                  {t.fullName}
                </Label>
                <div className="relative">
                  <User className={iconClass} />
                  <Input
                    id="name"
                    placeholder={t.namePlaceholder}
                    className={cn(
                      inputPad,
                      'bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-[#D5A849] focus:ring-[#D5A849]/20',
                      isRTL && 'font-cairo text-right',
                      errors.name && 'border-red-500/60'
                    )}
                    {...field('name', form.name, (v) => setForm({ ...form, name: v }))}
                  />
                </div>
                {errors.name && <p className={cn('text-red-400 text-xs', isRTL && 'font-cairo text-right')}>{errors.name}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className={cn('text-white/80 text-xs uppercase tracking-wider', isRTL && 'font-cairo')}>
                  {t.workEmail}
                </Label>
                <div className="relative">
                  <Mail className={iconClass} />
                  <Input
                    id="email"
                    type="email"
                    placeholder={t.emailPlaceholder}
                    className={cn(
                      inputPad,
                      'bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-[#D5A849] focus:ring-[#D5A849]/20',
                      errors.email && 'border-red-500/60'
                    )}
                    {...field('email', form.email, (v) => setForm({ ...form, email: v }))}
                  />
                </div>
                {errors.email && <p className={cn('text-red-400 text-xs', isRTL && 'font-cairo text-right')}>{errors.email}</p>}
              </div>
            </div>

            {/* Row 2 — Company & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="company" className={cn('text-white/80 text-xs uppercase tracking-wider', isRTL && 'font-cairo')}>
                  {t.company}
                </Label>
                <div className="relative">
                  <Building2 className={iconClass} />
                  <Input
                    id="company"
                    placeholder={t.companyPlaceholder}
                    className={cn(
                      inputPad,
                      'bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-[#D5A849] focus:ring-[#D5A849]/20',
                      isRTL && 'font-cairo text-right',
                      errors.company && 'border-red-500/60'
                    )}
                    {...field('company', form.company, (v) => setForm({ ...form, company: v }))}
                  />
                </div>
                {errors.company && <p className={cn('text-red-400 text-xs', isRTL && 'font-cairo text-right')}>{errors.company}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="phone" className={cn('text-white/80 text-xs uppercase tracking-wider', isRTL && 'font-cairo')}>
                  {t.phone}
                </Label>
                <div className="relative">
                  <Phone className={iconClass} />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={t.phonePlaceholder}
                    className={cn(
                      inputPad,
                      'bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-[#D5A849] focus:ring-[#D5A849]/20'
                    )}
                    {...field('phone', form.phone, (v) => setForm({ ...form, phone: v }))}
                  />
                </div>
              </div>
            </div>

            {/* Row 3 — Industry & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className={cn('text-white/80 text-xs uppercase tracking-wider', isRTL && 'font-cairo')}>
                  {t.industry}
                </Label>
                <Select
                  value={form.industry}
                  onValueChange={(v) => {
                    setForm({ ...form, industry: v });
                    setErrors((prev) => ({ ...prev, industry: undefined }));
                  }}
                >
                  <SelectTrigger
                    className={cn(
                      'bg-white/5 border-white/10 text-white focus:ring-[#D5A849]/20 [&>span]:text-white/25',
                      form.industry && '[&>span]:text-white',
                      isRTL && 'font-cairo',
                      errors.industry && 'border-red-500/60'
                    )}
                  >
                    <SelectValue placeholder={t.industryPlaceholder} />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1e293b] border-white/10 text-white">
                    {industries.map((ind) => (
                      <SelectItem
                        key={ind.value}
                        value={ind.value}
                        className={cn('focus:bg-white/10 focus:text-white', isRTL && 'font-cairo')}
                      >
                        {ind[language]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.industry && <p className={cn('text-red-400 text-xs', isRTL && 'font-cairo text-right')}>{errors.industry}</p>}
              </div>

              <div className="space-y-1.5">
                <Label className={cn('text-white/80 text-xs uppercase tracking-wider', isRTL && 'font-cairo')}>
                  {t.preferredTime}
                </Label>
                <Select
                  value={form.timeSlot}
                  onValueChange={(v) => {
                    setForm({ ...form, timeSlot: v });
                    setErrors((prev) => ({ ...prev, timeSlot: undefined }));
                  }}
                >
                  <SelectTrigger
                    className={cn(
                      'bg-white/5 border-white/10 text-white focus:ring-[#D5A849]/20 [&>span]:text-white/25',
                      form.timeSlot && '[&>span]:text-white',
                      errors.timeSlot && 'border-red-500/60'
                    )}
                  >
                    <Clock className="w-4 h-4 text-white/30 mr-2 flex-shrink-0" />
                    <SelectValue placeholder={t.timePlaceholder} />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1e293b] border-white/10 text-white">
                    {timeSlots.map((s) => (
                      <SelectItem key={s} value={s} className="focus:bg-white/10 focus:text-white">{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.timeSlot && <p className={cn('text-red-400 text-xs', isRTL && 'font-cairo text-right')}>{errors.timeSlot}</p>}
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-1.5">
              <Label htmlFor="message" className={cn('text-white/80 text-xs uppercase tracking-wider', isRTL && 'font-cairo')}>
                {t.notes} <span className="text-white/30 normal-case">{t.optional}</span>
              </Label>
              <Textarea
                id="message"
                rows={2}
                placeholder={t.notesPlaceholder}
                className={cn(
                  'bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-[#D5A849] focus:ring-[#D5A849]/20 resize-none',
                  isRTL && 'font-cairo text-right'
                )}
                {...field('message', form.message, (v) => setForm({ ...form, message: v }))}
              />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end pt-2 border-t border-white/10">
              <Button
                type="submit"
                disabled={loading}
                className={cn(
                  'bg-gradient-to-r from-[#D5A849] to-[#f59e0b] hover:from-[#c49842] hover:to-[#e08e00] text-white border-0 px-7 font-semibold disabled:opacity-70',
                  isRTL && 'font-cairo'
                )}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    {t.sending}
                  </span>
                ) : (
                  t.submit
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
