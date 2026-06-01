import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full nav-shell backdrop-blur-md z-50">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between md:justify-center"
      >

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => scrollToSection('hero')} className="nav-link font-bold">
            <a href="https://drive.google.com/file/d/1F0C76KFwHr6_9a9MiqZHXlMSfXlOH_QR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="nav-link font-bold">
              View Resume
            </a>
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            About
          </button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">
            Skills
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">
            Projects
          </button>
          <a href="mailto:mandarekal2@gmail.com" className="nav-link">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 border-b"
        >
          <div className="flex flex-col gap-4 px-6 py-4">
            <button onClick={() => scrollToSection('hero')} className="nav-link font-bold">
              <a href="https://drive.google.com/file/d/1F0C76KFwHr6_9a9MiqZHXlMSfXlOH_QR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="nav-link font-bold">
                View Resume
              </a>
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              <a href="mailto:mandarekal2@gmail.com" className="nav-link">
              Contact
            </a>
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
