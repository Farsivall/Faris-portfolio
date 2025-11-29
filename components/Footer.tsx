'use client'

import { motion } from 'framer-motion'
import { MapPin, Mountain, Compass } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 bg-gradient-to-b from-navy to-navy/90 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Compass className="w-8 h-8" />
            <h3 className="text-3xl font-bold">Tengku Faris</h3>
            <Mountain className="w-8 h-8" />
          </div>

          <p className="text-lg text-white/80 mb-4 max-w-2xl mx-auto">
            Navigating the trails of engineering, consulting, and software—always ascending, always exploring new terrains.
          </p>

          <div className="flex items-center justify-center gap-2 text-white/60 mb-8">
            <MapPin className="w-4 h-4" />
            <span>University College London (UCL) • Electronic & Electrical Engineering</span>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Tengku Faris Bin Tengku Zuhri. All rights reserved.
            </p>
            <p className="text-xs text-white/40 mt-2">
              Built with the spirit of exploration and the precision of engineering.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

