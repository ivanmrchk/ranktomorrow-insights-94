import { motion } from "framer-motion";
import { 
  Target, 
  Search, 
  Cpu, 
  FileText, 
  Globe,
  ArrowRight 
} from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "SEO Strategy",
    description: "Master the fundamentals and advanced tactics for sustainable organic growth.",
    articleCount: 87,
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: Search,
    title: "Keyword Research",
    description: "Find high-value opportunities with data-driven keyword analysis methods.",
    articleCount: 54,
    color: "from-highlight/20 to-highlight/5",
    iconColor: "text-highlight",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "Leverage artificial intelligence to scale your SEO and content operations.",
    articleCount: 42,
    color: "from-cyan-500/20 to-cyan-500/5",
    iconColor: "text-cyan-400",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Create content that ranks, converts, and builds lasting authority.",
    articleCount: 68,
    color: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-400",
  },
  {
    icon: Globe,
    title: "Google Search",
    description: "Stay ahead of algorithm updates and understand how Google really works.",
    articleCount: 93,
    color: "from-orange-500/20 to-orange-500/5",
    iconColor: "text-orange-400",
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const TopicalPillars = () => {
  return (
    <section id="topics" className="section-padding relative bg-secondary/20">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Content Hubs</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Explore by <span className="gradient-text">Topic</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deep-dive into our comprehensive content pillars, each designed to make you an expert in that domain.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {pillars.map((pillar, index) => (
            <motion.a
              key={index}
              href="#"
              variants={itemVariants}
              className={`group relative bg-card rounded-xl border border-border/50 p-8 card-hover overflow-hidden ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className={`w-7 h-7 ${pillar.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {pillar.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {pillar.articleCount} articles
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
