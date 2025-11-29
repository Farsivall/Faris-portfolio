'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Image from 'next/image'

interface CollageImage {
  src: string
  location: string
  position: { row: number; col: number; span?: number }
}

export default function ImageCollage() {
  const images: CollageImage[] = [
    {
      src: '/assets/IMG_0699.JPG',
      location: '[Location Name]',
      position: { row: 1, col: 1, span: 2 },
    },
    {
      src: '/assets/IMG_1272.jpg',
      location: '[Location Name]',
      position: { row: 1, col: 3 },
    },
    {
      src: '/assets/IMG_1273.jpg',
      location: '[Location Name]',
      position: { row: 2, col: 1 },
    },
    {
      src: '/assets/IMG_1276.jpg',
      location: '[Location Name]',
      position: { row: 2, col: 2, span: 2 },
    },
    {
      src: '/assets/IMG_1277.jpg',
      location: '[Location Name]',
      position: { row: 3, col: 1, span: 2 },
    },
    {
      src: '/assets/IMG_1278.jpg',
      location: '[Location Name]',
      position: { row: 3, col: 3 },
    },
    {
      src: '/assets/IMG_2947.JPG',
      location: '[Location Name]',
      position: { row: 4, col: 1 },
    },
    {
      src: '/assets/IMG_5952.JPG',
      location: '[Location Name]',
      position: { row: 4, col: 2, span: 2 },
    },
  ]

  return (
    <div className="grid grid-cols-3 auto-rows-fr gap-2 md:gap-3 max-w-5xl mx-auto">
      {images.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className={`relative group cursor-pointer overflow-hidden rounded-lg md:rounded-xl shadow-lg ${
            img.position.span === 2 ? 'col-span-2' : 'col-span-1'
          } aspect-square hover:shadow-2xl transition-shadow duration-300`}
          whileHover={{ scale: 1.03, zIndex: 10, rotate: index % 2 === 0 ? 1 : -1 }}
          style={{
            transformOrigin: 'center',
          }}
        >
          <Image
            src={img.src}
            alt={img.location}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 33vw, 25vw"
          />
          
          {/* Overlay with location name */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 drop-shadow-lg" />
                <span className="text-sm md:text-base font-semibold drop-shadow-lg">
                  {img.location}
                </span>
              </div>
            </div>
          </div>

          {/* Subtle border with trail theme */}
          <div className="absolute inset-0 border-2 border-white/30 rounded-lg md:rounded-xl pointer-events-none group-hover:border-trail-green/50 transition-colors duration-300" />
          
          {/* Corner accent */}
          <div className="absolute top-2 right-2 w-3 h-3 bg-trail-green/0 group-hover:bg-trail-green rounded-full transition-all duration-300" />
        </motion.div>
      ))}
    </div>
  )
}

