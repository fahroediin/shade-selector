import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Palette, Camera } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToAnalyzer = () => {
    const analyzer = document.getElementById('color-analyzer');
    analyzer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-soft overflow-hidden pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beauty and Color Analysis"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero/20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-24 left-4 lg:left-10 animate-float hidden sm:block">
        <Palette className="w-6 h-6 lg:w-8 lg:h-8 text-warm-coral opacity-60" />
      </div>
      <div className="absolute top-32 right-8 lg:right-16 animate-float delay-100 hidden sm:block">
        <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-warm-rose opacity-50" />
      </div>
      <div className="absolute bottom-32 left-8 lg:left-20 animate-float delay-200 hidden sm:block">
        <Camera className="w-6 h-6 lg:w-7 lg:h-7 text-warm-peach opacity-40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 lg:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-3 lg:px-4 py-2 shadow-soft">
            <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 text-warm-rose" />
            <span className="text-xs lg:text-sm font-medium text-foreground">AI-Powered Color Analysis</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-3 lg:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              {t.heroTitle.split(' ').slice(0, 2).join(' ')}
              <span className="bg-gradient-hero bg-clip-text text-transparent block">
                {t.heroTitle.split(' ').slice(2, 3).join(' ')}
              </span>
              {t.heroTitle.split(' ').slice(3).join(' ')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.heroSubtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToAnalyzer}
              className="text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto animate-pulse-glow w-full sm:w-auto"
            >
              <Camera className="w-4 h-4 lg:w-5 lg:h-5" />
              {t.startAnalysis}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto bg-background/80 backdrop-blur-sm hover:bg-background w-full sm:w-auto"
            >
              {t.learnMore}
            </Button>
          </div>

          {/* Feature Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-12 lg:mt-16">
            <div className="text-center space-y-2 lg:space-y-3 bg-background/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 shadow-soft">
              <Camera className="w-6 h-6 lg:w-8 lg:h-8 text-warm-rose mx-auto" />
              <h3 className="font-semibold text-foreground text-sm lg:text-base">Upload Mudah</h3>
              <p className="text-xs lg:text-sm text-muted-foreground">Cukup upload foto selfie atau bagian tubuh Anda</p>
            </div>
            <div className="text-center space-y-2 lg:space-y-3 bg-background/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 shadow-soft">
              <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 text-warm-coral mx-auto" />
              <h3 className="font-semibold text-foreground text-sm lg:text-base">AI Analysis</h3>
              <p className="text-xs lg:text-sm text-muted-foreground">Teknologi AI untuk analisis warna yang akurat</p>
            </div>
            <div className="text-center space-y-2 lg:space-y-3 bg-background/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 shadow-soft">
              <Palette className="w-6 h-6 lg:w-8 lg:h-8 text-warm-peach mx-auto" />
              <h3 className="font-semibold text-foreground text-sm lg:text-base">Rekomendasi Personal</h3>
              <p className="text-xs lg:text-sm text-muted-foreground">Dapatkan palette warna yang sempurna untuk Anda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;