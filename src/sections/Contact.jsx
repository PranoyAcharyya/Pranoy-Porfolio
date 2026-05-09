import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { staggerContainer, fadeInUp } from '../animations/variants'
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Clock, ArrowRight } from 'lucide-react'

const socials = [
  { icon: Github, label: 'GitHub', handle: '@alexchen', color: isDark => isDark ? '#ffffff' : '#000000', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', handle: '/in/alexchen', color: () => '#0a66c2', href: '#' },
  { icon: Twitter, label: 'Twitter', handle: '@alexdev', color: () => '#1d9bf0', href: '#' },
  { icon: Mail, label: 'Email', handle: 'hello@alexchen.dev', color: () => '#fc032c', href: 'mailto:hello@alexchen.dev' },
]

function InputField({ label, type = 'text', placeholder, isDark, multiline = false }) {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')

  const commonProps = {
    value,
    onChange: e => setValue(e.target.value),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    placeholder,
    className: `w-full bg-transparent outline-none text-sm font-body placeholder:text-opacity-30 resize-none ${
      isDark ? 'text-white placeholder:text-white/30' : 'text-black placeholder:text-black/30'
    }`,
  }

  return (
    <div>
      <label className={`block text-xs font-body font-medium mb-2 ${isDark ? 'text-white/50' : 'text-black/50'}`}>
        {label}
      </label>
      <motion.div
        animate={{
          borderColor: focused ? 'rgba(252,3,44,0.5)' : isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)',
          boxShadow: focused ? '0 0 0 3px rgba(252,3,44,0.06)' : '0 0 0 0 transparent'
        }}
        className={`px-4 py-3 rounded-xl border transition-colors ${
          isDark ? 'bg-white/3' : 'bg-black/3'
        }`}
      >
        {multiline ? (
          <textarea rows={4} {...commonProps} />
        ) : (
          <input type={type} {...commonProps} />
        )}
      </motion.div>
    </div>
  )
}

export default function Contact() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? 'bg-[#050505]' : 'bg-white'}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: isDark ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)' }}
      />

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(23,3,252,0.05) 0%, transparent 70%)', filter: 'blur(100px)' }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(252,3,44,0.05) 0%, transparent 70%)', filter: 'blur(100px)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="text-xs font-body tracking-[0.3em] uppercase" style={{ color: '#fc032c' }}>
            Get in Touch
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className={`font-display font-bold text-4xl lg:text-5xl mt-4 ${isDark ? 'text-white' : 'text-black'}`}
          >
            Let's Build{' '}
            <span style={{ background: 'linear-gradient(135deg, #1703fc, #fc032c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Together
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className={`mt-4 text-base font-body max-w-xl mx-auto ${isDark ? 'text-white/45' : 'text-black/45'}`}
          >
            Have a project in mind? Let's talk about how we can create something exceptional together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Quick info */}
            <div 
              className={`p-6 rounded-2xl ${isDark ? 'glass-dark' : 'glass-light'}`}
              style={{ border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(252,3,44,0.1)', border: '1px solid rgba(252,3,44,0.2)' }}
                  >
                    <MapPin size={14} style={{ color: '#fc032c' }} />
                  </div>
                  <div>
                    <div className={`text-xs font-body ${isDark ? 'text-white/35' : 'text-black/35'}`}>Location</div>
                    <div className={`text-sm font-body font-medium ${isDark ? 'text-white/80' : 'text-black/80'}`}>San Francisco, CA</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(23,3,252,0.1)', border: '1px solid rgba(23,3,252,0.2)' }}
                  >
                    <Clock size={14} style={{ color: '#1703fc' }} />
                  </div>
                  <div>
                    <div className={`text-xs font-body ${isDark ? 'text-white/35' : 'text-black/35'}`}>Response Time</div>
                    <div className={`text-sm font-body font-medium ${isDark ? 'text-white/80' : 'text-black/80'}`}>Within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}
                  >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <div>
                    <div className={`text-xs font-body ${isDark ? 'text-white/35' : 'text-black/35'}`}>Status</div>
                    <div className="text-sm font-body font-medium text-green-400">Available for hire</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, handle, color, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-3 p-4 rounded-xl group transition-all duration-200 ${
                    isDark ? 'bg-white/3 hover:bg-white/6 border border-white/6 hover:border-white/12' : 'bg-black/3 hover:bg-black/6 border border-black/6 hover:border-black/12'
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color(isDark)}12`, border: `1px solid ${color(isDark)}25` }}
                  >
                    <Icon size={16} style={{ color: color(isDark) }} />
                  </div>
                  <div className="flex-1">
                    <div className={`text-xs font-body ${isDark ? 'text-white/40' : 'text-black/40'}`}>{label}</div>
                    <div className={`text-sm font-body font-medium ${isDark ? 'text-white/80' : 'text-black/80'}`}>{handle}</div>
                  </div>
                  <ArrowRight size={14} className={`${isDark ? 'text-white/20 group-hover:text-white/50' : 'text-black/20 group-hover:text-black/50'} transition-colors`} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div
              className={`p-8 rounded-2xl ${isDark ? 'glass-dark' : 'glass-light'}`}
              style={{
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                boxShadow: isDark ? '0 40px 100px rgba(0,0,0,0.3)' : '0 40px 100px rgba(0,0,0,0.08)'
              }}
            >
              <h3 className={`font-display font-bold text-xl mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <InputField label="Your Name" placeholder="John Doe" isDark={isDark} />
                  <InputField label="Email Address" type="email" placeholder="john@example.com" isDark={isDark} />
                </div>
                <InputField label="Subject" placeholder="Project inquiry..." isDark={isDark} />
                <InputField label="Message" placeholder="Tell me about your project..." isDark={isDark} multiline />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(252,3,44,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-body font-medium transition-all duration-200"
                  style={{
                    background: submitted ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'linear-gradient(135deg, #1703fc, #fc032c)',
                    boxShadow: submitted ? '0 0 20px rgba(34,197,94,0.3)' : '0 0 20px rgba(252,3,44,0.2)'
                  }}
                >
                  {submitted ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
