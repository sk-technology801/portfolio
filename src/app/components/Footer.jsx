'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mail, Github, Linkedin, 
  ArrowUp, Heart, Code2,
  Calendar, MapPin
} from 'lucide-react';
import { useState } from 'react';

const MinimalFooter = () => {
  const [currentYear] = useState(new Date().getFullYear());

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com/sk-technology801', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Mail size={18} />, href: 'mailto:hello@saadi.dev', label: 'Email' },
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
          
          {/* Brand */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Code2 size={18} />
              </div>
              <h3 className="text-xl font-bold">Saadi.dev</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Building the future, one line of code at a time
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Location & Time */}
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Lahore, Pakistan</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span>{currentYear}</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>© {currentYear} Saadi</span>
            <span className="text-gray-600">•</span>
            <span>All rights reserved</span>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Made With Love */}
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
            <span>Made with</span>
            <Heart size={12} className="text-red-500 fill-red-500" />
            <span>by Saadi</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MinimalFooter;