'use client'

export default function Portfolio() {
  const images = [
    '/images/tv-wall.jpg',      // Your uploaded image 1: Modern TV feature wall with wood slats and LED lighting
    '/images/cabinet-assembly.jpg', // Your uploaded image 2: Team assembling dark wooden cabinets
    '/images/water-system.jpg', // Your uploaded image 3: Man standing next to water tank and pressure pump setup
    '/images/yogurt-kiosk.jpg', // Your uploaded image 4: llaollao frozen yogurt kiosk with green netting
    '/images/drain-unclogging.jpg', // Your uploaded image 5: Workers using drain snake machine outdoors
    '/images/warehouse-ceiling.jpg', // Your uploaded image 6: Scaffolding and insulation installation in warehouse
    '/images/kitchen-pantry.jpg', // Your uploaded image 7: White kitchen pantry cabinet with glass doors
    '/images/exterior-scaffolding.jpg' // Your uploaded image 8: Team on scaffolding working on exterior ceiling and piping
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((src, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
