import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Coverage from '../components/Coverage'

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
      {/* Próximos pasos: divisor parallax,
          Portafolio, Testimonios, FAQ, Contacto */}
    </>
  )
}

export default Home
