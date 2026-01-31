import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  ChevronLeft,
  ChevronRight,
  Search,
  Sparkles,
  TrendingUp
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Category definitions
const categories = [
  { id: "all", label: "All", color: "bg-secondary text-foreground" },
  { id: "seo", label: "SEO Strategy", color: "bg-accent/10 text-accent" },
  { id: "ai", label: "AI & Automation", color: "bg-highlight/10 text-highlight" },
  { id: "content", label: "Content Marketing", color: "bg-emerald-500/10 text-emerald-600" },
  { id: "keywords", label: "Keyword Research", color: "bg-purple-500/10 text-purple-600" },
  { id: "google", label: "Google Search", color: "bg-orange-500/10 text-orange-600" },
];

// Featured articles
const featuredArticles = [
  {
    category: "SEO Strategy",
    categoryId: "seo",
    categoryColor: "bg-accent/10 text-accent",
    title: "The Complete SEO Strategy Framework for 2025",
    excerpt: "A comprehensive guide to building an SEO strategy that drives sustainable organic growth. From keyword research to content production.",
    readTime: "18 min read",
    slug: "seo-strategy-framework-2025",
    featured: true,
  },
  {
    category: "AI & Automation",
    categoryId: "ai",
    categoryColor: "bg-highlight/10 text-highlight",
    title: "How to Use AI for SEO Without Losing Quality",
    excerpt: "A practical framework for integrating AI into your content workflow while maintaining editorial standards.",
    readTime: "12 min read",
    slug: "ai-seo-quality-framework",
    featured: true,
  },
  {
    category: "Keyword Research",
    categoryId: "keywords",
    categoryColor: "bg-purple-500/10 text-purple-600",
    title: "Keyword Research in 2025: What's Changed",
    excerpt: "Search intent, AI overviews, and zero-click results are changing how we think about keywords.",
    readTime: "14 min read",
    slug: "keyword-research-2025-changes",
    featured: true,
  },
];

// All articles
const allArticles = [
  ...featuredArticles,
  {
    category: "Content Marketing",
    categoryId: "content",
    categoryColor: "bg-emerald-500/10 text-emerald-600",
    title: "Content Velocity: How Much Content Should You Publish?",
    excerpt: "Finding the right publishing cadence for your niche, team size, and growth goals.",
    readTime: "10 min read",
    slug: "content-velocity-publishing-cadence",
  },
  {
    category: "Google Search",
    categoryId: "google",
    categoryColor: "bg-orange-500/10 text-orange-600",
    title: "Understanding Google's March 2025 Core Update",
    excerpt: "Breaking down what changed, who was affected, and how to recover if you lost rankings.",
    readTime: "15 min read",
    slug: "google-march-2025-core-update",
  },
  {
    category: "AI & Automation",
    categoryId: "ai",
    categoryColor: "bg-highlight/10 text-highlight",
    title: "Building a Keyword-to-Content Pipeline with AI",
    excerpt: "Automate the journey from keyword research to published content with smart workflows.",
    readTime: "11 min read",
    slug: "keyword-content-pipeline-ai",
  },
  {
    category: "SEO Strategy",
    categoryId: "seo",
    categoryColor: "bg-accent/10 text-accent",
    title: "Topical Authority: Building a Content Hub That Ranks",
    excerpt: "How to structure your site around topic clusters to dominate your niche in search.",
    readTime: "13 min read",
    slug: "topical-authority-content-hub",
  },
  {
    category: "Keyword Research",
    categoryId: "keywords",
    categoryColor: "bg-purple-500/10 text-purple-600",
    title: "Long-Tail Keywords: The Untapped Traffic Opportunity",
    excerpt: "Why targeting long-tail keywords might be the fastest path to organic growth.",
    readTime: "9 min read",
    slug: "long-tail-keywords-opportunity",
  },
  {
    category: "Content Marketing",
    categoryId: "content",
    categoryColor: "bg-emerald-500/10 text-emerald-600",
    title: "Writing for Humans and Search Engines",
    excerpt: "The art of creating content that satisfies both readers and ranking algorithms.",
    readTime: "8 min read",
    slug: "writing-humans-search-engines",
  },
  {
    category: "Google Search",
    categoryId: "google",
    categoryColor: "bg-orange-500/10 text-orange-600",
    title: "How Google Evaluates Content Quality (E-E-A-T)",
    excerpt: "A deep dive into Experience, Expertise, Authoritativeness, and Trustworthiness.",
    readTime: "16 min read",
    slug: "google-eeat-content-quality",
  },
  {
    category: "AI & Automation",
    categoryId: "ai",
    categoryColor: "bg-highlight/10 text-highlight",
    title: "The Best AI Tools for SEO in 2025",
    excerpt: "A curated list of AI tools that actually help with rankings, not just hype.",
    readTime: "10 min read",
    slug: "best-ai-tools-seo-2025",
  },
  {
    category: "SEO Strategy",
    categoryId: "seo",
    categoryColor: "bg-accent/10 text-accent",
    title: "Technical SEO Checklist for New Sites",
    excerpt: "Everything you need to get right before launching your site for search success.",
    readTime: "12 min read",
    slug: "technical-seo-checklist-new-sites",
  },
  {
    category: "Keyword Research",
    categoryId: "keywords",
    categoryColor: "bg-purple-500/10 text-purple-600",
    title: "Search Intent: The Foundation of Modern SEO",
    excerpt: "Understanding and matching search intent is now more important than keyword density.",
    readTime: "11 min read",
    slug: "search-intent-modern-seo",
  },
  {
    category: "Content Marketing",
    categoryId: "content",
    categoryColor: "bg-emerald-500/10 text-emerald-600",
    title: "Content Refresh Strategy: Updating Old Posts for New Traffic",
    excerpt: "How to identify and update aging content to reclaim lost rankings.",
    readTime: "9 min read",
    slug: "content-refresh-strategy",
  },
  {
    category: "Google Search",
    categoryId: "google",
    categoryColor: "bg-orange-500/10 text-orange-600",
    title: "Preparing for AI Overviews in Google Search",
    excerpt: "What SGE means for organic traffic and how to optimize for AI-generated answers.",
    readTime: "14 min read",
    slug: "preparing-ai-overviews-google",
  },
];

