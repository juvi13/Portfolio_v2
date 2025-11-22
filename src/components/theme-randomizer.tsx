"use client";

import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeRandomizer() {
  const changeTheme = () => {
    const randomHue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 20) + 70; // 70-90
    const lightness = Math.floor(Math.random() * 20) + 40; // 40-60

    const primaryHue = randomHue;
    const accentHue = (randomHue + 120) % 360;

    document.documentElement.style.setProperty('--primary', `${primaryHue} 27% 91%`);
    document.documentElement.style.setProperty('--primary-foreground', `${primaryHue} 25% 25%`);
    document.documentElement.style.setProperty('--accent', `${accentHue} 47% 73%`);
    document.documentElement.style.setProperty('--accent-foreground', `${accentHue} 83.3% 97.8%`);
    document.documentElement.style.setProperty('--ring', `${primaryHue} 5.9% 10%`);

    const darkAccent = `hsl(${accentHue} 47% 73%)`;
    const darkPrimary = `hsl(${primaryHue} 27% 91%)`;

    const darkStyles = `.dark {
      --primary: ${darkPrimary};
      --accent: ${darkAccent};
      --ring: ${darkPrimary};
    }`;
    
    let styleSheet = document.getElementById('dynamic-theme-styles');
    if (!styleSheet) {
      styleSheet = document.createElement('style');
      styleSheet.id = 'dynamic-theme-styles';
      document.head.appendChild(styleSheet);
    }
    styleSheet.innerHTML = darkStyles;
  };

  return (
    <Button variant="ghost" size="icon" onClick={changeTheme} aria-label="Randomize Theme">
      <Palette className="h-5 w-5" />
    </Button>
  );
}
