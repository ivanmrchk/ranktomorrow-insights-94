import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Sparkles, 
  Search, 
  BarChart3, 
  FileText, 
  Cpu, 
  TrendingUp,
  ArrowRight,
  Star,
  CheckCircle
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Tool {
  name: string;
  description: string;
  url: string;
  featured?: boolean;
}

interface Category {
  name: string;
  icon: React.ElementType;
  description: string;
  tools: Tool[];
}

const categories: Category[] = [
  {
    name: "Keyword Research",
    icon: Search,
    description: "Find profitable keywords and understand search intent.",
    tools: [
      {
        name: "Ahrefs Keywords Explorer",
        description: "Industry-leading keyword research with accurate difficulty scores, search volume, and click data. Our go-to for competitive analysis.",
        url: "https://ahrefs.com",
        featured: true,
      },
      {
        name: "SEMrush Keyword Magic Tool",
        description: "Comprehensive keyword database with intent classification and question-based keyword suggestions.",
        url: "https://semrush.com",
      },
      {
        name: "Google Keyword Planner",
        description: "Free keyword research directly from Google. Best for understanding search trends and getting baseline volume data.",
        url: "https://ads.google.com/home/tools/keyword-planner/",
      },
      {
        name: "Ubersuggest",
        description: "Budget-friendly keyword research with content ideas and competitor insights. Great for beginners.",
        url: "https://neilpatel.com/ubersuggest/",
      },
    ],
  },
  {
    name: "SEO Platforms",
    icon: BarChart3,
    description: "All-in-one tools for technical SEO, backlinks, and site audits.",
    tools: [
      {
        name: "Ahrefs",
        description: "The most trusted SEO platform for backlink analysis, site audits, and competitive research. Used by serious SEO professionals.",
        url: "https://ahrefs.com",
        featured: true,
      },
      {
        name: "SEMrush",
        description: "Comprehensive digital marketing suite with SEO, PPC, and content tools. Excellent for agencies managing multiple clients.",
        url: "https://semrush.com",
        featured: true,
      },
      {
        name: "Screaming Frog SEO Spider",
        description: "Desktop-based technical SEO crawler. Essential for site audits, finding broken links, and analyzing site structure.",
        url: "https://screamingfrog.co.uk/seo-spider/",
      },
      {
        name: "Moz Pro",
        description: "Trusted SEO platform with proprietary metrics like Domain Authority. Good for link building and rank tracking.",
        url: "https://moz.com/products/pro",
      },
    ],
  },
  {
    name: "Content Optimization",
    icon: FileText,
    description: "Create content that ranks with data-driven optimization.",
    tools: [
      {
        name: "Surfer SEO",
        description: "Content optimization based on SERP analysis. Get real-time scoring and NLP keyword recommendations as you write.",
        url: "https://surferseo.com",
        featured: true,
      },
      {
        name: "Clearscope",
        description: "Enterprise-grade content optimization with AI-powered recommendations. Used by major publishers and content teams.",
        url: "https://clearscope.io",
      },
      {
        name: "Frase",
        description: "AI-powered content briefs and optimization. Great for creating comprehensive outlines based on competitor analysis.",
        url: "https://frase.io",
      },
      {
        name: "MarketMuse",
        description: "AI content intelligence platform for topic modeling and content strategy at scale.",
        url: "https://marketmuse.com",
      },
    ],
  },
  {
    name: "AI Writing Tools",
    icon: Cpu,
    description: "Accelerate content creation with AI assistance.",
    tools: [
      {
        name: "Claude",
        description: "Anthropic's AI assistant known for nuanced, accurate writing. Our preferred choice for research-heavy content.",
        url: "https://claude.ai",
        featured: true,
      },
      {
        name: "ChatGPT",
        description: "OpenAI's versatile AI for drafting, brainstorming, and content ideation. The most widely-used AI writing tool.",
        url: "https://chat.openai.com",
      },
      {
        name: "Jasper",
        description: "AI content platform with SEO templates and brand voice training. Built specifically for marketing teams.",
        url: "https://jasper.ai",
      },
      {
        name: "Copy.ai",
        description: "AI copywriting tool with templates for ads, emails, and social media. Good for quick marketing copy.",
        url: "https://copy.ai",
      },
    ],
  },
  {
    name: "Analytics & Tracking",
    icon: TrendingUp,
    description: "Measure, track, and understand your SEO performance.",
    tools: [
      {
        name: "Google Search Console",
        description: "Essential free tool for understanding how Google sees your site. Monitor rankings, clicks, and index coverage.",
        url: "https://search.google.com/search-console",
        featured: true,
      },
      {
        name: "Google Analytics 4",
        description: "Track user behavior, traffic sources, and conversions. The foundation of any web analytics stack.",
        url: "https://analytics.google.com",
        featured: true,
      },
      {
        name: "Accuranker",
        description: "Fast, accurate rank tracking with daily updates. Great for monitoring keyword positions at scale.",
        url: "https://accuranker.com",
      },
      {
        name: "Databox",
        description: "Dashboard tool for combining SEO data from multiple sources. Perfect for client reporting.",
        url: "https://databox.com",
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const RecommendedTools = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-highlight/5" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              <Star className="w-4 h-4" />
              Curated Stack
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Recommended SEO & <span className="gradient-text">Marketing Tools</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The tools we trust and use daily. Honest recommendations from SEO practitioners, 
              not sponsored placements. These are the platforms that power serious SEO work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Notice */}
      <section className="py-8 border-y border-border bg-secondary/30">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span>
              <strong className="text-foreground">Editorial Independence:</strong> We recommend tools based on merit, not affiliate payments.
            </span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="container-custom space-y-20">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <category.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-1">{category.name}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Tools Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-6"
              >
                {category.tools.map((tool, toolIndex) => (
                  <motion.div key={tool.name} variants={itemVariants}>
                    <Card className={`h-full bg-card border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group ${
                      tool.featured ? "ring-1 ring-accent/20" : ""
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                            {tool.name}
                          </h3>
                          {tool.featured && (
                            <span className="flex items-center gap-1 text-xs bg-accent/10 text-accent px-2 py-1 rounded-full flex-shrink-0">
                              <Sparkles className="w-3 h-3" />
                              Top Pick
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                          {tool.description}
                        </p>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-border hover:border-accent hover:bg-accent hover:text-white transition-all group/btn"
                          asChild
                        >
                          <a href={tool.url} target="_blank" rel="noopener noreferrer">
                            Visit Tool
                            <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 transition-transform" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary/30 border-t border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Build Your Own Stack
            </h2>
            <p className="text-muted-foreground mb-8">
              Every SEO workflow is different. Combine these tools with our free utilities 
              to create a stack that matches your needs and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/tools">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Explore Our Free Tools
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/topics/seo-strategy">
                <Button variant="outline">
                  Learn SEO Strategy
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RecommendedTools;
