'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'tr' | 'en' | 'de' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem('preferredLanguage') as Language | null;
    if (storedLang && ['tr', 'en', 'de', 'ru'].includes(storedLang)) {
      setLanguage(storedLang);
    }
    setIsInitialized(true);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    console.log('Language changing to:', lang);
    setLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);
  };

  if (!isInitialized) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
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