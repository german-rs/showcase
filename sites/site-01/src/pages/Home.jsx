import { Helmet } from 'react-helmet-async'
import './Home.css'

function Home() {
  return (
    <>
      <Helmet>
        <title>Inicio | Lens Photography</title>
        <meta name="description" content="Portafolio fotográfico profesional. Capturando momentos únicos." />
      </Helmet>
      <section className="hero">
        <div className="container">
          <h1 className="hero__title">Capturando la esencia de cada momento</h1>
          <p className="hero__subtitle">Fotografía profesional para quienes valoran el arte visual</p>
        </div>
      </section>
    </>
  )
}

export default Home
