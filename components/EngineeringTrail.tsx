'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Zap, Gauge, Award, Users, BarChart3 } from 'lucide-react'

export default function EngineeringTrail() {
  const projects = [
    {
      id: 'siemens',
      title: 'Siemens Gamesa Wind Turbine Assembly Stability',
      duration: '6 Months (2025–26)',
      location: 'UCL',
      role: 'Engineering Member',
      icon: TrendingUp,
      elevation: 'High',
      difficulty: {
        technical: 9,
        collaboration: 7,
        impact: 8,
      },
      description: 'Conducted structural and dynamic analysis of offshore wind turbine towers, simulating tower dynamics in MATLAB to optimize damping, evaluate tip displacement, and assess stress under varying mass conditions.',
      achievements: [
        'Determined natural frequencies, damping coefficients, and safe operating forces',
        'Compared damper types (friction, metallic yielding) with feasibility analysis',
        'Evaluated adaptability under ±30% mass variations and environmental constraints',
        'Shortlisted optimal damper solutions for offshore applications',
      ],
    },
    {
      id: 'pcb',
      title: 'PCB Power Supply',
      duration: '2025–26',
      location: 'UCL',
      role: 'Team Lead',
      icon: Zap,
      elevation: 'High',
      difficulty: {
        technical: 8,
        collaboration: 7,
        impact: 7,
      },
      description: 'Led design and simulation of cascading power-supply PCBs for multiple voltage ranges, integrating fault-diagnosis features and using data-driven decision making for optimal design selection.',
      achievements: [
        'Led design and simulation of cascading power-supply PCBs for multiple voltage ranges (<5V, 5–12V, >12V)',
        'Integrated fault-diagnosis features for easier repair and higher yield',
        'Used decision matrix to select final design for fabrication',
        'Visualized efficiency and loss metrics through comprehensive graphs',
      ],
    },
    {
      id: 'bioreactor',
      title: 'Bioreactor Project — Stirring Subsystem Circuit',
      duration: 'Oct–Nov 2024',
      location: 'UCL Coursework',
      grade: '81.2%',
      role: 'Team Lead',
      icon: Zap,
      elevation: 'Medium-High',
      difficulty: {
        technical: 7,
        collaboration: 8,
        impact: 6,
      },
      description: 'Designed PI-calibrated stirring-subsystem circuit for precise RPM control, collaborating with 3 CS + 2 EEE teammates to integrate ESP-32 control.',
      achievements: [
        'Displayed live parameters on Thingsboard dashboard',
        'Ensured reliable hardware-software interfacing',
        'Led cross-disciplinary team integration',
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
            className="h-full bg-gradient-to-r from-trail-green to-forest-green rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }

  return (
    <section id="engineering-trail" className="relative py-24 px-6 bg-white">
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
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-trail-green to-forest-green flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-1 h-full bg-gradient-to-b from-trail-green to-transparent ml-8 mt-2" />
                </div>

                <div className="bg-gradient-to-br from-white to-sandstone/10 rounded-2xl p-8 md:p-12 border-2 border-trail-green/20 shadow-xl hover-reveal">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-8 h-8 text-trail-green" />
                        <h3 className="text-2xl md:text-3xl font-bold text-navy">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-muted-grey mb-4">
                        <span className="flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          {project.role}
                        </span>
                        <span>{project.duration}</span>
                        <span>{project.location}</span>
                        {project.grade && (
                          <span className="px-3 py-1 bg-trail-green/10 text-trail-green rounded-full font-semibold">
                            Grade: {project.grade}
                          </span>
                        )}
                      </div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-trail-green/10 rounded-full mb-4">
                        <Gauge className="w-4 h-4 text-trail-green" />
                        <span className="text-sm font-semibold text-trail-green">
                          Elevation: {project.elevation}
                        </span>
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
                      <BarChart3 className="w-5 h-5 text-trail-green" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-trail-green mt-2 flex-shrink-0" />
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
            <div className="w-px h-16 bg-gradient-to-b from-trail-green via-muted-grey to-transparent" />
            <span className="text-sm font-medium">Trail continues below...</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

