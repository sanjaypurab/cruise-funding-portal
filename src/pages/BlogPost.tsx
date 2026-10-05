
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Calendar,
  Copy,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Check,
  ArrowRight,
  ChevronRight,
  Clock,
  AlertTriangle
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { articleSections, ArticleSection } from '@/content/investmentLoanArticle';

const blogPosts = [
  {
    id: "1",
    title: "5 Key Factors That Determine Investment Loan Approval",
    date: "June 12, 2023",
    author: "Dr. Ahmed Murad Al Balushi",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
    authorRole: "Chief Executive Officer",
    category: "Investment Financing",
    featuredImage: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    tags: ["Investment Financing", "SPV/SPE", "Due Diligence"],
    content: articleSections
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

const wordCount = articleSections.reduce((total, section) => {
  const texts = [
    section.title,
    section.subtitle || "",
    section.lead || "",
    ...(section.paragraphs || []),
    ...(section.paragraphsAfterList || []),
    ...(section.paragraphsAfterStatement || []),
    ...(section.paragraphsAfterQuote || []),
    ...(section.paragraphsAfterQuestions || []),
    section.listIntro || "",
    ...(section.list || []),
    ...(section.callouts || []).map((c) => `${c.label} ${c.text}`),
    ...(section.stages || []).map((s) => `${s.name} ${s.description}`),
    ...(section.principles || []).map((p) => `${p.label} ${p.text}`),
    ...(section.questions || []),
    section.statement || "",
    section.note || "",
  ].join(" ");
  return total + texts.split(/\s+/).filter(Boolean).length;
}, 0);

const readingTime = Math.max(1, Math.round(wordCount / 200));

/* ---------- Section building blocks ---------- */

const SectionHeading: React.FC<{ section: ArticleSection }> = ({ section }) => (
  <div className="mb-8">
    <div className="flex items-baseline gap-4">
      {section.number && (
        <span className="font-display text-5xl md:text-6xl font-black leading-none text-gold-500/25 select-none">
          {section.number}
        </span>
      )}
      <div>
        {section.subtitle && (
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-2">
            {section.subtitle}
          </p>
        )}
        <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-cruise-950">
          {section.title}
        </h2>
      </div>
    </div>
    <div className="h-1 w-20 bg-gold-500 mt-4 rounded-full" />
  </div>
);

const ChipList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="grid sm:grid-cols-2 gap-3 my-6">
    {items.map((item) => (
      <li
        key={item}
        className="flex items-start gap-3 bg-gray-50 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-700"
      >
        <span className="mt-0.5 h-5 w-5 rounded-full bg-cruise-50 flex items-center justify-center shrink-0">
          <Check className="h-3 w-3 text-cruise-600" strokeWidth={3} />
        </span>
        {item}
      </li>
    ))}
  </ul>
);

const ArticleSectionView: React.FC<{ section: ArticleSection }> = ({ section }) => (
  <section className="mb-16">
    <SectionHeading section={section} />

    {section.lead && (
      <p className="font-display italic text-xl md:text-2xl text-cruise-900 border-l-4 border-cruise-500 pl-5 py-1 mb-8">
        {section.lead}
      </p>
    )}

    {section.paragraphs?.map((paragraph) => (
      <p key={paragraph} className="text-gray-600 leading-relaxed text-lg mb-5">
        {paragraph}
      </p>
    ))}

    {section.listIntro && (
      <p className="text-gray-700 font-semibold mb-4">{section.listIntro}</p>
    )}

    {section.list && <ChipList items={section.list} />}

    {section.paragraphsAfterList?.map((paragraph) => (
      <p key={paragraph} className="text-gray-600 leading-relaxed text-lg mb-5 mt-2">
        {paragraph}
      </p>
    ))}

    {section.callouts && (
      <div className="grid sm:grid-cols-2 gap-4 my-8">
        {section.callouts.map((callout) => (
          <div
            key={callout.label}
            className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-gold-200 transition-all duration-300"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-2">
              {callout.label}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">{callout.text}</p>
          </div>
        ))}
      </div>
    )}

    {section.statement && (
      <div className="bg-cruise-950 text-white rounded-2xl px-6 py-6 my-10 text-center">
        <p className="font-display text-xl md:text-2xl font-bold tracking-wide uppercase">
          {section.statement}
        </p>
      </div>
    )}

    {section.paragraphsAfterStatement?.map((paragraph) => (
      <p key={paragraph} className="text-gray-600 leading-relaxed text-lg mb-5">
        {paragraph}
      </p>
    ))}

    {section.note && (
      <div className="bg-gold-50 border-l-4 border-gold-500 rounded-r-xl px-5 py-4 my-6 flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-gold-600 shrink-0 mt-0.5" />
        <p className="text-sm text-gray-700 leading-relaxed">{section.note}</p>
      </div>
    )}

    {section.stages && (
      <div className="bg-cruise-950 rounded-3xl p-6 md:p-10 my-8 shadow-xl">
        <p className="text-xs font-bold text-gold-500 uppercase tracking-[0.3em] mb-8">
          The path to funding
        </p>
        <div className="space-y-0">
          {section.stages.map((stage, index) => {
            const isLast = index === section.stages!.length - 1;
            return (
              <div
                key={stage.name}
                className={`relative pl-10 ${isLast ? "" : "pb-8"} border-l-2 border-cruise-500/30`}
              >
                <span
                  className={`absolute -left-[11px] top-0.5 h-5 w-5 rounded-full shadow-lg ${
                    isLast
                      ? "bg-gold-500 shadow-gold-500/50"
                      : "bg-cruise-400 shadow-cruise-400/50"
                  }`}
                />
                <h4 className="text-white font-bold text-lg mb-1.5 flex items-center gap-3">
                  <span className="text-xs font-bold text-gold-500/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {stage.name}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {stage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    )}

    {section.principles && (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-8">
        {section.principles.map((principle) => (
          <div
            key={principle.label}
            className="bg-gray-50 rounded-xl p-4 border-t-2 border-gold-500/60"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-cruise-700 mb-1.5">
              {principle.label}
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">{principle.text}</p>
          </div>
        ))}
      </div>
    )}

    {section.quote && (
      <div className="text-center my-10">
        <p className="text-gold-500 font-display text-5xl leading-none mb-2">&ldquo;</p>
        <p className="font-display italic text-2xl md:text-3xl text-cruise-900 max-w-xl mx-auto">
          {section.quote}
        </p>
      </div>
    )}

    {section.paragraphsAfterQuote?.map((paragraph) => (
      <p key={paragraph} className="text-gray-600 leading-relaxed text-lg mb-5">
        {paragraph}
      </p>
    ))}

    {section.questions && (
      <ul className="space-y-3 my-6">
        {section.questions.map((question) => (
          <li key={question} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 bg-gold-500 rotate-45 shrink-0" />
            <span className="font-semibold text-gray-800">{question}</span>
          </li>
        ))}
      </ul>
    )}

    {section.paragraphsAfterQuestions?.map((paragraph) => (
      <p key={paragraph} className="text-gray-600 leading-relaxed text-lg mb-5 mt-4">
        {paragraph}
      </p>
    ))}

    {section.subTitle && (
      <h3 className="font-display text-xl md:text-2xl font-bold text-cruise-950 mt-10 mb-4">
        {section.subTitle}
      </h3>
    )}

    {section.closingFlow && (
      <div className="flex flex-wrap items-center gap-2 mt-8">
        {section.closingFlow.map((step, index) => (
          <span key={step} className="inline-flex items-center gap-2">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-gray-300 shrink-0" />
            )}
            <span className="px-3.5 py-1.5 bg-cruise-50 text-cruise-700 rounded-full text-sm font-semibold border border-cruise-100">
              {step}
            </span>
          </span>
        ))}
      </div>
    )}
  </section>
);

/* ---------- Page ---------- */

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Find the blog post with the matching ID
  const post = blogPosts.find((post) => post.id === id) || blogPosts[0];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "The article link has been copied to your clipboard.",
    });
  };

  return (
    <div className="py-12 bg-slate-50/60 min-h-screen">
      {/* Reading progress */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
        <div
          className="h-full bg-gold-500 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Navigation Back to Blog */}
        <div className="mb-10">
          <Button asChild variant="ghost" className="group">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-8 bg-gold-500" />
            <span className="text-cruise-600 font-bold text-xs tracking-[0.25em] uppercase">
              {post.category}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-cruise-950 leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-8">
            <div className="flex items-center">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-11 h-11 rounded-full mr-3 object-cover ring-2 ring-cruise-100"
              />
              <div>
                <p className="font-semibold text-cruise-950">{post.author}</p>
                <p className="text-sm text-gray-500 flex items-center gap-1.5">
                  {post.authorRole}
                  <span className="text-gray-300">•</span>
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                  <span className="text-gray-300">•</span>
                  <Clock className="h-3.5 w-3.5" />
                  {readingTime} min read
                </p>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={handleCopyLink}
              >
                <Copy className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-cruise-950/10">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Social Sharing Sidebar (Desktop) */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
                  Share this article
                </p>
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm" className="justify-start rounded-xl">
                    <Facebook className="h-4 w-4 mr-2 text-cruise-600" />
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start rounded-xl">
                    <Twitter className="h-4 w-4 mr-2 text-cruise-600" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start rounded-xl">
                    <Linkedin className="h-4 w-4 mr-2 text-cruise-600" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="justify-start rounded-xl"
                    onClick={handleCopyLink}
                  >
                    <Copy className="h-4 w-4 mr-2 text-cruise-600" />
                    Copy Link
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="max-w-none">
                {post.content.map((section, index) => (
                  <ArticleSectionView key={index} section={section} />
                ))}
              </article>

              {/* Article Tags */}
              <div className="flex flex-wrap gap-2 mt-4 mb-10">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3.5 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-full text-sm font-medium"
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
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 mb-14 border-t-2 border-t-gold-500">
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-cruise-100 shrink-0"
                  />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-1">
                      About the author
                    </p>
                    <h3 className="font-display text-lg font-bold text-cruise-950 mb-2">
                      {post.author}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Dr. Ahmed Murad Al Balushi is the CEO of Cruise World International
                      Limited with over 20 years of experience in finance and investments.
                      He specializes in business funding strategies and international
                      market expansion.
                    </p>
                    <div className="flex space-x-3 mt-4">
                      <a
                        href="#"
                        className="h-8 w-8 rounded-full bg-cruise-50 flex items-center justify-center text-cruise-600 hover:bg-cruise-100 transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        className="h-8 w-8 rounded-full bg-cruise-50 flex items-center justify-center text-cruise-600 hover:bg-cruise-100 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mb-16">
                <h3 className="font-display text-2xl font-bold text-cruise-950 mb-8 flex items-center gap-3">
                  <span className="h-8 w-8 rounded-xl bg-cruise-50 flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-cruise-600" />
                  </span>
                  Comments (12)
                </h3>

                <div className="space-y-5">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-start mb-5">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full mr-3 object-cover ring-2 ring-cruise-50"
                      />
                      <div>
                        <div className="flex items-center mb-1">
                          <h4 className="font-semibold text-cruise-950">Michael Johnson</h4>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-500">2 days ago</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          This article was incredibly helpful. I've been struggling to
                          understand why my loan applications keep getting rejected. The
                          point about cash flow visibility is especially relevant to my
                          situation.
                        </p>
                      </div>
                    </div>

                    <div className="pl-12">
                      <div className="flex items-start bg-cruise-50/60 rounded-2xl p-4">
                        <img
                          src={post.authorImage}
                          alt="Author Avatar"
                          className="w-8 h-8 rounded-full mr-3 object-cover shrink-0"
                        />
                        <div>
                          <div className="flex items-center mb-1">
                            <h4 className="font-semibold text-cruise-950">{post.author}</h4>
                            <span className="mx-2 text-gold-500 text-xs font-bold uppercase tracking-widest">
                              Author
                            </span>
                            <span className="text-sm text-gray-500">• 1 day ago</span>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            Thanks for your comment, Michael. Cash flow is indeed critical.
                            If you'd like more personalized advice, feel free to reach out
                            through our contact page.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-start">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full mr-3 object-cover ring-2 ring-cruise-50"
                      />
                      <div>
                        <div className="flex items-center mb-1">
                          <h4 className="font-semibold text-cruise-950">Sarah Williams</h4>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-500">3 days ago</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          I appreciate the breakdown of the five factors. Could you provide
                          more information about how industry-specific factors impact loan
                          approvals? I'm in the renewable energy sector.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="mt-6 rounded-full">
                  Load More Comments
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="max-w-6xl mx-auto pt-16 border-t border-gray-200">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="h-[2px] w-8 bg-gold-500" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-cruise-600">
                  Keep reading
                </span>
              </div>
              <h2 className="font-display text-3xl font-bold text-cruise-950">
                Related Articles
              </h2>
            </div>
            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center text-cruise-600 font-semibold text-sm hover:text-cruise-700"
            >
              View all articles
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((related) => (
              <Link key={related.id} to={`/blog/${related.id}`} className="block group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-cruise-900">
                      {related.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-cruise-950 mb-3 line-clamp-2 group-hover:text-cruise-600 transition-colors">
                      {related.title}
                    </h3>

                    <p className="text-gray-600 mb-5 text-sm line-clamp-3 leading-relaxed">
                      {related.excerpt}
                    </p>

                    <span className="text-gold-600 font-bold text-sm inline-flex items-center">
                      Read More
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
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
