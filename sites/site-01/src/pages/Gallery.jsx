import { Helmet } from 'react-helmet-async'
import './Gallery.css'

function Gallery() {
  return (
    <>
      <Helmet>
        <title>Galería | Lens Photography</title>
        <meta name="description" content="Galería de fotografía profesional." />
      </Helmet>
      <section className="section gallery">
        <div className="container">
          <h2 className="gallery__title">Galería</h2>
          <div className="gallery__grid">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="gallery__item">
                <div className="gallery__placeholder">Imagen {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
