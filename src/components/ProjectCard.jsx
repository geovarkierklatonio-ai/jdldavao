import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

function ProjectCard({ title, description, tech, year, featured, link }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/30"
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="rounded-full border border-violet-400/40 bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-200">
          {year}
        </span>
        {featured ? (
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
            Featured
          </span>
        ) : null}
      </div>

      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-3 flex-1 text-slate-300">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>

      <a
        href={link}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
      >
        View project <ArrowUpRight size={16} />
      </a>
    </motion.article>
  )
}

export default ProjectCard
