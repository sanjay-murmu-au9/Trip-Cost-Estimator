import { HeroSection } from "@/components/HeroSection";
import { CurrencyConverter } from "@/components/CurrencyConverter";
import { TripBudgetCalculator } from "@/components/TripBudgetCalculator";
import { TravelGuide } from "@/components/TravelGuide";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Calculator Section */}
      <section 
        id="calculator-section" 
        className="py-12 sm:py-16 px-4 bg-gradient-mountain"
      >
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-2">
              Calculate Your Switzerland Trip Cost
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Get accurate cost estimates for your Swiss adventure with our smart calculators
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            <CurrencyConverter />
            <TripBudgetCalculator />
          </div>
        </div>
      </section>

      <TravelGuide />
      <Footer />
    </main>
  );
};

export default Index;
