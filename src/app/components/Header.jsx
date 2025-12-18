'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

const PortfolioHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [lastScrollY]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-blue-900/20 border-b border-gray-800/50' 
            : 'bg-gradient-to-b from-black to-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="group relative">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                  <div className="relative px-3 py-1 bg-black rounded-lg ring-1 ring-gray-800">
                    <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Saadi.dev
                    </span>
                  </div>
                </div>
                <span className="hidden sm:inline text-xs text-gray-400 font-mono animate-pulse">
                  Full Stack Developer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="group relative py-2"
                >
                  <span className="flex space-x-[1px]">
                    {link.name.split('').map((char, i) => (
                      <span
                        key={i}
                        className="inline-block text-white/90 font-medium tracking-wide transition-all duration-300 group-hover:text-white group-hover:scale-110"
                        style={{ 
                          transitionDelay: `${i * 30}ms`,
                          transform: pathname === link.path ? 'translateY(-2px)' : 'none'
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-all duration-300 ${
                    pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Mobile Toggle Button */}
            <button
              className="lg:hidden relative p-2 text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-gray-800/50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <FaBars className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                <FaTimes className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-out ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{
          background: 'radial-gradient(ellipse at top, rgba(15,23,42,0.98) 0%, rgba(0,0,0,0.98) 100%)'
        }}
      >
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col items-center space-y-8 mb-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="group relative"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-3xl sm:text-4xl font-bold text-white/90 group-hover:text-white transition-colors duration-300">
                  {link.name}
                </span>
                {pathname === link.path && (
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default PortfolioHeader;
