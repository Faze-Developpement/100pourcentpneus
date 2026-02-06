import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>100% Pneus 100% Pare-Brise</h3>
          <p>
            Garage spécialisé pneus, pare-brise et intervention mobile.
            Devis rapide, pièces certifiées, service premium.
          </p>
          <div className="footer-badges">
            <span>Fournisseurs partenaires</span>
            <span>Atelier & Location</span>
          </div>
        </div>
        <div className="footer-links">
          <h4>Navigation</h4>
          <Link to="/">Accueil</Link>
          <Link to="/location">Location</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <a href="tel:+33987586865">09 87 58 68 65</a>
          <a href="mailto:contact@100pourcentpneus.fr">contact@100pourcentpneus.fr</a>
          <span>60 Cours Carnot, Elbeuf 76500</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 100% Pneus 100% Pare-brise. Tous droits réservés.</span>
        <span>Ouvert lun–sam | 8 h – 19 h</span>
      </div>
    </footer>
  )
}
