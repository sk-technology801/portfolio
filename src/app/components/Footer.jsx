'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white border-t border-white/10 mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">📞 Contact</h4>
          <p className="flex items-center gap-2"><Mail size={16} /> saad@example.com</p>
          <p className="flex items-center gap-2"><Phone size={16} /> +92 300 0000000</p>
          <p className="flex items-center gap-2"><MapPin size={16} /> Lahore, Pakistan</p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">🔗 Quick Links</h4>
          <nav className="flex flex-col space-y-1">
            <Link href="/" className="hover:text-gray-300 transition">Home</Link>
            <Link href="/projects" className="hover:text-gray-300 transition">Projects</Link>
            <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
          </nav>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">🌐 Social</h4>
          <div className="flex gap-4">
            <a href="https://github.com/sk-technology801" target="_blank" className="hover:text-gray-300 transition">GitHub</a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-gray-300 transition">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 px-6 text-center text-xs text-gray-400 relative">
        © {new Date().getFullYear()} Saad Portfolio — Built with Next.js & Tailwind CSS
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute right-6 top-1/2 -translate-y-1/2 hover:text-white transition"
          title="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </motion.footer>
  );
};

export default Footer;
