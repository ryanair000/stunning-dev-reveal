import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
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
}

const blogPosts: BlogPost[] = [
  {
    id: "building-modern-web-apps",
    title: "Building Modern Web Applications with React and TypeScript",
    excerpt: "Learn how to create scalable and maintainable web applications using React and TypeScript with best practices and advanced patterns.",
    date: "June 1, 2024",
    tags: ["React", "TypeScript", "Web Development"],
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
  },
  {
    id: "advanced-css-techniques",
    title: "Advanced CSS Techniques for Modern Designs",
    excerpt: "Explore modern CSS features like Grid, Flexbox, Custom Properties, and CSS animations to create stunning web designs.",
    date: "May 15, 2024",
    tags: ["CSS", "Web Design", "Frontend"],
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2"
  },
  {
    id: "nodejs-microservices",
    title: "Building Microservices with Node.js",
    excerpt: "A comprehensive guide to architecting, developing, and deploying microservices using Node.js and modern backend technologies.",
    date: "April 28, 2024",
    tags: ["Node.js", "Microservices", "Backend"],
    readTime: "10 min read",
    coverImage: "https://images.unsplash.com/photo-1555099962-4199c345e5dd"
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ScrollProgress />
      <Navigation />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts, ideas, and insights about web development, design, and technology
            </p>
          </div>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto mb-16">
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          </div>
          
          {/* Blog posts */}
          <div className="grid gap-12">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <article key={post.id} className="grid md:grid-cols-[2fr_3fr] gap-8 items-start">
                  <Link to={`/blog/${post.id}`} className="block overflow-hidden rounded-lg">
                    <img 
                      src={`${post.coverImage}?auto=format&fit=crop&w=600&h=400&q=80`} 
                      alt={post.title}
                      className="w-full h-full object-cover aspect-video hover:scale-105 transition-transform duration-300"
                      width={600}
                      height={400}
                      loading="lazy"
                    />
                  </Link>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    
                    <Link to={`/blog/${post.id}`}>
                      <h2 className="text-2xl font-semibold text-foreground mb-3 hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-muted-foreground mb-5">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-5">
                      {post.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles found matching your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog; 