'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Code, Briefcase, Mountain } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function MountainMap() {
  const trails = [
    {
      id: 'engineering',
      title: 'Engineering & Technical Innovation',
      icon: TrendingUp,
      color: 'trail-green',
      description: 'High-altitude, high-precision engineering summits',
      href: '/engineering',
      peak: 'left',
      position: { x: 13, y: 10 }, // Left peak position
    },
    {
      id: 'consulting',
      title: 'Consulting Trail',
      icon: Briefcase,
      color: 'earth-brown',
      description: 'Decision forks, routes, and strategic viewpoints',
      href: '/consulting',
      peak: 'center',
      position: { x: 37, y: 0 }, // Center peak (highest) position
    },
    {
      id: 'software',
      title: 'Software Engineering',
      icon: Code,
      color: 'navy',
      description: 'Digital paths, nodes, and interactive checkpoints',
      href: '/software',
      peak: 'right',
      position: { x: 65, y: 5 }, // Right peak position
    },
  ]

  const colorClasses = {
    'trail-green': {
      text: 'text-trail-green',
      bg: 'bg-trail-green',
      border: 'border-trail-green',
      shadow: 'shadow-trail-green/50',
    },
    'earth-brown': {
      text: 'text-earth-brown',
      bg: 'bg-earth-brown',
      border: 'border-earth-brown',
      shadow: 'shadow-earth-brown/50',
    },
    'navy': {
      text: 'text-navy',
      bg: 'bg-navy',
      border: 'border-navy',
      shadow: 'shadow-navy/50',
    },
  }

  return (
    <section id="mountain-map" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-sandstone/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Mountain className="w-8 h-8 sm:w-10 sm:h-10 text-trail-green" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
              The Three Peaks
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-muted-grey max-w-2xl mx-auto mb-3 sm:mb-4 px-4">
            Three distinct summits, one expedition of innovation and impact
          </p>
          <p className="text-xs sm:text-sm text-muted-grey px-4">
            Click on any peak to explore that trail
          </p>
        </motion.div>

        {/* Mountain Visualization */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border-2 border-earth-brown/20 shadow-2xl">
          {/* Three Peaks Background Image - Tre Cime di Lavaredo */}
          <div className="absolute inset-0">
            <Image
              src="/assets/pexels-hikerwise-1054676139-20446155.jpg"
              alt="Tre Cime di Lavaredo - Three Mountain Peaks"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Subtle overlay for icon visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
          </div>
          
          {/* Additional overlay for icon visibility */}
          <div className="absolute inset-0 z-10 pointer-events-none" />

          {/* Clickable Icons on Peaks */}
          {trails.map((trail, index) => {
            const Icon = trail.icon
            const colors = colorClasses[trail.color as keyof typeof colorClasses]
            
            return (
              <Link key={trail.id} href={trail.href}>
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="absolute z-30 cursor-pointer"
                  style={{
                    left: `${trail.position.x}%`,
                    top: `${trail.position.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  whileHover={{ scale: 1.2, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Icon Badge with enhanced visibility */}
                  <div className={`relative ${colors.bg} rounded-full p-2.5 sm:p-3 md:p-4 lg:p-5 shadow-2xl ${colors.shadow} border-2 sm:border-3 md:border-4 border-white backdrop-blur-sm bg-opacity-95`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                    
                    {/* Pulse ring */}
                    <motion.div
                      className={`absolute inset-0 ${colors.bg} rounded-full`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Trail card on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    whileHover={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 sm:mt-6 w-64 sm:w-72 p-3 sm:p-4 md:p-5 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-2xl border-2 border-earth-brown/20 z-40 pointer-events-none"
                  >
                    <h3 className={`font-bold text-base sm:text-lg md:text-xl ${colors.text} mb-1 sm:mb-2`}>
                      {trail.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-grey mb-2 sm:mb-3">
                      {trail.description}
                    </p>
                    <div className="pt-3 border-t border-muted-grey/20">
                      <span className="text-xs font-semibold text-navy">
                        Click to explore this peak →
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </Link>
            )
          })}

        </div>

        {/* Trail descriptions with links */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {trails.map((trail, index) => {
            const Icon = trail.icon
            const colors = colorClasses[trail.color as keyof typeof colorClasses]

            return (
              <Link key={trail.id} href={trail.href}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-4 sm:p-5 md:p-6 bg-white/60 rounded-lg sm:rounded-xl border border-earth-brown/20 hover-reveal cursor-pointer"
                >
                  <Icon className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 ${colors.text} mx-auto mb-3 sm:mb-4`} />
                  <h3 className="font-bold text-base sm:text-lg md:text-xl text-navy mb-1.5 sm:mb-2">{trail.title}</h3>
                  <p className="text-sm sm:text-base text-muted-grey mb-3 sm:mb-4">{trail.description}</p>
                  <span className={`text-xs sm:text-sm font-semibold ${colors.text} inline-flex items-center gap-1`}>
                    Climb this peak <Mountain className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

