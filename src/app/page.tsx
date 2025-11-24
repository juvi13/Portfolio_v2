import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Qualifications } from "@/components/sections/qualifications";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { GoToTop } from "@/components/go-to-top";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="space-y-24 md:space-y-32 my-24 md:my-32">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Qualifications />
          <Contact />
        </div>
      </main>
      <Footer />
      <GoToTop />
    </div>
  );
}
