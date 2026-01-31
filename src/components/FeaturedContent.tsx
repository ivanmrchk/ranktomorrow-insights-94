import { motion } from "framer-motion";
import { ArrowUpRight, Clock, TrendingUp } from "lucide-react";

const articles = [
  {
    category: "SEO Strategy",
    title: "The Complete Guide to Topical Authority in 2025",
    excerpt: "How to build comprehensive content hubs that dominate search results and establish your brand as an industry leader.",
    readTime: "12 min read",
    trending: true,
  },
  {
    category: "AI & Automation",
    title: "Using AI to Scale Content Production Without Sacrificing Quality",
    excerpt: "A practical framework for integrating AI tools into your content workflow while maintaining editorial standards.",
    readTime: "8 min read",
    trending: false,
  },
  {
    category: "Keyword Research",
    title: "Beyond Search Volume: Finding Keywords That Actually Convert",
    excerpt: "Why traditional keyword metrics are misleading and how to identify high-intent opportunities your competitors miss.",
    readTime: "10 min read",
    trending: true,
  },
  {
    category: "Content Marketing",
    title: "The Data-Driven Content Calendar That Tripled Our Traffic",
    excerpt: "Our exact process for planning, prioritizing, and executing content that compounds over time.",
    readTime: "15 min read",
    trending: false,
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

export const FeaturedContent = () => {
  return (
    <section className="section-padding relative bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Featured Insights</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-foreground">
            Latest from the <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deep dives into SEO, AI, and growth strategies backed by real data and proven results.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {articles.map((article, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group relative bg-card rounded-xl border border-border p-6 md:p-8 card-hover cursor-pointer overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {article.category}
                  </span>
                  {article.trending && (
                    <span className="flex items-center gap-1 text-xs text-highlight">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    Read Article
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
          >
            View All Articles
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
