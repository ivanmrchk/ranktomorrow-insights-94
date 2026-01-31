import { Twitter, Linkedin, Youtube, Github } from "lucide-react";

const footerLinks = {
  resources: [
    { label: "Blog", href: "#" },
    { label: "Guides", href: "#" },
    { label: "Tools", href: "#tools" },
    { label: "Newsletter", href: "#" },
  ],
  topics: [
    { label: "SEO Strategy", href: "#" },
    { label: "Keyword Research", href: "#" },
    { label: "AI & Automation", href: "#" },
    { label: "Content Marketing", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Editorial Team", href: "/static/editorial-team.html" },
    { label: "Contact", href: "#" },
    { label: "Press", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Github, href: "#", label: "GitHub" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-highlight flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">R</span>
              </div>
              <span className="text-lg font-bold text-foreground">
                Rank<span className="gradient-text">Tomorrow</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-6">
              Data-driven SEO insights and tools for modern marketers.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Topics</h4>
            <ul className="space-y-3">
              {footerLinks.topics.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RankTomorrow. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built for marketers who demand results.
          </p>
        </div>
      </div>
    </footer>
  );
};
