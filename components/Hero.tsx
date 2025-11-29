'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Compass, Mountain, MapPin, GraduationCap, Target, X, TrendingUp, Brain, Sparkles, Users, Briefcase, Smartphone, Thermometer, BarChart3, Plane } from 'lucide-react'
import Image from 'next/image'
import ImageCarousel from './ImageCarousel'

export default function Hero() {
  const [showCurrentProjects, setShowCurrentProjects] = useState(false)
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden topo-pattern">
      {/* Background topographical lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          {[...Array(15)].map((_, i) => (
            <path
              key={i}
              d={`M 0 ${200 + i * 40} Q 300 ${180 + i * 40} 600 ${200 + i * 40} T 1200 ${200 + i * 40}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-topo-line"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center" style={{ isolation: 'isolate' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Compass className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-trail-green" />
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-navy">
            Tengku Faris
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-muted-grey mt-1 sm:mt-2">
              Bin Tengku Zuhri
            </span>
          </h1>

          {/* Circular Profile Image with Carousel Backdrop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 z-20"
            id="profile-image-container"
          >
            {/* Carousel Backdrop - Behind the profile image, centered and bigger, wider */}
            <div className="absolute inset-0 -inset-12 md:-inset-16 lg:-inset-20 -inset-x-24 md:-inset-x-40 lg:-inset-x-56 overflow-hidden z-0">
              <ImageCarousel />
            </div>

            {/* Main Profile Image - On top, centered */}
            <div id="profile-image" className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-trail-green via-earth-brown to-navy p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/assets/main-image.jpg"
                    alt="Tengku Faris"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 192px, 256px"
                  />
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-trail-green/20 animate-pulse z-10" />
            </div>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-6 text-trail-green px-4">
            <Mountain className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
              Engineering • Consulting • Software
            </p>
            <MapPin className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
          </div>

          {/* Compact Stat Cards - Horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-row items-stretch justify-center gap-2 sm:gap-3 md:gap-4 mb-8 max-w-4xl mx-auto overflow-x-auto px-2 sm:px-0"
          >
            {/* Education Card */}
            <div className="flex-shrink-0 w-[140px] sm:w-[160px] md:flex-1 md:w-auto bg-white/80 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-md border border-muted-grey/20 flex flex-col">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-trail-green to-forest-green flex items-center justify-center">
                  <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <h3 className="text-[10px] sm:text-xs font-bold text-muted-grey uppercase tracking-wider">Education</h3>
              </div>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-navy text-center md:text-left flex-1 flex items-center">
                1st Year - First Class
              </p>
            </div>
            
            {/* Location Card */}
            <div className="flex-shrink-0 w-[140px] sm:w-[160px] md:flex-1 md:w-auto bg-white/80 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-md border border-muted-grey/20 flex flex-col">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-earth-brown to-sandstone flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <h3 className="text-[10px] sm:text-xs font-bold text-muted-grey uppercase tracking-wider">Location</h3>
              </div>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-navy text-center md:text-left flex-1 flex items-center">
                London UK Open to work
              </p>
            </div>
            
            {/* Focus Card */}
            <div className="flex-shrink-0 w-[140px] sm:w-[160px] md:flex-1 md:w-auto bg-white/80 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-md border border-muted-grey/20 flex flex-col">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-navy to-trail-green flex items-center justify-center">
                  <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <h3 className="text-[10px] sm:text-xs font-bold text-muted-grey uppercase tracking-wider">Focus</h3>
              </div>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-navy text-center md:text-left flex-1 flex items-center">
                Technology
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-muted-grey/20 text-left">
              <p className="text-base sm:text-lg md:text-xl text-muted-grey mb-3 sm:mb-4 leading-relaxed">
                <span className="font-semibold text-navy">Electronic & Electrical Engineering</span> (Year 2)
                <br />
                <span className="text-sm sm:text-base">University College London (UCL) • Minor: Data Analytics</span>
              </p>

              <p className="text-sm sm:text-base md:text-lg text-muted-grey leading-relaxed mb-3 sm:mb-4">
                A passionate second-year EEE student who <span className="font-semibold text-navy">loves solving complex problems</span> and <span className="font-semibold text-navy">building solutions that make a real difference</span>. Currently collaborating with <span className="font-semibold text-navy">UCL USI</span> and <span className="font-semibold text-navy">Siemens Gamesa</span> to develop concepts and simulations for <span className="font-semibold text-trail-green">damping systems for offshore wind turbines</span>.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-muted-grey leading-relaxed">
                Beyond academics, you'll find me <span className="font-medium text-navy">exploring new places</span>, <span className="font-medium text-navy">staying active at the gym</span>, or <span className="font-medium text-navy">on the court playing tennis and basketball</span>.
              </p>
            </div>
          </motion.div>

          {/* Current Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-4 sm:mt-6"
          >
            <button
              onClick={() => setShowCurrentProjects(true)}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-navy text-white rounded-full text-sm sm:text-base font-semibold hover:bg-navy/90 transition-colors shadow-md hover:shadow-lg"
            >
              <span className="hidden sm:inline">What I'm Currently Working On</span>
              <span className="sm:hidden">Current Projects</span>
              <Target className="w-4 h-4 flex-shrink-0" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-4 sm:mt-6"
          >
            <a
              href="#mountain-map"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-trail-green text-white rounded-full text-sm sm:text-base font-semibold hover:bg-forest-green transition-colors hover-reveal"
            >
              Explore the Peaks
              <Mountain className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            </a>
          </motion.div>

          {/* Elevation indicator - Below button on mobile, absolute on desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 sm:mt-0 sm:absolute sm:bottom-10 sm:left-1/2 sm:transform sm:-translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-muted-grey">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-muted-grey to-transparent" />
              <span className="text-sm font-medium">Scroll to explore</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Current Projects Modal */}
      <AnimatePresence>
        {showCurrentProjects && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setShowCurrentProjects(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-xl sm:rounded-2xl shadow-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto mx-2 sm:mx-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowCurrentProjects(false)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-muted-grey/20 hover:bg-muted-grey/30 transition-colors"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-navy" />
              </button>

              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-navy to-trail-green text-white p-4 sm:p-6 md:p-8 rounded-t-xl sm:rounded-t-2xl">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Current Projects</h2>
                <p className="text-sm sm:text-base text-white/90">Active work and collaborations</p>
              </div>

              {/* Projects List */}
              <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                {/* Siemens Gamesa Project */}
                <div className="bg-gradient-to-br from-trail-green/10 to-forest-green/5 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-trail-green/30">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-trail-green to-forest-green flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-navy mb-1">Siemens Gamesa Wind Turbine Assembly Stability</h3>
                      <p className="text-xs sm:text-sm text-muted-grey mb-2 sm:mb-3">Engineering Member • UCL • 6 Months (2025–26)</p>
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full mb-2 sm:mb-3">
                        <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold">Mentored by Siemens Engineers</span>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base text-muted-grey leading-relaxed">
                        Conducting structural and dynamic analysis of offshore wind turbine towers, simulating tower dynamics in MATLAB to optimize damping, evaluate tip displacement, and assess stress under varying mass conditions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tempo (Edtech Access Venture Programme) */}
                <div className="bg-gradient-to-br from-earth-brown/10 to-sandstone/5 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-earth-brown/30">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-earth-brown to-sandstone flex items-center justify-center">
                      <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-navy mb-1">Tempo — Edtech Access Venture Programme</h3>
                      <p className="text-xs sm:text-sm text-muted-grey mb-2 sm:mb-3">UI/UX Designer & Developer • Venture Programme • 6 Months (2025)</p>
                      <p className="text-xs sm:text-sm md:text-base text-muted-grey leading-relaxed">
                        Designing full UI/UX for web app and teacher dashboard using neuroinclusive principles for ADHD/SEND learners. Using AI to break tasks into steps and integrating Sora for visuals, allowing students to prompt with teacher context for personalized learning support.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Universify */}
                <div className="bg-gradient-to-br from-navy/10 to-trail-green/5 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-navy/30">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-navy to-trail-green flex items-center justify-center">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-navy mb-1">Universify — Bloomsbury Startup Academy</h3>
                      <p className="text-xs sm:text-sm text-muted-grey mb-2 sm:mb-3">Co-Founder & Developer • AI Platform for UCAS Applicants • 2024–25</p>
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full mb-2 sm:mb-3">
                        <span className="text-xs sm:text-sm font-semibold">Developing</span>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base text-muted-grey leading-relaxed">
                        Building an AI-powered UCAS application advisor using RAG (Retrieval-Augmented Generation) trained on successful personal statements. Designed to outperform simple "ChatGPT wrappers" with domain-specific knowledge and context-aware guidance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* MyOtherMentor */}
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-purple-500/30">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-navy mb-1">MyOtherMentor</h3>
                      <p className="text-xs sm:text-sm text-muted-grey mb-2 sm:mb-3">Founder, Product Designer & Backend Developer • Personal Project • 2024–25</p>
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full mb-2 sm:mb-3">
                        <span className="text-xs sm:text-sm font-semibold">Closed Beta Nov 2025</span>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base text-muted-grey leading-relaxed">
                        Built a comprehensive web and mobile mentoring system, leading product design and backend development including authentication, payments, and class data management. Constructed databases for feedback analytics to drive iterative improvements. Ran multiple mentoring classes with consistent 5/5 user feedback.
                      </p>
                    </div>
                  </div>
                </div>

                {/* McKinsey Forward Programme */}
                <div className="bg-gradient-to-br from-blue-600/10 to-cyan-500/5 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-blue-600/30">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-navy mb-1">McKinsey Forward Programme</h3>
                      <p className="text-xs sm:text-sm text-muted-grey mb-2 sm:mb-3">Professional Development Programme</p>
                      <p className="text-xs sm:text-sm md:text-base text-muted-grey leading-relaxed">
                        Participating in McKinsey's Forward Programme, a professional development initiative focused on building essential skills for the future of work, including digital fluency, leadership, and problem-solving capabilities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Data Analytics */}
                <div className="bg-gradient-to-br from-green-600/10 to-emerald-500/5 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-green-600/30">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-navy mb-1">Google Data Analytics</h3>
                      <p className="text-xs sm:text-sm text-muted-grey mb-2 sm:mb-3">Professional Certificate • Online Course</p>
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-green-100 text-green-700 rounded-full mb-2 sm:mb-3">
                        <span className="text-xs sm:text-sm font-semibold">7/8 Modules Finished</span>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base text-muted-grey leading-relaxed">
                        Completing Google's Data Analytics Professional Certificate, covering data cleaning, analysis, visualization, and R programming. Nearly finished with 7 out of 8 modules completed.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Nexus Lab Research - UCL AI Society */}
                <div className="bg-gradient-to-br from-indigo-600/10 to-purple-500/5 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-indigo-600/30">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center">
                      <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-navy mb-1">Nexus Lab Research — UCL AI Society</h3>
                      <p className="text-xs sm:text-sm text-muted-grey mb-2 sm:mb-3">Research Project • Language Guided Multi-Agent Drone Swarm</p>
                      <p className="text-xs sm:text-sm md:text-base text-muted-grey leading-relaxed">
                        Conducting research on language-guided multi-agent drone swarm systems, exploring how natural language commands can coordinate and control multiple autonomous drones working together as a coordinated swarm.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

