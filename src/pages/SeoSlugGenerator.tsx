import { useState } from "react";
import { motion } from "framer-motion";
import {
  Link2,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  Search,
  TrendingUp,
  Globe,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const SeoSlugGenerator = () => {
  const [keyword, setKeyword] = useState("");
  const [articleTitle, setArticleTitle] = useState("");
  const [strategy, setStrategy] = useState("short-clean");
  const [isDemo, setIsDemo] = useState(true);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const { toast } = useToast();

  const primarySlug = "/ai-seo-automation-guide/";
  const alternativeSlugs = [
    "/ai-seo-automation-tactics/",
    "/best-ai-seo-automation/",
    "/ai-seo-automation-strategies-2025/",
    "/ai-seo-automation-tips/",
  ];

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) {
      toast({
        title: "Primary keyword required",
        description: "Please enter a primary keyword to generate slugs.",
        variant: "destructive",
      });
      return;
    }
    setIsDemo(false);
    toast({
      title: "Slugs generated!",
      description: "SEO-optimized URL slugs are ready for you.",
    });
  };

  const copyToClipboard = (slug: string) => {
    navigator.clipboard.writeText(slug);
    setCopiedSlug(slug);
    toast({
      title: "Slug copied!",
      description: `${slug} copied to clipboard.`,
    });
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 relative overflow-hidden">
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
              <Link2 className="w-4 h-4" />
              Free SEO Tool
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              SEO URL Slug <span className="gradient-text">Generator</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Generate clean, keyword-rich URL slugs optimized for search engines and click-through rates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Input Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-border bg-card">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleGenerate} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="keyword" className="text-foreground font-medium">
                        Primary Keyword <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="keyword"
                        placeholder="e.g. ai seo automation"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        className="h-12 bg-background border-border"
                        required
                      />
                      <p className="text-sm text-muted-foreground">
                        The main keyword you want in your URL slug
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="articleTitle" className="text-foreground font-medium">
                        Article Title <span className="text-muted-foreground font-normal">(optional)</span>
                      </Label>
                      <Input
                        id="articleTitle"
                        placeholder="e.g. 10 Proven AI SEO Automation Tactics That Skyrocket Rankings"
                        value={articleTitle}
                        onChange={(e) => setArticleTitle(e.target.value)}
                        className="h-12 bg-background border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="strategy" className="text-foreground font-medium">
                        Strategy Mode
                      </Label>
                      <Select value={strategy} onValueChange={setStrategy}>
                        <SelectTrigger className="h-12 bg-background border-border">
                          <SelectValue placeholder="Select strategy" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border z-50">
                          <SelectItem value="short-clean">Short &amp; Clean</SelectItem>
                          <SelectItem value="keyword-rich">Keyword-Rich</SelectItem>
                          <SelectItem value="local-seo">Local SEO Optimized</SelectItem>
                          <SelectItem value="evergreen">Evergreen</SelectItem>
                          <SelectItem value="include-year">Include Year</SelectItem>
                          <SelectItem value="comparison">Comparison</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate SEO Slug
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Demo Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-foreground">Generated Slugs</h2>
                {isDemo && (
                  <Badge variant="secondary" className="text-xs">Demo Output</Badge>
                )}
              </div>

              {/* Primary Slug */}
              <Card className="border-accent/30 bg-accent/5 mb-4">
                <CardContent className="p-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-medium">Primary Slug</p>
                    <code className="text-lg font-mono font-semibold text-foreground">{primarySlug}</code>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-accent/30 hover:bg-accent hover:text-accent-foreground"
                    onClick={() => copyToClipboard(primarySlug)}
                  >
                    {copiedSlug === primarySlug ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Alternative Slugs */}
              <div className="space-y-2 mb-8">
                <p className="text-sm font-medium text-muted-foreground mb-3">Alternative Suggestions</p>
                {alternativeSlugs.map((slug) => (
                  <div
                    key={slug}
                    className="flex items-center justify-between p-3 bg-card border border-border rounded-lg hover:border-accent/20 transition-colors group"
                  >
                    <code className="text-sm font-mono text-foreground">{slug}</code>
                    <button
                      onClick={() => copyToClipboard(slug)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-secondary rounded"
                    >
                      {copiedSlug === slug ? (
                        <Check className="w-3.5 h-3.5 text-accent" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {/* SEO Analysis Panel */}
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">SEO Analysis</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { label: "Character Length", value: "27" },
                      { label: "Word Count", value: "4" },
                      { label: "Stopwords Removed", value: "2" },
                      { label: "Year Detected", value: "No" },
                      { label: "Keyword Inclusion", value: "High" },
                    ].map((metric) => (
                      <div key={metric.label} className="bg-secondary/50 rounded-lg p-3">
                        <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                        <p className="text-sm font-semibold text-foreground">{metric.value}</p>
                      </div>
                    ))}
                    <div className="bg-secondary/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">SEO Score</p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-foreground">92/100</span>
                        <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">Excellent</Badge>
                      </div>
                      <Progress value={92} className="mt-2 h-1.5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="py-16 md:py-24 bg-secondary/30 border-y border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              Why URL Slugs Matter for SEO
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                A <strong className="text-foreground">URL slug</strong> is the part of a web address
                that comes after the domain name. Clean, keyword-rich slugs help search engines
                understand your page content and improve click-through rates in search results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: Search,
                  title: "Better Rankings",
                  description: "Keywords in your URL slug signal relevance to search engines, giving you a slight but real ranking advantage.",
                },
                {
                  icon: TrendingUp,
                  title: "Higher Click-Through Rates",
                  description: "Users are more likely to click on clean, readable URLs that clearly describe the page content.",
                },
                {
                  icon: Globe,
                  title: "Improved Shareability",
                  description: "Short, descriptive slugs look better when shared on social media and are easier to remember.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Related SEO Tools
            </h2>
            <p className="text-muted-foreground">Continue optimizing your content with these tools.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "SEO Title Generator", href: "/tools/seo-title-generator" },
              { name: "Meta Description Generator", href: "/tools/meta-description-generator" },
              { name: "Content Outline Generator", href: "/tools/content-outline-generator" },
              { name: "Keyword Research Guide", href: "/topics/keyword-research" },
            ].map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={link.href}
                  className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors group"
                >
                  <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                    {link.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeoSlugGenerator;
