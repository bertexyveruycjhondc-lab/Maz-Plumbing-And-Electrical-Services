'use client'

import React from "react"

import { useState } from 'react'
import { Phone, MapPin, Mail, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-32 bg-navy-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">
            Begin Your Journey to Excellence
          </h2>
          <div className="w-32 h-1 gold-gradient mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {/* Contact Info Cards */}
          <div className="bg-navy-900 border border-navy-700 p-8 rounded-lg hover:border-gold-500/70 transition-all duration-500 hover:-translate-y-2 premium-shadow animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <Phone size={32} className="text-gold-500" />
              <h3 className="text-2xl font-serif font-bold text-white">Call Us</h3>
            </div>
            <p className="text-slate-300 text-lg mb-2">+63 912 345 6789</p>
            <p className="text-slate-400">Available 24/7 for emergencies</p>
          </div>

          <div className="bg-navy-900 border border-navy-700 p-8 rounded-lg hover:border-gold-500/70 transition-all duration-500 hover:-translate-y-2 premium-shadow animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <div className="flex items-center gap-4 mb-6">
              <MapPin size={32} className="text-gold-500" />
              <h3 className="text-2xl font-serif font-bold text-white">Location</h3>
            </div>
            <p className="text-slate-300 text-lg mb-2">Quezon City, Philippines</p>
            <p className="text-slate-400">Serving Metro Manila and surrounding areas</p>
          </div>

          <div className="bg-navy-900 border border-navy-700 p-8 rounded-lg hover:border-gold-500/70 transition-all duration-500 hover:-translate-y-2 premium-shadow animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center gap-4 mb-6">
              <Mail size={32} className="text-gold-500" />
              <h3 className="text-2xl font-serif font-bold text-white">Email</h3>
            </div>
            <p className="text-slate-300 text-lg mb-2">info@mazservices.com</p>
            <p className="text-slate-400">Response within 2 hours</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <form onSubmit={handleSubmit} className="bg-navy-900 border border-navy-700 p-12 rounded-lg premium-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-semibold mb-3">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-navy-800 border border-navy-700 rounded px-4 py-3 text-white placeholder:text-slate-500 focus:border-gold-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-navy-800 border border-navy-700 rounded px-4 py-3 text-white placeholder:text-slate-500 focus:border-gold-500 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-semibold mb-3">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+63 912 345 6789"
                  className="w-full bg-navy-800 border border-navy-700 rounded px-4 py-3 text-white placeholder:text-slate-500 focus:border-gold-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-3">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-navy-800 border border-navy-700 rounded px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="plumbing">Plumbing Inquiry</option>
                  <option value="electrical">Electrical Inquiry</option>
                  <option value="maintenance">Maintenance Request</option>
                  <option value="emergency">Emergency Service</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-white font-semibold mb-3">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or concern..."
                rows={6}
                className="w-full bg-navy-800 border border-navy-700 rounded px-4 py-3 text-white placeholder:text-slate-500 focus:border-gold-500 focus:outline-none transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full gold-gradient text-navy-900 py-4 font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:from-gold-600 hover:to-gold-500 transition-all duration-300 premium-shadow animate-pulse-glow rounded"
            >
              <Send size={20} /> Send Message
            </button>

            {submitted && (
              <p className="text-center text-gold-400 mt-6 font-semibold animate-fade-in">
                ✓ Thank you! We'll be in touch within 2 hours.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
