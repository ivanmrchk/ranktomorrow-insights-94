import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface TopicCTAProps {
  headline: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  secondaryText?: string;
  secondaryHref?: string;
  icon: LucideIcon;
  accentColor?: string;
}

export const TopicCTA = ({
  headline,
  description,
  buttonText,
  buttonHref,
  secondaryText,
  secondaryHref,
  icon: Icon,
  accentColor = "accent",
}: TopicCTAProps) => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-5">
            <Icon className="w-6 h-6 text-accent" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {headline}
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <Link to={buttonHref}>
                {buttonText}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>

            {secondaryText && secondaryHref && (
              <Link
                to={secondaryHref}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1.5"
              >
                {secondaryText}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
