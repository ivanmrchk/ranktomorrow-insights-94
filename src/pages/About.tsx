import { motion } from "framer-motion";
import { 
  Target, 
  Database, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  Users,
  BarChart3,
  Zap,
  Shield,
  BookOpen
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const differentiators = [
  {
    icon: Database,
    title: "Data-Driven, Not Opinion-Driven",
    description: "Every topic we cover is backed by real search data and keyword research.",
  },
  {
    icon: Target,
    title: "Built for Real Search Traffic",
    description: "We write for what people actually search, not what sounds impressive.",
  },
  {
    icon: TrendingUp,
    title: "Focused on Long-Term SEO",
    description: "No quick hacks. Strategies designed to compound over months and years.",
  },
  {
    icon: Shield,
    title: "No Spam, No Fluff",
    description: "Every article serves a purpose. If it doesn't help, we don't publish it.",
  },
  {
    icon: Zap,
    title: "AI-Enhanced, Human-Directed",
    description: "We use AI to scale quality, not to replace real editorial judgment.",
  },
  {
    icon: BookOpen,
    title: "Designed for Serious Marketers",
    description: "Content for professionals who need results, not beginners tips.",
  },
];

const audiences = [
  { label: "SEO Professionals", description: "Looking for advanced strategies and data insights" },
  { label: "Marketers", description: "Building organic growth channels for their brands" },
  { label: "Founders & Entrepreneurs", description: "Growing their businesses through search" },
  { label: "Content Creators", description: "Scaling production without sacrificing quality" },
  { label: "Website Builders", description: "Optimizing sites for long-term traffic growth" },
  { label: "Business Owners", description: "Understanding SEO beyond the basics" },
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

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-muted" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
          
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-highlight/5 blur-[100px]" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block text-accent text-sm font-semibold uppercase tracking-wider mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                About <span className="gradient-text">RankTomorrow</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Data-driven SEO and AI insights built for people who want real search traffic.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is RankTomorrow */}
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
                  <BarChart3 className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  What is RankTomorrow?
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  RankTomorrow is a media and publishing brand dedicated to the intersection of 
                  <strong className="text-foreground"> SEO, artificial intelligence, and data-driven growth</strong>. 
                  We're not an agency selling services. We're not a SaaS platform pushing subscriptions. 
                  We're a publication focused on one thing: helping you understand how search really works.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our coverage spans keyword research, content strategy, AI-powered publishing workflows, 
                  and the ever-changing landscape of Google search. We treat SEO as a serious discipline 
                  that requires data, patience, and strategic thinking—not tricks or shortcuts.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Think of us as the publication serious marketers turn to when they want 
                  substance over speculation.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why RankTomorrow Exists */}
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
                <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-highlight" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Why RankTomorrow Exists
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-2">SEO is full of noise</h3>
                  <p className="text-muted-foreground">
                    The industry is crowded with recycled tips, outdated tactics, and vague advice 
                    that doesn't translate to real rankings. We cut through the noise with data.
                  </p>
                </div>
                
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-2">AI content often misses the mark</h3>
                  <p className="text-muted-foreground">
                    Most AI-generated content is disconnected from what people actually search for. 
                    It's fluent but not strategic. We use AI differently—guided by real keyword data 
                    and search intent.
                  </p>
                </div>
                
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-2">There's a better way</h3>
                  <p className="text-muted-foreground">
                    RankTomorrow exists to connect <strong className="text-foreground">data, AI, and real SEO strategy</strong> into 
                    a coherent approach. We believe search traffic should be built on research and 
                    intentional structure, not guesswork.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How Our Content is Created */}
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
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  How Our Content is Created
                </h2>
              </div>

              <p className="text-muted-foreground mb-8 text-lg">
                Transparency matters for trust. Here's exactly how we approach content creation:
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Topics Based on Real Data",
                    description: "Every article starts with keyword research. We identify what people are actually searching for, not what we think sounds interesting."
                  },
                  {
                    step: "02",
                    title: "AI-Assisted, Human-Directed",
                    description: "We use AI tools to assist with research, drafting, and optimization. But every piece is structured and reviewed by humans who understand SEO."
                  },
                  {
                    step: "03",
                    title: "Optimized for Search Intent",
                    description: "Content is written to match what searchers actually want to find—whether that's a quick answer, a comprehensive guide, or a practical tool."
                  },
                  {
                    step: "04",
                    title: "Built for Long-Term Rankings",
                    description: "We don't chase viral moments or clickbait. Our goal is content that ranks and delivers value for months and years, not just days."
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

        {/* What Makes RankTomorrow Different */}
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
                What Makes Us <span className="gradient-text">Different</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're building a different kind of SEO publication—one focused on substance, not noise.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
            >
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card rounded-xl border border-border p-6 hover:border-accent/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-16 md:py-20 lg:py-24 bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-8 justify-center">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Who RankTomorrow is For
                </h2>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {audiences.map((audience, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">{audience.label}</span>
                      <p className="text-sm text-muted-foreground mt-0.5">{audience.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center text-muted-foreground mt-10 text-lg"
              >
                If you're serious about search traffic and tired of surface-level advice, 
                <span className="text-foreground font-medium"> you're in the right place</span>.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
