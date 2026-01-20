import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import heroImage1 from '@/assets/hero/hero-1.jpg';
import heroImage2 from '@/assets/hero/hero-2.jpg';
import heroImage3 from '@/assets/hero/hero-3.jpg';
import heroImage4 from '@/assets/hero/hero-4.jpg';
import heroImage5 from '@/assets/hero/hero-5.jpg';

const slides = [
  {
    image: heroImage1,
    title: "Building Prosperity for Families & Communities",
    subtitle: "Empowering local businesses and families with financial solutions rooted in trust and cultural understanding",
    ctaText: "Learn About Us",
    ctaLink: "/about"
  },
  {
    image: heroImage2,
    title: "Global Investment Funding Solutions",
    subtitle: "Connecting ambitious businesses with the capital they need to grow and thrive in competitive markets",
    ctaText: "Apply For Funding",
    ctaLink: "/application"
  },
  {
    image: heroImage3,
    title: "Data-Driven Investment Decisions",
    subtitle: "Leveraging analytics and market insights to deliver strategic funding solutions for sustainable growth",
    ctaText: "Explore Our Services",
    ctaLink: "/services"
  },
  {
    image: heroImage4,
    title: "Property & Project Financing",
    subtitle: "Specialized funding solutions for real estate development and large-scale infrastructure projects",
    ctaText: "View Services",
    ctaLink: "/services#project-financing"
  },
  {
    image: heroImage5,
    title: "Business Loans & Asset Financing",
    subtitle: "Flexible financing options with competitive rates to help you acquire the assets your business needs",
    ctaText: "Get Started",
    ctaLink: "/application"
  }
];

const HeroCarousel = () => {
  const autoplayPlugin = Autoplay({ delay: 5000, stopOnInteraction: true });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [autoplayPlugin as any]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative">
              <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        {slide.subtitle}
                      </p>
                      <Button 
                        asChild 
                        size="lg" 
                        className="bg-cruise-600 hover:bg-cruise-700 text-white animate-fade-in"
                        style={{ animationDelay: '0.2s' }}
                      >
                        <Link to={slide.ctaLink}>{slide.ctaText}</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-3 transition-all duration-200 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-3 transition-all duration-200 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-3 rounded-full transition-all duration-300",
              selectedIndex === index 
                ? "w-12 bg-white" 
                : "w-3 bg-white/50 hover:bg-white/75"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
