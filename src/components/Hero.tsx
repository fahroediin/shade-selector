import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Palette, Camera } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const scrollToAnalyzer = () => {
    const analyzer = document.getElementById('color-analyzer');
    analyzer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-soft overflow-hidden">
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
      <div className="absolute top-20 left-10 animate-float">
        <Palette className="w-8 h-8 text-warm-coral opacity-60" />
      </div>
      <div className="absolute top-32 right-16 animate-float delay-100">
        <Sparkles className="w-6 h-6 text-warm-rose opacity-50" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float delay-200">
        <Camera className="w-7 h-7 text-warm-peach opacity-40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
            <Sparkles className="w-4 h-4 text-warm-rose" />
            <span className="text-sm font-medium text-foreground">AI-Powered Color Analysis</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Temukan Warna
              <span className="bg-gradient-hero bg-clip-text text-transparent block">
                Yang Sempurna
              </span>
              untuk Anda
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Analisis warna kulit Anda dengan teknologi AI dan dapatkan rekomendasi palette warna yang paling cocok untuk penampilan terbaik Anda
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToAnalyzer}
              className="text-lg px-8 py-4 h-auto animate-pulse-glow"
            >
              <Camera className="w-5 h-5" />
              Mulai Analisis Gratis
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 h-auto bg-white/80 backdrop-blur-sm hover:bg-white"
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>

          {/* Feature Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="text-center space-y-3 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft">
              <Camera className="w-8 h-8 text-warm-rose mx-auto" />
              <h3 className="font-semibold text-foreground">Upload Mudah</h3>
              <p className="text-sm text-muted-foreground">Cukup upload foto selfie atau bagian tubuh Anda</p>
            </div>
            <div className="text-center space-y-3 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft">
              <Sparkles className="w-8 h-8 text-warm-coral mx-auto" />
              <h3 className="font-semibold text-foreground">AI Analysis</h3>
              <p className="text-sm text-muted-foreground">Teknologi AI untuk analisis warna yang akurat</p>
            </div>
            <div className="text-center space-y-3 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft">
              <Palette className="w-8 h-8 text-warm-peach mx-auto" />
              <h3 className="font-semibold text-foreground">Rekomendasi Personal</h3>
              <p className="text-sm text-muted-foreground">Dapatkan palette warna yang sempurna untuk Anda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;