export interface Project {
  title: string;
  description: string;
  year: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    year: "2024",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    github: "https://github.com/ryanair000/ecommerce-platform",
    live: "https://ryan-ecommerce-demo.netlify.app"
  },
  {
    title: "Task Management App",
    description: "Collaborative tool with real-time updates using Socket.io. Includes drag-and-drop functionality and team collaboration features.",
    year: "2023",
    tech: ["React", "Socket.io", "MongoDB", "Express"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
    github: "https://github.com/ryanair000/task-manager",
    live: "https://ryan-taskmanager.netlify.app"
  },
  {
    title: "Weather Dashboard",
    description: "Location-based forecasts and analytics with beautiful data visualizations and responsive design for all devices.",
    year: "2023",
    tech: ["Next.js", "TypeScript", "Chart.js", "API"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    github: "https://github.com/ryanair000/weather-dashboard",
    live: "https://ryan-weather-app.netlify.app"
  }
]; 