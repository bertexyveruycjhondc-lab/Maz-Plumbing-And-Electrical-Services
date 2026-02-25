'use client'
import { useState, useEffect } from 'react'

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(timer)
  }, [images.length])

  return (
    <section id="portfolio" className="py-32 bg-navy-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">
            Our Finest Works
          </h2>
          <div className="w-32 h-1 gold-gradient mx-auto"></div>
        </div>
        <div className="relative w-full h-96 overflow-hidden rounded-lg">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Project ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
