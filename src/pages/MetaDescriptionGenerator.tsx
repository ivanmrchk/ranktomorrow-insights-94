import { useState } from "react";
import { motion } from "framer-motion";
import { 
  AlignLeft, 
  ArrowRight, 
  Sparkles, 
  Star,
  Copy,
  Check,
  Zap,
  Target,
  MousePointerClick,
  TrendingUp,
  Clock,
  Search,
  BadgeCheck,
  MessageSquare
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
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface GeneratedDescription {
  description: string;
  charCount: number;
  isRecommended?: boolean;
  hasKeyword: boolean;
  hasCta: boolean;
}

// Demo descriptions for "email marketing software"
const demoDescriptions: GeneratedDescription[] = [
  {
    description: "Discover the best email marketing software to grow your audience, automate campaigns, and boost conversions. Compare top tools and find your perfect fit today.",
    charCount: 156,
    hasKeyword: true,
    hasCta: true,
    isRecommended: true,
  },
  {
    description: "Looking for email marketing software? Learn how to choose the right platform for your business, from automation features to pricing and integrations.",
    charCount: 155,
    hasKeyword: true,
    hasCta: false,
  },
  {
    description: "Email marketing software comparison: Features, pricing, and pros/cons of the top platforms. Find the best solution for your marketing needs.",
    charCount: 147,
    hasKeyword: true,
    hasCta: true,
  },
  {
    description: "Boost your ROI with the right email marketing software. We break down the top options to help you automate, personalize, and scale your campaigns.",
    charCount: 152,
    hasKeyword: true,
    hasCta: false,
  },
  {
    description: "Comprehensive guide to email marketing software: From beginner-friendly tools to enterprise solutions. Start building better email campaigns now.",
    charCount: 150,
    hasKeyword: true,
    hasCta: true,
  },
  {
    description: "What makes great email marketing software? Explore essential features like automation, segmentation, and analytics to make an informed choice.",
    charCount: 149,
    hasKeyword: true,
    hasCta: false,
  },
  {
    description: "Top email marketing software reviewed: Mailchimp, ConvertKit, ActiveCampaign, and more. See which platform fits your business goals best.",
    charCount: 148,
    hasKeyword: true,
    hasCta: true,
  },
];

const generateDescriptionsFromKeyword = (
  primaryKeyword: string,
  includeCta: boolean
): GeneratedDescription[] => {
  const templates = [
    {
      template: `Discover the best ${primaryKeyword} to grow your audience and boost conversions. Compare top options and find your perfect fit${includeCta ? " today." : "."}`,
      hasCta: includeCta,
    },
    {
      template: `Looking for ${primaryKeyword}? Learn how to choose the right solution for your business, from key features to pricing and integrations.`,
      hasCta: false,
    },
    {
      template: `${primaryKeyword} comparison: Features, pricing, and pros/cons of the top platforms. Find the best solution for your needs${includeCta ? " now." : "."}`,
      hasCta: includeCta,
    },
    {
      template: `Boost your results with the right ${primaryKeyword}. We break down the top options to help you make smarter decisions.`,
      hasCta: false,
    },
    {
      template: `Comprehensive guide to ${primaryKeyword}: From beginner-friendly tools to advanced solutions.${includeCta ? " Get started today." : ""}`,
      hasCta: includeCta,
    },
    {
      template: `What makes great ${primaryKeyword}? Explore essential features and capabilities to make an informed choice.`,
      hasCta: false,
    },
    {
      template: `Top ${primaryKeyword} reviewed and compared. See which option fits your goals best${includeCta ? " and start now." : "."}`,
      hasCta: includeCta,
    },
  ];

  return templates.map((item, index) => ({
    description: item.template,
    charCount: item.template.length,
    hasKeyword: true,
    hasCta: item.hasCta,
    isRecommended: index === 0,
  }));
};

const MetaDescriptionGenerator = () => {
  const [primaryKeyword, setPrimaryKeyword] = useState("email marketing software");
  const [seoTitle, setSeoTitle] = useState("");
  const [pageType, setPageType] = useState("blog-post");
  const [tone, setTone] = useState("informational");
  const [includeCta, setIncludeCta] = useState(true);
  const [generatedDescriptions, setGeneratedDescriptions] = useState<GeneratedDescription[]>(demoDescriptions);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isDemo, setIsDemo] = useState(true);
  const { toast } = useToast();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!primaryKeyword.trim()) {
      toast({
        title: "Primary keyword required",
        description: "Please enter a primary keyword to generate meta descriptions.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setIsDemo(false);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const descriptions = generateDescriptionsFromKeyword(primaryKeyword.trim(), includeCta);
    setGeneratedDescriptions(descriptions);
    setIsGenerating(false);
    
    toast({
      title: "Descriptions generated!",
      description: `${descriptions.length} meta descriptions are ready for you.`,
    });
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast({
      title: "Copied!",
      description: "Meta description copied to clipboard.",
    });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const getCharCountStatus = (count: number) => {
    if (count >= 140 && count <= 160) {
      return { color: "bg-emerald-500/10 text-emerald-600", label: "Ideal length", icon: true };
    } else if (count < 140) {
      return { color: "bg-amber-500/10 text-amber-600", label: "Too short", icon: false };
    } else {
      return { color: "bg-amber-500/10 text-amber-600", label: "May truncate", icon: false };
    }
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
              <AlignLeft className="w-4 h-4" />
              Free SEO Tool
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Meta Description <span className="gradient-text">Generator</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Generate search-optimized meta descriptions that improve your Google click-through rate.
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
                          placeholder="e.g., email marketing software"
                          value={primaryKeyword}
                          onChange={(e) => setPrimaryKeyword(e.target.value)}
                          className="h-12 bg-background border-border"
                          required
                        />
                        <p className="text-sm text-muted-foreground mt-1.5">
                          The main keyword you want to rank for
                        </p>
                      </div>

                      {/* SEO Title */}
                      <div className="md:col-span-2">
                        <Label htmlFor="seoTitle" className="text-foreground font-medium mb-2 block">
                          SEO Title
                        </Label>
                        <Input
                          id="seoTitle"
                          placeholder="e.g., 10 Best Email Marketing Software in 2025"
                          value={seoTitle}
                          onChange={(e) => setSeoTitle(e.target.value)}
                          className="h-12 bg-background border-border"
                        />
                        <p className="text-sm text-muted-foreground mt-1.5">
                          Optional: Your page title helps generate more relevant descriptions
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

                    {/* CTA Option */}
                    <div className="flex items-center space-x-3 pt-2">
                      <Checkbox
                        id="includeCta"
                        checked={includeCta}
                        onCheckedChange={(checked) => setIncludeCta(checked === true)}
                      />
                      <Label 
                        htmlFor="includeCta" 
                        className="text-foreground font-medium cursor-pointer flex items-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4 text-accent" />
                        Include call-to-action
                      </Label>
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
                          Generate Meta Descriptions
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Output Area */}
            {generatedDescriptions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-foreground">Generated Descriptions</h2>
                    {isDemo && (
                      <Badge variant="secondary" className="text-xs">
                        Demo Output
                      </Badge>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {generatedDescriptions.length} descriptions generated
                  </span>
                </div>

                <div className="space-y-3">
                  {generatedDescriptions.map((item, index) => {
                    const charStatus = getCharCountStatus(item.charCount);
                    return (
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
                          <div className="flex-1 space-y-3">
                            {/* Description with copy button */}
                            <div className="flex items-start gap-2 group/desc">
                              <p className="text-foreground leading-relaxed flex-1">
                                {item.description}
                              </p>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(item.description, index)}
                                className="opacity-0 group-hover/desc:opacity-100 transition-opacity h-7 px-2 flex-shrink-0"
                                title="Copy description"
                              >
                                {copiedIndex === index ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </Button>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap items-center gap-2">
                              <span className={`inline-flex items-center text-xs font-medium px-2 py-0.5 rounded ${charStatus.color}`}>
                                {item.charCount} chars
                                {charStatus.icon && <Check className="w-3 h-3 ml-1" />}
                              </span>
                              {item.hasKeyword && (
                                <span className="inline-flex items-center text-xs font-medium px-2 py-0.5 rounded bg-accent/10 text-accent">
                                  <Search className="w-3 h-3 mr-1" />
                                  Has keyword
                                </span>
                              )}
                              {item.hasCta && (
                                <span className="inline-flex items-center text-xs font-medium px-2 py-0.5 rounded bg-purple-500/10 text-purple-600">
                                  <MessageSquare className="w-3 h-3 mr-1" />
                                  Has CTA
                                </span>
                              )}
                            </div>
                          </div>
                          
                          {/* Copy Button */}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(item.description, index)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                            title="Copy description"
                          >
                            <Copy className="w-4 h-4 mr-1.5" />
                            Copy
                          </Button>
                        </div>

                        {item.isRecommended && (
                          <div className="mt-4 pt-4 border-t border-accent/20">
                            <div className="bg-background/50 rounded-lg p-4">
                              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-3">
                                <BadgeCheck className="w-4 h-4 text-accent" />
                                Why This Description Works
                              </h4>
                              <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                  <Target className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                  <span><strong className="text-foreground">Keyword placement:</strong> The primary keyword appears naturally in the first sentence, signaling relevance to both users and search engines.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <MousePointerClick className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                  <span><strong className="text-foreground">Value proposition:</strong> Clearly communicates what the reader will get (comparison, guidance, solutions) — making the click worthwhile.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                  <span><strong className="text-foreground">Optimal length:</strong> At {item.charCount} characters, this description fits Google's display limits without getting cut off.</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
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
              <span>Free users can generate a limited number of meta descriptions per hour.</span>
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
              Why Meta Descriptions Matter
            </h2>
            <p className="text-lg text-muted-foreground">
              Your meta description is your page's sales pitch in search results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MousePointerClick,
                title: "Click-Through Rate",
                description: "A compelling meta description can dramatically increase your CTR. Even if you rank #3, a better description can get you more clicks than #1.",
              },
              {
                icon: Target,
                title: "Search Relevance",
                description: "Google often bolds keywords in your description that match the search query. This visual highlighting draws attention and signals relevance.",
              },
              {
                icon: TrendingUp,
                title: "Indirect SEO Impact",
                description: "While meta descriptions aren't a direct ranking factor, higher CTR can signal quality to Google, potentially improving your positions over time.",
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
                  Best Practices for Meta Descriptions
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Keep descriptions between 140-160 characters to avoid truncation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Include your primary keyword naturally in the first sentence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Write unique descriptions for every page — never duplicate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Include a clear value proposition or benefit for the reader</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Add a call-to-action when appropriate to encourage clicks</span>
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
                title: "SEO Title Generator",
                description: "Create click-worthy titles that rank and convert.",
                href: "/tools/seo-title-generator",
                type: "Tool",
              },
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

export default MetaDescriptionGenerator;
