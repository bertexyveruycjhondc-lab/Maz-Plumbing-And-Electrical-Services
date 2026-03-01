'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showCallModal, setShowCallModal] = useState(false)
  const [showOwnerModal, setShowOwnerModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    setIsMobile(/Mobi|Android|iPad|iPhone/i.test(navigator.userAgent))
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const phoneNumbers = ['09173272029', '091777111211']

  const handleCallClick = () => {
    setShowCallModal(true)
  }

  const handleOwnerClick = () => {
    setIsOpen(false)
    setShowOwnerModal(true)
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Expertise', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'Owner', href: '#', onClick: handleOwnerClick },
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
          <div className="flex flex-col">
            <span className="text-slate-300 text-xl font-bold tracking-wide">Maz Plumbing And Electrical Services</span>
          </div>
        </a>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={link.onClick || (() => {})}
              className="text-sm uppercase tracking-widest text-slate-300 hover:text-gold-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={handleCallClick}
            className="ml-6 px-8 py-3 gold-gradient text-navy-900 hover:from-gold-600 hover:to-gold-500 transition-all duration-300 text-sm uppercase tracking-widest font-semibold flex items-center gap-2 shadow-md cursor-pointer hover:scale-105"
          >
            <Phone size={20} /> Reserve Now
          </button>
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
                onClick={link.onClick || handleLinkClick}
                className="text-lg text-slate-300 hover:text-gold-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                handleCallClick()
                handleLinkClick()
              }}
              className="mt-2 px-8 py-3 gold-gradient text-navy-900 hover:from-gold-600 hover:to-gold-500 transition-all duration-300 text-sm uppercase tracking-widest font-semibold flex items-center gap-2 shadow-md cursor-pointer hover:scale-105 justify-center"
            >
              <Phone size={20} /> Reserve Now
            </button>
          </div>
        </div>
      )}
      {showCallModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md transition-opacity duration-300">
          <div className="bg-navy-900 p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-gold-500/30 transform scale-95 animate-modal-pop gold-gradient-bg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-900/10 to-navy-900/50 opacity-50"></div>
            <button
              onClick={() => setShowCallModal(false)}
              className="absolute top-4 right-4 text-gold-300 hover:text-gold-500 transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-gold-400 text-2xl font-serif font-bold mb-6 relative z-10">
              Get in Touch Now!
            </h3>
            <p className="text-slate-200 mb-6 relative z-10 font-light">
              Our experts are ready to assist you. Call us for premium plumbing and electrical services.
            </p>
            <ul className="space-y-4 relative z-10">
              {phoneNumbers.map((number, index) => (
                <li key={index}>
                  <a
                    href={`tel:+63${number.slice(1)}`}
                    className="flex items-center gap-3 px-6 py-3 bg-navy-800/50 border border-gold-400/20 rounded-lg text-gold-300 hover:bg-gold-900/20 hover:text-gold-400 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Phone size={20} className="text-gold-500" />
                    <span className="font-medium">{number}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {showOwnerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md transition-opacity duration-300">
          <div className="bg-navy-900 p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-gold-500/30 transform scale-95 animate-modal-pop gold-gradient-bg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-900/10 to-navy-900/50 opacity-50"></div>
            <button
              onClick={() => setShowOwnerModal(false)}
              className="absolute top-4 right-4 text-gold-300 hover:text-gold-500 transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-gold-400 text-2xl font-serif font-bold mb-6 relative z-10">
              Meet the Owner
            </h3>
            <div className="flex flex-col items-center relative z-10">
              <img
                src="/owner.jpg" // Replace with the actual path to the owner's image
                alt="Mark Shy"
                className="w-48 h-48 rounded-full object-cover mb-4 border-4 border-gold-500"
              />
              <h4 className="text-white text-xl font-bold mb-2">Mark Anthony Zaldua</h4>
              <p className="text-slate-200 text-center font-light">
                Proud owner of Maz Plumbing And Electrical Services, bringing years of expertise to every project.
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
