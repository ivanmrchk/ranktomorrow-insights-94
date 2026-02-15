import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Zap, 
  Bot,
  Workflow,
  FileText,
  Layers,
  Sparkles,
  TrendingUp,
  ArrowRight,
  Clock,
  Type,
  List,
  Search,
  Settings,
  Mail
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TopicCTA } from "@/components/TopicCTA";
import { useToast } from "@/hooks/use-toast";

const automationFits = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline repetitive tasks and connect tools to save hours every week."
  },
  {
    icon: FileText,
    title: "Content Pipelines",
    description: "Build systems that take you from keyword to published content efficiently."
  },
  {
    icon: Search,
    title: "Keyword-to-Content Systems",
    description: "Automatically transform keyword research into structured content briefs."
  },
  {
    icon: Settings,
    title: "Publishing Automation",
    description: "Schedule, optimize, and distribute content without manual overhead."
  },
];

const articles = [
  {
    category: "AI SEO",
    categoryColor: "bg-highlight/10 text-highlight",
    title: "Using AI to Scale Content Production Without Sacrificing Quality",
    excerpt: "A practical framework for integrating AI tools into your content workflow.",
    readTime: "12 min read",
  },
  {
    category: "Automation",
    categoryColor: "bg-accent/10 text-accent",
    title: "The Complete Guide to SEO Automation in 2025",
    excerpt: "How to automate keyword research, content creation, and publishing.",
    readTime: "15 min read",
  },
  {
    category: "Workflows",
    categoryColor: "bg-cyan-500/10 text-cyan-600",
    title: "Building a Keyword-to-Content Pipeline",
    excerpt: "Create a system that turns keyword data into publish-ready content.",
    readTime: "10 min read",
  },
  {
    category: "AI Tools",
    categoryColor: "bg-emerald-500/10 text-emerald-600",
    title: "Best AI Tools for SEO and Content Marketing",
    excerpt: "A comparison of AI tools that actually help with search rankings.",
    readTime: "8 min read",
  },
  {
    category: "Strategy",
    categoryColor: "bg-orange-500/10 text-orange-600",
    title: "AI Content Strategy: Quality at Scale",
    excerpt: "How to maintain editorial standards while using AI for content.",
    readTime: "14 min read",
  },
  {
    category: "Prompts",
    categoryColor: "bg-highlight/10 text-highlight",
    title: "SEO Prompt Engineering: Writing Prompts That Rank",
    excerpt: "How to structure AI prompts for SEO-optimized content output.",
    readTime: "11 min read",
  },
];

