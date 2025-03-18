
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ChevronRight, 
  Calendar, 
  User, 
  Tag,
  Search
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const blogPosts = [
  {
    id: 1,
    title: "5 Key Factors That Determine Your Business Loan Approval",
    excerpt: "Understanding what lenders look for when reviewing business loan applications can significantly improve your chances of securing funding. In this article, we explore the five critical factors that influence loan approval decisions.",
    date: "June 12, 2023",
    author: "Ahmed Al-Maamari",
    category: "Business Loans",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    tags: ["Funding", "Business Loans", "Finance"]
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
    <div className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and advice from our finance and investment experts.
          </p>
        </div>
        
        {/* Search and Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Search */}
          <div className="lg:col-span-2">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search articles..."
                className="pr-10"
              />
              <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
            </div>
          </div>
          
          {/* Categories Dropdown */}
          <div>
            <select className="w-full h-10 px-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-cruise-100">
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
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="lg:col-span-3 order-2 lg:order-1 p-8">
                <div className="flex items-center mb-4">
                  <span className="text-sm font-medium text-cruise-600 bg-cruise-50 px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {blogPosts[0].date}
                  </span>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-cruise-600 transition-colors">
                  {blogPosts[0].title}
                </h2>
                
                <p className="text-gray-600 mb-6 line-clamp-3 lg:line-clamp-4">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {blogPosts[0].author}
                    </span>
                  </div>
                  
                  <Button variant="ghost" className="group/button">
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                  </Button>
                </div>
              </div>
              
              <div className="lg:col-span-2 order-1 lg:order-2 h-60 lg:h-auto overflow-hidden">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </Link>
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="block group">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-medium text-cruise-600 bg-cruise-50 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-cruise-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </span>
                    
                    <span className="text-sm text-cruise-600 font-medium flex items-center group-hover:text-cruise-700">
                      Read More
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-xl font-bold mb-4">Popular Categories</h3>
            <div className="flex flex-wrap gap-2">
              {popularCategories.map((category, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-cruise-50 hover:text-cruise-600 transition-colors"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="lg:col-span-2 bg-cruise-50 rounded-xl shadow-sm p-6 border border-cruise-100">
            <h3 className="text-xl font-bold mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Get the latest funding insights, market trends, and investment opportunities delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow"
              />
              <Button className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
