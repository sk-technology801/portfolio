'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* 🖼️ Hero Section with Background Image */}
      <section
        className="h-screen bg-cover bg-center relative flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?_gl=1*1elgowm*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTEyODU4MzgkbzIyJGcxJHQxNzUxMjg1ODk1JGozJGwwJGgw')", // Make sure this image exists in /public
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />
        <div className="relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm <span className="text-blue-500">Saadi</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-gray-300 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            A passionate Full Stack Developer building modern web experiences.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <Link
              href="/projects"
              className="px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition"
            >
              View My Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 🎨 Projects Section */}
      <section className="px-6 py-20 bg-black">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="overflow-hidden rounded-lg border border-white/10 shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={`https://images.pexels.com/photos/3585011/pexels-photo-3585011.jpeg?_gl=1*obgv0b*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTEyODU4MzgkbzIyJGcxJHQxNzUxMjg2MTA1JGoyNyRsMCRoMA..`}
                alt={`Project ${id}`}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">Project {id}</h3>
                <p className="text-gray-400 text-sm">A creative project using React, Next.js, and MongoDB.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📞 Contact CTA */}
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
