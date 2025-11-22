import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Backend Developer",
    company: "Tata Consultancy Services",
    duration: "Sep 2024 - Present",
    description: "Backend developer on the TCS BaNCS platform, responsible for implementing backend services, integrations, and APIs. Also handle production support including incident triage, root cause analysis, monitoring, and coordinating fixes and deployments to ensure system reliability.",
    tags: ["TCS BaNCS", "Production Support", "APIs", "Java E2E", "PL/SQL", "Spring MVC", "Swagger"],
  },
  {
    title: "Electrical Engineer Intern",
    company: "Power Research and Development Consultants Private Limited",
    duration: "Jan 2024 - Aug 2024",
    description: "Prepared detailed AutoCAD drawings for converting overhead electrical lines to underground systems, leveraging QGIS and associated software to ensure precision and optimize power distribution networks.",
    tags: ["AutoCAD", "QGIS", "Power Distribution", "Efficiency"],
  },
  {
    title: "Vocational Trainee",
    company: "Kolkata Metro Rail Corporation Ltd",
    duration: "June 2022 - Aug 2022",
    description: "Assisted with maintenance and testing of traction power systems, learned relay testing, PLC basics and on-site safety procedures. Gained hands-on experience with oscilloscopes and power system diagnostics.",
    tags: ["Traction Power", "PLC", "Relay Testing", "Testing"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Work Experience</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          A timeline of my professional journey and key contributions.
        </p>
      </div>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" aria-hidden="true"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
             <div key={index} className="relative pl-8 md:pl-0">
                <div className="absolute left-0 md:left-1/2 top-1.5 -translate-x-1/2 w-4 h-4 bg-accent rounded-full" aria-hidden="true"></div>

                <div className={`md:grid md:grid-cols-2 md:gap-8 items-start`}>
                  <div className={`flex flex-col items-start md:items-end ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                    <p className={`md:text-right ${index % 2 === 0 ? '' : 'md:text-left'}`}>
                      <span className="font-semibold text-lg">{exp.title}</span><br />
                      <span className="text-accent">{exp.company}</span>
                    </p>
                  </div>
                  <div className={`${index % 2 === 0 ? '' : 'md:text-right md:order-1'}`}>
                      <p className="text-sm text-muted-foreground mb-4">{exp.duration}</p>
                      <div className="glass-card p-6 text-left">
                          <p className="text-muted-foreground mb-4">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                              {exp.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary">{tag}</Badge>
                              ))}
                          </div>
                      </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
