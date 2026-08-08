import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Coverage from '../components/Coverage'
import ParallaxDivider from '../components/ParallaxDivider'
import Portfolio from '../components/Portfolio'
import Testimonials from "../components/Testimonials";
import testimonials from "../data/testimonials";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import faq from "../data/faq";

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
      <ParallaxDivider image="https://fotorama.cl/boda/wp-content/uploads/2025/12/50-DSC09835.jpg" />
      <Portfolio />
      <ParallaxDivider image="https://images.unsplash.com/photo-1512281744869-ddfd5b9cf041?auto=format&fit=crop&w=1600&q=80" />
      <Testimonials
        title="Lo que dicen nuestros clientes"
        testimonials={testimonials}
      />
      <CTA />
      <FAQ title="Antes de escribirnos" items={faq} />
      {/* Contacto */}
    </>
  )
}

export default Home