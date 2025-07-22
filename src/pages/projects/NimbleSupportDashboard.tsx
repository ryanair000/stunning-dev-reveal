import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const NimbleSupportDashboard = () => {
  const techStack = [
    "React 18", "TypeScript", "Vite", "Supabase", "shadcn-ui", "Tailwind CSS", 
    "React Query", "Radix UI", "Lucide React", "React Hook Form", "Recharts", 
    "Sonner", "date-fns", "Embla Carousel", "React Resizable Panels"
  ];

  const modules = [
    {
      title: "Intelligent Dashboard",
      description: "Real-time business metrics, activity feeds, and performance analytics with visual KPIs"
    },
    {
      title: "Tiko Support System",
      description: "Comprehensive customer support ticket management with workflow automation and priority handling"
    },
    {
      title: "Customer Management",
      description: "Complete customer profiles with interaction history, preferences, and communication tracking"
    },
    {
      title: "Inventory Tracking",
      description: "Real-time inventory management with automated alerts, stock levels, and product categorization"
    },
    {
      title: "Financial Management",
      description: "Revenue tracking, expense management, profit analysis, and comprehensive financial reporting"
    },
    {
      title: "Analytics Platform",
      description: "Data visualization, trend analysis, and business intelligence with interactive charts and reports"
    }
  ];

  const businessFeatures = [
    {
      category: "Customer Support",
      items: ["Priority-based Ticketing", "Status Workflow Management", "Customer History Integration", "Automated Response Templates"]
    },
    {
      category: "Business Analytics",
      items: ["Real-time KPI Monitoring", "Revenue Trend Analysis", "Customer Satisfaction Metrics", "Performance Dashboards"]
    },
    {
      category: "Operations Management",
      items: ["Multi-platform Account Management", "Inventory Automation", "Financial Tracking", "Workflow Optimization"]
    }
  ];

  const targetIndustries = [
    "Gaming & Entertainment",
    "Subscription Services", 
    "Multi-platform Businesses",
    "Customer Support Centers",
    "Small to Medium Enterprises"
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
              Nimble Support
              <span className="text-primary"> Dashboard</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive business management platform for gaming, entertainment, and service-based businesses. 
              Features customer support ticketing, multi-platform account management, real-time inventory tracking, 
              financial management, and analytics dashboard with Supabase integration.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80" asChild>
                <a href="https://lokimax.madeinryans.world" target="_blank" rel="noopener noreferrer">
                  View Live Demo
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/quote">Request Business Platform</a>
              </Button>
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-16">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                alt="Nimble Support Dashboard Interface"
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
                    Nimble Support Dashboard is a comprehensive business management platform specifically designed 
                    for gaming, entertainment, and service-based businesses. The application provides an integrated 
                    solution for customer support, account management, inventory tracking, and financial oversight, 
                    all accessible through a modern, responsive web interface.
                  </p>
                  <p>
                    Built with React 18 and TypeScript, the platform transforms business operations by consolidating 
                    multiple management functions into a single, powerful platform that eliminates the need for 
                    multiple separate tools while providing real-time insights and automated workflows.
                  </p>
                </div>
              </section>

              {/* Mission Statement */}
              <section>
                <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Primary Purpose</h2>
                  <blockquote className="text-lg text-muted-foreground">
                    Transform business operations by consolidating multiple management functions into a single, 
                    powerful platform that eliminates the need for multiple separate tools while providing 
                    real-time insights and automated workflows.
                  </blockquote>
                </div>
              </section>

              {/* Target Industries */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Target Industries</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {targetIndustries.map((industry) => (
                    <div key={industry} className="p-4 bg-card rounded-lg border border-border/50 text-center">
                      <span className="font-medium">{industry}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Designed for businesses that need integrated management solutions with real-time data and multi-platform support.
                </p>
              </section>

              {/* Core Modules */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Core Modules</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {modules.map((module, index) => (
                    <Card key={index} className="border-border/50">
                      <CardHeader>
                        <CardTitle className="text-lg">{module.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground">
                          {module.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Business Features */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Business Features</h2>
                <div className="space-y-6">
                  {businessFeatures.map((section, index) => (
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
                <div className="space-y-6">
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Frontend Architecture</h3>
                    <p className="text-muted-foreground">
                      Built with React 18 and TypeScript in strict mode for comprehensive type safety. 
                      Vite provides lightning-fast development and optimized production builds, while 
                      React Router v6 handles client-side navigation for seamless user experience.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">State Management Strategy</h3>
                    <p className="text-muted-foreground">
                      React Query (TanStack Query) manages server state with intelligent caching and synchronization. 
                      React Context handles global client state, while local component state uses React hooks 
                      for optimal performance and maintainability.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Backend Integration</h3>
                    <p className="text-muted-foreground">
                      Supabase provides Backend-as-a-Service with PostgreSQL database, real-time capabilities via WebSocket, 
                      secure authentication, and file storage. Row Level Security (RLS) ensures data protection and access control.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">UI/UX Technology</h3>
                    <p className="text-muted-foreground">
                      shadcn/ui components with Radix UI primitives ensure accessibility and consistency. 
                      Tailwind CSS provides utility-first styling with design tokens, while Lucide React 
                      offers 600+ beautiful icons for comprehensive visual communication.
                    </p>
                  </div>
                </div>
              </section>

              {/* Advanced Features */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Advanced Platform Features</h2>
                <div className="space-y-4">
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Real-time Analytics Dashboard</h3>
                    <p className="text-muted-foreground">
                      Live business metrics with KPIs including ticket counts, resolution rates, customer statistics, 
                      inventory values, and financial performance. Features activity feeds and visual indicators 
                      for business health monitoring.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Automated Workflow Management</h3>
                    <p className="text-muted-foreground">
                      Smart ticketing system with priority-based automation, status workflow progression 
                      (Open → In Progress → Resolved → Closed), and customer integration with complete interaction history.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Multi-Platform Integration</h3>
                    <p className="text-muted-foreground">
                      Supports account management across multiple platforms with unified customer profiles, 
                      subscription tracking, and cross-platform data synchronization for comprehensive business oversight.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Financial Management Suite</h3>
                    <p className="text-muted-foreground">
                      Complete financial tracking with revenue analysis, expense management, profit calculations, 
                      and comprehensive reporting. Includes data visualization with Recharts for trend analysis 
                      and business intelligence.
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
                    <span className="ml-2 text-muted-foreground">Business Management Platform</span>
                  </div>
                  <div>
                    <span className="font-medium">Target Users:</span>
                    <span className="ml-2 text-muted-foreground">SMBs, Gaming Companies</span>
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

              {/* Platform Capabilities */}
              <Card>
                <CardHeader>
                  <CardTitle>Platform Capabilities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Core Modules</span>
                    <Badge variant="outline">6 Modules</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Real-time Updates</span>
                    <Badge variant="outline">WebSocket</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Data Visualization</span>
                    <Badge variant="outline">Recharts</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Multi-platform</span>
                    <Badge variant="outline">Supported</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Business Impact */}
              <Card>
                <CardHeader>
                  <CardTitle>Business Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="text-sm font-medium">Efficiency Gain:</span>
                    <p className="text-sm text-muted-foreground mt-1">Consolidates multiple tools into one platform</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Real-time Insights:</span>
                    <p className="text-sm text-muted-foreground mt-1">Live business metrics and analytics</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Automation:</span>
                    <p className="text-sm text-muted-foreground mt-1">Automated workflows and notifications</p>
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>Need Business Platform?</CardTitle>
                  <CardDescription>
                    Get a custom business management solution with integrated features.
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

export default NimbleSupportDashboard;
