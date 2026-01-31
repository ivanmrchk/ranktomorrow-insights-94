import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Eye, 
  Calendar, 
  Clock, 
  User, 
  ChevronRight,
  Sparkles,
  FileText,
  Layers,
  Code2,
  ArrowRight,
  Mail
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Demo article data - would come from CMS/API in production
const articleData = {
  slug: "ai-content-optimization-strategies",
  category: "AI & Automation",
  categorySlug: "ai-automation",
  title: "AI Content Optimization: 10 Strategies That Actually Work in 2024",
  excerpt: "Discover how leading SEO teams are using AI to optimize content at scale without sacrificing quality or authenticity.",
  author: {
    name: "Sarah Chen",
    avatar: "",
    role: "Head of SEO Research"
  },
  publishDate: "January 28, 2024",
  readTime: "12 min read",
  viewCount: 12483,
  content: {
    intro: `The landscape of content optimization has fundamentally shifted. What once required hours of manual analysis can now be accomplished in minutes with the right AI tools and strategies. But here's the catch—not all AI optimization approaches are created equal.

After analyzing over 500 top-ranking pages and interviewing dozens of SEO professionals, we've identified the strategies that consistently deliver results. This isn't about replacing human creativity; it's about augmenting it.`,
    sections: [
      {
        heading: "Understanding AI-Powered Content Analysis",
        content: `Before diving into tactics, it's crucial to understand how modern AI analyzes content differently than traditional tools.

Traditional SEO tools focus on keyword density and basic readability metrics. AI-powered analysis goes deeper:

- **Semantic understanding**: AI can identify topic coverage gaps by understanding related concepts, not just keywords
- **User intent matching**: Advanced models can assess how well content addresses the underlying question behind a search
- **Competitive positioning**: AI can analyze what makes top-ranking content successful and identify opportunities

The key insight here is that AI doesn't just count—it comprehends. This fundamentally changes our approach to optimization.`
      },
      {
        heading: "Strategy 1: Semantic Gap Analysis",
        content: `The first strategy leverages AI's ability to understand topic relationships. Here's how to implement it:

1. **Input your target keyword** into an AI analysis tool
2. **Generate a semantic map** of related concepts and entities
3. **Compare against your content** to identify missing topics
4. **Prioritize gaps** based on search intent alignment

This approach typically reveals 15-20% more relevant topics than traditional keyword research alone.

**Pro tip**: Focus on gaps that align with user questions. These often represent featured snippet opportunities.`
      },
      {
        heading: "Strategy 2: Dynamic Content Structuring",
        content: `AI can analyze top-performing content structures and recommend optimal organization for your specific topic.

Key elements to optimize:
- Heading hierarchy and flow
- Paragraph length variation
- Strategic use of lists and tables
- Callout and highlight placement

\`\`\`
// Example: AI-suggested content structure
{
  "optimal_structure": {
    "intro_length": "150-200 words",
    "sections": 8-12,
    "avg_section_length": "250-400 words",
    "list_ratio": "20-30%",
    "image_frequency": "every 300-400 words"
  }
}
\`\`\`

The data shows that well-structured content has a 34% higher chance of ranking in the top 3 positions.`
      },
      {
        heading: "Strategy 3: Intent-Aligned Optimization",
        content: `Different search intents require different optimization approaches. AI can help classify and optimize for:

**Informational Intent**
- Comprehensive coverage
- Clear explanations
- Supporting data and examples

**Commercial Intent**
- Comparison frameworks
- Pros and cons analysis
- Clear recommendations

**Transactional Intent**
- Direct value propositions
- Trust signals
- Clear calls to action

Use AI to analyze the SERP for your target keyword and determine the dominant intent, then structure your content accordingly.`
      },
      {
        heading: "Strategy 4: E-E-A-T Signal Enhancement",
        content: `Experience, Expertise, Authoritativeness, and Trustworthiness signals can be systematically improved with AI assistance:

- **Author credentials**: AI can suggest where to add expertise indicators
- **Source citations**: Automated identification of claimable statements needing citations
- **First-hand experience**: Prompts to add personal insights and case studies
- **Trust elements**: Recommendations for transparency additions

Our research shows content with strong E-E-A-T signals ranks 2.3x better for YMYL topics.`
      },
      {
        heading: "Strategy 5: Readability Optimization",
        content: `Beyond basic Flesch-Kincaid scores, AI can optimize for:

- Cognitive load management
- Information density balance
- Engagement hooks placement
- Transition effectiveness

The goal isn't dumbing down content—it's making complex information accessible without sacrificing depth.

**Key metrics to track**:
- Time on page
- Scroll depth
- Return visits
- Social shares`
      }
    ]
  },
  faqs: [
    {
      question: "How does AI content optimization differ from traditional SEO?",
      answer: "AI content optimization uses machine learning to understand semantic relationships, user intent, and content quality at a deeper level than traditional keyword-focused SEO. It can analyze patterns across thousands of top-ranking pages and provide actionable recommendations based on what actually works, not just theoretical best practices."
    },
    {
      question: "Will AI-optimized content be penalized by Google?",
      answer: "No, using AI for content optimization is not against Google's guidelines. Google's stance is against low-quality, auto-generated content, not AI-assisted optimization. The key is using AI to enhance human-created content, not replace human insight and expertise entirely."
    },
    {
      question: "How long does it take to see results from AI optimization?",
      answer: "Most sites see measurable improvements within 4-8 weeks of implementing AI-optimized content strategies. However, significant ranking changes typically occur within 2-3 months, depending on your domain authority, competition level, and how comprehensive your optimization efforts are."
    },
    {
      question: "What's the best AI tool for content optimization?",
      answer: "The best tool depends on your specific needs. For semantic analysis, tools like Clearscope and Surfer SEO excel. For content generation assistance, Claude and GPT-4 are leading options. For technical SEO automation, platforms like RankTomorrow's suite of tools provide specialized functionality."
    },
    {
      question: "Can AI optimization work for any industry?",
      answer: "Yes, AI content optimization principles apply across industries, though implementation varies. B2B, e-commerce, SaaS, and publishing all benefit from AI optimization. The key is training AI tools on industry-specific data and combining automated insights with domain expertise."
    }
  ],
  relatedArticles: [
    {
      title: "How to Use ChatGPT for Keyword Research",
      excerpt: "A practical guide to leveraging AI for discovering untapped keyword opportunities.",
      readTime: "8 min",
      slug: "chatgpt-keyword-research"
    },
    {
      title: "Automating Technical SEO Audits with AI",
      excerpt: "Save hours on technical audits by implementing intelligent automation.",
      readTime: "10 min",
      slug: "ai-technical-seo-audits"
    },
    {
      title: "The Future of AI in Search: What SEOs Need to Know",
      excerpt: "Prepare for the next wave of AI-driven search changes.",
      readTime: "15 min",
      slug: "future-ai-search"
    },
    {
      title: "Building an AI-Powered Content Workflow",
      excerpt: "Create efficient content production pipelines with intelligent automation.",
      readTime: "11 min",
      slug: "ai-content-workflow"
    },
    {
      title: "AI vs Human Writers: Finding the Right Balance",
      excerpt: "How top publications combine AI efficiency with human creativity.",
      readTime: "9 min",
      slug: "ai-vs-human-writers"
    },
    {
      title: "Measuring AI Content Performance",
      excerpt: "Track the ROI of your AI content investments with these metrics.",
      readTime: "7 min",
      slug: "measuring-ai-content"
    }
  ]
};

