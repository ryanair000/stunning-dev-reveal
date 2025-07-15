import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

interface Service {
  title: string;
  tagline: string;
  price: string;
  bullets: string[];
  highlight?: boolean;
  cta?: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    tagline: "Custom websites & web apps built with cutting-edge tech",
    price: "Ksh 50,000 – 300,000",
    bullets: ["Responsive Design", "Modern Frameworks", "SEO Optimized"],
    highlight: true,
  },
  {
    title: "Mobile App Development",
    tagline: "Native & cross-platform mobile apps for iOS & Android",
    price: "Ksh 150,000 – 1,000,000",
    bullets: ["Cross-Platform", "Native Performance", "App Store Ready"],
  },
  {
    title: "Software Development",
    tagline: "Custom software solutions tailored to your business",
    price: "Ksh 200,000 – 1,500,000",
    bullets: ["Custom Solutions", "Scalable Architecture", "Ongoing Support"],
  },
  {
    title: "Web Hosting",
    tagline: "Reliable & secure hosting with 99.9% uptime",
    price: "Ksh 10,000 – 100,000 / yr",
    bullets: ["SSL Certificates", "24/7 Support", "Fast Loading"],
  },
  {
    title: "Bulk SMS",
    tagline: "Reach your customers instantly with bulk SMS",
    price: "From Ksh 0.7 per SMS",
    bullets: ["High Delivery Rate", "Instant Delivery", "Cost Effective"],
  },
  {
    title: "Digital Marketing",
    tagline: "Comprehensive digital marketing to grow your business",
    price: "Ksh 30,000 – 300,000 / mo",
    bullets: ["SEO/SEM", "Social Media", "Content Marketing"],
  },
  {
    title: "Graphic Design",
    tagline: "Professional graphic design for all branding needs",
    price: "Ksh 5,000 – 50,000",
    bullets: ["Brand Identity", "Print Design", "Digital Assets"],
  },
  {
    title: "AI Chatbot Assistants",
    tagline: "Intelligent chatbots to enhance customer engagement",
    price: "Ksh 80,000 – 500,000",
    bullets: ["24/7 Availability", "Natural Language", "Custom Training"],
  },
];

const HireMe = () => {
  return (
    <section id="hire-me" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Work With Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm currently available for freelance projects and full-time positions.
            Here's how we can work together.
          </p>
        </div>

        {/* Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-card rounded-xl p-8 border ${service.highlight ? 'border-primary shadow-md' : 'border-border/50 shadow-sm hover:shadow-md'} transition-all duration-300 relative animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.highlight && (
                <div className="absolute -top-3 right-8 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.tagline}</p>
                <div className="text-2xl font-bold text-foreground">{service.price}</div>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {service.bullets.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/#contact">
                <Button className="w-full">
                  {service.cta ?? 'Learn More'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
          {/*
          <div className="bg-card rounded-xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Website Development</h3>
              <p className="text-muted-foreground mb-4">Perfect for small businesses and personal brands</p>
              <div className="text-2xl font-bold text-foreground">
                From $1,500
              </div>
            </div>
            
            <ul className="space-y-3 mb-6 flex-grow">
              {[
                "Responsive design",
                "SEO optimization",
                "Contact form integration",
                "Basic analytics setup",
                "Content management system"
              ].map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/#contact">
              <Button className="w-full">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          
          <div className="bg-card rounded-xl p-8 border border-primary shadow-md relative animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="absolute -top-3 right-8 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
              Popular
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Web Application</h3>
              <p className="text-muted-foreground mb-4">For businesses needing custom functionality</p>
              <div className="text-2xl font-bold text-foreground">
                From $3,500
              </div>
            </div>
            
            <ul className="space-y-3 mb-6 flex-grow">
              {[
                "Everything in Website Development",
                "User authentication",
                "Database integration",
                "Custom API development",
                "Payment processing",
                "Admin dashboard"
              ].map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/#contact">
              <Button className="w-full">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          
          <div className="bg-card rounded-xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Enterprise Solution</h3>
              <p className="text-muted-foreground mb-4">For complex business requirements</p>
              <div className="text-2xl font-bold text-foreground">
                Custom Quote
              </div>
            </div>
            
            <ul className="space-y-3 mb-6 flex-grow">
              {[
                "Everything in Web Application",
                "Scalable architecture",
                "Third-party integrations",
                "Performance optimization",
                "Security auditing",
                "Ongoing maintenance",
                "Technical consultation"
              ].map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/#contact">
              <Button className="w-full">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        

        */}
        <div className="bg-card rounded-xl p-8 border border-border/50 shadow-sm animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">My Development Process</h3>
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-primary/10 text-primary font-bold h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-medium text-foreground">Discovery & Planning</h4>
                    <p className="text-muted-foreground text-sm">We'll discuss your goals, requirements, and timeline to create a detailed project plan.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-primary/10 text-primary font-bold h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-medium text-foreground">Design & Prototyping</h4>
                    <p className="text-muted-foreground text-sm">I'll create wireframes and interactive prototypes for your approval before development begins.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-primary/10 text-primary font-bold h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-medium text-foreground">Development & Testing</h4>
                    <p className="text-muted-foreground text-sm">Building your project with regular updates and thorough testing throughout the process.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-primary/10 text-primary font-bold h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-medium text-foreground">Launch & Support</h4>
                    <p className="text-muted-foreground text-sm">Deploying your project and providing ongoing support and maintenance as needed.</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">Ready to get started?</h3>
              <p className="text-muted-foreground mb-6">
                I'm currently taking on new projects starting from <span className="font-medium text-foreground">July 2024</span>. 
                Get in touch to discuss your project needs and secure a spot in my schedule.
              </p>
              <Link to="/#contact">
                <Button size="lg" className="w-full">
                  Hire Me Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe; 