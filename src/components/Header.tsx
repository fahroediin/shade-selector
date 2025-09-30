import React from 'react';
import { Button } from '@/components/ui/button';
import { Palette, Menu, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-hero rounded-xl shadow-soft">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ColorMatch</h1>
              <p className="text-xs text-muted-foreground">AI Color Analysis</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-warm-rose transition-smooth font-medium">
              Home
            </a>
            <a href="#analyzer" className="text-foreground hover:text-warm-rose transition-smooth font-medium">
              Analisis
            </a>
            <a href="#about" className="text-foreground hover:text-warm-rose transition-smooth font-medium">
              Tentang
            </a>
            <a href="#contact" className="text-foreground hover:text-warm-rose transition-smooth font-medium">
              Kontak
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button variant="hero" size="sm" className="hidden sm:flex">
              <Sparkles className="w-4 h-4" />
              Coba Gratis
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;