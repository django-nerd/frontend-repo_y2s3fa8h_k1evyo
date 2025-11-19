import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Dossier() {
  const rows = [
    ['Kryptonim', 'Ravenmark'],
    ['Klasa Operacyjna', 'Alpha-Black'],
    ['Rola', 'Pośredni patron bojowy IAA'],
    ['Specjalizacja', 'Manipulacja dynamiką walki, osłabienie koordynacji wroga, wsparcie taktyczne agentów'],
    ['Charakterystyka', 'Absolutna precyzja, chłodna analiza, brak bezpośrednich działań fizycznych'],
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main className="pt-28">
        <section className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(166,59,255,0.12),transparent_60%)]" />
          <div className="relative max-w-7xl mx-auto px-4 py-20">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#a63bff]" />
              <h1 className="uppercase tracking-[0.3em] text-sm text-[#a63bff]">Dossier IAA</h1>
            </div>

            <div className="rounded-xl border border-[#a63bff]/30 bg-[#0b0b0b]/70 backdrop-blur-md overflow-hidden">
              <div className="px-6 py-4 border-b border-[#a63bff]/30 flex items-center justify-between">
                <p className="uppercase text-sm tracking-widest text-gray-300">CLASSIFIED</p>
                <p className="text-[#a63bff] text-sm">Alpha-Black</p>
              </div>
              <div className="divide-y divide-white/10">
                {rows.map(([k, v]) => (
                  <div key={k} className="px-6 py-5 grid md:grid-cols-3 gap-4">
                    <p className="text-gray-400 uppercase tracking-widest text-xs">{k}</p>
                    <p className="md:col-span-2 text-gray-200">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="relative h-24 rounded border border-white/10 bg-[#111]/70 overflow-hidden">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(166,59,255,0.08)_10px,rgba(166,59,255,0.08)_11px)]" />
                  <div className="absolute top-2 right-2 text-[10px] uppercase tracking-widest text-[#a63bff]">IAA SEAL</div>
                  <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
