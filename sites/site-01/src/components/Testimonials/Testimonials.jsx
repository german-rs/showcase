import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonials({ title, testimonials }) {
  return (
    <section id="testimonios" className="testimonials">
      <div className="container">
       <header className="testimonials__header">
        <p className="section-eyebrow">Testimonios</p>
        <h2 className="section-title">{title}</h2>
      </header>

        {/* Navigation y Pagination dan control manual (flechas + puntos), y
            pauseOnMouseEnter detiene el autoplay al pasar el mouse o el foco
            del teclado. Un carrusel que avanza solo sin forma de detenerlo
            no cumple el criterio WCAG 2.2.2 (Pausar, detener, ocultar). */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
          navigation
          pagination={{ clickable: true }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <article className="testimonial-card">
                <div
                  className="testimonial-card__rating"
                  aria-label={`${testimonial.rating} de 5 estrellas`}
                >
                  {"★".repeat(testimonial.rating)}
                </div>

                <p className="testimonial-card__quote">
                  "{testimonial.quote}"
                </p>

                <div className="testimonial-card__author">
                  <img
                    src={`${import.meta.env.BASE_URL}${testimonial.image}`}
                    alt={testimonial.name}
                    loading="lazy"
                  />
                  <div>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;