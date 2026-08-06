import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import './Portfolio.css'

// Fotos de vista previa (placeholder). Se reemplazan por el trabajo
// real del cliente cuando esta plantilla se entrega a un fotógrafo.
const photos = [
  'https://fotorama.cl/boda/wp-content/uploads/2025/09/36-fotografo-de-matrimonios-Casona-Anwandter.jpg',
  'https://fotorama.cl/boda/wp-content/uploads/2025/12/DSC09796.jpg',
  'https://fotorama.cl/boda/wp-content/uploads/2025/09/fotografo-de-matrimonio124.jpg',
  'https://fotorama.cl/boda/wp-content/uploads/2025/09/13-fotografo-de-matrimonios-Casona-Anwandter.jpg',
  'https://fotorama.cl/boda/wp-content/uploads/2024/10/Fotorama-boda-DH-8-7.jpg',
  'https://fotorama.cl/boda/wp-content/uploads/2024/10/Fotorama-boda-DH-47-5.jpg',
]

function Portfolio() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="portafolio" className="portfolio">
      <div
        ref={ref}
        className={`portfolio__inner container ${visible ? 'reveal-visible' : 'reveal'}`}
      >
        <h2 className="section-title portfolio__title">
          Fotografías de matrimonios que hemos capturado
        </h2>

        <div className="portfolio__grid">
          {photos.map((src, index) => (
            <div key={src} className="portfolio__item">
              <img
                src={src}
                alt={`Fotografía de matrimonio ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Link (no <a>): navega a otra ruta de la app sin recargar la página */}
        <Link to="/galeria/matrimonio-de-ejemplo" className="btn btn--dark portfolio__cta">
          Ver nuestro portafolio
        </Link>
      </div>
    </section>
  )
}

export default Portfolio