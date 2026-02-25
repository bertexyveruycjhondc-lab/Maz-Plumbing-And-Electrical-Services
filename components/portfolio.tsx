'use client'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: 'Modern TV Feature Wall',
      category: 'Interior Design & Lighting',
      image: 'https://i0.wp.com/homecompanionmag.com/wp-content/uploads/2024/09/Modern-TV-Wall-Decor-Ideas-8.jpg?resize=1095%2C730&ssl=1',
      description: 'Custom vertical wood slat wall with integrated LED backlighting, wall-mounted TV, floating console, and adjacent shelving for a contemporary living space.',
    },
    {
      title: 'Custom Cabinet Assembly',
      category: 'Furniture Installation',
      image: 'https://media.angi.com/s3fs-public/Workers-doing-kitchen-installation-1470468188.jpg?impolicy=leadImage',
      description: 'On-site assembly of bespoke wooden cabinets by skilled team, ensuring precise fit and high-quality finish in a modern interior setting.',
    },
    {
      title: 'Residential Water System Installation',
      category: 'Plumbing Infrastructure',
      image: 'https://www.simplepump.com/site/images/blog/how-does-a-shallow-well-pump-work-with-a-pressure-tank/image.jpeg',
      description: 'Expert setup of pressure tank, booster pump, and piping network for efficient home water supply and pressure regulation.',
    },
    {
      title: 'Commercial Yogurt Kiosk Build',
      category: 'Retail Fit-Out',
      image: 'https://rockabitebaby.com/wp-content/uploads/2013/09/20130908_144027.jpg',
      description: 'Full construction and branding of a frozen yogurt kiosk with illuminated signage, counter, and protective netting for mall readiness.',
    },
    {
      title: 'Drain Unclogging Service',
      category: 'Plumbing Maintenance',
      image: 'http://blog.extremehowto.com/wp-content/uploads/2018/09/IMG_4299.jpg',
      description: 'Professional use of industrial drain snake equipment to clear outdoor blockages, ensuring quick and effective resolution.',
    },
    {
      title: 'Warehouse Ceiling Insulation',
      category: 'Commercial Renovation',
      image: 'https://thumbs.dreamstime.com/b/installation-insulation-panels-ceiling-new-commercial-warehouse-construction-site-workers-use-scissor-lift-to-install-369148544.jpg',
      description: 'Large-scale installation of insulation panels on warehouse ceiling using scaffolding for energy efficiency and structural enhancement.',
    },
    {
      title: 'Bespoke Kitchen Pantry',
      category: 'Custom Cabinetry',
      image: 'https://i.ytimg.com/vi/rXpSTs4BEBg/maxresdefault.jpg',
      description: 'Tall white pantry with glass doors, adjustable shelves, and integrated power outlets for organized and functional kitchen storage.',
    },
    {
      title: 'Exterior Ceiling & Roofing Work',
      category: 'Construction & Repair',
      image: 'https://foxhavenroof.com/wp-content/uploads/2025/11/roof-layers-inspection-workers-scaled.jpg',
      description: 'Team on scaffolding performing precise ceiling and roofing renovations, including piping and structural adjustments for durability.',
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
