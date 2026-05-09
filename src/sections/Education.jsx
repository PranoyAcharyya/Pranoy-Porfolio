import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { staggerContainer, fadeInUp } from '../animations/variants'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

const education = [
  {
    degree: 'B.S. Computer Science',
    school: 'UC Berkeley',
    period: '2015 – 2019',
    gpa: '3.8/4.0',
    icon: GraduationCap,
    color: '#1703fc',
    description: 'Specialized in Human-Computer Interaction and Software Engineering. Graduated with honors.',
    highlights: ['Dean\'s List – 6 semesters', 'Senior Thesis: AR Interfaces', 'ACM Club President'],
  },
  {
    degree: 'Google UX Design Certificate',
    school: 'Google / Coursera',
    period: '2021',
    gpa: null,
    icon: Award,
    color: '#fc032c',
    description: 'Completed intensive professional certificate covering user research, wireframing, prototyping, and usability testing.',
    highlights: ['Figma Proficiency', 'User Research Methods', 'Interaction Design'],
  },
  {
    degree: 'Advanced React Development',
    school: 'Frontend Masters',
    period: '2020',
    gpa: null,
    icon: BookOpen,
    color: '#8b5cf6',
    description: 'Deep dive into React internals, performance optimization, testing strategies, and advanced patterns.',
    highlights: ['React Internals', 'Performance Patterns', 'Testing with RTL'],
  },
]

export default function Education() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="education"
      ref={ref}
      className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? 'bg-[#080808]' : 'bg-gray-50/80'}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: isDark ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.span variants={fadeInUp} className="text-xs font-body tracking-[0.3em] uppercase" style={{ color: '#fc032c' }}>
            Education
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className={`font-display font-bold text-4xl lg:text-5xl mt-4 ${isDark ? 'text-white' : 'text-black'}`}
          >
            Academic{' '}
            <span style={{ background: 'linear-gradient(135deg, #1703fc, #fc032c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Background
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className={`p-6 rounded-2xl group cursor-default transition-all duration-300 ${isDark ? 'glass-dark' : 'glass-light'}`}
                style={{
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                  boxShadow: isDark ? '0 20px 60px rgba(0,0,0,0.2)' : '0 20px 60px rgba(0,0,0,0.06)'
                }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ 
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`
                  }}
                >
                  <Icon size={20} style={{ color: item.color }} />
                </div>

                {/* Header */}
                <h3 className={`font-display font-bold text-lg leading-tight mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
                  {item.degree}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-body font-medium" style={{ color: item.color }}>
                    {item.school}
                  </span>
                  <span className={`text-xs font-body ${isDark ? 'text-white/35' : 'text-black/35'}`}>
                    {item.period}
                  </span>
                </div>

                {item.gpa && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg mb-3 text-xs font-body font-medium"
                    style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}
                  >
                    GPA: {item.gpa}
                  </div>
                )}

                <p className={`text-sm font-body leading-relaxed mb-4 ${isDark ? 'text-white/50' : 'text-black/50'}`}>
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5">
                  {item.highlights.map(h => (
                    <div key={h} className="flex items-center gap-2 text-xs font-body">
                      <span className="w-1 h-1 rounded-full" style={{ background: item.color }} />
                      <span className={isDark ? 'text-white/55' : 'text-black/55'}>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
