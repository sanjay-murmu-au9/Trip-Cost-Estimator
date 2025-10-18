import { useCountry, COUNTRIES } from "@/contexts/CountryContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CountrySelector = () => {
  const { selectedCountry, setSelectedCountry } = useCountry();

  return (
    <Card className="w-full max-w-md mx-auto mb-6 shadow-card">
      <CardContent className="p-4">
        <div className="text-center space-y-3">
          <h3 className="font-semibold text-sm text-muted-foreground">Select Your Region</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.entries(COUNTRIES).slice(0, 2).map(([key, country]) => (
              <button
                key={key}
                onClick={() => setSelectedCountry(key as any)}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  selectedCountry === key
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background hover:bg-muted border-border'
                }`}
              >
                {country.flag} {country.name}
              </button>
            ))}
          </div>
          <Badge variant="outline" className="text-xs">
            Costs in {COUNTRIES[selectedCountry].currency.code} ({COUNTRIES[selectedCountry].currency.symbol})
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};