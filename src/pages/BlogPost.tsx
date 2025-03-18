
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Tag, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Copy, 
  MessageCircle 
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const blogPosts = [
  {
    id: "1",
    title: "5 Key Factors That Determine Your Business Loan Approval",
    date: "June 12, 2023",
    author: "Ahmed Al-Maamari",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
    authorRole: "Chief Executive Officer",
    category: "Business Loans",
    featuredImage: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    tags: ["Funding", "Business Loans", "Finance"],
    content: `
      <p class="lead">Understanding what lenders look for when reviewing business loan applications can significantly improve your chances of securing funding. In this article, we explore the five critical factors that influence loan approval decisions.</p>
      
      <p>Securing a business loan can be a pivotal moment for your company's growth trajectory. Whether you're looking to expand operations, invest in new equipment, or manage cash flow, understanding the key factors that lenders evaluate can make the difference between approval and rejection.</p>
      
      <h2>1. Credit History and Score</h2>
      
      <p>Your credit history is one of the first elements lenders will scrutinize. This includes both your personal credit score (especially for small business owners) and your business credit profile if established.</p>
      
      <p>Lenders view your credit history as an indicator of how you've managed financial obligations in the past and, by extension, how you're likely to handle them in the future. A strong credit score demonstrates reliability and reduces perceived risk.</p>
      
      <ul>
        <li>Personal credit scores typically need to be 650+ for traditional bank loans</li>
        <li>Business credit profiles are assessed through agencies like Dun & Bradstreet, Equifax Business, and Experian Business</li>
        <li>Late payments, defaults, or bankruptcies can significantly impact approval chances</li>
      </ul>
      
      <p>If your credit score isn't ideal, consider working to improve it before applying, or look into alternative lending options that place less emphasis on credit scores.</p>
      
      <h2>2. Cash Flow and Financial Health</h2>
      
      <p>Lenders need assurance that your business generates sufficient cash flow to service debt while maintaining operations. They'll analyze financial statements including:</p>
      
      <ul>
        <li>Income statements</li>
        <li>Balance sheets</li>
        <li>Cash flow statements</li>
        <li>Accounts receivable and payable aging reports</li>
      </ul>
      
      <p>A healthy debt-to-income ratio is crucial. Most lenders prefer this ratio to be below 43%, meaning your total monthly debt payments shouldn't exceed 43% of your monthly income.</p>
      
      <blockquote>
        <p>"Cash flow is the lifeblood of any business. Without a clear demonstration that you can generate consistent positive cash flow, lenders will be hesitant to extend credit, regardless of other strengths in your application."</p>
      </blockquote>
      
      <h2>3. Business Plan and Purpose of Loan</h2>
      
      <p>Articulating a clear, compelling reason for seeking funding is essential. Lenders want to see that you have a strategic plan for using the loan that will strengthen your business and enhance your ability to repay.</p>
      
      <p>Your business plan should include:</p>
      
      <ul>
        <li>Executive summary</li>
        <li>Company description</li>
        <li>Market analysis</li>
        <li>Organization and management structure</li>
        <li>Service or product line</li>
        <li>Marketing and sales strategy</li>
        <li>Financial projections</li>
      </ul>
      
      <p>When explaining the loan purpose, be specific about how the funds will be used and how they'll contribute to growth or increased profitability.</p>
      
      <h2>4. Collateral and Guarantees</h2>
      
      <p>Many business loans require collateral—assets that the lender can claim if you default on the loan. Common forms of collateral include:</p>
      
      <ul>
        <li>Real estate</li>
        <li>Equipment</li>
        <li>Inventory</li>
        <li>Accounts receivable</li>
        <li>Cash savings or investments</li>
      </ul>
      
      <p>The value of collateral typically needs to exceed the loan amount, often by 20% or more, to account for potential depreciation or liquidation costs.</p>
      
      <p>Additionally, lenders frequently require personal guarantees from business owners, making you personally liable for the debt if your business cannot repay it.</p>
      
      <h2>5. Industry and Economic Conditions</h2>
      
      <p>Factors beyond your control also influence loan decisions. Lenders assess:</p>
      
      <ul>
        <li>The overall economic climate</li>
        <li>Industry-specific trends and challenges</li>
        <li>Market competition</li>
        <li>Regulatory environment</li>
      </ul>
      
      <p>Businesses in stable or growing industries generally find it easier to secure funding than those in volatile or declining sectors. Similarly, applications during economic downturns face greater scrutiny.</p>
      
      <p>Understanding these external factors can help you time your application strategically or address potential concerns proactively in your business plan.</p>
      
      <h2>Conclusion</h2>
      
      <p>While loan approval depends on numerous factors, focusing on these five key areas will significantly strengthen your application. Before applying, take time to assess your position in each category and address any weaknesses.</p>
      
      <p>Remember that different lenders have different criteria and risk tolerances. If traditional banks seem hesitant, consider alternative funding sources such as online lenders, credit unions, or specialized industry lenders who might better understand your business model.</p>
      
      <p>At Cruise World International, we work with businesses to understand their unique funding needs and connect them with the most appropriate financing solutions. Our experts can guide you through the application process and help you present your business in the best possible light to potential lenders.</p>
    `
  }
];

