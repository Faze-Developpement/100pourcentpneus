import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <img src={logo} alt="100% Pneus" className="footer-logo" />
          <p className="footer-tagline">Pneus · Pare-brise · Location sportive</p>
        </div>

        <nav className="footer-nav">
          <span className="footer-col-title">Navigation</span>
          <Link to="/">Accueil</Link>
          <Link to="/services">Services</Link>
          <Link to="/vehicules">Location</Link>
          <Link to="/rendez-vous">Prendre RDV</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer-services">
          <span className="footer-col-title">Nos services</span>
          <span>Pneus toutes marques</span>
          <span>Remplacement pare-brise</span>
          <span>Lavage professionnel</span>
          <span>Pièces détachées</span>
          <span>Démarches administratives</span>
        </div>

        <div className="footer-contact">
          <span className="footer-col-title">Contact</span>
          <a href="tel:+33XXXXXXXXX">02 XX XX XX XX</a>
          <address>XX rue XXXX<br />XXXXX Caen</address>
          <div className="footer-hours">
            <span>Lun–Ven · 8h–18h</span>
            <span>Sam · 9h–17h</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner container">
          <span>© {new Date().getFullYear()} 100% Pneus · 100% Pare-Brise</span>
          <Link to="/contact">Mentions légales</Link>
        </div>
      </div>
    </footer>
  )
}
