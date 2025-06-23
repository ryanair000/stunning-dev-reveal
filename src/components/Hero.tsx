
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-8 leading-tight">
            John Developer
          </h1>
          
          <p className="text-xl text-gray-500 mb-16 font-light">
            Full-Stack Web Developer
          </p>
          
          <div className="flex justify-center space-x-8 mb-20">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:hello@developer.com" className="text-gray-400 hover:text-gray-900 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-gray-300 hover:text-gray-600 transition-colors duration-300" size={24} />
      </button>
    </section>
  );
};

export default Hero;
