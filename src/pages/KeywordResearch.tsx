import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Target, 
  TrendingUp, 
  BarChart3, 
  Lightbulb,
  Users,
  Cpu,
  FileText,
  ArrowRight,
  Clock,
  Layers,
  Type,
  List,
  Mail
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const whyItMatters = [
  {
    icon: TrendingUp,
    title: "Rankings",
    description: "Target the right keywords to rank for searches your audience actually makes."
  },
  {
    icon: BarChart3,
    title: "Traffic",
    description: "Drive qualified organic traffic by matching content to real search demand."
  },
  {
    icon: FileText,
    title: "Content Planning",
    description: "Build a content strategy based on data, not guesswork or intuition."
  },
  {
    icon: Users,
    title: "Buyer Intent",
    description: "Identify high-intent keywords that attract visitors ready to convert."
  },
  {
    icon: Cpu,
    title: "AI-Powered Content",
    description: "Feed AI tools with real keyword data to create content that ranks."
  },
];

const articles = [
  {
    category: "Fundamentals",
    categoryColor: "bg-accent/10 text-accent",
    title: "The Complete Guide to Keyword Research in 2025",
    excerpt: "Everything you need to know about finding, analyzing, and prioritizing keywords for SEO.",
    readTime: "15 min read",
  },
  {
    category: "Long-Tail",
    categoryColor: "bg-highlight/10 text-highlight",
    title: "Long-Tail Keywords: The Untapped Traffic Source",
    excerpt: "How to find and target long-tail keywords that your competitors overlook.",
    readTime: "10 min read",
  },
  {
    category: "Search Intent",
    categoryColor: "bg-cyan-500/10 text-cyan-600",
    title: "Understanding Search Intent: A Data-Driven Approach",
    excerpt: "How to classify keywords by intent and create content that matches what users want.",
    readTime: "12 min read",
  },
  {
    category: "Strategy",
    categoryColor: "bg-emerald-500/10 text-emerald-600",
    title: "Building a Keyword-First Content Strategy",
    excerpt: "Turn keyword research into a systematic content plan that drives consistent growth.",
    readTime: "14 min read",
  },
  {
    category: "Tools",
    categoryColor: "bg-orange-500/10 text-orange-600",
    title: "Best Keyword Research Tools for Every Budget",
    excerpt: "A comparison of free and paid tools to help you find the right keywords.",
    readTime: "8 min read",
  },
  {
    category: "Advanced",
    categoryColor: "bg-accent/10 text-accent",
    title: "Competitive Keyword Analysis: Finding Gaps",
    excerpt: "How to analyze competitor keywords and find opportunities they're missing.",
    readTime: "11 min read",
  },
];

const tools = [
  {
    icon: Layers,
    name: "Keyword Grouper",
    description: "Automatically cluster keywords by intent and topic for smarter content planning.",
    href: "#",
  },
  {
    icon: Type,
    name: "SEO Title Generator",
    description: "Generate click-worthy, SEO-optimized titles based on your target keywords.",
    href: "#",
  },
  {
    icon: List,
    name: "Content Outline Builder",
    description: "Create comprehensive content outlines based on keyword research data.",
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

const KeywordResearch = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-background to-accent/5" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
          
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px]" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <Search className="w-4 h-4 text-cyan-600" />
                <span className="text-sm text-foreground/70 font-medium">Topic Pillar</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Keyword <span className="gradient-text">Research</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Learn how real keyword data drives SEO, content strategy, and long-term search growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is Keyword Research */}
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
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Search className="w-5 h-5 text-cyan-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  What is Keyword Research?
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  <strong className="text-foreground">Keyword research</strong> is the process of discovering 
                  the words and phrases people type into search engines when looking for information, products, 
                  or services. It's the foundation of every successful SEO strategy.
                </p>
                <p className="leading-relaxed">
                  More than just finding popular search terms, modern keyword research is about understanding 
                  <strong className="text-foreground"> search intent</strong>—what users actually want when 
                  they search. Are they looking for information? Comparing options? Ready to buy?
                </p>
                <p className="leading-relaxed">
                  When done right, keyword research tells you exactly what content to create, how to structure 
                  it, and how to position it to rank in search results. It transforms content strategy from 
                  guesswork into a data-driven discipline.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why It Matters */}
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
                Why Keyword Research <span className="gradient-text">Matters</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Without keyword research, you're creating content in the dark. Here's what it enables.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
            >
              {whyItMatters.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`bg-card rounded-xl border border-border p-6 ${
                    index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How Keyword Research is Done Today */}
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
                  <Lightbulb className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  How Keyword Research is Done Today
                </h2>
              </div>

              <p className="text-muted-foreground mb-8 text-lg">
                Modern keyword research combines data tools, intent analysis, and AI to create content 
                that ranks. Here's the RankTomorrow approach:
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Start with Real Search Data",
                    description: "Use keyword tools to discover what people actually search for—not what you think they search for. Focus on search volume, trends, and competition."
                  },
                  {
                    step: "02",
                    title: "Filter by Intent and Opportunity",
                    description: "Not all keywords are equal. Filter by search intent (informational, commercial, transactional) and prioritize keywords where you can realistically rank."
                  },
                  {
                    step: "03",
                    title: "Cluster Keywords into Topics",
                    description: "Group related keywords into topic clusters. This reveals content opportunities and helps you build topical authority across related searches."
                  },
                  {
                    step: "04",
                    title: "Use AI to Scale Content Creation",
                    description: "Feed keyword data into AI workflows to generate content briefs, outlines, and drafts—all optimized for the search intent you've identified."
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
                  <span className="inline-block text-cyan-600 text-xs font-semibold uppercase tracking-wider mb-2">
                    Keyword Research Articles
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
                  <div className="h-28 relative overflow-hidden bg-gradient-to-br from-cyan-500/10 via-accent/5 to-transparent">
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

        {/* Keyword Tools */}
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
                Keyword Research <span className="gradient-text">Tools</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Free tools to help you with keyword research, content planning, and SEO optimization.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto"
            >
              {tools.map((tool, index) => (
                <motion.a
                  key={index}
                  href={tool.href}
                  variants={itemVariants}
                  className="group bg-card rounded-xl border border-border p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <tool.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {tool.description}
                  </p>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-accent">
                    Try it free
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter */}
        <PillarNewsletter />
      </main>

      <Footer />
    </div>
  );
};

const PillarNewsletter = () => {
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
      description: "You'll receive keyword research insights and SEO updates.",
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
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-5">
            <Mail className="w-6 h-6 text-cyan-600" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Get Keyword Research Insights
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Get keyword research insights and SEO updates delivered to your inbox.
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

export default KeywordResearch;
