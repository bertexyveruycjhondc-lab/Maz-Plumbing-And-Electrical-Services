'use client'
import { Facebook, Mail, X } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [showSitemapModal, setShowSitemapModal] = useState(false)

  return (
    <footer className="bg-navy-900 border-t border-navy-700">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
           <a
  href="#home"
  className="flex items-center gap-4 mb-6"
>
  {/* Round Logo */}
  <div className="w-12 h-12 rounded-full overflow-hidden border border-navy-700 flex-shrink-0">
    <img
      src="/logo.jpg" // Replace with your actual logo path
      alt="Company Logo"
      className="w-full h-full object-cover"
    />
  </div>
  {/* Company Name */}
  <span className="text-3xl font-serif font-bold text-gold-500">
    Maz Plumbing and Electrical Service
  </span>
</a>
            <p className="text-slate-400 leading-relaxed">
              Transforming homes with expert plumbing, electrical wizardry, and renovation brilliance – where quality meets reliability!
            </p>
          </div>
          {/* Services */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Home & Store Renovation Mastery
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Modular Cabinets Excellence
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Electrical Wiring Expertise
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Plumbing Services Mastery
                </a>
              </li>
               <li>
                <a href="#services" className="text-slate-400 hover:text-gold-400 transition-colors">
                 Kitchen Modular Expert
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Roof Renovation Excellence
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Water Pump Installation
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Painting Expertise
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Floor Tile Expert
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
                href="https://www.facebook.com/Malcolm2916"
                className="w-12 h-12 bg-navy-800 border border-navy-700 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:mazplumbelectricalservices@gmail.com"
                className="w-12 h-12 bg-navy-800 border border-navy-700 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-navy-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">
              © {currentYear} Maz Plumbing and Electrical Service. All rights reserved.
            </p>
            <div className="flex gap-8">
              <button onClick={() => setShowPrivacyModal(true)} className="text-slate-500 hover:text-gold-400 text-sm transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => setShowTermsModal(true)} className="text-slate-500 hover:text-gold-400 text-sm transition-colors">
                Terms of Service
              </button>
              <button onClick={() => setShowSitemapModal(true)} className="text-slate-500 hover:text-gold-400 text-sm transition-colors">
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md transition-opacity duration-300">
          <div className="bg-navy-900 p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-gold-500/30 transform scale-95 animate-modal-pop gold-gradient-bg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-900/10 to-navy-900/50 opacity-50"></div>
            <button 
              onClick={() => setShowPrivacyModal(false)} 
              className="absolute top-4 right-4 text-gold-300 hover:text-gold-500 transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-gold-400 text-2xl font-serif font-bold mb-6 relative z-10">
              Privacy Policy
            </h3>
           <p className="text-slate-200 mb-6 relative z-10 font-light">
  At Maz Plumbing and Electrical Service, your privacy is important to us. We collect only the information necessary to provide quality services, such as your name, email, phone number, and service request details.  
  <br /><br />
  We use this information solely to respond to inquiries, provide services, and improve our offerings. We do not sell, trade, or share your personal data with third parties for marketing purposes.  
  <br /><br />
  By using our website or services, you consent to our privacy practices outlined here. We also use cookies for analytics and site optimization, which you can manage via your browser settings.
</p>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md transition-opacity duration-300">
          <div className="bg-navy-900 p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-gold-500/30 transform scale-95 animate-modal-pop gold-gradient-bg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-900/10 to-navy-900/50 opacity-50"></div>
            <button 
              onClick={() => setShowTermsModal(false)} 
              className="absolute top-4 right-4 text-gold-300 hover:text-gold-500 transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-gold-400 text-2xl font-serif font-bold mb-6 relative z-10">
              Terms of Service
            </h3>
            <p className="text-slate-200 mb-6 relative z-10 font-light">
  By using Maz Plumbing and Electrical Service, you agree to the following terms:  
  <br /><br />
  1. <strong>Service Scope:</strong> We provide plumbing, electrical, and home renovation services as requested. All service requests should be clear and agreed upon prior to work.  
  <br />
  2. <strong>Payment Terms:</strong> Payment is due as agreed in your service quote. Additional costs may apply for extra work or materials.  
  <br />
  3. <strong>Liability:</strong> We are not liable for indirect or incidental damages. We guarantee workmanship for the services provided, in accordance with industry standards.  
  <br />
  4. <strong>Cancellations:</strong> Cancellations must be made at least 24 hours before scheduled service to avoid charges.  
  <br /><br />
  By booking our services or using our website, you acknowledge and agree to these terms.
</p>
          </div>
        </div>
      )}

      {/* Sitemap Modal */}
      {showSitemapModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md transition-opacity duration-300">
          <div className="bg-navy-900 p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-gold-500/30 transform scale-95 animate-modal-pop gold-gradient-bg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-900/10 to-navy-900/50 opacity-50"></div>
            <button 
              onClick={() => setShowSitemapModal(false)} 
              className="absolute top-4 right-4 text-gold-300 hover:text-gold-500 transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-gold-400 text-2xl font-serif font-bold mb-6 relative z-10">
              Sitemap
            </h3>
            <ul className="text-slate-200 relative z-10 font-light space-y-2">
              <li><a href="#home" className="hover:text-gold-400">Home</a></li>
              <li><a href="#services" className="hover:text-gold-400">Services</a></li>
              <li><a href="#about" className="hover:text-gold-400">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-gold-400">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-gold-400">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-gold-400">Contact</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </div>
      )}
    </footer>
  )
}
