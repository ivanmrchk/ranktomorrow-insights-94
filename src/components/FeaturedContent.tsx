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
    <section className="py-20 md:py-28 lg:py-32 relative bg-secondary/30">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="inline-block text-accent text-sm font-semibold uppercase tracking-wider mb-3">
                Featured Insights
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
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
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
            Deep dives into SEO, AI, and growth strategies backed by real data and proven results.
          </p>
        </motion.div>

        {/* Articles Grid - Editorial Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {articles.map((article, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className={`group relative bg-card rounded-2xl border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-border/50 hover:border-accent/30 hover:-translate-y-1 ${
                index === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Abstract Thumbnail Background */}
              <div 
                className={`relative overflow-hidden ${
                  index === 0 ? "h-48 md:h-64 lg:h-80" : "h-36 md:h-44"
                }`}
              >
                {/* Gradient base */}
                <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient}`} />
                
                {/* Abstract pattern overlay */}
                <div 
                  className="absolute inset-0"
                  style={{ background: article.pattern }}
                />
                
                {/* Grid/tech pattern */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `linear-gradient(hsl(var(--border) / 0.3) 1px, transparent 1px),
                                    linear-gradient(90deg, hsl(var(--border) / 0.3) 1px, transparent 1px)`,
                  backgroundSize: index === 0 ? '60px 60px' : '40px 40px'
                }} />
                
                {/* Floating decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-xl" />
                <div className="absolute bottom-6 left-6 w-16 h-16 rounded-full bg-gradient-to-tr from-white/15 to-transparent blur-lg" />
                
                {/* Category label */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold ${article.categoryColor} backdrop-blur-sm`}>
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`p-5 md:p-6 ${index === 0 ? "lg:p-8" : ""}`}>
                {/* Title */}
                <h3 className={`font-bold text-foreground group-hover:text-accent transition-colors leading-snug mb-3 ${
                  index === 0 ? "text-xl md:text-2xl lg:text-3xl" : "text-lg md:text-xl"
                }`}>
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className={`text-muted-foreground mb-5 leading-relaxed ${
                  index === 0 ? "text-base line-clamp-3" : "text-sm line-clamp-2"
                }`}>
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
