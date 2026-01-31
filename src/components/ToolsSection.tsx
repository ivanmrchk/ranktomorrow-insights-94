import { motion } from "framer-motion";
import { 
  Type, 
  AlignLeft, 
  Layers, 
  List,
  Network,
  FileJson,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const tools = [
  {
    icon: Type,
    name: "SEO Title Generator",
    description: "Generate click-worthy, SEO-optimized titles that rank and convert.",
    usage: "2,500+ daily uses",
    href: "/tools/seo-title-generator",
  },
  {
    icon: AlignLeft,
    name: "Meta Description Writer",
    description: "Craft compelling meta descriptions that boost your click-through rates.",
    usage: "1,800+ daily uses",
    href: "/tools",
  },
  {
    icon: Layers,
    name: "Keyword Grouper",
    description: "Automatically cluster keywords by intent and topic for smarter content planning.",
    usage: "950+ daily uses",
    href: "/tools",
  },
  {
    icon: List,
    name: "Content Outline Builder",
    description: "Create comprehensive content outlines based on top-ranking competitors.",
    usage: "1,200+ daily uses",
    href: "/tools",
  },
  {
    icon: FileJson,
    name: "Rich Snippet & Schema Generator",
    description: "Generate JSON-LD schema to help your pages appear as rich results in Google.",
    usage: "780+ daily uses",
    href: "/tools",
  },
  {
    icon: Network,
    name: "SEO Keyword Seed Generator",
    description: "Generate keyword seed ideas to kickstart your keyword research in tools like Google Keyword Planner.",
    usage: "620+ daily uses",
    href: "/tools",
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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const ToolsSection = () => {
  return (
    <section id="tools" className="section-padding relative bg-secondary/50">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-highlight/10 blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              Free SEO Tools
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Tools That <span className="gradient-text">Actually Work</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We built the tools we wish existed. No signup required for basic usage. 
              Just practical utilities that save you hours every week.
            </p>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              View All Tools
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Right: Tools List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {tools.map((tool, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  to={tool.href}
                  className="group flex items-start gap-5 bg-card rounded-xl border border-border p-5 card-hover"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <tool.icon className="w-6 h-6 text-accent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4 mb-1">
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        {tool.name}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
                      {tool.description}
                    </p>
                    <span className="text-xs text-accent">{tool.usage}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
