import { motion } from 'framer-motion'

function SkillCard({ name, level, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="group rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-slate-950/30"
    >
      <div className={`mb-4 h-2.5 rounded-full bg-gradient-to-r ${color}`} />
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-2 py-1 text-xs font-medium text-cyan-300">
          {level}
        </span>
      </div>
    </motion.div>
  )
}

export default SkillCard
