
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold tracking-tight text-cruise-900">
              <span className="text-cruise-500">Cruise</span>World
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'nav-link',
                  location.pathname === link.path && 'active text-cruise-600'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Apply Now Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-cruise-500 hover:bg-cruise-600 text-white transition-all"
            >
              <Link to="/application">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-cruise-900" />
            ) : (
              <Menu className="h-6 w-6 text-cruise-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'px-4 py-3 rounded-md transition-colors',
                    location.pathname === link.path
                      ? 'bg-cruise-50 text-cruise-600 font-medium'
                      : 'hover:bg-cruise-50'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="mt-2 bg-cruise-500 hover:bg-cruise-600 text-white w-full transition-all"
              >
                <Link to="/application">Apply Now</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
