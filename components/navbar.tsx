'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Expertise', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = () => setIsOpen(false)

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#home"
          className="flex items-center gap-2"
        >
          <img
            src="/logo.jpg" // Replace with the actual path to your logo image
            alt="Maz Plumbing And Electrical Services Logo"
            className="h-10 w-10 object-cover rounded-full"
          />
          <span className="text-slate-300 text-xl font-bold tracking-wide">Maz Plumbing And Electrical Services</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-slate-300 hover:text-gold-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+63-912-345-6789"
            className="ml-6 px-8 py-3 gold-gradient text-navy-900 hover:from-gold-600 hover:to-gold-500 transition-all duration-300 text-sm uppercase tracking-widest font-semibold flex items-center gap-2 shadow-md cursor-pointer hover:scale-105"
          >
            <Phone size={20} /> Reserve Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-800 border-b border-navy-700 animate-fade-in">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-lg text-slate-300 hover:text-gold-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+63-912-345-6789"
              onClick={handleLinkClick}
              className="text-gold-500 font-bold text-lg mt-2 flex items-center gap-2 cursor-pointer hover:text-gold-400 transition-colors"
            >
              <Phone size={20} /> Call: +63 912 345 6789
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}