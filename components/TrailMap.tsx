'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, TrendingUp, Code, Briefcase, Navigation } from 'lucide-react'
import Link from 'next/link'

interface Pinpoint {
  id: string
  x: number
  y: number
  trailId: string
}

export default function TrailMap() {
  const [draggedPin, setDraggedPin] = useState<Pinpoint | null>(null)
  const [pinpoints, setPinpoints] = useState<Pinpoint[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [hasMoved, setHasMoved] = useState(false)
  const [dragStartPos, setDragStartPos] = useState<{ x: number; y: number } | null>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  const trails = [
    {
      id: 'engineering',
      title: 'Engineering & Technical Innovation',
      icon: TrendingUp,
      color: 'trail-green',
      description: 'High-altitude, high-precision engineering summits',
      position: { x: 20, y: 30 },
      href: '/engineering',
    },
    {
      id: 'consulting',
      title: 'Consulting Trail',
      icon: Briefcase,
      color: 'earth-brown',
      description: 'Decision forks, routes, and strategic viewpoints',
      position: { x: 50, y: 50 },
      href: '/consulting',
    },
    {
      id: 'software',
      title: 'Software Engineering',
      icon: Code,
      color: 'navy',
      description: 'Digital paths, nodes, and interactive checkpoints',
      position: { x: 80, y: 70 },
      href: '/software',
    },
  ]

  // Initialize pinpoints at trail positions
  useEffect(() => {
    const initialPinpoints: Pinpoint[] = trails.map((trail) => ({
      id: trail.id,
      x: trail.position.x,
      y: trail.position.y,
      trailId: trail.id,
    }))
    setPinpoints(initialPinpoints)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleMouseDown = (e: React.MouseEvent, pinpoint: Pinpoint) => {
    e.preventDefault()
    setIsDragging(true)
    setDraggedPin(pinpoint)
    setHasMoved(false)
    setDragStartPos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !draggedPin || !mapRef.current || !dragStartPos) return

    // Check if mouse has moved significantly (more than 5px)
    const moveDistance = Math.sqrt(
      Math.pow(e.clientX - dragStartPos.x, 2) + Math.pow(e.clientY - dragStartPos.y, 2)
    )
    if (moveDistance > 5) {
      setHasMoved(true)
    }

    const rect = mapRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    // Constrain to map bounds
    const constrainedX = Math.max(5, Math.min(95, x))
    const constrainedY = Math.max(5, Math.min(95, y))

    setPinpoints((prev) =>
      prev.map((pin) =>
        pin.id === draggedPin.id
          ? { ...pin, x: constrainedX, y: constrainedY }
          : pin
      )
    )
  }

  const handleMouseUp = (trailId?: string, href?: string) => {
    // If we didn't move much, treat it as a click and navigate
    if (isDragging && !hasMoved && trailId && href) {
      window.location.href = href
    }
    
    setIsDragging(false)
    setDraggedPin(null)
    setHasMoved(false)
    setDragStartPos(null)
  }

  return (
    <section id="trail-map" className="relative py-24 px-6 bg-gradient-to-b from-white to-sandstone/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            The Expedition Map
          </h2>
          <p className="text-xl text-muted-grey max-w-2xl mx-auto mb-4">
            Three distinct trails converging into one journey of innovation and impact
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-grey">
            <Navigation className="w-4 h-4" />
            <span>Drag the red pinpoints to explore, click to navigate to each trail</span>
          </div>
        </motion.div>

        {/* Interactive Map Container */}
        <div
          ref={mapRef}
          onMouseMove={handleMouseMove}
          onMouseUp={() => handleMouseUp()}
          onMouseLeave={() => handleMouseUp()}
          className="relative h-[600px] md:h-[800px] bg-gradient-to-br from-sandstone/30 via-white to-forest-green/10 rounded-3xl overflow-hidden border-2 border-earth-brown/20 shadow-2xl cursor-crosshair"
        >
          {/* Topographical background */}
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            {[...Array(20)].map((_, i) => (
              <path
                key={i}
                d={`M 0 ${50 + i * 35} Q 200 ${30 + i * 35} 400 ${50 + i * 35} T 800 ${50 + i * 35} T 1200 ${50 + i * 35}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-topo-line"
              />
            ))}
          </svg>

          {/* Trail paths connecting the three routes */}
          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
            {pinpoints.length >= 3 && (
              <>
                <motion.path
                  d={`M ${(pinpoints[0].x / 100) * 1200} ${(pinpoints[0].y / 100) * 800} Q ${(pinpoints[1].x / 100) * 1200} ${((pinpoints[0].y + pinpoints[1].y) / 2 / 100) * 800} ${(pinpoints[1].x / 100) * 1200} ${(pinpoints[1].y / 100) * 800}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="10 5"
                  className="text-trail-green/40"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
                <motion.path
                  d={`M ${(pinpoints[2].x / 100) * 1200} ${(pinpoints[2].y / 100) * 800} Q ${(pinpoints[1].x / 100) * 1200} ${((pinpoints[1].y + pinpoints[2].y) / 2 / 100) * 800} ${(pinpoints[1].x / 100) * 1200} ${(pinpoints[1].y / 100) * 800}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="10 5"
                  className="text-navy/40"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.7 }}
                />
              </>
            )}
          </svg>

          {/* Draggable Red Pinpoints */}
          {pinpoints.map((pinpoint) => {
            const trail = trails.find((t) => t.id === pinpoint.trailId)
            if (!trail) return null

            const Icon = trail.icon
            const colorClasses = {
              'trail-green': 'text-trail-green bg-trail-green',
              'earth-brown': 'text-earth-brown bg-earth-brown',
              'navy': 'text-navy bg-navy',
            }
            const colorClass = colorClasses[trail.color as keyof typeof colorClasses] || 'text-trail-green bg-trail-green'
            const [textColor, bgColor] = colorClass.split(' ')

            return (
              <motion.div
                key={pinpoint.id}
                className="absolute z-30 cursor-move"
                style={{
                  left: `${pinpoint.x}%`,
                  top: `${pinpoint.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onMouseDown={(e) => handleMouseDown(e, pinpoint)}
                onMouseUp={() => handleMouseUp(trail.id, trail.href)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                drag={false} // We handle dragging manually for better control
              >
                {/* Red Pinpoint */}
                <div className="relative group">
                  <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg marker-pulse" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full" />
                  
                  {/* Icon badge */}
                  <div className={`absolute -top-2 -right-2 ${bgColor} rounded-full p-1.5 shadow-lg border-2 border-white`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>

                  {/* Trail card on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    whileHover={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 p-4 bg-white rounded-lg shadow-xl border-2 border-red-200 z-40 pointer-events-none whitespace-nowrap"
                  >
                    <h3 className={`font-bold text-lg ${textColor} mb-2`}>
                      {trail.title}
                    </h3>
                    <p className="text-sm text-muted-grey mb-3">
                      {trail.description}
                    </p>
                    <div className="pt-3 border-t border-muted-grey/20">
                      <span className="text-xs font-semibold text-navy">
                        {isDragging ? 'Release to drop' : 'Drag to move • Click to explore →'}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}

          {/* Central convergence point */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-15 pointer-events-none"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-trail-green via-earth-brown to-navy opacity-20 blur-xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-navy border-4 border-white shadow-lg" />
          </motion.div>
        </div>

        {/* Trail descriptions with links */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {trails.map((trail, index) => {
            const Icon = trail.icon
            const colorClasses = {
              'trail-green': 'text-trail-green',
              'earth-brown': 'text-earth-brown',
              'navy': 'text-navy',
            }
            const textColor = colorClasses[trail.color as keyof typeof colorClasses] || 'text-trail-green'

            return (
              <Link key={trail.id} href={trail.href}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white/60 rounded-xl border border-earth-brown/20 hover-reveal cursor-pointer"
                >
                  <Icon className={`w-10 h-10 ${textColor} mx-auto mb-4`} />
                  <h3 className="font-bold text-xl text-navy mb-2">{trail.title}</h3>
                  <p className="text-muted-grey mb-4">{trail.description}</p>
                  <span className="text-sm font-semibold text-navy inline-flex items-center gap-1">
                    Explore trail <MapPin className="w-4 h-4" />
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
