import { motion } from "framer-motion";
import { 
  Type, 
  AlignLeft, 
  List, 
  Layers, 
  FileJson,
  Network,
  ArrowRight,
  Sparkles,
  Zap,
  Database,
  Mail,
  CheckCircle,
  BarChart3,
  Cpu,
  FileCheck,
  Settings2
} from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const tools = [
  {
    icon: Type,
    name: "SEO Title Generator",
    description: "Generate click-worthy, SEO-optimized titles that rank and convert.",
    href: "/tools/seo-title-generator",
  },
  {
    icon: AlignLeft,
    name: "Meta Description Generator",
    description: "Craft compelling meta descriptions that boost your click-through rates.",
    href: "/tools/meta-description-generator",
  },
  {
    icon: List,
    name: "Content Outline Generator",
    description: "Create comprehensive content outlines based on top-ranking competitors.",
    href: "#",
  },
  {
    icon: Layers,
    name: "Keyword Grouping Tool",
    description: "Automatically cluster keywords by intent and topic for smarter content planning.",
    href: "#",
  },
  {
    icon: FileJson,
    name: "Rich Snippet & Schema Generator",
    description: "Generate JSON-LD schema to help your pages appear as rich results in Google.",
    href: "#",
  },
  {
    icon: Network,
    name: "SEO Keyword Seed Generator",
    description: "Generate keyword seed ideas to kickstart your keyword research in tools like Google Keyword Planner.",
    href: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ToolsNewsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setIsSubmitted(true);
      toast({
        title: "You're on the list!",
        description: "We'll notify you when new tools are released.",
      });
    } else {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-highlight flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Get Notified About New Tools
          </h2>
          <p className="text-muted-foreground mb-8">
            Be the first to know when we release new SEO and AI tools.
          </p>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-card border-border h-12"
                required
              />
              <Button type="submit" className="bg-accent text-white hover:bg-accent/90 h-12 px-6">
                Notify Me
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-accent"
            >
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-medium">You're on the list!</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const Tools = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-highlight/5" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-highlight/5 blur-[100px]" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              Free SEO Tools
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              SEO & AI <span className="gradient-text">Tools</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Free tools to help you research keywords, create content, and improve your SEO.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              RankTomorrow provides a growing collection of data-driven SEO and AI tools 
              designed to help marketers, builders, and website owners make smarter decisions. 
              Each tool is built to save you time and improve your results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Available Tools
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of free SEO and AI-powered utilities.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {tools.map((tool, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-card border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                      <tool.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-muted-foreground mb-5 leading-relaxed">
                      {tool.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-border hover:border-accent hover:bg-accent hover:text-white transition-all group/btn"
                      asChild
                    >
                      <a href={tool.href}>
                        Open Tool
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How These Tools Are Built */}
      <section className="py-16 md:py-24 bg-secondary/30 border-y border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wider mb-3">
              <Settings2 className="w-4 h-4" />
              Our Methodology
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              How These Tools Are Built
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Real Keyword Data",
                description: "Every tool is powered by actual search volume, ranking data, and SERP analysis from millions of queries.",
              },
              {
                icon: Cpu,
                title: "AI-Powered Workflows",
                description: "We use structured AI prompts trained on SEO best practices to generate accurate, actionable outputs.",
              },
              {
                icon: FileCheck,
                title: "Structured Publishing",
                description: "Outputs follow proven content frameworks and schema standards used by top-ranking pages.",
              },
              {
                icon: Zap,
                title: "Quality Control",
                description: "Each tool is tested against real-world SEO scenarios to ensure practical, reliable results.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-xl p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <ToolsNewsletter />

      <Footer />
    </div>
  );
};

export default Tools;
