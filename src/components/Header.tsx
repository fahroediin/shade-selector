import React from 'react';
import { Button } from '@/components/ui/button';
import { Palette, Menu, Sparkles, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-soft">
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
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#home" className="text-foreground hover:text-warm-rose transition-smooth font-medium">
              {t.home}
            </a>
            <a href="#color-analyzer" className="text-foreground hover:text-warm-rose transition-smooth font-medium">
              {t.analysis}
            </a>
            <a href="#about" className="text-foreground hover:text-warm-rose transition-smooth font-medium">
              {t.about}
            </a>
            <a href="#contact" className="text-foreground hover:text-warm-rose transition-smooth font-medium">
              {t.contact}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-9 h-9">
                  <Globe className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('id')}>
                  🇮🇩 Indonesia
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  🇺🇸 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* CTA Button */}
            <Button variant="hero" size="sm" className="hidden sm:flex">
              <Sparkles className="w-4 h-4" />
              {t.tryFree}
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="lg:hidden w-9 h-9">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;