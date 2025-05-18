// components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
export default function Footer() {
  const container = (delay) => ({
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        type: "spring",
        stiffness: 100,
      },
    },
  });
  return (
    <div className="py-15">
    <motion.footer className="text-gray-800" variants={container(2)} initial="hidden" animate="show">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">JobIndeed</h3>
            <p className="text-sm text-gray-400">
              Discover jobs that match your passion and skills.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Explore</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">Jobs</a></li>
              <li><a href="#" className="hover:text-blue-400">About</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Resources</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-400">Support</a></li>
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">🌐</a>
              <a href="#" className="hover:text-blue-400">🐦</a>
              <a href="#" className="hover:text-blue-400">📘</a>
              <a href="#" className="hover:text-blue-400">📸</a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} JobIndeed. All rights reserved.
        </div>
      </div>
    </motion.footer>
    </div>
  );
}
