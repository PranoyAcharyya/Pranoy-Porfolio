import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
    />
  )
}

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let animId
    let ringX = 0, ringY = 0

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
      
      const lerp = (a, b, t) => a + (b - a) * t
      const animate = () => {
        ringX = lerp(ringX, e.clientX, 0.12)
        ringY = lerp(ringY, e.clientY, 0.12)
        setRingPos({ x: ringX, y: ringY })
        animId = requestAnimationFrame(animate)
      }
      cancelAnimationFrame(animId)
      animate()
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(animId)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      <div
        className="custom-cursor"
        style={{ left: pos.x - 6, top: pos.y - 6, pointerEvents: 'none' }}
      />
      <div
        className="custom-cursor-ring"
        style={{ left: ringPos.x - 20, top: ringPos.y - 20, pointerEvents: 'none' }}
      />
    </>
  )
}
