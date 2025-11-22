import { Code2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="container mx-auto px-4 md:px-6">
      <div className="grid md:grid-cols-1 gap-12 items-center">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
            <div className="flex items-center gap-4 justify-center">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">About Me</h2>
                <Code2 className="h-10 w-10 text-accent animate-float" />
            </div>
          <p className="text-muted-foreground leading-relaxed">
            I'm a passionate IT professional specializing in Java E2E and PL/SQL. With a strong foundation in software development and a keen eye for detail, I strive to create solutions that make a difference.          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently working on TCS BaNCS. I love learning new technologies and constantly pushing myself to grow as a developer.          </p>
        </div>
      </div>
    </section>
  );
}
