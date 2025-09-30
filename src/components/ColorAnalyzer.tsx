import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Camera, Palette, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ColorResult {
  skinTone: string;
  season: string;
  recommendedColors: string[];
  complementaryColors: string[];
}

const ColorAnalyzer = () => {
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
    <div className="space-y-8">
      {/* Upload Section */}
      <Card className="border-2 border-dashed border-warm-rose/30 bg-gradient-card shadow-card">
        <CardContent className="p-8">
          <div
            className="text-center space-y-6"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="flex justify-center">
              <div className="p-4 bg-warm-rose/10 rounded-full">
                <Upload className="w-12 h-12 text-warm-rose" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">
                Upload Foto Anda
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Upload foto selfie, tangan, atau bagian tubuh yang menunjukkan warna kulit Anda untuk mendapatkan rekomendasi warna yang sempurna
              </p>
            </div>

            <div className="space-y-4">
              <label htmlFor="image-upload">
                <Button variant="upload" size="lg" className="cursor-pointer" asChild>
                  <span>
                    <Camera className="w-5 h-5" />
                    Pilih Foto
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
              <p className="text-sm text-muted-foreground">
                atau drag & drop foto ke sini
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preview & Analysis */}
      {selectedImage && (
        <Card className="bg-gradient-card shadow-card">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Preview Foto</h4>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={selectedImage}
                    alt="Preview"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <Sparkles className="w-16 h-16 text-warm-rose mx-auto animate-pulse-glow" />
                <Button
                  variant="analysis"
                  size="lg"
                  onClick={analyzeImage}
                  disabled={isAnalyzing}
                  className="w-full"
                >
                  {isAnalyzing ? 'Menganalisis...' : 'Analisis Warna Kulit'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Results */}
      {result && (
        <div className="space-y-6">
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <Palette className="w-12 h-12 text-warm-rose mx-auto" />
                <h3 className="text-2xl font-bold">Hasil Analisis</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Tone Kulit:</p>
                    <p className="text-warm-rose font-medium">{result.skinTone}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Musim Warna:</p>
                    <p className="text-warm-rose font-medium">{result.season}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Color Recommendations */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-center">Warna yang Direkomendasikan</h4>
                <div className="grid grid-cols-5 gap-2">
                  {result.recommendedColors.map((color, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg shadow-soft transition-smooth hover:scale-110"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-center">Warna Komplementer</h4>
                <div className="grid grid-cols-5 gap-2">
                  {result.complementaryColors.map((color, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg shadow-soft transition-smooth hover:scale-110"
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