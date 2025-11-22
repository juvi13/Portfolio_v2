import { GraduationCap, Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Stream } from "stream";

const education = [
    {
        degree: "Bachelor of Technology in Electrical Engineering",
        institution: "University of Engineering and Management, Kolkata",
        duration: "2020 - 2024",
    },
    {
        degree: "Schooling (ICSE & ISC) Science Stream",
        institution: "Julien Day School, Ganganagar",
        duration: "2008 - 2020",
    },
];

const certifications = [
    {
        name: "Certified Next.js Developer",
        issuer: "Vercel",
        date: "2023",
        verifyUrl: "https://vercel.com/certs",
    },
    {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2022",
        verifyUrl: "https://aws.amazon.com/certification/",
    },
];

export function Qualifications() {
    return (
        <section id="qualifications" className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Qualifications</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground">My educational background and professional certifications.</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold flex items-center gap-3"><GraduationCap className="w-8 h-8 text-accent"/> Education</h3>
                    {education.map((edu, index) => (
                        <div key={index} className="glass-card p-6">
                            <p className="text-lg font-semibold">{edu.degree}</p>
                            <p className="text-accent font-medium">{edu.institution}</p>
                            <p className="text-sm text-muted-foreground mt-1">{edu.duration}</p>
                        </div>
                    ))}
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold flex items-center gap-3"><Award className="w-8 h-8 text-accent"/> Certifications</h3>
                    {certifications.map((cert, index) => (
                        <div key={index} className="glass-card p-6 flex justify-between items-start">
                           <div>
                                <p className="text-lg font-semibold">{cert.name}</p>
                                <p className="text-accent font-medium">{cert.issuer}</p>
                                <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
                           </div>
                           {cert.verifyUrl && (
                                <Button variant="ghost" size="icon" asChild>
                                    <Link href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-5 h-5"/>
                                        <span className="sr-only">Verify certification</span>
                                    </Link>
                                </Button>
                           )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
