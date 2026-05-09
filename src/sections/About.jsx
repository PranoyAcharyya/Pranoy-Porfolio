import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '../animations/variants'
import { Coffee, Zap, Heart, Code } from 'lucide-react'

const highlights = [
  { icon: Coffee, label: '5+ Years', desc: 'of experience' },
  { icon: Zap, label: '50+', desc: 'projects delivered' },
  { icon: Heart, label: '100%', desc: 'passion driven' },
  { icon: Code, label: '10K+', desc: 'commits written' },
]

export default function About() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      id="about" 
      ref={ref}
      className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? 'bg-[#050505]' : 'bg-white'}`}
    >
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: isDark ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Visual */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative">
              {/* Main card */}
              <div 
                className={`relative p-8 rounded-3xl overflow-hidden ${isDark ? 'glass-dark' : 'glass-light'}`}
                style={{
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                  boxShadow: isDark ? '0 40px 100px rgba(0,0,0,0.4)' : '0 40px 100px rgba(0,0,0,0.1)'
                }}
              >
                {/* Inner gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(252,3,44,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
                />

                {/* Code snippet visual */}
                <div className={`rounded-2xl p-5 mb-6 font-mono text-sm ${isDark ? 'bg-black/50' : 'bg-black/5'}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    <span className={`ml-2 text-xs ${isDark ? 'text-white/20' : 'text-black/30'}`}>developer.js</span>
                  </div>
                  <div className="space-y-1.5">
                    <div>
                      <span style={{ color: '#1703fc' }}>const</span>
                      <span className={isDark ? ' text-white' : ' text-black'}> developer = {'{'}</span>
                    </div>
                    <div className="pl-4">
                      <span style={{ color: '#fc032c' }}>name</span>
                      <span className={isDark ? ' text-white/50' : ' text-black/50'}>: </span>
                      <span style={{ color: '#22c55e' }}>"Alex Chen"</span>
                      <span className={isDark ? ' text-white/50' : ' text-black/50'}>,</span>
                    </div>
                    <div className="pl-4">
                      <span style={{ color: '#fc032c' }}>role</span>
                      <span className={isDark ? ' text-white/50' : ' text-black/50'}>: </span>
                      <span style={{ color: '#22c55e' }}>"Frontend Engineer"</span>
                      <span className={isDark ? ' text-white/50' : ' text-black/50'}>,</span>
                    </div>
                    <div className="pl-4">
                      <span style={{ color: '#fc032c' }}>passion</span>
                      <span className={isDark ? ' text-white/50' : ' text-black/50'}>: </span>
                      <span style={{ color: '#22c55e' }}>"Building the web"</span>
                      <span className={isDark ? ' text-white/50' : ' text-black/50'}>,</span>
                    </div>
                    <div className="pl-4">
                      <span style={{ color: '#fc032c' }}>available</span>
                      <span className={isDark ? ' text-white/50' : ' text-black/50'}>: </span>
                      <span style={{ color: '#f97316' }}>true</span>
                    </div>
                    <div className={isDark ? 'text-white' : 'text-black'}>{'}'}</div>
                  </div>
                </div>

                {/* Stat grid */}
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map(({ icon: Icon, label, desc }) => (
                    <div 
                      key={label}
                      className={`p-4 rounded-xl ${isDark ? 'bg-white/3 hover:bg-white/6' : 'bg-black/3 hover:bg-black/6'} transition-all duration-200 group`}
                    >
                      <Icon size={18} style={{ color: '#fc032c' }} className="mb-2" />
                      <div className={`font-display font-bold text-xl ${isDark ? 'text-white' : 'text-black'}`}>{label}</div>
                      <div className={`text-xs font-body mt-0.5 ${isDark ? 'text-white/40' : 'text-black/40'}`}>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute -top-4 -right-4 px-4 py-3 rounded-2xl ${isDark ? 'glass-dark' : 'glass-light'}`}
                style={{
                  border: '1px solid rgba(252,3,44,0.3)',
                  boxShadow: '0 0 20px rgba(252,3,44,0.15)'
                }}
              >
                <div className="text-2xl mb-0.5">🚀</div>
                <div className={`text-xs font-body font-medium ${isDark ? 'text-white' : 'text-black'}`}>Always shipping</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeInRight}>
              <span className="text-xs font-body tracking-[0.3em] uppercase" style={{ color: '#fc032c' }}>
                About Me
              </span>
              <h2 className={`font-display font-bold text-4xl lg:text-5xl mt-3 leading-tight ${isDark ? 'text-white' : 'text-black'}`}>
                Crafting Digital
                <br />
                <span style={{ background: 'linear-gradient(135deg, #1703fc, #fc032c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Experiences
                </span>
                <br />
                With Purpose
              </h2>
            </motion.div>

            <motion.p
              variants={fadeInRight}
              className={`text-base font-body leading-relaxed ${isDark ? 'text-white/55' : 'text-black/55'}`}
            >
              I'm a passionate frontend developer with 5+ years of experience building modern, performant web applications. I specialize in React ecosystem, animations, and turning complex designs into fluid user experiences.
            </motion.p>

            <motion.p
              variants={fadeInRight}
              className={`text-base font-body leading-relaxed ${isDark ? 'text-white/55' : 'text-black/55'}`}
            >
              When I'm not pushing pixels, I'm exploring the latest in web technologies, contributing to open source, and mentoring upcoming developers. I believe great software is a blend of technical excellence and thoughtful design.
            </motion.p>

            <motion.div
              variants={fadeInRight}
              className="flex flex-wrap gap-3 pt-2"
            >
              {['Problem Solver', 'Team Player', 'Clean Code Advocate', 'Continuous Learner'].map(tag => (
                <span 
                  key={tag}
                  className={`px-4 py-2 rounded-full text-sm font-body ${
                    isDark ? 'bg-white/5 text-white/70 border border-white/10' : 'bg-black/5 text-black/70 border border-black/10'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
