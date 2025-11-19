import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#a63bff]" />
            <p className="text-[#a63bff]/80 uppercase tracking-[0.3em] text-xs">IAA – Wydział Operacji Taktycznych</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_0_30px_#a63bff44]">
            RAVENMARK – <span className="text-[#a63bff]">Phantom Strategist</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl">
            Patron Bojowy IAA – Ekspert Od Pośredniej Dominacji Pola Walki
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/umiejetnosci"
              className="px-6 py-3 rounded-md bg-[#a63bff]/20 text-[#a63bff] border border-[#a63bff]/50 hover:bg-[#a63bff]/30 transition shadow-[0_0_20px_#a63bff33]"
            >
              Wejdź do Bazy Taktycznej
            </a>
            <a href="#profil" className="px-6 py-3 rounded-md border border-gray-700 text-gray-300 hover:bg-white/5 transition">
              Krótki profil
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none" />
    </section>
  )
}
