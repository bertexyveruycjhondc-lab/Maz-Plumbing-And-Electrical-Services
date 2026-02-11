'use client'

import { Wrench, Zap, Shield, Droplet, Lightbulb, Cpu } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'Hydraulic Mastery',
      desc: 'Bespoke plumbing systems, advanced leak detection, and exquisite fixture installations crafted for enduring elegance.',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2000&auto=format&fit=crop',
    },
    {
      title: 'Electrical Excellence',
      desc: 'Sophisticated wiring, seamless smart home integration, and rigorous safety protocols for flawless power delivery.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000&auto=format&fit=crop',
    },
    {
      title: 'Elite Maintenance',
      desc: 'Concierge-level emergency response and preventive care to maintain your infrastructure at pinnacle performance.',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1517480448885-4fd3d563ea2b?q=80&w=2000&auto=format&fit=crop',
    },
    {
      title: 'Filtration Mastery',
      desc: 'State-of-the-art water purification and softening systems delivering crystal-clear, health-optimized water throughout your home.',
      icon: Droplet,
      image: 'https://images.unsplash.com/photo-1583947581924-860f6d63e8e7?q=80&w=2000&auto=format&fit=crop',
    },
    {
      title: 'Illumination Mastery',
      desc: 'Bespoke lighting design, architectural installations, and intelligent dimming systems that sculpt atmosphere with precision.',
      icon: Lightbulb,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop',
    },
    {
      title: 'Automation Excellence',
      desc: 'Seamless smart home ecosystems integrating lighting, climate, security, and entertainment into one effortless experience.',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76a0d7e1?q=80&w=2000&auto=format&fit=crop',
    },
  ]

  return (
    <section id="services" className="py-32 bg-navy-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">
            Our Signature Expertise
          </h2>
          <div className="w-32 h-1 gold-gradient mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group relative bg-navy-900 overflow-hidden border border-navy-700 hover:border-gold-500/70 transition-all duration-700 hover:-translate-y-3 premium-shadow animate-fade-in-left"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-72 overflow-hidden relative">
                  <div className="absolute inset-0 bg-navy-900/30 group-hover:bg-navy-900/0 transition-colors duration-500 z-10"></div>
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="p-10 relative">
                  <div className="absolute -top-14 right-8 w-20 h-20 bg-navy-800 rounded-full flex items-center justify-center text-gold-500 border border-navy-700 group-hover:border-gold-600 group-hover:bg-gold-600 group-hover:text-navy-900 transition-all duration-500 z-20 premium-shadow animate-rotate-slow">
                    <IconComponent size={40} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-base">{service.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
