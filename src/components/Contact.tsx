
import { Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="animate-fade-in">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email Me</h3>
                  <p className="text-muted-foreground mb-2">
                    Drop me a line and I'll get back to you within 24 hours.
                  </p>
                  <a 
                    href="mailto:hello@developer.com" 
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    hello@developer.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Let's Chat</h3>
                  <p className="text-muted-foreground mb-4">
                    I'm always open to discussing new opportunities and interesting projects.
                  </p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <form className="space-y-6 bg-background rounded-xl p-8 shadow-sm border border-border/50">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input placeholder="Project Discussion" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  className="min-h-[120px] resize-none"
                />
              </div>
              
              <Button size="lg" className="w-full group">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>

        <div className="text-center mt-20 pt-12 border-t border-border animate-fade-in">
          <p className="text-muted-foreground">
            © 2024 John Developer. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
