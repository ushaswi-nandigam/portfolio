'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#gallery', label: 'Photography' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream border-b-2 border-charcoal"
    >
      <div className="container-neo flex items-center justify-center h-14 relative">
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="px-5 py-2.5 font-bold text-charcoal uppercase tracking-wide text-sm border-4 border-transparent hover:border-charcoal hover:bg-mustard hover:shadow-[4px_4px_0_#0D0D0D] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute right-4 w-10 h-10 bg-mustard border-4 border-charcoal shadow-[2px_2px_0_#0D0D0D] flex flex-col items-center justify-center gap-1 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0_#0D0D0D] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-5 h-1 bg-charcoal block"
          />
          <motion.span
            animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            className="w-5 h-1 bg-charcoal block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-5 h-1 bg-charcoal block"
          />
        </button>
      </div>

      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-mustard border-t-4 border-charcoal"
      >
        <div className="container-neo py-6 flex flex-col gap-3">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              initial={{ x: -20, opacity: 0 }}
              animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ delay: 0.05 * index }}
              className="px-6 py-4 font-bold text-charcoal text-lg uppercase bg-cream border-4 border-charcoal shadow-[4px_4px_0_#0D0D0D] hover:bg-terracotta hover:text-cream hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#0D0D0D] transition-all"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
