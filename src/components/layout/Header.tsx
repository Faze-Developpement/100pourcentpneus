import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Header.css"

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="header-inner container">
        <Link to="/" className="brand" onClick={close}>
          <img src={logo} alt="100% Pneus" className="brand-logo" />
        </Link>

        <button
          className={`nav-toggle${open ? " open" : ""}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav${open ? " nav-open" : ""}`}>
          <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} onClick={close}>Accueil</NavLink>
          <NavLink to="/services" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} onClick={close}>Services</NavLink>
          <NavLink to="/vehicules" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} onClick={close}>Location</NavLink>
          <NavLink to="/rendez-vous" className={({ isActive }) => `nav-link nav-link-cta${isActive ? " active" : ""}`} onClick={close}>Prendre RDV</NavLink>
        </nav>

        <a href="tel:+33XXXXXXXXX" className="header-tel">
          <span className="header-tel-label">Appeler</span>
          <span className="header-tel-num">02 XX XX XX XX</span>
        </a>
      </div>
    </header>
  )
}
