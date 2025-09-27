// MingleMakers - AI-Powered Artisan Cooperative Hub

import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { MarketplacePreview } from "@/components/ui/marketplace-preview";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <MarketplacePreview />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
