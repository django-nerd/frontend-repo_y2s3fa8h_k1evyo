import { motion } from 'framer-motion'

const colors = [
  { name: 'Burgund', hex: '#6b0f1a' },
  { name: 'Stalowy Szary', hex: '#3a3f47' },
  { name: 'Neonowy Fiolet', hex: '#a63bff' },
  { name: 'Czerń', hex: '#000000' },
]

export default function Palette() {
  return (
    <section className="relative py-16 bg-black">
      <div className="relative max-w-7xl mx-auto px-4">
        <h3 className="text-xl tracking-widest uppercase text-[#a63bff] mb-6">Motyw kolorów</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {colors.map((c, i) => (
            <motion.div
              key={c.hex}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10"
            >
              <div className="h-28" style={{ backgroundColor: c.hex }} />
              <div className="p-3 bg-[#0b0b0b] text-gray-300 flex items-center justify-between">
                <span>{c.name}</span>
                <span className="text-white/50 font-mono">{c.hex}</span>
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.15)_50%,transparent_100%)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
