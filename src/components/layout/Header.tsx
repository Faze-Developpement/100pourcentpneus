import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Header.css"

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-section">
          <img src={logo} alt="100% Pneu" className="logo-img" />
          <div className="brand-text">
            <span className="brand-name">
              100% <span className="highlight">Pneu</span> | 100 % Pare-Brise
            </span>
            <span className="brand-subtitle">Bien plus qu'un travail, une passion !</span>
          </div>
        </Link>

        <nav className="nav-menu">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/location" className="nav-link">Location</Link>
          <Link to="/contact" className="nav-link contact-btn">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
