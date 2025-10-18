import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Country = 'india' | 'usa' | 'uk' | 'canada' | 'australia';

interface CountryContextType {
  selectedCountry: Country;
  setSelectedCountry: (country: Country) => void;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

// Country configuration - easy to add new countries
export const COUNTRIES = {
  india: { name: 'India', flag: '🇮🇳', currency: { symbol: '₹', code: 'INR' } },
  usa: { name: 'USA', flag: '🇺🇸', currency: { symbol: '$', code: 'USD' } },
  uk: { name: 'UK', flag: '🇬🇧', currency: { symbol: '£', code: 'GBP' } },
  canada: { name: 'Canada', flag: '🇨🇦', currency: { symbol: 'C$', code: 'CAD' } },
  australia: { name: 'Australia', flag: '🇦🇺', currency: { symbol: 'A$', code: 'AUD' } }
} as const;

export const CountryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>('india');

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};