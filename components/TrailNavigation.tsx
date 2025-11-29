'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Code, Briefcase, Mountain, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface TrailNavigationProps {
  currentTrail?: 'engineering' | 'consulting' | 'software'
}

export default function TrailNavigation({ currentTrail }: TrailNavigationProps) {
  const trails = [
    {
      id: 'engineering',
      title: 'Engineering & Technical Innovation',
      icon: TrendingUp,
      color: 'trail-green',
      description: 'High-altitude, high-precision engineering summits',
      href: '/engineering',
    },
    {
      id: 'consulting',
      title: 'Consulting Trail',
      icon: Briefcase,
      color: 'earth-brown',
      description: 'Decision forks, routes, and strategic viewpoints',
      href: '/consulting',
    },
    {
      id: 'software',
      title: 'Software Engineering',
      icon: Code,
      color: 'navy',
      description: 'Digital paths, nodes, and interactive checkpoints',
      href: '/software',
    },
  ]

  const colorClasses = {
    'trail-green': {
      text: 'text-trail-green',
      bg: 'bg-trail-green',
      border: 'border-trail-green',
      hover: 'hover:bg-trail-green hover:text-white',
    },
    'earth-brown': {
      text: 'text-earth-brown',
      bg: 'bg-earth-brown',
      border: 'border-earth-brown',
      hover: 'hover:bg-earth-brown hover:text-white',
    },
    'navy': {
      text: 'text-navy',
      bg: 'bg-navy',
      border: 'border-navy',
      hover: 'hover:bg-navy hover:text-white',
    },
  }

  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-white to-sandstone/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Mountain className="w-8 h-8 text-muted-grey" />
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Explore Other Trails
            </h2>
          </div>
          <p className="text-lg text-muted-grey max-w-2xl mx-auto">
            Continue your expedition across all three peaks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {trails.map((trail, index) => {
            const Icon = trail.icon
            const colors = colorClasses[trail.color as keyof typeof colorClasses]
            const isCurrent = currentTrail === trail.id

            return (
              <Link key={trail.id} href={trail.href}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative p-6 rounded-xl border-2 ${
                    isCurrent
                      ? `${colors.border} ${colors.bg} text-white`
                      : `border-earth-brown/20 bg-white/60 ${colors.text}`
                  } hover-reveal cursor-pointer transition-all duration-300`}
                >
                  {isCurrent && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-white/20 rounded-full text-xs font-semibold">
                      Current
                    </div>
                  )}

                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 rounded-full ${
                        isCurrent ? 'bg-white/20' : colors.bg
                      } flex items-center justify-center mb-4`}
                    >
                      <Icon className={`w-8 h-8 ${isCurrent ? 'text-white' : 'text-white'}`} />
                    </div>

                    <h3 className="font-bold text-xl mb-2">{trail.title}</h3>
                    <p className={`text-sm mb-4 ${isCurrent ? 'text-white/90' : 'text-muted-grey'}`}>
                      {trail.description}
                    </p>

                    <div
                      className={`inline-flex items-center gap-2 text-sm font-semibold ${
                        isCurrent ? 'text-white' : colors.text
                      }`}
                    >
                      {isCurrent ? (
                        <span>You are here</span>
                      ) : (
                        <>
                          <span>Explore trail</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

