'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, Github, Eye, 
  Code, Server, Palette,
  ArrowRight, Sparkles,
  Calendar, Layers,
  Wrench, Rocket,
  Zap, Cpu, Database,
  Globe, Terminal,
  Search, Award,
  Users, ChevronRight,
  Briefcase, Target,
  Mail, ShoppingCart,
  CheckSquare, MessageSquare,
  Cloud, FileText
} from 'lucide-react';

const featuredProjects = [
  {
    title: 'Business Website',
    description: 'Modern business website with elegant animations and responsive design.',
    tech: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Framer Motion'],
    live: 'https://office-site-puce.vercel.app/',
    github: 'https://github.com/sk-technology801/office-site',
    category: 'Full Stack',
    status: 'Live',
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: 'Hospital System',
    description: 'Complete appointment management with admin dashboard and secure authentication.',
    tech: ['Next.js 14', 'NextAuth', 'MongoDB', 'TypeScript'],
    live: 'https://madical-nrfm-kv3n8mq15-sk-technology801s-projects.vercel.app/',
    github: 'https://github.com/sk-technology801/hospital-booking',
    category: 'Web App',
    status: 'Live',
    icon: <Server className="w-6 h-6" />
  },
];

const allProjects = [
  {
    title: 'E-commerce Store',
    description: 'Complete online shopping platform with secure payments.',
    tech: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
    category: 'Web App',
    status: 'In Progress',
    icon: <ShoppingCart className="w-5 h-5" />
  },
  {
    title: 'Task Manager',
    description: 'Team collaboration tool with real-time updates.',
    tech: ['React', 'Firebase', 'Tailwind', 'Socket.io'],
    category: 'Web App',
    status: 'Completed',
    icon: <CheckSquare className="w-5 h-5" />
  },
  {
    title: 'Portfolio Design',
    description: 'Modern portfolio focusing on performance and UX.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind'],
    category: 'UI/UX',
    status: 'Completed',
    icon: <Palette className="w-5 h-5" />
  },
  {
    title: 'Weather App',
    description: 'Weather dashboard with predictive analytics.',
    tech: ['React', 'OpenWeather API', 'Chart.js'],
    category: 'Web App',
    status: 'Completed',
    icon: <Cloud className="w-5 h-5" />
  },
  {
    title: 'Blog Platform',
    description: 'Content management with collaborative editing.',
    tech: ['Next.js', 'Sanity.io', 'Redis'],
    category: 'Web App',
    status: 'In Progress',
    icon: <FileText className="w-5 h-5" />
  },
  {
    title: 'Chat App',
    description: 'Encrypted messaging with file sharing.',
    tech: ['Socket.io', 'Express', 'MongoDB'],
    category: 'Mobile',
    status: 'Completed',
    icon: <MessageSquare className="w-5 h-5" />
  },
];

const categories = ['All', 'Web App', 'Full Stack', 'UI/UX', 'Mobile'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full text-gray-300 text-sm font-medium mb-8">
              <Code className="w-4 h-4" />
              My Projects
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-300">Project</span>
              <span className="block text-white mt-2">Portfolio</span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              A collection of my work showcasing modern web development,
              clean design, and scalable solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Layers className="w-6 h-6" />, value: '15+', label: 'Projects', color: 'text-blue-400' },
              { icon: <Zap className="w-6 h-6" />, value: '98%', label: 'Success Rate', color: 'text-green-400' },
              { icon: <Cpu className="w-6 h-6" />, value: '8+', label: 'Technologies', color: 'text-purple-400' },
              { icon: <Users className="w-6 h-6" />, value: '100%', label: 'Satisfaction', color: 'text-yellow-400' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className={`${stat.color} text-3xl font-bold mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-300">Featured</span>{' '}
              <span className="text-white">Work</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Highlighted projects with detailed implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                        {project.icon}
                      </div>
                      <div>
                        <span className="text-xs text-gray-500">{project.category}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-green-400">● Live</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-8 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-300">All</span>{' '}
              <span className="text-white">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Complete collection of my work across different domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-colors h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                      {project.icon}
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-300' 
                        : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-500 text-xs rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black rounded-2xl p-12 border border-gray-800">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Target className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gray-300">Ready to Start</span>{' '}
              <span className="text-white">Your Project?</span>
            </h2>
            
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
              Let's collaborate to create something exceptional. I'm here to help bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-800 text-gray-300 font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Schedule Call
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-800">
              {[
                { value: '24h', label: 'Response Time' },
                { value: '100%', label: 'Satisfaction' },
                { value: '4+', label: 'Week Delivery' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}