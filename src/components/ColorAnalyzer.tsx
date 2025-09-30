import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Camera, Palette, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface ColorResult {
  skinTone: string;
  season: string;
  recommendedColors: string[];
  complementaryColors: string[];
}

const ColorAnalyzer = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<ColorResult | null>(null);

  const handleImageUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const analyzeImage = async () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    // Simulate color analysis
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock analysis result - in a real app, this would use actual image processing
    const mockResult: ColorResult = {
      skinTone: "Warm Medium",
      season: "Autumn",
      recommendedColors: ["#D4A574", "#C67B5C", "#8B4513", "#CD853F", "#DEB887"],
      complementaryColors: ["#FF6B6B", "#FF8E53", "#FF6B35", "#C44569", "#F8B500"]
    };
    
    setResult(mockResult);
    setIsAnalyzing(false);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Upload Section */}
      <Card className="border-2 border-dashed border-warm-rose/30 bg-gradient-card shadow-card">
        <CardContent className="p-4 sm:p-6 lg:p-8">
          <div
            className="text-center space-y-4 lg:space-y-6"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="flex justify-center">
              <div className="p-3 lg:p-4 bg-warm-rose/10 rounded-full">
                <Upload className="w-8 h-8 lg:w-12 lg:h-12 text-warm-rose" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg lg:text-xl font-semibold text-foreground">
                {t.uploadInstruction}
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground max-w-md mx-auto">
                Upload foto selfie, tangan, atau bagian tubuh yang menunjukkan warna kulit Anda untuk mendapatkan rekomendasi warna yang sempurna
              </p>
            </div>

            <div className="space-y-3 lg:space-y-4">
              <label htmlFor="image-upload">
                <Button variant="upload" size="lg" className="cursor-pointer w-full sm:w-auto" asChild>
                  <span>
                    <Camera className="w-4 h-4 lg:w-5 lg:h-5" />
                    {t.selectPhoto}
                  </span>
                </Button>
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <p className="text-xs lg:text-sm text-muted-foreground">
                {t.orText} drag & drop foto ke sini
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preview & Analysis */}
      {selectedImage && (
        <Card className="bg-gradient-card shadow-card">
          <CardContent className="p-4 sm:p-6">
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-center">
              <div className="space-y-3 lg:space-y-4">
                <h4 className="text-base lg:text-lg font-semibold">Preview Foto</h4>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={selectedImage}
                    alt="Preview"
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                  />
                </div>
              </div>
              
              <div className="text-center space-y-3 lg:space-y-4">
                <Sparkles className="w-12 h-12 lg:w-16 lg:h-16 text-warm-rose mx-auto animate-pulse-glow" />
                <Button
                  variant="analysis"
                  size="lg"
                  onClick={analyzeImage}
                  disabled={isAnalyzing}
                  className="w-full"
                >
                  {isAnalyzing ? t.analyzing : 'Analisis Warna Kulit'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Results */}
      {result && (
        <div className="space-y-4 lg:space-y-6">
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-4 sm:p-6">
              <div className="text-center space-y-3 lg:space-y-4">
                <Palette className="w-8 h-8 lg:w-12 lg:h-12 text-warm-rose mx-auto" />
                <h3 className="text-xl lg:text-2xl font-bold">{t.analysisComplete}</h3>
                <div className="grid sm:grid-cols-2 gap-3 lg:gap-4 text-left">
                  <div className="space-y-2 p-3 lg:p-4 bg-warm-peach/10 rounded-lg">
                    <p className="font-semibold text-foreground text-sm lg:text-base">{t.skinTone}:</p>
                    <p className="text-warm-rose font-medium text-base lg:text-lg">{result.skinTone}</p>
                  </div>
                  <div className="space-y-2 p-3 lg:p-4 bg-warm-coral/10 rounded-lg">
                    <p className="font-semibold text-foreground text-sm lg:text-base">{t.colorSeason}:</p>
                    <p className="text-warm-rose font-medium text-base lg:text-lg">{result.season}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Color Recommendations */}
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-4 sm:p-6">
                <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 text-center">{t.recommendedColors}</h4>
                <div className="grid grid-cols-5 gap-1.5 lg:gap-2">
                  {result.recommendedColors.map((color, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-md lg:rounded-lg shadow-soft transition-smooth hover:scale-110"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-4 sm:p-6">
                <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 text-center">{t.complementaryColors}</h4>
                <div className="grid grid-cols-5 gap-1.5 lg:gap-2">
                  {result.complementaryColors.map((color, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-md lg:rounded-lg shadow-soft transition-smooth hover:scale-110"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorAnalyzer;