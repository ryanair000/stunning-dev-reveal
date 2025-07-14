
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </p>
          
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
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                <Twitter size={20} />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
              <a href="mailto:ryannyasimi@gmail.com" aria-label="Email Me">
                <Mail size={20} />
              </a>
            </Button>
          </div>

          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="mailto:ryannyasimi@gmail.com">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
