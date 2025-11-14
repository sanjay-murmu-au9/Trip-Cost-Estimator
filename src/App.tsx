import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { ContactModalProvider } from "@/contexts/ContactModalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useVisitTracker } from "./hooks/useVisitTracker";
import { AdminDashboard } from "./components/AdminDashboard";
import { CountryProvider } from "./contexts/CountryContext";
import Index from "./pages/Index";
import CostGuide from "./pages/CostGuide";
import CostGuideUS from "./pages/CostGuideUS";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  useVisitTracker();

  return (
    <CountryProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cost-guide" element={<CostGuide />} />
            <Route path="/cost-guide/us-visitor" element={<CostGuideUS />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CountryProvider>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ContactModalProvider>
        <AppContent />
      </ContactModalProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
