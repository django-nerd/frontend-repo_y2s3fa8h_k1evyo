import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Profile from '../components/Profile'
import Palette from '../components/Palette'
import SkillsGrid from '../components/SkillsGrid'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <Hero />
      <Profile />
      <Palette />
      <SkillsGrid />
      <Footer />
    </div>
  )
}