const tools = [
  {
    icon: Type,
    name: "AI Title Generator",
    description: "Generate SEO-optimized titles using AI and keyword data.",
    href: "#",
  },
  {
    icon: List,
    name: "Content Outline Builder",
    description: "AI-powered outlines based on top-ranking content analysis.",
    href: "#",
  },
  {
    icon: Layers,
    name: "Keyword Clustering",
    description: "Automatically group keywords by topic and intent.",
    href: "#",
  },
  {
    icon: Sparkles,
    name: "AI Content Optimizer",
    description: "Analyze and improve content for better search performance.",
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

const AiAutomation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-highlight/5 via-background to-accent/5" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
          
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-highlight/5 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px]" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-highlight/10 border border-highlight/20 mb-6">
                <Cpu className="w-4 h-4 text-highlight" />
                <span className="text-sm text-foreground/70 font-medium">Topic Pillar</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                AI & <span className="gradient-text">Automation</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Discover how AI and automation are transforming SEO, content creation, and digital growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What AI Means for SEO */}
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
                  <Bot className="w-5 h-5 text-highlight" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  What AI Means for SEO
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  <strong className="text-foreground">AI is fundamentally changing how SEO works.</strong> From 
                  keyword research to content creation, machine learning and large language models are enabling 
                  marketers to work faster, smarter, and at unprecedented scale.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-card rounded-xl border border-border p-5">
                    <Search className="w-6 h-6 text-highlight mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Smarter Keyword Research</h3>
                    <p className="text-sm">AI can analyze search patterns, cluster keywords by intent, and identify opportunities humans might miss.</p>
                  </div>
                  <div className="bg-card rounded-xl border border-border p-5">
                    <FileText className="w-6 h-6 text-highlight mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Faster Content Creation</h3>
                    <p className="text-sm">Generate drafts, outlines, and variations in minutes instead of hours—while maintaining quality.</p>
                  </div>
                  <div className="bg-card rounded-xl border border-border p-5">
                    <TrendingUp className="w-6 h-6 text-highlight mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Scale Without Sacrifice</h3>
                    <p className="text-sm">Automation lets you publish more without proportionally increasing costs or time.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How Automation Fits into Modern Marketing */}
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
                How Automation Fits Into <span className="gradient-text">Modern Marketing</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Automation isn't about replacing humans—it's about amplifying what humans can do.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto"
            >
              {automationFits.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card rounded-xl border border-border p-6 hover:border-highlight/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-highlight" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How RankTomorrow Uses AI */}
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
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  How RankTomorrow Uses AI
                </h2>
              </div>

              <p className="text-muted-foreground mb-8 text-lg">
                We don't use AI to churn out generic content. We use it strategically to enhance 
                data-driven SEO workflows.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Data-Driven Prompts",
                    description: "Every AI prompt we use is informed by keyword research, search intent data, and competitive analysis—not guesswork."
                  },
                  {
                    step: "02",
                    title: "AI-Assisted Content",
                    description: "AI helps with research, drafting, and optimization, but humans structure, review, and refine every piece."
                  },
                  {
                    step: "03",
                    title: "Structured SEO Workflows",
                    description: "We've built repeatable systems that connect keyword data → content briefs → AI drafts → polished articles."
                  },
                  {
                    step: "04",
                    title: "Quality and Consistency",
                    description: "Automation gives us speed, but our editorial standards ensure every piece meets our quality bar."
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
          icon={Type}
          headline="Automate Your First SEO Task"
          description="See AI in action—generate SEO-optimized titles for any topic in seconds. No signup, no setup."
          buttonText="Try the SEO Title Generator"
          buttonHref="/tools/seo-title-generator"
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
                  <span className="inline-block text-highlight text-xs font-semibold uppercase tracking-wider mb-2">
                    AI & Automation Articles
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Featured <span className="gradient-text">Guides</span>
                  </h2>
                </div>
                <a
                  href="/ai-automation/articles/"
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
                  className="group bg-card rounded-xl border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-highlight/20 hover:-translate-y-0.5"
                >
                  <div className="h-28 relative overflow-hidden bg-gradient-to-br from-highlight/10 via-accent/5 to-transparent">
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
                    <h3 className="font-semibold text-foreground group-hover:text-highlight transition-colors leading-snug mb-2 text-base line-clamp-2">
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
                      <span className="flex items-center gap-1 text-xs font-medium text-highlight opacity-0 group-hover:opacity-100 transition-opacity">
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

        {/* AI Tools */}
        <section className="py-16 md:py-20 lg:py-24 bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <span className="inline-block text-highlight text-xs font-semibold uppercase tracking-wider mb-2">
                Free Resources
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                AI & Automation <span className="gradient-text">Tools</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Free AI-powered tools to help you scale your SEO and content workflows.
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
                  className="group bg-card rounded-xl border border-border p-5 hover:border-highlight/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-highlight/10 flex items-center justify-center mb-4 group-hover:bg-highlight/20 transition-colors">
                    <tool.icon className="w-5 h-5 text-highlight" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-highlight transition-colors text-sm">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    {tool.description}
                  </p>
                  <span className="flex items-center gap-1 text-xs font-medium text-highlight">
                    Try free
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter */}
        <AiAutomationNewsletter />
      </main>

      <Footer />
    </div>
  );
};

const AiAutomationNewsletter = () => {
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
      description: "You'll receive AI and automation insights for SEO.",
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
          <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center mx-auto mb-5">
            <Mail className="w-6 h-6 text-highlight" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Get AI & Automation Insights
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Get AI and automation insights for SEO delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-card border-border focus:border-highlight"
              disabled={isSubmitting}
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="h-12 px-6 bg-highlight text-highlight-foreground hover:bg-highlight/90"
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

export default AiAutomation;
