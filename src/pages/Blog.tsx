import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import LoadingSpinner from "@/components/LoadingSpinner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import sanityClient, { urlFor } from "@/lib/sanity";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  coverImage: string;
}

const fetchPosts = async (): Promise<BlogPost[]> => {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    "id": slug.current,
    title,
    "excerpt": pt::text(excerpt),
    "date": publishedAt,
    tags,
    "coverImage": mainImage.asset->url
  }`;
  return await sanityClient.fetch(query);
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: blogPosts = [], isLoading, isError } = useQuery<BlogPost[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  if (isLoading) {
    return <LoadingSpinner className="min-h-screen" />;
  }
  if (isError) {
    return <div className="min-h-screen flex items-center justify-center">Failed to load blog posts.</div>;
  }
  const filteredPosts = (blogPosts ?? []).filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (post.tags ?? []).some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
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
            {(filteredPosts ?? []).length > 0 ? (
              (filteredPosts ?? []).map((post) => (
                <article key={post.id} className="grid md:grid-cols-[2fr_3fr] gap-8 items-start">
                  <Link to={`/blog/${post.id}`} className="block overflow-hidden rounded-lg">
                    <img 
                      src={post.coverImage ? urlFor(post.coverImage).width(600).height(400).url() : "https://via.placeholder.com/600x400?text=No+Image"} 
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
                    </div>
                    
                    <Link to={`/blog/${post.id}`}>
                      <h2 className="text-2xl font-semibold text-foreground mb-3 hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-muted-foreground mb-5">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-5">
                      {(post.tags ?? []).map(tag => (
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