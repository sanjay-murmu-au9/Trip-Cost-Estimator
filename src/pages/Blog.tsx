import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    title: "🇨🇭 Switzerland Trip Cost from the US – Real Guide 2025",
    excerpt: "Complete budget breakdown for US travelers visiting Switzerland in 2025. Flight costs, accommodation, food, transport & activities with money-saving tips.",
    date: "January 2025",
    readTime: "12 min read",
    author: "Travel Expert",
    slug: "switzerland-travel-cost-2025-us",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
  },
  {
    title: "Best Time to Visit Switzerland: Weather & Cost Analysis",
    excerpt: "Learn when to visit Switzerland for the best experience and budget. Compare seasonal costs, weather patterns, and tourist crowds.",
    date: "January 2025",
    readTime: "8 min read",
    author: "Travel Expert",
    slug: "best-time-visit-switzerland-cost",
    image: "https://ik.imagekit.io/tripcostscalc/switzerland-trip-lake-view.jpeg?updatedAt=1761150005106&w=800&h=400&fit=crop"
  },
  {
    title: "Switzerland Visa for Indians: Complete Guide & Costs",
    excerpt: "Step-by-step Switzerland visa application guide for Indian citizens. Required documents, fees, processing time, and approval tips.",
    date: "January 2025",
    readTime: "10 min read",
    author: "Visa Expert",
    slug: "switzerland-visa-indians-guide",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop"
  },
  {
    title: "Top 10 Budget-Friendly Activities in Switzerland",
    excerpt: "Explore Switzerland without breaking the bank. Discover free and affordable attractions, hiking trails, and cultural experiences.",
    date: "January 2025",
    readTime: "7 min read",
    author: "Budget Traveler",
    slug: "budget-activities-switzerland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&h=250&fit=crop"
  },
  {
    title: "Switzerland Food Costs: What to Expect & How to Save",
    excerpt: "Complete guide to food costs in Switzerland. Restaurant prices, grocery shopping tips, and budget-friendly dining options.",
    date: "January 2025",
    readTime: "5 min read",
    author: "Food Expert",
    slug: "switzerland-food-costs-guide",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=250&fit=crop"
  },
  {
    title: "Swiss Transportation: Trains, Buses & Travel Passes",
    excerpt: "Navigate Switzerland's transport system efficiently. Compare travel pass options, regional trains, and money-saving tips.",
    date: "January 2025",
    readTime: "9 min read",
    author: "Transport Guide",
    slug: "switzerland-transportation-guide",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop"
  }
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-mountain">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 hover:bg-white/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Calculator
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Switzerland Travel Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert guides, tips, and insights to help you plan the perfect Switzerland trip on any budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/95 backdrop-blur">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20"><div class="text-center"><div class="text-2xl mb-2">🏔️</div><div class="text-sm text-muted-foreground">Switzerland Travel</div></div></div>`;
                  }}
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg mb-3 line-clamp-2 leading-tight">
                  {post.title}
                </CardTitle>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground line-clamp-3 text-sm mb-4">
                  {post.excerpt}
                </p>
                <Button
                  variant="outline"
                  className="w-full hover:bg-primary hover:text-white transition-colors"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  Read Article
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;