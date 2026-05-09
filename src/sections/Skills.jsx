import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { staggerContainer, fadeInUp } from "../animations/variants";

const skills = [
  { name: "React.js", level: 90, color: "#61dafb", icon: "⚛️" },
  { name: "Next.js", level: 82, color: "#ffffff", icon: "▲" },
  { name: "JavaScript", level: 88, color: "#f7df1e", icon: "🟨" },
  { name: "Redux Toolkit", level: 78, color: "#764abc", icon: "🟣" },
  { name: "TanStack Query", level: 72, color: "#ff4154", icon: "🔺" },
  { name: "Tailwind CSS", level: 90, color: "#38bdf8", icon: "💨" },
  { name: "Bootstrap", level: 85, color: "#7952b3", icon: "🅱️" },
  { name: "Framer Motion", level: 80, color: "#ff0055", icon: "🎭" },
  { name: "WordPress", level: 88, color: "#21759b", icon: "📰" },
  { name: "WooCommerce", level: 82, color: "#96588a", icon: "🛒" },
  { name: "Elementor", level: 85, color: "#92003b", icon: "🧩" },
  { name: "PHP", level: 60, color: "#777bb4", icon: "🐘" },
  { name: "Laravel", level: 50, color: "#ff2d20", icon: "🔴" },
  { name: "REST API", level: 80, color: "#a855f7", icon: "🔌" },
  { name: "Git & GitHub", level: 82, color: "#f05032", icon: "📦" },
];

const categories = [
  {
    name: "Frontend",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "Next.js",
    ],
  },
  {
    name: "Backend",
    skills: ["Laravel", "Node.js", "REST API", "Firebase"],
  },
  {
    name: "Tools",
    skills: ["Git"],
  },
];

function SkillBar({ skill, index, inView, isDark }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{skill.icon}</span>
          <span
            className={`text-sm font-body font-medium ${isDark ? "text-white/80" : "text-black/80"}`}
          >
            {skill.name}
          </span>
        </div>
        <span
          className="text-xs font-body font-mono"
          style={{ color: skill.color }}
        >
          {skill.level}%
        </span>
      </div>
      <div
        className={`h-1.5 rounded-full overflow-hidden ${isDark ? "bg-white/5" : "bg-black/8"}`}
      >
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{
            delay: 0.5 + index * 0.07,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            background: `linear-gradient(90deg, ${skill.color}90, ${skill.color})`,
            boxShadow: `0 0 8px ${skill.color}60`,
          }}
        />
      </div>
    </motion.div>
  );
}

function SkillPill({ skill, isDark, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        delay: index * 0.05,
        duration: 0.4,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      className={`px-4 py-3 rounded-2xl cursor-default flex items-center gap-3 group transition-all duration-200 ${
        isDark
          ? "bg-white/3 hover:bg-white/6 border border-white/5 hover:border-white/15"
          : "bg-black/3 hover:bg-black/6 border border-black/5 hover:border-black/15"
      }`}
      whileHover={{
        scale: 1.06,
        y: -3,
        boxShadow: `0 0 20px ${skill.color}20, 0 8px 24px rgba(0,0,0,0.15)`,
        borderColor: `${skill.color}30`,
      }}
    >
      <span className="text-xl">{skill.icon}</span>
      <div>
        <div
          className={`text-sm font-body font-medium ${isDark ? "text-white/85" : "text-black/85"}`}
        >
          {skill.name}
        </div>
        <div
          className={`text-xs font-body font-mono mt-0.5`}
          style={{ color: skill.color }}
        >
          {skill.level}%
        </div>
      </div>
      <div
        className="ml-auto w-12 h-1.5 rounded-full overflow-hidden"
        style={{
          background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.08)",
        }}
      >
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: 0.5 + index * 0.05, duration: 0.8 }}
          style={{ background: skill.color }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? "bg-[#080808]" : "bg-gray-50/80"}`}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: isDark
            ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)"
            : "linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)",
        }}
      />

      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(23,3,252,0.04) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(252,3,44,0.04) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-xs font-body tracking-[0.3em] uppercase"
            style={{ color: "#fc032c" }}
          >
            Skills & Expertise
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className={`font-display font-bold text-4xl lg:text-5xl mt-4 ${isDark ? "text-white" : "text-black"}`}
          >
            My Tech{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #1703fc, #fc032c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Arsenal
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className={`mt-4 text-base font-body max-w-xl mx-auto ${isDark ? "text-white/45" : "text-black/45"}`}
          >
            Technologies I work with to build fast, accessible, and delightful
            web experiences
          </motion.p>
        </motion.div>

        {/* Skill pills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {skills.map((skill, i) => (
            <SkillPill
              key={skill.name}
              skill={skill}
              isDark={isDark}
              index={i}
              inView={inView}
            />
          ))}
        </div>

      
      </div>
    </section>
  );
}
