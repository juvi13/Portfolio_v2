import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce website built with Next.js, featuring product listings, a shopping cart, and a secure checkout process.",
    tags: ["Next.js", "TypeScript", "Stripe", "Firebase"],
    liveUrl: "#",
    imageId: "project-1",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool that helps teams organize their work, track progress, and meet deadlines.",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    liveUrl: "#",
    imageId: "project-2",
  },
  {
    title: "Personal Blog",
    description: "A sleek and modern blog platform designed for writers, featuring a clean interface and Markdown support for easy content creation.",
    tags: ["Gatsby", "GraphQL", "Contentful"],
    liveUrl: "#",
    imageId: "project-3",
  },
];

export function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">My Projects</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Here are some of the projects I'm proud to have worked on.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
          return (
            <Link key={project.title} href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block group">
              <div className="relative overflow-hidden glass-card h-64">
                {projectImage && (
                  <Image
                    src={projectImage.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={projectImage.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-xl text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-none">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <ExternalLink className="absolute top-4 right-4 h-6 w-6 text-white group-hover:text-accent transition-colors" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
