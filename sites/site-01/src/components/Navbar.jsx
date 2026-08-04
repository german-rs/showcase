import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__logo">
          LENS<span className="navbar__logo-accent">.</span>
        </NavLink>
        <ul className="navbar__links">
          <li><NavLink to="/" end>Inicio</NavLink></li>
          <li><NavLink to="/gallery">Galería</NavLink></li>
          <li><NavLink to="/about">Sobre mí</NavLink></li>
          <li><NavLink to="/contact">Contacto</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
