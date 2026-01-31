import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedContent } from "@/components/FeaturedContent";
import { TopicalPillars } from "@/components/TopicalPillars";
import { TrustSection } from "@/components/TrustSection";
import { ToolsSection } from "@/components/ToolsSection";
import { EmailCapture } from "@/components/EmailCapture";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedContent />
        <TopicalPillars />
        <ToolsSection />
        <TrustSection />
        <EmailCapture />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
