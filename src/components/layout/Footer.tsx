import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>100% Pneu 100% Pare-Brise</h3>
          <p>
            Garage specialise pneus, pare-brise et intervention mobile.
            Devis rapide, pieces certifiees, service premium.
          </p>
          <div className="footer-badges">
            <span>Assurances partenaires</span>
            <span>Atelier & mobile</span>
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
          <a href="tel:+33612345678">06 12 34 56 78</a>
          <a href="mailto:contact@100pourcentpneus.fr">contact@100pourcentpneus.fr</a>
          <span>Elbeuf, 76500</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>(c) 2026 100% Pneu. Tous droits reserves.</span>
        <span>Ouvert lun-sam | 8h-19h</span>
      </div>
    </footer>
  )
}
