import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const panels = [
  {
    key: 'ghostfield',
    title: 'Ghostfield Projection',
    desc: 'Ravenmark generuje widmowe sygnały, zmuszając przeciwników do reagowania na nieistniejące zagrożenia.',
    visual: 'hologramy, echa radarowe, fałszywe obiekty',
    gradient: 'from-[#a63bff]/20 via-transparent to-transparent',
    img: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1400&auto=format&fit=crop',
  },
  {
    key: 'momentum',
    title: 'Combat Momentum Bias',
    desc: 'Manipuluje mikro-tempem walki, dezorganizując timing wrogich akcji.',
    visual: 'zakłócone siatki taktyczne, przestawione rytmy',
    gradient: 'from-[#6b0f1a]/25 via-transparent to-transparent',
    img: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=1400&auto=format&fit=crop',
  },
  {
    key: 'threat',
    title: 'Threat Reassignment',
    desc: 'Zmienia kierunek wrogiego ognia i uwagę przeciwników poprzez manipulację postrzeganym ryzykiem.',
    visual: 'przeskakujące markery celu, zmiany kolorów zagrożeń',
    gradient: 'from-[#3a3f47]/25 via-transparent to-transparent',
    img: 'https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1400&auto=format&fit=crop',
  },
]

export default function Skills() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main className="pt-28">
        {panels.map((p, i) => (
          <section key={p.key} className="relative">
            <div className="absolute inset-0 opacity-30">
              <img src={p.img} alt="" className="w-full h-full object-cover" />
            </div>
            <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative max-w-7xl mx-auto px-4 py-24">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl">
                <h2 className="text-4xl font-bold mb-4 drop-shadow-[0_0_20px_#a63bff44]">{p.title}</h2>
                <p className="text-gray-300 mb-3">{p.desc}</p>
                <p className="text-sm text-[#a63bff] uppercase tracking-widest">Wizualizacja: {p.visual}</p>
              </motion.div>
            </div>
          </section>
        ))}

        <section className="relative">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(166,59,255,0.12),transparent)] animate-pulse" />
          <div className="relative max-w-7xl mx-auto px-4 py-28">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
              <h2 className="text-5xl font-extrabold mb-6">Ultimate: Phantom Warzone</h2>
              <p className="max-w-3xl mx-auto text-gray-300">
                "Ravenmark wywołuje pełnoobszarową strefę dezorientacji, w której przeciwnicy tracą koordynację, a sojusznicy stają się taktycznie niewidoczni. Pole walki zostaje przejęte bez bezpośredniej konfrontacji."
              </p>
              <div className="mt-10 h-48 rounded-xl border border-[#a63bff]/40 bg-[#0b0b0b] overflow-hidden relative">
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="absolute inset-0 mix-blend-screen bg-[repeating-linear-gradient(0deg,rgba(166,59,255,0.25)_0px,rgba(166,59,255,0.25)_1px,transparent_1px,transparent_2px)] animate-[glitch_2s_infinite]" />
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-[#a63bff]/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
