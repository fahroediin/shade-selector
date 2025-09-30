import React, { createContext, useContext, useState } from 'react';

type Language = 'id' | 'en';

interface Translations {
  // Header
  home: string;
  analysis: string;
  about: string;
  contact: string;
  tryFree: string;
  
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  startAnalysis: string;
  learnMore: string;
  
  // Color Analyzer
  analyzerTitle: string;
  analyzerSubtitle: string;
  uploadInstruction: string;
  dragDropText: string;
  orText: string;
  selectPhoto: string;
  analyzing: string;
  analysisComplete: string;
  skinTone: string;
  colorSeason: string;
  recommendedColors: string;
  complementaryColors: string;
  tryAgain: string;
  
  // Footer
  footerDescription: string;
  privacyPolicy: string;
  termsOfService: string;
  allRightsReserved: string;
}

const translations: Record<Language, Translations> = {
  id: {
    // Header
    home: 'Beranda',
    analysis: 'Analisis',
    about: 'Tentang',
    contact: 'Kontak',
    tryFree: 'Coba Gratis',
    
    // Hero
    heroTitle: 'Temukan Warna Sempurna untuk Anda',
    heroSubtitle: 'Platform AI terdepan yang menganalisis warna kulit Anda dan memberikan rekomendasi warna yang sempurna untuk fashion, makeup, dan gaya hidup',
    startAnalysis: 'Mulai Analisis',
    learnMore: 'Pelajari Lebih Lanjut',
    
    // Color Analyzer
    analyzerTitle: 'Analisis Warna Kulit Anda',
    analyzerSubtitle: 'Upload foto Anda dan biarkan AI kami menganalisis tone kulit untuk memberikan rekomendasi warna yang sempurna',
    uploadInstruction: 'Upload foto selfie, tangan, atau bagian tubuh yang menunjukkan warna kulit Anda',
    dragDropText: 'Seret dan lepas foto di sini',
    orText: 'atau',
    selectPhoto: 'Pilih Foto',
    analyzing: 'Menganalisis...',
    analysisComplete: 'Analisis Selesai!',
    skinTone: 'Tone Kulit',
    colorSeason: 'Musim Warna',
    recommendedColors: 'Warna yang Direkomendasikan',
    complementaryColors: 'Warna Pelengkap',
    tryAgain: 'Coba Lagi',
    
    // Footer
    footerDescription: 'Platform AI terdepan untuk analisis warna kulit dan rekomendasi fashion yang personal',
    privacyPolicy: 'Kebijakan Privasi',
    termsOfService: 'Syarat Layanan',
    allRightsReserved: 'Hak Cipta Dilindungi'
  },
  en: {
    // Header
    home: 'Home',
    analysis: 'Analysis',
    about: 'About',
    contact: 'Contact',
    tryFree: 'Try Free',
    
    // Hero
    heroTitle: 'Discover Your Perfect Colors',
    heroSubtitle: 'Leading AI platform that analyzes your skin tone and provides perfect color recommendations for fashion, makeup, and lifestyle',
    startAnalysis: 'Start Analysis',
    learnMore: 'Learn More',
    
    // Color Analyzer
    analyzerTitle: 'Analyze Your Skin Tone',
    analyzerSubtitle: 'Upload your photo and let our AI analyze your skin tone to provide perfect color recommendations',
    uploadInstruction: 'Upload a selfie, hand, or body part photo that shows your skin tone',
    dragDropText: 'Drag and drop your photo here',
    orText: 'or',
    selectPhoto: 'Select Photo',
    analyzing: 'Analyzing...',
    analysisComplete: 'Analysis Complete!',
    skinTone: 'Skin Tone',
    colorSeason: 'Color Season',
    recommendedColors: 'Recommended Colors',
    complementaryColors: 'Complementary Colors',
    tryAgain: 'Try Again',
    
    // Footer
    footerDescription: 'Leading AI platform for skin tone analysis and personalized fashion recommendations',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    allRightsReserved: 'All Rights Reserved'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');
  
  const value = {
    language,
    setLanguage,
    t: translations[language]
  };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};