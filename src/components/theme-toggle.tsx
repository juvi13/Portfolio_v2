'use client';

import * as React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const clickCount = React.useRef(0);
  const longPressTimeout = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => setMounted(true), []);

  const handlePressStart = () => {
    longPressTimeout.current = setTimeout(() => {
      setTheme('system');
      if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate(50); // haptic feedback
      }
    }, 500); // 500ms for long press
  };

  const handlePressEnd = () => {
    if (longPressTimeout.current) {
      clearTimeout(longPressTimeout.current);
      longPressTimeout.current = null;
    }
  };

  const handleClick = () => {
    clickCount.current += 1;

    if (clickCount.current === 7) {
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      clickCount.current = 0; // Reset for next time
      return;
    }

    // This check ensures the click action doesn't fire after a long press
    if (longPressTimeout.current) {
      clearTimeout(longPressTimeout.current);
      longPressTimeout.current = null;
      return;
    }
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    );
  }

  const isSystem = theme === 'system';
  const isDark =
    theme === 'dark' ||
    (isSystem && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onTouchStart={handlePressStart}
      onTouchEnd={handlePressEnd}
      onContextMenu={handleContextMenu}
      aria-label="Toggle theme"
    >
      {isSystem ? (
        <Monitor className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : isDark ? (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">
        Toggle theme (long press for system default)
      </span>
    </Button>
  );
}
