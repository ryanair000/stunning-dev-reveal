
const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              About Me
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I create digital experiences through clean code and thoughtful design. 
              With 5+ years of experience, I specialize in React, TypeScript, and modern web technologies.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I believe in the power of simplicity and functionality working together to create meaningful solutions that make a difference.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-muted/50 rounded-lg p-6 hover:bg-muted/70 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">5+ Years</h3>
                <p className="text-sm text-muted-foreground">Experience</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-6 hover:bg-muted/70 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">50+ Projects</h3>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm border border-border/50">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-foreground font-medium">Available for new projects</span>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">What I Do Best</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Frontend Development with React & TypeScript</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Backend APIs with Node.js & PostgreSQL</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>UI/UX Design & User Experience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
