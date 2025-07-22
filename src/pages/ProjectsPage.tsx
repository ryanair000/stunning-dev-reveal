import { projects } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { Button } from "@/components/ui/button";

const ProjectsPage = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <ScrollProgress />
    <Navigation />
    <main className="flex-grow pt-28 pb-16">
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
          All Projects
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-muted/50 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title} project`}
                  width={640}
                  height={360}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  </Button>
                  <Button size="sm">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default ProjectsPage;
