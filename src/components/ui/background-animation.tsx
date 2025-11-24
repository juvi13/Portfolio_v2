'use client';
import { useEffect, useRef, useState } from 'react';

const BackgroundAnimation = () => {
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);
  const shape3Ref = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const idleTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isInteracting) {
      setIsInteracting(true);
    }

    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (clientX - centerX) / 20;
    const moveY = (clientY - centerY) / 20;

    if (shape1Ref.current) {
      shape1Ref.current.style.animation = 'none'; // Disable default animation
      shape1Ref.current.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    }
    if (shape2Ref.current) {
      shape2Ref.current.style.animation = 'none';
      shape2Ref.current.style.transform = `translateX(${-moveX}px) translateY(${-moveY}px)`;
    }
    if (shape3Ref.current) {
      shape3Ref.current.style.animation = 'none';
      shape3Ref.current.style.transform = `translate(-50%, -50%) translateX(${moveX / 2}px) translateY(${moveY / 2}px)`;
    }

    if (idleTimeout.current) {
      clearTimeout(idleTimeout.current);
    }
    idleTimeout.current = setTimeout(() => {
      setIsInteracting(false);
      if (shape1Ref.current) shape1Ref.current.style.animation = '';
      if (shape2Ref.current) shape2Ref.current.style.animation = '';
      if (shape3Ref.current) shape3Ref.current.style.animation = '';
    }, 200);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (idleTimeout.current) {
        clearTimeout(idleTimeout.current);
      }
    };
  }, [isInteracting]);

  return (
    <div className="background-animation">
      <div ref={shape1Ref} className="shape shape-1"></div>
      <div ref={shape2Ref} className="shape shape-2"></div>
      <div ref={shape3Ref} className="shape shape-3"></div>
    </div>
  );
};

export default BackgroundAnimation;
