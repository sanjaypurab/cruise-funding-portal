
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  overlayColor?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = 'Apply Now',
  ctaLink = '/application',
  backgroundImage = 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  overlayColor = 'from-cruise-950/80 to-cruise-900/70',
}) => {
  return (
    <div className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-gradient-to-r bg-black/30"></div>
          <img
            src={backgroundImage}
            alt="Hero background"
            className="h-full w-full object-cover"
            loading="eager"
          />
          {/* Overlay gradient */}
          <div className={`absolute inset-0 bg-gradient-to-r ${overlayColor}`}></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {subtitle}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-cruise-500 hover:bg-cruise-600 text-white group"
          >
            <Link to={ctaLink}>
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
