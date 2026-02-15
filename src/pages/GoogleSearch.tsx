import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Search,
  FileSearch,
  Database,
  TrendingUp,
  FileText,
  Link2,
  Settings,
  Users,
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

const howGoogleWorks = [
  {
    icon: FileSearch,
    title: "Crawling",
    description: "Google's bots discover and scan web pages to understand their content."
  },
  {
    icon: Database,
    title: "Indexing",
    description: "Crawled pages are analyzed and stored in Google's massive search index."
  },
  {
    icon: TrendingUp,
    title: "Ranking",
    description: "When you search, Google ranks indexed pages by relevance and quality."
  },
  {
    icon: Users,
    title: "Search Intent",
    description: "Google matches results to what users actually want to find."
  },
];

const rankingFactors = [
  {
    icon: FileText,
    title: "Content Quality",
    description: "Helpful, accurate, comprehensive content that satisfies user intent."
  },
  {
    icon: Search,
    title: "Keywords",
    description: "Strategic use of relevant keywords that match what users search for."
  },
  {
    icon: Link2,
    title: "Backlinks",
    description: "Links from other reputable sites that signal trust and authority."
  },
  {
    icon: Settings,
    title: "Technical SEO",
    description: "Site speed, mobile-friendliness, and proper HTML structure."
  },
  {
    icon: Users,
    title: "User Experience",
    description: "Easy navigation, clear layout, and engaging content that keeps users on page."
  },
];

const articles = [
  {
    category: "Algorithms",
    categoryColor: "bg-orange-500/10 text-orange-600",
    title: "How Google's Algorithm Really Works in 2025",
    excerpt: "A deep dive into the signals Google uses to rank content today.",
    readTime: "16 min read",
  },
  {
    category: "Rankings",
    categoryColor: "bg-accent/10 text-accent",
    title: "How to Rank on the First Page of Google",
    excerpt: "A practical roadmap for earning top positions in search results.",
    readTime: "14 min read",
  },
  {
    category: "Visibility",
    categoryColor: "bg-highlight/10 text-highlight",
    title: "Getting Indexed: How to Make Google Find Your Content",
    excerpt: "Ensure your pages are crawled and indexed properly.",
    readTime: "10 min read",
  },
  {
    category: "Updates",
    categoryColor: "bg-cyan-500/10 text-cyan-600",
    title: "How to Recover From a Google Core Update",
    excerpt: "A step-by-step playbook for diagnosing and recovering from algorithm changes.",
    readTime: "12 min read",
  },
  {
    category: "SERP",
    categoryColor: "bg-emerald-500/10 text-emerald-600",
    title: "Understanding Google SERP Features",
    excerpt: "Featured snippets, People Also Ask, and how to optimize for them.",
    readTime: "11 min read",
  },
  {
    category: "E-E-A-T",
    categoryColor: "bg-orange-500/10 text-orange-600",
    title: "E-E-A-T Explained: What Google Wants From Your Content",
    excerpt: "Experience, Expertise, Authoritativeness, and Trustworthiness demystified.",
    readTime: "13 min read",
  },
];

const tools = [
  {
    icon: Type,
    name: "SEO Title Generator",
    description: "Create titles optimized for Google's search results.",
    href: "#",
  },
  {
    icon: List,
    name: "Content Outline Builder",
    description: "Structure content based on what Google ranks.",
    href: "#",
  },
  {
    icon: Layers,
    name: "Keyword Research Tools",
    description: "Find keywords that drive Google traffic.",
    href: "#",
  },
  {
    icon: GitBranch,
    name: "Internal Link Helper",
    description: "Build internal links that help Google understand your site.",
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

const GoogleSearch = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-background to-accent/5" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
          
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px]" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <Globe className="w-4 h-4 text-orange-600" />
                <span className="text-sm text-foreground/70 font-medium">Topic Pillar</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Google <span className="gradient-text">Search</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Understand how Google ranks content and how to build visibility in search results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How Google Search Works */}
        <section className="py-16 md:py-20 lg:py-24 bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                How Google Search <span className="gradient-text">Works</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Google uses a sophisticated process to find, understand, and rank billions of web pages.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto"
            >
              {howGoogleWorks.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card rounded-xl border border-border p-6 hover:border-orange-500/30 transition-colors relative"
                >
                  <div className="absolute top-4 right-4 text-4xl font-bold text-border/50">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What Affects Rankings */}
        <section className="py-16 md:py-20 lg:py-24 bg-secondary/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  What Affects Rankings
                </h2>
              </div>

              <p className="text-muted-foreground mb-8 text-lg">
                Google considers hundreds of factors when ranking pages. Here are the most important ones you can influence.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {rankingFactors.map((factor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-4 p-5 bg-card rounded-xl border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <factor.icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{factor.title}</h3>
                      <p className="text-sm text-muted-foreground">{factor.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* How RankTomorrow Helps */}
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
                  <Search className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  How RankTomorrow Helps With Google Search
                </h2>
              </div>

              <p className="text-muted-foreground mb-8 text-lg">
                We publish content and build tools that help you understand and succeed in Google Search.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Data-Driven SEO",
                    description: "We base everything on real search data—what people search for, how often, and with what intent."
                  },
                  {
                    step: "02",
                    title: "Keyword Research",
                    description: "Our content helps you find and prioritize keywords that can actually drive Google traffic."
                  },
                  {
                    step: "03",
                    title: "AI-Powered Content",
                    description: "Learn how to use AI to create content that Google wants to rank—quality at scale."
                  },
                  {
                    step: "04",
                    title: "Structured Publishing",
                    description: "Build content systems that make it easy for Google to crawl, index, and rank your pages."
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
          headline="Optimize Your Titles for Google"
          description="Craft SEO-optimized titles that earn clicks in Google's search results. Generate multiple options instantly."
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
                  <span className="inline-block text-orange-600 text-xs font-semibold uppercase tracking-wider mb-2">
                    Google Search Articles
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
                  className="group bg-card rounded-xl border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-orange-500/20 hover:-translate-y-0.5"
                >
                  <div className="h-28 relative overflow-hidden bg-gradient-to-br from-orange-500/10 via-accent/5 to-transparent">
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
                    <h3 className="font-semibold text-foreground group-hover:text-orange-600 transition-colors leading-snug mb-2 text-base line-clamp-2">
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
                      <span className="flex items-center gap-1 text-xs font-medium text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity">
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

        {/* Google Search Tools */}
        <section className="py-16 md:py-20 lg:py-24 bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <span className="inline-block text-orange-600 text-xs font-semibold uppercase tracking-wider mb-2">
                Free Resources
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Google Search <span className="gradient-text">Tools</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Free tools to help you optimize for and succeed in Google Search.
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
                  className="group bg-card rounded-xl border border-border p-5 hover:border-orange-500/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                    <tool.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-orange-600 transition-colors text-sm">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    {tool.description}
                  </p>
                  <span className="flex items-center gap-1 text-xs font-medium text-orange-600">
                    Try free
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter */}
        <GoogleSearchNewsletter />
      </main>

      <Footer />
    </div>
  );
};

const GoogleSearchNewsletter = () => {
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
      description: "You'll receive Google Search and SEO insights.",
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
          <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto mb-5">
            <Mail className="w-6 h-6 text-orange-600" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Get Google Search Insights
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Get Google Search and SEO insights delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-card border-border focus:border-orange-500"
              disabled={isSubmitting}
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="h-12 px-6 bg-orange-600 text-white hover:bg-orange-600/90"
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

export default GoogleSearch;
