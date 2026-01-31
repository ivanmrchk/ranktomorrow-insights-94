import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    category: "SEO Strategy",
    categoryColor: "bg-accent/10 text-accent",
    title: "The Complete Guide to Topical Authority in 2025",
    excerpt: "How to build comprehensive content hubs that dominate search results and establish your brand as an industry leader.",
    readTime: "12 min read",
    gradient: "from-accent/20 via-accent/10 to-transparent",
    pattern: "radial-gradient(circle at 30% 70%, hsl(var(--accent) / 0.15) 0%, transparent 50%)",
  },
  {
    category: "AI & Automation",
    categoryColor: "bg-highlight/10 text-highlight",
    title: "Using AI to Scale Content Production Without Sacrificing Quality",
    excerpt: "A practical framework for integrating AI tools into your content workflow while maintaining editorial standards.",
    readTime: "8 min read",
    gradient: "from-highlight/20 via-highlight/10 to-transparent",
    pattern: "radial-gradient(circle at 70% 30%, hsl(var(--highlight) / 0.15) 0%, transparent 50%)",
  },
  {
    category: "Keyword Research",
    categoryColor: "bg-cyan-500/10 text-cyan-600",
    title: "Beyond Search Volume: Finding Keywords That Actually Convert",
    excerpt: "Why traditional keyword metrics are misleading and how to identify high-intent opportunities your competitors miss.",
    readTime: "10 min read",
    gradient: "from-cyan-500/20 via-cyan-500/10 to-transparent",
    pattern: "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)",
  },
  {
    category: "Content Marketing",
    categoryColor: "bg-emerald-500/10 text-emerald-600",
    title: "The Data-Driven Content Calendar That Tripled Our Traffic",
    excerpt: "Our exact process for planning, prioritizing, and executing content that compounds over time.",
    readTime: "15 min read",
    gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent",
    pattern: "radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
  },
  {
    category: "Google Updates",
    categoryColor: "bg-orange-500/10 text-orange-600",
    title: "How to Recover From a Google Core Update in 30 Days",
    excerpt: "A step-by-step recovery playbook based on analyzing 200+ sites affected by recent algorithm changes.",
    readTime: "14 min read",
    gradient: "from-orange-500/20 via-orange-500/10 to-transparent",
    pattern: "radial-gradient(circle at 20% 40%, rgba(249, 115, 22, 0.15) 0%, transparent 50%)",
  },
  {
    category: "SEO Strategy",
    categoryColor: "bg-accent/10 text-accent",
    title: "Internal Linking Architecture: The Overlooked Growth Lever",
    excerpt: "How restructuring your internal links can unlock significant ranking improvements without creating new content.",
    readTime: "11 min read",
    gradient: "from-accent/20 via-highlight/10 to-transparent",
    pattern: "radial-gradient(circle at 60% 20%, hsl(var(--accent) / 0.12) 0%, transparent 50%)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  },
};

export const FeaturedContent = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 relative bg-secondary/30">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <span className="inline-block text-accent text-xs font-semibold uppercase tracking-wider mb-2">
                Featured Insights
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Latest from the <span className="gradient-text">Blog</span>
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

        {/* Articles Grid - Balanced Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {articles.map((article, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group relative bg-card rounded-xl border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-border/40 hover:border-accent/20 hover:-translate-y-0.5"
            >
              {/* Abstract Thumbnail Background - Consistent Height */}
              <div className="relative h-32 md:h-36 overflow-hidden">
                {/* Gradient base */}
                <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient}`} />
                
                {/* Abstract pattern overlay */}
                <div 
                  className="absolute inset-0"
                  style={{ background: article.pattern }}
                />
                
                {/* Grid/tech pattern */}
                <div className="absolute inset-0 opacity-25" style={{
                  backgroundImage: `linear-gradient(hsl(var(--border) / 0.4) 1px, transparent 1px),
                                    linear-gradient(90deg, hsl(var(--border) / 0.4) 1px, transparent 1px)`,
                  backgroundSize: '32px 32px'
                }} />
                
                {/* Floating decorative elements */}
                <div className="absolute top-3 right-3 w-14 h-14 rounded-full bg-gradient-to-br from-white/15 to-transparent blur-lg" />
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-md" />
                
                {/* Category label */}
                <div className="absolute top-3 left-3">
                  <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold ${article.categoryColor} backdrop-blur-sm`}>
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content - Compact */}
              <div className="p-4 md:p-5">
                {/* Title */}
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors leading-snug mb-2 text-base md:text-lg line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-border/40">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};