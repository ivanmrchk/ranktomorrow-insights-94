import { useState } from "react";
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
  Clock
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

interface GeneratedTitle {
  title: string;
  charCount: number;
  isRecommended?: boolean;
}

const mockGenerateTitles = (primaryKeyword: string, secondaryKeywords: string, pageType: string, tone: string): GeneratedTitle[] => {
  const templates = [
    `${primaryKeyword}: The Complete Guide for 2025`,
    `How to Master ${primaryKeyword} in 7 Simple Steps`,
    `${primaryKeyword} Explained: Everything You Need to Know`,
    `The Ultimate ${primaryKeyword} Strategy That Actually Works`,
    `${primaryKeyword}: Expert Tips & Best Practices`,
    `Why ${primaryKeyword} Matters (And How to Get It Right)`,
    `${primaryKeyword} 101: A Beginner's Complete Guide`,
    `Top 10 ${primaryKeyword} Techniques for Better Results`,
    `${primaryKeyword}: Data-Driven Strategies for Success`,
    `The Science Behind ${primaryKeyword}: What Research Shows`,
  ];

  return templates.map((template, index) => ({
    title: template,
    charCount: template.length,
    isRecommended: index === 3,
  }));
};

const SeoTitleGenerator = () => {
  const [primaryKeyword, setPrimaryKeyword] = useState("");
  const [secondaryKeywords, setSecondaryKeywords] = useState("");
  const [pageType, setPageType] = useState("");
  const [tone, setTone] = useState("");
  const [generatedTitles, setGeneratedTitles] = useState<GeneratedTitle[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const titles = mockGenerateTitles(primaryKeyword, secondaryKeywords, pageType, tone);
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
                  <h2 className="text-2xl font-bold text-foreground">Generated Titles</h2>
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
                        <div className="absolute -top-2.5 left-4 px-2 py-0.5 bg-accent text-accent-foreground text-xs font-medium rounded">
                          <Star className="w-3 h-3 inline mr-1" />
                          Recommended
                        </div>
                      )}
                      
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="text-foreground font-medium leading-relaxed">
                            {item.title}
                          </p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className={`text-xs font-medium ${
                              item.charCount <= 60 ? "text-green-600" : "text-amber-600"
                            }`}>
                              {item.charCount} characters
                              {item.charCount <= 60 ? " ✓" : " (over 60)"}
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
                            <Check className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>

                      {item.isRecommended && (
                        <div className="mt-4 pt-4 border-t border-accent/20">
                          <div className="flex items-start gap-2">
                            <Info className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-muted-foreground">
                              <strong className="text-foreground">Why this works:</strong> This title combines your primary keyword with an action-oriented structure that signals value. The phrase "That Actually Works" creates curiosity and differentiates from generic guides.
                            </p>
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
