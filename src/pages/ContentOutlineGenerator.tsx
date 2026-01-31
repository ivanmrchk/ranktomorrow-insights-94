import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  List, 
  ArrowRight, 
  Sparkles, 
  Copy,
  Check,
  Zap,
  Target,
  Layers,
  Clock,
  FileText,
  Hash,
  MessageCircleQuestion,
  ChevronDown,
  Tag
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

interface OutlineSection {
  type: "h1" | "h2" | "h3" | "intro" | "faq" | "conclusion";
  text: string;
  suggestedKeywords?: string[];
  keywordPlacement?: boolean;
}

interface GeneratedOutline {
  title: string;
  sections: OutlineSection[];
  wordCountEstimate: string;
  faqQuestions: string[];
}

// Demo outline for "best email marketing software"
const demoOutline: GeneratedOutline = {
  title: "10 Best Email Marketing Software in 2025 (Compared)",
  wordCountEstimate: "2,500–3,000 words",
  sections: [
    {
      type: "h1",
      text: "10 Best Email Marketing Software in 2025 (Compared)",
      keywordPlacement: true,
    },
    {
      type: "intro",
      text: "Introduction",
      keywordPlacement: true,
      suggestedKeywords: ["email marketing ROI", "email campaign tools", "email marketing solutions", "marketing software comparison"],
    },
    {
      type: "h2",
      text: "What to Look for in Email Marketing Software",
      suggestedKeywords: ["email marketing features", "marketing tool requirements", "email platform capabilities", "software evaluation criteria", "email marketing checklist"],
    },
    {
      type: "h3",
      text: "Automation & Workflows",
      suggestedKeywords: ["email automation", "drip campaigns", "autoresponders", "workflow triggers", "marketing automation", "automated sequences"],
    },
    {
      type: "h3",
      text: "Deliverability & Reputation",
      suggestedKeywords: ["email deliverability", "inbox placement rate", "sender reputation", "spam score", "email authentication", "DKIM SPF"],
    },
    {
      type: "h3",
      text: "Integrations & API",
      suggestedKeywords: ["CRM integration", "ecommerce integration", "API access", "Zapier connection", "third-party integrations", "webhook support"],
    },
    {
      type: "h2",
      text: "The 10 Best Email Marketing Software Platforms",
      keywordPlacement: true,
      suggestedKeywords: ["top email marketing tools", "best email platforms", "email software comparison", "marketing platform reviews", "email tool rankings"],
    },
    {
      type: "h3",
      text: "1. Mailchimp — Best for Beginners",
      suggestedKeywords: ["Mailchimp review", "Mailchimp pricing", "Mailchimp features", "Mailchimp alternatives", "beginner email marketing"],
    },
    {
      type: "h3",
      text: "2. ConvertKit — Best for Creators",
      suggestedKeywords: ["ConvertKit review", "ConvertKit for creators", "creator email marketing", "newsletter for bloggers", "ConvertKit pricing"],
    },
    {
      type: "h3",
      text: "3. ActiveCampaign — Best for Automation",
      suggestedKeywords: ["ActiveCampaign review", "ActiveCampaign automation", "advanced email workflows", "CRM email marketing", "ActiveCampaign pricing"],
    },
    {
      type: "h3",
      text: "4. Klaviyo — Best for Ecommerce",
      suggestedKeywords: ["Klaviyo review", "Klaviyo Shopify", "ecommerce email marketing", "Klaviyo vs Mailchimp", "revenue tracking email"],
    },
    {
      type: "h3",
      text: "5. Brevo (Sendinblue) — Best Budget Option",
      suggestedKeywords: ["Brevo review", "Sendinblue pricing", "affordable email marketing", "budget email tools", "Brevo vs Mailchimp"],
    },
    {
      type: "h3",
      text: "6. HubSpot — Best All-in-One Solution",
      suggestedKeywords: ["HubSpot email marketing", "HubSpot CRM", "all-in-one marketing platform", "HubSpot pricing", "marketing hub features"],
    },
    {
      type: "h3",
      text: "7. Drip — Best for DTC Brands",
      suggestedKeywords: ["Drip email marketing", "DTC email strategy", "ecommerce automation", "customer data platform", "Drip pricing"],
    },
    {
      type: "h3",
      text: "8. MailerLite — Best for Simplicity",
      suggestedKeywords: ["MailerLite review", "simple email marketing", "MailerLite free plan", "easy email tool", "MailerLite pricing"],
    },
    {
      type: "h3",
      text: "9. AWeber — Best for Established Marketers",
      suggestedKeywords: ["AWeber review", "AWeber features", "traditional email marketing", "AWeber pricing", "AWeber vs ConvertKit"],
    },
    {
      type: "h3",
      text: "10. GetResponse — Best for Webinars",
      suggestedKeywords: ["GetResponse review", "GetResponse webinars", "email marketing webinar", "GetResponse pricing", "conversion funnels"],
    },
    {
      type: "h2",
      text: "Email Marketing Software Comparison Table",
      suggestedKeywords: ["email software comparison chart", "feature comparison table", "pricing comparison", "email tool ratings", "side-by-side comparison"],
    },
    {
      type: "h2",
      text: "How to Choose the Right Email Marketing Software",
      keywordPlacement: true,
      suggestedKeywords: ["choosing email software", "email marketing decision guide", "which email tool", "email platform selection", "software buying guide"],
    },
    {
      type: "h3",
      text: "For Small Businesses & Startups",
      suggestedKeywords: ["small business email marketing", "startup email tools", "affordable marketing software", "SMB email solutions", "budget-friendly email"],
    },
    {
      type: "h3",
      text: "For Ecommerce & DTC Brands",
      suggestedKeywords: ["ecommerce email marketing", "DTC email strategy", "Shopify email integration", "revenue attribution", "product recommendation emails"],
    },
    {
      type: "h3",
      text: "For Creators & Solopreneurs",
      suggestedKeywords: ["creator email marketing", "solopreneur tools", "newsletter platforms", "audience building", "creator economy email"],
    },
    {
      type: "h2",
      text: "Frequently Asked Questions",
      suggestedKeywords: ["email marketing FAQ", "email software questions", "common email marketing questions", "email tool FAQ"],
    },
    {
      type: "conclusion",
      text: "Conclusion: Which Email Marketing Software Should You Choose?",
      keywordPlacement: true,
      suggestedKeywords: ["best email marketing choice", "email software recommendation", "final verdict email tools", "email marketing summary"],
    },
  ],
  faqQuestions: [
    "What is the best free email marketing software?",
    "How much does email marketing software cost?",
    "What's the difference between email marketing and marketing automation?",
    "Can I switch email marketing platforms easily?",
    "What email marketing software do professionals use?",
  ],
};

