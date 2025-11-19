import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/umiejetnosci', label: 'Umiejętności' },
  { to: '/dossier', label: 'Dossier IAA' },
  { to: '/galeria', label: 'Galeria' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const activeClass = 'text-white'
  const baseClass = 'text-gray-300 hover:text-white transition-colors'

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur-md border-b border-[#a63bff]/30">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#6b0f1a] via-[#3a3f47] to-[#a63bff] shadow-[0_0_30px_#a63bff66]" />
          <div className="leading-tight">
            <p className="text-sm uppercase tracking-[0.25em] text-[#a63bff]">IAA Patron</p>
            <p className="text-white font-semibold">RAVENMARK</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `${isActive ? activeClass : baseClass} text-sm uppercase tracking-widest`}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="/umiejetnosci"
            className="ml-2 px-4 py-2 rounded border border-[#a63bff]/50 text-[#a63bff] hover:bg-[#a63bff]/10 transition"
          >
            Baza Taktyczna
          </a>
        </nav>

        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#a63bff]/30 bg-black/80">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `${isActive ? activeClass : baseClass} text-sm uppercase tracking-widest`}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="/umiejetnosci"
              className="px-4 py-2 rounded border border-[#a63bff]/50 text-[#a63bff] hover:bg-[#a63bff]/10 transition text-center"
              onClick={() => setOpen(false)}
            >
              Baza Taktyczna
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
