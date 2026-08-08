import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="/" className="footer__logo" aria-label="Volver al inicio">
            Aurora<span> Fotografía</span>
          </a>

          <p className="footer__tagline">
            Fotografía que cuenta historias.
          </p>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} germanriveros.cl
          </p>

          <p>
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

