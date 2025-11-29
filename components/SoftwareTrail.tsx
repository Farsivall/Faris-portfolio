'use client'

import { motion } from 'framer-motion'
import { Code, Sparkles, Smartphone, Brain, Star, Database, Zap } from 'lucide-react'

export default function SoftwareTrail() {
  const projects = [
    {
      id: 'universify',
      title: 'Universify — Bloomsbury Startup Academy',
      subtitle: 'AI Platform for UCAS Applicants',
      duration: '2024–25',
      location: 'Bloomsbury Startup Academy',
      role: 'Co-Founder & Developer',
      icon: Sparkles,
      elevation: 'Innovation Summit',
      status: 'Developing',
      difficulty: {
        technical: 8,
        collaboration: 7,
        impact: 9,
      },
      description: 'Building an AI-powered UCAS application advisor using RAG (Retrieval-Augmented Generation) trained on successful personal statements. Designed to outperform simple "ChatGPT wrappers" with domain-specific knowledge and context-aware guidance.',
      achievements: [
        'Implementing RAG architecture for context-aware AI responses',
        'Training on curated dataset of successful personal statements',
        'Developing features to meet critical January UCAS deadline',
        'Creating differentiated product beyond generic AI chat interfaces',
      ],
      tech: ['RAG', 'AI/ML', 'UCAS Integration'],
    },
    {
      id: 'myothermentor',
      title: 'MyOtherMentor',
      subtitle: 'Personal Project (Closed Beta Nov 2025)',
      duration: '2024–25',
      location: 'Personal Project',
      role: 'Founder, Product Designer & Backend Developer',
      icon: Smartphone,
      elevation: 'Product Launch',
      difficulty: {
        technical: 8,
        collaboration: 9,
        impact: 8,
      },
      description: 'Built a comprehensive web and mobile mentoring system, leading product design and backend development including authentication, payments, and class data management. Constructed databases for feedback analytics to drive iterative improvements.',
      achievements: [
        'Designed and built full-stack mentoring platform (web + mobile)',
        'Implemented authentication, payments, and class data systems',
        'Created feedback analytics database for data-driven improvements',
        'Ran multiple mentoring classes with consistent 5/5 user feedback',
        'Served as main coordinator between 13 mentors and clients',
      ],
      tech: ['Full-Stack', 'Mobile', 'Payments', 'Analytics'],
      highlight: '5/5 user feedback',
    },
    {
      id: 'edtech',
      title: 'Edtech Access Venture Programme',
      subtitle: 'Teacher Dashboard & Neuroinclusive UI',
      duration: '2024–25',
      location: 'Venture Programme',
      role: 'UI/UX Designer & Developer',
      icon: Brain,
      elevation: 'Inclusive Design',
      difficulty: {
        technical: 7,
        collaboration: 8,
        impact: 9,
      },
      description: 'Designed full UI/UX for web app and teacher dashboard using neuroinclusive principles for ADHD/SEND learners. Integrated AI to break tasks into steps using SORA, allowing students to prompt it with teacher context for personalized learning support.',
      achievements: [
        'Designed neuroinclusive UI/UX for ADHD/SEND learners',
        'Built teacher dashboard with React for comprehensive class management',
        'Created website with HTML/CSS following accessibility best practices',
        'Integrated AI (SORA) for task breakdown and student prompting',
        'Built database for student and task management',
      ],
      tech: ['React', 'UI/UX', 'AI Integration', 'Accessibility'],
    },
  ]

  const MetricBar = ({ label, value, max = 10 }: { label: string; value: number; max?: number }) => {
    const percentage = (value / max) * 100
    
    return (
      <div className="mb-3">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-muted-grey">{label}</span>
          <span className="font-semibold text-navy">{value}/{max}</span>
        </div>
        <div className="h-2 bg-muted-grey/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-navy to-trail-green rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }

  return (
    <section id="software-trail" className="relative py-24 px-6 bg-gradient-to-b from-white to-navy/5">
      <div className="max-w-7xl mx-auto">

        {/* Projects */}
        <div className="space-y-20">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Trail marker */}
                <div className="absolute -left-8 top-0 hidden md:block">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-navy to-trail-green flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-1 h-full bg-gradient-to-b from-navy to-transparent ml-8 mt-2" />
                </div>

                <div className="bg-gradient-to-br from-white to-navy/5 rounded-2xl p-8 md:p-12 border-2 border-navy/20 shadow-xl hover-reveal">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-8 h-8 text-navy" />
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-navy">
                            {project.title}
                          </h3>
                          {project.subtitle && (
                            <p className="text-lg text-muted-grey mt-1">{project.subtitle}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-muted-grey mb-4">
                        <span className="flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          {project.role}
                        </span>
                        <span>{project.duration}</span>
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy/10 rounded-full">
                          <Database className="w-4 h-4 text-navy" />
                          <span className="text-sm font-semibold text-navy">
                            Elevation: {project.elevation}
                          </span>
                        </div>
                        {project.status && (
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full">
                            <span className="text-sm font-semibold">{project.status}</span>
                          </div>
                        )}
                        {project.highlight && (
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full">
                            <Star className="w-4 h-4" />
                            <span className="text-sm font-semibold">{project.highlight}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-muted-grey mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  {project.tech && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Difficulty Metrics */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8 p-6 bg-white/60 rounded-xl border border-navy/10">
                    <MetricBar label="Technical Complexity" value={project.difficulty.technical} />
                    <MetricBar label="Team Collaboration" value={project.difficulty.collaboration} />
                    <MetricBar label="Impact Elevation" value={project.difficulty.impact} />
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-navy" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                          <span className="text-muted-grey leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Trail end marker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 relative"
        >
          <div className="inline-flex flex-col items-center gap-2 text-muted-grey relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-trail-green via-earth-brown to-navy opacity-20 blur-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="relative w-8 h-8 rounded-full bg-navy border-4 border-white shadow-lg z-10" />
            <span className="text-sm font-medium mt-4">Journey continues...</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

