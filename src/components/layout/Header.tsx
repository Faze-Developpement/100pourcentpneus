import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Header.css"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const close = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-section" onClick={close}>
          <img src={logo} alt="100% Pneus" className="logo-img" />
          <div className="brand-text">
            <span className="brand-name">
              100% <span className="highlight">Pneus</span> | 100% Pare-Brise
            </span>
            <span className="brand-subtitle">Votre spécialiste pneumatique et vitrage</span>
          </div>
        </Link>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-menu${menuOpen ? " nav-open" : ""}`}>
          <Link to="/" className="nav-link" onClick={close}>Accueil</Link>
          <Link to="/location" className="nav-link" onClick={close}>Location</Link>
          <Link to="/contact" className="nav-link contact-btn" onClick={close}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}
