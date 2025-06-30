'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);

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

  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
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
      <section className="px-6 py-20 border-t border-white/10 text-center">
        <h2 className="text-4xl font-bold mb-12">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: 'UI/UX', desc: 'Clean, modern interface design.', icon: '🎨' },
            { title: 'Frontend', desc: 'React, Next.js, Tailwind, animations.', icon: '⚛️' },
            { title: 'Backend', desc: 'Node.js, MongoDB, APIs, auth.', icon: '🛠️' },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 p-6 rounded-xl transition-all transform hover:scale-105 hover:rotate-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="px-6 py-20 border-t border-white/10 text-center">
        <h2 className="text-4xl font-bold mb-12">Tech Stack</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto text-sm text-gray-300">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'MongoDB'].map((tech, i) => (
            <motion.div
              key={tech}
              className="p-4 bg-white/5 border border-white/10 rounded-md hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold text-center mb-12">Experience Timeline</h2>
        <div className="max-w-3xl mx-auto border-l-2 border-white/10 pl-6">
          {[
            { year: '2023', title: 'Freelance Full Stack Developer', desc: 'Building custom business apps.' },
            { year: '2022', title: 'Frontend Developer Intern', desc: 'Worked on React dashboards.' },
            { year: '2021', title: 'Started Learning Web Dev', desc: 'HTML, CSS, JS basics.' },
          ].map((exp) => (
            <div key={exp.year} className="mb-10 relative">
              <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-black"></div>
              <h3 className="text-xl font-semibold">{exp.year} — {exp.title}</h3>
              <p className="text-gray-400">{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 py-20 border-t border-white/10 text-center">
        <h2 className="text-4xl font-bold mb-12">Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-xl font-semibold">
          <div className="bg-white/5 rounded-lg p-6 shadow hover:scale-105 transition">
            {years}+ Years Experience
          </div>
          <div className="bg-white/5 rounded-lg p-6 shadow hover:scale-105 transition">
            {projects}+ Projects Done
          </div>
          <div className="bg-white/5 rounded-lg p-6 shadow hover:scale-105 transition">
            💯% Client Satisfaction
          </div>
          <div className="bg-white/5 rounded-lg p-6 shadow hover:scale-105 transition">
            ⚡ Fast Performance
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-20 border-t border-white/10 text-center">
        <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: 'Ali Raza',
              quote: 'Working with Saadi was a game-changer — fast, sharp, and pixel-perfect!',
            },
            {
              name: 'Fatima Khan',
              quote: 'He turned our business idea into a flawless, modern website in record time.',
            },
          ].map((item) => (
            <div
              key={item.name}
              className="bg-white/5 border border-white/10 p-6 rounded-lg text-left transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            >
              <p className="text-gray-300 mb-4">“{item.quote}”</p>
              <span className="text-white font-semibold">— {item.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-6 py-20 border-t border-white/10 text-center">
        <h2 className="text-4xl font-bold mb-4">Let’s Connect</h2>
        <p className="text-gray-400 mb-6">Have a project or just want to say hi?</p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition rounded-md"
        >
          Contact Me
        </Link>
      </section>
    </main>
  );
}
