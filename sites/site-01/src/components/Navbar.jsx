import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

// Nav por anclas: todo vive en la Home de una sola página.
const links = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Portafolio', href: '/#portafolio' },
  { label: 'Testimonios', href: '/#testimonios' },
  { label: 'Contacto', href: '/#contacto' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          Aurora <span className="navbar__logo-accent">Fotografía</span>
        </Link>
    
        <button
          type="button"
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <Link key={link.href} to={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar