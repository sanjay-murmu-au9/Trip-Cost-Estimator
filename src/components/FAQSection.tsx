import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Q1. How much does a 10-day trip to Switzerland cost from the US?",
    answer: "Around $2,800 – $3,500 per person for mid-range travel."
  },
  {
    question: "Q2. Is Switzerland expensive compared to Italy or France?",
    answer: "Yes, about 30–40% more expensive on food and hotels."
  },
  {
    question: "Q3. What's the cheapest way to travel around Switzerland?",
    answer: "The Swiss Travel Pass or local trains + buses — both efficient & affordable."
  },
  {
    question: "Q4. Is tipping mandatory in Switzerland?",
    answer: "No, but rounding up the bill (5–10%) is polite."
  }
];

export const FAQSection = () => {
  return (
    <div className="space-y-3">
      {faqData.map((item, index) => (
        <details key={index} className="group border border-gray-200 rounded-lg overflow-hidden" data-index={index}>
          <summary className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center cursor-pointer list-none">
            <span className="font-semibold text-gray-900">{item.question}</span>
            <span className="ml-2 transition-transform group-open:rotate-180">
              <ChevronDown className="w-5 h-5 text-blue-600" />
            </span>
          </summary>
          <div className="px-4 py-3 bg-white border-t border-gray-200">
            <p className="text-gray-700">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
};