import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Search, 
  FileText, 
  Link2,
  Globe,
  Cpu,
  TrendingUp,
  BarChart3,
  Lightbulb,
  ArrowRight,
  Clock,
  Type,
  List,
  Layers,
  GitBranch,
  Mail
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TopicCTA } from "@/components/TopicCTA";
import { useToast } from "@/hooks/use-toast";

const corePillars = [
  {
    icon: Search,
    title: "Keyword Research",
    description: "Discover what your audience searches for and prioritize topics by intent and opportunity."
  },
  {
    icon: FileText,
    title: "Content Planning",
    description: "Create a structured content roadmap based on data, not guesswork."
  },
  {
    icon: Globe,
    title: "Technical SEO",
    description: "Ensure your site is crawlable, fast, and optimized for search engines."
  },
  {
    icon: Link2,
    title: "Internal Linking",
    description: "Build a strong internal link structure that distributes authority and guides users."
  },
  {
    icon: GitBranch,
    title: "Backlinks",
    description: "Earn quality backlinks through valuable content and strategic outreach."
  },
  {
    icon: Cpu,
    title: "AI-Powered Content",
    description: "Use AI to scale content production while maintaining quality and relevance."
  },
];

const articles = [
  {
    category: "Strategy",
    categoryColor: "bg-accent/10 text-accent",
    title: "The Complete Guide to Topical Authority in 2025",
    excerpt: "How to build comprehensive content hubs that dominate search results.",
    readTime: "15 min read",
  },
  {
    category: "Rankings",
    categoryColor: "bg-highlight/10 text-highlight",
    title: "How to Rank for Competitive Keywords (Without Backlinks)",
    excerpt: "Content-first strategies for ranking in crowded niches.",
    readTime: "12 min read",
  },
  {
    category: "Traffic Growth",
    categoryColor: "bg-cyan-500/10 text-cyan-600",
    title: "From 0 to 100K: A 12-Month SEO Growth Plan",
    excerpt: "A realistic timeline for building organic traffic from scratch.",
    readTime: "18 min read",
  },
  {
    category: "Best Practices",
    categoryColor: "bg-emerald-500/10 text-emerald-600",
    title: "SEO Best Practices That Actually Move the Needle",
    excerpt: "Cut through the noise and focus on what really drives rankings.",
    readTime: "10 min read",
  },
  {
    category: "Technical",
    categoryColor: "bg-orange-500/10 text-orange-600",
    title: "Technical SEO Checklist for 2025",
    excerpt: "Everything you need to audit and optimize your site's technical foundation.",
    readTime: "14 min read",
  },
  {
    category: "Content",
    categoryColor: "bg-accent/10 text-accent",
    title: "Content Velocity: How Often Should You Publish?",
    excerpt: "Finding the right publishing cadence for sustainable growth.",
    readTime: "8 min read",
  },
];

