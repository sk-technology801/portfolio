'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

const PortfolioHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b border-gray-800 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide text-white hover:text-gray-300 transition"
        >
          Saadi<span className="text-gray-500">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium text-white">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="group relative overflow-hidden"
            >
              <span className="flex space-x-[1px]">
                {link.name.split('').map((char, i) => (
                  <span
                    key={i}
                    className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-y-1"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
              {pathname === link.path && (
                <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-blue-500 rounded" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-6 py-6 flex flex-col space-y-4 text-white">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-lg ${
                  pathname === link.path ? 'text-blue-500' : 'hover:text-gray-300'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default PortfolioHeader;
