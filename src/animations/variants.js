export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } 
  }
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } 
  }
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } 
  }
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } 
  }
}

export const slideInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: 'easeOut' } 
  }
}

export const navbarVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 2.5 } 
  }
}

export const heroTextReveal = {
  hidden: { opacity: 0, y: 80, skewY: 5 },
  visible: (i) => ({ 
    opacity: 1, 
    y: 0, 
    skewY: 0,
    transition: { 
      duration: 0.9, 
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 2.8 + i * 0.15
    } 
  })
}

export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -8,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}
