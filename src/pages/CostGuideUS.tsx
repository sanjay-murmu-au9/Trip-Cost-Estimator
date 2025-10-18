import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SwissButton } from "@/components/ui/swiss-button";
import { ArrowLeft, Calculator, Plane, Hotel, Utensils, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const CostGuideUS = () => {
  return (
    <main className="min-h-screen bg-gradient-mountain">
      {/* Header */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <SwissButton variant="outline" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Calculator
            </SwissButton>
          </Link>
          
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Switzerland Trip Cost from USA 2025
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete budget guide for Americans planning their Switzerland vacation
            </p>
          </div>

          <Card className="shadow-alpine mb-8">
            <CardContent className="p-6">
              <div className="bg-accent/10 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Quick Answer</h3>
                <p className="text-muted-foreground">
                  A Switzerland trip from USA costs <strong>$2,500 to $6,000</strong> per person for 7-10 days, 
                  including flights, accommodation, and activities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Switzerland Trip Cost Breakdown for Americans
          </h2>

          {/* Flight Costs */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plane className="w-5 h-5 text-primary mr-2" />
                Switzerland Flight Cost from USA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Route</th>
                      <th className="text-right p-3 font-semibold">Economy (USD)</th>
                      <th className="text-right p-3 font-semibold">Business (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">NYC to Zurich</td>
                      <td className="p-3 text-right">$800 - $1,200</td>
                      <td className="p-3 text-right">$3,500 - $5,500</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Washington DC to Geneva</td>
                      <td className="p-3 text-right">$850 - $1,300</td>
                      <td className="p-3 text-right">$3,800 - $5,800</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Los Angeles to Zurich</td>
                      <td className="p-3 text-right">$900 - $1,400</td>
                      <td className="p-3 text-right">$4,000 - $6,200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Accommodation */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Hotel className="w-5 h-5 text-primary mr-2" />
                Switzerland Accommodation Cost per Night
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Budget Hostel</h4>
                  <Badge variant="outline" className="text-lg">$100 - $130</Badge>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Mid-range Hotel</h4>
                  <Badge variant="outline" className="text-lg">$180 - $250</Badge>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Luxury Hotel</h4>
                  <Badge variant="outline" className="text-lg">$400 - $800</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Food Costs */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Utensils className="w-5 h-5 text-primary mr-2" />
                Switzerland Food Cost for Americans
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded">
                    <span>Fast Food</span>
                    <Badge variant="secondary">$12 - $18</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <span>Restaurant Meal</span>
                    <Badge variant="secondary">$25 - $45</Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded">
                    <span>Fine Dining</span>
                    <Badge variant="secondary">$60 - $120</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <span>Groceries (per day)</span>
                    <Badge variant="secondary">$25 - $40</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Complete Trip Costs */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-xl">Complete Switzerland Trip Cost Examples</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-4">7 Days Switzerland Cost from USA</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Component</th>
                        <th className="text-right p-3 font-semibold">Budget Trip</th>
                        <th className="text-right p-3 font-semibold">Mid-range Trip</th>
                        <th className="text-right p-3 font-semibold">Luxury Trip</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3">Flights</td>
                        <td className="p-3 text-right">$900</td>
                        <td className="p-3 text-right">$1,100</td>
                        <td className="p-3 text-right">$4,500</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Accommodation (6 nights)</td>
                        <td className="p-3 text-right">$720</td>
                        <td className="p-3 text-right">$1,380</td>
                        <td className="p-3 text-right">$3,600</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Food</td>
                        <td className="p-3 text-right">$210</td>
                        <td className="p-3 text-right">$315</td>
                        <td className="p-3 text-right">$630</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Transport & Activities</td>
                        <td className="p-3 text-right">$350</td>
                        <td className="p-3 text-right">$500</td>
                        <td className="p-3 text-right">$800</td>
                      </tr>
                      <tr className="border-b bg-muted/50">
                        <td className="p-3 font-semibold">Total Cost</td>
                        <td className="p-3 text-right font-semibold text-lg">$2,180</td>
                        <td className="p-3 text-right font-semibold text-lg">$3,295</td>
                        <td className="p-3 text-right font-semibold text-lg">$9,530</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Money Saving Tips */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Money-Saving Tips for Americans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">Travel & Booking</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Book flights 2-3 months in advance for best deals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Consider shoulder season (April-May, September-October)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Get Swiss Travel Pass for unlimited transport ($250 for 3 days)</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Accommodation & Food</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Stay in apartments with kitchens for self-catering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Shop at Coop/Migros for groceries instead of restaurants</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Take advantage of free hiking trails and scenic walks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Can I do Switzerland on a $2,000 budget?</h4>
                <p className="text-muted-foreground">
                  Yes, a budget 5-7 day Switzerland trip is possible for around $2,000 if you choose economy flights, 
                  hostels, cook your meals, and focus on free activities like hiking.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Is Switzerland expensive for Americans?</h4>
                <p className="text-muted-foreground">
                  Switzerland is expensive, but less shocking for Americans compared to other nationalities due to 
                  the strong USD. Daily costs range from $80-150 per person with careful planning.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What's the best time to visit for lower costs?</h4>
                <p className="text-muted-foreground">
                  November to March (excluding holidays) offers the lowest prices, with hotel costs 
                  30-40% cheaper than peak summer season.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center py-8">
            <h3 className="text-2xl font-semibold mb-4">Use Our Free Calculator</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get personalized cost estimates for your Switzerland trip based on your travel dates, 
              preferences, and departure city.
            </p>
            <Link to="/">
              <SwissButton variant="swiss" size="lg">
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Your Trip Cost Now
              </SwissButton>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CostGuideUS;