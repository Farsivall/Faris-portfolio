'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import MountainMap from '@/components/MountainMap'
import Footer from '@/components/Footer'

export default function Home() {
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
      <Hero />
      <MountainMap />
      <Footer />
    </main>
  )
}

