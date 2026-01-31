import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Type, 
  ArrowRight, 
  Sparkles, 
  Star,
  Copy,
  Check,
  Info,
  Zap,
  Target,
  MousePointerClick,
  TrendingUp,
  Clock,
  Search,
  BadgeCheck
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
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface GeneratedTitle {
  title: string;
  charCount: number;
  isRecommended?: boolean;
  hasKeyword: boolean;
  intent: "informational" | "commercial" | "transactional";
}

// Demo titles for "keyword research tools"
const demoTitles: GeneratedTitle[] = [
  {
    title: "7 Best Keyword Research Tools for SEO in 2025",
    charCount: 45,
    hasKeyword: true,
    intent: "informational",
    isRecommended: true,
  },
  {
    title: "Keyword Research Tools: Find Profitable SEO Keywords Fast",
    charCount: 57,
    hasKeyword: true,
    intent: "commercial",
  },
  {
    title: "Top SEO Keyword Research Tools for Better Rankings",
    charCount: 50,
    hasKeyword: true,
    intent: "informational",
  },
  {
    title: "How to Choose the Best Keyword Research Tools",
    charCount: 46,
    hasKeyword: true,
    intent: "informational",
  },
  {
    title: "10 Keyword Research Tools Every SEO Should Use",
    charCount: 47,
    hasKeyword: true,
    intent: "informational",
  },
  {
    title: "Free vs Paid Keyword Research Tools: Complete Comparison",
    charCount: 56,
    hasKeyword: true,
    intent: "commercial",
  },
  {
    title: "Master Keyword Research: Tools, Tips & Strategies",
    charCount: 50,
    hasKeyword: true,
    intent: "informational",
  },
  {
    title: "Keyword Research Tools That Actually Improve Rankings",
    charCount: 53,
    hasKeyword: true,
    intent: "commercial",
  },
  {
    title: "The Ultimate Guide to Using Keyword Research Tools",
    charCount: 51,
    hasKeyword: true,
    intent: "informational",
  },
  {
    title: "Keyword Research Tools: From Beginner to Pro",
    charCount: 45,
    hasKeyword: true,
    intent: "informational",
  },
];

const generateTitlesFromKeyword = (primaryKeyword: string): GeneratedTitle[] => {
  const templates = [
    { template: `7 Best ${primaryKeyword} for SEO in 2025`, intent: "informational" as const },
    { template: `${primaryKeyword}: Find Profitable SEO Keywords Fast`, intent: "commercial" as const },
    { template: `Top ${primaryKeyword} for Better Rankings`, intent: "informational" as const },
    { template: `How to Choose the Best ${primaryKeyword}`, intent: "informational" as const },
    { template: `10 ${primaryKeyword} Every SEO Should Use`, intent: "informational" as const },
    { template: `Free vs Paid ${primaryKeyword}: Complete Comparison`, intent: "commercial" as const },
    { template: `Master ${primaryKeyword}: Tips & Strategies`, intent: "informational" as const },
    { template: `${primaryKeyword} That Actually Improve Rankings`, intent: "commercial" as const },
    { template: `The Ultimate Guide to Using ${primaryKeyword}`, intent: "informational" as const },
    { template: `${primaryKeyword}: From Beginner to Pro`, intent: "informational" as const },
  ];

  return templates.map((item, index) => ({
    title: item.template,
    charCount: item.template.length,
    hasKeyword: true,
    intent: item.intent,
    isRecommended: index === 0,
  }));
};

