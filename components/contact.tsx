'use client'

import React, { useState, useEffect } from 'react'
import { Phone, MapPin, Mail, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init('XxcfrDVc4AbcpRK6O') // Your public key
  }, [])

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError('') // Clear error when user starts typing
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      await emailjs.send(
        'service_t7ccdum', // Your Service ID
        'template_s4ra6la', // Your Template ID
        {
          to_email: 'berte.xyveruycjhon.dc@ssct.edu.ph',
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone || 'Not provided',
          Service: formData.subject,
          Message: formData.message,
        }
      )

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error('EmailJS error:', error)
      setError(
        'Failed to send message. Please check your credentials or try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 bg-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-lg">
            We're here to help. Send us a message and we'll respond as soon as
            possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <div className="bg-slate-800 border border-slate-700 p-8 rounded-lg hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-6">
              <Phone size={32} className="text-blue-500" />
              <h3 className="text-2xl font-bold text-white">Call Us</h3>
            </div>
            <p className="text-slate-300 text-lg mb-2">+63 995 159 0071</p>
            <p className="text-slate-300 text-lg mb-2">+63 917 771 1211</p>
            <p className="text-slate-400">Available 24/7 for emergencies</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 p-8 rounded-lg hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-6">
              <MapPin size={32} className="text-blue-500" />
              <h3 className="text-2xl font-bold text-white">Location</h3>
            </div>
            <p className="text-slate-300 text-lg mb-2">
              103 K6th St Kamuning Quezon City
            </p>
            <p className="text-slate-400">
              Serving Metro Manila and surrounding areas
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 p-8 rounded-lg hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-6">
              <Mail size={32} className="text-blue-500" />
              <h3 className="text-2xl font-bold text-white">Email</h3>
            </div>
            <p className="text-slate-300 text-lg mb-2">
              mazplumbelectricalservices@gmail.com
            </p>
            <p className="text-slate-400">Response within 2 hours</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-slate-800 border border-slate-700 p-12 rounded-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-semibold mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-semibold mb-3">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+63 995 159 0071"
                  className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-3">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
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
              <label className="block text-white font-semibold mb-3">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or concern..."
                rows={6}
                className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                required
              ></textarea>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-700 rounded text-red-400">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 rounded disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  Sending
                  <span className="animate-pulse">...</span>
                </>
              ) : (
                <>
                  <Send size={20} /> Send Message
                </>
              )}
            </button>

            {submitted && (
              <p className="text-center text-green-400 mt-6 font-semibold">
                ✓ Thank you! We&apos;ll be in touch within 2 hours.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
