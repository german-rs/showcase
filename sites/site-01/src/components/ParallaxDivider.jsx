import './ParallaxDivider.css'

// Componente reutilizable: recibe la imagen como "prop" para poder
// usarlo varias veces con fotos distintas (ej. un segundo divisor más
// adelante) sin duplicar el componente.
//
// "quote" es opcional: si no se le pasa texto, el divisor queda
// puramente visual (como en la referencia).
function ParallaxDivider({ image, quote }) {
  return (
    <section
      className="parallax-divider"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Curva superior: mezcla con el color de la sección de ARRIBA (Coverage) */}
      <div className="parallax-divider__wave parallax-divider__wave--top" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,90 1080,-10 1440,40 L1440,0 L0,0 Z" fill="var(--color-bg)" />
        </svg>
      </div>

      {/* Capa oscura semi-transparente para que cualquier texto encima se lea bien */}
      <div className="parallax-divider__overlay" />

      {quote && <p className="parallax-divider__quote container">{quote}</p>}

      {/* Curva inferior: mezcla con el color de la sección de ABAJO (Portafolio, próximo paso) */}
      <div className="parallax-divider__wave parallax-divider__wave--bottom" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,-10 1080,90 1440,40 L1440,80 L0,80 Z" fill="var(--color-bg-alt)" />
        </svg>
      </div>
    </section>
  )
}

export default ParallaxDivider