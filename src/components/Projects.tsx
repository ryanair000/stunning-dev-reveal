
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-video bg-muted/50 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`Screenshot of ${project.title} project`}
                  width={640}
                  height={360}
                  loading={index > 0 ? "lazy" : "eager"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
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
                  <Button variant="outline" size="sm" className="group/btn">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View code for ${project.title} on GitHub`}>
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="group/btn">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`}>
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
