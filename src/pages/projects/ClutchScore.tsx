import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ClutchScore = () => {
  const techStack = [
    "Next.js 13.5.1", "TypeScript", "Tailwind CSS", "Radix UI", "Framer Motion",
    "OpenAI GPT-4", "NextAuth.js", "Supabase", "Lucide React", "React Hook Form"
  ];

  const features = [
    {
      title: "AI Gaming Assistant",
      description: "Specialized PlayStation knowledge with GPT-4 powered intelligent conversations"
    },
    {
      title: "Game Tracking",
      description: "Monitor recently played PlayStation titles with comprehensive game data"
    },
    {
      title: "Trophy Management",
      description: "Track trophy progress and showcase platinum achievements"
    },
    {
      title: "Real-time Chat",
      description: "Smooth, animated chat interface with loading states and gamer-friendly responses"
    },
    {
      title: "Profile System",
      description: "Personalized user profiles with gaming preferences and achievements"
    },
    {
      title: "Social Features",
      description: "Connect with other gamers and share gaming achievements"
    }
  ];

  const gamingFeatures = [
    {
      category: "PlayStation Integration",
      items: ["Recent Games Tracking", "Trophy Progress Monitoring", "Platinum Trophy Showcase", "Game Statistics"]
    },
    {
      category: "AI Assistance",
      items: ["Game Strategy Tips", "Trophy Hunting Guides", "Achievement Walkthroughs", "Gaming News & Updates"]
    },
    {
      category: "Community Features",
      items: ["Gamer Profiles", "Achievement Sharing", "Gaming Forums", "Leaderboards"]
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
              ClutchScore
              <span className="text-primary"> Gaming Assistant</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              AI-powered PlayStation gaming companion with GPT-4 integration. Features real-time game tracking, 
              trophy progress monitoring, personalized gaming insights, and responsive chat interface designed 
              specifically for PlayStation enthusiasts.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80" asChild>
                <a href="https://clutchscore.vercel.app" target="_blank" rel="noopener noreferrer">
                  Try Live Demo
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/quote">Request Gaming Platform</a>
              </Button>
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-16">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1" 
                alt="ClutchScore Gaming Assistant Interface"
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
                    ClutchScore is an innovative web application that serves as your AI-powered gaming companion 
                    specifically designed for PlayStation enthusiasts. The platform combines cutting-edge AI technology 
                    with a comprehensive gaming database to provide personalized insights, tips, and assistance for PlayStation games.
                  </p>
                  <p>
                    Built with Next.js 13 and powered by OpenAI's GPT-4, ClutchScore delivers intelligent, 
                    contextual conversations with a gamer-friendly tone. The platform enhances the PlayStation 
                    gaming experience through comprehensive game tracking, trophy management, and community features.
                  </p>
                </div>
              </section>

              {/* Mission Statement */}
              <section>
                <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Mission Statement</h2>
                  <blockquote className="text-lg italic text-muted-foreground">
                    "AI-Powered Insights for the Ultimate Gamer" - ClutchScore aims to enhance your PlayStation 
                    gaming experience through intelligent assistance and comprehensive game tracking.
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

              {/* Gaming Features */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Gaming Features</h2>
                <div className="space-y-6">
                  {gamingFeatures.map((section, index) => (
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

              {/* AI Integration */}
              <section>
                <h2 className="text-3xl font-bold mb-6">AI Technology Integration</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">OpenAI GPT-4 Integration</h3>
                    <p className="text-muted-foreground">
                      Leverages OpenAI's GPT-4 model for intelligent, contextual conversations tailored specifically 
                      for PlayStation gaming. The AI assistant provides step-by-step guides, bulleted lists, and 
                      structured information with an enthusiastic, gamer-friendly tone.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Specialized Gaming Knowledge</h3>
                    <p className="text-muted-foreground">
                      The AI assistant is trained specifically for PlayStation games, providing accurate information 
                      about game mechanics, trophy requirements, strategies, and gaming tips tailored to individual 
                      user preferences and gaming history.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Real-time Response System</h3>
                    <p className="text-muted-foreground">
                      Features a smooth, animated chat interface with loading states that provides instant responses 
                      to gaming queries, creating an engaging and interactive experience for users seeking gaming assistance.
                    </p>
                  </div>
                </div>
              </section>

              {/* Technical Architecture */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Technical Architecture</h2>
                <div className="space-y-4">
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Frontend Framework</h3>
                    <p className="text-muted-foreground">
                      Built with Next.js 13.5.1 using the App Router for optimal performance and SEO. 
                      TypeScript ensures type safety and enhanced developer experience throughout the application.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">User Authentication</h3>
                    <p className="text-muted-foreground">
                      NextAuth.js provides secure authentication with support for multiple providers, 
                      ensuring user data protection and seamless login experiences across devices.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Data Management</h3>
                    <p className="text-muted-foreground">
                      Supabase integration provides real-time database capabilities for user profiles, 
                      game tracking, and trophy progress, with PostgreSQL ensuring data reliability and scalability.
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
                    <span className="ml-2 text-muted-foreground">AI Gaming Platform</span>
                  </div>
                  <div>
                    <span className="font-medium">Target Users:</span>
                    <span className="ml-2 text-muted-foreground">PlayStation Gamers</span>
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

              {/* Gaming Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Gaming Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">AI Model</span>
                    <Badge variant="outline">GPT-4</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Platform Support</span>
                    <Badge variant="outline">PlayStation</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Trophy Tracking</span>
                    <Badge variant="outline">Full Support</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Real-time Chat</span>
                    <Badge variant="outline">Enabled</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>Need Gaming Platform?</CardTitle>
                  <CardDescription>
                    Get a custom gaming application with AI integration.
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

export default ClutchScore;
