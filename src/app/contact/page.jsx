'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, 
  Send, User, MessageSquare,
  Github, Linkedin, Clock,
  CheckCircle, ArrowRight,
  Sparkles, MailCheck,
  Zap, Shield, Calendar,
  ExternalLink, Globe,
  Heart, Rocket,
  Menu, X
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    message: '',
    projectType: 'web'
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '', projectType: 'web' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Primary Email',
      value: 'saaddst21@gmail.com',
      href: 'mailto:saaddst21@gmail.com',
      color: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Phone / WhatsApp',
      value: '+92 308 4931083',
      href: 'https://wa.me/923084931083',
      color: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-400'
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Location',
      value: 'Lahore, Pakistan',
      href: '#',
      color: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Response Time',
      value: 'Within 12 hours',
      href: '#',
      color: 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20',
      iconColor: 'text-yellow-400'
    },
  ];

  const projectTypes = [
    { value: 'web', label: 'Web App', icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { value: 'mobile', label: 'Mobile', icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { value: 'design', label: 'UI/UX', icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" /> },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: 'GitHub',
      href: 'https://github.com/sk-technology801',
      color: 'hover:bg-gray-800/50 hover:border-gray-700'
    },
    {
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:bg-blue-900/30 hover:border-blue-700/50'
    },
  ];

  const stats = [
    { value: '24h', label: 'Avg. Response', icon: <Zap className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { value: '100%', label: 'Response Rate', icon: <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { value: '1-2', label: 'Days to Start', icon: <Rocket className="w-3 h-3 sm:w-4 sm:h-4" /> },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* Mobile Navigation Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden p-3 rounded-lg bg-gray-900/80 backdrop-blur-sm border border-gray-800"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-2"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium mb-8 sm:mb-10 border border-blue-500/30"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm">Get in Touch</span>
              <MailCheck className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.div>
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 px-2">
              <span className="block text-gray-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">Let's Create</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Together
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0">
              Have an idea that needs to come to life? Let's discuss how we can 
              transform your vision into a remarkable digital experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={`${item.color} backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center ${item.iconColor}`}>
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white text-sm sm:text-base mb-1 sm:mb-2 truncate">{item.title}</h3>
                        <a 
                          href={item.href}
                          className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm truncate block"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800/50">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-4 sm:mb-6 text-white flex items-center gap-2">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  Quick Response Guarantee
                </h3>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
                      <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">Connect on Social</h3>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl text-gray-300 ${social.color} transition-all duration-300 text-sm sm:text-base`}
                    >
                      {social.icon}
                      <span>{social.label}</span>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-800/50 shadow-xl sm:shadow-2xl">
                {/* Form Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Send className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Start Your Project</h2>
                    <p className="text-gray-400 text-xs sm:text-sm">Fill out the form below and I'll get back to you soon</p>
                  </div>
                </div>
                
                {/* Project Type Tabs */}
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                  {projectTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setForm({...form, projectType: type.value})}
                      className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all flex-1 sm:flex-none ${
                        form.projectType === type.value
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      {type.icon}
                      <span className="truncate">{type.label}</span>
                    </button>
                  ))}
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Name Field */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-medium text-gray-300 flex items-center gap-1.5 sm:gap-2">
                      <User className="w-3 h-3 sm:w-4 sm:h-4" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 text-sm sm:text-base"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-medium text-gray-300 flex items-center gap-1.5 sm:gap-2">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 text-sm sm:text-base"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-medium text-gray-300 flex items-center gap-1.5 sm:gap-2">
                      <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell me about your project, timeline, and budget..."
                      className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 text-sm sm:text-base resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300" />
                    <div className="relative inline-flex items-center justify-center gap-2 sm:gap-3 w-full px-4 sm:px-6 py-3.5 sm:py-4 text-white font-medium rounded-lg sm:rounded-xl text-sm sm:text-base">
                      {loading ? (
                        <>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : submitted ? (
                        <>
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="truncate">Message Sent Successfully!</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform flex-shrink-0" />
                        </>
                      )}
                    </div>
                  </motion.button>

                  {/* Success Message */}
                  <AnimatePresence>
                    {submitted && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg sm:rounded-xl">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-green-400 text-sm sm:text-base">Message received!</p>
                            <p className="text-green-400/80 text-xs sm:text-sm">I'll review your project and get back to you within 12 hours.</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>

                {/* Form Footer */}
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800/50">
                  <div className="flex items-start gap-2 sm:gap-3 text-gray-500 text-xs sm:text-sm">
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" />
                    <p>Your information is secure and will only be used to respond to your inquiry</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-gray-900/50 via-black/50 to-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-800/50 shadow-xl sm:shadow-2xl">
              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-xl sm:shadow-2xl shadow-blue-500/20">
                <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              
              {/* Heading */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Ready to Launch
                </span>
                <span className="text-gray-300 block sm:inline"> Your Project?</span>
              </h2>
              
              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-2 sm:px-0">
                Let's schedule a call to discuss your project in detail and 
                create a roadmap for success.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href="/projects"
                  className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 font-medium rounded-xl hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Schedule a Call</span>
                </Link>
                <a
                  href="mailto:sardarsaadisaadi@gmail.com"
                  className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:shadow-lg sm:hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Email Directly</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Saadi. Crafted with precision and passion.
          </p>
        </div>
      </footer>
    </main>
  );
}