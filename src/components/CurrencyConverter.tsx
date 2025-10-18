import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SwissButton } from "@/components/ui/swiss-button";
import { ArrowUpDown, Calculator } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCountry, COUNTRIES } from "@/contexts/CountryContext";

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState<string>("");
  const [chfAmount, setChfAmount] = useState<string>("");
  const { selectedCountry } = useCountry();
  const { toast } = useToast();
  
  // Exchange rates - easy to add new countries
  const exchangeRates: Record<string, number> = {
    india: 0.011, // INR to CHF
    usa: 0.92,    // USD to CHF
    uk: 1.15,     // GBP to CHF
    canada: 0.68, // CAD to CHF
    australia: 0.61 // AUD to CHF
  };
  
  const currentCurrency = COUNTRIES[selectedCountry].currency;
  const currentRate = exchangeRates[selectedCountry] || 0.011;
  const currencyName = `${currentCurrency.code === 'INR' ? 'Indian Rupees' : 
                        currentCurrency.code === 'USD' ? 'US Dollars' :
                        currentCurrency.code === 'GBP' ? 'British Pounds' :
                        currentCurrency.code === 'CAD' ? 'Canadian Dollars' :
                        currentCurrency.code === 'AUD' ? 'Australian Dollars' : 'Currency'}`;

  const convertToCHF = () => {
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum <= 0) {
      toast({
        title: "Invalid Amount",
        description: `Please enter a valid amount in ${currentCurrency.code}`,
        variant: "destructive",
      });
      return;
    }
    
    const converted = (amountNum * currentRate).toFixed(2);
    setChfAmount(converted);
    
    toast({
      title: "Conversion Successful!",
      description: `${currentCurrency.symbol}${amountNum.toLocaleString()} = CHF ${converted}`,
    });
  };

  const handleInputChange = (value: string) => {
    setAmount(value);
    if (value && !isNaN(parseFloat(value))) {
      const converted = (parseFloat(value) * currentRate).toFixed(2);
      setChfAmount(converted);
    } else {
      setChfAmount("");
    }
  };
  
  // Reset amounts when country changes
  useEffect(() => {
    setAmount("");
    setChfAmount("");
  }, [selectedCountry]);

  return (
    <Card className="w-full max-w-md shadow-card hover:shadow-alpine transition-all duration-300 animate-slide-up">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-2">
          <ArrowUpDown className="w-6 h-6 text-primary mr-2" />
          <CardTitle className="text-xl">Currency Converter</CardTitle>
        </div>
        <CardDescription>Convert {currencyName} to Swiss Francs</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="amount-input" className="text-sm font-medium">
            Amount in {currentCurrency.code} ({currentCurrency.symbol})
          </Label>
          <Input
            id="amount-input"
            type="number"
            placeholder={`Enter amount in ${currentCurrency.symbol}`}
            value={amount}
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
          onClick={convertToCHF} 
          variant="swiss" 
          className="w-full"
          size="lg"
        >
          <Calculator className="w-4 h-4 mr-2" />
          Convert to CHF
        </SwissButton>

        <div className="text-center text-sm text-muted-foreground">
          <p>Exchange Rate: 1 {currentCurrency.code} = {currentRate} CHF</p>
          <p className="text-xs mt-1">*Rates are approximate and may vary</p>
        </div>
      </CardContent>
    </Card>
  );
};