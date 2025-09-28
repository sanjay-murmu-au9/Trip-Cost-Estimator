import { SwissButton } from "@/components/ui/swiss-button";
import { MapPin, Calculator, Plane } from "lucide-react";
import swissHero from "@/assets/swiss-hero.jpg";
import mountainIcon from "@/assets/mountain-icon.png";

export const HeroSection = () => {
  const scrollToCalculator = () => {
    document.getElementById('calculator-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${swissHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-6 animate-float">
          <img 
            src={mountainIcon} 
            alt="Swiss Alps Mountain Peak" 
            className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-0 sm:mr-4"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center">
            Swiss Trip Calculator
          </h1>
        </div>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed text-center px-4">
          Plan your perfect Switzerland adventure with our comprehensive budget calculator. 
          Convert INR to CHF and estimate your complete travel costs for 2025.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4">
          <SwissButton 
            variant="swiss" 
            size="lg" 
            className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-2xl w-full sm:w-auto"
            onClick={scrollToCalculator}
          >
            <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Calculate My Trip Cost
          </SwissButton>
          
          <SwissButton 
            variant="outline" 
            size="lg" 
            className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 w-full sm:w-auto"
            onClick={scrollToCalculator}
          >
            <Plane className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Plan My Journey
          </SwissButton>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 px-4">
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 sm:p-6 border border-white/20 text-center">
            <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-3 sm:mb-4 mx-auto" />
            <h3 className="text-white font-semibold text-base sm:text-lg mb-2">Smart Calculator</h3>
            <p className="text-white/80 text-xs sm:text-sm">Real-time currency conversion and comprehensive budget breakdown</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 sm:p-6 border border-white/20 text-center">
            <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-3 sm:mb-4 mx-auto" />
            <h3 className="text-white font-semibold text-base sm:text-lg mb-2">Expert Insights</h3>
            <p className="text-white/80 text-xs sm:text-sm">Detailed travel costs based on real Switzerland prices</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 sm:p-6 border border-white/20 text-center sm:col-span-2 lg:col-span-1">
            <Plane className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-3 sm:mb-4 mx-auto" />
            <h3 className="text-white font-semibold text-base sm:text-lg mb-2">Complete Planning</h3>
            <p className="text-white/80 text-xs sm:text-sm">From flights to accommodation, plan every aspect of your trip</p>
          </div>
        </div>
      </div>
    </section>
  );
};