// Related posts data
const relatedPosts = [
  {
    id: 2,
    title: "How to Improve Your Business Credit Score",
    excerpt: "Learn effective strategies to build and improve your business credit profile to enhance funding opportunities.",
    date: "May 28, 2023",
    author: "Sarah Johnson",
    category: "Business Loans",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    title: "Understanding Different Types of Business Loans",
    excerpt: "A comprehensive guide to the various business loan options available and how to choose the right one for your needs.",
    date: "May 15, 2023",
    author: "Mehmet Yilmaz",
    category: "Business Loans",
    image: "https://images.unsplash.com/photo-1586021280718-53fbadde9d69?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 4,
    title: "Preparing Financial Documents for Loan Applications",
    excerpt: "Essential financial statements and documents you need to organize before applying for business funding.",
    date: "April 30, 2023",
    author: "Lisa Chen",
    category: "Business Loans",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80"
  }
];

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  // Find the blog post with the matching ID
  const post = blogPosts.find(post => post.id === id) || blogPosts[0];
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "The article link has been copied to your clipboard.",
    });
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Navigation Back to Blog */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="group">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
          </Button>
        </div>
        
        {/* Article Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center mb-4">
            <span className="text-sm font-medium text-cruise-600 bg-cruise-50 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="mx-3 text-gray-300">•</span>
            <span className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={post.authorImage} 
                alt={post.author} 
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="font-medium">{post.author}</p>
                <p className="text-sm text-gray-500">{post.authorRole}</p>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="rounded-full" onClick={handleCopyLink}>
                <Copy className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="rounded-xl overflow-hidden">
            <img 
              src={post.featuredImage} 
              alt={post.title} 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Social Sharing Sidebar (Desktop) */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <p className="text-sm font-medium mb-3">Share this article</p>
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start" onClick={handleCopyLink}>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Link
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
              
              {/* Article Tags */}
              <div className="flex flex-wrap gap-2 mt-8 mb-8">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              {/* Social Sharing (Mobile) */}
              <div className="flex flex-wrap justify-center gap-2 my-8 lg:hidden">
                <Button variant="outline" size="sm">
                  <Facebook className="h-4 w-4 mr-1" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Twitter className="h-4 w-4 mr-1" />
                  Tweet
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-1" />
                  Post
                </Button>
                <Button variant="outline" size="sm" onClick={handleCopyLink}>
                  <Copy className="h-4 w-4 mr-1" />
                  Copy
                </Button>
              </div>
              
              {/* Author Bio */}
              <div className="bg-gray-50 rounded-xl p-6 mb-12">
                <div className="flex items-start">
                  <img 
                    src={post.authorImage} 
                    alt={post.author} 
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{post.author}</h3>
                    <p className="text-gray-600 mb-3">
                      Ahmed Al-Maamari is the CEO of Cruise World International Limited with over 20 years of experience in finance and investments. He specializes in business funding strategies and international market expansion.
                    </p>
                    <div className="flex space-x-2">
                      <a href="#" className="text-cruise-600 hover:text-cruise-700">
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a href="#" className="text-cruise-600 hover:text-cruise-700">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Comments Section */}
              <div className="mb-16">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Comments (12)
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-100">
                    <div className="flex items-start mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80" 
                        alt="User Avatar" 
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <div className="flex items-center mb-1">
                          <h4 className="font-medium">Michael Johnson</h4>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-500">2 days ago</span>
                        </div>
                        <p className="text-gray-600">
                          This article was incredibly helpful. I've been struggling to understand why my loan applications keep getting rejected. The point about cash flow visibility is especially relevant to my situation.
                        </p>
                      </div>
                    </div>
                    
                    <div className="pl-12">
                      <div className="flex items-start">
                        <img 
                          src={post.authorImage}
                          alt="Author Avatar" 
                          className="w-8 h-8 rounded-full mr-3 object-cover"
                        />
                        <div>
                          <div className="flex items-center mb-1">
                            <h4 className="font-medium">{post.author}</h4>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-sm text-gray-500">1 day ago</span>
                          </div>
                          <p className="text-gray-600">
                            Thanks for your comment, Michael. Cash flow is indeed critical. If you'd like more personalized advice, feel free to reach out through our contact page.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-100">
                    <div className="flex items-start">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80" 
                        alt="User Avatar" 
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <div className="flex items-center mb-1">
                          <h4 className="font-medium">Sarah Williams</h4>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-500">3 days ago</span>
                        </div>
                        <p className="text-gray-600">
                          I appreciate the breakdown of the five factors. Could you provide more information about how industry-specific factors impact loan approvals? I'm in the renewable energy sector.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button className="mt-6">
                  Load More Comments
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((related) => (
              <Link key={related.id} to={`/blog/${related.id}`} className="block group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md border border-gray-100">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={related.image} 
                      alt={related.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-xs font-medium text-cruise-600 bg-cruise-50 px-2 py-1 rounded-full">
                        {related.category}
                      </span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {related.date}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-cruise-600 transition-colors">
                      {related.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {related.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
