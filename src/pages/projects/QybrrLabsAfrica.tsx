import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const QybrrLabsAfrica = () => {
  const techStack = [
    "React 18.3.1", "TypeScript", "Vite 5.4.1", "Tailwind CSS", "Radix UI", 
    "shadcn/ui", "React Router DOM", "React Query", "Supabase", "React Hook Form", 
    "Zod", "Recharts", "Sonner", "ESLint"
  ];

  const features = [
    {
      title: "Digital Solutions Platform",
      description: "Comprehensive services ranging from web development to AI chatbot solutions"
    },
    {
      title: "African Market Focus",
      description: "Localized features and payment integration targeting African businesses"
    },
    {
      title: "Real-time Integration",
      description: "Supabase integration for real-time data synchronization and updates"
    },
    {
      title: "Admin Dashboard",
      description: "Powerful admin interface for managing services and client interactions"
    },
    {
      title: "Payment Integration",
      description: "Local payment systems integration for seamless transactions"
    },
    {
      title: "AI Chatbot Solutions",
      description: "Custom AI-powered chatbot development and integration services"
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
              QybrrLabs Africa
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive digital solutions platform for African businesses with services ranging from web development to AI chatbots. Features real-time Supabase integration, admin dashboard, and localized payment systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80" asChild>
                <a href="https://qybrrlabs.africa" target="_blank" rel="noopener noreferrer">
                  View Live Demo
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/quote">Request Similar Project</a>
              </Button>
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-16">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd" 
                alt="QybrrLabs Africa Platform"
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
                    QybrrLabs Africa is a cutting-edge web application built with React, TypeScript, and Vite, 
                    serving as a comprehensive digital solutions platform specifically designed for African businesses. 
                    The platform bridges the digital divide by providing accessible, localized technology solutions.
                  </p>
                  <p>
                    The application targets the growing African market with specialized features including local 
                    payment integration, cultural considerations, and services tailored to the unique needs of 
                    African businesses looking to establish or expand their digital presence.
                  </p>
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

              {/* Services Offered */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Services Offered</h2>
                <div className="space-y-4">
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Web Development Solutions</h3>
                    <p className="text-muted-foreground">
                      Full-stack web development services including responsive design, e-commerce platforms, 
                      and custom web applications tailored for African businesses.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">AI Chatbot Development</h3>
                    <p className="text-muted-foreground">
                      Custom AI-powered chatbot solutions to enhance customer service and engagement, 
                      with multilingual support for local African languages.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Digital Transformation Consulting</h3>
                    <p className="text-muted-foreground">
                      Strategic consulting services to help businesses navigate digital transformation 
                      with culturally appropriate and economically viable solutions.
                    </p>
                  </div>
                </div>
              </section>

              {/* Architecture */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Technical Architecture</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Frontend Architecture</h3>
                    <p className="text-muted-foreground mb-4">
                      Built with modern React 18.3.1 and TypeScript for type safety and enhanced developer experience. 
                      Vite provides lightning-fast build times and hot module replacement for efficient development.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Backend Integration</h3>
                    <p className="text-muted-foreground mb-4">
                      Leverages Supabase for backend services including PostgreSQL database with real-time capabilities, 
                      authentication, and file storage, providing a scalable and secure foundation.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Payment Systems</h3>
                    <p className="text-muted-foreground">
                      Integrated with local African payment providers to ensure seamless transactions 
                      and support for popular payment methods across the continent.
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
                    <span className="ml-2 text-muted-foreground">Digital Solutions Platform</span>
                  </div>
                  <div>
                    <span className="font-medium">Target Market:</span>
                    <span className="ml-2 text-muted-foreground">African Businesses</span>
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

              {/* Call to Action */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>Interested in Similar Project?</CardTitle>
                  <CardDescription>
                    Get a custom digital solution tailored for your business needs.
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

export default QybrrLabsAfrica;
