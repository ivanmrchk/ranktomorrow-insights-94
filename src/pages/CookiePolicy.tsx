import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cookie } from "lucide-react";

const CookiePolicy = () => {
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
                <Cookie className="w-4 h-4" />
                <span className="text-sm font-medium">Legal</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Cookie <span className="gradient-text">Policy</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                How we use cookies and your choices.
              </p>
              <p className="text-sm text-muted-foreground">Last updated: January 2025</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto space-y-10">
              
              <div className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide useful information to website owners.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Cookies</h2>
                <p className="text-muted-foreground mb-6">RankTomorrow uses cookies for the following purposes:</p>
                
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Essential Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies are necessary for the website to function properly. They enable core functionality such as remembering your cookie consent preference.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Cookies</h3>
                    <p className="text-muted-foreground">
                      We use analytics cookies to understand how visitors interact with our website. This helps us improve our content and user experience. These cookies are only set if you accept them.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Third-Party Cookies</h3>
                    <p className="text-muted-foreground">
                      Some pages may include content from third-party services (such as embedded videos). These services may set their own cookies. We have no control over these cookies.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Cookie Choices</h2>
                <p className="text-muted-foreground mb-4">When you first visit our website, you will see a cookie consent banner. You can:</p>
                <ul className="space-y-2 ml-4 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Accept:</strong> Allow all cookies, including analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Reject:</strong> Only essential cookies will be used</span>
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  You can also manage cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing cookies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Cookies We Use</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-border">
                        <th className="text-left py-3 pr-4 font-semibold text-foreground">Cookie Name</th>
                        <th className="text-left py-3 pr-4 font-semibold text-foreground">Purpose</th>
                        <th className="text-left py-3 font-semibold text-foreground">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-mono text-xs">cookies_accepted</td>
                        <td className="py-3 pr-4">Stores your cookie consent preference</td>
                        <td className="py-3">1 year</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-mono text-xs">_ga</td>
                        <td className="py-3 pr-4">Google Analytics - distinguishes users</td>
                        <td className="py-3">2 years</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-mono text-xs">_ga_*</td>
                        <td className="py-3 pr-4">Google Analytics - session state</td>
                        <td className="py-3">2 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Updates to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary/50 border border-border text-center">
                <h2 className="text-xl font-bold text-foreground mb-2">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions about our use of cookies, please contact us.
                </p>
                <a href="mailto:privacy@ranktomorrow.com" className="text-accent hover:underline font-medium">
                  privacy@ranktomorrow.com
                </a>
                <p className="text-muted-foreground mt-4 text-sm">
                  See also our <a href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</a> for more information.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
