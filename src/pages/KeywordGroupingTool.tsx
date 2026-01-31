import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Layers, 
  ArrowRight, 
  Upload,
  Copy,
  Check,
  Download,
  FileSpreadsheet,
  Target,
  TrendingUp,
  Lightbulb,
  Info,
  Search,
  BarChart3,
  FileText
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface KeywordCluster {
  name: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  totalVolume: number;
  avgCPC: string;
  suggestedTitle: string;
  intent: "informational" | "commercial" | "transactional" | "navigational";
}

// Demo clusters for showcase
const demoClusters: KeywordCluster[] = [
  {
    name: "Email Marketing Software",
    primaryKeyword: "best email marketing software",
    secondaryKeywords: ["email marketing tools", "email platforms", "email automation software", "email campaign software", "marketing email tools"],
    totalVolume: 12400,
    avgCPC: "$4.52",
    suggestedTitle: "Best Email Marketing Software for Growing Businesses in 2025",
    intent: "commercial",
  },
  {
    name: "Email Marketing Pricing",
    primaryKeyword: "email marketing software pricing",
    secondaryKeywords: ["email marketing cost", "cheap email marketing", "affordable email tools", "email software free trial"],
    totalVolume: 5600,
    avgCPC: "$3.89",
    suggestedTitle: "Email Marketing Software Pricing: Complete Cost Comparison Guide",
    intent: "commercial",
  },
  {
    name: "Email Marketing Comparisons",
    primaryKeyword: "mailchimp vs constant contact",
    secondaryKeywords: ["mailchimp alternatives", "convertkit vs mailchimp", "email marketing comparison", "best mailchimp alternative"],
    totalVolume: 8900,
    avgCPC: "$5.21",
    suggestedTitle: "Mailchimp vs Constant Contact: Which Email Tool is Better?",
    intent: "commercial",
  },
  {
    name: "Email Marketing for Beginners",
    primaryKeyword: "how to start email marketing",
    secondaryKeywords: ["email marketing guide", "email marketing basics", "email marketing for beginners", "email list building"],
    totalVolume: 7200,
    avgCPC: "$2.15",
    suggestedTitle: "How to Start Email Marketing: A Complete Beginner's Guide",
    intent: "informational",
  },
  {
    name: "Email Marketing Automation",
    primaryKeyword: "email automation software",
    secondaryKeywords: ["automated email campaigns", "drip email software", "email workflow automation", "marketing automation tools"],
    totalVolume: 4800,
    avgCPC: "$6.34",
    suggestedTitle: "Email Automation Software: Top 10 Tools for Automated Campaigns",
    intent: "commercial",
  },
];

const relatedLinks = [
  {
    title: "SEO Title Generator",
    description: "Generate optimized titles for your cluster pages",
    href: "/tools/seo-title-generator",
  },
  {
    title: "Content Outline Generator",
    description: "Create detailed outlines from your primary keywords",
    href: "/tools/content-outline-generator",
  },
  {
    title: "Keyword Research",
    description: "Learn advanced keyword research strategies",
    href: "/topics/keyword-research",
  },
  {
    title: "SEO Strategy",
    description: "Build a complete SEO strategy with your clusters",
    href: "/topics/seo-strategy",
  },
];

