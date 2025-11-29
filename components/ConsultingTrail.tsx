'use client'

import { motion } from 'framer-motion'
import { Briefcase, Map, Target, TrendingUp, Users, Presentation, DollarSign } from 'lucide-react'

export default function ConsultingTrail() {
  const projects = [
    {
      id: 'mckinsey',
      title: 'McKinsey & Company — Forward Programme',
      duration: '10 Weeks, 2025',
      location: 'Remote',
      role: 'Programme Participant',
      icon: Briefcase,
      elevation: 'Strategic',
      difficulty: {
        technical: 6,
        collaboration: 9,
        impact: 7,
      },
      description: 'Trained in consulting frameworks including Issue Trees, MECE principles, and hypothesis-driven problem solving. Practiced data-driven decision-making and agile collaboration through real-world case exercises.',
      achievements: [
        'Mastered MECE (Mutually Exclusive, Collectively Exhaustive) framework',
        'Developed hypothesis-driven problem-solving approach',
        'Practiced agile collaboration in team-based case exercises',
        'Applied data-driven decision-making methodologies',
      ],
    },
    {
      id: 'eden',
      title: 'Eden Inc. Bhd — Business Development Intern',
      duration: 'Jul–Sep 2025',
      location: 'Kuala Lumpur, Malaysia',
      role: 'Business Development Intern',
      icon: Target,
      elevation: 'High Impact',
      difficulty: {
        technical: 7,
        collaboration: 8,
        impact: 9,
      },
      description: 'Analysed hydro, diesel, and solar plant performance and cost metrics to guide investment strategy. Created comprehensive analytics including radar charts and priority tables for critical infrastructure components.',
      achievements: [
        'Analysed performance and cost metrics across hydro, diesel, and solar plants',
        'Created radar charts and priority tables for inverters, transformers, and PV modules',
        'Contributed to RM 4 million EPC cost reduction through analytics and reporting',
        'Presented findings to consultants and Board of Directors',
      ],
      impact: 'RM 4M cost reduction',
    },
    {
      id: 'practera',
      title: 'Practera (L&M Foundation) — Communication Lead Consultant',
      duration: '2 Weeks, May–Jun 2025',
      location: 'Remote',
      role: 'Communication Lead Consultant',
      icon: Map,
      elevation: 'Client-Facing',
      difficulty: {
        technical: 5,
        collaboration: 8,
        impact: 6,
      },
      description: 'Served as primary client contact, managing meetings, summaries, and progress updates. Delivered comprehensive report on AI ventures incorporating visualisations including radar charts and flow diagrams.',
      achievements: [
        'Managed all client communications and meeting coordination',
        'Delivered progress summaries and updates',
        'Created comprehensive AI ventures report with visualisations',
        'Incorporated radar charts and flow diagrams for strategic insights',
      ],
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
            className="h-full bg-gradient-to-r from-earth-brown to-sandstone rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }

  return (
    <section id="consulting-trail" className="relative py-24 px-6 bg-gradient-to-b from-sandstone/10 to-white">
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
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-earth-brown to-sandstone flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-1 h-full bg-gradient-to-b from-earth-brown to-transparent ml-8 mt-2" />
                </div>

                <div className="bg-gradient-to-br from-white to-earth-brown/5 rounded-2xl p-8 md:p-12 border-2 border-earth-brown/20 shadow-xl hover-reveal">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-8 h-8 text-earth-brown" />
                        <h3 className="text-2xl md:text-3xl font-bold text-navy">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-muted-grey mb-4">
                        <span className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {project.role}
                        </span>
                        <span>{project.duration}</span>
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-earth-brown/10 rounded-full">
                          <Target className="w-4 h-4 text-earth-brown" />
                          <span className="text-sm font-semibold text-earth-brown">
                            Elevation: {project.elevation}
                          </span>
                        </div>
                        {project.impact && (
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full">
                            <DollarSign className="w-4 h-4" />
                            <span className="text-sm font-semibold">{project.impact}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-muted-grey mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Difficulty Metrics */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8 p-6 bg-white/60 rounded-xl border border-earth-brown/10">
                    <MetricBar label="Technical Complexity" value={project.difficulty.technical} />
                    <MetricBar label="Team Collaboration" value={project.difficulty.collaboration} />
                    <MetricBar label="Impact Elevation" value={project.difficulty.impact} />
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-earth-brown" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-earth-brown mt-2 flex-shrink-0" />
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

        {/* Trail continuation indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-2 text-muted-grey">
            <div className="w-px h-16 bg-gradient-to-b from-earth-brown via-muted-grey to-transparent" />
            <span className="text-sm font-medium">Trail continues below...</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

