
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Calendar,
  User,
  Search
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const blogPosts = [
  {
    id: 1,
    title: "5 Key Factors That Determine Investment Loan Approval",
    excerpt: "Explore the five foundations of investment loan approval: project viability, financial capacity, SPV/SPE structure, due diligence and compliance, and transaction readiness.",
    date: "June 12, 2023",
    author: "Dr. Ahmed Murad Al Balushi",
    category: "Investment Financing",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    tags: ["Investment Financing", "SPV/SPE", "Due Diligence"]
  },
  {
    id: 2,
    title: "The Rise of Venture Capital in Emerging Markets",
    excerpt: "Emerging markets are seeing unprecedented growth in venture capital activity. We analyze the trends, opportunities, and challenges for startups seeking VC funding in these dynamic economies.",
    date: "May 28, 2023",
    author: "Sarah Johnson",
    category: "Venture Capital",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    tags: ["Venture Capital", "Emerging Markets", "Startups"]
  },
  {
    id: 3,
    title: "How to Prepare Your Business for Equity Investment",
    excerpt: "Securing equity investment requires thorough preparation. This guide outlines the essential steps to position your business attractively to potential investors and maximize your valuation.",
    date: "May 15, 2023",
    author: "Mehmet Yilmaz",
    category: "Equity Investments",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    tags: ["Equity Funding", "Business Growth", "Investors"]
  },
  {
    id: 4,
    title: "The Future of International Funding Post-Pandemic",
    excerpt: "The global pandemic has reshaped international funding landscapes. We examine the emerging trends, new opportunities, and strategic considerations for businesses seeking cross-border investment.",
    date: "April 30, 2023",
    author: "Lisa Chen",
    category: "International Funding",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    tags: ["International Finance", "Global Markets", "Post-Pandemic"]
  },
  {
    id: 5,
    title: "Sustainable Finance: Funding the Green Economy",
    excerpt: "Environmental sustainability is increasingly influencing investment decisions. This article explores how businesses focused on green initiatives can access specialized funding and capitalize on the growing demand for sustainable solutions.",
    date: "April 15, 2023",
    author: "David Wilson",
    category: "Project Financing",
    image: "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    tags: ["Sustainability", "Green Finance", "ESG"]
  },
  {
    id: 6,
    title: "Building Financial Resilience: Strategies for SMEs",
    excerpt: "Small and medium enterprises face unique financial challenges. We provide practical strategies for building financial resilience, managing cash flow, and securing appropriate funding for sustainable growth.",
    date: "March 29, 2023",
    author: "Fatima Al-Balushi",
    category: "Business Strategy",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    tags: ["SMEs", "Financial Planning", "Business Strategy"]
  }
];

const popularCategories = [
  "Business Loans",
  "Venture Capital",
  "Equity Investments",
  "Project Financing",
  "International Funding",
  "Business Strategy",
  "Market Analysis"
];

const Blog: React.FC = () => {
  return (
    <div className="py-12 bg-slate-50/60 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-gold-500" />
            <span className="text-cruise-600 font-bold text-xs tracking-[0.25em] uppercase">
              Insights &amp; Updates
            </span>
            <span className="h-[2px] w-8 bg-gold-500" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cruise-950 mb-4">
            Our Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest insights, trends, and advice from our finance and investment experts.
          </p>
        </div>

        {/* Search and Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-14">
          {/* Search */}
          <div className="lg:col-span-2">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search articles..."
                className="pr-10 h-12 rounded-xl bg-white"
              />
              <Search className="absolute right-3.5 top-3.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Categories Dropdown */}
          <div>
            <select className="w-full h-12 px-3 border border-input rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-cruise-100">
              <option value="">Browse by Category</option>
              {popularCategories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Link to={`/blog/${blogPosts[0].id}`} className="block group">
            <div className="grid grid-cols-1 lg:grid-cols-5 bg-white rounded-3xl overflow-hidden shadow-lg shadow-cruise-950/5 border border-gray-100 transition-all duration-300 hover:shadow-xl">
              <div className="lg:col-span-3 order-2 lg:order-1 p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-5">
                  <span className="px-3 py-1.5 bg-cruise-50 text-cruise-700 rounded-full text-xs font-bold uppercase tracking-widest">
                    Featured
                  </span>
                  <span className="px-3 py-1.5 bg-gold-50 text-gold-700 rounded-full text-xs font-bold uppercase tracking-widest">
                    {blogPosts[0].category}
                  </span>
                </div>

                <h2 className="font-display text-2xl lg:text-4xl font-bold text-cruise-950 mb-4 leading-tight group-hover:text-cruise-600 transition-colors">
                  {blogPosts[0].title}
                </h2>

                <p className="text-gray-600 mb-8 line-clamp-3 lg:line-clamp-4 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 flex items-center">
                      <User className="h-4 w-4 mr-1.5" />
                      {blogPosts[0].author}
                    </span>
                    <span className="mx-3 text-gray-300">•</span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="h-4 w-4 mr-1.5" />
                      {blogPosts[0].date}
                    </span>
                  </div>

                  <span className="text-gold-600 font-bold text-sm inline-flex items-center group-hover:gap-2 gap-1 transition-all">
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-2 order-1 lg:order-2 h-60 lg:h-auto overflow-hidden relative">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cruise-950/30 to-transparent lg:bg-gradient-to-l" />
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="block group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 h-full flex flex-col">
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-cruise-900">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-xl font-bold text-cruise-950 mb-3 line-clamp-2 group-hover:text-cruise-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-5 text-sm line-clamp-3 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500 flex items-center">
                      <User className="h-3.5 w-3.5 mr-1.5" />
                      {post.author}
                    </span>

                    <span className="text-gold-600 font-bold text-sm inline-flex items-center">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Categories and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Popular Categories */}
          <div className="bg-white rounded-3xl shadow-sm p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-6 bg-gold-500" />
              <h3 className="font-display text-xl font-bold text-cruise-950">Popular Categories</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularCategories.map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="px-3.5 py-1.5 bg-gray-50 border border-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-cruise-50 hover:text-cruise-700 hover:border-cruise-100 transition-colors"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-2 bg-cruise-950 rounded-3xl p-8 lg:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-cruise-500/20 blur-2xl" />
            <h3 className="font-display text-2xl font-bold mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-slate-300 mb-6 max-w-lg leading-relaxed">
              Get the latest funding insights, market trends, and investment opportunities delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 relative">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow h-12 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-slate-400"
              />
              <Button className="whitespace-nowrap h-12 px-8 rounded-xl bg-gold-500 text-cruise-950 font-bold hover:bg-gold-400">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