const SeoTitleGenerator = () => {
  const [primaryKeyword, setPrimaryKeyword] = useState("keyword research tools");
  const [secondaryKeywords, setSecondaryKeywords] = useState("seo tools, google keyword planner, keyword ideas");
  const [pageType, setPageType] = useState("blog-post");
  const [tone, setTone] = useState("informational");
  const [generatedTitles, setGeneratedTitles] = useState<GeneratedTitle[]>(demoTitles);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isDemo, setIsDemo] = useState(true);
  const { toast } = useToast();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!primaryKeyword.trim()) {
      toast({
        title: "Primary keyword required",
        description: "Please enter a primary keyword to generate titles.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setIsDemo(false);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const titles = generateTitlesFromKeyword(primaryKeyword.trim());
    setGeneratedTitles(titles);
    setIsGenerating(false);
    
    toast({
      title: "Titles generated!",
      description: "10 SEO-optimized titles are ready for you.",
    });
  };

  const copyToClipboard = (title: string, index: number) => {
    navigator.clipboard.writeText(title);
    setCopiedIndex(index);
    toast({
      title: "Copied!",
      description: "Title copied to clipboard.",
    });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
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
              <Type className="w-4 h-4" />
              Free SEO Tool
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              SEO Title <span className="gradient-text">Generator</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Generate search-optimized titles that get more clicks and higher rankings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tool Form Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-border bg-card">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleGenerate} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Primary Keyword */}
                      <div className="md:col-span-2">
                        <Label htmlFor="primaryKeyword" className="text-foreground font-medium mb-2 block">
                          Primary Keyword <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="primaryKeyword"
                          placeholder="e.g., email marketing"
                          value={primaryKeyword}
                          onChange={(e) => setPrimaryKeyword(e.target.value)}
                          className="h-12 bg-background border-border"
                          required
                        />
                        <p className="text-sm text-muted-foreground mt-1.5">
                          The main keyword you want to rank for
                        </p>
                      </div>

                      {/* Secondary Keywords */}
                      <div className="md:col-span-2">
                        <Label htmlFor="secondaryKeywords" className="text-foreground font-medium mb-2 block">
                          Secondary Keywords
                        </Label>
                        <Input
                          id="secondaryKeywords"
                          placeholder="e.g., automation, best practices, tips"
                          value={secondaryKeywords}
                          onChange={(e) => setSecondaryKeywords(e.target.value)}
                          className="h-12 bg-background border-border"
                        />
                        <p className="text-sm text-muted-foreground mt-1.5">
                          Optional: comma-separated supporting keywords
                        </p>
                      </div>

                      {/* Page Type */}
                      <div>
                        <Label htmlFor="pageType" className="text-foreground font-medium mb-2 block">
                          Page Type
                        </Label>
                        <Select value={pageType} onValueChange={setPageType}>
                          <SelectTrigger className="h-12 bg-background border-border">
                            <SelectValue placeholder="Select page type" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border z-50">
                            <SelectItem value="blog-post">Blog Post</SelectItem>
                            <SelectItem value="landing-page">Landing Page</SelectItem>
                            <SelectItem value="product-page">Product Page</SelectItem>
                            <SelectItem value="guide">Guide</SelectItem>
                            <SelectItem value="comparison">Comparison</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Tone */}
                      <div>
                        <Label htmlFor="tone" className="text-foreground font-medium mb-2 block">
                          Tone
                        </Label>
                        <Select value={tone} onValueChange={setTone}>
                          <SelectTrigger className="h-12 bg-background border-border">
                            <SelectValue placeholder="Select tone" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border z-50">
                            <SelectItem value="neutral">Neutral</SelectItem>
                            <SelectItem value="click-optimized">Click-Optimized</SelectItem>
                            <SelectItem value="informational">Informational</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="authority">Authority</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8"
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <>
                          <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5 mr-2" />
                          Generate SEO Titles
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Output Area */}
            {generatedTitles.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-foreground">Generated Titles</h2>
                    {isDemo && (
                      <Badge variant="secondary" className="text-xs">
                        Demo Output
                      </Badge>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {generatedTitles.length} titles generated
                  </span>
                </div>

                <div className="space-y-3">
                  {generatedTitles.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`group relative p-4 rounded-lg border transition-all ${
                        item.isRecommended
                          ? "bg-accent/5 border-accent/30"
                          : "bg-card border-border hover:border-accent/20"
                      }`}
                    >
                      {item.isRecommended && (
                        <div className="absolute -top-2.5 left-4 px-2 py-0.5 bg-accent text-accent-foreground text-xs font-medium rounded flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Recommended
                        </div>
                      )}
                      
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="text-foreground font-medium leading-relaxed">
                            {item.title}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 mt-3">
                            <span className={`inline-flex items-center text-xs font-medium px-2 py-0.5 rounded ${
                              item.charCount <= 60 
                                ? "bg-emerald-500/10 text-emerald-600" 
                                : "bg-amber-500/10 text-amber-600"
                            }`}>
                              {item.charCount} chars
                              {item.charCount <= 60 && <Check className="w-3 h-3 ml-1" />}
                            </span>
                            {item.hasKeyword && (
                              <span className="inline-flex items-center text-xs font-medium px-2 py-0.5 rounded bg-accent/10 text-accent">
                                <Search className="w-3 h-3 mr-1" />
                                Primary keyword
                              </span>
                            )}
                            <span className={`inline-flex items-center text-xs font-medium px-2 py-0.5 rounded ${
                              item.intent === "informational" 
                                ? "bg-blue-500/10 text-blue-600" 
                                : "bg-purple-500/10 text-purple-600"
                            }`}>
                              {item.intent === "informational" ? "Informational" : "Commercial"}
                            </span>
                          </div>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(item.title, index)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {copiedIndex === index ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>

                      {item.isRecommended && (
                        <div className="mt-4 pt-4 border-t border-accent/20">
                          <div className="bg-background/50 rounded-lg p-4">
                            <h4 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-3">
                              <BadgeCheck className="w-4 h-4 text-accent" />
                              Why This Title Works
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li className="flex items-start gap-2">
                                <Target className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                <span><strong className="text-foreground">Keyword placement:</strong> Primary keyword appears at the start, maximizing SEO impact and signaling relevance to Google.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <MousePointerClick className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                <span><strong className="text-foreground">Search intent match:</strong> The "7 Best" format aligns with informational intent, matching what users searching for tool comparisons expect.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                <span><strong className="text-foreground">Click-worthy:</strong> Specific number (7) + "Best" creates curiosity. Year (2025) signals freshness, encouraging clicks over dated results.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Usage Limit Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground"
            >
              <Clock className="w-4 h-4" />
              <span>Free users can generate a limited number of titles per hour.</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Explanation Section */}
      <section className="py-16 md:py-24 bg-secondary/30 border-y border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why SEO Titles Matter
            </h2>
            <p className="text-lg text-muted-foreground">
              Your title tag is one of the most important on-page SEO elements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Keyword Targeting",
                description: "Google uses your title tag to understand what your page is about. Including your primary keyword helps search engines match your content with relevant queries.",
              },
              {
                icon: MousePointerClick,
                title: "Click-Through Rate",
                description: "Your title is the first thing users see in search results. A compelling title can dramatically increase clicks, even if you're not in the #1 position.",
              },
              {
                icon: TrendingUp,
                title: "Rankings Impact",
                description: "Higher CTR sends positive signals to Google. When users click your result over others, it indicates your page is relevant and valuable.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-12"
          >
            <Card className="bg-card border-border">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  Best Practices for SEO Titles
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Keep titles under 60 characters to avoid truncation in search results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Place your primary keyword near the beginning of the title</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Make titles unique for each page to avoid duplicate content issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Use action words and emotional triggers to increase click-through rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Match user search intent — informational, commercial, or transactional</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Related Links Section */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Continue Your SEO Journey
            </h2>
            <p className="text-muted-foreground">
              Explore related tools and resources to improve your search performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Keyword Research",
                description: "Learn how to find and analyze the right keywords.",
                href: "/topics/keyword-research",
                type: "Topic",
              },
              {
                title: "SEO Strategy",
                description: "Develop a comprehensive strategy for organic growth.",
                href: "/topics/seo-strategy",
                type: "Topic",
              },
              {
                title: "Meta Description Generator",
                description: "Create compelling meta descriptions for your pages.",
                href: "/tools",
                type: "Tool",
              },
              {
                title: "Rich Snippet Generator",
                description: "Generate schema markup for enhanced search results.",
                href: "/tools",
                type: "Tool",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className="block h-full p-6 rounded-xl border border-border bg-card hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all group"
                >
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {item.type}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-2 mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <ArrowRight className="w-4 h-4 text-muted-foreground mt-4 group-hover:text-accent group-hover:translate-x-1 transition-all" />
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

export default SeoTitleGenerator;
