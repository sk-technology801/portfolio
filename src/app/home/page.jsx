'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const animateCounters = () => {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= 3) setYears(i);
        if (i <= 25) setProjects(i);
        i++;
        if (i > 25) clearInterval(interval);
      }, 50);
    };
    animateCounters();
  }, []);

  const testimonials = [
    {
      name: 'Ali Raza',
      quote: 'Working with Saadi was a game-changer — fast, sharp, and pixel-perfect!',
    },
    {
      name: 'Fatima Khan',
      quote: 'He turned our business idea into a flawless, modern website in record time.',
    },
    {
      name: 'Omar Malik',
      quote: 'Saadi’s creativity and technical expertise delivered beyond expectations.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <main className="bg-black text-white min-h-screen" style={{ fontFamily: "'Orbitron', sans-serif" }}>
      {/* HERO (Unchanged) */}
      <section
        className="h-screen bg-cover bg-center relative flex flex-col justify-center items-center text-center px-6"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?_gl=1*1elgowm*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTEyODU4MzgkbzIyJGcxJHQxNzUxMjg1ODk1JGozJGwwJGgw')" }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />
        <div className="relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Saadi — <span className="text-blue-500">Full Stack Dev</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-gray-300 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            I design, code, and launch modern digital experiences.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition"
            >
              Let's Talk
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="px-6 py-20 border-t border-gray-900/50 text-center">
        <h2 className="text-4xl font-bold mb-12 text-neon-blue">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: 'UI/UX', desc: 'Sleek, neon-infused interface design.', icon: '🎨', progress: 90 },
            { title: 'Frontend', desc: 'React, Next.js, Tailwind with cyberpunk flair.', icon: '⚛️', progress: 85 },
            { title: 'Backend', desc: 'Node.js, MongoDB, secure APIs.', icon: '🛠️', progress: 80 },
          ].map((item) => (
            <motion.div
              key={item.title}
              className="bg-black/50 border border-gray-900/50 p-6 rounded-xl transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              whileHover={{ rotateY: 5, rotateX: -5 }}
            >
              <div className="text-4xl mb-3 text-neon-pink">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-neon-yellow">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.desc}</p>
              <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-blue to-neon-pink"
                  initial={{ width: 0 }}
                  animate={{ width: `${item.progress}%` }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="px-6 py-20 border-t border-gray-900/50 text-center">
        <h2 className="text-4xl font-bold mb-12 text-neon-blue">Tech Stack</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto text-sm text-gray-300">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'MongoDB'].map((tech, i) => (
            <motion.div
              key={tech}
              className="relative p-4 bg-black/50 border border-gray-900/50 rounded-md group hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i }}
              whileHover={{ rotate: 5 }}
            >
              {tech}
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-neon-blue text-xs p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                Mastered {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE TIMELINE (Simplified) */}
      <section className="px-6 py-20 border-t border-gray-900/50">
        <h2 className="text-4xl font-bold text-center mb-12 text-neon-blue">Experience Timeline</h2>
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 h-full w-0.5 bg-gray-900/50" />
          {[
            { year: '2023', title: 'Freelance Full Stack Developer', desc: 'Building custom business apps.' },
            { year: '2022', title: 'Frontend Developer Intern', desc: 'Worked on React dashboards.' },
            { year: '2021', title: 'Started Learning Web Dev', desc: 'HTML, CSS, JS basics.' },
          ].map((exp, i) => (
            <motion.div
              key={exp.year}
              className="mb-10 relative group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              role="listitem"
            >
              <div className="absolute -left-3 top-2 w-4 h-4 bg-neon-blue rounded-full border-2 border-black group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300" />
              <h3 className="text-xl font-semibold text-neon-yellow">
                {exp.year} — {exp.title}
              </h3>
              <p className="text-gray-400">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 py-20 border-t border-gray-900/50 text-center">
        <h2 className="text-4xl font-bold mb-12 text-neon-blue">Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-xl font-semibold">
          {[
            { value: years, label: 'Years Experience', max: 5 },
            { value: projects, label: 'Projects Done', max: 50 },
            { value: 100, label: 'Client Satisfaction', max: 100 },
            { value: 100, label: 'Fast Performance', max: 100 },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-black/50 rounded-lg p-6 shadow hover:scale-105 transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * i }}
            >
              <svg className="w-16 h-16 mx-auto mb-2" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.2)"
                  strokeWidth="3"
                />
                <motion.path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeDasharray="100 100"
                  strokeDashoffset={100 - (stat.value / stat.max) * 100}
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: 100 - (stat.value / stat.max) * 100 }}
                  transition={{ duration: 1.5, delay: 0.2 * i }}
                />
                <text x="18" y="20" textAnchor="middle" fill="#facc15" fontSize="10">
                  {stat.value}{stat.label.includes('Satisfaction') || stat.label.includes('Performance') ? '%' : '+'}
                </text>
              </svg>
              {stat.label}
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-20 border-t border-gray-900/50 text-center">
        <h2 className="text-4xl font-bold mb-12 text-neon-blue">Testimonials</h2>
        <div className="max-w-5xl mx-auto relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentTestimonial * 100}%` }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            {testimonials.map((item, i) => (
              <motion.div
                key={item.name}
                className="min-w-full bg-black/50 border border-gray-900/50 p-6 rounded-lg text-left transition duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-300 mb-4">“{item.quote}”</p>
                <span className="text-neon-yellow font-semibold">— {item.name}</span>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === currentTestimonial ? 'bg-neon-blue animate-neon-pulse' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentTestimonial(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-6 py-20 border-t border-gray-900/50 text-center">
        <h2 className="text-4xl font-bold mb-4 text-neon-blue">Let’s Connect</h2>
        <p className="text-gray-400 mb-6">Ready to launch your next project into the cyberverse?</p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 border border-neon-blue text-neon-blue hover:bg-gradient-to-r hover:from-neon-blue hover:to-neon-pink hover:text-black transition-all duration-300 rounded-md animate-neon-pulse shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        >
          Contact Me
        </Link>
      </section>

      {/* Inline styles for animations and custom colors */}
      <style jsx>{`
        :root {
          --neon-blue: #3b82f6;
          --neon-pink: #ec4899;
          --neon-yellow: #facc15;
        }
        @keyframes neon-pulse {
          0%, 100% {
            opacity: 0.7;
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 25px rgba(59, 130, 246, 0.8);
          }
        }
        .animate-neon-pulse {
          animation: neon-pulse 2s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}