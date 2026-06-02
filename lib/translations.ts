type Translations = {
  [key: string]: {
    en: string;
    ar: string;
  };
};

export const translations: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    ar: 'الرئيسية'
  },
  'nav.features': {
    en: 'Modules',
    ar: 'الوحدات'
  },
  'nav.solutions': {
    en: 'Industries',
    ar: 'القطاعات'
  },
  'nav.about': {
    en: 'About',
    ar: 'عن الشركة'
  },
  'nav.contact': {
    en: 'Contact',
    ar: 'اتصل بنا'
  },
  
  // Hero Section
  'hero.title': {
    en: 'Optimize Your Business with BCor ERP',
    ar: 'تحسين أعمالك مع حلول بي كور لتخطيط موارد المؤسسات'
  },
  'hero.subtitle': {
    en: 'The complete enterprise resource planning solution for modern businesses',
    ar: 'الحل المتكامل لتخطيط موارد المؤسسات للشركات الحديثة'
  },
  'hero.cta.demo': {
    en: 'Request Demo',
    ar: 'طلب عرض توضيحي'
  },
  'hero.cta.contact': {
    en: 'Contact Sales',
    ar: 'تواصل مع المبيعات'
  },
  
  // Features Section
  'features.title': {
    en: 'Powerful Modules',
    ar: 'وحدات قوية'
  },
  'features.subtitle': {
    en: 'Everything you need to manage your business efficiently',
    ar: 'كل ما تحتاجه لإدارة عملك بكفاءة'
  },
  'features.finance.title': {
    en: 'Financial Management',
    ar: 'الإدارة المالية'
  },
  'features.finance.description': {
    en: 'Comprehensive accounting tools with real-time reporting and analytics',
    ar: 'أدوات محاسبية شاملة مع تقارير وتحليلات في الوقت الفعلي'
  },
  'features.inventory.title': {
    en: 'Inventory Management',
    ar: 'إدارة المخزون'
  },
  'features.inventory.description': {
    en: 'Track stock levels, manage warehouses, and optimize procurement',
    ar: 'تتبع مستويات المخزون وإدارة المستودعات وتحسين المشتريات'
  },
  'features.hr.title': {
    en: 'HR & Payroll',
    ar: 'الموارد البشرية والرواتب'
  },
  'features.hr.description': {
    en: 'Streamline employee management, attendance, and payroll processing',
    ar: 'تبسيط إدارة الموظفين والحضور ومعالجة الرواتب'
  },
  'features.crm.title': {
    en: 'CRM & Sales',
    ar: 'إدارة علاقات العملاء والمبيعات'
  },
  'features.crm.description': {
    en: 'Manage leads, track opportunities, and improve customer relationships',
    ar: 'إدارة العملاء المحتملين وتتبع الفرص وتحسين علاقات العملاء'
  },
  
  // Testimonials
  'testimonials.title': {
    en: 'Trusted by Businesses',
    ar: 'موثوق به من قبل الشركات'
  },
  'testimonials.subtitle': {
    en: 'See what our clients say about BCor Solutions',
    ar: 'اطلع على ما يقوله عملاؤنا عن حلول بي كور'
  },
  
  // CTA Section
  'cta.title': {
    en: 'Ready to Transform Your Business?',
    ar: 'هل أنت مستعد لتحويل عملك؟'
  },
  'cta.description': {
    en: 'Get in touch with our team for a personalized demo',
    ar: 'تواصل مع فريقنا للحصول على عرض توضيحي مخصص'
  },
  'cta.button': {
    en: 'Request Demo',
    ar: 'طلب عرض توضيحي'
  },
  
  // Footer
  'footer.rights': {
    en: 'All rights reserved',
    ar: 'جميع الحقوق محفوظة'
  },
  'footer.privacy': {
    en: 'Privacy Policy',
    ar: 'سياسة الخصوصية'
  },
  'footer.terms': {
    en: 'Terms of Service',
    ar: 'شروط الخدمة'
  }
};

type Language = keyof Translations[keyof Translations];

export const t = (key: string, language: Language): string => {
  return translations[key]?.[language] || key;
};