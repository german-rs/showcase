import useScrollReveal from '../hooks/useScrollReveal'
import './Coverage.css'

// Lista de zonas cubiertas. Para agregar una ciudad más,
// solo se agrega un objeto nuevo aquí (no hace falta tocar el JSX de abajo).
const zones = [
  {
    city: 'Santiago',
    caption: 'Matrimonios en Santiago',
    image: 'https://picsum.photos/seed/wedding-santiago/700/900',
  },
  {
    city: 'Viña del Mar',
    caption: 'Matrimonios en Viña del Mar',
    image: 'https://picsum.photos/seed/wedding-vina/700/900',
  },
]

function Coverage() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="cobertura" className="coverage">
      <div
        ref={ref}
        className={`coverage__inner container ${visible ? 'reveal-visible' : 'reveal'}`}
      >
        <h2 className="section-title coverage__title">
          Cobertura: matrimonios en Santiago y alrededores
        </h2>

        <div className="coverage__grid">
          {zones.map((zone) => (
            <figure key={zone.city} className="coverage__item">
              <img src={zone.image} alt={zone.caption} loading="lazy" />
              <figcaption>{zone.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Coverage