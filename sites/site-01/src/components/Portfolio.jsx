import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import './Portfolio.css'

// Fotos de vista previa (placeholder). Se reemplazan por el trabajo
// real del cliente cuando esta plantilla se entrega a un fotógrafo.
const photos = [
  'https://loremflickr.com/400/400/wedding',
  'https://loremflickr.com/500/500/wedding,party',
  'https://loremflickr.com/600/600/wedding,party',
  'https://loremflickr.com/300/300/wedding,party',
  'https://loremflickr.com/200/200/wedding,party',
  'https://loremflickr.com/700/700/wedding,party',
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