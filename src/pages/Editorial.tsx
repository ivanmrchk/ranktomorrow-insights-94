import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Pencil, Info, FileText, Bot, Shield, HelpCircle } from "lucide-react";

const Editorial = () => {
  const processSteps = [
    { number: 1, title: "Topic Selection", description: "Topics are chosen based on real search demand, audience needs, and gaps in existing coverage." },
    { number: 2, title: "Keyword & SERP Analysis", description: "We conduct thorough keyword research and analyze search engine results pages to understand competitive positioning." },
    { number: 3, title: "AI-Assisted Drafting", description: "Initial drafts leverage AI tools to synthesize research, structure content, and accelerate the writing process." },
    { number: 4, title: "Human Review & Refinement", description: "Every draft is reviewed and refined by our editorial team to ensure accuracy and add expert insights." },
    { number: 5, title: "Fact-Checking & Optimization", description: "Claims are verified against reliable sources. Content is optimized for readability and search performance." },
    { number: 6, title: "Schema & SEO Validation", description: "Final content includes proper structured data, meta information, and technical SEO elements." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
          <div className="container-custom relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
                <Pencil className="w-4 h-4" />
                <span className="text-sm font-medium">Official Author Profile</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                RankTomorrow <span className="gradient-text">Editorial Team</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                The research, AI, and editorial team behind RankTomorrow's SEO and automation content.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Info className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Who We Are</h2>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    <strong className="text-foreground">RankTomorrow</strong> is a data-driven SEO and AI research publication dedicated to helping marketers understand how search really works. We cover keyword research, content strategy, AI-powered publishing workflows, and the evolving landscape of Google search.
                  </p>
                  <p>Our content is created through a collaborative process involving:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">AI-assisted research tools</strong> — for data analysis, pattern recognition, and initial content drafting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">SEO specialists</strong> — who bring hands-on experience with search strategy and optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Editors and reviewers</strong> — who ensure accuracy, clarity, and editorial standards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Content is Created */}
        <section className="py-16 bg-secondary/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">How Content is Created</h2>
                </div>
                <p className="text-muted-foreground">
                  Every piece of content published on RankTomorrow follows a structured editorial process designed for accuracy, relevance, and search performance:
                </p>
              </div>
              
              <div className="space-y-4">
                {processSteps.map((step) => (
                  <div key={step.number} className="flex gap-4 p-4 rounded-xl bg-background border border-border">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-highlight flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-foreground font-bold">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Disclosure */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-highlight/5 border border-accent/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">AI Disclosure</h2>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    RankTomorrow uses artificial intelligence as a <strong className="text-foreground">research and drafting assistant</strong>. AI tools help us analyze data, identify patterns, and accelerate content production—but they do not operate autonomously.
                  </p>
                  <p>All AI-generated content is:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Curated and directed by our editorial team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Reviewed for accuracy and relevance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Refined to meet our quality standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Published under RankTomorrow's editorial accountability</span>
                    </li>
                  </ul>
                  <p>
                    We believe in transparency about our process. AI is a tool that enhances our capabilities—not a replacement for human judgment, expertise, and editorial responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality & Accuracy */}
        <section className="py-16 bg-secondary/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Quality & Accuracy</h2>
                </div>
                <p className="text-muted-foreground">
                  Maintaining accurate, up-to-date content is central to our editorial mission. Here's how we ensure quality:
                </p>
              </div>
              
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Verification Standards</h3>
                  <p>Claims and data points are verified against authoritative sources including official documentation, peer-reviewed research, and recognized industry publications.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Content Updates</h3>
                  <p>SEO and search landscapes evolve rapidly. We regularly review published content to update outdated information and incorporate new developments.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Corrections Policy</h3>
                  <p>If we identify errors or receive credible feedback about inaccuracies, we promptly correct the content. Significant corrections are noted transparently.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Editorial Independence</h3>
                  <p>Our editorial content is independent of commercial relationships. When we recommend tools or software, recommendations are based on merit, not sponsorship.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-accent" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Questions or Feedback?</h2>
              <p className="text-muted-foreground mb-6">
                If you have questions about our editorial process, want to report an error, or have suggestions for content, we'd like to hear from you.
              </p>
              <a href="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors">
                Learn More About RankTomorrow
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Editorial;
