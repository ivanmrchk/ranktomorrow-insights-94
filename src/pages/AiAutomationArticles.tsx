import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Clock, 
  ArrowRight, 
  ChevronLeft,
  ChevronRight,
  Search
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Full article archive for AI & Automation
const allArticles = [
  {
    category: "AI SEO",
    categoryColor: "bg-highlight/10 text-highlight",
    title: "Using AI to Scale Content Production Without Sacrificing Quality",
    excerpt: "A practical framework for integrating AI tools into your content workflow while maintaining editorial standards and brand voice consistency.",
    readTime: "12 min read",
    slug: "ai-content-production-scale",
  },
  {
    category: "Automation",
    categoryColor: "bg-accent/10 text-accent",
    title: "The Complete Guide to SEO Automation in 2025",
    excerpt: "How to automate keyword research, content creation, and publishing workflows to multiply your output without multiplying your team.",
    readTime: "15 min read",
    slug: "seo-automation-guide-2025",
  },
  {
    category: "Workflows",
    categoryColor: "bg-cyan-500/10 text-cyan-600",
    title: "Building a Keyword-to-Content Pipeline",
    excerpt: "Create a system that turns keyword data into publish-ready content with minimal manual intervention at each stage.",
    readTime: "10 min read",
    slug: "keyword-content-pipeline",
  },
  {
    category: "AI Tools",
    categoryColor: "bg-emerald-500/10 text-emerald-600",
    title: "Best AI Tools for SEO and Content Marketing",
    excerpt: "A comparison of AI tools that actually help with search rankings, from content generators to optimization platforms.",
    readTime: "8 min read",
    slug: "best-ai-seo-tools",
  },
  {
    category: "Strategy",
    categoryColor: "bg-orange-500/10 text-orange-600",
    title: "AI Content Strategy: Quality at Scale",
    excerpt: "How to maintain editorial standards while using AI for content production at scale. Build guardrails that work.",
    readTime: "14 min read",
    slug: "ai-content-strategy-quality",
  },
  {
    category: "Prompts",
    categoryColor: "bg-highlight/10 text-highlight",
    title: "SEO Prompt Engineering: Writing Prompts That Rank",
    excerpt: "How to structure AI prompts for SEO-optimized content output. The difference between generic and strategic prompting.",
    readTime: "11 min read",
    slug: "seo-prompt-engineering",
  },
  {
    category: "LLMs",
    categoryColor: "bg-purple-500/10 text-purple-600",
    title: "How Large Language Models Are Changing Search",
    excerpt: "Understanding the impact of LLMs on search behavior, SEO strategy, and content discoverability in 2025.",
    readTime: "13 min read",
    slug: "llms-changing-search",
  },
  {
    category: "AI SEO",
    categoryColor: "bg-highlight/10 text-highlight",
    title: "AI-Generated Content and Google: What We Know",
    excerpt: "Google's stance on AI content, how to stay compliant, and what actually matters for rankings.",
    readTime: "9 min read",
    slug: "ai-content-google-guidelines",
  },
  {
    category: "Automation",
    categoryColor: "bg-accent/10 text-accent",
    title: "Automating Technical SEO Audits",
    excerpt: "Tools and workflows for running technical SEO audits automatically, from crawling to reporting.",
    readTime: "11 min read",
    slug: "automating-technical-seo-audits",
  },
  {
    category: "Workflows",
    categoryColor: "bg-cyan-500/10 text-cyan-600",
    title: "No-Code SEO Automation with Zapier and Make",
    excerpt: "Build powerful SEO automations without writing code. Connect your favorite tools for seamless workflows.",
    readTime: "10 min read",
    slug: "no-code-seo-automation",
  },
  {
    category: "AI Tools",
    categoryColor: "bg-emerald-500/10 text-emerald-600",
    title: "ChatGPT vs Claude for SEO Content: A Comparison",
    excerpt: "Which AI assistant is better for SEO content creation? We tested both on real projects.",
    readTime: "12 min read",
    slug: "chatgpt-vs-claude-seo",
  },
  {
    category: "Strategy",
    categoryColor: "bg-orange-500/10 text-orange-600",
    title: "Building an AI-First Content Team",
    excerpt: "How to structure your content team around AI tools. Roles, processes, and hiring strategies for the future.",
    readTime: "16 min read",
    slug: "ai-first-content-team",
  },
  {
    category: "Prompts",
    categoryColor: "bg-highlight/10 text-highlight",
    title: "The Ultimate Library of SEO Prompts",
    excerpt: "50+ tested prompts for keyword research, content creation, meta tags, and more. Copy and customize.",
    readTime: "18 min read",
    slug: "seo-prompts-library",
  },
  {
    category: "Automation",
    categoryColor: "bg-accent/10 text-accent",
    title: "Automated Content Briefing: From Keyword to Outline",
    excerpt: "Build a system that generates comprehensive content briefs automatically from your keyword research data.",
    readTime: "10 min read",
    slug: "automated-content-briefing",
  },
  {
    category: "AI SEO",
    categoryColor: "bg-highlight/10 text-highlight",
    title: "AI-Powered Internal Linking Strategies",
    excerpt: "Use AI to analyze your site structure and suggest optimal internal linking opportunities.",
    readTime: "9 min read",
    slug: "ai-internal-linking",
  },
  {
    category: "Workflows",
    categoryColor: "bg-cyan-500/10 text-cyan-600",
    title: "End-to-End Content Publishing Automation",
    excerpt: "From draft to live: automate formatting, optimization, scheduling, and distribution.",
    readTime: "12 min read",
    slug: "content-publishing-automation",
  },
  {
    category: "LLMs",
    categoryColor: "bg-purple-500/10 text-purple-600",
    title: "Preparing Your Content for AI Search (SGE)",
    excerpt: "How to optimize content for Google's Search Generative Experience and other AI-powered search features.",
    readTime: "14 min read",
    slug: "content-ai-search-sge",
  },
  {
    category: "AI Tools",
    categoryColor: "bg-emerald-500/10 text-emerald-600",
    title: "AI Writing Assistants: Beyond the Hype",
    excerpt: "A realistic look at what AI writing tools can and can't do. Setting expectations for better results.",
    readTime: "11 min read",
    slug: "ai-writing-assistants-realistic",
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

const AiAutomationArticles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return allArticles;
    const query = searchQuery.toLowerCase();
    return allArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * ARTICLES_PER_PAGE;
    return filteredArticles.slice(start, start + ARTICLES_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-10 md:pb-14 relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-highlight/5 via-background to-accent/5" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-highlight/5 blur-[120px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link to="/topics/ai-automation" className="hover:text-foreground transition-colors">AI & Automation</Link>
              <span>/</span>
              <span className="text-foreground">Articles</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-highlight/10 border border-highlight/20 mb-4">
              <Cpu className="w-4 h-4 text-highlight" />
              <span className="text-sm text-highlight font-medium">AI & Automation</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              All Articles
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse our complete library of AI and automation content for SEO professionals. 
              {filteredArticles.length} articles and growing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-6 bg-secondary/30 border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:max-w-md">
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
            <p className="text-sm text-muted-foreground">
              Showing {paginatedArticles.length} of {filteredArticles.length} articles
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          {paginatedArticles.length > 0 ? (
            <motion.div
              key={currentPage}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {paginatedArticles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  variants={itemVariants}
                  className="group bg-card rounded-xl border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-highlight/20 hover:-translate-y-0.5"
                >
                  {/* Article Image Placeholder */}
                  <div className="h-36 relative overflow-hidden bg-gradient-to-br from-highlight/10 via-accent/5 to-transparent">
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `linear-gradient(hsl(var(--border) / 0.5) 1px, transparent 1px),
                                        linear-gradient(90deg, hsl(var(--border) / 0.5) 1px, transparent 1px)`,
                      backgroundSize: '28px 28px'
                    }} />
                    <div className="absolute top-3 left-3">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold ${article.categoryColor}`}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground group-hover:text-highlight transition-colors leading-snug mb-2 text-lg line-clamp-2">
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
                      <span className="flex items-center gap-1 text-xs font-medium text-highlight opacity-0 group-hover:opacity-100 transition-opacity">
                        Read article
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
                Try a different search term or browse all articles.
              </p>
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                Clear search
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

      {/* Back to Pillar */}
      <section className="py-12 bg-secondary/30 border-t border-border">
        <div className="container-custom text-center">
          <Link
            to="/topics/ai-automation"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to AI & Automation Hub
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiAutomationArticles;
