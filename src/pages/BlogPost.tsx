import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/LoadingSpinner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { useQuery } from "@tanstack/react-query";
import sanityClient, { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  coverImage: string;
  body: any[];
}

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const fetchPost = async (slug: string) => {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      "id": slug.current,
      title,
      "date": publishedAt,
      tags,
      "coverImage": mainImage.asset->url,
      body
    }`;
    return await sanityClient.fetch(query, { slug });
  };
  const { data: post, isLoading } = useQuery<BlogPost>({
    queryKey: ["post", postId],
    queryFn: () => fetchPost(postId!),
    enabled: !!postId,
  });
  if (isLoading) {
    return <LoadingSpinner className="min-h-screen" />;
  }
  
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
            </div>
          </div>
          
          <div className="mb-10 rounded-lg overflow-hidden">
            <img 
              src={post.coverImage ? urlFor(post.coverImage).width(1200).height(600).url() : "https://via.placeholder.com/1200x600?text=No+Image"} 
              alt={post.title}
              className="w-full h-auto object-cover"
              width={1200}
              height={600}
            />
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {(post.tags ?? []).map(tag => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground">
            <PortableText value={post.body} />
          </div>
          
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