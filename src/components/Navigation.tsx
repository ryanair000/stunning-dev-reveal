
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Work", href: "/#projects" },
    { name: "Blog", href: "/blog" },
    { name: "Hire Me", href: "/hire-me" },
    { name: "Contact", href: "/#contact" }
  ];

  const scrollToSection = (href: string) => {
    // If it's a hash link on the home page
    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '');
      const element = document.getElementById(sectionId === "work" ? "projects" : sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
    // Otherwise, regular navigation will happen through the Link component
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 border-b border-border/50 shadow-sm" 
          : "bg-transparent"
      }`}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="text-2xl font-bold text-foreground">
              RA
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={item.href.startsWith('/#') ? () => scrollToSection(item.href) : undefined}
                  className={`text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium relative group ${
                    (location.pathname === '/' && item.href.includes(location.hash)) || 
                    (location.pathname === item.href) ? 'text-foreground' : ''
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-20 left-0 right-0 bg-background border-b border-border/50 p-6">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={item.href.startsWith('/#') ? () => scrollToSection(item.href) : () => setIsMobileMenuOpen(false)}
                  className="block w-full text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
