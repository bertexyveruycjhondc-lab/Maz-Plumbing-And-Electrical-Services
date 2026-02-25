'use client'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: 'Modern Wooden Slat TV Feature Wall',
      category: 'Entertainment Unit & LED Design',
      image: 'https://images.squarespace-cdn.com/content/v1/6854409c4933b941d0697a92/3020a0d6-667e-458e-bc6b-0e33edf0576b/01.jpeg',
      description: 'Custom wood slat accent wall with integrated warm LED backlighting, floating console, and built-in shelving for a sleek, modern living room focal point.',
    },
    {
      title: 'Premium Kitchen Storage Cabinetry',
      category: 'Custom Cabinetry & Joinery',
      image: 'http://www.cabinetswarehouse.com/wp-content/uploads/2025/01/Image_20231211162508-scaled.jpg',
      description: 'High-gloss white tall cabinet with glass sliding doors and internal shelving, designed for maximum storage and a clean, contemporary kitchen look.',
    },
    {
      title: 'Water Pump & Pressure Tank Installation',
      category: 'Plumbing & Utility Systems',
      image: 'https://static.homeguide.com/assets/images/content/homeguide-cost-to-replace-well-pressure-tank-basement-water-supply-tank.jpg',
      description: 'Professional setup of pressure tank, booster pump, and piping system in utility area for reliable water supply and pressure management.',
    },
    {
      title: 'Commercial Kiosk Fit-Out',
      category: 'Retail & Commercial Interiors',
      image: 'https://rockabitebaby.com/wp-content/uploads/2013/09/20130908_144027.jpg',
      description: 'Complete build and installation of modern frozen yogurt outlet counter with branded signage, lighting, and queue management system.',
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
                  src={project.image}
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
