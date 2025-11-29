'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin } from 'lucide-react'
import Link from 'next/link'
import ConsultingTrail from '@/components/ConsultingTrail'
import TrailNavigation from '@/components/TrailNavigation'
import Footer from '@/components/Footer'

export default function ConsultingPage() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      <div 
        className="scroll-indicator"
        style={{ '--scroll-progress': `${scrollProgress}%` } as React.CSSProperties}
      />
      
      {/* Navigation Header */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-earth-brown/20 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-earth-brown hover:text-sandstone transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Expedition Map</span>
          </Link>
        </div>
      </motion.nav>

      {/* Page Header */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-earth-brown/10 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-earth-brown" />
              <h1 className="text-4xl md:text-5xl font-bold text-navy">
                Consulting Trail
              </h1>
            </div>
            <p className="text-xl text-muted-grey max-w-2xl mx-auto">
              Decision forks, routes, and strategic viewpoints
            </p>
          </motion.div>
        </div>
      </section>

      <ConsultingTrail />
      <TrailNavigation currentTrail="consulting" />
      <Footer />
    </main>
  )
}

