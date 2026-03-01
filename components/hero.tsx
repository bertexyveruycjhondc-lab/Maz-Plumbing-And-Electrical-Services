'use client'
import { Phone, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setIsMobile(/Mobi|Android|iPad|iPhone/i.test(navigator.userAgent))
  }, [])

  const phoneNumbers = ['09173272029', '091777111211']

  const handleCallClick = () => {
    setShowModal(true)
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/roofing-services-flyer.jpg" // Path to your uploaded image - place the uploaded photo in your public folder and reference it here
          alt="Maz Roofing Services"
          className="w-full h-full object-contain opacity-50 transition-transform duration-[60s]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center mt-16 animate-fade-in-up">
        <span className="text-gold-400 uppercase tracking-[0.4em] text-sm font-semibold mb-6 block">
          Established in Quezon City
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight text-balance">
          Exquisite Precision in Every <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
            Connection.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
          Elevating home maintenance to an art form with unparalleled plumbing and electrical mastery.
          Bespoke solutions for the discerning estate.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            href="#contact"
            className="px-10 py-5 gold-gradient text-navy-900 font-bold uppercase tracking-widest hover:from-gold-600 hover:to-gold-500 transition-all duration-500 shadow-[0_0_30px_rgba(255,209,102,0.4)] premium-shadow animate-pulse-glow"
          >
            Request a Consultation
          </a>
          {isMobile ? (
            <a
              href="tel:+639177711211"
              className="px-10 py-5 border border-white/20 text-white font-medium uppercase tracking-widest hover:border-gold-400 hover:text-gold-400 transition-all duration-500 backdrop-blur-md flex items-center gap-2 shadow-md animate-pulse-glow"
            >
              <Phone size={20} /> Call Now
            </a>
          ) : (
            <button
              onClick={handleCallClick}
              className="px-10 py-5 border border-white/20 text-white font-medium uppercase tracking-widest hover:border-gold-400 hover:text-gold-400 transition-all duration-500 backdrop-blur-md flex items-center gap-2 shadow-md animate-pulse-glow"
            >
              <Phone size={20} /> Call Now
            </button>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md transition-opacity duration-300">
          <div className="bg-navy-900 p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-gold-500/30 transform scale-95 animate-modal-pop gold-gradient-bg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-900/10 to-navy-900/50 opacity-50"></div>
            <button 
              onClick={() => setShowModal(false)} 
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
    </section>
  )
}
