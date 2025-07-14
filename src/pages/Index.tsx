
import { Suspense } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingSkeleton from "@/components/LoadingSkeleton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      
      <main id="main" tabIndex={-1}>
        <Suspense fallback={<LoadingSkeleton type="hero" />}>
          <Hero />
        </Suspense>
        
        <section id="about" tabIndex={-1}>
          <Suspense fallback={<LoadingSkeleton type="about" />}>
            <About />
          </Suspense>
        </section>
        
        <section id="skills" tabIndex={-1}>
          <Suspense fallback={<LoadingSkeleton type="skills" />}>
            <Skills />
          </Suspense>
        </section>
        
        <section id="projects" tabIndex={-1}>
          <Suspense fallback={<LoadingSkeleton type="projects" />}>
            <Projects />
          </Suspense>
        </section>
        
        <section id="contact" tabIndex={-1}>
          <Suspense fallback={<LoadingSkeleton type="contact" />}>
            <Contact />
          </Suspense>
        </section>
      </main>
    </div>
  );
};

export default Index;
