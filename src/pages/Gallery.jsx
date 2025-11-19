import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const items = [
  { title: 'Sylwetka Ravenmarka', img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Pola walki z zakłóceniami', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Interfejsy taktyczne', img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Wykresy percepcji wroga', img: 'https://images.unsplash.com/photo-1534684681847-056b1b2d7c15?q=80&w=1400&auto=format&fit=crop' },
]

export default function Gallery() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main className="pt-28">
        <section className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((it, idx) => (
              <motion.figure key={it.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#0b0b0b]">
                <img src={it.img} alt="" className="h-56 w-full object-cover opacity-90 group-hover:opacity-100 transition" />
                <figcaption className="p-4 text-sm text-gray-300 flex items-center justify-between">
                  <span>{it.title}</span>
                  <span className="text-[#a63bff]">⟶</span>
                </figcaption>
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition bg-[linear-gradient(120deg,transparent_0%,rgba(166,59,255,0.2)_50%,transparent_100%)]" />
              </motion.figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
