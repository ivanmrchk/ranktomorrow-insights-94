import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Link2,
  FileText,
  Layers,
  Map,
  FileCheck,
  Network,
  Sparkles,
  Zap,
  Mail,
  CheckCircle,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const upcomingTools = [
  {
    icon: Link2,
    name: "URL Path Generator",
    description: "Generate SEO-friendly URL structures automatically.",
  },
  {
    icon: FileText,
    name: "Meta Description Writer",
    description: "Create optimized meta descriptions designed to increase click-through rates.",
  },
  {
    icon: Layers,
    name: "Keyword Cluster Generator",
    description: "Group keywords into powerful topic clusters for scalable SEO.",
  },
  {
    icon: Map,
    name: "Topical Authority Builder",
    description: "Generate structured topic maps for complete subject coverage.",
  },
  {
    icon: FileCheck,
    name: "SEO Content Brief Generator",
    description: "Create structured outlines for high-ranking articles.",
  },
  {
    icon: Network,
    name: "Internal Linking Assistant",
    description: "Automatically discover internal linking opportunities across your website.",
  },
];

const ComingSoon = () => {
  const [heroEmail, setHeroEmail] = useState("");
  const [earlyEmail, setEarlyEmail] = useState("");

  const handleHeroSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!heroEmail) return;
    toast.success("You're on the early access list!");
    setHeroEmail("");
  };

  const handleEarlySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!earlyEmail) return;
    toast.success("You're on the early access list!");
    setEarlyEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 pt-24">
        {/* Section 1 — Launch Announcement */}
        <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
          <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]" style={{ background: "hsl(var(--accent) / 0.3)" }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-8">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-xs font-medium tracking-wide uppercase text-accent">Coming Soon</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-foreground">
                AI Tools for Smarter SEO{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
                  Are Coming Soon
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
                We're building a new generation of AI-powered tools designed to automate research, content planning, and SEO workflows.
              </p>
              <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10">
                Join the early access list to be the first to try them when they launch.
              </p>

              <form onSubmit={handleHeroSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto mb-3">
                <Input
                  type="email"
                  required
                  value={heroEmail}
                  onChange={(e) => setHeroEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="h-12 bg-card border-border"
                />
                <Button type="submit" size="lg" className="w-full sm:w-auto whitespace-nowrap">
                  <Mail className="w-4 h-4 mr-2" />
                  Join the Early Access List
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">Be the first to access new tools and updates.</p>
            </motion.div>
          </div>
        </section>

        {/* Section 2 — Product Vision */}
        <section className="py-16 sm:py-24 bg-secondary/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold text-accent uppercase tracking-wide">Our Vision</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
                A New Workflow for Modern SEO
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                Traditional SEO tools are built for manual work. Our goal is to build intelligent tools that automate repetitive tasks and help you move from research to execution faster.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                These tools are designed for marketers, founders, and creators who want to scale content, research keywords faster, and build topical authority more efficiently.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 3 — Upcoming AI Tools */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                Tools Currently In Development
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A preview of the AI-powered tools we're building to transform your SEO workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {upcomingTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full border-border/60 bg-card hover:shadow-lg transition-shadow duration-300 cursor-default">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                          <tool.icon className="w-5 h-5 text-accent" />
                        </div>
                        <Badge variant="secondary" className="text-xs font-medium">
                          Coming Soon
                        </Badge>
                      </div>
                      <h3 className="text-base font-semibold text-foreground mb-2">{tool.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — Early Access Program */}
        <section className="py-16 sm:py-24 bg-secondary/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                Become an Early Tester
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                We're inviting a limited group of early users to help test the first versions of our AI tools before public release.
              </p>

              <div className="flex flex-col items-center gap-3 mb-10">
                <p className="text-sm font-semibold text-foreground mb-2">Early access members will receive:</p>
                {["Beta access to new tools", "Priority feature releases", "Early product updates"].map((benefit) => (
                  <div key={benefit} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleEarlySubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  required
                  value={earlyEmail}
                  onChange={(e) => setEarlyEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="h-12 bg-card border-border"
                />
                <Button type="submit" size="lg" className="w-full sm:w-auto whitespace-nowrap">
                  Get Early Access
                </Button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Section 5 — Development Status */}
        <section className="py-16 sm:py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-semibold text-accent uppercase tracking-wide">Status</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
                Currently Under Development
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-2">
                Our AI tools are actively being designed and built. We're focusing on performance, usability, and real-world SEO workflows.
              </p>
              <p className="text-base text-muted-foreground font-medium">
                The first tools will be launching soon.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoon;
