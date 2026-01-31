import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Sparkles, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal = ({ isOpen, onClose }: NewsletterModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // Reset state after modal closes
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[101] px-4"
          >
            <div className="relative bg-card rounded-2xl border border-border shadow-2xl shadow-accent/10 overflow-hidden">
              {/* Decorative gradient background */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-accent/10 via-highlight/5 to-transparent" />
              <div className="absolute top-4 right-12 w-20 h-20 rounded-full bg-accent/10 blur-2xl" />
              <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-highlight/10 blur-2xl" />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-secondary/80 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Content */}
              <div className="relative p-8 pt-10">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {/* Icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.1, bounce: 0.5 }}
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-highlight flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent/25"
                      >
                        <Mail className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-foreground text-center mb-3">
                        Get Smarter SEO in Your Inbox
                      </h2>

                      {/* Subheadline */}
                      <p className="text-muted-foreground text-center mb-8 leading-relaxed">
                        Join thousands of marketers learning how to rank, grow, and automate 
                        their content with AI and real data.
                      </p>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            type="email"
                            placeholder="you@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-12 h-12 bg-background border-border text-base"
                            disabled={isLoading}
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="w-full h-12 bg-gradient-to-r from-accent to-accent/90 text-white hover:from-accent/90 hover:to-accent shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all text-base font-medium"
                        >
                          {isLoading ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                          ) : (
                            <>
                              <Sparkles className="w-4 h-4 mr-2" />
                              Join the Newsletter
                            </>
                          )}
                        </Button>
                      </form>

                      {/* Microcopy */}
                      <p className="text-xs text-muted-foreground text-center mt-4">
                        No spam. Cancel anytime.
                      </p>

                      {/* Social proof */}
                      <div className="flex items-center justify-center gap-2 mt-6 pt-6 border-t border-border">
                        <TrendingUp className="w-4 h-4 text-accent" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">5,200+</strong> SEO professionals subscribed
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-8 text-center"
                    >
                      {/* Success icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.1, bounce: 0.5 }}
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-highlight flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent/25"
                      >
                        <CheckCircle className="w-10 h-10 text-white" />
                      </motion.div>

                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-bold text-foreground mb-3"
                      >
                        Welcome to RankTomorrow 🎉
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-muted-foreground mb-6"
                      >
                        You'll get the next issue soon.
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Button
                          variant="outline"
                          onClick={handleClose}
                          className="border-border"
                        >
                          Close
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
