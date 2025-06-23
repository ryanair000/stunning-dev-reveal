
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl animate-scale-in">
              JD
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block animate-fade-in">Creative</span>
            <span className="block text-blue-600 animate-fade-in" style={{ animationDelay: "200ms" }}>Web Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "400ms" }}>
            I craft beautiful, functional, and user-friendly digital experiences that bring ideas to life through clean code and innovative design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => scrollToAbout()}
            >
              View My Work
            </Button>
            
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform">
                <Linkedin size={24} />
              </a>
              <a href="mailto:hello@developer.com" className="p-3 text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-gray-400 hover:text-blue-600 transition-colors duration-300" size={32} />
      </button>
    </section>
  );
};

export default Hero;
