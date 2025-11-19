import Home from './pages/Home'
import Skills from './pages/Skills'
import Dossier from './pages/Dossier'
import Gallery from './pages/Gallery'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/umiejetnosci" element={<Skills />} />
      <Route path="/dossier" element={<Dossier />} />
      <Route path="/galeria" element={<Gallery />} />
    </Routes>
  )
}

export default App
