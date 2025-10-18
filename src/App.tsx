import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useVisitTracker } from "./hooks/useVisitTracker";
import { AdminDashboard } from "./components/AdminDashboard";
import { CountryProvider } from "./contexts/CountryContext";
import Index from "./pages/Index";
import CostGuide from "./pages/CostGuide";
import CostGuideUS from "./pages/CostGuideUS";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  useVisitTracker();

  return (
    <CountryProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cost-guide" element={<CostGuide />} />
            <Route path="/cost-guide/us-visitor" element={<CostGuideUS />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </CountryProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppContent />
  </QueryClientProvider>
);

export default App;
