'use client'

import { Award, Users, Clock } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-32 bg-navy-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-left">
            <span className="text-gold-400 uppercase tracking-[0.2em] text-sm font-semibold">
              About Our Company
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mt-4 mb-8 text-balance">
              Your Premier Partner in Home Transformation
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              At Maz Plumbing & Electrical Services, we transform ordinary spaces into extraordinary havens. Established in Quezon City, our dedicated team of certified experts brings passion, precision, and innovation to every project—whether it's flawless plumbing installations, state-of-the-art electrical systems, complete home renovations, or bespoke modular designs.
            </p>
            <p className="text-lg text-slate-300 mb-12 leading-relaxed">
              We pride ourselves on using only premium materials and cutting-edge techniques to deliver results that stand the test of time. Our unwavering commitment to customer satisfaction means personalized service, transparent communication, and solutions tailored to your unique vision. Experience the difference of true craftsmanship—choose Maz for reliability, elegance, and peace of mind in every detail.
            </p>
          </div>
          <div className="relative animate-fade-in-right">
            <div className="absolute -inset-4 gold-gradient opacity-20 blur-2xl rounded-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
              alt="Expert Technicians"
              className="relative rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
