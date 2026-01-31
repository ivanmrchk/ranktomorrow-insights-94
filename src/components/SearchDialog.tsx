import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, FileText, Wrench, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

// Searchable content index
const searchableContent = [
  // Tools
  { title: "SEO Title Generator", type: "Tool", href: "/tools/seo-title-generator", excerpt: "Generate click-worthy, SEO-optimized titles that rank and convert." },
  { title: "Meta Description Generator", type: "Tool", href: "/tools/meta-description-generator", excerpt: "Craft compelling meta descriptions that boost your click-through rates." },
  { title: "Content Outline Generator", type: "Tool", href: "/tools/content-outline-generator", excerpt: "Create comprehensive content outlines based on top-ranking competitors." },
  { title: "Keyword Grouping Tool", type: "Tool", href: "/tools/keyword-grouping", excerpt: "Automatically cluster keywords by intent and topic for smarter content planning." },
  { title: "Rich Snippet & Schema Generator", type: "Tool", href: "/tools/rich-snippet-generator", excerpt: "Generate JSON-LD schema to help your pages appear as rich results in Google." },
  { title: "SEO Keyword Seed Generator", type: "Tool", href: "/tools/keyword-seed-generator", excerpt: "Generate keyword seed ideas to kickstart your research in Google Keyword Planner, Ahrefs, or SEMrush." },
  
  // Topics
  { title: "SEO Strategy", type: "Topic", href: "/topics/seo-strategy", excerpt: "Master the art of SEO strategy with data-driven frameworks and actionable insights." },
  { title: "Keyword Research", type: "Topic", href: "/topics/keyword-research", excerpt: "Learn how to find and target the right keywords for your content strategy." },
  { title: "AI & Automation", type: "Topic", href: "/topics/ai-automation", excerpt: "Explore how AI is transforming SEO workflows and content creation." },
  { title: "Content Marketing", type: "Topic", href: "/topics/content-marketing", excerpt: "Build authority and drive traffic with strategic content marketing." },
  { title: "Google Search", type: "Topic", href: "/topics/google-search", excerpt: "Understand how Google Search works and how to optimize for it." },
  
  // Pages
  { title: "About RankTomorrow", type: "Page", href: "/about", excerpt: "Learn about RankTomorrow's mission to help marketers succeed with data-driven SEO." },
  { title: "All Tools", type: "Page", href: "/tools", excerpt: "Browse our collection of free SEO and AI-powered tools." },
  { title: "Recommended Tools", type: "Page", href: "/recommended-tools", excerpt: "Our curated stack of trusted SEO and marketing tools for professionals." },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Tool": return Wrench;
    case "Topic": return BookOpen;
    case "Page": return FileText;
    default: return FileText;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "Tool": return "bg-accent/10 text-accent";
    case "Topic": return "bg-highlight/10 text-highlight";
    case "Page": return "bg-secondary text-muted-foreground";
    default: return "bg-secondary text-muted-foreground";
  }
};

export const SearchDialog = ({ isOpen, onClose }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredResults = query.trim()
    ? searchableContent.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onClose();
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleResultClick = (href: string) => {
    onClose();
    navigate(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[10%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-[101] px-4"
          >
            <div className="bg-card border border-border rounded-2xl shadow-2xl shadow-accent/10 overflow-hidden">
              {/* Search Header */}
              <form onSubmit={handleSearch} className="p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <Input
                    type="text"
                    placeholder="Search articles, tools, topics..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 border-0 bg-transparent focus-visible:ring-0 text-lg placeholder:text-muted-foreground/60"
                    autoFocus
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="flex-shrink-0 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </form>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {query.trim() ? (
                  filteredResults.length > 0 ? (
                    <div className="p-2">
                      {filteredResults.map((result, index) => {
                        const Icon = getTypeIcon(result.type);
                        return (
                          <button
                            key={index}
                            onClick={() => handleResultClick(result.href)}
                            className="w-full flex items-start gap-4 p-3 rounded-xl hover:bg-secondary/80 transition-colors text-left group"
                          >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${getTypeColor(result.type)}`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                                  {result.title}
                                </span>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(result.type)}`}>
                                  {result.type}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground line-clamp-1">
                                {result.excerpt}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                      
                      {/* View all results */}
                      <div className="p-3 pt-4 border-t border-border mt-2">
                        <Button
                          onClick={handleSearch}
                          className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                        >
                          <Search className="w-4 h-4 mr-2" />
                          View all results for "{query}"
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 text-center">
                      <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
                      <p className="text-muted-foreground">No results found for "{query}"</p>
                      <p className="text-sm text-muted-foreground/60 mt-1">
                        Try different keywords or browse our tools and topics
                      </p>
                    </div>
                  )
                ) : (
                  <div className="p-4">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3 px-2">
                      Popular searches
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["SEO Title", "Keyword Research", "Schema Markup", "Content Outline", "AI Tools"].map((term) => (
                        <button
                          key={term}
                          onClick={() => setQuery(term)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary hover:bg-secondary/80 rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Star className="w-3 h-3" />
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer hint */}
              <div className="px-4 py-3 bg-secondary/30 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  Press <kbd className="px-1.5 py-0.5 bg-secondary rounded text-foreground font-mono">Enter</kbd> to search or <kbd className="px-1.5 py-0.5 bg-secondary rounded text-foreground font-mono">Esc</kbd> to close
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
