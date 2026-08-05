import './Hero.css'

// TODO: reemplazar la imagen de fondo por una foto real de stock con licencia
// libre (ej. unsplash.com/s/photos/wedding-documentary) antes de entregar
// esto a un cliente real. Por ahora usa un placeholder genérico.
function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__overlay" />
      <div className="hero__content container">
        <p className="hero__eyebrow">Fotografía documental de bodas</p>
        <h1 className="hero__title">Cada boda, contada como fue</h1>
        <p className="hero__subtitle">
          Registramos tu matrimonio tal como sucede, sin poses forzadas.
        </p>
        <a href="#contacto" className="btn btn--accent">
          Conversemos
        </a>
      </div>
    </section>
  )
}

export default Hero