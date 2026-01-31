import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileJson, 
  Copy, 
  Check, 
  Plus, 
  Trash2, 
  Sparkles,
  ArrowRight,
  Code,
  Search,
  TrendingUp,
  Globe
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

type SchemaType = 
  | "article" 
  | "faq" 
  | "howto" 
  | "breadcrumb" 
  | "webpage" 
  | "organization" 
  | "website" 
  | "software";

interface FAQItem {
  question: string;
  answer: string;
}

interface HowToStep {
  name: string;
  description: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SocialProfile {
  url: string;
}

const schemaTypeOptions = [
  { value: "article", label: "Article / BlogPosting" },
  { value: "faq", label: "FAQPage" },
  { value: "howto", label: "HowTo" },
  { value: "breadcrumb", label: "BreadcrumbList" },
  { value: "webpage", label: "WebPage" },
  { value: "organization", label: "Organization" },
  { value: "website", label: "Website (Searchbox)" },
  { value: "software", label: "SoftwareApplication" },
];

const RichSnippetGenerator = () => {
  const { toast } = useToast();
  const [schemaType, setSchemaType] = useState<SchemaType>("article");
  const [copied, setCopied] = useState(false);

  // Global fields
  const [pageUrl, setPageUrl] = useState("https://example.com/best-email-marketing-software");
  const [pageTitle, setPageTitle] = useState("Best Email Marketing Software for 2025");
  const [siteName, setSiteName] = useState("RankTomorrow");
  const [logoUrl, setLogoUrl] = useState("https://example.com/logo.png");
  const [authorName, setAuthorName] = useState("Sarah Johnson");
  const [publishDate, setPublishDate] = useState("2025-01-15");
  const [lastUpdated, setLastUpdated] = useState("2025-01-30");

  // Article fields
  const [headline, setHeadline] = useState("Best Email Marketing Software for Growing Businesses in 2025");
  const [featuredImage, setFeaturedImage] = useState("https://example.com/email-marketing-hero.jpg");

  // FAQ fields
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    { question: "What is the best email marketing software?", answer: "The best email marketing software depends on your needs, but popular options include Mailchimp, ConvertKit, and ActiveCampaign." },
    { question: "How much does email marketing software cost?", answer: "Email marketing software typically ranges from free plans for small lists to $50-300/month for advanced features and larger subscriber counts." },
  ]);

  // HowTo fields
  const [howToName, setHowToName] = useState("How to Choose Email Marketing Software");
  const [howToSteps, setHowToSteps] = useState<HowToStep[]>([
    { name: "Define Your Goals", description: "Determine what you want to achieve with email marketing, such as lead nurturing, sales, or newsletters." },
    { name: "Assess Your List Size", description: "Consider your current subscriber count and projected growth to choose a plan that scales." },
    { name: "Compare Features", description: "Look for automation, templates, integrations, and analytics that match your needs." },
  ]);
  const [totalTime, setTotalTime] = useState("PT30M");

  // Breadcrumb fields
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([
    { name: "Home", url: "https://example.com" },
    { name: "Tools", url: "https://example.com/tools" },
    { name: "Email Marketing", url: "https://example.com/tools/email-marketing" },
  ]);

  // WebPage fields
  const [pageDescription, setPageDescription] = useState("Comprehensive guide to selecting the best email marketing software for your business needs.");

  // Organization fields
  const [orgName, setOrgName] = useState("RankTomorrow");
  const [orgWebsite, setOrgWebsite] = useState("https://ranktomorrow.com");
  const [orgLogo, setOrgLogo] = useState("https://ranktomorrow.com/logo.png");
  const [socialProfiles, setSocialProfiles] = useState<SocialProfile[]>([
    { url: "https://twitter.com/ranktomorrow" },
    { url: "https://linkedin.com/company/ranktomorrow" },
  ]);

  // Website fields
  const [websiteUrl, setWebsiteUrl] = useState("https://ranktomorrow.com");
  const [searchUrlPattern, setSearchUrlPattern] = useState("https://ranktomorrow.com/search?q={search_term_string}");

  // Software fields
  const [appName, setAppName] = useState("SEO Pro Suite");
  const [appUrl, setAppUrl] = useState("https://example.com/seo-pro-suite");
  const [appDescription, setAppDescription] = useState("All-in-one SEO toolkit for keyword research, rank tracking, and content optimization.");
  const [operatingSystem, setOperatingSystem] = useState("Web, Windows, macOS");
  const [appCategory, setAppCategory] = useState("BusinessApplication");

  const generateSchema = (): object => {
    const baseContext = "https://schema.org";

    switch (schemaType) {
      case "article":
        return {
          "@context": baseContext,
          "@type": "Article",
          headline,
          image: featuredImage,
          author: {
            "@type": "Person",
            name: authorName,
          },
          publisher: {
            "@type": "Organization",
            name: siteName,
            logo: {
              "@type": "ImageObject",
              url: logoUrl,
            },
          },
          datePublished: publishDate,
          dateModified: lastUpdated,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": pageUrl,
          },
        };

      case "faq":
        return {
          "@context": baseContext,
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        };

      case "howto":
        return {
          "@context": baseContext,
          "@type": "HowTo",
          name: howToName,
          totalTime: totalTime || undefined,
          step: howToSteps.map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: step.name,
            text: step.description,
          })),
        };

      case "breadcrumb":
        return {
          "@context": baseContext,
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      case "webpage":
        return {
          "@context": baseContext,
          "@type": "WebPage",
          name: pageTitle,
          description: pageDescription,
          url: pageUrl,
          datePublished: publishDate,
          dateModified: lastUpdated,
          author: {
            "@type": "Person",
            name: authorName,
          },
          publisher: {
            "@type": "Organization",
            name: siteName,
            logo: logoUrl,
          },
        };

      case "organization":
        return {
          "@context": baseContext,
          "@type": "Organization",
          name: orgName,
          url: orgWebsite,
          logo: orgLogo,
          sameAs: socialProfiles.map((p) => p.url),
        };

      case "website":
        return {
          "@context": baseContext,
          "@type": "WebSite",
          name: siteName,
          url: websiteUrl,
          potentialAction: {
            "@type": "SearchAction",
            target: searchUrlPattern,
            "query-input": "required name=search_term_string",
          },
        };

      case "software":
        return {
          "@context": baseContext,
          "@type": "SoftwareApplication",
          name: appName,
          url: appUrl,
          description: appDescription,
          operatingSystem,
          applicationCategory: appCategory,
          author: {
            "@type": "Organization",
            name: siteName,
          },
        };

      default:
        return {};
    }
  };

  const schemaOutput = JSON.stringify(generateSchema(), null, 2);

  const copySchema = async () => {
    await navigator.clipboard.writeText(schemaOutput);
    setCopied(true);
    toast({
      title: "Schema copied!",
      description: "JSON-LD markup has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const addFaqItem = () => {
    setFaqItems([...faqItems, { question: "", answer: "" }]);
  };

  const removeFaqItem = (index: number) => {
    setFaqItems(faqItems.filter((_, i) => i !== index));
  };

  const updateFaqItem = (index: number, field: "question" | "answer", value: string) => {
    const updated = [...faqItems];
    updated[index][field] = value;
    setFaqItems(updated);
  };

  const addHowToStep = () => {
    setHowToSteps([...howToSteps, { name: "", description: "" }]);
  };

  const removeHowToStep = (index: number) => {
    setHowToSteps(howToSteps.filter((_, i) => i !== index));
  };

  const updateHowToStep = (index: number, field: "name" | "description", value: string) => {
    const updated = [...howToSteps];
    updated[index][field] = value;
    setHowToSteps(updated);
  };

  const addBreadcrumb = () => {
    setBreadcrumbs([...breadcrumbs, { name: "", url: "" }]);
  };

  const removeBreadcrumb = (index: number) => {
    setBreadcrumbs(breadcrumbs.filter((_, i) => i !== index));
  };

  const updateBreadcrumb = (index: number, field: "name" | "url", value: string) => {
    const updated = [...breadcrumbs];
    updated[index][field] = value;
    setBreadcrumbs(updated);
  };

  const addSocialProfile = () => {
    setSocialProfiles([...socialProfiles, { url: "" }]);
  };

  const removeSocialProfile = (index: number) => {
    setSocialProfiles(socialProfiles.filter((_, i) => i !== index));
  };

  const updateSocialProfile = (index: number, value: string) => {
    const updated = [...socialProfiles];
    updated[index].url = value;
    setSocialProfiles(updated);
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
              <FileJson className="w-4 h-4" />
              Schema Generator
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Rich Snippet & <span className="gradient-text">Schema Generator</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Generate valid JSON-LD structured data markup to help your pages appear as rich results in Google.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-6">
                  {/* Schema Type Selector */}
                  <div className="space-y-2">
                    <Label className="text-foreground font-medium">Schema Type</Label>
                    <Select value={schemaType} onValueChange={(v) => setSchemaType(v as SchemaType)}>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        {schemaTypeOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Global Fields */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Global Fields</h3>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Page URL</Label>
                        <Input value={pageUrl} onChange={(e) => setPageUrl(e.target.value)} className="bg-background" />
                      </div>
                      <div className="space-y-2">
                        <Label>Page Title</Label>
                        <Input value={pageTitle} onChange={(e) => setPageTitle(e.target.value)} className="bg-background" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Site Name</Label>
                        <Input value={siteName} onChange={(e) => setSiteName(e.target.value)} className="bg-background" />
                      </div>
                      <div className="space-y-2">
                        <Label>Logo URL</Label>
                        <Input value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} className="bg-background" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label>Author Name</Label>
                        <Input value={authorName} onChange={(e) => setAuthorName(e.target.value)} className="bg-background" />
                      </div>
                      <div className="space-y-2">
                        <Label>Publish Date</Label>
                        <Input type="date" value={publishDate} onChange={(e) => setPublishDate(e.target.value)} className="bg-background" />
                      </div>
                      <div className="space-y-2">
                        <Label>Last Updated</Label>
                        <Input type="date" value={lastUpdated} onChange={(e) => setLastUpdated(e.target.value)} className="bg-background" />
                      </div>
                    </div>
                  </div>

                  {/* Conditional Fields */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={schemaType}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4 pt-4 border-t border-border"
                    >
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                        {schemaTypeOptions.find((o) => o.value === schemaType)?.label} Fields
                      </h3>

                      {/* Article Fields */}
                      {schemaType === "article" && (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>Headline</Label>
                            <Input value={headline} onChange={(e) => setHeadline(e.target.value)} className="bg-background" />
                          </div>
                          <div className="space-y-2">
                            <Label>Featured Image URL</Label>
                            <Input value={featuredImage} onChange={(e) => setFeaturedImage(e.target.value)} className="bg-background" />
                          </div>
                        </div>
                      )}

                      {/* FAQ Fields */}
                      {schemaType === "faq" && (
                        <div className="space-y-4">
                          {faqItems.map((item, index) => (
                            <div key={index} className="p-4 bg-secondary/50 rounded-lg space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-foreground">Question {index + 1}</span>
                                {faqItems.length > 1 && (
                                  <Button variant="ghost" size="sm" onClick={() => removeFaqItem(index)}>
                                    <Trash2 className="w-4 h-4 text-destructive" />
                                  </Button>
                                )}
                              </div>
                              <Input
                                placeholder="Question"
                                value={item.question}
                                onChange={(e) => updateFaqItem(index, "question", e.target.value)}
                                className="bg-background"
                              />
                              <Textarea
                                placeholder="Answer"
                                value={item.answer}
                                onChange={(e) => updateFaqItem(index, "answer", e.target.value)}
                                className="bg-background"
                              />
                            </div>
                          ))}
                          <Button variant="outline" onClick={addFaqItem} className="w-full">
                            <Plus className="w-4 h-4 mr-2" /> Add Question
                          </Button>
                        </div>
                      )}

                      {/* HowTo Fields */}
                      {schemaType === "howto" && (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>HowTo Name</Label>
                            <Input value={howToName} onChange={(e) => setHowToName(e.target.value)} className="bg-background" />
                          </div>
                          <div className="space-y-2">
                            <Label>Total Time (ISO 8601, e.g., PT30M)</Label>
                            <Input value={totalTime} onChange={(e) => setTotalTime(e.target.value)} className="bg-background" placeholder="PT30M" />
                          </div>
                          {howToSteps.map((step, index) => (
                            <div key={index} className="p-4 bg-secondary/50 rounded-lg space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-foreground">Step {index + 1}</span>
                                {howToSteps.length > 1 && (
                                  <Button variant="ghost" size="sm" onClick={() => removeHowToStep(index)}>
                                    <Trash2 className="w-4 h-4 text-destructive" />
                                  </Button>
                                )}
                              </div>
                              <Input
                                placeholder="Step Name"
                                value={step.name}
                                onChange={(e) => updateHowToStep(index, "name", e.target.value)}
                                className="bg-background"
                              />
                              <Textarea
                                placeholder="Step Description"
                                value={step.description}
                                onChange={(e) => updateHowToStep(index, "description", e.target.value)}
                                className="bg-background"
                              />
                            </div>
                          ))}
                          <Button variant="outline" onClick={addHowToStep} className="w-full">
                            <Plus className="w-4 h-4 mr-2" /> Add Step
                          </Button>
                        </div>
                      )}

                      {/* Breadcrumb Fields */}
                      {schemaType === "breadcrumb" && (
                        <div className="space-y-4">
                          {breadcrumbs.map((item, index) => (
                            <div key={index} className="flex gap-3 items-start">
                              <div className="flex-1 grid sm:grid-cols-2 gap-3">
                                <Input
                                  placeholder="Page Name"
                                  value={item.name}
                                  onChange={(e) => updateBreadcrumb(index, "name", e.target.value)}
                                  className="bg-background"
                                />
                                <Input
                                  placeholder="Page URL"
                                  value={item.url}
                                  onChange={(e) => updateBreadcrumb(index, "url", e.target.value)}
                                  className="bg-background"
                                />
                              </div>
                              {breadcrumbs.length > 1 && (
                                <Button variant="ghost" size="icon" onClick={() => removeBreadcrumb(index)}>
                                  <Trash2 className="w-4 h-4 text-destructive" />
                                </Button>
                              )}
                            </div>
                          ))}
                          <Button variant="outline" onClick={addBreadcrumb} className="w-full">
                            <Plus className="w-4 h-4 mr-2" /> Add Breadcrumb
                          </Button>
                        </div>
                      )}

                      {/* WebPage Fields */}
                      {schemaType === "webpage" && (
                        <div className="space-y-2">
                          <Label>Page Description</Label>
                          <Textarea
                            value={pageDescription}
                            onChange={(e) => setPageDescription(e.target.value)}
                            className="bg-background"
                            rows={3}
                          />
                        </div>
                      )}

                      {/* Organization Fields */}
                      {schemaType === "organization" && (
                        <div className="space-y-4">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>Organization Name</Label>
                              <Input value={orgName} onChange={(e) => setOrgName(e.target.value)} className="bg-background" />
                            </div>
                            <div className="space-y-2">
                              <Label>Website URL</Label>
                              <Input value={orgWebsite} onChange={(e) => setOrgWebsite(e.target.value)} className="bg-background" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label>Logo URL</Label>
                            <Input value={orgLogo} onChange={(e) => setOrgLogo(e.target.value)} className="bg-background" />
                          </div>
                          <div className="space-y-3">
                            <Label>Social Profile URLs</Label>
                            {socialProfiles.map((profile, index) => (
                              <div key={index} className="flex gap-3">
                                <Input
                                  placeholder="https://twitter.com/yourhandle"
                                  value={profile.url}
                                  onChange={(e) => updateSocialProfile(index, e.target.value)}
                                  className="bg-background flex-1"
                                />
                                {socialProfiles.length > 1 && (
                                  <Button variant="ghost" size="icon" onClick={() => removeSocialProfile(index)}>
                                    <Trash2 className="w-4 h-4 text-destructive" />
                                  </Button>
                                )}
                              </div>
                            ))}
                            <Button variant="outline" onClick={addSocialProfile} size="sm">
                              <Plus className="w-4 h-4 mr-2" /> Add Profile
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Website Fields */}
                      {schemaType === "website" && (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>Website URL</Label>
                            <Input value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} className="bg-background" />
                          </div>
                          <div className="space-y-2">
                            <Label>Search URL Pattern</Label>
                            <Input
                              value={searchUrlPattern}
                              onChange={(e) => setSearchUrlPattern(e.target.value)}
                              className="bg-background"
                              placeholder="https://example.com/search?q={search_term_string}"
                            />
                            <p className="text-xs text-muted-foreground">
                              Use {"{search_term_string}"} where the query should go.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Software Fields */}
                      {schemaType === "software" && (
                        <div className="space-y-4">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>Application Name</Label>
                              <Input value={appName} onChange={(e) => setAppName(e.target.value)} className="bg-background" />
                            </div>
                            <div className="space-y-2">
                              <Label>Application URL</Label>
                              <Input value={appUrl} onChange={(e) => setAppUrl(e.target.value)} className="bg-background" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label>Description</Label>
                            <Textarea value={appDescription} onChange={(e) => setAppDescription(e.target.value)} className="bg-background" rows={2} />
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>Operating System</Label>
                              <Input value={operatingSystem} onChange={(e) => setOperatingSystem(e.target.value)} className="bg-background" placeholder="Web, Windows, macOS" />
                            </div>
                            <div className="space-y-2">
                              <Label>Category</Label>
                              <Input value={appCategory} onChange={(e) => setAppCategory(e.target.value)} className="bg-background" placeholder="BusinessApplication" />
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <Button
                    onClick={() => toast({ title: "Schema updated!", description: "Your JSON-LD output has been refreshed." })}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Schema
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Output */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:sticky lg:top-24 lg:self-start"
            >
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Code className="w-5 h-5 text-accent" />
                      <h3 className="font-semibold text-foreground">JSON-LD Output</h3>
                    </div>
                    <Button variant="outline" size="sm" onClick={copySchema}>
                      {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                      {copied ? "Copied" : "Copy"}
                    </Button>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-foreground font-mono whitespace-pre-wrap break-words">
                      <code>{`<script type="application/ld+json">\n${schemaOutput}\n</script>`}</code>
                    </pre>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Copy this code and paste it into the <code className="bg-secondary px-1 rounded">&lt;head&gt;</code> section of your HTML.
                  </p>
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
              What is Schema Markup?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                <strong className="text-foreground">Schema markup</strong> (structured data) is a standardized format for providing information about a page and classifying its content. When you add JSON-LD schema to your pages, you help search engines understand your content better.
              </p>
              <p>
                This understanding can lead to <strong className="text-foreground">rich snippets</strong> in search results — enhanced listings that display additional information like star ratings, FAQs, how-to steps, or author details directly in Google.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: Search,
                  title: "Improved Visibility",
                  description: "Rich snippets stand out in search results, increasing your click-through rate by up to 30%.",
                },
                {
                  icon: TrendingUp,
                  title: "Better Rankings",
                  description: "While not a direct ranking factor, structured data helps Google understand and trust your content.",
                },
                {
                  icon: Globe,
                  title: "Voice Search Ready",
                  description: "Schema helps voice assistants like Google Assistant and Alexa find and read your content.",
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
              Related Tools & Resources
            </h2>
            <p className="text-muted-foreground">Continue building your SEO strategy.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "SEO Title Generator", href: "/tools/seo-title-generator" },
              { name: "Content Outline Generator", href: "/tools/content-outline-generator" },
              { name: "Keyword Research", href: "/topics/keyword-research" },
              { name: "SEO Strategy", href: "/topics/seo-strategy" },
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

export default RichSnippetGenerator;