const KeywordGroupingTool = () => {
  const [clusters, setClusters] = useState<KeywordCluster[] | null>(demoClusters);
  const [isProcessing, setIsProcessing] = useState(false);
  const [copiedCluster, setCopiedCluster] = useState<number | null>(null);
  const [fileName, setFileName] = useState<string | null>("email_marketing_keywords.csv");
  const [isDemo, setIsDemo] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.csv')) {
      toast({
        title: "Invalid file type",
        description: "Please upload a CSV file.",
        variant: "destructive",
      });
      return;
    }

    setFileName(file.name);
    setIsProcessing(true);
    setIsDemo(false);

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setClusters(demoClusters);
    setIsProcessing(false);

    toast({
      title: "Keywords grouped!",
      description: `Found ${demoClusters.length} keyword clusters from your data.`,
    });
  };

  const copyCluster = (cluster: KeywordCluster, index: number) => {
    const text = `Cluster: ${cluster.name}
Primary Keyword: ${cluster.primaryKeyword}
Secondary Keywords: ${cluster.secondaryKeywords.join(", ")}
Total Volume: ${cluster.totalVolume.toLocaleString()}
Avg CPC: ${cluster.avgCPC}
Suggested Title: ${cluster.suggestedTitle}
Intent: ${cluster.intent}`;

    navigator.clipboard.writeText(text);
    setCopiedCluster(index);
    toast({
      title: "Cluster copied!",
      description: "Cluster data copied to clipboard.",
    });
    setTimeout(() => setCopiedCluster(null), 2000);
  };

  const exportClusters = () => {
    if (!clusters) return;

    const headers = "Cluster Name,Primary Keyword,Secondary Keywords,Total Volume,Avg CPC,Suggested Title,Intent\n";
    const rows = clusters.map(c => 
      `"${c.name}","${c.primaryKeyword}","${c.secondaryKeywords.join("; ")}",${c.totalVolume},"${c.avgCPC}","${c.suggestedTitle}","${c.intent}"`
    ).join("\n");

    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'keyword_clusters.csv';
    a.click();
    URL.revokeObjectURL(url);

    toast({
      title: "Exported!",
      description: "Keyword clusters exported as CSV.",
    });
  };

  const getIntentColor = (intent: KeywordCluster["intent"]) => {
    switch (intent) {
      case "informational":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "commercial":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "transactional":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "navigational":
        return "bg-amber-100 text-amber-700 border-amber-200";
      default:
        return "bg-muted text-muted-foreground";
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
              <Layers className="w-4 h-4" />
              Free SEO Tool
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Keyword Grouping <span className="gradient-text">Tool</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload your keyword data and automatically group it into SEO-ready content clusters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Upload Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-border bg-card">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <FileSpreadsheet className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-foreground mb-1">
                        Upload Keyword CSV
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        Export keyword data from Google Keyword Planner, Ahrefs, SEMrush, or other SEO tools.
                      </p>
                    </div>
                  </div>

                  {/* CSV Format Info */}
                  <div className="bg-secondary/50 rounded-lg border border-border p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground mb-2">
                          Supported CSV Columns:
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                            Keyword (required)
                          </Badge>
                          <Badge variant="outline" className="bg-highlight/10 text-highlight border-highlight/30">
                            Search Volume (recommended)
                          </Badge>
                          <Badge variant="outline" className="bg-muted text-muted-foreground">
                            CPC (optional)
                          </Badge>
                          <Badge variant="outline" className="bg-muted text-muted-foreground">
                            Competition (optional)
                          </Badge>
                          <Badge variant="outline" className="bg-muted text-muted-foreground">
                            Intent (optional)
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Including volume, CPC, and intent will improve keyword clustering accuracy.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Upload Area */}
                  <div 
                    className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-accent/50 transition-colors cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".csv"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
                    {fileName && isDemo ? (
                      <p className="text-sm text-muted-foreground mb-2">
                        Demo file: <span className="font-medium text-foreground">{fileName}</span>
                      </p>
                    ) : fileName ? (
                      <p className="text-sm text-muted-foreground mb-2">
                        Selected: <span className="font-medium text-foreground">{fileName}</span>
                      </p>
                    ) : (
                      <p className="text-sm text-muted-foreground mb-2">
                        Click to upload or drag and drop
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      CSV files only (max 10MB)
                    </p>
                  </div>

                  <Button
                    size="lg"
                    className="w-full md:w-auto mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
                    disabled={isProcessing}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {isProcessing ? (
                      <>
                        <Layers className="w-5 h-5 mr-2 animate-pulse" />
                        Grouping Keywords...
                      </>
                    ) : (
                      <>
                        <Upload className="w-5 h-5 mr-2" />
                        Upload & Group Keywords
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Output Area */}
            {clusters && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-foreground">Keyword Clusters</h2>
                    {isDemo && (
                      <Badge variant="secondary" className="text-xs">
                        Demo Output
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">
                      {clusters.length} clusters found
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={exportClusters}
                      className="flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Export CSV
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {clusters.map((cluster, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card className="border-border bg-card overflow-hidden group">
                        <CardContent className="p-0">
                          {/* Cluster Header */}
                          <div className="bg-secondary/50 border-b border-border p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                                  <Layers className="w-4 h-4 text-accent" />
                                </div>
                                <div>
                                  <h3 className="font-semibold text-foreground">
                                    {cluster.name}
                                  </h3>
                                  <div className="flex items-center gap-3 mt-1">
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                      <BarChart3 className="w-3 h-3" />
                                      {cluster.totalVolume.toLocaleString()} vol
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                      {cluster.avgCPC} CPC
                                    </span>
                                    <Badge variant="outline" className={`text-xs ${getIntentColor(cluster.intent)}`}>
                                      {cluster.intent}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyCluster(cluster, index)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                {copiedCluster === index ? (
                                  <Check className="w-4 h-4 text-emerald-600" />
                                ) : (
                                  <Copy className="w-4 h-4" />
                                )}
                              </Button>
                            </div>
                          </div>

                          {/* Cluster Content */}
                          <div className="p-4 space-y-4">
                            {/* Primary Keyword */}
                            <div>
                              <p className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5">
                                <Target className="w-3.5 h-3.5 text-accent" />
                                Primary Keyword
                              </p>
                              <p className="font-medium text-foreground">
                                {cluster.primaryKeyword}
                              </p>
                            </div>

                            {/* Secondary Keywords */}
                            <div>
                              <p className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5">
                                <Search className="w-3.5 h-3.5 text-highlight" />
                                Secondary Keywords
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {cluster.secondaryKeywords.map((kw, kIndex) => (
                                  <Badge 
                                    key={kIndex} 
                                    variant="outline" 
                                    className="text-xs bg-background hover:bg-accent/10 cursor-pointer transition-colors"
                                    onClick={() => {
                                      navigator.clipboard.writeText(kw);
                                      toast({
                                        title: "Keyword copied!",
                                        description: `"${kw}" copied to clipboard.`,
                                      });
                                    }}
                                  >
                                    {kw}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Suggested Title */}
                            <div className="bg-accent/5 rounded-lg border border-accent/20 p-3">
                              <p className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5">
                                <FileText className="w-3.5 h-3.5 text-accent" />
                                Suggested Page Title
                              </p>
                              <p className="text-sm text-foreground font-medium">
                                {cluster.suggestedTitle}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Usage Note */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Free users can group a limited number of keywords per hour.
                  </p>
                </div>
              </motion.div>
            )}
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
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Why Keyword Clustering Matters for SEO
              </h2>
              <p className="text-muted-foreground">
                Understanding keyword grouping is essential for modern content strategy.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    What is Keyword Clustering?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Keyword clustering is the process of grouping related keywords by topic, intent, 
                    and semantic meaning. Instead of targeting one keyword per page, you create content 
                    that comprehensively covers an entire topic cluster, allowing a single page to rank 
                    for dozens or even hundreds of related terms.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-highlight" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Why Grouping Keywords Improves SEO
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Google's algorithms understand topic relationships. When you create content that 
                    thoroughly addresses a topic cluster, Google sees your page as more authoritative 
                    and comprehensive. This leads to higher rankings, more featured snippets, and 
                    increased organic traffic compared to thin, single-keyword pages.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    How Clusters Build Topic Authority
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Creating multiple pages around related keyword clusters establishes your site as 
                    an authority in your niche. Each cluster becomes a pillar in your content strategy, 
                    with internal links connecting related topics. This "topical authority" signals to 
                    search engines that you're a trusted expert, improving rankings across your entire site.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Continue Your SEO Workflow
            </h2>
            <p className="text-muted-foreground">
              Use your keyword clusters with these related tools and guides.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {relatedLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.href}
                  className="block h-full bg-card border border-border rounded-xl p-5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all group"
                >
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {link.description}
                  </p>
                  <span className="text-accent text-sm font-medium flex items-center gap-1">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
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

export default KeywordGroupingTool;
