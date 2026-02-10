'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: 'Luxury Estate Renovation',
      category: 'Plumbing & Electrical',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
      description: 'Complete modernization of a historic estate with integrated smart systems',
    },
    {
      title: 'Smart Home Integration',
      category: 'Electrical Excellence',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop',
      description: 'Advanced automation and energy-efficient electrical infrastructure',
    },
    {
      title: 'Commercial Complex',
      category: 'Plumbing Mastery',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
      description: 'Large-scale commercial plumbing and electrical systems installation',
    },
    {
      title: 'Residential Upgrade',
      category: 'Maintenance & Repair',
      image: 'https://images.unsplash.com/photo-1519915212117-8c52f6b6c3a4?q=80&w=2000&auto=format&fit=crop',
      description: 'Comprehensive home upgrade with premium fixtures and modern wiring',
    },
  ]

  return (
    <section id="portfolio" className="py-32 bg-navy-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">
            Our Finest Works
          </h2>
          <div className="w-32 h-1 gold-gradient mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent"></div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <span className="text-gold-400 text-sm uppercase tracking-widest font-semibold mb-2">
                  {project.category}
                </span>
                <h3 className="text-3xl font-serif font-bold mb-3 group-hover:text-gold-400 transition-colors">
                  {project.title}
                </h3>
                <p
                  className={`text-slate-200 mb-4 transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100 h-auto' : 'opacity-0 h-0'
                  }`}
                >
                  {project.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors group-hover:translate-x-2 duration-300"
                >
                  View Details <ChevronRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