const seoTools = [
  {
    title: "SEO Title Generator",
    description: "Create click-worthy titles optimized for search",
    icon: Sparkles,
    href: "/tools/seo-title-generator"
  },
  {
    title: "Content Outline Generator",
    description: "Build comprehensive outlines that rank",
    icon: FileText,
    href: "/tools/content-outline-generator"
  },
  {
    title: "Keyword Grouping Tool",
    description: "Organize keywords into strategic clusters",
    icon: Layers,
    href: "/tools/keyword-grouping"
  },
  {
    title: "Rich Snippet Generator",
    description: "Generate schema markup for enhanced visibility",
    icon: Code2,
    href: "/tools/rich-snippet-generator"
  }
];

// Ad placeholder component
const AdPlacement = ({ position }: { position: string }) => (
  <div className="my-8 py-6 px-4 bg-muted/30 border border-border/50 rounded-lg text-center">
    <span className="text-xs text-muted-foreground uppercase tracking-wider">Sponsored</span>
    <div className="mt-2 h-20 flex items-center justify-center text-muted-foreground/50">
      <span className="text-sm">Ad Placement — {position}</span>
    </div>
  </div>
);

const ArticleTemplate = () => {
  const { slug } = useParams();

  // Generate structured data
  useEffect(() => {
    // Article Schema
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": articleData.title,
      "description": articleData.excerpt,
      "author": {
        "@type": "Person",
        "name": articleData.author.name
      },
      "publisher": {
        "@type": "Organization",
        "name": "RankTomorrow",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ranktomorrow.com/logo.png"
        }
      },
      "datePublished": "2024-01-28",
      "dateModified": "2024-01-28",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://ranktomorrow.com/ai-automation/${slug}`
      }
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": articleData.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ranktomorrow.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "AI & Automation",
          "item": "https://ranktomorrow.com/topics/ai-automation"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": articleData.title
        }
      ]
    };

    // Add schemas to head
    const addSchema = (schema: object, id: string) => {
      let script = document.getElementById(id) as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.id = id;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    };

    addSchema(articleSchema, "article-schema");
    addSchema(faqSchema, "faq-schema");
    addSchema(breadcrumbSchema, "breadcrumb-schema");

    return () => {
      ["article-schema", "faq-schema", "breadcrumb-schema"].forEach(id => {
        const script = document.getElementById(id);
        if (script) script.remove();
      });
    };
  }, [slug]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="container-custom mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/topics/ai-automation">AI & Automation</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="max-w-[200px] truncate">
                  {articleData.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Article Header */}
        <article className="container-custom">
          <header className="max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/topics/ai-automation">
                <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-0">
                  {articleData.category}
                </Badge>
              </Link>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {articleData.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {articleData.excerpt}
              </p>
              
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-t border-b border-border py-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-highlight flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{articleData.author.name}</p>
                    <p className="text-xs">{articleData.author.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 ml-auto sm:ml-0">
                  <Calendar className="w-4 h-4" />
                  <span>{articleData.publishDate}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{articleData.readTime}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{articleData.viewCount.toLocaleString()} views</span>
                </div>
              </div>
            </motion.div>
          </header>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {/* Introduction */}
              <div className="text-lg leading-relaxed text-foreground/90 whitespace-pre-line mb-8">
                {articleData.content.intro}
              </div>

              {/* Ad Placement 1: After Introduction */}
              <AdPlacement position="After Introduction" />

              {/* Content Sections */}
              {articleData.content.sections.slice(0, 2).map((section, index) => (
                <section key={index} className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
                    {section.heading}
                  </h2>
                  <div className="text-foreground/90 leading-relaxed whitespace-pre-line prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm">
                    {section.content.split("```").map((part, i) => 
                      i % 2 === 1 ? (
                        <pre key={i} className="bg-muted/50 border border-border rounded-lg p-4 overflow-x-auto my-4">
                          <code className="text-sm text-foreground/90">{part.replace(/^\w+\n/, "")}</code>
                        </pre>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}
                  </div>
                </section>
              ))}

              {/* Related SEO Tools Block */}
              <div className="my-12 p-6 bg-gradient-to-br from-accent/5 to-highlight/5 rounded-2xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  Related SEO Tools
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {seoTools.map((tool) => (
                    <Link
                      key={tool.href}
                      to={tool.href}
                      className="flex items-start gap-3 p-3 rounded-lg bg-background/80 hover:bg-background border border-border/50 hover:border-accent/30 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                        <tool.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                          {tool.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {tool.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* More Content Sections */}
              {articleData.content.sections.slice(2, 4).map((section, index) => (
                <section key={index + 2} className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
                    {section.heading}
                  </h2>
                  <div className="text-foreground/90 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </section>
              ))}

              {/* Ad Placement 2: Mid-Article */}
              <AdPlacement position="Mid-Article" />

              {/* Remaining Content Sections */}
              {articleData.content.sections.slice(4).map((section, index) => (
                <section key={index + 4} className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
                    {section.heading}
                  </h2>
                  <div className="text-foreground/90 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </section>
              ))}

              {/* Ad Placement 3: Before FAQ */}
              <AdPlacement position="Before FAQ" />

              {/* FAQ Section */}
              <section className="my-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {articleData.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="border-border">
                      <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </motion.div>
          </div>
        </article>

        {/* Recommended Content */}
        <section className="container-custom mt-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articleData.relatedArticles.map((article, index) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card border-border hover:border-accent/30 hover:shadow-lg transition-all group">
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3 bg-accent/10 text-accent border-0 text-xs">
                        AI & Automation
                      </Badge>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                        <Link
                          to={`/ai-automation/${article.slug}`}
                          className="text-sm text-accent font-medium flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          Read
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="container-custom mt-16">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-accent/10 via-background to-highlight/10 border border-border text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-highlight flex items-center justify-center mx-auto mb-6">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Stay Ahead of SEO & AI Updates
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Join 5,200+ SEO professionals getting actionable insights every week.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 bg-background border-border"
                />
                <Button size="lg" className="h-12 bg-accent text-accent-foreground hover:bg-accent/90">
                  Join Newsletter
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleTemplate;
