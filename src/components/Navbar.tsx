
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import logoUrl from '@/assets/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

const serviceLinks = [
  { name: 'All Services', path: '/services' },
  { name: 'Business Loans', path: '/business-loans' },
  { name: 'Investment Funding', path: '/services#investment-funding' },
  { name: 'Investment Financing', path: '/investment-financing' },
  { name: 'Venture Capital', path: '/venture-capital' },
  { name: 'Equity Investments', path: '/equity-investments' },
  { name: 'Project Financing', path: '/project-financing' },
  { name: 'International Funding', path: '/international-funding' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  const servicePaths = serviceLinks.map((link) => link.path.split('#')[0]);
  const isServicesActive = servicePaths.includes(location.pathname);

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
          <Link to="/" className="flex items-center gap-3" aria-label="Cruise World International Limited — Home">
            <img
              src={logoUrl}
              alt="Cruise World International Limited"
              className="h-14 w-auto"
            />
            <h1 className="text-2xl font-bold tracking-tight text-cruise-900 hidden sm:block">
              <span className="text-cruise-500">Cruise</span>World
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className={cn('nav-link', location.pathname === '/' && 'active text-cruise-600')}>
              Home
            </Link>
            <Link to="/about" className={cn('nav-link', location.pathname === '/about' && 'active text-cruise-600')}>
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((v) => !v)}
                className={cn(
                  'nav-link flex items-center gap-1',
                  isServicesActive && 'active text-cruise-600'
                )}
              >
                Services
                <ChevronDown
                  className={cn('h-4 w-4 transition-transform duration-200', servicesOpen && 'rotate-180')}
                />
              </button>

              <div
                className={cn(
                  'absolute left-0 top-full pt-2 transition-all duration-200',
                  servicesOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-1 pointer-events-none'
                )}
              >
                <div className="min-w-[240px] bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  {serviceLinks.map((link) => {
                    const [path, hash] = link.path.split('#');
                    const isActive =
                      location.pathname === path &&
                      (hash ? location.hash === `#${hash}` : !location.hash);
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setServicesOpen(false)}
                        className={cn(
                          'block px-4 py-2.5 text-sm transition-colors',
                          isActive
                            ? 'bg-cruise-50 text-cruise-600 font-medium'
                            : 'text-gray-700 hover:bg-cruise-50 hover:text-cruise-600'
                        )}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link to="/blog" className={cn('nav-link', location.pathname === '/blog' && 'active text-cruise-600')}>
              Blog
            </Link>
            <Link to="/faq" className={cn('nav-link', location.pathname === '/faq' && 'active text-cruise-600')}>
              FAQ
            </Link>
            <Link to="/contact" className={cn('nav-link', location.pathname === '/contact' && 'active text-cruise-600')}>
              Contact
            </Link>
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
              <Link
                to="/"
                className={cn(
                  'px-4 py-3 rounded-md transition-colors',
                  location.pathname === '/'
                    ? 'bg-cruise-50 text-cruise-600 font-medium'
                    : 'hover:bg-cruise-50'
                )}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={cn(
                  'px-4 py-3 rounded-md transition-colors',
                  location.pathname === '/about'
                    ? 'bg-cruise-50 text-cruise-600 font-medium'
                    : 'hover:bg-cruise-50'
                )}
              >
                About
              </Link>

              {/* Services Expandable */}
              <button
                type="button"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((v) => !v)}
                className={cn(
                  'flex items-center justify-between px-4 py-3 rounded-md transition-colors text-left',
                  isServicesActive
                    ? 'bg-cruise-50 text-cruise-600 font-medium'
                    : 'hover:bg-cruise-50'
                )}
              >
                Services
                <ChevronDown
                  className={cn('h-4 w-4 transition-transform duration-200', mobileServicesOpen && 'rotate-180')}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 ml-4 border-l border-gray-100 flex flex-col space-y-1">
                  {serviceLinks.map((link) => {
                    const [path, hash] = link.path.split('#');
                    const isActive =
                      location.pathname === path &&
                      (hash ? location.hash === `#${hash}` : !location.hash);
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        className={cn(
                          'block px-4 py-2.5 rounded-md text-sm transition-colors',
                          isActive
                            ? 'bg-cruise-50 text-cruise-600 font-medium'
                            : 'text-gray-700 hover:bg-cruise-50'
                        )}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              )}

              <Link
                to="/blog"
                className={cn(
                  'px-4 py-3 rounded-md transition-colors',
                  location.pathname === '/blog'
                    ? 'bg-cruise-50 text-cruise-600 font-medium'
                    : 'hover:bg-cruise-50'
                )}
              >
                Blog
              </Link>
              <Link
                to="/faq"
                className={cn(
                  'px-4 py-3 rounded-md transition-colors',
                  location.pathname === '/faq'
                    ? 'bg-cruise-50 text-cruise-600 font-medium'
                    : 'hover:bg-cruise-50'
                )}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className={cn(
                  'px-4 py-3 rounded-md transition-colors',
                  location.pathname === '/contact'
                    ? 'bg-cruise-50 text-cruise-600 font-medium'
                    : 'hover:bg-cruise-50'
                )}
              >
                Contact
              </Link>

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
