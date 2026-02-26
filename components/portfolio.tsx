'use client'
import { useState, useEffect } from 'react'

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const images = [
    '/images/tv-wall.jpg',
    '/images/cabinet-assembly.jpg',
    '/images/water-system.jpg',
    '/images/yogurt-kiosk.jpg',
    '/images/drain-unclogging.jpg',
    '/images/warehouse-ceiling.jpg',
    '/images/kitchen-pantry.jpg',
    '/images/exterior-scaffolding.jpg'
  ]

  useEffect(() => {
    if (isHovered) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [isHovered])

  return (
    <section id="portfolio" className="py-32 bg-navy-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Our Finest Works
          </h2>
          <div className="w-32 h-1 gold-gradient mx-auto"></div>
        </div>

        {/* Slideshow */}
        <div
          className="relative w-full max-w-6xl mx-auto aspect-video bg-transparent rounded-2xl shadow-2xl overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Project ${index + 1}`}
              className={`
                absolute inset-0
                w-full 
                h-full
                object-contain
                transition-opacity duration-1000 ease-in-out
                ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
              `}
            />
          ))}

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gold-400 scale-125'
                    : 'bg-white/50 hover:bg-white'
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="absolute top-6 right-6 bg-black/60 text-white text-sm px-4 py-1.5 rounded-full font-mono">
            {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </div>
        </div>
      </div>
    </section>
  )
}
