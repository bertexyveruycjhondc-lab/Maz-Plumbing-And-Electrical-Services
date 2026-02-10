'use client'

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 border-t border-navy-700">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="text-3xl font-serif font-bold text-white flex items-center gap-2 mb-6">
              <span className="text-gold-600 text-4xl">✦</span> Maz Elite
            </a>
            <p className="text-slate-400 leading-relaxed">
              Elevating home maintenance to an art form with unparalleled plumbing and electrical mastery.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Hydraulic Mastery
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Electrical Excellence
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Elite Maintenance
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Emergency Response
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-slate-400 hover:text-gold-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-navy-800 border border-navy-700 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-navy-800 border border-navy-700 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-navy-800 border border-navy-700 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-navy-800 border border-navy-700 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">
              © {currentYear} Maz Plumbing & Electrical. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-slate-500 hover:text-gold-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-gold-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-500 hover:text-gold-400 text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
