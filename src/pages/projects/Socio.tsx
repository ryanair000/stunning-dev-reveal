import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Socio = () => {
  const techStack = [
    "Next.js 14", "OpenAI GPT-4o", "Supabase", "Tailwind CSS", "Framer Motion",
    "TypeScript", "React Hook Form", "Zod", "Heroicons", "M-Pesa Integration", "Vercel"
  ];

  const platforms = [
    "Instagram", "Twitter/X", "Facebook", "LinkedIn", "TikTok", "YouTube", "Pinterest"
  ];

  const features = [
    {
      title: "AI-Powered Generation",
      description: "Utilizes OpenAI GPT-4o for high-quality, contextual caption creation"
    },
    {
      title: "Platform Optimization",
      description: "Tailored content for different social media platforms with character limits"
    },
    {
      title: "Image Analysis",
      description: "AI-powered image caption generation using advanced vision models"
    },
    {
      title: "Tone Customization",
      description: "Multiple tone options: Professional, Casual, Energetic, Friendly, Humorous"
    },
    {
      title: "Freemium Model",
      description: "5 free text + 5 image generations for new users with upgrade options"
    },
    {
      title: "Real-time Tracking",
      description: "Live credit monitoring and usage statistics with monthly reset cycles"
    }
  ];

  const pricingPlans = [
    {
      name: "Free Trial",
      credits: "5 text + 5 image",
      features: ["Platform optimization", "Basic tones", "Character limit tracking"]
    },
    {
      name: "Creator",
      credits: "100 generations/month",
      features: ["All platforms", "Premium tones", "Image analysis", "Priority support"]
    },
    {
      name: "Business",
      credits: "500 generations/month",
      features: ["Bulk generation", "Team collaboration", "Analytics", "Custom tones"]
    },
    {
      name: "Enterprise",
      credits: "Unlimited",
      features: ["White-label solution", "API access", "Custom integrations", "Dedicated support"]
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
              Socio
              <span className="text-primary"> AI Caption Generator</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              An intelligent social media caption generation platform powered by OpenAI GPT-4o. 
              Create engaging, platform-specific content with image analysis, tone customization, 
              and freemium model for creators and businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80" asChild>
                <a href="https://socio.madeinryans.world" target="_blank" rel="noopener noreferrer">
                  Try Live Demo
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/quote">Request Similar AI Tool</a>
              </Button>
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-16">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113" 
                alt="Socio AI Caption Generator Interface"
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
                    Socio is a comprehensive AI-powered platform designed to revolutionize social media content creation. 
                    Built with Next.js 14 and powered by OpenAI's latest GPT-4o model, it helps content creators, 
                    marketers, and businesses generate engaging captions optimized for different social media platforms.
                  </p>
                  <p>
                    The platform combines advanced AI capabilities with user-friendly design, offering both text and 
                    image-based caption generation. With platform-specific optimization and flexible pricing tiers, 
                    Socio caters to everyone from individual creators to enterprise teams.
                  </p>
                </div>
              </section>

              {/* Supported Platforms */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Supported Platforms</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {platforms.map((platform) => (
                    <div key={platform} className="p-4 bg-card rounded-lg border border-border/50 text-center">
                      <span className="font-medium">{platform}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground mt-4">
                  Each platform has specific character limits and optimization strategies built into the AI generation process.
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

              {/* AI Integration */}
              <section>
                <h2 className="text-3xl font-bold mb-6">AI Technology</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">OpenAI GPT-4o Integration</h3>
                    <p className="text-muted-foreground">
                      Leverages the latest GPT-4o model for superior text generation capabilities, ensuring 
                      contextual relevance and engaging content that resonates with target audiences.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Vision Model Integration</h3>
                    <p className="text-muted-foreground">
                      Advanced image analysis capabilities allow users to upload images and receive 
                      AI-generated captions that accurately describe and enhance the visual content.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Cost Optimization</h3>
                    <p className="text-muted-foreground">
                      Optimized API usage and smart caching ensure high-quality output while maintaining 
                      reasonable costs for both the platform and end users.
                    </p>
                  </div>
                </div>
              </section>

              {/* Pricing Strategy */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Pricing Plans</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {pricingPlans.map((plan, index) => (
                    <Card key={index} className={`border-border/50 ${index === 1 ? 'border-primary/50 bg-primary/5' : ''}`}>
                      <CardHeader>
                        <CardTitle className="text-lg">{plan.name}</CardTitle>
                        <CardDescription className="font-semibold text-primary">
                          {plan.credits}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
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
                      Built with Next.js 14 using the App Router for optimal performance, SEO, and user experience. 
                      Includes server-side rendering and static generation capabilities.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Database & Authentication</h3>
                    <p className="text-muted-foreground">
                      Supabase provides PostgreSQL database with real-time capabilities, user authentication 
                      (email/password and OAuth), and secure session management.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Payment Integration</h3>
                    <p className="text-muted-foreground">
                      M-Pesa integration for local payments in Kenya, with plans for expanding to other 
                      payment providers based on user demand and geographic expansion.
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
                    <span className="ml-2 text-muted-foreground">AI SaaS Platform</span>
                  </div>
                  <div>
                    <span className="font-medium">Target Users:</span>
                    <span className="ml-2 text-muted-foreground">Content Creators, Marketers</span>
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

              {/* Key Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Free Trial Generations</span>
                    <Badge variant="outline">10 Total</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Supported Platforms</span>
                    <Badge variant="outline">7 Platforms</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Tone Options</span>
                    <Badge variant="outline">5+ Tones</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Image Analysis</span>
                    <Badge variant="outline">AI Vision</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>Need AI-Powered Solution?</CardTitle>
                  <CardDescription>
                    Get a custom AI application tailored for your business needs.
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

export default Socio;
