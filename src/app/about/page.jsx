'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-24 space-y-24">

      {/* Hero / Intro */}
      <section className="text-center max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          👋 About Me
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I'm a passionate full-stack developer focused on building modern, responsive, and visually captivating web experiences. I specialize in <strong className="text-white">Next.js, Tailwind CSS, MongoDB, and animations with Framer Motion</strong>. From sleek portfolios to powerful admin dashboards, I enjoy turning ideas into digital reality.
        </motion.p>
      </section>

      {/* Skills Grid */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">🛠️ My Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Next.js", "Tailwind CSS", "React", "MongoDB", "Node.js", "Framer Motion", "NextAuth", "Git"].map((tech, i) => (
            <motion.div
              key={tech}
              className="bg-white/5 border border-white/10 p-4 rounded-lg text-center hover:shadow-2xl transition-all hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-lg font-medium text-white">{tech}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">📅 My Journey</h2>
        <div className="space-y-6 border-l-2 border-white/10 pl-6">
          {[
            { year: '2021', event: 'Started learning full-stack development.' },
            { year: '2022', event: 'Built and deployed my first real-world app.' },
            { year: '2023', event: 'Worked on hospital and business management dashboards.' },
            { year: '2024', event: 'Launched full-scale production apps using Next.js 14 and MongoDB.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="absolute -left-4 top-1 w-3 h-3 bg-white rounded-full"></span>
              <h4 className="text-xl font-semibold">{item.year}</h4>
              <p className="text-gray-400">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image + Bio */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image src="/projects/own.jpg" alt="Developer" fill className="object-cover" />
        </motion.div>

        <div>
          <h3 className="text-2xl font-bold mb-4">👨‍💻 More About Me</h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            I've built hospital systems, e-commerce sites, and business websites using the modern web stack. Whether it's an admin dashboard, booking system, or dynamic portfolio — I bring quality, speed, and creative energy to every project.
          </p>
          <motion.a
            href="/projects"
            className="inline-block mt-4 border border-white px-5 py-2 rounded hover:bg-white hover:text-black transition"
            whileHover={{ scale: 1.05 }}
          >
            View My Projects
          </motion.a>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">🎯 Fun Facts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            'Built 10+ full-stack apps',
            'Self-taught with hands-on practice',
            'Obsessed with UI/UX and animations',
          ].map((fact, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/10 p-6 rounded-lg hover:shadow-2xl hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <p className="text-white font-medium">{fact}</p>
            </motion.div>
          ))}
        </div>
      </section>

    
    </main>
  );
}
