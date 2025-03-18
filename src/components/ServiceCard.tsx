
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link = '/services',
  className,
}) => {
  return (
    <div className={cn(
      "bg-white rounded-xl border border-gray-100 p-6 transition-all duration-300 hover:shadow-medium group hover:border-cruise-100",
      className
    )}>
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cruise-50 text-cruise-500 mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-cruise-600 font-medium group-hover:text-cruise-700"
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 transition-all group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
