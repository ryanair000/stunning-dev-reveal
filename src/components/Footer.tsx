import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="text-2xl font-bold text-foreground mb-4 block">
              RA
            </Link>
            <p className="text-muted-foreground mb-4">
              Full-stack web developer specialized in creating beautiful, 
              functional digital experiences with modern technologies.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <a href="https://github.com/ryanair000" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                  <Twitter size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <a href="mailto:ryannyasimi@gmail.com" aria-label="Email Me">
                  <Mail size={20} />
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/#hire-me" className="text-muted-foreground hover:text-foreground transition-colors">
                  Hire Me
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-muted-foreground hover:text-foreground transition-colors">
                  Get Quote
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground mb-2">
              Email: <a href="mailto:ryannyasimi@gmail.com" className="text-primary hover:underline">ryannyasimi@gmail.com</a>
            </p>
            <p className="text-muted-foreground">
              Available for freelance and full-time positions.
            </p>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 text-center text-muted-foreground text-sm">
          <p>&copy; {year} Ryan Developer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 