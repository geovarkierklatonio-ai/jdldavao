import { motion } from 'framer-motion'

function TimelineItem({ title, subtitle, period, description, accent = 'cyan' }) {
  const accentClasses = {
    cyan: 'border-cyan-400/50 bg-cyan-500/10 text-cyan-200',
    violet: 'border-violet-400/50 bg-violet-500/10 text-violet-200',
    emerald: 'border-emerald-400/50 bg-emerald-500/10 text-emerald-200',
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 sm:pl-10"
    >
      <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.7)]" />
      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/20">
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${accentClasses[accent]}`}>
            {period}
          </span>
        </div>
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-300">
          {subtitle}
        </p>
        <p className="text-slate-300">{description}</p>
      </div>
    </motion.div>
  )
}

export default TimelineItem
