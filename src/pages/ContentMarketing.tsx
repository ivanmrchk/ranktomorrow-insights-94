import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  PenTool, 
  Layers,
  Target,
  Search,
  TrendingUp,
  BookOpen,
  BarChart3,
  ArrowRight,
  Clock,
  Type,
  List,
  AlignLeft,
  Sparkles,
  Mail
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const contentStrategy = [
  {
    icon: Layers,
    title: "Topic Clusters",
    description: "Organize content around core topics to build authority and internal linking power."
  },
  {
    icon: BookOpen,
    title: "Pillar Pages",
    description: "Create comprehensive hub pages that anchor your topical clusters."
  },
  {
    icon: Search,
    title: "Keyword-Driven Content",
    description: "Base every piece on real keyword data and search demand."
  },
  {
    icon: Target,
    title: "Search Intent",
    description: "Match content format and depth to what searchers actually want."
  },
];

const articles = [
  {
    category: "Blogging",
    categoryColor: "bg-emerald-500/10 text-emerald-600",
    title: "How to Write Blog Posts That Rank and Convert",
    excerpt: "A complete framework for creating blog content that drives traffic and leads.",
    readTime: "14 min read",
  },
  {
    category: "Strategy",
    categoryColor: "bg-accent/10 text-accent",
    title: "Building a Content Calendar That Drives Results",
    excerpt: "How to plan and prioritize content for consistent organic growth.",
    readTime: "10 min read",
  },
  {
    category: "SEO Content",
    categoryColor: "bg-highlight/10 text-highlight",
    title: "The Complete Guide to SEO Content Writing",
    excerpt: "Write content that satisfies both readers and search engines.",
    readTime: "18 min read",
  },
  {
    category: "Publishing",
    categoryColor: "bg-cyan-500/10 text-cyan-600",
    title: "Content Velocity: How Often Should You Publish?",
    excerpt: "Finding the right publishing cadence for sustainable growth.",
    readTime: "8 min read",
  },
  {
    category: "Optimization",
    categoryColor: "bg-orange-500/10 text-orange-600",
    title: "How to Update Old Content for Better Rankings",
    excerpt: "Refresh strategies that can double your traffic from existing posts.",
    readTime: "12 min read",
  },
  {
    category: "Scale",
    categoryColor: "bg-emerald-500/10 text-emerald-600",
    title: "Scaling Content Production Without Losing Quality",
    excerpt: "Systems and processes for producing more content efficiently.",
    readTime: "15 min read",
  },
];

const tools = [
  {
    icon: Type,
    name: "SEO Title Generator",
    description: "Create click-worthy titles optimized for search and engagement.",
    href: "#",
  },
  {
    icon: List,
    name: "Content Outline Builder",
    description: "Generate comprehensive outlines based on top-ranking content.",
    href: "#",
  },
  {
    icon: AlignLeft,
    name: "Meta Description Writer",
    description: "Craft compelling meta descriptions that boost click-through rates.",
    href: "#",
  },
  {
    icon: Layers,
    name: "Keyword Clustering",
    description: "Group keywords into topic clusters for strategic content planning.",
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

const ContentMarketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-background to-accent/5" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
          
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px]" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <PenTool className="w-4 h-4 text-emerald-600" />
                <span className="text-sm text-foreground/70 font-medium">Topic Pillar</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Content <span className="gradient-text">Marketing</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Learn how to create, optimize, and scale content that drives traffic, leads, and long-term growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is Content Marketing */}
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
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-emerald-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  What is Content Marketing?
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  <strong className="text-foreground">Content marketing</strong> is the practice of creating 
                  and distributing valuable, relevant content to attract and retain a clearly defined audience. 
                  In the context of SEO, it's your primary vehicle for ranking in search results and building 
                  organic traffic.
                </p>
                <p className="leading-relaxed">
                  Unlike paid advertising, content marketing creates <strong className="text-foreground">compounding 
                  returns</strong>. A well-optimized article can drive traffic for years, while paid ads stop 
                  the moment you stop spending. This makes content one of the most valuable long-term investments 
                  in digital marketing.
                </p>
                <p className="leading-relaxed">
                  Effective content marketing builds <strong className="text-foreground">authority and trust</strong>. 
                  When you consistently provide value through helpful, accurate, and well-researched content, 
                  you become the go-to resource in your space—for both readers and search engines.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Strategy for SEO */}
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
                Content Strategy for <span className="gradient-text">SEO</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Modern content strategy combines structure, data, and intent to maximize search visibility.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto"
            >
              {contentStrategy.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card rounded-xl border border-border p-6 hover:border-emerald-500/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How RankTomorrow Approaches Content */}
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
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  How RankTomorrow Approaches Content
                </h2>
              </div>

              <p className="text-muted-foreground mb-8 text-lg">
                Our content philosophy prioritizes data, quality, and sustainable growth over volume and shortcuts.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Data-Driven Content Planning",
                    description: "Every piece of content starts with keyword research. We identify real search demand before writing a single word."
                  },
                  {
                    step: "02",
                    title: "AI-Powered Publishing",
                    description: "We use AI to accelerate research, drafting, and optimization—but humans guide strategy and ensure quality."
                  },
                  {
                    step: "03",
                    title: "Focus on Quality",
                    description: "We'd rather publish one excellent article than ten mediocre ones. Quality compounds; spam doesn't."
                  },
                  {
                    step: "04",
                    title: "Long-Term Rankings",
                    description: "We create evergreen content designed to rank for months and years, not chase fleeting trends."
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
                  <span className="inline-block text-emerald-600 text-xs font-semibold uppercase tracking-wider mb-2">
                    Content Marketing Articles
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
                  className="group bg-card rounded-xl border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-emerald-500/20 hover:-translate-y-0.5"
                >
                  <div className="h-28 relative overflow-hidden bg-gradient-to-br from-emerald-500/10 via-accent/5 to-transparent">
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
                    <h3 className="font-semibold text-foreground group-hover:text-emerald-600 transition-colors leading-snug mb-2 text-base line-clamp-2">
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
                      <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
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

        {/* Content Marketing Tools */}
        <section className="py-16 md:py-20 lg:py-24 bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <span className="inline-block text-emerald-600 text-xs font-semibold uppercase tracking-wider mb-2">
                Free Resources
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Content Marketing <span className="gradient-text">Tools</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Free tools to help you plan, create, and optimize content for SEO.
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
                  className="group bg-card rounded-xl border border-border p-5 hover:border-emerald-500/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                    <tool.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-emerald-600 transition-colors text-sm">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    {tool.description}
                  </p>
                  <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                    Try free
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter */}
        <ContentMarketingNewsletter />
      </main>

      <Footer />
    </div>
  );
};

const ContentMarketingNewsletter = () => {
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
      description: "You'll receive content marketing and SEO insights.",
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
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-5">
            <Mail className="w-6 h-6 text-emerald-600" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Get Content Marketing Insights
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Get content marketing and SEO insights delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-card border-border focus:border-emerald-500"
              disabled={isSubmitting}
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="h-12 px-6 bg-emerald-600 text-white hover:bg-emerald-600/90"
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

export default ContentMarketing;
