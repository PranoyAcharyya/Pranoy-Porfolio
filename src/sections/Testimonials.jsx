import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { staggerContainer, fadeInUp } from '../animations/variants'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CTO, TechFlow Inc.',
    avatar: '👩‍💼',
    rating: 5,
    text: 'Alex delivered beyond our expectations. The frontend architecture he built is clean, scalable, and blazing fast. The attention to animation detail and performance optimization is outstanding.',
    color: '#fc032c'
  },
  {
    name: 'James Rodriguez',
    role: 'Founder, Creative Labs',
    avatar: '👨‍💻',
    rating: 5,
    text: 'Working with Alex was a game-changer for our agency. His deep knowledge of GSAP and Framer Motion turned our design concepts into award-worthy experiences. Highly recommend!',
    color: '#1703fc'
  },
  {
    name: 'Emily Chen',
    role: 'Product Manager, StartupXYZ',
    avatar: '👩‍🔬',
    rating: 5,
    text: 'Alex built our MVP in record time without compromising quality. His ability to translate complex requirements into elegant UIs is remarkable. Our users love the experience.',
    color: '#22c55e'
  },
  {
    name: 'Marcus Johnson',
    role: 'Lead Designer, DesignHouse',
    avatar: '🧑‍🎨',
    rating: 5,
    text: 'Alex is the rare developer who truly understands design. He brings Figma files to life with pixel-perfect precision and adds thoughtful micro-interactions that elevate the whole experience.',
    color: '#8b5cf6'
  },
]

export default function Testimonials() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent(i => (i + 1) % testimonials.length)
  const prev = () => setCurrent(i => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section
      ref={ref}
      className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? 'bg-[#080808]' : 'bg-gray-50/80'}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: isDark ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="text-xs font-body tracking-[0.3em] uppercase" style={{ color: '#fc032c' }}>
            Testimonials
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className={`font-display font-bold text-4xl lg:text-5xl mt-4 ${isDark ? 'text-white' : 'text-black'}`}
          >
            What{' '}
            <span style={{ background: 'linear-gradient(135deg, #1703fc, #fc032c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Clients Say
            </span>
          </motion.h2>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="relative mb-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className={`p-8 lg:p-12 rounded-3xl ${isDark ? 'glass-dark' : 'glass-light'} relative overflow-hidden`}
              style={{
                border: `1px solid ${testimonials[current].color}25`,
                boxShadow: isDark 
                  ? `0 40px 100px rgba(0,0,0,0.4), 0 0 40px ${testimonials[current].color}08` 
                  : `0 40px 100px rgba(0,0,0,0.08)`
              }}
            >
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full"
                style={{ background: `radial-gradient(circle, ${testimonials[current].color}08 0%, transparent 70%)`, filter: 'blur(40px)' }}
              />

              {/* Quote icon */}
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `${testimonials[current].color}15`, border: `1px solid ${testimonials[current].color}30` }}
              >
                <Quote size={20} style={{ color: testimonials[current].color }} />
              </div>

              {/* Text */}
              <p className={`text-xl font-body leading-relaxed mb-8 ${isDark ? 'text-white/80' : 'text-black/80'}`}>
                "{testimonials[current].text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                    style={{ background: `${testimonials[current].color}15`, border: `1px solid ${testimonials[current].color}30` }}
                  >
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div className={`font-display font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                      {testimonials[current].name}
                    </div>
                    <div className={`text-sm font-body ${isDark ? 'text-white/45' : 'text-black/45'}`}>
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-300 rounded-full h-1.5"
                  style={{
                    width: i === current ? '24px' : '8px',
                    background: i === current ? '#fc032c' : isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                    boxShadow: i === current ? '0 0 8px rgba(252,3,44,0.5)' : 'none'
                  }}
                />
              ))}
            </div>
            <div className="flex gap-2">
              {[{ Icon: ChevronLeft, fn: prev }, { Icon: ChevronRight, fn: next }].map(({ Icon, fn }, i) => (
                <motion.button
                  key={i}
                  onClick={fn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
                    isDark ? 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white' : 'bg-black/5 text-black/60 hover:bg-black/10 hover:text-black'
                  }`}
                >
                  <Icon size={16} />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* All testimonials mini grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              onClick={() => setCurrent(i)}
              className={`p-4 rounded-xl text-left transition-all duration-200 ${
                current === i 
                  ? isDark ? 'bg-white/6 border border-white/15' : 'bg-black/6 border border-black/15'
                  : isDark ? 'bg-white/2 border border-white/5 hover:bg-white/4' : 'bg-black/2 border border-black/5 hover:bg-black/4'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{t.avatar}</span>
                <div>
                  <div className={`text-xs font-body font-medium ${isDark ? 'text-white/80' : 'text-black/80'}`}>{t.name}</div>
                  <div className={`text-xs font-body ${isDark ? 'text-white/35' : 'text-black/35'}`}>{t.role.split(',')[0]}</div>
                </div>
              </div>
              {current === i && (
                <div className="w-1 h-4 rounded-full mt-2" style={{ background: t.color }} />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
