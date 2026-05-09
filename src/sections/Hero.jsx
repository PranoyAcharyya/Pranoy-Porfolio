import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import {
  heroTextReveal,
  staggerContainer,
  scaleIn,
} from "../animations/variants";
import { ArrowDown, Download, ExternalLink, Sparkles } from "lucide-react";

const typewriterWords = [
  "React Developer",
  "WordPress Developer",
  "PHP Developer",
  "Frontend Architect",
];

function useTypewriter(words, speed = 80) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.substring(0, text.length + 1));
          if (text === current) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(current.substring(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setWordIndex((i) => i + 1);
          }
        }
      },
      isDeleting ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed]);

  return text;
}

function FloatingParticles({ isDark }) {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 5,
    color: Math.random() > 0.5 ? "#fc032c" : "#1703fc",
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            opacity: 0.6,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() > 0.5 ? 15 : -15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const { isDark } = useTheme();
  const typedText = useTypewriter(typewriterWords);
  const heroRef = useRef(null);

  const scrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className={`relative min-h-screen flex items-center overflow-hidden ${isDark ? "bg-[#050505]" : "bg-white"}`}
    >
      {/* Background grid */}
      <div
        className={`absolute inset-0 ${isDark ? "bg-grid-dark" : "bg-grid-light"} opacity-60`}
      />

      {/* Gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(23,3,252,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 0.8, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(252,3,44,0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <FloatingParticles isDark={isDark} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[calc(100vh-120px)]">
          {/* Left content */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.6 }}
              className="inline-flex items-center gap-2 w-fit"
            >
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-body font-medium"
                style={{
                  background: isDark
                    ? "rgba(252,3,44,0.08)"
                    : "rgba(252,3,44,0.06)",
                  border: "1px solid rgba(252,3,44,0.2)",
                  color: "#fc032c",
                }}
              >
                <Sparkles size={12} />
                <span>Available for new opportunities</span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              </div>
            </motion.div>

            {/* Main heading */}
            <div className="overflow-hidden">
              <motion.h1
                custom={0}
                variants={heroTextReveal}
                initial="hidden"
                animate="visible"
                className={`font-display font-bold text-5xl lg:text-6xl xl:text-7xl leading-[1.05] ${isDark ? "text-white" : "text-black"}`}
              >
                Hi, I'm
              </motion.h1>

              <motion.h1
                custom={1}
                variants={heroTextReveal}
                initial="hidden"
                animate="visible"
                className="font-display font-bold text-5xl lg:text-6xl xl:text-7xl leading-[1.05]"
                style={{
                  background: "linear-gradient(135deg, #1703fc, #fc032c)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Pranoy
              </motion.h1>

              <motion.h1
                custom={2}
                variants={heroTextReveal}
                initial="hidden"
                animate="visible"
                className={`font-display font-bold text-5xl lg:text-6xl xl:text-7xl leading-[1.05] ${isDark ? "text-white" : "text-black"}`}
              >
                Web Developer
              </motion.h1>
            </div>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.4, duration: 0.5 }}
              className={`flex items-center gap-2 text-lg font-body ${isDark ? "text-white/50" : "text-black/50"}`}
            >
              <span>I'm a</span>
              <span className="text-[#fc032c] font-medium">
                {typedText}
                <span className="typewriter-cursor">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.7 }}
              className={`text-base font-body leading-relaxed max-w-md ${isDark ? "text-white/50" : "text-black/50"}`}
            >
              I love building modern, interactive, and responsive web
              experiences using React, Tailwind, and animation libraries.
              Currently focused on improving my skills and creating projects
              that feel smooth, clean, and meaningful.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.6, duration: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 30px rgba(252,3,44,0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-body font-medium"
                style={{
                  background: "linear-gradient(135deg, #1703fc, #fc032c)",
                  boxShadow: "0 0 20px rgba(252,3,44,0.2)",
                }}
              >
                <ExternalLink size={15} />
                View Projects
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-body font-medium border transition-all duration-200 ${
                  isDark
                    ? "border-white/15 text-white/80 hover:border-white/30 hover:text-white bg-white/5"
                    : "border-black/15 text-black/80 hover:border-black/30 hover:text-black bg-black/5"
                }`}
              >
                <Download size={15} />
                Resume
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.7, duration: 0.7 }}
              className="flex gap-8 pt-2"
            >
              {[
                { value: "1.5+", label: "Years Experience" },
                { value: "20+", label: "Projects Built" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className={`font-display font-bold text-2xl ${isDark ? "text-white" : "text-black"}`}
                  >
                    <span style={{ color: "#fc032c" }}>{stat.value}</span>
                  </div>
                  <div
                    className={`text-xs font-body mt-0.5 ${isDark ? "text-white/40" : "text-black/40"}`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Center — Developer visual */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 3.0,
                duration: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative"
            >
              {/* Outer glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent, rgba(252,3,44,0.4), transparent, rgba(23,3,252,0.4), transparent)",
                  filter: "blur(8px)",
                }}
              />

              {/* Avatar container */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden"
                style={{
                  border: `2px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
                  boxShadow: isDark
                    ? "0 0 60px rgba(252,3,44,0.2), 0 0 120px rgba(23,3,252,0.1), inset 0 0 60px rgba(0,0,0,0.5)"
                    : "0 20px 60px rgba(0,0,0,0.15)",
                }}
              >
                {/* Gradient avatar placeholder */}
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background: isDark
                      ? "linear-gradient(160deg, #111 0%, #1a0a1a 50%, #0a0a1a 100%)"
                      : "linear-gradient(160deg, #f0f0f0 0%, #e0e0f0 50%, #d0d0f0 100%)",
                  }}
                >
                  {/* Abstract developer avatar */}
                  <svg
                    viewBox="0 0 200 220"
                    className="w-[85%] h-[85%]"
                    fill="none"
                  >
                    {/* Body */}
                    <ellipse
                      cx="100"
                      cy="185"
                      rx="60"
                      ry="35"
                      fill={isDark ? "#111" : "#ddd"}
                    />
                    {/* Shirt */}
                    <path
                      d="M55 175 Q100 165 145 175 Q140 195 100 200 Q60 195 55 175z"
                      fill="url(#shirtGrad)"
                    />
                    {/* Head */}
                    <circle
                      cx="100"
                      cy="90"
                      r="45"
                      fill={isDark ? "#2a1a1a" : "#e8d5c4"}
                    />
                    {/* Hair */}
                    <path
                      d="M60 75 Q100 45 140 75 Q135 55 100 50 Q65 55 60 75z"
                      fill={isDark ? "#fc032c" : "#333"}
                    />
                    {/* Eyes */}
                    <circle
                      cx="84"
                      cy="88"
                      r="5"
                      fill={isDark ? "#fff" : "#333"}
                    />
                    <circle
                      cx="116"
                      cy="88"
                      r="5"
                      fill={isDark ? "#fff" : "#333"}
                    />
                    <circle
                      cx="85"
                      cy="88"
                      r="2.5"
                      fill={isDark ? "#1703fc" : "#1703fc"}
                    />
                    <circle
                      cx="117"
                      cy="88"
                      r="2.5"
                      fill={isDark ? "#1703fc" : "#1703fc"}
                    />
                    {/* Smile */}
                    <path
                      d="M88 102 Q100 110 112 102"
                      stroke={isDark ? "#fff" : "#333"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                    {/* Code brackets on shirt */}
                    <text
                      x="83"
                      y="182"
                      fill="white"
                      fontSize="14"
                      fontFamily="monospace"
                    >
                      &lt;/&gt;
                    </text>
                    <defs>
                      <linearGradient
                        id="shirtGrad"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#1703fc" />
                        <stop offset="100%" stopColor="#fc032c" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </motion.div>

              {/* Floating tech badges */}
              {[
                { label: "React", x: -20, y: 20, color: "#61dafb", delay: 0 },
                { label: "Wordpress", x: 20, y: -10, color: "#88ce02", delay: 0.3 },
                {
                  label: "Tailwind",
                  x: -15,
                  y: -15,
                  color: "#38bdf8",
                  delay: 0.6,
                },
              ].map((badge) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                  transition={{
                    opacity: { delay: 3.5, duration: 0.4 },
                    scale: { delay: 3.5, duration: 0.4 },
                    y: {
                      delay: badge.delay,
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className={`absolute text-xs font-body font-medium px-3 py-1.5 rounded-full ${isDark ? "bg-[#0a0a0a]/80" : "bg-white/80"} backdrop-blur-sm`}
                  style={{
                    border: `1px solid ${badge.color}40`,
                    color: badge.color,
                    boxShadow: `0 0 15px ${badge.color}20`,
                    ...(badge.x < 0
                      ? { right: `${Math.abs(badge.x)}%` }
                      : { left: `${badge.x}%` }),
                    ...(badge.y < 0
                      ? { top: `${Math.abs(badge.y)}%` }
                      : { bottom: `${badge.y}%` }),
                  }}
                >
                  {badge.label}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Info card */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.2, duration: 0.8 }}
              className={`p-5 rounded-2xl ${isDark ? "glass-dark" : "glass-light"}`}
              style={{
                border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                boxShadow: isDark
                  ? "0 20px 60px rgba(0,0,0,0.3)"
                  : "0 20px 60px rgba(0,0,0,0.08)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span
                  className={`text-xs font-body ${isDark ? "text-white/50" : "text-black/50"}`}
                >
                  Current Status
                </span>
              </div>
              <p
                className={`text-sm font-body font-medium ${isDark ? "text-white" : "text-black"}`}
              >
                Open to full-time & freelance opportunities
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Remote", "Full-time" , "Pan-India"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-body px-2 py-1 rounded-lg"
                    style={{
                      background: "rgba(252,3,44,0.1)",
                      color: "#fc032c",
                      border: "1px solid rgba(252,3,44,0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.35, duration: 0.8 }}
              className={`p-5 rounded-2xl ${isDark ? "glass-dark" : "glass-light"}`}
              style={{
                border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                boxShadow: isDark
                  ? "0 20px 60px rgba(0,0,0,0.3)"
                  : "0 20px 60px rgba(0,0,0,0.08)",
              }}
            >
              <p
                className={`text-xs font-body mb-3 ${isDark ? "text-white/40" : "text-black/40"}`}
              >
                Core Stack
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Wordpress",
                  "Tailwind",
                  "PHP",
                  "Laravel",
                ].map((tech) => (
                  <div
                    key={tech}
                    className={`text-xs font-body px-2 py-1.5 rounded-lg text-center ${
                      isDark
                        ? "bg-white/5 text-white/70"
                        : "bg-black/5 text-black/70"
                    }`}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.5, duration: 0.8 }}
              className={`p-5 rounded-2xl ${isDark ? "glass-dark" : "glass-light"}`}
              style={{
                border: `1px solid rgba(23,3,252,0.2)`,
                boxShadow: isDark
                  ? "0 20px 60px rgba(0,0,0,0.3), 0 0 30px rgba(23,3,252,0.05)"
                  : "0 20px 60px rgba(0,0,0,0.08)",
              }}
            >
              <p
                className={`text-xs font-body mb-3 ${isDark ? "text-white/40" : "text-black/40"}`}
              >
                Location
              </p>
              <div className="flex items-center gap-2">
                <span className="text-lg">📍</span>
                <div>
                  <p
                    className={`text-sm font-body font-medium ${isDark ? "text-white" : "text-black"}`}
                  >
                    Kolkata , WB , India
                  </p>
                  <p
                    className={`text-xs font-body ${isDark ? "text-white/40" : "text-black/40"}`}
                  >
                     UTC+5:30 • IST
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollDown}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        >
          <span
            className={`text-xs font-body tracking-widest uppercase ${isDark ? "text-white/30" : "text-black/30"} group-hover:text-[#fc032c] transition-colors`}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown
              size={14}
              className={`${isDark ? "text-white/30" : "text-black/30"} group-hover:text-[#fc032c] transition-colors`}
            />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
