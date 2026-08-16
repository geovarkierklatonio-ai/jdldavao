import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Braces,
  Code2,
  Download,
  Code,
  GraduationCap,
  Heart,
  Mail,
  Menu,
  Share2,
  Sparkles,
  TerminalSquare,
} from 'lucide-react'
import SectionTitle from './components/SectionTitle'
import SkillCard from './components/SkillCard'
import ProjectCard from './components/ProjectCard'
import TimelineItem from './components/TimelineItem'
import TypeWriter from './components/TypeWriter'
import profilePortrait from './assets/mypicture.jpg'
import {
  aboutContent,
  certifications,
  contactLinks,
  education,
  experience,
  navItems,
  projects,
  skills,
  stats,
} from './data/portfolioData'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2600)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const element = document.querySelector(item.href)
        return { id: item.href.substring(1), element }
      })

      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].element) {
          const offsetTop = sections[i].element.offsetTop
          if (scrollPosition >= offsetTop) {
            setActiveSection(sections[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div
            key="splash"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-slate-950"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.22),transparent_35%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.18),transparent_30%)]" />

            <div className="relative flex flex-col items-center justify-center gap-6">
              <div className="flex items-center gap-4 text-cyan-300">
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Code2 size={44} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -6, 0], rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Braces size={44} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <TerminalSquare size={44} />
                </motion.div>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center text-3xl font-black uppercase tracking-[0.35em] text-white sm:text-4xl"
              >
                WELCOME TO MY PORTFOLIO
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="h-1.5 w-28 overflow-hidden rounded-full bg-white/10"
              >
                <motion.div
                  className="h-full w-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                  animate={{ x: ['-10%', '130%'] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="min-h-screen"
          >
            <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
              <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <motion.a
                  href="#home"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex items-center gap-2 text-xl font-bold tracking-tight text-white cursor-pointer"
                >
                  <motion.div
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-white font-bold text-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    GK
                  </motion.div>
                  GEO<span className="text-cyan-400"> CODING</span>
                </motion.a>

                <div className="hidden items-center gap-8 md:flex">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href.substring(1)
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className={`relative text-sm transition ${
                          isActive
                            ? 'text-cyan-300 font-semibold'
                            : 'text-slate-300 hover:text-cyan-300'
                        }`}
                      >
                        {item.label}
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                          />
                        )}
                      </a>
                    )
                  })}
                </div>

                <button className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/15 md:hidden">
                  <Menu size={16} />
                  Menu
                </button>
              </nav>
            </header>

            <main>
              {/* Animated Background Elements */}
              <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {/* Floating Orb 1 */}
                <motion.div
                  className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/10 blur-3xl"
                  style={{ top: '10%', left: '10%' }}
                  animate={{
                    x: [0, 100, -50, 0],
                    y: [0, 60, 100, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                ></motion.div>

                {/* Floating Orb 2 */}
                <motion.div
                  className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/10 blur-3xl"
                  style={{ bottom: '10%', right: '5%' }}
                  animate={{
                    x: [0, -80, 60, 0],
                    y: [0, -80, -40, 0],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                ></motion.div>

                {/* Floating Orb 3 */}
                <motion.div
                  className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-cyan-500/15 to-violet-500/15 blur-3xl"
                  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                  animate={{
                    x: [0, 60, -60, 0],
                    y: [0, -80, 80, 0],
                  }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                ></motion.div>

                {/* Animated Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40" />

                {/* Floating Particles */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.5 + 0.2,
                    }}
                    animate={{
                      y: [0, -300, -600],
                      opacity: [0.5, 0.8, 0],
                    }}
                    transition={{
                      duration: Math.random() * 5 + 8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                ))}

                {/* Glow Lines */}
                <motion.div
                  className="absolute w-full h-full"
                  style={{
                    background: 'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1), transparent 50%)',
                  }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                ></motion.div>
              </div>

              <section id="home" className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),transparent_25%)]" />
                <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-sm text-cyan-200 cursor-pointer"
                    >
                      <motion.div animate={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                        <Sparkles size={14} />
                      </motion.div>
                      Available for opportunities
                    </motion.div>

                    <div className="space-y-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
                        Full Stack Developer
                      </p>
                      <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
                        I build. <span className="text-cyan-400"> I design </span> I deliver.
                      </h1>
                      <TypeWriter
                        items={[
                          'BSIT STUDENT',
                          '2025 PROVINCIAL STARTUP CHAMPION',
                          'AI DEVELOPMENT',
                        ]}
                        typingSpeed={60}
                        deletingSpeed={30}
                        delayBetweenItems={2500}
                      />
                    </div>

                    <p className="max-w-xl text-lg text-slate-300">
                      I create scalable web applications that merge strong backend architecture, clean user interfaces, and the power of AI-assisted workflows to deliver faster, smarter solutions in this generation of software development.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
                      >
                        View projects
                        <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                          <ArrowRight size={18} />
                        </motion.div>
                      </motion.a>
                      <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, y: -2, borderColor: 'rgba(34, 211, 238, 0.5)' }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:border-cyan-400/50 hover:text-cyan-200"
                      >
                        <Mail size={18} />
                        Contact me
                      </motion.a>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center gap-3">
                      <motion.a
                        href="https://github.com/geovarkierklatonio-ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-700 bg-slate-900/50 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                      >
                        <Code size={18} />
                      </motion.a>
                      <motion.a
                        href="https://www.facebook.com/people/Geo-Exe/pfbid0ici45xw6dBzTw67AqDDzHQjx6fbeDaR1oDr38zGyYTsSX5KaEgm5jem33A2oGrRAl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-700 bg-slate-900/50 text-slate-300 transition hover:border-blue-400 hover:text-blue-400 hover:bg-blue-500/10"
                      >
                        <Share2 size={18} />
                      </motion.a>
                      <motion.a
                        href="https://www.instagram.com/geo_jsx"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-700 bg-slate-900/50 text-slate-300 transition hover:border-pink-400 hover:text-pink-400 hover:bg-pink-500/10"
                      >
                        <Heart size={18} />
                      </motion.a>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
                          whileHover={{ y: -4, scale: 1.02, borderColor: 'rgba(34, 211, 238, 0.4)' }}
                          className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 cursor-pointer transition shadow-md hover:shadow-lg hover:shadow-cyan-500/20"
                        >
                          <div className="text-2xl font-bold text-white">{stat.value}</div>
                          <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    whileHover={{ y: -8 }}
                    className="relative mx-auto w-full max-w-md cursor-pointer"
                  >
                    <motion.div
                      className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-500/30 via-violet-500/20 to-transparent blur-2xl"
                      animate={{ opacity: [0.6, 0.9, 0.6] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-slate-950/50 transition hover:shadow-2xl hover:shadow-cyan-500/20">
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-rose-400" />
                          <span className="h-3 w-3 rounded-full bg-yellow-400" />
                          <span className="h-3 w-3 rounded-full bg-emerald-400" />
                        </div>
                        <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-200">
                          Portfolio
                        </span>
                      </div>

                      <div className="rounded-[1.75rem] border border-cyan-400/20 bg-gradient-to-b from-slate-950 to-slate-900 p-4 shadow-inner shadow-cyan-500/10">
                        <motion.div
                          className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/80"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                          <img
                            src={profilePortrait}
                            alt="GEOVAR KIERK LATONIO portrait"
                            className="h-[460px] w-full object-cover object-center"
                          />
                        </motion.div>

                        <div className="mt-5">
                          <h2 className="text-xl font-bold text-white sm:text-2xl">GEOVAR KIERK LATONIO</h2>
                          <p className="mt-1 text-sm text-slate-400">Full Stack Developer</p>
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-3">
                          <motion.div
                            whileHover={{ y: -3, scale: 1.05, borderColor: 'rgba(34, 211, 238, 0.5)' }}
                            className="rounded-2xl border border-white/10 bg-slate-900 p-3 cursor-pointer transition hover:shadow-md hover:shadow-cyan-500/20"
                          >
                            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Frontend</p>
                            <motion.p
                              className="mt-2 text-lg font-bold text-cyan-300"
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 0.3, delay: 0 }}
                            >
                              92%
                            </motion.p>
                          </motion.div>
                          <motion.div
                            whileHover={{ y: -3, scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                            className="rounded-2xl border border-white/10 bg-slate-900 p-3 cursor-pointer transition hover:shadow-md hover:shadow-violet-500/20"
                          >
                            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Backend</p>
                            <motion.p
                              className="mt-2 text-lg font-bold text-violet-300"
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 0.3, delay: 0 }}
                            >
                              89%
                            </motion.p>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              <motion.section
                id="about"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
              >
                <SectionTitle
                  eyebrow="About"
                  title="Building with technology. Accelerating with AI."
                  description="I’m a developer who believes technology should be used to its full potential. I build practical digital systems that solve real problems from public service platforms to location-based applications and I use modern tools, including AI, to turn ideas into working solutions faster and smarter."
                />

                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                  <motion.div
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -4, scale: 1.01, borderColor: 'rgba(34, 211, 238, 0.4)' }}
                    className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/30 cursor-pointer transition hover:shadow-2xl hover:shadow-cyan-500/20"
                  >
                    <motion.div
                      className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-2xl font-bold text-slate-950"
                      whileHover={{ rotate: 6, scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      GEO
                    </motion.div>
                    <p className="text-lg leading-relaxed text-slate-300">{aboutContent.intro}</p>
                  </motion.div>

                  <div className="space-y-6">
                    <motion.p
                      initial={{ opacity: 0, x: 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5 }}
                      className="text-lg leading-relaxed text-slate-300"
                      dangerouslySetInnerHTML={{ __html: aboutContent.story }}
                    />
                    <div className="grid gap-4 sm:grid-cols-2">
                      {aboutContent.highlights.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 18 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ delay: index * 0.08, duration: 0.45 }}
                          whileHover={{ y: -2, scale: 1.01, borderColor: 'rgba(34, 211, 238, 0.5)' }}
                          className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-slate-200 cursor-pointer transition hover:shadow-md hover:shadow-cyan-500/10"
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                    <motion.a
                      href="#"
                      download
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 transition hover:shadow-lg hover:shadow-cyan-500/50 shadow-md shadow-cyan-500/30"
                    >
                      <Download size={18} />
                      Download CV
                    </motion.a>
                  </div>
                </div>
              </motion.section>

              <motion.section
                id="skills"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="bg-slate-900/40 py-20"
              >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <SectionTitle
                    eyebrow="Skills"
                    title="Core stack for modern product development"
                    description="I work with the tools that help me design, build, ship, and improve software efficiently in today’s AI-augmented development environment."
                  />

                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {skills.map((skill) => (
                      <SkillCard key={skill.name} {...skill} />
                    ))}
                  </div>
                </div>
              </motion.section>

              <motion.section
                id="projects"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
              >
                <SectionTitle
                  eyebrow="Projects"
                  title="Real solutions built with thoughtful engineering"
                  description="My work blends product thinking, technical execution, and modern tooling to deliver experiences that are useful, polished, and scalable."
                />

                <div className="grid gap-6 lg:grid-cols-3">
                  {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
                </div>
              </motion.section>

              <motion.section
                id="education"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="bg-slate-900/40 py-20"
              >
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                  <SectionTitle
                    eyebrow="Education"
                    title="Academic background"
                    description="My education helped me build a strong foundation in software engineering and modern web technologies."
                  />

                  <div className="space-y-8">
                    {education.map((item) => (
                      <TimelineItem
                        key={item.degree}
                        title={item.degree}
                        subtitle={item.institution}
                        period={item.period}
                        description={item.details}
                        accent="cyan"
                      />
                    ))}
                  </div>
                </div>
              </motion.section>

              <motion.section
                id="certifications"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
              >
                <SectionTitle
                  eyebrow="Certifications"
                  title="Learning that keeps me sharp in a changing tech landscape"
                  description="I continue to learn and adapt, using modern resources and AI-assisted workflows to stay competitive and effective."
                />

                <div className="grid gap-5 md:grid-cols-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: index * 0.08, duration: 0.45 }}
                      whileHover={{ y: -6, scale: 1.02, borderColor: 'rgba(34, 211, 238, 0.4)' }}
                      className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20 cursor-pointer transition hover:shadow-2xl hover:shadow-cyan-500/20"
                    >
                      <motion.div
                        className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 text-slate-950"
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <GraduationCap size={20} />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                      <p className="mt-2 text-slate-300">{cert.provider}</p>
                      <span className="mt-4 inline-flex rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-200">
                        {cert.year}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              <motion.section
                id="experience"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="bg-slate-900/40 py-20"
              >
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                  <SectionTitle
                    eyebrow="Experience"
                    title="A growth-focused engineering journey"
                    description="My experience reflects an increasing ability to turn ideas into production-ready solutions with strong attention to usability and reliability."
                  />

                  <div className="space-y-8">
                    {experience.map((item, index) => (
                      <TimelineItem
                        key={item.role}
                        title={item.role}
                        subtitle={item.company}
                        period={item.period}
                        description={item.description}
                        accent={index % 2 === 0 ? 'violet' : 'emerald'}
                      />
                    ))}
                  </div>
                </div>
              </motion.section>

              <motion.section
                id="contact"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
              >
                <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl shadow-slate-900/20 sm:p-10">
                  <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Contact</p>
                      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Let’s build something meaningful together.</h2>
                      <p className="mt-4 max-w-xl text-slate-300">
                        I’m open to full stack roles, product engineering opportunities, and collaborative work where I can build meaningful digital experiences using both strong fundamentals and modern AI-assisted workflows.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {contactLinks.map((link, index) => (
                        <motion.a
                          key={link.label}
                          href={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ delay: index * 0.08, duration: 0.4 }}
                          whileHover={{ x: 8, borderColor: 'rgba(34, 211, 238, 0.5)', backgroundColor: 'rgba(30, 41, 59, 0.9)' }}
                          className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-left transition cursor-pointer hover:shadow-md hover:shadow-cyan-500/10"
                        >
                          <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{link.label}</p>
                            <p className="mt-1 text-sm text-white">{link.value}</p>
                          </div>
                          <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                            <ArrowRight size={18} className="text-cyan-300" />
                          </motion.div>
                        </motion.a>
                      ))}
                      <motion.a
                        href="mailto:hello@example.com"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.12, duration: 0.4 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition cursor-pointer shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
                      >
                        <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
                          <Download size={18} />
                        </motion.div>
                        Download CV
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.section>
            </main>

            <footer className="border-t border-white/10 bg-slate-950">
              <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-center text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
                <p>© 2026 Your Name. All rights reserved.</p>
                <div className="flex items-center justify-center gap-4">
                  <a href="#home" className="transition hover:text-cyan-300">Home</a>
                  <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
                  <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
