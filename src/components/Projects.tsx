
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      year: "2024",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative tool with real-time updates using Socket.io. Includes drag-and-drop functionality and team collaboration features.",
      year: "2023",
      tech: ["React", "Socket.io", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Location-based forecasts and analytics with beautiful data visualizations and responsive design for all devices.",
      year: "2023",
      tech: ["Next.js", "TypeScript", "Chart.js", "API"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
      github: "#",
      live: "#"
    }
  ];

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
                  alt={project.title}
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
                    <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Code
                  </Button>
                  <Button size="sm" className="group/btn">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
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
