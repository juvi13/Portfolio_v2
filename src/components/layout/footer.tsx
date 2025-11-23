'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Code2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [clickCount, setClickCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    if (clickCount === 7) {
      toast({
        title: 'Hello there! ✨',
        description: 'You found the secret Easter egg! Have a great day!',
      });
      setClickCount(0);
    }
  }, [clickCount, toast]);

  const handleCopyrightClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div
            className="flex items-center gap-2 mb-4 md:mb-0 cursor-pointer"
            onClick={handleCopyrightClick}
          >
            <Code2 className="h-6 w-6" />
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Akash Dutta. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/akash-dutta13/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://twitter.com/juvibegaming" target="_blank" rel="noopener noreferrer">
                <X className="h-5 w-5" />
                <span className="sr-only">X (formerly Twitter)</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/juvi13" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
