import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import './Portfolio.css'

// Fotos de vista previa (placeholder). Se reemplazan por el trabajo
// real del cliente cuando esta plantilla se entrega a un fotógrafo.
const photos = [
  'https://picsum.photos/seed/wedding-01/500/500',
  'https://picsum.photos/seed/wedding-02/500/500',
  'https://picsum.photos/seed/wedding-03/500/500',
  'https://picsum.photos/seed/wedding-04/500/500',
  'https://picsum.photos/seed/wedding-05/500/500',
  'https://picsum.photos/seed/wedding-06/500/500',
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