'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, MapPin, Calendar } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageData {
  src: string
  location: string
  date: string
}

export default function ImageCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null)

  const images: ImageData[] = [
    { src: '/assets/IMG_0699.JPG', location: 'Seven Sisters', date: 'Oct2025' },
    { src: '/assets/IMG_1272.jpg', location: 'Castleton', date: 'Apr 2025' },
    { src: '/assets/IMG_1273.jpg', location: 'Mamtoor', date: 'Feb 2025' },
    { src: '/assets/IMG_1276.jpg', location: 'Mt Kinabalu', date: 'Sep 2025' },
    { src: '/assets/IMG_1277.jpg', location: 'Sidmouth', date: 'Nov 2025' },
    { src: '/assets/IMG_1278.jpg', location: 'Kinder Scout', date: 'Feb 2025' },
    { src: '/assets/IMG_1279.jpg', location: 'Mamtoor', date: 'Feb 2025' },
    { src: '/assets/IMG_1280.jpg', location: 'Genova', date: 'Feb 2025' },
    { src: '/assets/IMG_1281%202.jpg', location: 'La Rosierre', date: 'Dec 2024' },
    { src: '/assets/IMG_1283.jpg', location: 'Bristol', date: 'March 2025' },
    { src: '/assets/IMG_1284.jpg', location: 'Sidmouth', date: 'Nov 2025' },
    { src: '/assets/IMG_2947.JPG', location: 'Lake Lecco', date: 'Feb 2025' },
    { src: '/assets/IMG_3158 2.jpg', location: 'Seven Sisters', date: 'Oct 2025' },
    { src: '/assets/IMG_5952.JPG', location: 'Genova', date: 'Feb 2025' },
  ]

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images, ...images]

  const handleImageClick = (image: ImageData) => {
    setIsPaused(true)
    setSelectedImage(image)
    // Hide only the profile image when modal opens, not the container
    const profileImage = document.getElementById('profile-image')
    if (profileImage) {
      profileImage.style.display = 'none'
    }
  }

  const handleClose = () => {
    setSelectedImage(null)
    setIsPaused(false)
    // Show profile image when modal closes
    const profileImage = document.getElementById('profile-image')
    if (profileImage) {
      profileImage.style.display = 'flex'
    }
  }

  return (
    <>
      <div className="relative w-full h-full overflow-hidden rounded-2xl flex items-center">
        {/* Auto-scrolling strip of small square images - centered vertically, no borders */}
        <div 
          className="flex items-center animate-scroll"
          style={isPaused ? { animationPlayState: 'paused' } : { animationPlayState: 'running' }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(image)}
              className="relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 m-1 md:m-1.5 rounded-lg overflow-hidden cursor-pointer hover:scale-110 transition-transform duration-200"
            >
              <Image
                src={image.src}
                alt={`Expedition photo ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 144px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Enlarged Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95"
            onClick={handleClose}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full mx-4 bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-navy rounded-full p-2 shadow-lg transition-all hover:scale-110"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Enlarged Image - Square aspect ratio, fits screen */}
              <div className="relative w-full aspect-square max-h-[60vh]">
                <Image
                  src={selectedImage.src}
                  alt="Enlarged expedition photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>

              {/* Location and Date Info */}
              <div className="p-8 md:p-10 bg-gradient-to-b from-white via-sandstone/10 to-white">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-trail-green/5 border border-trail-green/20">
                    <div className="p-3 bg-trail-green/10 rounded-lg">
                      <MapPin className="w-6 h-6 md:w-7 md:h-7 text-trail-green flex-shrink-0" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs md:text-sm text-muted-grey font-semibold uppercase tracking-wider mb-1">Location</p>
                      <p className="text-xl md:text-2xl font-bold text-navy leading-tight">{selectedImage.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-earth-brown/5 border border-earth-brown/20">
                    <div className="p-3 bg-earth-brown/10 rounded-lg">
                      <Calendar className="w-6 h-6 md:w-7 md:h-7 text-earth-brown flex-shrink-0" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs md:text-sm text-muted-grey font-semibold uppercase tracking-wider mb-1">Date</p>
                      <p className="text-xl md:text-2xl font-bold text-navy leading-tight">{selectedImage.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

