import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SwissButton } from "@/components/ui/swiss-button";
import { ArrowUpDown, Calculator } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const CurrencyConverter = () => {
  const [inrAmount, setInrAmount] = useState<string>("");
  const [chfAmount, setChfAmount] = useState<string>("");
  const [exchangeRate] = useState(0.011); // Approximate INR to CHF rate
  const { toast } = useToast();

  const convertINRToCHF = () => {
    const amount = parseFloat(inrAmount);
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount in INR",
        variant: "destructive",
      });
      return;
    }
    
    const converted = (amount * exchangeRate).toFixed(2);
    setChfAmount(converted);
    
    toast({
      title: "Conversion Successful!",
      description: `₹${amount.toLocaleString()} = CHF ${converted}`,
    });
  };

  const handleInputChange = (value: string) => {
    setInrAmount(value);
    if (value && !isNaN(parseFloat(value))) {
      const converted = (parseFloat(value) * exchangeRate).toFixed(2);
      setChfAmount(converted);
    } else {
      setChfAmount("");
    }
  };

  return (
    <Card className="w-full max-w-md shadow-card hover:shadow-alpine transition-all duration-300 animate-slide-up">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-2">
          <ArrowUpDown className="w-6 h-6 text-primary mr-2" />
          <CardTitle className="text-xl">Currency Converter</CardTitle>
        </div>
        <CardDescription>Convert Indian Rupees to Swiss Francs</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="inr-input" className="text-sm font-medium">
            Amount in INR (₹)
          </Label>
          <Input
            id="inr-input"
            type="number"
            placeholder="Enter amount in ₹"
            value={inrAmount}
            onChange={(e) => handleInputChange(e.target.value)}
            className="text-lg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="chf-output" className="text-sm font-medium">
            Amount in CHF
          </Label>
          <Input
            id="chf-output"
            type="text"
            value={chfAmount ? `CHF ${chfAmount}` : "CHF 0.00"}
            readOnly
            className="bg-muted font-semibold text-lg"
          />
        </div>

        <SwissButton 
          onClick={convertINRToCHF} 
          variant="swiss" 
          className="w-full"
          size="lg"
        >
          <Calculator className="w-4 h-4 mr-2" />
          Convert to CHF
        </SwissButton>

        <div className="text-center text-sm text-muted-foreground">
          <p>Exchange Rate: 1 INR = {exchangeRate} CHF</p>
          <p className="text-xs mt-1">*Rates are approximate and may vary</p>
        </div>
      </CardContent>
    </Card>
  );
};