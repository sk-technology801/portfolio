'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-black text-white min-h-screen px-6 py-24">
      <motion.section
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Contact Info */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold mb-4">📫 Get in Touch</h1>
          <p className="text-gray-400">
            Whether you want to work together, have a question, or just want to say hi — my inbox is always open. Let's build something great!
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-white" />
              <span className="text-gray-300">sardarsaadisaadi@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-white" />
              <span className="text-gray-300">+92 3084931083</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-white" />
              <span className="text-gray-300">Faisalabad, Pakistan</span>
            </div>
          </div>

          <div className="mt-8 space-x-4">
            <a href="https://github.com/sk-technology801" target="_blank" className="hover:underline text-gray-300">GitHub</a>
            <a href="https://www.linkedin.com/jobs/" target="_blank" className="hover:underline text-gray-300">LinkedIn</a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/5 p-8 rounded-lg border border-white/10 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>

          <div>
            <label className="block mb-1 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 rounded bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="w-full py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
          >
            Send Message
          </motion.button>

          {submitted && (
            <p className="text-green-400 text-center mt-4">✅ Message sent successfully!</p>
          )}
        </form>
      </motion.section>
    </main>
  );
}
