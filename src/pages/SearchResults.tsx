import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, FileText, Wrench, BookOpen, ArrowRight, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Full searchable content index
const searchableContent = [
  // Tools
  { 
    title: "SEO Title Generator", 
    type: "Tool", 
    href: "/tools/seo-title-generator", 
    excerpt: "Generate click-worthy, SEO-optimized titles that rank and convert. Our AI-powered tool analyzes top-ranking content to suggest titles that drive clicks.",
    keywords: ["seo", "title", "generator", "headline", "clickbait"]
  },
  { 
    title: "Meta Description Generator", 
    type: "Tool", 
    href: "/tools/meta-description-generator", 
    excerpt: "Craft compelling meta descriptions that boost your click-through rates. Get AI-generated descriptions optimized for search snippets.",
    keywords: ["meta", "description", "serp", "snippet", "ctr"]
  },
  { 
    title: "Content Outline Generator", 
    type: "Tool", 
    href: "/tools/content-outline-generator", 
    excerpt: "Create comprehensive content outlines based on top-ranking competitors. Structure your articles with H2s, H3s, and suggested keywords.",
    keywords: ["content", "outline", "structure", "headings", "article"]
  },
  { 
    title: "Keyword Grouping Tool", 
    type: "Tool", 
    href: "/tools/keyword-grouping", 
    excerpt: "Automatically cluster keywords by intent and topic for smarter content planning. Upload your CSV and get organized keyword groups.",
    keywords: ["keyword", "grouping", "clustering", "intent", "topic"]
  },
  { 
    title: "Rich Snippet & Schema Generator", 
    type: "Tool", 
    href: "/tools/rich-snippet-generator", 
    excerpt: "Generate JSON-LD schema markup to help your pages appear as rich results in Google. Support for FAQ, HowTo, Article, and more.",
    keywords: ["schema", "json-ld", "rich snippet", "structured data", "faq"]
  },
  { 
    title: "SEO Keyword Seed Generator", 
    type: "Tool", 
    href: "/tools/keyword-seed-generator", 
    excerpt: "Generate keyword seed ideas to kickstart your research in Google Keyword Planner, Ahrefs, or SEMrush. Group by intent.",
    keywords: ["keyword", "seed", "generator", "keyword planner", "research", "ideas"]
  },
  
  // Topics
  { 
    title: "SEO Strategy", 
    type: "Topic", 
    href: "/topics/seo-strategy", 
    excerpt: "Master the art of SEO strategy with data-driven frameworks and actionable insights. Learn how to build sustainable organic growth.",
    keywords: ["seo", "strategy", "framework", "organic", "growth"]
  },
  { 
    title: "Keyword Research", 
    type: "Topic", 
    href: "/topics/keyword-research", 
    excerpt: "Learn how to find and target the right keywords for your content strategy. Discover techniques used by top SEO professionals.",
    keywords: ["keyword", "research", "search volume", "difficulty", "opportunity"]
  },
  { 
    title: "AI & Automation", 
    type: "Topic", 
    href: "/topics/ai-automation", 
    excerpt: "Explore how AI is transforming SEO workflows and content creation. Stay ahead with the latest automation techniques.",
    keywords: ["ai", "automation", "machine learning", "workflow", "efficiency"]
  },
  { 
    title: "Content Marketing", 
    type: "Topic", 
    href: "/topics/content-marketing", 
    excerpt: "Build authority and drive traffic with strategic content marketing. Learn to create content that ranks and resonates.",
    keywords: ["content", "marketing", "authority", "traffic", "engagement"]
  },
  { 
    title: "Google Search", 
    type: "Topic", 
    href: "/topics/google-search", 
    excerpt: "Understand how Google Search works and how to optimize for it. Deep dive into algorithms, updates, and ranking factors.",
    keywords: ["google", "search", "algorithm", "ranking", "serp"]
  },
  
  // Pages
  { 
    title: "About RankTomorrow", 
    type: "Page", 
    href: "/about", 
    excerpt: "Learn about RankTomorrow's mission to help marketers succeed with data-driven SEO. Meet the team and our editorial philosophy.",
    keywords: ["about", "mission", "team", "editorial"]
  },
  { 
    title: "SEO Tools", 
    type: "Page", 
    href: "/tools", 
    excerpt: "Browse our complete collection of free SEO and AI-powered tools. From title generators to schema markup builders.",
    keywords: ["tools", "free", "seo tools", "collection"]
  },
  { 
    title: "Software", 
    type: "Page", 
    href: "/recommended-tools", 
    excerpt: "Our curated stack of trusted third-party SEO and marketing software for professionals.",
    keywords: ["recommended", "software", "ahrefs", "semrush", "tools"]
  },
  { 
    title: "Blog", 
    type: "Page", 
    href: "/blog", 
    excerpt: "Deep dives into SEO, AI, and content growth backed by real data. The RankTomorrow editorial hub.",
    keywords: ["blog", "articles", "editorial", "content", "news"]
  },
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
    case "Tool": return "bg-accent/10 text-accent border-accent/20";
    case "Topic": return "bg-highlight/10 text-highlight border-highlight/20";
    case "Page": return "bg-secondary text-muted-foreground border-border";
    default: return "bg-secondary text-muted-foreground border-border";
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const results = useMemo(() => {
    if (!initialQuery.trim()) return [];
    
    const searchTerms = initialQuery.toLowerCase().split(" ");
    
    return searchableContent.filter((item) => {
      const matchesFilter = !activeFilter || item.type === activeFilter;
      const matchesSearch = searchTerms.some(
        (term) =>
          item.title.toLowerCase().includes(term) ||
          item.excerpt.toLowerCase().includes(term) ||
          item.keywords.some((kw) => kw.includes(term))
      );
      return matchesFilter && matchesSearch;
    });
  }, [initialQuery, activeFilter]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    }
  };

  const resultsByType = useMemo(() => {
    return {
      Tool: results.filter((r) => r.type === "Tool").length,
      Topic: results.filter((r) => r.type === "Topic").length,
      Page: results.filter((r) => r.type === "Page").length,
    };
  }, [results]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Search Header */}
      <section className="pt-28 md:pt-36 pb-8 md:pb-12 border-b border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Search Results
            </h1>
            
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles, tools, topics..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 pr-24 h-14 text-lg bg-card border-border rounded-xl"
              />
              <Button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg"
              >
                Search
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          {initialQuery.trim() ? (
            <>
              {/* Results Summary & Filters */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <p className="text-muted-foreground">
                  Found <span className="font-semibold text-foreground">{results.length}</span> results for "{initialQuery}"
                </p>
                
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <div className="flex gap-2">
                    {[
                      { label: "All", value: null },
                      { label: `Tools (${resultsByType.Tool})`, value: "Tool" },
                      { label: `Topics (${resultsByType.Topic})`, value: "Topic" },
                      { label: `Pages (${resultsByType.Page})`, value: "Page" },
                    ].map((filter) => (
                      <button
                        key={filter.label}
                        onClick={() => setActiveFilter(filter.value)}
                        className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                          activeFilter === filter.value
                            ? "bg-accent text-accent-foreground"
                            : "bg-secondary text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results Grid */}
              {results.length > 0 ? (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {results.map((result, index) => {
                    const Icon = getTypeIcon(result.type);
                    return (
                      <motion.div key={index} variants={itemVariants}>
                        <Link to={result.href}>
                          <Card className="h-full bg-card border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group">
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${getTypeColor(result.type)}`}>
                                  <Icon className="w-5 h-5" />
                                </div>
                                <span className={`text-xs px-2.5 py-1 rounded-full border ${getTypeColor(result.type)}`}>
                                  {result.type}
                                </span>
                              </div>
                              
                              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                                {result.title}
                              </h3>
                              
                              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                {result.excerpt}
                              </p>
                              
                              <div className="flex items-center text-sm text-accent font-medium">
                                View {result.type.toLowerCase()}
                                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <Search className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                  <h2 className="text-xl font-semibold text-foreground mb-2">No results found</h2>
                  <p className="text-muted-foreground mb-6">
                    We couldn't find anything matching "{initialQuery}". Try different keywords.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Link to="/tools">
                      <Button variant="outline">Browse Tools</Button>
                    </Link>
                    <Link to="/topics/seo-strategy">
                      <Button variant="outline">Explore Topics</Button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Search className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">Start your search</h2>
              <p className="text-muted-foreground">
                Enter keywords above to search our articles, tools, and topics.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SearchResults;
