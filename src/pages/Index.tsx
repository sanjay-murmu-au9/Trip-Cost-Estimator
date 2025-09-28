import { HeroSection } from "@/components/HeroSection";
import { CurrencyConverter } from "@/components/CurrencyConverter";
import { TripBudgetCalculator } from "@/components/TripBudgetCalculator";
import { TravelGuide } from "@/components/TravelGuide";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Calculator Section */}
      <section 
        id="calculator-section" 
        className="py-16 px-4 bg-gradient-mountain"
      >
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Calculate Your Switzerland Trip Cost
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get accurate cost estimates for your Swiss adventure with our smart calculators
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <CurrencyConverter />
            <TripBudgetCalculator />
          </div>
        </div>
      </section>

      <TravelGuide />
    </main>
  );
};

export default Index;
