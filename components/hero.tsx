'use client'

import { Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/roofing-services-flyer.jpg" // Path to your uploaded image - place the uploaded photo in your public folder and reference it here
          alt="Maz Roofing Services"
          className="w-full h-full object-cover opacity-50 scale-105 hover:scale-110 transition-transform duration-[60s]"
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
          <a
            href="tel:+639123456789"
            className="px-10 py-5 border border-white/20 text-white font-medium uppercase tracking-widest hover:border-gold-400 hover:text-gold-400 transition-all duration-500 backdrop-blur-md flex items-center gap-2 shadow-md animate-pulse-glow"
          >
            <Phone size={20} /> Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
