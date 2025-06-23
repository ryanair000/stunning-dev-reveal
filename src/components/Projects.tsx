
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tech: ["Vue.js", "Express", "Socket.io", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
      tech: ["React", "TypeScript", "Weather API", "Charts.js"],
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimized performance.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group border-0 shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2 hover:bg-gray-50 transition-colors"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
