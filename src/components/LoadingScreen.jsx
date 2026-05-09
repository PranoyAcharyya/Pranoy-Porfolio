import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setVisible(false)
            setTimeout(onComplete, 600)
          }, 300)
          return 100
        }
        return prev + Math.random() * 12 + 3
      })
    }, 80)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505]"
        >
          {/* Background grid */}
          <div className="absolute inset-0 bg-grid-dark opacity-50" />
          
          {/* Glowing orbs */}
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#1703fc] rounded-full filter blur-[150px] opacity-10 animate-blob" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#fc032c] rounded-full filter blur-[150px] opacity-10 animate-blob" style={{ animationDelay: '3s' }} />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="w-20 h-20 rounded-2xl flex items-center justify-center relative"
              style={{ 
                background: 'linear-gradient(135deg, #1703fc, #fc032c)',
                boxShadow: '0 0 40px rgba(252,3,44,0.4), 0 0 80px rgba(23,3,252,0.2)'
              }}
            >
              <span className="text-white font-display font-bold text-3xl">P</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <p className="text-white/40 text-sm font-body tracking-[0.3em] uppercase mb-1">Portfolio</p>
              <h1 className="text-white font-display font-bold text-2xl tracking-tight">Pranoy Acharyya</h1>
            </motion.div>

            {/* Progress bar */}
            <div className="w-64 flex flex-col items-center gap-3">
              <div className="w-full h-[1px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ 
                    background: 'linear-gradient(90deg, #1703fc, #fc032c)',
                    boxShadow: '0 0 10px rgba(252,3,44,0.6)'
                  }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <motion.p 
                className="text-white/30 text-xs font-body tabular-nums"
              >
                {Math.min(Math.round(progress), 100)}%
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
