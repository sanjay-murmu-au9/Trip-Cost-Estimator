import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SwissButton } from "@/components/ui/swiss-button";
import { ArrowLeft, Calculator, Sun, Cloud, Snowflake, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const BestTimeVisitSwitzerland = () => {
  return (
    <main className="min-h-screen bg-gradient-mountain">
      {/* Header with SEO-optimized title */}
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
              Best Time to Visit Switzerland 2025: Month-by-Month Guide with Costs
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Find the perfect time to visit Switzerland based on your budget, weather preferences, and activities
            </p>
          </div>

          {/* Quick Summary Card */}
          <Card className="shadow-alpine mb-8">
            <CardContent className="p-6">
              <div className="bg-accent/10 p-4 rounded-lg">
                <h2 className="font-semibold text-xl mb-4">Quick Summary</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <Sun className="w-6 h-6 text-yellow-500 mb-2" />
                    <h3 className="font-semibold mb-2">Best Weather</h3>
                    <p className="text-muted-foreground">June to August</p>
                    <Badge variant="outline" className="mt-2">Peak Season</Badge>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <Cloud className="w-6 h-6 text-blue-500 mb-2" />
                    <h3 className="font-semibold mb-2">Best Value</h3>
                    <p className="text-muted-foreground">April-May, September-October</p>
                    <Badge variant="outline" className="mt-2">Shoulder Season</Badge>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <Snowflake className="w-6 h-6 text-sky-500 mb-2" />
                    <h3 className="font-semibold mb-2">Budget-Friendly</h3>
                    <p className="text-muted-foreground">November to March</p>
                    <Badge variant="outline" className="mt-2">Off Season</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seasonal Analysis */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Switzerland by Season: Complete Analysis
          </h2>

          {/* Summer Season */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sun className="w-5 h-5 text-yellow-500 mr-2" />
                Summer (June to August) - Peak Season
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Weather & Conditions</h3>
                  <ul className="space-y-2">
                    <li>• Temperature: 20-25°C (68-77°F)</li>
                    <li>• Rainfall: Moderate, occasional showers</li>
                    <li>• Daylight: 15-16 hours</li>
                    <li>• Crowds: Peak tourist season</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Best Activities</h3>
                  <ul className="space-y-2">
                    <li>• Hiking in the Alps</li>
                    <li>• Lake activities</li>
                    <li>• Mountain railways</li>
                    <li>• Outdoor festivals</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Cost Breakdown</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Hotels:</p>
                    <ul className="space-y-1">
                      <li>Budget: ₹8,000 - ₹12,000/night</li>
                      <li>Mid-range: ₹15,000 - ₹25,000/night</li>
                      <li>Luxury: ₹30,000+/night</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Daily Expenses:</p>
                    <ul className="space-y-1">
                      <li>Food: ₹3,000 - ₹6,000</li>
                      <li>Activities: ₹4,000 - ₹8,000</li>
                      <li>Transport: ₹2,000 - ₹4,000</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Spring/Fall Season */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Cloud className="w-5 h-5 text-blue-500 mr-2" />
                Spring & Fall (April-May, September-October) - Value Season
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Weather & Conditions</h3>
                  <ul className="space-y-2">
                    <li>• Temperature: 15-20°C (59-68°F)</li>
                    <li>• Rainfall: Variable</li>
                    <li>• Daylight: 12-14 hours</li>
                    <li>• Crowds: Moderate</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Season Highlights</h3>
                  <ul className="space-y-2">
                    <li>• Spring flowers (April-May)</li>
                    <li>• Fall colors (September-October)</li>
                    <li>• Wine festivals</li>
                    <li>• Better hotel rates</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Value Season Savings</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Accommodations:</p>
                    <ul className="space-y-1">
                      <li>Budget: ₹6,000 - ₹10,000/night</li>
                      <li>Mid-range: ₹12,000 - ₹20,000/night</li>
                      <li>Luxury: ₹25,000+/night</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Daily Costs:</p>
                    <ul className="space-y-1">
                      <li>Food: ₹2,500 - ₹5,000</li>
                      <li>Activities: ₹3,000 - ₹6,000</li>
                      <li>Transport: ₹1,500 - ₹3,000</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Winter Season */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Snowflake className="w-5 h-5 text-sky-500 mr-2" />
                Winter (November to March) - Budget Season
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Weather & Activities</h3>
                  <ul className="space-y-2">
                    <li>• Temperature: -2 to 7°C (28-45°F)</li>
                    <li>• Snowfall: Regular in mountains</li>
                    <li>• Daylight: 8-10 hours</li>
                    <li>• Skiing and winter sports</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Winter Advantages</h3>
                  <ul className="space-y-2">
                    <li>• Lowest hotel rates (except holidays)</li>
                    <li>• Christmas markets</li>
                    <li>• Ski season</li>
                    <li>• Fewer tourists</li>
                  </ul>
                </div>
              </div>

              <div className="bg-sky-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Winter Budget Breakdown</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Winter Lodging:</p>
                    <ul className="space-y-1">
                      <li>Budget: ₹5,000 - ₹8,000/night</li>
                      <li>Mid-range: ₹10,000 - ₹18,000/night</li>
                      <li>Ski Resorts: ₹20,000+/night</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Winter Expenses:</p>
                    <ul className="space-y-1">
                      <li>Food: ₹2,000 - ₹4,000</li>
                      <li>Ski Pass: ₹4,000 - ₹6,000/day</li>
                      <li>Transport: ₹1,500 - ₹3,000</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Money-Saving Tips */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="w-5 h-5 text-primary mr-2" />
                Money-Saving Tips for Every Season
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">General Tips</h3>
                  <ul className="space-y-2">
                    <li>• Book flights 3-4 months ahead</li>
                    <li>• Get Swiss Travel Pass for transport</li>
                    <li>• Stay in smaller towns vs. big cities</li>
                    <li>• Cook some meals yourself</li>
                    <li>• Use our cost calculator for planning</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Season-Specific Savings</h3>
                  <ul className="space-y-2">
                    <li>• Summer: Book accommodations 6 months ahead</li>
                    <li>• Spring/Fall: Look for shoulder season deals</li>
                    <li>• Winter: Avoid Christmas/New Year period</li>
                    <li>• Consider hostels or B&Bs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Month-by-Month Table */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Monthly Weather & Events Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Month</th>
                      <th className="text-left p-3 font-semibold">Weather</th>
                      <th className="text-left p-3 font-semibold">Events</th>
                      <th className="text-right p-3 font-semibold">Cost Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">January</td>
                      <td className="p-3">-2° to 4°C, Snowy</td>
                      <td className="p-3">Winter Sports</td>
                      <td className="p-3 text-right">Medium</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">February</td>
                      <td className="p-3">-1° to 6°C, Snowy</td>
                      <td className="p-3">Carnival Season</td>
                      <td className="p-3 text-right">Medium</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">March</td>
                      <td className="p-3">2° to 10°C, Mixed</td>
                      <td className="p-3">Late Skiing</td>
                      <td className="p-3 text-right">Low</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">April</td>
                      <td className="p-3">5° to 14°C, Mild</td>
                      <td className="p-3">Easter Events</td>
                      <td className="p-3 text-right">Low</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">May</td>
                      <td className="p-3">9° to 18°C, Mild</td>
                      <td className="p-3">Spring Festivals</td>
                      <td className="p-3 text-right">Medium</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">June</td>
                      <td className="p-3">12° to 22°C, Warm</td>
                      <td className="p-3">Hiking Season</td>
                      <td className="p-3 text-right">High</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">July</td>
                      <td className="p-3">14° to 24°C, Warm</td>
                      <td className="p-3">National Day</td>
                      <td className="p-3 text-right">Peak</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">August</td>
                      <td className="p-3">13° to 24°C, Warm</td>
                      <td className="p-3">Street Parades</td>
                      <td className="p-3 text-right">Peak</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">September</td>
                      <td className="p-3">10° to 19°C, Mild</td>
                      <td className="p-3">Wine Festivals</td>
                      <td className="p-3 text-right">High</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">October</td>
                      <td className="p-3">6° to 15°C, Mild</td>
                      <td className="p-3">Fall Colors</td>
                      <td className="p-3 text-right">Medium</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">November</td>
                      <td className="p-3">2° to 8°C, Cool</td>
                      <td className="p-3">Early Skiing</td>
                      <td className="p-3 text-right">Low</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">December</td>
                      <td className="p-3">-1° to 5°C, Snowy</td>
                      <td className="p-3">Christmas Markets</td>
                      <td className="p-3 text-right">High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">What is the absolute best time to visit Switzerland?</h3>
                <p className="text-muted-foreground">
                  July to August offers the best weather for outdoor activities, but it's also the most expensive and crowded.
                  For a balance of good weather and value, visit in June or September.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">When is Switzerland cheapest to visit?</h3>
                <p className="text-muted-foreground">
                  November to March (excluding Christmas/New Year) is the most affordable time. Hotel rates are 30-40% lower,
                  and you can find flight deals from India starting at ₹45,000.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is Switzerland worth visiting in winter?</h3>
                <p className="text-muted-foreground">
                  Absolutely! Winter offers unique experiences like skiing, Christmas markets, and snow-covered landscapes.
                  It's also more budget-friendly, except during the holiday season.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Plan Your Switzerland Trip Now</h2>
          <p className="text-muted-foreground mb-6">
            Use our free calculator to get personalized cost estimates based on your travel dates and preferences.
          </p>
          <Link to="/">
            <SwissButton variant="swiss" size="lg">
              <Calculator className="w-5 h-5 mr-2" />
              Calculate Your Trip Cost
            </SwissButton>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BestTimeVisitSwitzerland;