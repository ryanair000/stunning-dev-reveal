
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
          {projects.slice(0,2).map((project, index) => (
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
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group/btn border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    asChild
                  >
                    <a href={`/projects/${project.slug}`} aria-label={`Learn more about ${project.title} project`}>
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Learn More
                      </span>
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="group/btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <a href="/quote" aria-label={`Request code for project similar to ${project.title}`}>
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Request Code
                      </span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <a href="/projects">More Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
