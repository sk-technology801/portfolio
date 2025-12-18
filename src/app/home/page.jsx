'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Server, Palette, 
  ArrowRight, Sparkles, 
  CheckCircle, Star,
  Users, Zap, Rocket,
  ChevronLeft, ChevronRight,
  Mail, ExternalLink,
  Globe, Cpu, Database,
  Terminal, Target,
  Coffee, Briefcase,
  Award, Clock
} from 'lucide-react';

export default function HomePage() {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    let yearCounter = 0;
    let projectCounter = 0;
    
    const yearInterval = setInterval(() => {
      if (yearCounter <= 3) {
        setYears(yearCounter);
        yearCounter++;
      } else {
        clearInterval(yearInterval);
      }
    }, 100);

    const projectInterval = setInterval(() => {
      if (projectCounter <= 25) {
        setProjects(projectCounter);
        projectCounter++;
      } else {
        clearInterval(projectInterval);
      }
    }, 20);

    return () => {
      clearInterval(yearInterval);
      clearInterval(projectInterval);
    };
  }, []);

  const testimonials = [
    {
      name: 'Ali Raza',
      role: 'Product Manager',
      company: 'TechCorp',
      quote: 'Saadi delivered exceptional work on time and exceeded expectations.',
      rating: 5
    },
    {
      name: 'Fatima Khan',
      role: 'Startup Founder',
      company: 'InnovateX',
      quote: 'Professional, skilled, and great communication. Highly recommended!',
      rating: 5
    },
    {
      name: 'Omar Malik',
      role: 'CTO',
      company: 'DigitalFlow',
      quote: 'Technical excellence combined with creative problem-solving skills.',
      rating: 5
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const services = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'UI/UX Design',
      description: 'Creating beautiful, user-friendly interfaces that drive engagement.',
      features: ['Wireframing', 'Prototyping', 'User Research']
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Frontend Development',
      description: 'Building responsive web applications with React & Next.js.',
      features: ['React', 'Next.js', 'TypeScript']
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Backend Development',
      description: 'Developing robust APIs and server-side applications.',
      features: ['Node.js', 'APIs', 'Databases']
    }
  ];

  const techStack = [
    { name: 'React', icon: <Cpu className="w-5 h-5" />, level: 95 },
    { name: 'Next.js', icon: <Globe className="w-5 h-5" />, level: 90 },
    { name: 'TypeScript', icon: <Terminal className="w-5 h-5" />, level: 85 },
    { name: 'Node.js', icon: <Server className="w-5 h-5" />, level: 80 },
    { name: 'Tailwind', icon: <Sparkles className="w-5 h-5" />, level: 95 },
    { name: 'MongoDB', icon: <Database className="w-5 h-5" />, level: 75 },
  ];

  const projectsData = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory',
      tech: ['Next.js', 'Node.js', 'MongoDB'],
      status: 'Completed'
    },
    {
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard for business intelligence',
      tech: ['React', 'TypeScript', 'Firebase'],
      status: 'In Progress'
    },
    {
      title: 'Mobile App',
      description: 'Cross-platform mobile application',
      tech: ['React Native', 'Express', 'PostgreSQL'],
      status: 'Completed'
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* HERO SECTION */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full text-gray-300 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Full Stack Developer
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block text-gray-300">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Saadi
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              I build modern, performant web applications with clean code and 
              exceptional user experiences. Based in Lahore, Pakistan.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-800 text-gray-300 font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Zap className="w-6 h-6" />, value: years, suffix: '+', label: 'Years Experience', color: 'text-yellow-400' },
              { icon: <Code className="w-6 h-6" />, value: projects, suffix: '+', label: 'Projects Delivered', color: 'text-blue-400' },
              { icon: <Users className="w-6 h-6" />, value: '100', suffix: '%', label: 'Client Satisfaction', color: 'text-green-400' },
              { icon: <Rocket className="w-6 h-6" />, value: '50+', suffix: '', label: 'Technologies Used', color: 'text-purple-400' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className={`${stat.color} text-3xl font-bold mb-2`}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-300">What I</span>{' '}
              <span className="text-white">Do</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive web development services for modern businesses
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800"
              >
                {/* Service Icon */}
                <div className="text-blue-400 mb-4">
                  {service.icon}
                </div>
                
                {/* Service Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-6 text-sm">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-300">Tech</span>{' '}
              <span className="text-white">Stack</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies I use to build amazing digital products
            </p>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="bg-black rounded-lg p-6 text-center border border-gray-800 hover:border-gray-700 transition-colors"
              >
                {/* Tech Icon */}
                <div className="text-gray-400 mb-3 flex justify-center">
                  {tech.icon}
                </div>
                
                {/* Tech Name */}
                <div className="font-medium text-white text-sm">{tech.name}</div>
                
                {/* Level */}
                <div className="mt-2 text-xs text-gray-500">{tech.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-300">Featured</span>{' '}
              <span className="text-white">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <div
                key={project.title}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors"
              >
                {/* Project Status */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 mb-4">
                  <Briefcase className="w-3 h-3" />
                  {project.status}
                </div>
                
                {/* Project Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-6 text-sm">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-800 text-gray-300 font-medium rounded-lg hover:bg-gray-700 transition-colors"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-300">What Clients</span>{' '}
              <span className="text-white">Say</span>
            </h2>
            <p className="text-gray-400">
              Feedback from people I've worked with
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${currentTestimonial * 100}%` }}
                transition={{ duration: 0.5 }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.name} className="min-w-full px-4">
                    <div className="bg-black rounded-xl p-8 border border-gray-800">
                      {/* Client Info */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm">{testimonial.role} • {testimonial.company}</p>
                          <div className="flex gap-1 mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Quote */}
                      <p className="text-gray-300 italic">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2 h-2 rounded-full ${
                    i === currentTestimonial ? 'bg-blue-500' : 'bg-gray-700'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-12 border border-gray-800">
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gray-300">Ready to Start</span>{' '}
              <span className="text-white">Your Project?</span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
              Let's collaborate to create something exceptional. I'm here to help bring your vision to life.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Coffee className="w-5 h-5" />
                Start a Conversation
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-800 text-gray-300 font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                See My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}