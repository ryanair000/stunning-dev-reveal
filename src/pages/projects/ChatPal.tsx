import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ChatPal = () => {
  const techStack = [
    "React", "TypeScript", "Vite", "shadcn-ui", "Tailwind CSS", 
    "Radix UI", "Lucide React", "React Hook Form", "ESLint"
  ];

  const features = [
    {
      title: "Real-time Messaging",
      description: "Instant message delivery with smooth animations and responsive interface"
    },
    {
      title: "Modern UI Design",
      description: "Clean, intuitive interface built with shadcn-ui components for optimal user experience"
    },
    {
      title: "Responsive Layout",
      description: "Fully responsive design that works seamlessly across desktop, tablet, and mobile devices"
    },
    {
      title: "TypeScript Integration",
      description: "Type-safe development ensuring robust code quality and enhanced developer experience"
    },
    {
      title: "Component Architecture",
      description: "Modular component structure for maintainability and reusability"
    },
    {
      title: "Accessibility Focus",
      description: "Built with accessibility in mind using Radix UI primitives and ARIA standards"
    }
  ];

  const chatFeatures = [
    {
      category: "Messaging Features",
      items: ["Real-time Message Delivery", "Message Status Indicators", "Typing Indicators", "Message Timestamps"]
    },
    {
      category: "User Experience",
      items: ["Smooth Animations", "Responsive Design", "Dark/Light Theme Support", "Keyboard Navigation"]
    },
    {
      category: "Technical Features",
      items: ["TypeScript Type Safety", "Component Reusability", "Performance Optimization", "Modern React Patterns"]
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ScrollProgress />
      <Navigation />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              ChatPal
              <span className="text-primary"> Chat Application</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Modern chat application built with React and TypeScript. Features real-time messaging, 
              responsive design with shadcn-ui components, and seamless user experience with 
              Tailwind CSS styling and accessibility-first approach.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80" asChild>
                <a href="https://lovable.dev/projects/441b2190-9ad1-4606-bec6-79748c25b1f8" target="_blank" rel="noopener noreferrer">
                  View Live Demo
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/quote">Request Chat Application</a>
              </Button>
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-16">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624" 
                alt="ChatPal Chat Application Interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    ChatPal is a modern, real-time chat application built with React and TypeScript, 
                    showcasing contemporary web development practices and user-centered design. The application 
                    demonstrates proficiency in building scalable, maintainable chat interfaces with excellent 
                    user experience and accessibility standards.
                  </p>
                  <p>
                    Developed using the latest React patterns and built on Vite for optimal performance, 
                    ChatPal represents a clean, efficient approach to real-time communication applications. 
                    The project emphasizes code quality, type safety, and modern UI/UX principles.
                  </p>
                </div>
              </section>

              {/* Development Approach */}
              <section>
                <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Development Philosophy</h2>
                  <blockquote className="text-lg text-muted-foreground">
                    Built with modern React patterns, TypeScript for type safety, and shadcn-ui for 
                    consistent, accessible components. Focuses on clean code architecture and optimal user experience.
                  </blockquote>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <Card key={index} className="border-border/50">
                      <CardHeader>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Chat Features */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Application Features</h2>
                <div className="space-y-6">
                  {chatFeatures.map((section, index) => (
                    <div key={index} className="p-6 bg-card rounded-lg border border-border/50">
                      <h3 className="text-xl font-semibold mb-4">{section.category}</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technical Implementation */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Technical Implementation</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">React & TypeScript Foundation</h3>
                    <p className="text-muted-foreground">
                      Built with modern React patterns including hooks, context, and functional components. 
                      TypeScript provides comprehensive type safety, reducing runtime errors and improving 
                      development experience with enhanced IDE support and code intelligence.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">shadcn-ui Component System</h3>
                    <p className="text-muted-foreground">
                      Utilizes shadcn-ui components built on Radix UI primitives, ensuring accessibility 
                      compliance and consistent design patterns. Components are customizable and follow 
                      modern design principles for optimal user interaction.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Vite Build System</h3>
                    <p className="text-muted-foreground">
                      Leverages Vite for lightning-fast development server, hot module replacement, and 
                      optimized production builds. This ensures rapid development cycles and excellent 
                      performance in both development and production environments.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Styling & Design System</h3>
                    <p className="text-muted-foreground">
                      Tailwind CSS provides utility-first styling with consistent design tokens. 
                      The approach ensures maintainable styles, responsive design, and efficient 
                      CSS bundle sizes while maintaining design consistency across components.
                    </p>
                  </div>
                </div>
              </section>

              {/* Architecture Benefits */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Architecture Benefits</h2>
                <div className="space-y-4">
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Scalability</h3>
                    <p className="text-muted-foreground">
                      Component-based architecture allows for easy feature expansion and maintenance. 
                      Clear separation of concerns and TypeScript interfaces enable smooth scaling as requirements grow.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Maintainability</h3>
                    <p className="text-muted-foreground">
                      TypeScript type checking, ESLint code quality enforcement, and modular component 
                      structure ensure long-term maintainability and easy onboarding for new developers.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Performance</h3>
                    <p className="text-muted-foreground">
                      Vite's optimized bundling, React's efficient rendering, and Tailwind's purged CSS 
                      result in fast load times and smooth user interactions across all device types.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="font-medium">Year:</span>
                    <span className="ml-2 text-muted-foreground">2024</span>
                  </div>
                  <div>
                    <span className="font-medium">Type:</span>
                    <span className="ml-2 text-muted-foreground">Chat Application</span>
                  </div>
                  <div>
                    <span className="font-medium">Target Users:</span>
                    <span className="ml-2 text-muted-foreground">General Users</span>
                  </div>
                  <div>
                    <span className="font-medium">Status:</span>
                    <Badge className="ml-2">Live</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Tech Stack */}
              <Card>
                <CardHeader>
                  <CardTitle>Technology Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Development Highlights */}
              <Card>
                <CardHeader>
                  <CardTitle>Development Highlights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Build Tool</span>
                    <Badge variant="outline">Vite</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Type Safety</span>
                    <Badge variant="outline">TypeScript</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">UI Components</span>
                    <Badge variant="outline">shadcn-ui</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Accessibility</span>
                    <Badge variant="outline">Radix UI</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Platform Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Platform Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="text-sm font-medium">Development Platform:</span>
                    <p className="text-sm text-muted-foreground mt-1">Lovable.dev</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Deployment:</span>
                    <p className="text-sm text-muted-foreground mt-1">Instant deployment with live preview</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Features:</span>
                    <p className="text-sm text-muted-foreground mt-1">Real-time collaboration and version control</p>
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>Need Chat Application?</CardTitle>
                  <CardDescription>
                    Get a custom chat application with modern features and design.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" asChild>
                    <a href="/quote">Request Code</a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/hire-me">Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChatPal;
