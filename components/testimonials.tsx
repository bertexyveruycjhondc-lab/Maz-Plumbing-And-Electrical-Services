'use client'

import { Quote, Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Margaret Chen',
      role: 'Luxury Estate Owner',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
      quote:
        'Maz elevated our entire home to a new standard of excellence. Every detail was executed with absolute precision. Truly artisan work.',
      rating: 5,
    },
    {
      name: 'Robert Fitzgerald',
      role: 'Property Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      quote:
        'For large-scale projects, there is simply no one better. Their technical expertise and reliability are unmatched in the industry.',
      rating: 5,
    },
    {
      name: 'Victoria Santos',
      role: 'Interior Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
      quote:
        "I recommend Maz to all my high-end clients. They understand that craftsmanship is about more than just function—it's about artistry.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-32 bg-navy-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">
            Words from Our Clientele
          </h2>
          <div className="w-32 h-1 gold-gradient mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-navy-800 border border-navy-700 p-10 rounded-lg hover:border-gold-500/70 transition-all duration-500 hover:-translate-y-2 premium-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-gold-500 text-gold-500"
                  />
                ))}
              </div>

              {/* Quote Icon */}
              <Quote
                size={32}
                className="text-gold-500/40 mb-6 group-hover:text-gold-500/70 transition-colors"
              />

              {/* Quote */}
              <p className="text-slate-200 text-lg mb-8 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-navy-700">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-serif font-bold text-white text-lg">{testimonial.name}</p>
                  <p className="text-gold-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
