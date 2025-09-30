import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ColorAnalyzer from '@/components/ColorAnalyzer';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Color Analyzer Section */}
      <section id="color-analyzer" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-3 lg:space-y-4 mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              {t.analyzerTitle}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.analyzerSubtitle}
            </p>
          </div>
          
          <ColorAnalyzer />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-soft py-8 sm:py-12 px-4 sm:px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="space-y-3 lg:space-y-4">
            <h3 className="text-xl lg:text-2xl font-bold text-foreground">ColorMatch</h3>
            <p className="text-sm lg:text-base text-muted-foreground max-w-md mx-auto">
              {t.footerDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-xs lg:text-sm text-muted-foreground">
              <a href="#" className="hover:text-warm-rose transition-smooth">{t.privacyPolicy}</a>
              <a href="#" className="hover:text-warm-rose transition-smooth">{t.termsOfService}</a>
              <a href="#" className="hover:text-warm-rose transition-smooth">{t.contact}</a>
            </div>
            <p className="text-xs lg:text-sm text-muted-foreground">
              © 2024 ColorMatch. {t.allRightsReserved}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
