import { motion } from 'framer-motion'
import { Eye, Gauge, Crosshair } from 'lucide-react'

const skills = [
  {
    title: 'Ghostfield Projection',
    desc: 'Generuje fałszywe sygnały taktyczne',
    icon: Eye,
    color: 'from-[#a63bff]/30 to-transparent',
  },
  {
    title: 'Combat Momentum Bias',
    desc: 'Wpływa na tempo i rytm walki',
    icon: Gauge,
    color: 'from-[#6b0f1a]/30 to-transparent',
  },
  {
    title: 'Threat Reassignment',
    desc: 'Zmienia to, co przeciwnicy postrzegają jako zagrożenie',
    icon: Crosshair,
    color: 'from-[#3a3f47]/30 to-transparent',
  },
]

export default function SkillsGrid() {
  return (
    <section className="relative py-20 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(107,15,26,0.12),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-white mb-8">Karty umiejętności</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative p-6 rounded-xl border border-white/10 bg-[#0b0b0b]/80 backdrop-blur-md overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${s.color}`} />
              <div className="relative z-10">
                <s.icon className="text-[#a63bff] mb-4" />
                <h4 className="text-white font-semibold">{s.title}</h4>
                <p className="text-gray-400 text-sm mt-1">{s.desc}</p>
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
