import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SwissButton } from "@/components/ui/swiss-button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlaneTakeoff, MapPin, Utensils, Hotel } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCountry } from "@/contexts/CountryContext";

interface BudgetBreakdown {
  category: string;
  costLocal: number;
  costCHF: number;
  icon: React.ReactNode;
}

export const TripBudgetCalculator = () => {
  const [travelers, setTravelers] = useState<string>("2");
  const [days, setDays] = useState<string>("7");
  const [hotelCategory, setHotelCategory] = useState<string>("mid-range");
  const [breakdown, setBreakdown] = useState<BudgetBreakdown[]>([]);
  const [totalLocal, setTotalLocal] = useState<number>(0);
  const [totalCHF, setTotalCHF] = useState<number>(0);
  const { selectedCountry } = useCountry();
  const { toast } = useToast();

  // Currency info
  const currencies = {
    india: { symbol: '₹', code: 'INR' },
    usa: { symbol: '$', code: 'USD' }
  };
  
  const currentCurrency = currencies[selectedCountry];
  
  // Reset breakdown when country changes
  useEffect(() => {
    setBreakdown([]);
    setTotalLocal(0);
    setTotalCHF(0);
  }, [selectedCountry]);

  // Hotel rates by country and category
  const hotelRates = {
    india: {
      budget: { local: 8500, chf: 95 },
      "mid-range": { local: 16000, chf: 180 },
      luxury: { local: 30000, chf: 340 }
    },
    usa: {
      budget: { local: 120, chf: 95 },
      "mid-range": { local: 200, chf: 180 },
      luxury: { local: 400, chf: 340 }
    }
  };
  
  // Flight costs by country (researched actual prices)
  const flightCosts = {
    india: { local: 60000, chf: 660 },
    usa: { local: 900, chf: 828 }
  };
  
  // Daily costs by country
  const dailyCosts = {
    india: {
      food: { local: 4000, chf: 44 },
      transport: { local: 1500, chf: 16.5 },
      activities: { local: 5000, chf: 55 }
    },
    usa: {
      food: { local: 48, chf: 44 },
      transport: { local: 18, chf: 16.5 },
      activities: { local: 60, chf: 55 }
    }
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

    const hotelRate = hotelRates[selectedCountry][hotelCategory as keyof typeof hotelRates.india];
    const flightCost = flightCosts[selectedCountry];
    const dailyCost = dailyCosts[selectedCountry];
    
    // Calculate costs
    const flightCostLocal = flightCost.local;
    const flightCostCHF = flightCost.chf;
    
    const hotelCostLocal = hotelRate.local * numDays;
    const hotelCostCHF = hotelRate.chf * numDays;
    
    const foodCostLocal = dailyCost.food.local * numDays;
    const foodCostCHF = dailyCost.food.chf * numDays;
    
    const transportCostLocal = dailyCost.transport.local * numDays;
    const transportCostCHF = dailyCost.transport.chf * numDays;
    
    const activityCostLocal = dailyCost.activities.local * numDays;
    const activityCostCHF = dailyCost.activities.chf * numDays;

    const newBreakdown: BudgetBreakdown[] = [
      {
        category: "Flights (Round Trip)",
        costLocal: flightCostLocal * numTravelers,
        costCHF: flightCostCHF * numTravelers,
        icon: <PlaneTakeoff className="w-4 h-4" />
      },
      {
        category: `Accommodation (${numDays} nights)`,
        costLocal: hotelCostLocal,
        costCHF: hotelCostCHF,
        icon: <Hotel className="w-4 h-4" />
      },
      {
        category: "Food & Dining",
        costLocal: foodCostLocal * numTravelers,
        costCHF: foodCostCHF * numTravelers,
        icon: <Utensils className="w-4 h-4" />
      },
      {
        category: "Local Transport",
        costLocal: transportCostLocal * numTravelers,
        costCHF: transportCostCHF * numTravelers,
        icon: <MapPin className="w-4 h-4" />
      },
      {
        category: "Activities & Sightseeing",
        costLocal: activityCostLocal * numTravelers,
        costCHF: activityCostCHF * numTravelers,
        icon: <MapPin className="w-4 h-4" />
      }
    ];

    const calculatedTotalLocal = newBreakdown.reduce((sum, item) => sum + item.costLocal, 0);
    const calculatedTotalCHF = newBreakdown.reduce((sum, item) => sum + item.costCHF, 0);

    setBreakdown(newBreakdown);
    setTotalLocal(calculatedTotalLocal);
    setTotalCHF(calculatedTotalCHF);

    toast({
      title: "Budget Calculated!",
      description: `Total estimated cost: ${currentCurrency.symbol}${calculatedTotalLocal.toLocaleString()} (CHF ${calculatedTotalCHF.toFixed(2)})`,
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
                  <SelectItem value="budget">Budget ({currentCurrency.symbol}{hotelRates[selectedCountry].budget.local.toLocaleString()}/night)</SelectItem>
                  <SelectItem value="mid-range">Mid-range ({currentCurrency.symbol}{hotelRates[selectedCountry]["mid-range"].local.toLocaleString()}/night)</SelectItem>
                  <SelectItem value="luxury">Luxury ({currentCurrency.symbol}{hotelRates[selectedCountry].luxury.local.toLocaleString()}+/night)</SelectItem>
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
                    <TableHead className="text-right">Cost ({currentCurrency.code})</TableHead>
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
                        {currentCurrency.symbol}{item.costLocal.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right font-semibold">
                        CHF {item.costCHF.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-primary/10 font-bold">
                    <TableCell className="font-bold text-lg">Total Estimated Cost</TableCell>
                    <TableCell className="text-right font-bold text-lg">
                      {currentCurrency.symbol}{totalLocal.toLocaleString()}
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