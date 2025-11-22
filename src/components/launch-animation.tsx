"use client";

import { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function LaunchAnimation() {
  const [phase, setPhase] = useState('start');
  const [targetPosition, setTargetPosition] = useState({ top: 16, left: 16 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const container = document.getElementById('header-logo-container');
    if (container) {
      const rect = container.getBoundingClientRect();
      setTargetPosition({ top: rect.top, left: rect.left });
    }

    const timeouts: NodeJS.Timeout[] = [];
    
    timeouts.push(setTimeout(() => setPhase('blink1-off'), 500));
    timeouts.push(setTimeout(() => setPhase('blink1-on'), 700));
    timeouts.push(setTimeout(() => setPhase('blink2-off'), 900));
    timeouts.push(setTimeout(() => setPhase('blink2-on'), 1100));
    timeouts.push(setTimeout(() => setPhase('move'), 1600));
    timeouts.push(setTimeout(() => {
        setPhase('finished');
        setIsVisible(false);
        document.body.style.overflow = 'auto';
    }, 2100));

    return () => {
        timeouts.forEach(clearTimeout);
        document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed inset-0 bg-background z-[100] transition-opacity duration-500',
        phase === 'move' ? 'opacity-0' : 'opacity-100'
      )}
    >
      <div
        className={cn(
          'absolute transition-all duration-500',
          phase === 'move' ? `top-[var(--target-top)] left-[var(--target-left)]` : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          {'!top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2': phase !== 'move' }
        )}
        style={{
            '--target-top': `${targetPosition.top}px`,
            '--target-left': `${targetPosition.left}px`,
        } as React.CSSProperties}
      >
        <Code2
          className={cn(
            'transition-opacity duration-100 h-16 w-16 md:h-24 md:w-24 text-accent',
            (phase === 'blink1-off' || phase === 'blink2-off') && 'opacity-0',
             phase === 'move' && 'h-6 w-6'
          )}
        />
      </div>
    </div>
  );
}
