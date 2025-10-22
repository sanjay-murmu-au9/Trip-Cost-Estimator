import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";

const blogPosts = {
  "switzerland-travel-cost-2025-us": {
    title: "Switzerland Trip Cost from the US – Real Guide 2025",
    author: "Travel Expert",
    date: "January 15, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    content: `
      <p>Dreaming of the Swiss Alps, crystal-clear lakes, and charming alpine villages? Switzerland is one of the most beautiful (and expensive) destinations in Europe. If you're planning a trip from the United States to Switzerland in 2025, this detailed guide breaks down real travel costs — including flights, hotels, food, and activities — so you can budget smartly and enjoy every moment stress-free.</p>

      <h2>✈️ 1. Flight Cost from the US to Switzerland</h2>
      <p>Round-trip airfare varies based on season, city, and airline:</p>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f8f9fa;">
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Departure City</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Average Round Trip (Economy)</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Best Months to Book</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">New York (JFK)</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$700 – $1,000</td>
            <td style="border: 1px solid #ddd; padding: 12px;">February – April</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Los Angeles (LAX)</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$850 – $1,200</td>
            <td style="border: 1px solid #ddd; padding: 12px;">February – April</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Chicago (ORD)</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$750 – $1,100</td>
            <td style="border: 1px solid #ddd; padding: 12px;">March – May</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Miami (MIA)</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$800 – $1,150</td>
            <td style="border: 1px solid #ddd; padding: 12px;">March – May</td>
          </tr>
        </tbody>
      </table>

      <p><strong>💡 Tip:</strong> Book 2–3 months in advance and use fare alerts on Google Flights or Skyscanner to get the lowest deals.</p>

      <h2>🏨 2. Accommodation Cost in Switzerland</h2>
      <p>Switzerland offers everything from budget hostels to luxury mountain resorts.</p>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f8f9fa;">
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Type</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Average Cost per Night</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Budget Hostel</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$40 – $70</td>
            <td style="border: 1px solid #ddd; padding: 12px;">Backpackers Lucerne, Youth Hostel Interlaken</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Mid-Range Hotel</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$120 – $180</td>
            <td style="border: 1px solid #ddd; padding: 12px;">Hotel Jungfrau Lodge, Ibis Geneva</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Luxury Resort</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$300 – $600+</td>
            <td style="border: 1px solid #ddd; padding: 12px;">The Dolder Grand (Zurich), Badrutt's Palace (St. Moritz)</td>
          </tr>
        </tbody>
      </table>

      <p><strong>💡</strong> Staying outside major cities (like Zurich or Geneva) can save you 20–30%.</p>

      <h2>🍽️ 3. Food & Dining Expenses</h2>
      <p>Switzerland is known for high-quality but pricey food.</p>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f8f9fa;">
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Type</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Average Cost per Meal</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Budget / Fast Food</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$10 – $15</td>
            <td style="border: 1px solid #ddd; padding: 12px;">Sandwiches, street food, McDonald's</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Mid-Range Restaurant</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$25 – $40</td>
            <td style="border: 1px solid #ddd; padding: 12px;">Swiss Rösti, cheese fondue, pasta</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Fine Dining</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$70 – $120+</td>
            <td style="border: 1px solid #ddd; padding: 12px;">Michelin-star restaurants</td>
          </tr>
        </tbody>
      </table>

      <p><strong>💡</strong> Save money by grabbing supermarket lunches (Coop or Migros) — they're fresh, filling, and under $10.</p>

      <h2>🚆 4. Transportation Costs</h2>
      <p>Public transport in Switzerland is world-class — clean, scenic, and reliable.</p>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f8f9fa;">
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Mode</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Average Cost</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Swiss Travel Pass</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$250 – $400</td>
            <td style="border: 1px solid #ddd; padding: 12px;">Unlimited train, bus & boat rides (3–8 days)</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Local Train Ride</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$15 – $40</td>
            <td style="border: 1px solid #ddd; padding: 12px;">Zurich → Lucerne ≈ $25</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Taxi (City)</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$20 – $35</td>
            <td style="border: 1px solid #ddd; padding: 12px;">10-minute ride</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Car Rental</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$70 – $100/day</td>
            <td style="border: 1px solid #ddd; padding: 12px;">Includes insurance & fuel</td>
          </tr>
        </tbody>
      </table>

      <p><strong>💡 Pro tip:</strong> Use the Swiss Travel Pass — it covers scenic routes like Glacier Express and Golden Pass Line.</p>

      <h2>🎟️ 5. Attraction & Activity Costs</h2>
      <p>Switzerland's natural attractions are often free — but cable cars, museums, and tours can add up.</p>

      <ul>
        <li><strong>Jungfraujoch – Top of Europe:</strong> $180 – $220</li>
        <li><strong>Mt. Titlis Cable Car:</strong> $100 – $130</li>
        <li><strong>Lake Lucerne Boat Ride:</strong> $30 – $50</li>
        <li><strong>Museum Pass (1 day):</strong> $20 – $30</li>
      </ul>

      <h2>🧳 6. 7-Day Switzerland Trip Cost from the US (Estimated 2025)</h2>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f8f9fa;">
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Category</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Budget Traveler</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Mid-Range Traveler</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Luxury Traveler</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Flights</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$800</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$1,000</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$1,500</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Accommodation</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$400</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$900</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$2,800</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Food</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$250</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$450</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$900</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Transport</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$300</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$450</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$800</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Activities</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$250</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$400</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$800</td>
          </tr>
          <tr style="background-color: #f8f9fa; font-weight: bold;">
            <td style="border: 1px solid #ddd; padding: 12px;">Total (7 Days)</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$2,000 – $2,200</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$3,200 – $4,000</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$6,500+</td>
          </tr>
        </tbody>
      </table>

      <p><strong>💡</strong> For solo travelers — expect $2,500 – $3,000 total for a comfortable 7-day trip. Couples can share accommodations to save ~20%.</p>

      <h2>🏔️ 7. Best Time to Visit Switzerland</h2>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f8f9fa;">
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Season</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Months</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Highlights</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Cost Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Winter</td>
            <td style="border: 1px solid #ddd; padding: 12px;">Dec – Feb</td>
            <td style="border: 1px solid #ddd; padding: 12px;">Skiing, Christmas markets</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$$$</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Spring</td>
            <td style="border: 1px solid #ddd; padding: 12px;">Mar – May</td>
            <td style="border: 1px solid #ddd; padding: 12px;">Blooming valleys, less crowded</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$$</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Summer</td>
            <td style="border: 1px solid #ddd; padding: 12px;">Jun – Aug</td>
            <td style="border: 1px solid #ddd; padding: 12px;">Lakes, hiking, festivals</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$$$</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Fall</td>
            <td style="border: 1px solid #ddd; padding: 12px;">Sep – Nov</td>
            <td style="border: 1px solid #ddd; padding: 12px;">Golden landscapes, wine tours</td>
            <td style="border: 1px solid #ddd; padding: 12px;">$$</td>
          </tr>
        </tbody>
      </table>

      <p><strong>💡</strong> For best value: visit April – May or September – October (moderate weather + lower rates).</p>

      <h2>🧠 8. Tips to Save Money</h2>
      <ul>
        <li>Buy the Swiss Travel Pass for unlimited rides</li>
        <li>Stay in Airbnbs or guesthouses instead of hotels</li>
        <li>Use grocery stores (Coop/Migros) for quick meals</li>
        <li>Carry a refillable water bottle – tap water is drinkable</li>
        <li>Book activities online – discounts up to 20%</li>
      </ul>

      <h2>❓ Frequently Asked Questions</h2>
      <div class="faq-container">
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFaq(this)">
            <span>Q1. How much does a 10-day trip to Switzerland cost from the US?</span>
            <span class="faq-icon">+</span>
          </div>
          <div class="faq-answer">
            <p>Around $2,800 – $3,500 per person for mid-range travel.</p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question" onclick="toggleFaq(this)">
            <span>Q2. Is Switzerland expensive compared to Italy or France?</span>
            <span class="faq-icon">+</span>
          </div>
          <div class="faq-answer">
            <p>Yes, about 30–40% more expensive on food and hotels.</p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question" onclick="toggleFaq(this)">
            <span>Q3. What's the cheapest way to travel around Switzerland?</span>
            <span class="faq-icon">+</span>
          </div>
          <div class="faq-answer">
            <p>The Swiss Travel Pass or local trains + buses — both efficient & affordable.</p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question" onclick="toggleFaq(this)">
            <span>Q4. Is tipping mandatory in Switzerland?</span>
            <span class="faq-icon">+</span>
          </div>
          <div class="faq-answer">
            <p>No, but rounding up the bill (5–10%) is polite.</p>
          </div>
        </div>
      </div>

      <script>
        function toggleFaq(element) {
          const faqItem = element.parentElement;
          const icon = element.querySelector('.faq-icon');

          if (faqItem.classList.contains('active')) {
            faqItem.classList.remove('active');
            icon.textContent = '+';
          } else {
            faqItem.classList.add('active');
            icon.textContent = '−';
          }
        }
      </script>

      <h2>🌍 Final Thoughts</h2>
      <p>Switzerland offers a once-in-a-lifetime experience — from the snowy peaks of the Matterhorn to the calm waters of Lake Geneva. While it's not a cheap destination, with smart planning and budgeting, you can enjoy this alpine paradise without overspending.</p>

      <p><strong>Start planning your 2025 Switzerland adventure today → <a href="/" style="color: #0066cc;">TripCostScalc.online</a></strong></p>
    `
  },
  "best-time-visit-switzerland-cost": {
    title: "Best Time to Visit Switzerland: Weather & Cost Analysis",
    author: "Travel Expert",
    date: "January 12, 2025",
    readTime: "6 min read",
    image: "https://ik.imagekit.io/tripcostscalc/switzerland-trip-lake-view.jpeg?updatedAt=1761150005106&w=800&h=400&fit=crop",
    content: `
      <h2>When to Visit Switzerland for Best Value</h2>
      <p>Timing your Switzerland visit can save you thousands of rupees while ensuring the best experience. Here's a comprehensive guide to help you choose the perfect time.</p>

      <h3>Peak Season (June - August)</h3>
      <p><strong>Weather:</strong> Warm and sunny, perfect for hiking and outdoor activities</p>
      <p><strong>Costs:</strong> Highest prices for flights and accommodation (30-50% premium)</p>
      <p><strong>Crowds:</strong> Very busy, especially at popular attractions</p>

      <h3>Shoulder Season (April-May, September-October)</h3>
      <p><strong>Weather:</strong> Mild temperatures, occasional rain</p>
      <p><strong>Costs:</strong> 20-30% cheaper than peak season</p>
      <p><strong>Crowds:</strong> Moderate, more peaceful experience</p>

      <h3>Winter Season (December-March)</h3>
      <p><strong>Weather:</strong> Cold, snowy, perfect for winter sports</p>
      <p><strong>Costs:</strong> High in ski resorts, lower in cities</p>
      <p><strong>Crowds:</strong> Busy in ski areas, quiet elsewhere</p>

      <h3>Budget-Friendly Months</h3>
      <p>The cheapest months to visit Switzerland are:</p>
      <ul>
        <li><strong>November:</strong> 40% cheaper accommodation</li>
        <li><strong>March:</strong> 35% cheaper flights</li>
        <li><strong>April:</strong> Good weather, lower prices</li>
      </ul>
    `
  },
  "switzerland-visa-indians-guide": {
    title: "Switzerland Visa for Indians: Complete Guide & Costs",
    author: "Visa Expert",
    date: "January 10, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
    content: `
      <h2>Switzerland Visa Requirements for Indian Citizens</h2>
      <p>Getting a Switzerland visa as an Indian citizen requires careful preparation. This comprehensive guide covers everything you need to know.</p>

      <h3>Visa Costs</h3>
      <ul>
        <li><strong>Schengen Visa Fee:</strong> ₹6,800</li>
        <li><strong>VFS Service Charge:</strong> ₹2,200</li>
        <li><strong>Documentation:</strong> ₹1,000</li>
        <li><strong>Total:</strong> ₹10,000 approximately</li>
      </ul>

      <h3>Required Documents</h3>
      <ul>
        <li>Valid passport (minimum 6 months validity)</li>
        <li>Completed visa application form</li>
        <li>Recent passport-size photographs</li>
        <li>Flight itinerary</li>
        <li>Hotel bookings or invitation letter</li>
        <li>Travel insurance (minimum €30,000 coverage)</li>
        <li>Bank statements (last 3 months)</li>
        <li>Employment certificate</li>
        <li>Income tax returns</li>
      </ul>

      <h3>Processing Time</h3>
      <p>Standard processing time is 15 working days, but can extend to 30-45 days during peak season.</p>

      <h3>Tips for Approval</h3>
      <ul>
        <li>Show strong ties to India (job, property, family)</li>
        <li>Maintain sufficient bank balance (₹2-3 lakhs)</li>
        <li>Provide detailed travel itinerary</li>
        <li>Book refundable tickets and hotels</li>
      </ul>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts[slug as keyof typeof blogPosts];

  // Attach click handlers for FAQ items inside injected HTML content.
  // Inline <script> inside dangerouslySetInnerHTML does not execute, so wire it here.
  useEffect(() => {
    if (!post || typeof document === 'undefined') return;
    const container = document.querySelector('.prose');
    if (!container) return;
    const questions = Array.from(container.querySelectorAll('.faq-question')) as HTMLElement[];
    function onClick(this: HTMLElement) {
      const item = this.closest('.faq-item') as HTMLElement | null;
      if (!item) return;
      item.classList.toggle('active');
      const icon = item.querySelector('.faq-icon');
      if (icon) icon.textContent = item.classList.contains('active') ? '−' : '+';
    }
    questions.forEach(q => q.addEventListener('click', onClick as EventListener));
    return () => questions.forEach(q => q.removeEventListener('click', onClick as EventListener));
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-mountain flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Under Testing Face</h2>
            <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-mountain">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/blog')}
          className="mb-6 hover:bg-white/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Button>

        <article className="bg-white/95 backdrop-blur rounded-2xl overflow-hidden shadow-xl">
          <div className="aspect-video overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </Button>
              </div>
            </header>

            <div
              className="prose prose-lg max-w-none text-gray-800"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: '1.8',
                fontSize: '16px'
              }}
            />
            <style>{`
              .prose h2 {
                margin-top: 2.5rem !important;
                margin-bottom: 1.5rem !important;
                font-size: 1.75rem !important;
                font-weight: 700 !important;
                color: #1f2937 !important;
              }
              .prose h3 {
                margin-top: 2rem !important;
                margin-bottom: 1rem !important;
                font-size: 1.5rem !important;
                font-weight: 600 !important;
                color: #374151 !important;
              }
              .prose p {
                margin-bottom: 1.5rem !important;
                line-height: 1.8 !important;
              }
              .prose ul {
                margin-top: 1rem !important;
                margin-bottom: 1.5rem !important;
                padding-left: 1.5rem !important;
              }
              .prose li {
                margin-bottom: 0.75rem !important;
                line-height: 1.7 !important;
              }
              .prose table {
                margin-top: 2rem !important;
                margin-bottom: 2rem !important;
                border-radius: 8px !important;
                overflow: hidden !important;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
              }
              .prose strong {
                font-weight: 600 !important;
                color: #1f2937 !important;
              }
              .faq-container {
                margin: 1rem 0;
              }
              .faq-item {
                border: 1px solid #e5e7eb;
                border-radius: 8px;
                margin-bottom: 0.5rem;
                overflow: hidden;
                transition: all 0.3s ease;
              }
              .faq-item:hover {
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
              }
              .faq-question {
                padding: 1rem;
                background: #f9fafb;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-weight: 600;
                color: #1f2937;
                transition: background-color 0.3s ease;
              }
              .faq-question:hover {
                background: #f3f4f6;
              }
              .faq-icon {
                font-size: 1.25rem;
                font-weight: bold;
                color: #6366f1;
                transition: transform 0.3s ease;
              }
              .faq-answer {
                max-height: 0;
                overflow: hidden;
                padding: 0 1rem;
                background: white;
                transition: max-height 0.3s ease, padding 0.3s ease;
              }
              .faq-item.active .faq-answer {
                max-height: 200px;
                padding: 1rem;
              }
              .faq-item.active .faq-icon {
                transform: rotate(45deg);
              }
            `}</style>

            <div className="mt-12 pt-8 border-t">
              <div className="flex gap-4">
                <Button
                  onClick={() => navigate('/blog')}
                  variant="outline"
                  className="flex-1"
                >
                  More Articles
                </Button>
                <Button
                  onClick={() => navigate('/')}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  Calculate Trip Cost
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;