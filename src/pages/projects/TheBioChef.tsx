import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TheBioChef = () => {
  const techStack = [
    "React 18.3.1", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", 
    "Radix UI", "React Router DOM", "TanStack Query", "React Hook Form", 
    "OpenAI GPT-3.5", "Zod", "Lucide React", "ESLint", "PostCSS"
  ];

  const platforms = [
    "Instagram", "Twitter/X", "TikTok", "LinkedIn", "Facebook"
  ];

  const tones = [
    "Friendly", "Professional", "Witty", "Inspirational", "Casual", "Confident"
  ];

  const features = [
    {
      title: "AI-Powered Bio Generation",
      description: "Leverages OpenAI GPT-3.5 Turbo for creating personalized, compelling social media bios"
    },
    {
      title: "Platform Optimization",
      description: "Automatically respects character limits and optimization requirements for each platform"
    },
    {
      title: "Customizable Parameters",
      description: "Bio length options, tone selection, and emoji/hashtag inclusion preferences"
    },
    {
      title: "Real-time Character Counting",
      description: "Live feedback on character usage versus platform-specific limits"
    },
    {
      title: "Glass-morphism Design",
      description: "Modern aesthetic with semi-transparent backgrounds and backdrop blur effects"
    },
    {
      title: "Freemium Model",
      description: "5 free bio generations for new users with upgrade prompts for continued use"
    }
  ];

  const designFeatures = [
    {
      category: "Color Palette",
      items: ["Purple to Pink Gradients (#7C3AED → #EC4899)", "Soft Purple-Indigo Backgrounds", "Glass Effect Elements", "Platform-specific Accent Colors"]
    },
    {
      category: "Typography",
      items: ["Bold Gradient Headings", "Clean Readable Body Text", "Interactive Purple-Pink Elements", "Responsive Text Scaling"]
    },
    {
      category: "Components",
      items: ["Glass-morphism Cards", "Gradient Button Backgrounds", "Purple Accent Borders", "Smooth Hover Transitions"]
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
              The Bio Chef
              <span className="text-primary"> AI Bio Generator</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              AI-powered social media bio generator with platform-specific optimization for Instagram, Twitter, 
              LinkedIn, TikTok. Features customizable tones, character limit tracking, and beautiful glass-morphism 
              design for creating compelling personal and professional bios.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80" asChild>
                <a href="https://thebiochef.netlify.app" target="_blank" rel="noopener noreferrer">
                  Try Live Demo
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/quote">Request AI Bio Tool</a>
              </Button>
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-16">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07" 
                alt="The Bio Chef AI Generator Interface"
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
                    The Bio Chef is a modern AI-powered web application designed to help users create compelling 
                    and personalized social media bios. Built with React 18, TypeScript, and powered by OpenAI's 
                    GPT-3.5 Turbo, it provides an intuitive interface for generating platform-optimized bios 
                    across major social networks.
                  </p>
                  <p>
                    The application features a beautiful glass-morphism design aesthetic with purple-pink gradients, 
                    creating a modern and engaging user experience. With its freemium model and intelligent 
                    character limit tracking, The Bio Chef makes professional bio creation accessible to everyone.
                  </p>
                </div>
              </section>

              {/* Supported Platforms */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Supported Platforms</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {platforms.map((platform) => (
                    <div key={platform} className="p-4 bg-card rounded-lg border border-border/50 text-center">
                      <span className="font-medium">{platform}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Each platform has specific character constraints and optimization strategies built into the AI generation process.
                </p>
              </section>

              {/* Available Tones */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Tone Options</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {tones.map((tone) => (
                    <div key={tone} className="p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20 text-center">
                      <span className="font-medium text-primary">{tone}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Multiple tone options allow users to create bios that match their personality, profession, or brand voice.
                </p>
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

              {/* Design System */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Design System</h2>
                <div className="space-y-6">
                  {designFeatures.map((section, index) => (
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

              {/* Technical Architecture */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Technical Architecture</h2>
                <div className="space-y-4">
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Frontend Framework</h3>
                    <p className="text-muted-foreground">
                      Built with React 18.3.1 and TypeScript for type safety and modern development practices. 
                      Vite provides fast build times and excellent development experience with hot module replacement.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">UI Component Library</h3>
                    <p className="text-muted-foreground">
                      Utilizes shadcn/ui components built on Radix UI primitives for accessibility and customization. 
                      Tailwind CSS provides utility-first styling with custom theming and glass-morphism effects.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">AI Integration</h3>
                    <p className="text-muted-foreground">
                      OpenAI GPT-3.5 Turbo integration via REST API provides intelligent bio generation with 
                      contextual understanding of platform requirements and user preferences.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">State Management</h3>
                    <p className="text-muted-foreground">
                      React Router DOM for client-side routing, TanStack Query for data fetching and caching, 
                      and React Hook Form with Zod validation for robust form handling.
                    </p>
                  </div>
                </div>
              </section>

              {/* Multi-Page Application */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Application Structure</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-card rounded-lg border border-border/50">
                    <h4 className="font-semibold mb-2">Home Page</h4>
                    <p className="text-sm text-muted-foreground">Main bio generation interface with form controls and real-time preview</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border/50">
                    <h4 className="font-semibold mb-2">About Page</h4>
                    <p className="text-sm text-muted-foreground">Mission statement, features overview, and how-it-works explanation</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border/50">
                    <h4 className="font-semibold mb-2">Socials Page</h4>
                    <p className="text-sm text-muted-foreground">Social media links and contact information for user engagement</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border/50">
                    <h4 className="font-semibold mb-2">Authentication Pages</h4>
                    <p className="text-sm text-muted-foreground">Login and sign-up forms (UI-only) for future user account features</p>
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
                    <span className="ml-2 text-muted-foreground">AI Bio Generator</span>
                  </div>
                  <div>
                    <span className="font-medium">Target Users:</span>
                    <span className="ml-2 text-muted-foreground">Content Creators, Professionals</span>
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

              {/* Features Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Feature Highlights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Free Generations</span>
                    <Badge variant="outline">5 Free</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Supported Platforms</span>
                    <Badge variant="outline">5 Platforms</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Tone Options</span>
                    <Badge variant="outline">6 Tones</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Character Tracking</span>
                    <Badge variant="outline">Real-time</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>Need Bio Generator?</CardTitle>
                  <CardDescription>
                    Get a custom AI-powered bio generator for your platform.
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

export default TheBioChef;
