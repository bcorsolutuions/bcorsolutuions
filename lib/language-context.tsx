'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [isRTL, setIsRTL] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle client-side initialization after mount
  useEffect(() => {
    try {
      const storedLanguage = window.localStorage.getItem('language') as Language;
      if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'ar')) {
        setLanguage(storedLanguage);
        setIsRTL(storedLanguage === 'ar');
      }
    } catch (error) {
      // Ignore localStorage errors
    }
    setMounted(true);
  }, []);

  // Handle language changes
  useEffect(() => {
    if (mounted) {
      try {
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        window.localStorage.setItem('language', language);
      } catch (error) {
        // Ignore localStorage errors
      }
    }
  }, [language, mounted]);

  const handleSetLanguage = (newLang: Language) => {
    setLanguage(newLang);
    setIsRTL(newLang === 'ar');
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    isRTL
  };

  // During SSR and initial client render, use default values
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{
        language: 'en',
        setLanguage: () => {},
        isRTL: false
      }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  // After mounting, use the actual values
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}