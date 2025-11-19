export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-[#a63bff]/40">
      <div className="absolute top-0 inset-x-0 h-px bg-[#a63bff]" />
      <div className="max-w-7xl mx-auto px-4 py-10 text-gray-400">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-sm">IAA – International Affairs Agency | Wydział Operacji Taktycznych</p>
          <nav className="text-sm flex flex-wrap gap-4">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/umiejetnosci" className="hover:text-white">Umiejętności</a>
            <a href="/dossier" className="hover:text-white">Dossier IAA</a>
            <a href="/galeria" className="hover:text-white">Galeria</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
