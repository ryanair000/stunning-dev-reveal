
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import QuoteForm from "./pages/QuoteForm";
import HireMePage from "./pages/HireMePage";
import ProjectsPage from "./pages/ProjectsPage";
import QybrrLabsAfrica from "./pages/projects/QybrrLabsAfrica";
import Socio from "./pages/projects/Socio";
import ClutchScore from "./pages/projects/ClutchScore";
import TheBioChef from "./pages/projects/TheBioChef";
import ChatPal from "./pages/projects/ChatPal";
import SimpleCalc from "./pages/projects/SimpleCalc";
import NimbleSupportDashboard from "./pages/projects/NimbleSupportDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/hire-me" element={<HireMePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/qybrrlabs-africa" element={<QybrrLabsAfrica />} />
          <Route path="/projects/socio" element={<Socio />} />
          <Route path="/projects/clutchscore" element={<ClutchScore />} />
          <Route path="/projects/the-bio-chef" element={<TheBioChef />} />
          <Route path="/projects/chatpal" element={<ChatPal />} />
          <Route path="/projects/simplecalc" element={<SimpleCalc />} />
          <Route path="/projects/nimble-support-dashboard" element={<NimbleSupportDashboard />} />
          <Route path="/quote" element={<QuoteForm />} />
          <Route path="/quote-form" element={<QuoteForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
