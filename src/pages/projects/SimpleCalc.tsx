import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SimpleCalc = () => {
  const techStack = [
    "React", "TypeScript", "Vite", "shadcn-ui", "Tailwind CSS", 
    "Radix UI", "Lucide React", "ESLint", "Modern JavaScript"
  ];

  const features = [
    {
      title: "Mathematical Operations",
      description: "Complete set of basic mathematical operations including addition, subtraction, multiplication, and division"
    },
    {
      title: "Responsive Design",
      description: "Fully responsive interface that adapts seamlessly to different screen sizes and devices"
    },
    {
      title: "Intuitive Interface",
      description: "Clean, user-friendly design with clear button layouts and visual feedback for all interactions"
    },
    {
      title: "Real-time Calculations",
      description: "Instant calculation results with smooth animations and responsive user interface"
    },
    {
      title: "Error Handling",
      description: "Robust error handling for invalid operations and edge cases with user-friendly error messages"
    },
    {
      title: "Accessibility Features",
      description: "Built with accessibility standards using Radix UI primitives and proper ARIA attributes"
    }
  ];

  const calculatorFeatures = [
    {
      category: "Core Operations",
      items: ["Addition (+)", "Subtraction (-)", "Multiplication (×)", "Division (÷)"]
    },
    {
      category: "Interface Features",
      items: ["Clear Button (C)", "Decimal Point Support", "Backspace Functionality", "Visual Button Feedback"]
    },
    {
      category: "User Experience",
      items: ["Keyboard Input Support", "Responsive Layout", "Error State Handling", "Smooth Animations"]
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
              SimpleCalc
              <span className="text-primary"> Calculator App</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Modern calculator application built with React and TypeScript. Features responsive design, 
              intuitive user interface with shadcn-ui components, and seamless mathematical operations 
              with clean Tailwind CSS styling and accessibility-first approach.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80" asChild>
                <a href="https://lovable.dev/projects/fd5c4574-d4e7-4931-be2f-36caecc6b9a7" target="_blank" rel="noopener noreferrer">
                  Try Live Demo
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/quote">Request Calculator App</a>
              </Button>
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-16">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71" 
                alt="SimpleCalc Calculator Application Interface"
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
                    SimpleCalc is a modern, responsive calculator application built with React and TypeScript, 
                    demonstrating clean code practices and contemporary web development techniques. The application 
                    showcases proficiency in building intuitive user interfaces with excellent user experience 
                    and accessibility standards.
                  </p>
                  <p>
                    Developed using the latest React patterns and built on Vite for optimal performance, 
                    SimpleCalc represents a practical approach to building utility applications with focus on 
                    usability, reliability, and maintainable code architecture.
                  </p>
                </div>
              </section>

              {/* Design Philosophy */}
              <section>
                <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Design Philosophy</h2>
                  <blockquote className="text-lg text-muted-foreground">
                    Emphasizes simplicity and functionality with clean, intuitive design. Built with modern React patterns, 
                    TypeScript for reliability, and shadcn-ui components for consistent, accessible user interactions.
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

              {/* Calculator Features */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Calculator Features</h2>
                <div className="space-y-6">
                  {calculatorFeatures.map((section, index) => (
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
                      Built with modern React hooks and functional components for optimal performance. 
                      TypeScript provides comprehensive type safety for mathematical operations, ensuring 
                      reliable calculations and reducing runtime errors through compile-time checking.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Component Architecture</h3>
                    <p className="text-muted-foreground">
                      Modular component structure with clear separation between display, input handling, 
                      and calculation logic. This approach ensures maintainable code and easy feature 
                      expansion for additional mathematical functions.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">State Management</h3>
                    <p className="text-muted-foreground">
                      Efficient state management using React hooks for calculator display, operation history, 
                      and user input. Clean state transitions ensure reliable operation tracking and 
                      proper handling of sequential calculations.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">User Interface Design</h3>
                    <p className="text-muted-foreground">
                      shadcn-ui components provide consistent, accessible button interactions with proper 
                      focus management and keyboard navigation. Tailwind CSS ensures responsive design 
                      that adapts to different screen sizes and device orientations.
                    </p>
                  </div>
                </div>
              </section>

              {/* Mathematical Accuracy */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Mathematical Accuracy & Error Handling</h2>
                <div className="space-y-4">
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Precision Handling</h3>
                    <p className="text-muted-foreground">
                      Implements proper floating-point arithmetic handling to minimize rounding errors. 
                      Includes safeguards for common mathematical edge cases and maintains precision 
                      for complex calculation sequences.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Error Prevention</h3>
                    <p className="text-muted-foreground">
                      Comprehensive error handling for division by zero, invalid operations, and input 
                      validation. User-friendly error messages guide users toward valid operations 
                      without disrupting the calculation workflow.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Input Validation</h3>
                    <p className="text-muted-foreground">
                      Robust input validation ensures only valid numerical inputs and operations are processed. 
                      Prevents common user errors and maintains calculator state integrity throughout usage sessions.
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
                    <span className="ml-2 text-muted-foreground">Calculator Application</span>
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

              {/* Calculator Specs */}
              <Card>
                <CardHeader>
                  <CardTitle>Calculator Specifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Operations</span>
                    <Badge variant="outline">4 Basic</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Input Methods</span>
                    <Badge variant="outline">Click & Keyboard</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Error Handling</span>
                    <Badge variant="outline">Comprehensive</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Accessibility</span>
                    <Badge variant="outline">WCAG Compliant</Badge>
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
                    <span className="text-sm font-medium">Performance:</span>
                    <p className="text-sm text-muted-foreground mt-1">Optimized for fast loading and smooth interactions</p>
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>Need Calculator App?</CardTitle>
                  <CardDescription>
                    Get a custom calculator application with advanced features and modern design.
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

export default SimpleCalc;
