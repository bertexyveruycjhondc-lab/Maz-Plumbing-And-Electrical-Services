'use client'

import { Home, Box, Zap, Wrench, Utensils, Hammer, PaintBucket, Layers } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'Home & Store Renovation Mastery',
      desc: 'Transformative designs, premium materials, and meticulous craftsmanship for spaces that inspire and endure.',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0caf48?q=80&w=2000&auto=format&fit=crop',
    },
    {
      title: 'Modular Cabinets Excellence',
      desc: 'Customizable storage solutions, innovative configurations, and superior quality for organized elegance in any space.',
      icon: Box,
      image: 'https://images.unsplash.com/photo-1588854337226-6889d631faa8?q=80&w=2000&auto=format&fit=crop',
    },
    {
      title: 'Electrical Wiring Expertise',
      desc: 'Advanced electrical installations, safety-compliant wiring, and efficient systems for reliable power delivery.',
      icon: Zap,
      image: 'https://neuroncdn.com/cdn-0001/21574d42aa8c74c795946c96774d94101022fd135d4b46d720e0c3e6d7b4c9ce?ts=1729998962',
    },
    {
      title: 'Plumbing Services Mastery',
      desc: 'Precision pipework, leak-proof fixtures, and comprehensive plumbing solutions for seamless water management.',
      icon: Wrench,
      image: 'https://cdn.prod.website-files.com/672c783eb245d962f945af09/68eea82878dd4340db018b98_43814babaef64f8a65700367867d774ab6276a15.jpeg',
    },
    {
      title: 'Kitchen Renovation Mastery',
      desc: 'Gourmet kitchen transformations, high-end appliances, and ergonomic designs for culinary excellence and comfort.',
      icon: Utensils,
      image: 'https://napleskb.com/wp-content/uploads/Blog-NKB-Kitchen-Before-After.jpg',
    },
    {
      title: 'Roof Renovation Excellence',
      desc: 'Durable roofing materials, expert repairs, and weather-resistant installations for lasting protection and aesthetics.',
      icon: Hammer,
      image: 'https://images.unsplash.com/photo-1620283137103-062f6835a2b5?q=80&w=2000&auto=format&fit=crop',
    },
    {
      title: 'Waterproofing & Painting Mastery',
      desc: 'Superior waterproofing techniques, premium paints, and flawless finishes for enduring beauty and protection.',
      icon: PaintBucket,
      image: 'https://www.americanhillcountrygutters.com/wp-content/uploads/2015/12/worker-painting-house-trim.jpg',
    },
    {
      title: 'Flooring Installation Expertise',
      desc: 'Exquisite flooring options, professional laying, and durable surfaces for sophisticated and resilient foundations.',
      icon: Layers,
      image: 'https://i.ytimg.com/vi/UMEO2T7dv_8/maxresdefault.jpg',
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
