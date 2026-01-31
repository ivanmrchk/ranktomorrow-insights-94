import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, FileText, Info, Cookie, Users, Clock, Lock, UserCheck } from "lucide-react";

const PrivacyPolicy = () => {
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
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Legal</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Privacy <span className="gradient-text">Policy</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                How we collect, use, and protect your personal information.
              </p>
              <p className="text-sm text-muted-foreground">Last updated: January 2025</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto space-y-12">
              
              {/* Introduction */}
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  At <strong className="text-foreground">RankTomorrow</strong>, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights regarding your information.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By using our website, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
                </div>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Information You Provide</h3>
                    <p className="mb-3">We collect information you voluntarily provide when you:</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">Subscribe to our newsletter</strong> — We collect your email address to send you SEO insights, content updates, and occasional promotional material.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">Contact us</strong> — If you reach out via email or contact forms, we collect the information you provide in your message.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">Use our tools</strong> — Some of our SEO tools may require you to input data. We do not store this data on our servers unless explicitly stated.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Information Collected Automatically</h3>
                    <p className="mb-3">When you visit RankTomorrow, we automatically collect certain technical information:</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">Device information</strong> — Browser type, operating system, device type</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">Usage data</strong> — Pages visited, time spent on pages, referring website</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">IP address</strong> — Collected in anonymized or aggregated form for analytics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">Cookies and similar technologies</strong> — See our Cookies section below</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Info className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>We use the information we collect to:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Deliver our newsletter</strong> — Send you the content you signed up for, including articles, guides, and updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Improve our website</strong> — Analyze how visitors use our site to enhance content, navigation, and user experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Respond to inquiries</strong> — Reply to your questions, feedback, or support requests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Display relevant advertising</strong> — Show ads that may be relevant to your interests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Ensure security</strong> — Protect against spam, abuse, and unauthorized access</span>
                    </li>
                  </ul>
                  <p className="font-medium text-foreground">We do not sell your personal information to third parties.</p>
                </div>
              </div>

              {/* Cookies */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Cookie className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Cookies</h2>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>We use cookies and similar tracking technologies to improve your experience on our website. Cookies are small text files stored on your device that help us:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Remember your preferences</strong> — Such as cookie consent choices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Analyze traffic</strong> — Understand how visitors interact with our site</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Deliver advertising</strong> — Show relevant ads and measure their effectiveness</span>
                    </li>
                  </ul>
                  <p>You can manage your cookie preferences through our cookie consent banner or your browser settings. For more details, see our <a href="/cookie-policy" className="text-accent hover:underline">Cookie Policy</a>.</p>
                </div>
              </div>

              {/* Third-Party Services */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Third-Party Services</h2>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>We use trusted third-party services to operate our website:</p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Analytics</h3>
                      <p>We use Google Analytics to understand how visitors use our site. Google Analytics collects anonymized data about page views, session duration, and traffic sources.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Email Marketing</h3>
                      <p>Our newsletter is managed through third-party email service providers. When you subscribe, your email address is stored securely with our provider and used solely to deliver our newsletter.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advertising & Affiliates */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-highlight/5 border border-accent/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <line x1="9" y1="21" x2="9" y2="9" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Advertising & Affiliate Disclosure</h2>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Display Advertising</h3>
                    <p>RankTomorrow displays advertisements through third-party ad networks. These networks may use cookies to deliver ads based on your interests and browsing history.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Affiliate Links</h3>
                    <p>Some content on RankTomorrow contains affiliate links. When you click these links and make a purchase, we may earn a commission at no additional cost to you.</p>
                    <p className="mt-2"><strong className="text-foreground">Disclosure:</strong> Affiliate relationships do not influence our editorial content. We only recommend tools and services we believe provide genuine value.</p>
                  </div>
                </div>
              </div>

              {/* Data Retention */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Data Retention</h2>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>We retain personal information only as long as necessary:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Newsletter subscribers</strong> — Your email is retained until you unsubscribe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Analytics data</strong> — Aggregated and anonymized data may be retained indefinitely</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Contact inquiries</strong> — Retained for up to 2 years for reference purposes</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Your Rights */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Your Rights</h2>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Right to access</strong> — Request a copy of the personal data we hold about you</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Right to rectification</strong> — Request correction of inaccurate or incomplete data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Right to erasure</strong> — Request deletion of your personal data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Right to withdraw consent</strong> — Withdraw consent for data processing at any time</span>
                    </li>
                  </ul>
                  <p>To exercise any of these rights, please contact us at <a href="mailto:privacy@ranktomorrow.com" className="text-accent hover:underline">privacy@ranktomorrow.com</a>.</p>
                </div>
              </div>

              {/* Security */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Security</h2>
                </div>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              {/* Contact */}
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border text-center">
                <h2 className="text-xl font-bold text-foreground mb-2">Questions About This Policy?</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy, please contact us.
                </p>
                <a href="mailto:privacy@ranktomorrow.com" className="inline-flex items-center gap-2 text-accent hover:underline font-medium">
                  privacy@ranktomorrow.com
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
