import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SwissButton } from "@/components/ui/swiss-button";
import { ArrowLeft, Calculator, Plane, Hotel, Utensils, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const CostGuide = () => {
  return (
    <>
      <Helmet>
        <title>Switzerland Trip Cost from India 2025 | Detailed Budget Breakdown</title>
        <meta
          name="description"
          content="Complete Switzerland trip cost breakdown from India 2025. Detailed budget guide for visa, flights, hotels, food, and activities with real prices in INR."
        />
        <meta
          name="keywords"
          content="Switzerland trip cost India 2025, cost breakdown, visa cost, flight cost, hotel cost, food cost, detailed budget, INR breakdown"
        />
        <link rel="canonical" href="https://tripcostscalc.online/cost-guide" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tripcostscalc.online/cost-guide" />
        <meta property="og:title" content="Switzerland Trip Cost from India 2025 | Budget Breakdown" />
        <meta
          property="og:description"
          content="Detailed cost breakdown for Switzerland trip from India - visa, flights, accommodation, food, and activities in INR."
        />
        <meta property="og:image" content="https://tripcostscalc.online/og-image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tripcostscalc.online/cost-guide" />
        <meta property="twitter:title" content="Switzerland Trip Cost Breakdown 2025" />
        <meta
          property="twitter:description"
          content="Complete budget guide with real prices for Switzerland travel from India"
        />
        <meta property="twitter:image" content="https://tripcostscalc.online/og-image.jpg" />
        <meta name="robots" content="index, follow" />
      </Helmet>
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
              Switzerland Trip Cost from India 2025
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete budget guide for Indians planning their Switzerland vacation
            </p>
          </div>

          <Card className="shadow-alpine mb-8">
            <CardContent className="p-6">
              <div className="bg-accent/10 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Quick Answer</h3>
                <p className="text-muted-foreground">
                  A Switzerland trip from India costs <strong>₹1,50,000 to ₹3,50,000</strong> per person for 7-10 days,
                  including flights, visa, accommodation, and activities.
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
            Switzerland Trip Cost Breakdown for Indians
          </h2>

          {/* Visa Costs */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="w-5 h-5 text-primary mr-2" />
                Switzerland Visa Cost from India
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Component</th>
                      <th className="text-right p-3 font-semibold">Cost (INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">Schengen Visa Fee</td>
                      <td className="p-3 text-right">₹6,800</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">VFS Service Charge</td>
                      <td className="p-3 text-right">₹2,200</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Documentation</td>
                      <td className="p-3 text-right">₹1,000</td>
                    </tr>
                    <tr className="border-b bg-muted/50">
                      <td className="p-3 font-semibold">Total Visa Cost</td>
                      <td className="p-3 text-right font-semibold">₹10,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Flight Costs */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plane className="w-5 h-5 text-primary mr-2" />
                Switzerland Flight Cost from India
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Route</th>
                      <th className="text-right p-3 font-semibold">Economy (INR)</th>
                      <th className="text-right p-3 font-semibold">Business (INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">Delhi to Zurich</td>
                      <td className="p-3 text-right">₹45,000 - ₹65,000</td>
                      <td className="p-3 text-right">₹1,50,000 - ₹2,50,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Mumbai to Geneva</td>
                      <td className="p-3 text-right">₹50,000 - ₹70,000</td>
                      <td className="p-3 text-right">₹1,60,000 - ₹2,60,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Bangalore to Zurich</td>
                      <td className="p-3 text-right">₹55,000 - ₹75,000</td>
                      <td className="p-3 text-right">₹1,70,000 - ₹2,70,000</td>
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
                  <Badge variant="outline" className="text-lg">₹3,000 - ₹5,000</Badge>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Mid-range Hotel</h4>
                  <Badge variant="outline" className="text-lg">₹8,000 - ₹15,000</Badge>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Luxury Hotel</h4>
                  <Badge variant="outline" className="text-lg">₹20,000 - ₹50,000</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Food Costs */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Utensils className="w-5 h-5 text-primary mr-2" />
                Switzerland Food Cost for Indians
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded">
                    <span>Street Food/Fast Food</span>
                    <Badge variant="secondary">₹800 - ₹1,200</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <span>Restaurant Meal</span>
                    <Badge variant="secondary">₹2,000 - ₹3,500</Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded">
                    <span>Fine Dining</span>
                    <Badge variant="secondary">₹5,000 - ₹8,000</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <span>Groceries (per day)</span>
                    <Badge variant="secondary">₹1,500 - ₹2,500</Badge>
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
                <h4 className="font-semibold text-lg mb-4">7 Days Switzerland Cost from India</h4>
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
                        <td className="p-3 text-right">₹50,000</td>
                        <td className="p-3 text-right">₹60,000</td>
                        <td className="p-3 text-right">₹2,00,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Visa</td>
                        <td className="p-3 text-right">₹10,000</td>
                        <td className="p-3 text-right">₹10,000</td>
                        <td className="p-3 text-right">₹10,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Accommodation (6 nights)</td>
                        <td className="p-3 text-right">₹24,000</td>
                        <td className="p-3 text-right">₹66,000</td>
                        <td className="p-3 text-right">₹2,40,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Food</td>
                        <td className="p-3 text-right">₹14,000</td>
                        <td className="p-3 text-right">₹21,000</td>
                        <td className="p-3 text-right">₹42,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Transport & Activities</td>
                        <td className="p-3 text-right">₹20,000</td>
                        <td className="p-3 text-right">₹35,000</td>
                        <td className="p-3 text-right">₹60,000</td>
                      </tr>
                      <tr className="border-b bg-muted/50">
                        <td className="p-3 font-semibold">Total Cost</td>
                        <td className="p-3 text-right font-semibold text-lg">₹1,18,000</td>
                        <td className="p-3 text-right font-semibold text-lg">₹1,92,000</td>
                        <td className="p-3 text-right font-semibold text-lg">₹5,52,000</td>
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
              <CardTitle>Money-Saving Tips for Indians</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">Travel & Booking</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Book flights 2-3 months in advance for 20-30% savings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Travel in shoulder season (April-May, September-October)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Get Swiss Travel Pass for unlimited transport (₹25,000)</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Accommodation & Food</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Stay in places with kitchen facilities for self-catering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Shop at Coop/Migros for groceries instead of restaurants</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Enjoy free activities like hiking and lake walks</span>
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
                <h4 className="font-semibold mb-2">Can I do Switzerland in ₹1 lakh?</h4>
                <p className="text-muted-foreground">
                  Yes, a budget 5-7 day Switzerland trip is possible in ₹1 lakh if you choose economy flights,
                  hostels, cook your meals, and focus on free activities like hiking.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Is Switzerland expensive for Indians?</h4>
                <p className="text-muted-foreground">
                  Yes, Switzerland is one of the most expensive countries for Indians due to the strong CHF currency.
                  However, with proper planning, you can manage costs effectively.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What's the cheapest month to visit Switzerland?</h4>
                <p className="text-muted-foreground">
                  November to March (excluding Christmas/New Year) offers the lowest prices, with hotel costs
                  30-40% cheaper than peak season.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Helpful Resources */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Helpful Resources for Switzerland Travel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">Official Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <a href="https://www.myswitzerland.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Switzerland Tourism Official Site</a></li>
                    <li>• <a href="https://www.sbb.ch/en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Swiss Federal Railways (SBB)</a></li>
                    <li>• <a href="https://www.vfsglobal.ch/switzerland/india/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Switzerland Visa Application (VFS)</a></li>
                  </ul>
                </div>
                {/* <div className="space-y-3">
                  <h4 className="font-semibold">Share This Calculator</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Found this helpful? Share with fellow travelers or link to it from your blog!
                  </p>
                  <div className="bg-muted p-3 rounded text-xs font-mono">
                    https://sanjay-murmu-au9.github.io/Trip-Cost-Estimator/
                  </div>
                </div> */}
                <div className="space-y-3">
                  <h4 className="font-semibold">Additional Resources</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    More helpful links for planning your Switzerland trip.
                  </p>
                </div>
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
    </>
  );
};

export default CostGuide;