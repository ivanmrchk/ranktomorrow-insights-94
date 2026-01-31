import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import KeywordResearch from "./pages/KeywordResearch";
import SeoStrategy from "./pages/SeoStrategy";
import AiAutomation from "./pages/AiAutomation";
import ContentMarketing from "./pages/ContentMarketing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/topics/keyword-research" element={<KeywordResearch />} />
          <Route path="/topics/seo-strategy" element={<SeoStrategy />} />
          <Route path="/topics/ai-automation" element={<AiAutomation />} />
          <Route path="/topics/content-marketing" element={<ContentMarketing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
