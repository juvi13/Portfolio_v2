import { skills, type Skill } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Skills() {
  const skillCategories = [
    ...new Set(skills.map((skill) => skill.category)),
  ];

  return (
    <section id="skills" className="container mx-auto px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">My Skillset</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          A collection of technologies and tools I'm proficient in, from frontend frameworks to backend services.
        </p>
      </div>

      <div className="space-y-10">
        {skillCategories.map((category) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold mb-6 text-center">{category}</h3>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
            >
              <CarouselContent>
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
                      <div className="p-1">
                        <SkillCard skill={skill} />
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <div className="glass-card group w-full h-40 p-4 flex flex-col justify-center items-center text-center space-y-2 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
      <Icon className="w-12 h-12 text-accent stroke-width-1.5" />
      <p className="font-semibold text-sm">{skill.name}</p>
    </div>
  );
}
