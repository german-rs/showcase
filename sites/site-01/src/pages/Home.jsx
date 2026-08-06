import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Coverage from '../components/Coverage'
import ParallaxDivider from '../components/ParallaxDivider'
import Portfolio from '../components/Portfolio'

function Home() {
  const location = useLocation()

  // Si llegamos con un hash (#nosotros, #contacto, etc.) desde otra página,
  // hacemos scroll hasta esa sección una vez que el DOM está listo.
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
  }, [location])

  return (
    <>
      <Hero />
      <About />
      <Coverage />
      <ParallaxDivider image="https://loremflickr.com/1600/800/wedding,party" />
      <Portfolio />
      {/* Próximos pasos: Testimonios, FAQ, Contacto */}
    </>
  )
}

export default Home
