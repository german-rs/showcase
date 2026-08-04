import { Helmet } from 'react-helmet-async'
import './Contact.css'

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contacto | Lens Photography</title>
        <meta name="description" content="Contacta para sesiones fotográficas." />
      </Helmet>
      <section className="section contact">
        <div className="container text-center">
          <h2>Contacto</h2>
          <p className="contact__text">Email: tuemail@ejemplo.com</p>
        </div>
      </section>
    </>
  )
}

export default Contact
