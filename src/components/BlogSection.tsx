import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    title: "Switzerland Travel Cost 2025: Complete Budget Guide for Indians",
    excerpt: "Discover the real cost of traveling to Switzerland from India in 2025. From flights to accommodation, food to activities - get accurate budget estimates.",
    date: "January 2025",
    readTime: "8 min read",
    author: "Travel Expert",
    slug: "switzerland-travel-cost-2025-india"
  },
  {
    title: "Best Time to Visit Switzerland: Weather & Cost Analysis",
    excerpt: "Learn when to visit Switzerland for the best experience and budget. Compare seasonal costs, weather patterns, and tourist crowds.",
    date: "January 2025", 
    readTime: "6 min read",
    author: "Travel Expert",
    slug: "best-time-visit-switzerland-cost"
  },
  {
    title: "Switzerland Visa for Indians: Complete Guide & Costs",
    excerpt: "Step-by-step Switzerland visa application guide for Indian citizens. Required documents, fees, processing time, and approval tips.",
    date: "January 2025",
    readTime: "10 min read", 
    author: "Visa Expert",
    slug: "switzerland-visa-indians-guide"
  },
  {
    title: "Top 10 Budget-Friendly Activities in Switzerland",
    excerpt: "Explore Switzerland without breaking the bank. Discover free and affordable attractions, hiking trails, and cultural experiences.",
    date: "January 2025",
    readTime: "7 min read",
    author: "Budget Traveler",
    slug: "budget-activities-switzerland"
  }
];

export const BlogSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Switzerland Travel Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert guides and tips to help you plan the perfect Switzerland trip on any budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-xl mb-2 line-clamp-2">
                  {post.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="mt-4 text-primary font-medium hover:underline">
                  Read More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};