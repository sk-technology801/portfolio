'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code, Server, Palette, 
  ArrowRight, Sparkles, 
  CheckCircle, Star,
  Users, Zap, Rocket,
  Mail, ExternalLink,
  Globe, Cpu, Database,
  Terminal, Target,
  Coffee, Briefcase,
  Award, Clock,
  GraduationCap, MapPin,
  Calendar, Book,
  Heart, Brain,
  Layers, TrendingUp,
  Puzzle, Code2,
  Monitor, Shield,
  Wifi, Cloud,
  Smartphone, Settings
} from 'lucide-react';

export default function AboutPage() {
  const skills = [
    { name: 'Next.js', level: 95, icon: <Globe className="w-5 h-5" /> },
    { name: 'React', level: 90, icon: <Cpu className="w-5 h-5" /> },
    { name: 'TypeScript', level: 85, icon: <Terminal className="w-5 h-5" /> },
    { name: 'Tailwind CSS', level: 95, icon: <Palette className="w-5 h-5" /> },
    { name: 'Node.js', level: 80, icon: <Server className="w-5 h-5" /> },
    { name: 'MongoDB', level: 75, icon: <Database className="w-5 h-5" /> },
  ];

  const timeline = [
    { year: '2021', title: 'Started Learning', description: 'Began web development journey', icon: <Book className="w-5 h-5" /> },
    { year: '2022', title: 'First Projects', description: 'Built initial full-stack applications', icon: <Code className="w-5 h-5" /> },
    { year: '2023', title: 'Professional Work', description: 'Developed production applications', icon: <Briefcase className="w-5 h-5" /> },
    { year: '2024', title: 'Current Focus', description: 'Advanced full-stack development', icon: <Rocket className="w-5 h-5" /> },
  ];

  const services = [
    { title: 'Web Development', description: 'Modern web applications', icon: <Code2 className="w-6 h-6" /> },
    { title: 'UI/UX Design', description: 'User-friendly interfaces', icon: <Palette className="w-6 h-6" /> },
    { title: 'API Development', description: 'Scalable backend systems', icon: <Server className="w-6 h-6" /> },
    { title: 'Performance', description: 'Optimized applications', icon: <Zap className="w-6 h-6" /> },
  ];

  const stats = [
    { value: '3+', label: 'Years Experience', icon: <TrendingUp className="w-5 h-5" /> },
    { value: '25+', label: 'Projects Completed', icon: <Layers className="w-5 h-5" /> },
    { value: '100%', label: 'Satisfaction', icon: <Star className="w-5 h-5" /> },
    { value: '15+', label: 'Technologies', icon: <Puzzle className="w-5 h-5" /> },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* Hero Section - Unique Design */}
<section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
  <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
  <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
  
  <div className="relative max-w-5xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      {/* Animated Badge */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium mb-10 border border-blue-500/30"
      >
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <span>About Me</span>
        <Sparkles className="w-4 h-4" />
      </motion.div>
      
      {/* Main Heading with Gradient */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
      >
        <span className="block text-gray-300">The Developer</span>
        <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Behind the Code
        </span>
      </motion.h1>
      
      {/* Elegant Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
      >
        Crafting digital experiences with precision, passion, and purpose.
        <span className="block mt-3 text-lg text-gray-500">
          Based in Lahore, Pakistan • Available for exciting projects
        </span>
      </motion.p>
      
      {/* Interactive CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-5 justify-center"
      >
        <Link
          href="/projects"
          className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          <Code className="w-6 h-6" />
          <span className="relative">Explore My Work</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </Link>
        
        <Link
          href="/contact"
          className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 font-medium rounded-xl hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300"
        >
          <Mail className="w-6 h-6" />
          <span>Let's Connect</span>
          <div className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-16 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-sm">Scroll to discover</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-500 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
</section>
      {/* Stats Section */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 bg-black rounded-lg border border-gray-800"
              >
                <div className="text-blue-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold mb-1 text-white">{stat.value}</div>
                <div className="text-gray-400 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">My Story</h2>
              
              <div className="space-y-4">
                <p className="text-gray-400">
                  With over 3 years of experience in web development, I specialize in creating 
                  modern, high-performance applications that combine elegant design with 
                  robust functionality.
                </p>
                <p className="text-gray-400">
                  My journey began with a passion for technology and problem-solving, 
                  which evolved into a career dedicated to crafting exceptional digital 
                  experiences.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300 text-sm">Lahore, Pakistan</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg">
                  <Calendar className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300 text-sm">Available for projects</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Services */}
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="bg-gray-900 rounded-lg p-4 border border-gray-800"
                >
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                    <div className="text-blue-400">
                      {service.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-white mb-1 text-sm">{service.title}</h4>
                  <p className="text-gray-400 text-xs">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2 text-white">Technical Skills</h2>
            <p className="text-gray-400 text-sm">Technologies I use to build applications</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black rounded-lg p-4 border border-gray-800"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="text-blue-400">
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-white text-sm">{skill.name}</span>
                  </div>
                  <span className="text-gray-400 text-xs">{skill.level}%</span>
                </div>
                
                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2 text-white">My Journey</h2>
            <p className="text-gray-400 text-sm">A timeline of my development career</p>
          </div>

          <div className="relative pl-6 border-l border-gray-800">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative mb-8"
              >
                <div className="w-3 h-3 bg-blue-500 rounded-full absolute -left-7 top-1 border-2 border-black" />
                
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-blue-400 font-medium">{item.year}</div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-black rounded-xl p-8 border border-gray-800">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              
              <h2 className="text-2xl font-bold mb-4 text-white">Ready to Work Together?</h2>
              
              <p className="text-gray-400 mb-8 text-sm">
                Let's collaborate to create something exceptional. I'm here to help bring your vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  <Coffee className="w-4 h-4" />
                  Start a Project
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-gray-300 font-medium rounded-lg hover:bg-gray-700 transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Portfolio
                </Link>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-800">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-white mb-1">24h</div>
                    <div className="text-gray-400 text-xs">Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-white mb-1">100%</div>
                    <div className="text-gray-400 text-xs">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-white mb-1">4+ Weeks</div>
                    <div className="text-gray-400 text-xs">Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}