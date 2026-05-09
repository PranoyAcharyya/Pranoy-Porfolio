import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const { isDark } = useTheme()

  return (
    <footer className={`relative py-12 overflow-hidden ${isDark ? 'bg-[#050505]' : 'bg-white'}`}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: isDark ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div 
              className="w-8 h-8 rounded-xl flex items-center justify-center font-display font-bold text-white text-sm"
              style={{ background: 'linear-gradient(135deg, #1703fc, #fc032c)' }}
            >
              A
            </div>
            <span className={`font-display font-semibold text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
              Pranoy Acharyya — Web Developer
            </span>
          </div>

          {/* Center - copyright */}
          <div className={`flex items-center gap-1.5 text-xs font-body ${isDark ? 'text-white/30' : 'text-black/30'}`}>
            <span>Built with</span>
            <Heart size={11} className="text-[#fc032c]" fill="#fc032c" />
            <span>using React, Vite & Tailwind</span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/PranoyAcharyya' },
              { icon: Linkedin, href: 'www.linkedin.com/in/pranoy-acharyya-4244b81b8' },
              { icon: Mail, href: 'mailto:acharyapranoy@gmail.com' },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                  isDark ? 'text-white/35 hover:text-white bg-white/4 hover:bg-white/8' : 'text-black/35 hover:text-black bg-black/4 hover:bg-black/8'
                }`}
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className={`mt-8 pt-6 text-center text-xs font-body ${isDark ? 'text-white/20 border-t border-white/5' : 'text-black/20 border-t border-black/5'}`}>
          © 2025 Alex Chen. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
