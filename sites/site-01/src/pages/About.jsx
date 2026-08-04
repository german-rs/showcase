import { Helmet } from 'react-helmet-async'
import './About.css'

function About() {
  return (
    <>
      <Helmet>
        <title>Sobre mí | Lens Photography</title>
        <meta name="description" content="Conoce al fotógrafo detrás del lente." />
      </Helmet>
      <section className="section about">
        <div className="container text-center">
          <h2>Sobre mí</h2>
          <p className="about__text">Aquí irá tu biografía como fotógrafo.</p>
        </div>
      </section>
    </>
  )
}

export default About
