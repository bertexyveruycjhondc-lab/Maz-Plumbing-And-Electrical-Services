'use client'
import { Phone, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setIsMobile(/Mobi|Android|iPad|iPhone/i.test(navigator.userAgent))
  }, [])

  const phoneNumbers = ['09951590071', '091777111211']

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
              href="tel:+639951590071"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-navy-800 p-8 rounded-xl shadow-2xl max-w-sm w-full mx-4 border border-navy-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white text-xl font-serif font-bold">Contact Us</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white">
                <X size={20} />
              </button>
            </div>
            <p className="text-slate-300 mb-4">Call us for service at one of these numbers:</p>
            <ul className="space-y-3">
              {phoneNumbers.map((number, index) => (
                <li key={index}>
                  <a
                    href={`tel:+63${number.slice(1)}`}
                    className="text-gold-400 hover:text-gold-500 transition-colors block"
                  >
                    {number}
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
