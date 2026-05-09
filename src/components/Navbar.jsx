import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { navbarVariant } from '../animations/variants'
import { 
  Home, Code2, Briefcase, GraduationCap, FolderOpen, Mail,
  Sun, Moon, Github, Linkedin, Twitter, Menu, X
} from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => item.id)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActive(id)
      setMobileOpen(false)
    }
  }

  return (
    <>
      <motion.header
        variants={navbarVariant}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-6 lg:px-10 py-4"
      >
        {/* Logo */}
        <motion.button
          onClick={() => scrollTo('home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 z-10"
        >
          <div 
            className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-white text-lg"
            style={{ 
              background: 'linear-gradient(135deg, #1703fc, #fc032c)',
              boxShadow: isDark ? '0 0 20px rgba(252,3,44,0.3)' : 'none'
            }}
          >
            P
          </div>
          <span className={`font-display font-semibold text-sm hidden sm:block ${isDark ? 'text-white' : 'text-black'}`}>
            Pranoy.dev
          </span>
        </motion.button>

        {/* Center floating nav */}
        <motion.nav
          className={`hidden lg:flex items-center gap-1 px-2 py-2 rounded-2xl relative ${
            isDark ? 'glass-dark' : 'glass-light'
          }`}
          style={{
            border: `1px solid ${isDark ? 'rgba(252,3,44,0.15)' : 'rgba(0,0,0,0.1)'}`,
            boxShadow: isDark 
              ? '0 0 30px rgba(252,3,44,0.05), 0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)' 
              : '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
          }}
        >
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = active === item.id
            const isHovered = hoveredItem === item.id
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                whileTap={{ scale: 0.95 }}
                className="relative px-3 py-2 rounded-xl flex items-center gap-2 text-sm font-body font-medium transition-colors duration-200 z-10"
                style={{
                  color: isActive ? '#fc032c' : isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: isDark ? 'rgba(252,3,44,0.1)' : 'rgba(252,3,44,0.08)',
                      border: '1px solid rgba(252,3,44,0.2)',
                      boxShadow: '0 0 15px rgba(252,3,44,0.1)'
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {(isHovered && !isActive) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                    }}
                  />
                )}
                <Icon size={14} className="relative z-10" />
                <span className="relative z-10">{item.label}</span>
              </motion.button>
            )
          })}
        </motion.nav>

        {/* Right side */}
        <div className="flex items-center gap-3 z-10">
          {/* Socials */}
          <div className="hidden sm:flex items-center gap-2">
            {[
              { icon: Github, href: 'https://github.com/PranoyAcharyya', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/pranoy-acharyya-4244b81b8/', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  isDark 
                    ? 'text-white/50 hover:text-white bg-white/5 hover:bg-white/10' 
                    : 'text-black/50 hover:text-black bg-black/5 hover:bg-black/10'
                }`}
                aria-label={label}
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>

          {/* Theme toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
              isDark 
                ? 'bg-white/5 text-yellow-400 hover:bg-white/10' 
                : 'bg-black/5 text-slate-600 hover:bg-black/10'
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isDark ? 'moon' : 'sun'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? <Sun size={15} /> : <Moon size={15} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Mobile menu toggle */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.95 }}
            className={`lg:hidden w-9 h-9 rounded-xl flex items-center justify-center ${
              isDark ? 'bg-white/5 text-white' : 'bg-black/5 text-black'
            }`}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-[72px] left-4 right-4 z-[999] rounded-2xl p-4 ${
              isDark ? 'glass-dark' : 'glass-light'
            }`}
            style={{
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
              boxShadow: isDark ? '0 20px 60px rgba(0,0,0,0.5)' : '0 20px 60px rgba(0,0,0,0.1)'
            }}
          >
            {navItems.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-body font-medium transition-all duration-200 ${
                    active === item.id 
                      ? 'text-[#fc032c] bg-[rgba(252,3,44,0.1)]' 
                      : isDark ? 'text-white/70 hover:text-white hover:bg-white/5' : 'text-black/70 hover:text-black hover:bg-black/5'
                  }`}
                >
                  <Icon size={16} />
                  {item.label}
                </motion.button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
