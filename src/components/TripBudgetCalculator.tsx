import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SwissButton } from "@/components/ui/swiss-button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlaneTakeoff, MapPin, Utensils, Hotel } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BudgetBreakdown {
  category: string;
  costINR: number;
  costCHF: number;
  icon: React.ReactNode;
}

export const TripBudgetCalculator = () => {
  const [travelers, setTravelers] = useState<string>("2");
  const [days, setDays] = useState<string>("7");
  const [hotelCategory, setHotelCategory] = useState<string>("mid-range");
  const [breakdown, setBreakdown] = useState<BudgetBreakdown[]>([]);
  const [totalINR, setTotalINR] = useState<number>(0);
  const [totalCHF, setTotalCHF] = useState<number>(0);
  const { toast } = useToast();

  const exchangeRate = 0.011;

  const hotelRates = {
    budget: { inr: 8500, chf: 95 },
    "mid-range": { inr: 16000, chf: 180 },
    luxury: { inr: 30000, chf: 340 }
  };

  const calculateBudget = () => {
    const numTravelers = parseInt(travelers) || 1;
    const numDays = parseInt(days) || 1;

    if (numTravelers < 1 || numDays < 1) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid numbers for travelers and days",
        variant: "destructive",
      });
      return;
    }

    const hotelRate = hotelRates[hotelCategory as keyof typeof hotelRates];
    
    // Calculate costs per person per day
    const flightCostINR = 60000; // Round trip flight cost
    const flightCostCHF = flightCostINR * exchangeRate;
    
    const hotelCostINR = hotelRate.inr * numDays;
    const hotelCostCHF = hotelRate.chf * numDays;
    
    const foodCostINR = 4000 * numDays;
    const foodCostCHF = foodCostINR * exchangeRate;
    
    const transportCostINR = 1500 * numDays;
    const transportCostCHF = transportCostINR * exchangeRate;
    
    const activityCostINR = 5000 * numDays;
    const activityCostCHF = activityCostINR * exchangeRate;

    const newBreakdown: BudgetBreakdown[] = [
      {
        category: "Flights (Round Trip)",
        costINR: flightCostINR * numTravelers,
        costCHF: flightCostCHF * numTravelers,
        icon: <PlaneTakeoff className="w-4 h-4" />
      },
      {
        category: `Accommodation (${numDays} nights)`,
        costINR: hotelCostINR,
        costCHF: hotelCostCHF,
        icon: <Hotel className="w-4 h-4" />
      },
      {
        category: "Food & Dining",
        costINR: foodCostINR * numTravelers,
        costCHF: foodCostCHF * numTravelers,
        icon: <Utensils className="w-4 h-4" />
      },
      {
        category: "Local Transport",
        costINR: transportCostINR * numTravelers,
        costCHF: transportCostCHF * numTravelers,
        icon: <MapPin className="w-4 h-4" />
      },
      {
        category: "Activities & Sightseeing",
        costINR: activityCostINR * numTravelers,
        costCHF: activityCostCHF * numTravelers,
        icon: <MapPin className="w-4 h-4" />
      }
    ];

    const calculatedTotalINR = newBreakdown.reduce((sum, item) => sum + item.costINR, 0);
    const calculatedTotalCHF = newBreakdown.reduce((sum, item) => sum + item.costCHF, 0);

    setBreakdown(newBreakdown);
    setTotalINR(calculatedTotalINR);
    setTotalCHF(calculatedTotalCHF);

    toast({
      title: "Budget Calculated!",
      description: `Total estimated cost: ₹${calculatedTotalINR.toLocaleString()} (CHF ${calculatedTotalCHF.toFixed(2)})`,
    });
  };

  return (
    <div className="w-full space-y-6">
      <Card className="shadow-card hover:shadow-alpine transition-all duration-300 animate-slide-up">
        <CardHeader className="text-center">
          <CardTitle className="text-xl flex items-center justify-center">
            <MapPin className="w-6 h-6 text-primary mr-2" />
            Trip Budget Calculator
          </CardTitle>
          <CardDescription>Calculate your complete Switzerland trip budget</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="travelers">Number of Travelers</Label>
              <Input
                id="travelers"
                type="number"
                min="1"
                max="20"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                placeholder="2"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="days">Number of Days</Label>
              <Input
                id="days"
                type="number"
                min="1"
                max="30"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                placeholder="7"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="hotel-category">Hotel Category</Label>
              <Select value={hotelCategory} onValueChange={setHotelCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select hotel category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="budget">Budget (₹8,500/night)</SelectItem>
                  <SelectItem value="mid-range">Mid-range (₹16,000/night)</SelectItem>
                  <SelectItem value="luxury">Luxury (₹30,000+/night)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <SwissButton 
            onClick={calculateBudget} 
            variant="alpine" 
            className="w-full"
            size="lg"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Calculate My Trip Budget
          </SwissButton>
        </CardContent>
      </Card>

      {breakdown.length > 0 && (
        <Card className="shadow-card animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl">Cost Breakdown</CardTitle>
            <CardDescription>Detailed budget breakdown for your Switzerland trip</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg overflow-hidden border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted">
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Cost (INR)</TableHead>
                    <TableHead className="text-right">Cost (CHF)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {breakdown.map((item, index) => (
                    <TableRow key={index} className="hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.category}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right font-semibold">
                        ₹{item.costINR.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right font-semibold">
                        CHF {item.costCHF.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-primary/10 font-bold">
                    <TableCell className="font-bold text-lg">Total Estimated Cost</TableCell>
                    <TableCell className="text-right font-bold text-lg">
                      ₹{totalINR.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right font-bold text-lg">
                      CHF {totalCHF.toFixed(2)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="mt-4 text-center">
              <SwissButton variant="outline" size="lg">
                Save This Estimate
              </SwissButton>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};