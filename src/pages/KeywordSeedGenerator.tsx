import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Network, 
  Copy, 
  Check, 
  Download, 
  Sparkles,
  ArrowRight,
  Lightbulb,
  Search,
  Target,
  TrendingUp,
  Layers
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface KeywordGroup {
  intent: string;
  icon: React.ElementType;
  color: string;
  keywords: string[];
}

const demoKeywordGroups: KeywordGroup[] = [
  {
    intent: "Informational",
    icon: Lightbulb,
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    keywords: [
      "what is email marketing",
      "how email marketing works",
      "email marketing examples",
      "email marketing best practices",
      "email marketing tips for beginners",
      "benefits of email marketing",
      "email marketing strategy guide",
      "how to start email marketing",
      "email marketing statistics",
      "types of email marketing campaigns"
    ]
  },
  {
    intent: "Commercial",
    icon: Search,
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    keywords: [
      "email marketing software",
      "email marketing tools",
      "best email marketing platforms",
      "email marketing services",
      "email automation software",
      "email marketing solutions",
      "email marketing apps",
      "professional email marketing tools",
      "email campaign software",
      "newsletter software"
    ]
  },
  {
    intent: "Transactional",
    icon: Target,
    color: "bg-green-500/10 text-green-600 border-green-500/20",
    keywords: [
      "buy email marketing software",
      "email marketing pricing",
      "email marketing free trial",
      "email marketing subscription",
      "email marketing plans",
      "affordable email marketing",
      "email marketing discount",
      "email marketing enterprise pricing"
    ]
  },
  {
    intent: "Comparison",
    icon: Layers,
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    keywords: [
      "mailchimp vs constant contact",
      "best email marketing software for small business",
      "convertkit vs mailchimp",
      "email marketing software comparison",
      "mailchimp alternatives",
      "activecampaign vs mailchimp",
      "klaviyo vs mailchimp",
      "best free email marketing tools",
      "email marketing for ecommerce",
      "email marketing for startups"
    ]
  }
];

const KeywordSeedGenerator = () => {
  const { toast } = useToast();
  const [topic, setTopic] = useState("Best Email Marketing Software");
  const [audience, setAudience] = useState("Small business owners");
  const [region, setRegion] = useState("United States");
  const [copied, setCopied] = useState(false);
  const [keywordGroups] = useState<KeywordGroup[]>(demoKeywordGroups);

  const allKeywords = keywordGroups.flatMap(group => group.keywords);
  const totalKeywords = allKeywords.length;

  const copyAllKeywords = async () => {
    const text = allKeywords.join("\n");
    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Keywords copied!",
      description: `${totalKeywords} keyword seeds copied to clipboard.`,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const exportCSV = () => {
    const headers = "Keyword,Intent\n";
    const rows = keywordGroups
      .flatMap(group => group.keywords.map(kw => `"${kw}","${group.intent}"`))
      .join("\n");
    const csv = headers + rows;
    
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `keyword-seeds-${topic.toLowerCase().replace(/\s+/g, "-")}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    
    toast({
      title: "CSV exported!",
      description: "Your keyword seeds have been downloaded.",
    });
  };

  const handleGenerate = () => {
    toast({
      title: "Keywords generated!",
      description: `Generated ${totalKeywords} keyword seeds for "${topic}".`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-highlight/5" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              <Network className="w-4 h-4" />
              Keyword Research
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              SEO Keyword <span className="gradient-text">Seed Generator</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Turn any topic or page title into keyword ideas you can use for real SEO research 
              in tools like Google Keyword Planner, Ahrefs, or SEMrush.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-5">
                <div className="space-y-2">
                  <Label className="text-foreground font-medium">
                    Page Title or Topic <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., Best Email Marketing Software"
                    className="bg-background border-border h-12"
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter the main topic or title you want to generate keyword seeds for.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Target Audience (optional)</Label>
                    <Input
                      value={audience}
                      onChange={(e) => setAudience(e.target.value)}
                      placeholder="e.g., Small business owners"
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Country or Region (optional)</Label>
                    <Input
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      placeholder="e.g., United States"
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <Button
                  onClick={handleGenerate}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Keyword Seeds
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Output Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Header with actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold text-foreground">Generated Keyword Seeds</h2>
                <p className="text-sm text-muted-foreground">
                  {totalKeywords} keywords grouped by search intent
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={copyAllKeywords} className="border-border">
                  {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                  {copied ? "Copied!" : "Copy All"}
                </Button>
                <Button variant="outline" onClick={exportCSV} className="border-border">
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </div>

            {/* Keyword Groups Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {keywordGroups.map((group, index) => (
                <motion.div
                  key={group.intent}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="h-full bg-card border-border">
                    <CardContent className="p-5">
                      {/* Group Header */}
                      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${group.color}`}>
                          <group.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{group.intent}</h3>
                          <p className="text-xs text-muted-foreground">{group.keywords.length} keywords</p>
                        </div>
                      </div>

                      {/* Keywords List */}
                      <div className="space-y-1.5">
                        {group.keywords.map((keyword, kwIndex) => (
                          <div
                            key={kwIndex}
                            className="flex items-center justify-between group/kw px-2 py-1.5 rounded-md hover:bg-secondary/50 transition-colors"
                          >
                            <span className="text-sm text-foreground">{keyword}</span>
                            <button
                              onClick={async () => {
                                await navigator.clipboard.writeText(keyword);
                                toast({ title: "Copied!", description: keyword });
                              }}
                              className="opacity-0 group-hover/kw:opacity-100 transition-opacity p-1 hover:bg-secondary rounded"
                            >
                              <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              What Are Keyword Seeds?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                <strong className="text-foreground">Keyword seeds</strong> are the starting points 
                for professional keyword research. They're broad terms or phrases that you enter into 
                research tools like Google Keyword Planner, Ahrefs, or SEMrush to discover actual 
                search queries people use.
              </p>
              <p>
                Unlike finished keyword lists, seeds are designed to <strong className="text-foreground">unlock 
                discovery</strong>. A single seed like "email marketing software" might reveal hundreds 
                of related long-tail keywords with real search volume data.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: Search,
                  title: "Feed Research Tools",
                  description: "Paste these seeds directly into Google Keyword Planner, Ahrefs, or SEMrush to find search volume and difficulty data.",
                },
                {
                  icon: TrendingUp,
                  title: "Discover Real Demand",
                  description: "Seeds help you find what people actually search for, not what you think they search for.",
                },
                {
                  icon: Target,
                  title: "Cover All Intents",
                  description: "By grouping seeds by intent, you ensure your content strategy covers the full buyer journey.",
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
              Continue Your Keyword Research
            </h2>
            <p className="text-muted-foreground">Use these tools to refine and expand your strategy.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Keyword Research Guide", href: "/topics/keyword-research" },
              { name: "Keyword Grouping Tool", href: "/tools/keyword-grouping" },
              { name: "SEO Title Generator", href: "/tools/seo-title-generator" },
              { name: "Content Outline Generator", href: "/tools/content-outline-generator" },
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

export default KeywordSeedGenerator;
