import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import AnimatedBackground from './components/AnimatedBackground'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Artists from './pages/Artists'
import Services from './pages/Services'
import Contact from './pages/Contact'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="app">
      <AnimatedBackground />
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/artistas" element={<Artists />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}
