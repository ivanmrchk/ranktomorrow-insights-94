import { motion } from "framer-motion";
import { BarChart3, Wrench, MessageSquare, Target } from "lucide-react";

const trustBlocks = [
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Every strategy we share is backed by real data, case studies, and measurable results—not guesswork.",
  },
  {
    icon: Wrench,
    title: "Cutting-Edge Tools",
    description: "Access free SEO tools built by practitioners who understand what actually moves the needle.",
  },
  {
    icon: MessageSquare,
    title: "No-Nonsense Advice",
    description: "Skip the fluff. We deliver actionable tactics you can implement today, not theoretical frameworks.",
  },
  {
    icon: Target,
    title: "Results, Not Clickbait",
    description: "Our content is designed to generate real rankings and traffic—not just pageviews for us.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const TrustSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-highlight/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
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
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Why RankTomorrow</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Built for <span className="gradient-text">Serious Marketers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not here to sell you courses or ebooks. We're here to help you win at search.
          </p>
        </motion.div>

        {/* Trust Blocks Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustBlocks.map((block, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="gradient-border p-6 md:p-8 h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-highlight/20 flex items-center justify-center mb-5">
                  <block.icon className="w-6 h-6 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-3">{block.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {block.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional credibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-sm">
            Trusted by SEO professionals at leading companies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-6 opacity-50">
            {["TechCorp", "GrowthLabs", "DataDriven", "ScaleUp", "MetricsPro"].map((company) => (
              <span key={company} className="text-lg font-semibold text-muted-foreground">
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
