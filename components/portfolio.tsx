```tsx
'use client'
import { useState, useEffect } from 'react'

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const images = [
    '/images/tv-wall.jpg',           // Your uploaded image 1: Modern TV feature wall
    '/images/cabinet-assembly.jpg',  // Your uploaded image 2: Team assembling cabinets
    '/images/water-system.jpg',      // Your uploaded image 3: Water tank & pump setup
    '/images/yogurt-kiosk.jpg',      // Your uploaded image 4: llaollao kiosk
    '/images/drain-unclogging.jpg',  // Your uploaded image 5: Drain cleaning machine
    '/images/warehouse-ceiling.jpg', // Your uploaded image 6: Warehouse ceiling insulation
    '/images/kitchen-pantry.jpg',    // Your uploaded image 7: White kitchen pantry
    '/images/exterior-scaffolding.jpg' // Your uploaded image 8: Exterior scaffolding work
  ]

  useEffect(() => {
    if (isHovered) return // Pause autoplay when hovering

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [images.length, isHovered])

  return (
    <section id="portfolio" className="py-32 bg-navy-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">
            Our Finest Works
          </h2>
          <div className="w-32 h-1 gold-gradient mx-auto"></div>
        </div>

        {/* Cool Slideshow Container with Hover Zoom */}
        <div 
          className="relative w-full max-w-5xl mx-auto h-[520px] overflow-hidden rounded-2xl shadow-2xl group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  index === currentIndex && isHovered 
                    ? 'scale-110' 
                    : 'scale-100'
                }`}
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}

          {/* Navigation Dots - Now with hover glow */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3.5 h-3.5 rounded-full border-2 border-white/80 transition-all duration-300 hover:scale-125 ${
                  index === currentIndex 
                    ? 'bg-gold-400 border-gold-400 scale-125 shadow-[0_0_12px_rgb(234,179,8)]' 
                    : 'bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Optional slide counter */}
          <div className="absolute top-6 right-6 bg-black/60 text-white text-sm px-4 py-1.5 rounded-full font-mono tracking-widest">
            {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </div>
        </div>
      </div>
    </section>
  )
}
```
