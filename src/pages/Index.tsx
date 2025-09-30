import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ColorAnalyzer from '@/components/ColorAnalyzer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Color Analyzer Section */}
      <section id="color-analyzer" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Analisis Warna Kulit Anda
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload foto Anda dan biarkan AI kami menganalisis tone kulit untuk memberikan rekomendasi warna yang sempurna
            </p>
          </div>
          
          <ColorAnalyzer />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-soft py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">ColorMatch</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Platform AI terdepan untuk analisis warna kulit dan rekomendasi fashion yang personal
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-warm-rose transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-warm-rose transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-warm-rose transition-smooth">Contact</a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 ColorMatch. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