const tools = [
  {
    icon: Type,
    name: "SEO Title Generator",
    description: "Generate click-worthy, SEO-optimized titles for your content.",
    href: "#",
  },
  {
    icon: List,
    name: "Content Outline Builder",
    description: "Create comprehensive content outlines based on top-ranking pages.",
    href: "#",
  },
  {
    icon: Layers,
    name: "Keyword Clustering Tool",
    description: "Group keywords by topic and intent for strategic content planning.",
    href: "#",
  },
  {
    icon: Link2,
    name: "Internal Link Analyzer",
    description: "Find internal linking opportunities to strengthen your site structure.",
    href: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SeoStrategy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-highlight/5" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
          
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-highlight/5 blur-[100px]" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Target className="w-4 h-4 text-accent" />
                <span className="text-sm text-foreground/70 font-medium">Topic Pillar</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                SEO <span className="gradient-text">Strategy</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Learn how to build SEO strategies that drive real traffic, rankings, and long-term growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is SEO Strategy */}
        <section className="py-16 md:py-20 lg:py-24 bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  What is SEO Strategy?
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  <strong className="text-foreground">SEO strategy</strong> is the comprehensive plan 
                  for how you'll improve your website's visibility in search engines. It goes far beyond 
                  just writing blog posts—it's about understanding what your audience searches for, 
                  creating content that matches their intent, and building a site structure that search 
                  engines can easily understand.
                </p>
                <p className="leading-relaxed">
                  A modern SEO strategy integrates <strong className="text-foreground">data, structure, 
                  and intent</strong>. It's not about gaming algorithms or stuffing keywords—it's about 
                  systematically creating value for searchers while building technical foundations that 
                  help search engines recognize and rank that value.
                </p>
                <p className="leading-relaxed">
                  The difference between random content creation and strategic SEO is the difference 
                  between hoping for traffic and <strong className="text-foreground">engineering it</strong>. 
                  Strategy means every piece of content serves a purpose in a larger system designed for 
                  sustainable growth.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Parts of Modern SEO Strategy */}
        <section className="py-16 md:py-20 lg:py-24 bg-secondary/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Core Parts of a Modern <span className="gradient-text">SEO Strategy</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A complete SEO strategy covers these essential pillars working together.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
            >
              {corePillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card rounded-xl border border-border p-6 hover:border-accent/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <pillar.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How RankTomorrow Approaches SEO */}
        <section className="py-16 md:py-20 lg:py-24 bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-highlight" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  How RankTomorrow Approaches SEO
                </h2>
              </div>

              <p className="text-muted-foreground mb-8 text-lg">
                Our SEO strategy is built on principles that prioritize long-term, sustainable growth 
                over quick wins that fade.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Data-Driven Keyword Research",
                    description: "We start with real search data to identify topics people actually search for, filtered by intent and opportunity—not just volume."
                  },
                  {
                    step: "02",
                    title: "AI-Powered Content Creation",
                    description: "We use AI to scale content production, but every piece is structured around keyword data and human-reviewed for quality."
                  },
                  {
                    step: "03",
                    title: "Focus on Long-Term Rankings",
                    description: "We build content designed to rank for months and years, not viral moments. Sustainable traffic compounds over time."
                  },
                  {
                    step: "04",
                    title: "No Spam, No Guesswork",
                    description: "We avoid shortcuts, tricks, and gray-hat tactics. Every decision is backed by data and aligned with how search actually works."
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-4 p-5 bg-card rounded-xl border border-border"
                  >
                    <span className="text-2xl font-bold gradient-text">{item.step}</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <TopicCTA
          icon={List}
          headline="Start With a Content Outline"
          description="The best SEO strategies begin with structured content. Generate a data-driven outline for your next article in seconds."
          buttonText="Try the Content Outline Builder"
          buttonHref="/tools/content-outline-generator"
          secondaryText="Explore all SEO tools"
          secondaryHref="/tools"
        />

        {/* Featured Articles */}
        <section className="py-16 md:py-20 lg:py-24 bg-secondary/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                <div>
                  <span className="inline-block text-accent text-xs font-semibold uppercase tracking-wider mb-2">
                    SEO Strategy Articles
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Featured <span className="gradient-text">Guides</span>
                  </h2>
                </div>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                >
                  View all articles
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {articles.map((article, index) => (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  className="group bg-card rounded-xl border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-accent/20 hover:-translate-y-0.5"
                >
                  <div className="h-28 relative overflow-hidden bg-gradient-to-br from-accent/10 via-highlight/5 to-transparent">
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
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors leading-snug mb-2 text-base line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
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
          </div>
        </section>

        {/* SEO Tools */}
        <section className="py-16 md:py-20 lg:py-24 bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <span className="inline-block text-accent text-xs font-semibold uppercase tracking-wider mb-2">
                Free Resources
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                SEO Strategy <span className="gradient-text">Tools</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Free tools to help you plan, execute, and optimize your SEO strategy.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto"
            >
              {tools.map((tool, index) => (
                <motion.a
                  key={index}
                  href={tool.href}
                  variants={itemVariants}
                  className="group bg-card rounded-xl border border-border p-5 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <tool.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors text-sm">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    {tool.description}
                  </p>
                  <span className="flex items-center gap-1 text-xs font-medium text-accent">
                    Try free
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter */}
        <SeoStrategyNewsletter />
      </main>

      <Footer />
    </div>
  );
};

const SeoStrategyNewsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "You're subscribed!",
      description: "You'll receive SEO strategy insights and growth tips.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 md:py-20 bg-secondary/30 border-t border-border/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
            <Mail className="w-6 h-6 text-accent" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Get SEO Strategy Insights
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Get SEO strategy insights and growth tips delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-card border-border focus:border-accent"
              disabled={isSubmitting}
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="h-12 px-6 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SeoStrategy;
