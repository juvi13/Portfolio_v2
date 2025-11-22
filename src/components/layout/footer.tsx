import { Github, Linkedin, X, Mail, Clock } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ThemeRandomizer } from '../theme-randomizer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const portfolioVersions = [
  { version: "1.0", url: "https://juviportfolio.netlify.app", date: "2025-01-15" },
  { version: "[C]", url: "#", date: new Date().toISOString().split('T')[0] },
];

export function Footer() {
  return (
    <footer className="bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Akash Dutta. All rights reserved.
          </p>
          <div className="flex items-center gap-2 pr-16 md:pr-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Clock className="h-5 w-5" />
                  <span className="sr-only">Portfolio Timeline</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Portfolio Versions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {portfolioVersions.map((item) => (
                   <DropdownMenuItem key={item.version} asChild>
                    <Link
                      href={item.url}
                      target={item.url.startsWith('http') ? '_blank' : undefined}
                      rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="flex items-center w-full">
                        <span>Version {item.version}</span>
                        <span className="ml-8 text-muted-foreground text-xs">{item.date}</span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <ThemeRandomizer />
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:akash13111999@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
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
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/akash-dutta13/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
