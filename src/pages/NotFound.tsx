import { useState, FormEvent } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Search, BookOpen, Compass, Wrench, Star, Sparkles, ArrowRight, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const exploreCards = [
  {
    title: "Blog",
    description: "Read the latest SEO insights, tutorials, and strategies.",
    href: "/blog",
    icon: BookOpen,
  },
  {
    title: "Topics",
    description: "Explore SEO strategy, keyword research, AI automation, and content marketing.",
    href: "/topics/seo-strategy",
    icon: Compass,
  },
  {
    title: "SEO Tools",
    description: "Discover tools designed to automate SEO workflows.",
    href: "/tools",
    icon: Wrench,
  },
  {
    title: "Software",
    description: "Explore recommended tools and software for SEO professionals.",
    href: "/recommended-tools",
    icon: Star,
  },
];

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      toast.success("You're subscribed! We'll keep you updated.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-24 md:pt-32">
        {/* Section 1 — Error Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                404 — Page Not Found
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The page you're looking for doesn't exist, may have been moved, or the link may be incorrect.
              </p>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link to="/">Go to Homepage</Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-5">
                Or search the site to find what you're looking for.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2 — Search */}
        <section className="py-12 md:py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Search RankTomorrow
              </h2>
              <form onSubmit={handleSearch} className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search articles, topics, tools, or SEO resources…"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 bg-card border-border text-foreground"
                  />
                </div>
                <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-12">
                  Search
                </Button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Section 3 — Explore */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Explore RankTomorrow
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {exploreCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Card className="h-full border-border/50 bg-card hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                        <card.icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                      <p className="text-sm text-muted-foreground mb-5 flex-1">{card.description}</p>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link to={card.href}>
                          Explore
                          <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — AI Tools Teaser */}
        <section className="py-12 md:py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                AI Tools for Smarter SEO
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We're building a suite of AI-powered tools designed to automate keyword research, content planning, and SEO workflows.
              </p>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link to="/tools">
                  View AI Tools
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Section 5 — Newsletter */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-lg mx-auto text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">Stay Updated</h2>
              <p className="text-muted-foreground mb-6">
                Get notified when new SEO tools, tutorials, and resources are released.
              </p>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-12 bg-card border-border text-foreground"
                    required
                  />
                  <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-12">
                    Subscribe
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-2 text-accent"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">You're subscribed!</span>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
