import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="container">

        <div className="cta__content">

          <p className="section-eyebrow">
            Reserva tu fecha
          </p>

          <h2 className="section-title">
            ¿Listos para contar su historia?
          </h2>

          <p className="cta__text">
            Cada matrimonio merece ser recordado de forma auténtica.
            Conversemos y creemos juntos un registro que perdure para siempre.
          </p>

          <a href="#contacto" className="btn btn--accent">
            Reservar una reunión
          </a>

        </div>

      </div>
    </section>
  );
}

export default CTA;