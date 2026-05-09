import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { staggerContainer, fadeInUp } from '../animations/variants'
import { ExternalLink, Github, Star, GitFork } from 'lucide-react'

const projects = [
  {
    title: 'NovaDash',
    category: 'SaaS Dashboard',
    description: 'A real-time analytics dashboard with 50+ interactive charts, dark/light mode, and blazing-fast data visualization for enterprise clients.',
    color: '#fc032c',
    gradient: 'from-[#fc032c]/20 to-[#1703fc]/20',
    tags: ['React', 'TypeScript', 'D3.js', 'WebSockets', 'Tailwind'],
    stars: 847,
    forks: 123,
    featured: true,
    emoji: '📊',
    bgPattern: 'linear-gradient(135deg, rgba(252,3,44,0.08) 0%, rgba(23,3,252,0.08) 100%)'
  },
  {
    title: 'MotionKit',
    category: 'Animation Library',
    description: 'Open-source React animation library with 100+ pre-built components and seamless GSAP integration. Used by 5K+ developers.',
    color: '#1703fc',
    gradient: 'from-[#1703fc]/20 to-[#8b5cf6]/20',
    tags: ['React', 'GSAP', 'Framer Motion', 'TypeScript', 'Storybook'],
    stars: 2400,
    forks: 310,
    featured: true,
    emoji: '🎬',
    bgPattern: 'linear-gradient(135deg, rgba(23,3,252,0.08) 0%, rgba(139,92,246,0.08) 100%)'
  },
  {
    title: 'ShopFlow',
    category: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with cart management, Stripe payments, and real-time inventory tracking. Handles 10K+ daily transactions.',
    color: '#22c55e',
    gradient: 'from-[#22c55e]/20 to-[#0ea5e9]/20',
    tags: ['React', 'Laravel', 'MySQL', 'Stripe', 'Redis'],
    stars: 430,
    forks: 87,
    featured: false,
    emoji: '🛒',
    bgPattern: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(14,165,233,0.08) 100%)'
  },
  {
    title: 'AIChat Studio',
    category: 'AI Application',
    description: 'Beautiful ChatGPT-like interface with multi-model support, conversation history, markdown rendering, and code syntax highlighting.',
    color: '#f59e0b',
    gradient: 'from-[#f59e0b]/20 to-[#ef4444]/20',
    tags: ['React', 'OpenAI API', 'Firebase', 'Tailwind', 'Framer Motion'],
    stars: 1100,
    forks: 195,
    featured: false,
    emoji: '🤖',
    bgPattern: 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(239,68,68,0.08) 100%)'
  },
  {
    title: 'PortfolioGen',
    category: 'Web Tool',
    description: 'Drag-and-drop portfolio builder for developers with GitHub integration, live preview, and one-click deployment to Vercel.',
    color: '#8b5cf6',
    gradient: 'from-[#8b5cf6]/20 to-[#ec4899]/20',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind', 'Vercel'],
    stars: 680,
    forks: 94,
    featured: false,
    emoji: '✨',
    bgPattern: 'linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(236,72,153,0.08) 100%)'
  },
  {
    title: 'DevTracker',
    category: 'Productivity App',
    description: 'Time tracking and project management app for freelance developers. Features invoicing, client portal, and time reports.',
    color: '#0ea5e9',
    gradient: 'from-[#0ea5e9]/20 to-[#10b981]/20',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'JWT'],
    stars: 325,
    forks: 62,
    featured: false,
    emoji: '⏱️',
    bgPattern: 'linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(16,185,129,0.08) 100%)'
  },
]

function ProjectCard({ project, index, inView, isDark }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`group relative rounded-2xl overflow-hidden ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''} ${
        isDark ? 'glass-dark' : 'glass-light'
      } transition-all duration-300 cursor-pointer`}
      style={{
        border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
        boxShadow: hovered 
          ? `0 20px 60px ${project.color}20, 0 0 0 1px ${project.color}30` 
          : isDark ? '0 20px 60px rgba(0,0,0,0.2)' : '0 20px 60px rgba(0,0,0,0.05)'
      }}
    >
      {/* Card header visual */}
      <div 
        className="h-40 flex items-center justify-center relative overflow-hidden"
        style={{ background: project.bgPattern }}
      >
        <motion.span
          animate={{ scale: hovered ? 1.2 : 1, rotate: hovered ? 10 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-6xl"
        >
          {project.emoji}
        </motion.span>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0"
          style={{ background: `radial-gradient(circle at center, transparent 40%, ${isDark ? '#080808' : '#f9fafb'}20 100%)` }}
        />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-body font-medium"
            style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}40` }}
          >
            Featured
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <span className="text-xs font-body" style={{ color: project.color }}>{project.category}</span>
            <h3 className={`font-display font-bold text-lg mt-0.5 ${isDark ? 'text-white' : 'text-black'}`}>
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-3 text-xs font-body">
            <div className="flex items-center gap-1" style={{ color: project.color }}>
              <Star size={12} />
              <span>{project.stars >= 1000 ? `${(project.stars/1000).toFixed(1)}k` : project.stars}</span>
            </div>
            <div className={`flex items-center gap-1 ${isDark ? 'text-white/35' : 'text-black/35'}`}>
              <GitFork size={12} />
              <span>{project.forks}</span>
            </div>
          </div>
        </div>

        <p className={`text-sm font-body leading-relaxed mb-4 ${isDark ? 'text-white/50' : 'text-black/50'}`}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span key={tag}
              className={`text-xs font-body px-2.5 py-1 rounded-lg ${isDark ? 'bg-white/5 text-white/55' : 'bg-black/5 text-black/55'}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-body font-medium text-white"
            style={{
              background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
              boxShadow: `0 0 15px ${project.color}30`
            }}
          >
            <ExternalLink size={12} />
            Live Demo
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-body font-medium border ${
              isDark ? 'border-white/10 text-white/70 hover:border-white/20' : 'border-black/10 text-black/70 hover:border-black/20'
            }`}
          >
            <Github size={12} />
            Source
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="projects"
      ref={ref}
      className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? 'bg-[#050505]' : 'bg-white'}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: isDark ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)' }}
      />

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(252,3,44,0.03) 0%, transparent 70%)', filter: 'blur(100px)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap items-end justify-between gap-6 mb-16"
        >
          <div>
            <motion.span variants={fadeInUp} className="text-xs font-body tracking-[0.3em] uppercase" style={{ color: '#fc032c' }}>
              Portfolio
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className={`font-display font-bold text-4xl lg:text-5xl mt-4 ${isDark ? 'text-white' : 'text-black'}`}
            >
              Featured{' '}
              <span style={{ background: 'linear-gradient(135deg, #1703fc, #fc032c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Projects
              </span>
            </motion.h2>
          </div>
          <motion.a
            variants={fadeInUp}
            href="#"
            className="flex items-center gap-2 text-sm font-body"
            style={{ color: '#fc032c' }}
            whileHover={{ x: 4 }}
          >
            View all on GitHub
            <ExternalLink size={14} />
          </motion.a>
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  )
}
