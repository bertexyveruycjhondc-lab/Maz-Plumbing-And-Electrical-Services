'use client'

import { Award, Users, Clock } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-32 bg-navy-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-left">
            <span className="text-gold-400 uppercase tracking-[0.2em] text-sm font-semibold">
              About Our Company
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mt-4 mb-8 text-balance">
              Three Decades of Uncompromising Excellence
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Since our establishment, Maz Plumbing & Electrical has been the trusted choice for those who demand
              perfection. Our team of master technicians brings decades of combined experience to every project,
              ensuring flawless execution and exceptional results.
            </p>
            <p className="text-lg text-slate-300 mb-12 leading-relaxed">
              We believe that true craftsmanship never compromises. Every connection, every wire, every fixture is
              installed with meticulous attention to detail and an unwavering commitment to excellence.
            </p>

            <div className="grid grid-cols-3 gap-8">
              <div className="animate-scale-in" style={{ animationDelay: '100ms' }}>
                <div className="flex items-center gap-3 mb-3">
                  <Award size={28} className="text-gold-500" />
                  <span className="text-3xl font-bold text-white">1000+</span>
                </div>
                <p className="text-slate-300 text-sm">Projects Completed</p>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center gap-3 mb-3">
                  <Users size={28} className="text-gold-500" />
                  <span className="text-3xl font-bold text-white">98%</span>
                </div>
                <p className="text-slate-300 text-sm">Client Satisfaction</p>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '300ms' }}>
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={28} className="text-gold-500" />
                  <span className="text-3xl font-bold text-white">30+</span>
                </div>
                <p className="text-slate-300 text-sm">Years in Business</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="absolute -inset-4 gold-gradient opacity-20 blur-2xl rounded-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
              alt="Expert Technicians"
              className="relative rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
