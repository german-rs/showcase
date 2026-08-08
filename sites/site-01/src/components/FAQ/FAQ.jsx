import { useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./FAQ.css";

function FAQ({ title, items }) {
  const [ref, visible] = useScrollReveal();
  // Guardamos el id de la pregunta abierta (o null si ninguna lo está).
  // Al guardar un solo valor, abrir una pregunta cierra automáticamente
  // cualquier otra que estuviera abierta.
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="faq">
      <div
        ref={ref}
        className={`faq__inner container ${visible ? "reveal-visible" : "reveal"}`}
      >
        <header className="faq__header">
          <p className="section-eyebrow">Preguntas frecuentes</p>
          <h2 className="section-title">{title}</h2>
        </header>

        <div className="faq__list">
          {items.map((item) => {
            const isOpen = item.id === openId;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;

            return (
              <div key={item.id} className="faq__item">
                <h3 className="faq__question-heading">
                  <button
                    type="button"
                    id={buttonId}
                    className="faq__question"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span>{item.question}</span>
                    <span className="faq__icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                {/* El wrapper con grid-template-rows es lo que permite animar
                    hacia una altura que no conocemos de antemano (el texto
                    de cada respuesta mide distinto). */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`faq__answer-wrapper ${isOpen ? "is-open" : ""}`}
                >
                  <div className="faq__answer-inner">
                    <p className="faq__answer">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;