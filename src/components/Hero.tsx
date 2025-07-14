
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Ryan <span className="text-primary">Developer</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
              Full-Stack Web Developer
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting beautiful, functional digital experiences with modern technologies
            </p>
          </div>
          
          <div className="flex justify-center items-center space-x-6 mb-12">
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
              <a href="https://github.com/ryanair000" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github size={20} />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin size={20} />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
              <a href="mailto:ryannyasimi@gmail.com" aria-label="Email Me">
                <Mail size={20} />
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToAbout} size="lg" className="group">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              <a href="mailto:ryannyasimi@gmail.com">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="text-muted-foreground hover:text-foreground transition-colors" size={24} />
      </button>
    </section>
  );
};

export default Hero;
