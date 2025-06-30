'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const featuredProjects = [
  {
    title: 'own bussiness Website',
    description: 'Fully animated restaurant website with dark theme and menu page.',
    image: '/projects/own.jpg',
    tech: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    live: 'https://office-site-puce.vercel.app/',
    github: 'https://github.com/sk-technology801/office-site',
  },
  {
    title: 'Hospital Booking App',
    description: 'Appointment form with admin dashboard, secure auth, and MongoDB.',
    image: '/projects/image.png',
    tech: ['Next.js 14', 'NextAuth', 'MongoDB'],
    live: 'https://madical-nrfm-kv3n8mq15-sk-technology801s-projects.vercel.app/',
    github: 'https://github.com/yourname/hospital-dashboard',
  },
];

const allProjects = [
  ...featuredProjects,
 
  
];

export default function ProjectsPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20 space-y-28">

      {/* Featured Projects */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-10">🚀 Featured Projects</h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <p className="text-xs text-gray-500 mb-4">
                  {project.tech.join(', ')}
                </p>
                <div className="flex space-x-4">
                  <Link href={project.live} target="_blank" className="text-blue-400 hover:text-white">Live</Link>
                  <Link href={project.github} target="_blank" className="text-gray-300 hover:text-white">Code</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Projects */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-10">🧩 All Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:scale-[1.02] transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center border-t border-white/10 pt-16">
        <h2 className="text-3xl font-bold mb-4">📬 Want to work together?</h2>
        <p className="text-gray-400 mb-6">I'm open to freelance or collaboration.</p>
        <Link
          href="/contact"
          className="inline-block border border-white px-6 py-3 hover:bg-white hover:text-black transition rounded"
        >
          Contact Me
        </Link>
      </section>
    </main>
  );
}
