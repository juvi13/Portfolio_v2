import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MoveRight, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';


export function Hero() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');
  
  return (
    <section id="hero" className="container mx-auto px-4 md:px-6 min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center relative">
      <div className="max-w-3xl flex flex-col items-center">
        {profileImage && (
            <Avatar className="w-32 h-32 mb-6 border-4 border-background shadow-lg">
                <AvatarImage src={profileImage.imageUrl} alt={profileImage.description} data-ai-hint={profileImage.imageHint} />
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
        )}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tighter mb-4">
          Akash Dutta
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          IT Professional & Developer
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#experience">
              View My Work <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
      <Link
        href="#about"
        className="absolute bottom-10 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-8 w-8 text-muted-foreground" />
      </Link>
    </section>
  );
}
