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
import GoogleSearch from "./pages/GoogleSearch";
import Tools from "./pages/Tools";
import SeoTitleGenerator from "./pages/SeoTitleGenerator";
import MetaDescriptionGenerator from "./pages/MetaDescriptionGenerator";
import ContentOutlineGenerator from "./pages/ContentOutlineGenerator";
import KeywordGroupingTool from "./pages/KeywordGroupingTool";
import RichSnippetGenerator from "./pages/RichSnippetGenerator";
import KeywordSeedGenerator from "./pages/KeywordSeedGenerator";
import SearchResults from "./pages/SearchResults";
import RecommendedTools from "./pages/RecommendedTools";
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
          <Route path="/topics/google-search" element={<GoogleSearch />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/seo-title-generator" element={<SeoTitleGenerator />} />
          <Route path="/tools/meta-description-generator" element={<MetaDescriptionGenerator />} />
          <Route path="/tools/content-outline-generator" element={<ContentOutlineGenerator />} />
          <Route path="/tools/keyword-grouping" element={<KeywordGroupingTool />} />
          <Route path="/tools/rich-snippet-generator" element={<RichSnippetGenerator />} />
          <Route path="/tools/keyword-seed-generator" element={<KeywordSeedGenerator />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/recommended-tools" element={<RecommendedTools />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
