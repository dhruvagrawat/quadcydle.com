import { BlogPost } from "../../../types/blog";

const post: BlogPost = {
  slug: "restaurant-delivery-apps-guide",
  title: "Getting Your Restaurant on Zomato, Swiggy and ONDC — and When to Build Your Own App",
  seoTitle: "Zomato, Swiggy & ONDC: A Restaurant Onboarding Guide",
  seoDescription:
    "How to get your restaurant on Zomato, Swiggy and ONDC — documents, menus and photos that sell — and when your own ordering app pays off.",
  excerpt:
    "Delivery platforms bring orders but take a big cut. A practical guide to onboarding, menus and photos that sell, and the point where your own ordering app starts paying off.",
  category: "Food & Hospitality",
  tags: ["Restaurants", "Delivery", "Apps"],
  author: { name: "Quadcydle Team", image: "/blog/blog-01.png" },
  mainImage: "/blog/blog-small-03.png",
  publishedAt: "2026-06-26",
  readTime: "7 min read",
  services: ["/services/restaurant-onboarding", "/services/restaurant-app"],
  content: `
<p>For most restaurants, delivery platforms are no longer optional. Customers open Zomato or Swiggy before they think about calling you. But getting listed is only step one — how your menu, photos and ratings look decides whether you get orders. And at some point, the commissions add up enough that your own ordering channel makes sense.</p>

<h2>Step 1: Get the Paperwork Ready</h2>
<p>Every platform will ask for most of these. Having them ready turns a weeks-long process into days:</p>
<ul>
<li>FSSAI licence (or your local food-safety registration)</li>
<li>GST registration and PAN</li>
<li>Bank account details and a cancelled cheque</li>
<li>Your full menu with prices</li>
<li>Restaurant and food photographs</li>
<li>Opening hours and delivery radius</li>
</ul>

<h2>Step 2: Choose Your Platforms</h2>
<h3>Zomato and Swiggy</h3>
<p>The biggest reach in most Indian cities, with strong discovery features and their own delivery fleets. Commissions typically range from 18–30% depending on your agreement and whether you use their delivery partners.</p>
<h3>ONDC</h3>
<p>The Open Network for Digital Commerce lets customers order from you through many buyer apps (Paytm, Magicpin and others) with generally lower commissions. It's a growing channel and worth being on early.</p>
<h3>Others</h3>
<p>Depending on your market, EatSure, Magicpin or international platforms like Uber Eats and Deliveroo may also make sense.</p>

<h2>Step 3: Build a Menu That Sells</h2>
<ul>
<li><strong>Lead with photos.</strong> Listings with real, well-lit photos of every popular dish consistently outperform text-only menus.</li>
<li><strong>Write short, appetising descriptions.</strong> Mention key ingredients, spice level and portion size.</li>
<li><strong>Keep it focused.</strong> A 150-item menu is hard to browse on a phone. Group into clear categories with your best-sellers at the top.</li>
<li><strong>Price for the platform.</strong> Many restaurants price delivery menus slightly higher to absorb commission — check each platform's rules.</li>
</ul>

<h2>Step 4: Protect Your Ratings</h2>
<p>Ratings drive ranking. Pack food well, keep prep times honest, respond to reviews (especially negative ones), and mark items unavailable rather than cancelling orders.</p>

<h2>When Should You Build Your Own Ordering App?</h2>
<p>Platforms are great for discovery but expensive for loyal customers. Your own online ordering website or app starts to pay off when:</p>
<ul>
<li>You're paying more than roughly ₹1–1.5 lakh (or £1,000+) a month in commissions.</li>
<li>A large share of orders come from repeat customers who'd happily order direct.</li>
<li>You want loyalty points, table reservations or your own offers.</li>
<li>You run multiple outlets and need one system for menus and orders.</li>
</ul>
<p>A branded app with ordering, payments and push notifications — built in React Native for iOS and Android — typically pays for itself within months at that volume. See our <a href="/services/restaurant-app">restaurant app development</a> packages, or read the broader guide on <a href="/blog/does-your-business-need-a-mobile-app">whether your business needs a mobile app</a>.</p>

<h2>Let Us Handle the Setup</h2>
<p>Our <a href="/services/restaurant-onboarding">delivery platform onboarding</a> covers documentation, menu setup, photography guidance and listing optimisation across Zomato, Swiggy and ONDC — from £199 for a single platform. <a href="/contact">Get in touch</a> and we'll tell you which platforms fit your restaurant.</p>
`,
};

export default post;
