import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SwissButton } from "@/components/ui/swiss-button";
import { useCountry } from "@/contexts/CountryContext";
import {
  Plane,
  Hotel,
  Utensils,
  MapPin,
  Calendar,
  CreditCard,
  Lightbulb,
  Train,
  Mountain,
  Camera,
  Calculator
} from "lucide-react";

export const TravelGuide = () => {
  const { selectedCountry } = useCountry();

  // Dynamic content based on country
  const content = {
    india: {
      title: "Complete Switzerland Travel Guide 2025",
      subtitle: "Everything you need to know for planning your perfect Swiss Alps vacation from India. From budget planning to money-saving tips, we've got you covered.",
      flightText: "Direct flights from major Indian cities:",
      flightRoutes: [
        { route: "Delhi/Mumbai → Zurich", cost: "₹45,000-75,000" },
        { route: "Connecting flights", cost: "₹35,000-60,000" }
      ],
      accommodation: [
        { type: "Budget Hotels/Hostels", cost: "₹7,000-10,000" },
        { type: "Mid-range Hotels", cost: "₹12,000-20,000" },
        { type: "Luxury Hotels", cost: "₹25,000+" }
      ],
      dailyExpenses: [
        { type: "Food & Dining", cost: "₹3,000-5,000" },
        { type: "Local Transport", cost: "₹1,000-2,000" },
        { type: "Activities", cost: "₹2,000-8,000" }
      ],
      visaInfo: "Valid passport (no visa required for Indians up to 90 days)"
    },
    usa: {
      title: "Complete Switzerland Travel Guide 2025",
      subtitle: "Everything you need to know for planning your perfect Swiss Alps vacation from USA. From budget planning to money-saving tips, we've got you covered.",
      flightText: "Direct flights from major US cities:",
      flightRoutes: [
        { route: "NYC/Washington DC → Zurich", cost: "$800-1,200" },
        { route: "West Coast → Zurich", cost: "$900-1,400" }
      ],
      accommodation: [
        { type: "Budget Hotels/Hostels", cost: "$100-130" },
        { type: "Mid-range Hotels", cost: "$180-250" },
        { type: "Luxury Hotels", cost: "$400+" }
      ],
      dailyExpenses: [
        { type: "Food & Dining", cost: "$40-60" },
        { type: "Local Transport", cost: "$15-25" },
        { type: "Activities", cost: "$50-100" }
      ],
      visaInfo: "Valid passport (no visa required for US citizens up to 90 days)"
    }
  };

  const currentContent = content[selectedCountry];
  return (
    <section className="py-16 px-4 bg-gradient-mountain">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Main Guide Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            {currentContent.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Cost Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Flight Costs */}
          <Card className="shadow-card hover:shadow-alpine transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plane className="w-5 h-5 text-primary mr-2" />
                Flight Costs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{currentContent.flightText}</p>
                <div className="space-y-1">
                  {currentContent.flightRoutes.map((flight, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-sm">{flight.route}</span>
                      <Badge variant="secondary">{flight.cost}</Badge>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  💡 Book 3-4 months in advance for best rates
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Accommodation */}
          <Card className="shadow-card hover:shadow-alpine transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Hotel className="w-5 h-5 text-primary mr-2" />
                Accommodation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                {currentContent.accommodation.map((hotel, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{hotel.type}</span>
                    <Badge variant="outline">{hotel.cost}</Badge>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground mt-2">
                  Per night rates. Consider Airbnb for longer stays.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Daily Expenses */}
          <Card className="shadow-card hover:shadow-alpine transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Utensils className="w-5 h-5 text-primary mr-2" />
                Daily Expenses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                {currentContent.dailyExpenses.map((expense, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{expense.type}</span>
                    <Badge variant="secondary">{expense.cost}</Badge>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground mt-2">
                  Per person, per day. Mix restaurant meals with self-catering.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Money-Saving Tips */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Lightbulb className="w-6 h-6 text-accent mr-3" />
              Money-Saving Tips for Switzerland Travel
            </CardTitle>
            <CardDescription>
              Proven strategies to reduce your Switzerland trip costs without compromising on experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center">
                  <Train className="w-4 h-4 text-secondary mr-2" />
                  Transportation Savings
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Get Swiss Travel Pass for unlimited public transport (3-day pass: CHF 232)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Use Half Fare Card for 50% discount on all journeys (CHF 120)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Book train tickets online in advance for better deals</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold flex items-center">
                  <Hotel className="w-4 h-4 text-secondary mr-2" />
                  Accommodation Savings
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Stay in smaller towns and travel to major cities for day trips</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Book accommodations with kitchen facilities for self-catering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Consider hostels or guesthouses for budget-friendly options</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold flex items-center">
                  <Utensils className="w-4 h-4 text-secondary mr-2" />
                  Food & Dining
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Shop at Coop, Migros for groceries (cheaper than restaurants)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Try local bakeries for affordable breakfast and snacks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Look for lunch menus (Tagesmenu) at restaurants for better deals</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold flex items-center">
                  <Mountain className="w-4 h-4 text-secondary mr-2" />
                  Activities & Sightseeing
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Many hiking trails and viewpoints are free to access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Visit during shoulder season (May-June, Sept-Oct) for lower prices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Check for museum passes and city cards for discounted entries</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Time to Visit */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Calendar className="w-6 h-6 text-primary mr-3" />
              Best Time to Visit Switzerland in 2025
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <h4 className="font-semibold text-accent">Spring (Mar-May)</h4>
                <p className="text-sm text-muted-foreground">
                  Mild weather, fewer crowds, moderate prices. Perfect for hiking lower elevations.
                </p>
                <Badge variant="outline" className="bg-accent/10">Budget Friendly</Badge>
              </div>

              <div className="text-center space-y-2">
                <h4 className="font-semibold text-primary">Summer (Jun-Aug)</h4>
                <p className="text-sm text-muted-foreground">
                  Peak season, warm weather, all attractions open. Highest prices and crowds.
                </p>
                <Badge variant="outline" className="bg-primary/10">Peak Season</Badge>
              </div>

              <div className="text-center space-y-2">
                <h4 className="font-semibold text-accent">Autumn (Sep-Nov)</h4>
                <p className="text-sm text-muted-foreground">
                  Beautiful fall colors, pleasant weather, moderate crowds and prices.
                </p>
                <Badge variant="outline" className="bg-accent/10">Best Value</Badge>
              </div>

              <div className="text-center space-y-2">
                <h4 className="font-semibold text-secondary">Winter (Dec-Feb)</h4>
                <p className="text-sm text-muted-foreground">
                  Ski season, Christmas markets, winter sports. Higher accommodation costs in ski resorts.
                </p>
                <Badge variant="outline" className="bg-secondary/10">Winter Sports</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Essential Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="w-5 h-5 text-primary mr-2" />
                Payment & Currency Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-sm">
                <li>• Swiss Franc (CHF) is the official currency</li>
                <li>• Credit cards widely accepted, carry some cash</li>
                <li>• Notify your bank before travel to avoid card blocks</li>
                <li>• Use bank ATMs for better exchange rates</li>
                <li>• Tipping: 5-10% in restaurants, round up for services</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="w-5 h-5 text-primary mr-2" />
                Travel Essentials
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-sm">
                <li>• {currentContent.visaInfo}</li>
                <li>• Travel insurance is mandatory</li>
                <li>• Pack layers - weather can change quickly</li>
                <li>• Comfortable walking shoes essential</li>
                <li>• Universal power adapter (Type C plugs)</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-semibold">Ready to Plan Your Swiss Adventure?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Use our comprehensive calculator above to estimate your exact trip costs and start planning
            your unforgettable Switzerland experience today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SwissButton
              variant="alpine"
              size="lg"
              onClick={() => document.getElementById('calculator-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calculator className="w-5 h-5 mr-2" />
              Calculate My Trip Cost Now
            </SwissButton>
            <SwissButton
              variant="outline"
              size="lg"
              onClick={() => {
                const guideUrl = selectedCountry === 'usa' ? '/cost-guide/us-visitor' : '/cost-guide';
                window.open(guideUrl, '_blank');
              }}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Complete Cost Guide
            </SwissButton>
            <SwissButton
              variant="secondary"
              size="lg"
              onClick={() => window.open('/blog', '_blank')}
            >
              <Camera className="w-5 h-5 mr-2" />
              Travel Blog
            </SwissButton>
          </div>
        </div>
      </div>
    </section>
  );
};