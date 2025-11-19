import { motion } from 'framer-motion'
import { Shield, Radar, ActivitySquare } from 'lucide-react'

export default function Profile() {
  return (
    <section id="profil" className="relative py-20 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(166,59,255,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Krótki profil</h2>
            <p className="text-gray-300 leading-relaxed">
              "Ravenmark to patron bojowy IAA, który nie atakuje bezpośrednio. Przekształca pole walki poprzez manipulację percepcją, tempem starcia i priorytetami zagrożeń przeciwnika, zapewniając przewagę operacyjną agentom w terenie."
            </p>
          </motion.div>
          <motion.div className="grid sm:grid-cols-3 gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>
            <div className="p-5 rounded-lg bg-[#3a3f47]/40 border border-[#3a3f47] text-gray-300">
              <Shield className="text-[#a63bff] mb-3" />
              <p className="text-sm">Półprzezroczyste panele taktyczne i protekcja informacyjna</p>
            </div>
            <div className="p-5 rounded-lg bg-[#3a3f47]/40 border border-[#3a3f47] text-gray-300">
              <Radar className="text-[#a63bff] mb-3" />
              <p className="text-sm">Echa sensorów, fałszywe sygnały i zakłócenia</p>
            </div>
            <div className="p-5 rounded-lg bg-[#3a3f47]/40 border border-[#3a3f47] text-gray-300">
              <ActivitySquare className="text-[#a63bff] mb-3" />
              <p className="text-sm">Kontrola rytmu i dynamiki operacji</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
