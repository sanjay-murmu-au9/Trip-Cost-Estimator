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
        <div className="flex items-center justify-center mb-6 animate-float">
          <img 
            src={mountainIcon} 
            alt="Swiss Alps Mountain Peak" 
            className="w-16 h-16 mr-4"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Swiss Trip Calculator
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Plan your perfect Switzerland adventure with our comprehensive budget calculator. 
          Convert INR to CHF and estimate your complete travel costs for 2025.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <SwissButton 
            variant="swiss" 
            size="lg" 
            className="text-lg px-8 py-4 shadow-2xl"
            onClick={scrollToCalculator}
          >
            <Calculator className="w-5 h-5 mr-2" />
            Calculate My Trip Cost
          </SwissButton>
          
          <SwissButton 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20"
            onClick={scrollToCalculator}
          >
            <Plane className="w-5 h-5 mr-2" />
            Plan My Journey
          </SwissButton>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20">
            <Calculator className="w-8 h-8 text-white mb-4 mx-auto" />
            <h3 className="text-white font-semibold text-lg mb-2">Smart Calculator</h3>
            <p className="text-white/80 text-sm">Real-time currency conversion and comprehensive budget breakdown</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20">
            <MapPin className="w-8 h-8 text-white mb-4 mx-auto" />
            <h3 className="text-white font-semibold text-lg mb-2">Expert Insights</h3>
            <p className="text-white/80 text-sm">Detailed travel costs based on real Switzerland prices</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20">
            <Plane className="w-8 h-8 text-white mb-4 mx-auto" />
            <h3 className="text-white font-semibold text-lg mb-2">Complete Planning</h3>
            <p className="text-white/80 text-sm">From flights to accommodation, plan every aspect of your trip</p>
          </div>
        </div>
      </div>
    </section>
  );
};