const generateOutlineFromInputs = (
  title: string,
  keyword: string,
  contentType: string,
  targetLength: string
): GeneratedOutline => {
  const wordCount = targetLength === "short" ? "800–1,200 words" : 
                    targetLength === "medium" ? "1,500–2,500 words" : "3,000+ words";
  
  const sections: OutlineSection[] = [
    { type: "h1", text: title, keywordPlacement: true },
    { type: "intro", text: "Introduction", keywordPlacement: true, suggestedKeywords: [`${keyword} overview`, `${keyword} basics`, `understanding ${keyword}`, `${keyword} introduction`] },
    { type: "h2", text: `What is ${keyword}?`, suggestedKeywords: [`${keyword} definition`, `${keyword} meaning`, `${keyword} explained`, `what does ${keyword} mean`] },
    { type: "h2", text: `Why ${keyword} Matters`, suggestedKeywords: [`${keyword} benefits`, `${keyword} importance`, `why use ${keyword}`, `${keyword} advantages`] },
    { type: "h3", text: "Key Benefits", suggestedKeywords: [`${keyword} pros`, `${keyword} features`, `${keyword} value`, `top benefits`] },
    { type: "h3", text: "Common Challenges", suggestedKeywords: [`${keyword} problems`, `${keyword} issues`, `${keyword} difficulties`, `${keyword} cons`] },
    { type: "h2", text: `How to ${contentType === "tutorial" ? "Use" : "Choose"} ${keyword}`, keywordPlacement: true, suggestedKeywords: [`${keyword} tutorial`, `${keyword} guide`, `${keyword} how to`, `step by step ${keyword}`] },
    { type: "h3", text: "Step 1: Assess Your Needs", suggestedKeywords: [`${keyword} requirements`, `${keyword} checklist`, `${keyword} planning`, `needs assessment`] },
    { type: "h3", text: "Step 2: Compare Options", suggestedKeywords: [`${keyword} comparison`, `${keyword} alternatives`, `${keyword} options`, `compare ${keyword}`] },
    { type: "h3", text: "Step 3: Make Your Decision", suggestedKeywords: [`choosing ${keyword}`, `${keyword} selection`, `${keyword} decision`, `best ${keyword} choice`] },
    { type: "h2", text: `Best Practices for ${keyword}`, suggestedKeywords: [`${keyword} tips`, `${keyword} strategies`, `${keyword} best practices`, `${keyword} recommendations`] },
    { type: "h2", text: "Frequently Asked Questions", suggestedKeywords: [`${keyword} FAQ`, `${keyword} questions`, `common ${keyword} questions`, `${keyword} answers`] },
    { type: "conclusion", text: "Conclusion", keywordPlacement: true, suggestedKeywords: [`${keyword} summary`, `${keyword} takeaways`, `final thoughts ${keyword}`, `${keyword} recap`] },
  ];

  return {
    title,
    wordCountEstimate: wordCount,
    sections,
    faqQuestions: [
      `What is ${keyword}?`,
      `How do I get started with ${keyword}?`,
      `What are the best ${keyword} options?`,
      `How much does ${keyword} cost?`,
      `Is ${keyword} worth it?`,
    ],
  };
};

