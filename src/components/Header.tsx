import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const topicItems = [
  { label: "SEO Strategy", href: "/topics/seo-strategy" },
  { label: "Keyword Research", href: "/topics/keyword-research" },
  { label: "AI & Automation", href: "#" },
  { label: "Content Marketing", href: "#" },
  { label: "Google Search", href: "#" },
];

const navItems = [
  { label: "Blog", href: "#" },
  { label: "Topics", href: "#", hasDropdown: true },
  { label: "Tools", href: "/#tools" },
  { label: "About", href: "/about" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topicsOpen, setTopicsOpen] = useState(false);
  const [mobileTopicsOpen, setMobileTopicsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm" />
      
      {/* Subtle gradient accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="container-custom relative">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-highlight flex items-center justify-center shadow-lg shadow-accent/20 group-hover:shadow-accent/40 transition-shadow duration-300">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Rank<span className="gradient-text">Tomorrow</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div 
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setTopicsOpen(true)}
                  onMouseLeave={() => setTopicsOpen(false)}
                >
                  <button
                    className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/80 group flex items-center gap-1"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${topicsOpen ? 'rotate-180' : ''}`} />
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full group-hover:w-1/2 transition-all duration-300" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {topicsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-card rounded-xl border border-border shadow-lg shadow-border/20 overflow-hidden z-50"
                      >
                        <div className="py-2">
                          {topicItems.map((topic) => (
                            <a
                              key={topic.label}
                              href={topic.href}
                              className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                            >
                              {topic.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/80 group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full group-hover:w-1/2 transition-all duration-300" />
                </a>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-foreground hover:bg-secondary/80 rounded-lg"
            >
              Sign In
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-accent to-accent/90 text-white hover:from-accent/90 hover:to-accent shadow-lg shadow-accent/25 hover:shadow-accent/40 rounded-xl px-5 transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-1.5" />
              Newsletter
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 text-foreground rounded-lg hover:bg-secondary/80 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden relative bg-background/95 backdrop-blur-xl border-b border-border/50"
          >
            <div className="container-custom py-4 space-y-1">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileTopicsOpen(!mobileTopicsOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/80 rounded-lg transition-colors"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileTopicsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {mobileTopicsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 border-l-2 border-border/50 pl-4 space-y-1"
                        >
                          {topicItems.map((topic) => (
                            <a
                              key={topic.label}
                              href={topic.href}
                              className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {topic.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/80 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
              <div className="pt-4 flex flex-col gap-2 border-t border-border/50 mt-2">
                <Button variant="ghost" className="w-full justify-start text-muted-foreground rounded-lg">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-accent to-accent/90 text-white rounded-xl shadow-lg shadow-accent/25">
                  <Mail className="w-4 h-4 mr-1.5" />
                  Newsletter
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};