import { motion } from 'framer-motion'
import * as SI from 'react-icons/si'

const iconMap = {
  SiHtml5: SI.SiHtml5,
  SiCss3: SI.SiCss3,
  SiJavascript: SI.SiJavascript,
  SiBootstrap: SI.SiBootstrap,
  SiReact: SI.SiReact,
  SiNextdotjs: SI.SiNextdotjs,
  SiLaravel: SI.SiLaravel,
  SiFlutter: SI.SiFlutter,
  SiPhp: SI.SiPhp,
  SiSupabase: SI.SiSupabase,
  SiMysql: SI.SiMysql,
  SiPostgresql: SI.SiPostgresql,
  SiDart: SI.SiDart,
  SiJava: SI.SiJava,
  SiCsharp: SI.SiCsharp,
  SiGit: SI.SiGit,
  SiGithub: SI.SiGithub,
  SiVisualstudiocode: SI.SiVisualstudiocode,
  SiGoogle: SI.SiGoogle,
  SiOpenai: SI.SiOpenai,
  SiAnthropic: SI.SiAnthropic,
  SiGitpod: SI.SiGitpod,
  SiFiles: SI.SiFiles,
  SiMicrosoft: SI.SiMicrosoft,
}

// Generate random position for scattered effect
const getRandomScatter = () => ({
  x: (Math.random() - 0.5) * 200,
  y: (Math.random() - 0.5) * 200,
  rotate: (Math.random() - 0.5) * 180,
})

function SkillsCategory({ skillsByCategory }) {
  return (
    <div className="space-y-12">
      {skillsByCategory.map((categoryGroup, idx) => (
        <motion.div
          key={categoryGroup.category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <div className="mb-6">
            <h3 className="text-xl font-bold text-cyan-400">{categoryGroup.category}</h3>
            <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
          </div>

          <div className="flex flex-wrap gap-3">
            {categoryGroup.skills.map((skill, skillIdx) => {
              const IconComponent = iconMap[skill.icon]
              const randomScatter = getRandomScatter()
              const totalSkillIdx = skillsByCategory.slice(0, idx).reduce((sum, cat) => sum + cat.skills.length, 0) + skillIdx
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.3,
                    x: randomScatter.x,
                    y: randomScatter.y,
                    rotate: randomScatter.rotate,
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{
                    duration: 0.8,
                    delay: totalSkillIdx * 0.06,
                    type: 'spring',
                    stiffness: 150,
                    damping: 16,
                  }}
                  className={`group flex items-center gap-2 rounded-lg border ${skill.borderColor} ${skill.bgColor} px-4 py-2.5 shadow-lg transition-all hover:shadow-md`}
                >
                  {IconComponent && (
                    <IconComponent
                      size={20}
                      className={`${skill.color} transition-all group-hover:scale-110`}
                    />
                  )}
                  <span className="text-sm font-medium text-slate-200 transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default SkillsCategory
