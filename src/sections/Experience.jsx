import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { staggerContainer, fadeInUp, fadeInLeft } from '../animations/variants'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const experiences = [
  {
    title: 'Web Developer',
    company: 'Webskitters Technology Solution Pvt.Ltd',
    location: 'Salt Lake, Kolkata , WB , India',
    period: '2022 – Present',
    type: 'Full-time',
    color: '#fc032c',
    description: 'Delivered end-to-end WordPress website development aligned with project requirements',
    achievements: [
      'Designed and implemented responsive UI layouts using Elementor with strong usability focus',
      'Converted design mockups into optimized, functional pages with minimal plugin reliance',
      'Built and customized WooCommerce solutions, including product pages and checkout systems',
      'Ensured platform stability through regular maintenance, updates, and issue resolution',
    ],
    stack: ['Wordpress', 'Elementor', 'JS', 'PHP']
  }
]

export default function Experience() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="experience"
      ref={ref}
      className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? 'bg-[#050505]' : 'bg-white'}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: isDark ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.span variants={fadeInUp} className="text-xs font-body tracking-[0.3em] uppercase" style={{ color: '#fc032c' }}>
            Experience
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className={`font-display font-bold text-4xl lg:text-5xl mt-4 ${isDark ? 'text-white' : 'text-black'}`}
          >
            Work{' '}
            <span style={{ background: 'linear-gradient(135deg, #1703fc, #fc032c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              History
            </span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-6 lg:left-8 top-0 bottom-0 w-px ${isDark ? 'bg-white/8' : 'bg-black/8'}`} />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative pl-16 lg:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 lg:left-6 top-6 w-4 h-4 rounded-full -translate-x-1/2 border-2"
                  style={{
                    background: exp.color,
                    borderColor: isDark ? '#050505' : '#fff',
                    boxShadow: `0 0 15px ${exp.color}60`
                  }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className={`p-6 lg:p-8 rounded-2xl group ${isDark ? 'glass-dark hover:bg-white/4' : 'glass-light hover:bg-black/3'} transition-all duration-300`}
                  style={{
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                    boxShadow: isDark ? '0 20px 60px rgba(0,0,0,0.2)' : '0 20px 60px rgba(0,0,0,0.05)'
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className={`font-display font-bold text-xl ${isDark ? 'text-white' : 'text-black'}`}>
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1 flex-wrap">
                        <span className="font-body font-medium text-sm" style={{ color: exp.color }}>
                          {exp.company}
                        </span>
                        <div className={`flex items-center gap-1 text-xs font-body ${isDark ? 'text-white/35' : 'text-black/35'}`}>
                          <MapPin size={11} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1.5 text-xs font-body"
                        style={{ 
                          background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                          border: `1px solid ${exp.color}30`,
                          color: exp.color,
                          padding: '4px 12px',
                          borderRadius: '999px'
                        }}
                      >
                        <Calendar size={11} />
                        {exp.period}
                      </div>
                      <span className={`text-xs font-body px-3 py-1 rounded-full ${isDark ? 'bg-white/5 text-white/40' : 'bg-black/5 text-black/40'}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-sm font-body leading-relaxed mb-4 ${isDark ? 'text-white/50' : 'text-black/50'}`}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-5">
                    {exp.achievements.map((a, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm font-body">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                        <span className={isDark ? 'text-white/60' : 'text-black/60'}>{a}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map(tech => (
                      <span
                        key={tech}
                        className={`text-xs font-body px-2.5 py-1 rounded-lg ${isDark ? 'bg-white/5 text-white/60' : 'bg-black/5 text-black/60'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