const ContentOutlineGenerator = () => {
  const [seoTitle, setSeoTitle] = useState("10 Best Email Marketing Software in 2025 (Compared)");
  const [primaryKeyword, setPrimaryKeyword] = useState("email marketing software");
  const [secondaryKeywords, setSecondaryKeywords] = useState("email automation, marketing tools, newsletter software");
  const [contentType, setContentType] = useState("comparison");
  const [searchIntent, setSearchIntent] = useState("commercial");
  const [targetLength, setTargetLength] = useState("medium");
  const [generatedOutline, setGeneratedOutline] = useState<GeneratedOutline | null>(demoOutline);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedSection, setCopiedSection] = useState<number | null>(null);
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set());
  const [isDemo, setIsDemo] = useState(true);
  const { toast } = useToast();

  const toggleSection = (index: number) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!seoTitle.trim() || !primaryKeyword.trim()) {
      toast({
        title: "Required fields missing",
        description: "Please enter both an SEO title and primary keyword.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setIsDemo(false);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const outline = generateOutlineFromInputs(seoTitle.trim(), primaryKeyword.trim(), contentType, targetLength);
    setGeneratedOutline(outline);
    setIsGenerating(false);
    
    toast({
      title: "Outline generated!",
      description: "Your content outline is ready.",
    });
  };

  const copyOutline = () => {
    if (!generatedOutline) return;
    
    const outlineText = generatedOutline.sections.map(section => {
      const prefix = section.type === "h1" ? "# H1: " : 
                     section.type === "h2" ? "## H2: " : 
                     section.type === "h3" ? "### H3: " : "";
      const keywordsText = section.suggestedKeywords?.length 
        ? `\n   Suggested keywords: ${section.suggestedKeywords.join(", ")}` 
        : "";
      return `${prefix}${section.text}${keywordsText}`;
    }).join("\n\n");
    
    const faqText = generatedOutline.faqQuestions.length > 0 
      ? `\n\n## FAQ Ideas:\n${generatedOutline.faqQuestions.map(q => `- ${q}`).join("\n")}`
      : "";
    
    navigator.clipboard.writeText(outlineText + faqText);
    toast({
      title: "Outline copied!",
      description: "Full outline copied to clipboard in Markdown format.",
    });
  };

  const copySectionText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(index);
    toast({
      title: "Copied!",
      description: "Section heading copied to clipboard.",
    });
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const getSectionStyle = (type: OutlineSection["type"]) => {
    switch (type) {
      case "h1":
        return "text-xl font-bold text-foreground";
      case "h2":
        return "text-lg font-semibold text-foreground";
      case "h3":
        return "text-base font-medium text-foreground ml-6";
      case "intro":
      case "conclusion":
        return "text-base font-medium text-foreground italic";
      case "faq":
        return "text-base font-medium text-foreground";
      default:
        return "text-foreground";
    }
  };

  const getHeadingLabel = (type: OutlineSection["type"]) => {
    switch (type) {
      case "h1":
        return "H1";
      case "h2":
        return "H2";
      case "h3":
        return "H3";
      case "intro":
        return "Intro";
      case "conclusion":
        return "End";
      case "faq":
        return "FAQ";
      default:
        return null;
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
              <List className="w-4 h-4" />
              Free SEO Tool
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Content Outline <span className="gradient-text">Generator</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Generate SEO-optimized article outlines based on keywords, intent, and search data.
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
                      {/* SEO Title */}
                      <div className="md:col-span-2">
                        <Label htmlFor="seoTitle" className="text-foreground font-medium mb-2 block">
                          SEO Title <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="seoTitle"
                          placeholder="e.g., 10 Best Email Marketing Software in 2025"
                          value={seoTitle}
                          onChange={(e) => setSeoTitle(e.target.value)}
                          className="h-12 bg-background border-border"
                          required
                        />
                        <p className="text-sm text-muted-foreground mt-1.5">
                          The H1 title for your article
                        </p>
                      </div>

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

                      {/* Secondary Keywords */}
                      <div className="md:col-span-2">
                        <Label htmlFor="secondaryKeywords" className="text-foreground font-medium mb-2 block">
                          Secondary Keywords
                        </Label>
                        <Input
                          id="secondaryKeywords"
                          placeholder="e.g., email automation, marketing tools, newsletter software"
                          value={secondaryKeywords}
                          onChange={(e) => setSecondaryKeywords(e.target.value)}
                          className="h-12 bg-background border-border"
                        />
                        <p className="text-sm text-muted-foreground mt-1.5">
                          Optional: comma-separated supporting keywords
                        </p>
                      </div>

                      {/* Content Type */}
                      <div>
                        <Label htmlFor="contentType" className="text-foreground font-medium mb-2 block">
                          Content Type
                        </Label>
                        <Select value={contentType} onValueChange={setContentType}>
                          <SelectTrigger className="h-12 bg-background border-border">
                            <SelectValue placeholder="Select content type" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border z-50">
                            <SelectItem value="blog-post">Blog Post</SelectItem>
                            <SelectItem value="guide">Guide</SelectItem>
                            <SelectItem value="comparison">Comparison</SelectItem>
                            <SelectItem value="tutorial">Tutorial</SelectItem>
                            <SelectItem value="product-page">Product Page</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Search Intent */}
                      <div>
                        <Label htmlFor="searchIntent" className="text-foreground font-medium mb-2 block">
                          Search Intent
                        </Label>
                        <Select value={searchIntent} onValueChange={setSearchIntent}>
                          <SelectTrigger className="h-12 bg-background border-border">
                            <SelectValue placeholder="Select search intent" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border z-50">
                            <SelectItem value="informational">Informational</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="transactional">Transactional</SelectItem>
                            <SelectItem value="navigational">Navigational</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Target Length */}
                      <div className="md:col-span-2">
                        <Label htmlFor="targetLength" className="text-foreground font-medium mb-2 block">
                          Target Length
                        </Label>
                        <Select value={targetLength} onValueChange={setTargetLength}>
                          <SelectTrigger className="h-12 bg-background border-border">
                            <SelectValue placeholder="Select target length" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border z-50">
                            <SelectItem value="short">Short (800–1,200 words)</SelectItem>
                            <SelectItem value="medium">Medium (1,500–2,500 words)</SelectItem>
                            <SelectItem value="long">Long (3,000+ words)</SelectItem>
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
                          Generate Content Outline
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Output Area */}
            {generatedOutline && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-foreground">Generated Outline</h2>
                    {isDemo && (
                      <Badge variant="secondary" className="text-xs">
                        Demo Output
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">
                      Est. {generatedOutline.wordCountEstimate}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={copyOutline}
                      className="flex items-center gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      Copy All
                    </Button>
                  </div>
                </div>

                <Card className="border-border bg-card overflow-hidden">
                  <CardContent className="p-0">
                    {/* Outline Header */}
                    <div className="bg-secondary/50 border-b border-border p-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <FileText className="w-4 h-4" />
                        <span>SEO Content Outline</span>
                        <span className="mx-2">•</span>
                        <span>{generatedOutline.sections.length} sections</span>
                      </div>
                    </div>

                    {/* Outline Sections */}
                    <div className="divide-y divide-border">
                      {generatedOutline.sections.map((section, index) => {
                        const isExpanded = expandedSections.has(index);
                        // H1 should NOT have keywords - it's a page title, not a content section
                        const hasKeywords = section.type !== "h1" && section.suggestedKeywords && section.suggestedKeywords.length > 0;
                        
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.03 }}
                            className="group"
                          >
                            <div className="p-4">
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex items-start gap-3 flex-1">
                                  {/* Heading Label Badge */}
                                  <Badge 
                                    variant="secondary" 
                                    className={`text-xs font-mono flex-shrink-0 mt-0.5 ${
                                      section.type === "h1" ? "bg-accent/20 text-accent" :
                                      section.type === "h2" ? "bg-highlight/20 text-highlight" :
                                      "bg-muted text-muted-foreground"
                                    }`}
                                  >
                                    {getHeadingLabel(section.type)}
                                  </Badge>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 flex-wrap">
                                      <span className={getSectionStyle(section.type)}>
                                        {section.text}
                                      </span>
                                      {section.keywordPlacement && (
                                        <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/30">
                                          <Target className="w-3 h-3 mr-1" />
                                          Primary
                                        </Badge>
                                      )}
                                    </div>
                                    
                                    {/* Keyword toggle - always visible when section has keywords */}
                                    {hasKeywords && (
                                      <button
                                        type="button"
                                        onClick={() => toggleSection(index)}
                                        className="text-xs text-muted-foreground mt-2 flex items-center gap-1.5 hover:text-foreground transition-colors py-1 px-2 -ml-2 rounded-md hover:bg-secondary/50"
                                      >
                                        <Tag className="w-3 h-3" />
                                        {section.suggestedKeywords!.length} suggested keywords
                                        <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                      </button>
                                    )}
                                  </div>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    copySectionText(section.text, index);
                                  }}
                                  className="opacity-0 group-hover:opacity-100 transition-opacity h-7 px-2"
                                >
                                  {copiedSection === index ? (
                                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                                  ) : (
                                    <Copy className="w-3.5 h-3.5" />
                                  )}
                                </Button>
                              </div>
                            </div>
                            
                            {/* Expandable Keyword Suggestions */}
                            <AnimatePresence>
                              {hasKeywords && isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-4 pb-4 pt-0">
                                    <div className={`p-3 bg-secondary/50 rounded-lg border border-border ${section.type === "h3" ? "ml-6" : ""}`}>
                                      <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1.5">
                                        <Tag className="w-3.5 h-3.5 text-accent" />
                                        Suggested keywords to include:
                                      </p>
                                      <div className="flex flex-wrap gap-1.5">
                                        {section.suggestedKeywords!.map((keyword, kIndex) => (
                                          <Badge 
                                            key={kIndex} 
                                            variant="outline" 
                                            className="text-xs bg-background hover:bg-accent/10 cursor-pointer transition-colors"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              navigator.clipboard.writeText(keyword);
                                              toast({
                                                title: "Keyword copied!",
                                                description: `"${keyword}" copied to clipboard.`,
                                              });
                                            }}
                                          >
                                            {keyword}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* FAQ Section */}
                    {generatedOutline.faqQuestions.length > 0 && (
                      <div className="border-t border-border bg-secondary/30 p-4">
                        <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                          <MessageCircleQuestion className="w-4 h-4 text-accent" />
                          Suggested FAQ Questions
                        </h4>
                        <ul className="space-y-2">
                          {generatedOutline.faqQuestions.map((question, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-accent font-medium">Q:</span>
                              {question}
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          Add FAQ schema markup to target featured snippets
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
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
              <span>Free users can generate a limited number of outlines per hour.</span>
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
              Why Structured Outlines Improve Rankings
            </h2>
            <p className="text-lg text-muted-foreground">
              A well-organized content structure helps both readers and search engines understand your content.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: "Clear Hierarchy",
                description: "Proper H1-H6 structure helps Google understand the relationship between topics on your page. This improves topical relevance and ranking potential.",
              },
              {
                icon: Target,
                title: "Strategic Keyword Placement",
                description: "Placing keywords in headings signals importance to search engines. A structured outline ensures optimal keyword distribution without stuffing.",
              },
              {
                icon: MessageCircleQuestion,
                title: "Featured Snippet Opportunities",
                description: "Well-structured content with clear sections and FAQs is more likely to appear in featured snippets, driving significant traffic.",
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
                  Content Outline Best Practices
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Use one H1 that includes your primary keyword</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Structure H2s around main subtopics users are searching for</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Use H3s to break down complex topics into scannable sections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Include an FAQ section with schema markup for featured snippets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Match content depth to user intent — longer for guides, shorter for quick answers</span>
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
              Explore related tools and resources to improve your content strategy.
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
                title: "Meta Description Generator",
                description: "Craft compelling meta descriptions for better CTR.",
                href: "/tools/meta-description-generator",
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

export default ContentOutlineGenerator;
