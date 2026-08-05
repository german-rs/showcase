import useScrollReveal from '../hooks/useScrollReveal'
import './About.css'

// Cifras placeholder: reemplazar por los datos reales de cada cliente.
const stats = [
  { value: '+10', label: 'años de trayectoria' },
  { value: '+300', label: 'matrimonios fotografiados' },
  { value: '5.0', label: 'estrellas en Google' },
]

function About() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="nosotros" className="about">
      <div
        ref={ref}
        className={`about__inner container ${visible ? 'reveal-visible' : 'reveal'}`}
      >
        <div className="about__intro">
          <p className="section-eyebrow">Fotógrafos de matrimonios en Santiago</p>
          <h2 className="about__heading">
            Somos Emilia y Tomás: fotografía documental, sin poses forzadas
          </h2>
        </div>

        <div className="about__body">
          <p>
            Capturamos las emociones reales de tu matrimonio: las risas, las
            lágrimas y los abrazos que aparecen solo cuando nadie está
            posando. Trabajamos con un estilo documental que sigue el ritmo
            del día, sin interrumpir los momentos que importan.
          </p>
          <p>
            Te acompaña un equipo pequeño y cercano, pensado para que te
            sientas cómodo frente a la cámara desde la primera reunión hasta
            la entrega final.
          </p>

          <a href="#portafolio" className="btn btn--dark">
            Conoce más de nosotros
          </a>

          <div className="about__stats">
            {stats.map((stat) => (
              <div key={stat.label} className="about__stat">
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About