const ARTICLES_PER_PAGE = 9;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter articles (exclude featured ones from main grid)
  const filteredArticles = useMemo(() => {
    const featuredSlugs = new Set(featuredArticles.map(a => a.slug));
    let result = allArticles.filter((a) => !featuredSlugs.has(a.slug));
    
    if (activeCategory !== "all") {
      result = result.filter((a) => a.categoryId === activeCategory);
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.category.toLowerCase().includes(query)
      );
    }
    
    return result;
  }, [searchQuery, activeCategory]);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * ARTICLES_PER_PAGE;
    return filteredArticles.slice(start, start + ARTICLES_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-highlight/5" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-highlight/5 blur-[100px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground/70 font-medium">Editorial</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              RankTomorrow <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Deep dives into SEO, AI, and content growth backed by real data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 md:py-16 bg-secondary/30 border-y border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Editor's Picks</h2>
              <p className="text-sm text-muted-foreground">Hand-selected reads from the team</p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.slug}
                variants={itemVariants}
                className="group bg-card rounded-xl border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-accent/20 hover:-translate-y-1"
              >
                <div className="h-40 relative overflow-hidden bg-gradient-to-br from-accent/10 via-highlight/5 to-transparent">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `linear-gradient(hsl(var(--border) / 0.5) 1px, transparent 1px),
                                      linear-gradient(90deg, hsl(var(--border) / 0.5) 1px, transparent 1px)`,
                    backgroundSize: '28px 28px'
                  }} />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold ${article.categoryColor}`}>
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent/20 text-accent text-[10px] font-semibold">
                      <TrendingUp className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors leading-snug mb-2 text-lg line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-border/40">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Read article
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10 bg-background border-border"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-all ${
                    activeCategory === cat.id
                      ? "bg-accent text-accent-foreground shadow-md"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
            <p className="text-sm text-muted-foreground">
              {filteredArticles.length} articles
            </p>
          </div>

          {paginatedArticles.length > 0 ? (
            <motion.div
              key={`${currentPage}-${activeCategory}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {paginatedArticles.map((article) => (
                <motion.article
                  key={article.slug}
                  variants={itemVariants}
                  className="group bg-card rounded-xl border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-accent/20 hover:-translate-y-0.5"
                >
                  <div className="h-32 relative overflow-hidden bg-gradient-to-br from-accent/5 via-highlight/5 to-transparent">
                    <div className="absolute inset-0 opacity-15" style={{
                      backgroundImage: `linear-gradient(hsl(var(--border) / 0.5) 1px, transparent 1px),
                                        linear-gradient(90deg, hsl(var(--border) / 0.5) 1px, transparent 1px)`,
                      backgroundSize: '24px 24px'
                    }} />
                    <div className="absolute top-3 left-3">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold ${article.categoryColor}`}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors leading-snug mb-2 text-base line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-border/40">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        Read
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">No articles found</h2>
              <p className="text-muted-foreground mb-6">
                Try a different search term or category.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
              >
                Clear filters
              </Button>
            </motion.div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-2 mt-12"
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="border-border"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageChange(page)}
                  className={currentPage === page 
                    ? "bg-accent text-accent-foreground" 
                    : "border-border"
                  }
                >
                  {page}
                </Button>
              ))}

              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="border-border"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Topic Pillars CTA */}
      <section className="py-12 md:py-16 bg-secondary/30 border-t border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-foreground mb-2">Explore by Topic</h2>
            <p className="text-muted-foreground">Deep-dive into our curated topic hubs</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: "SEO Strategy", href: "/topics/seo-strategy" },
              { name: "Keyword Research", href: "/topics/keyword-research" },
              { name: "AI & Automation", href: "/topics/ai-automation" },
              { name: "Content Marketing", href: "/topics/content-marketing" },
              { name: "Google Search", href: "/topics/google-search" },
            ].map((topic, index) => (
              <motion.div
                key={topic.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={topic.href}
                  className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-all group"
                >
                  <span className="font-medium text-foreground group-hover:text-accent transition-colors text-sm">
                    {topic.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
