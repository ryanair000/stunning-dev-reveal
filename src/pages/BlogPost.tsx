import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
  coverImage: string;
  content?: string;
}

// This would normally come from an API or CMS
const blogPosts: Record<string, BlogPost> = {
  "building-modern-web-apps": {
    id: "building-modern-web-apps",
    title: "Building Modern Web Applications with React and TypeScript",
    excerpt: "Learn how to create scalable and maintainable web applications using React and TypeScript with best practices and advanced patterns.",
    date: "June 1, 2024",
    tags: ["React", "TypeScript", "Web Development"],
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    content: `
      <p>React has revolutionized how we build user interfaces on the web. Combined with TypeScript, it creates a powerful duo that enables developers to build scalable, maintainable, and robust web applications. This article explores advanced patterns and best practices when working with React and TypeScript.</p>
      
      <h2>Why TypeScript with React?</h2>
      <p>TypeScript adds static typing to JavaScript, providing better tooling, early error detection, and improved developer experience. When used with React, TypeScript helps catch common errors related to props, state, and component structure before they cause issues at runtime.</p>
      
      <h2>Setting Up Your Project</h2>
      <p>The recommended way to start a new React TypeScript project is using a tool like Vite or Create React App with the TypeScript template. These tools provide a solid foundation with proper TypeScript configurations.</p>
      
      <pre><code>
      # Using Vite
      npm create vite@latest my-app -- --template react-ts
      
      # Or using Create React App
      npx create-react-app my-app --template typescript
      </code></pre>
      
      <h2>Component Patterns</h2>
      <p>When building React components with TypeScript, there are several patterns that help maintain clean and type-safe code:</p>
      
      <h3>Functional Components with Proper Typing</h3>
      <pre><code>
      // Define the props interface
      interface ButtonProps {
        text: string;
        onClick: () => void;
        variant?: 'primary' | 'secondary' | 'outline';
      }
      
      // Use the interface with the FC type
      const Button: React.FC<ButtonProps> = ({ 
        text, 
        onClick, 
        variant = 'primary' 
      }) => {
        return (
          <button 
            className={\`button \${variant}\`}
            onClick={onClick}
          >
            {text}
          </button>
        );
      };
      </code></pre>
      
      <h2>State Management</h2>
      <p>For state management in larger applications, libraries like Redux or Zustand with TypeScript provide excellent type safety across your application's state.</p>
      
      <h2>Custom Hooks</h2>
      <p>Custom hooks allow you to extract and reuse stateful logic. TypeScript makes them even more powerful by ensuring proper typing.</p>
      
      <h2>Conclusion</h2>
      <p>Building modern web applications with React and TypeScript offers significant advantages in terms of maintainability, scalability, and developer experience. By following best practices and leveraging TypeScript's type system, you can create robust applications that are easier to maintain and extend over time.</p>
    `
  },
  "advanced-css-techniques": {
    id: "advanced-css-techniques",
    title: "Advanced CSS Techniques for Modern Designs",
    excerpt: "Explore modern CSS features like Grid, Flexbox, Custom Properties, and CSS animations to create stunning web designs.",
    date: "May 15, 2024",
    tags: ["CSS", "Web Design", "Frontend"],
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
    content: `
      <p>CSS has evolved significantly in recent years, offering powerful features that enable developers to create complex layouts and stunning visual effects with pure CSS. This article explores some of the most useful modern CSS techniques for creating beautiful and responsive web designs.</p>
      
      <h2>CSS Grid Layout</h2>
      <p>CSS Grid Layout is a two-dimensional layout system designed specifically for user interface design. It allows for complex layouts that were previously difficult or impossible to achieve with CSS.</p>
      
      <pre><code>
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 20px;
      }
      </code></pre>
      
      <p>This creates a responsive grid where each column is at least 250px wide, and the grid automatically adjusts the number of columns based on the available space.</p>
      
      <h2>Flexbox</h2>
      <p>Flexbox provides a more efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic.</p>
      
      <h2>CSS Custom Properties (Variables)</h2>
      <p>CSS Custom Properties allow you to define reusable values that can be used throughout your stylesheet. They're particularly useful for theme implementation and maintaining consistent design systems.</p>
      
      <pre><code>
      :root {
        --primary-color: #3490dc;
        --secondary-color: #ffed4a;
        --font-family: 'Inter', sans-serif;
      }
      
      .button {
        background-color: var(--primary-color);
        font-family: var(--font-family);
      }
      </code></pre>
      
      <h2>Advanced CSS Animations</h2>
      <p>Modern CSS offers powerful animation capabilities through transitions, transforms, and keyframe animations. These can be used to create engaging user experiences without relying on JavaScript.</p>
      
      <h2>Conclusion</h2>
      <p>Modern CSS provides powerful tools for creating sophisticated web designs. By leveraging features like Grid, Flexbox, Custom Properties, and CSS animations, developers can create more maintainable and visually engaging websites with less code and better performance.</p>
    `
  },
  "nodejs-microservices": {
    id: "nodejs-microservices",
    title: "Building Microservices with Node.js",
    excerpt: "A comprehensive guide to architecting, developing, and deploying microservices using Node.js and modern backend technologies.",
    date: "April 28, 2024",
    tags: ["Node.js", "Microservices", "Backend"],
    readTime: "10 min read",
    coverImage: "https://images.unsplash.com/photo-1555099962-4199c345e5dd",
    content: `
      <p>Microservices architecture has gained significant popularity due to its benefits in scalability, flexibility, and maintenance. Node.js, with its lightweight and efficient runtime, is an excellent choice for building microservices. This article provides a comprehensive guide to architecting, developing, and deploying microservices using Node.js.</p>
      
      <h2>Understanding Microservices</h2>
      <p>Microservices architecture is an approach to building applications as a collection of small, independently deployable services. Each service focuses on a specific business capability and can be developed, deployed, and scaled independently.</p>
      
      <h2>Why Node.js for Microservices?</h2>
      <p>Node.js offers several advantages for microservices:</p>
      <ul>
        <li>Lightweight and efficient</li>
        <li>Non-blocking I/O model ideal for handling many connections</li>
        <li>Rich ecosystem with npm</li>
        <li>Same language (JavaScript/TypeScript) across the stack</li>
        <li>Great for building APIs and handling HTTP requests</li>
      </ul>
      
      <h2>Building a Basic Microservice in Node.js</h2>
      <p>Let's explore how to create a simple microservice using Express.js:</p>
      
      <pre><code>
      // Basic structure of a Node.js microservice with Express
      const express = require('express');
      const app = express();
      
      app.use(express.json());
      
      // Health check endpoint
      app.get('/health', (req, res) => {
        res.status(200).send({ status: 'UP' });
      });
      
      // Service-specific endpoints
      app.get('/api/products', async (req, res) => {
        try {
          const products = await productService.getAllProducts();
          res.status(200).send(products);
        } catch (error) {
          res.status(500).send({ error: error.message });
        }
      });
      
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => {
        console.log(\`Service running on port \${PORT}\`);
      });
      </code></pre>
      
      <h2>Service Communication</h2>
      <p>Microservices need to communicate with each other. This can be achieved through:</p>
      <ul>
        <li>REST APIs</li>
        <li>Message queues (RabbitMQ, Kafka)</li>
        <li>gRPC</li>
        <li>GraphQL</li>
      </ul>
      
      <h2>Deployment and Orchestration</h2>
      <p>Docker and Kubernetes are popular choices for containerizing and orchestrating microservices. Docker allows you to package your service with all its dependencies, and Kubernetes helps manage and scale these containers.</p>
      
      <h2>Conclusion</h2>
      <p>Building microservices with Node.js allows for scalable, maintainable, and flexible backend systems. By leveraging Node.js's efficiency and the right supporting technologies, teams can create robust microservice architectures that can evolve with changing business needs.</p>
    `
  }
};

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = postId ? blogPosts[postId] : null;
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Navigation />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ScrollProgress />
      <Navigation />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-8">
            <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">{post.title}</h1>
            
            <div className="flex items-center space-x-2 mb-8">
              <span className="text-sm text-muted-foreground">{post.date}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{post.readTime}</span>
            </div>
          </div>
          
          <div className="mb-10 rounded-lg overflow-hidden">
            <img 
              src={`${post.coverImage}?auto=format&fit=crop&w=1200&h=600&q=80`} 
              alt={post.title}
              className="w-full h-auto object-cover"
              width={1200}
              height={600}
            />
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map(tag => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div 
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
          
          <div className="mt-16 pt-8 border-t border-border">
            <Link to="/blog" className="inline-flex items-center">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost; 