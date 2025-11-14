import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/HeroSection";
import { CountrySelector } from "@/components/CountrySelector";
import { CurrencyConverter } from "@/components/CurrencyConverter";
import { TripBudgetCalculator } from "@/components/TripBudgetCalculator";
import { TravelGuide } from "@/components/TravelGuide";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Switzerland Trip Cost Calculator 2025 | Swiss Travel Budget Planner | INR to CHF Converter</title>
        <meta
          name="description"
          content="🇨🇭 Calculate Switzerland trip cost from India 2025! FREE budget planner for Indians - get accurate costs for 7-10 day Switzerland tours, visa, flights, hotels in INR. Compare Delhi, Mumbai, Bangalore departure costs."
        />
        <meta
          name="keywords"
          content="Switzerland trip cost from India, Switzerland travel cost India 2025, cost to visit Switzerland from India, Switzerland tour cost for Indians, Switzerland holiday cost from India"
        />
        <link rel="canonical" href="https://tripcostscalc.online/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
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
          
          <CountrySelector />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            <CurrencyConverter />
            <TripBudgetCalculator />
          </div>
        </div>
      </section>

      <TravelGuide />
      <Footer />
      </main>
    </>
  );
};

export default Index;
