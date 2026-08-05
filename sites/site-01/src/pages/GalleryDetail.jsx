import { useParams } from 'react-router-dom'

// Placeholder: la construimos completa en un próximo paso
// (grid masonry de 3 columnas, como la galería individual de referencia).
function GalleryDetail() {
  const { slug } = useParams()

  return (
    <section className="container" style={{ padding: '8rem 0 4rem' }}>
      <h1 className="section-title">Galería: {slug}</h1>
      <p>Esta página se construye en el próximo paso.</p>
    </section>
  )
}

export default GalleryDetail