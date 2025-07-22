export interface Project {
  title: string;
  description: string;
  year: string;
  tech: string[];
  image: string;
  demoUrl?: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: "QybrrLabs Africa",
    description: "Comprehensive digital solutions platform for African businesses with services ranging from web development to AI chatbots. Features real-time Supabase integration, admin dashboard, and localized payment systems.",
    year: "2024",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Vite"],
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
    demoUrl: "https://qybrrlabs.africa",
    slug: "qybrrlabs-africa"
  },
  {
    title: "Socio - AI Caption Generator",
    description: "AI-powered social media caption generator with platform-specific optimization. Features GPT-4o integration, freemium model, image analysis, and supports Instagram, Twitter, LinkedIn, TikTok.",
    year: "2024",
    tech: ["Next.js", "OpenAI GPT-4o", "Supabase", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
    demoUrl: "https://socio.madeinryans.world",
    slug: "socio"
  },
  {
    title: "ClutchScore Gaming Assistant",
    description: "AI-powered PlayStation gaming companion with GPT-4 integration. Features real-time game tracking, trophy progress monitoring, personalized gaming insights, and responsive chat interface.",
    year: "2024",
    tech: ["Next.js", "OpenAI GPT-4", "NextAuth.js", "Supabase", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1",
    demoUrl: "https://clutchscore.vercel.app",
    slug: "clutchscore"
  },
  {
    title: "The Bio Chef",
    description: "AI-powered social media bio generator with platform-specific optimization for Instagram, Twitter, LinkedIn, TikTok. Features customizable tones, character limit tracking, and glass-morphism design.",
    year: "2024",
    tech: ["React", "TypeScript", "OpenAI GPT-3.5", "Tailwind CSS", "Vite"],
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
    demoUrl: "https://thebiochef.netlify.app",
    slug: "the-bio-chef"
  },
  {
    title: "ChatPal",
    description: "Modern chat application built with React and TypeScript. Features real-time messaging, responsive design with shadcn-ui components, and seamless user experience with Tailwind CSS styling.",
    year: "2024",
    tech: ["React", "TypeScript", "Vite", "shadcn-ui", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624",
    demoUrl: "https://lovable.dev/projects/441b2190-9ad1-4606-bec6-79748c25b1f8",
    slug: "chatpal"
  },
  {
    title: "SimpleCalc",
    description: "Modern calculator application built with React and TypeScript. Features responsive design, intuitive user interface with shadcn-ui components, and seamless mathematical operations with clean Tailwind CSS styling.",
    year: "2024",
    tech: ["React", "TypeScript", "Vite", "shadcn-ui", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
    demoUrl: "https://lovable.dev/projects/fd5c4574-d4e7-4931-be2f-36caecc6b9a7",
    slug: "simplecalc"
  },
  {
    title: "Nimble Support Dashboard",
    description: "Comprehensive business management platform for gaming and entertainment businesses. Features customer support ticketing, multi-platform account management, real-time inventory tracking, financial management, and analytics dashboard with Supabase integration.",
    year: "2024",
    tech: ["React", "TypeScript", "Supabase", "shadcn-ui", "Tailwind CSS", "React Query", "Vite"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    demoUrl: "https://lokimax.madeinryans.world",
    slug: "nimble-support-dashboard"
  }
]; 