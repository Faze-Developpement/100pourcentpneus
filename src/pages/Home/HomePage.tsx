import { Link } from "react-router-dom"
import backgroundVideo from "../../assets/background.mp4"
import "./Home.css"

const TICKER_ITEMS = [
  "Pneus Tourisme",
  "4×4 & Utilitaires",
  "Pare-Brise",
  "Vitrage Latéral",
  "Location de Véhicules",
  "Géométrie Laser",
  "Elbeuf — 76500",
  "Réparation Mobile",
]

export default function HomePage() {
  return (
    <main className="home">
      <div className="home-video" aria-hidden="true">
        <video autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>

      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="tag">Expertise Pneus & Vitrage — Elbeuf</span>
            <h1 className="hero-title">
              <span>Maintenance</span>
              <span className="hero-title-accent">&amp;</span>
              <span>Location</span>
              <span>Automobile.</span>
            </h1>
            <p className="hero-text">
              Interventions de précision sur pneumatiques, vitrages et location.
              Équipement industriel pour une sécurité sans compromis.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Prendre RDV</Link>
              <a className="btn btn-outline" href="tel:+33987586865">09 87 58 68 65</a>
            </div>
            <div className="hero-pills">
              <span className="pill">Réparation automobile</span>
              <span className="pill">Location</span>
              <span className="pill">Fournisseurs partenaires</span>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-card">
              <h2 className="hero-card-title">
                Pneus, vitrage et location —{" "}
                <span className="highlight">service rapide et local</span>
              </h2>
              <p className="hero-lead">
                Intervention sur rendez-vous ou en urgence.
                Véhicules particuliers, utilitaires et 4×4.
              </p>
              <ul className="hero-list">
                <li>Changement et réparation de pneus</li>
                <li>Remplacement pare-brise et vitrages</li>
                <li>Véhicules de location disponibles</li>
              </ul>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary">Prendre rendez-vous</Link>
                <a href="tel:+33987586865" className="btn btn-outline">09 87 58 68 65</a>
              </div>
            </div>
          </div>
        </div>

        {/* Infinite ticker marquee */}
        <div className="hero-ticker" aria-hidden="true">
          <div className="hero-ticker-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="ticker-item">
                <span className="ticker-dot">◆</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Ce que nous faisons</p>
            <h2 className="section-title">Prestations</h2>
            <p className="section-lead">Équipement professionnel, techniciens certifiés, délais maîtrisés.</p>
          </div>
          <div className="services-grid">
            <article className="service-card">
              <div className="service-num">01</div>
              <h3>Pneumatiques</h3>
              <p>Montage industriel, parallélisme et géométrie laser. Tous types de véhicules.</p>
            </article>
            <article className="service-card">
              <div className="service-num">02</div>
              <h3>Vitrages</h3>
              <p>Remplacement certifié et réparation d'impacts résine haute pression.</p>
            </article>
            <article className="service-card">
              <div className="service-num">03</div>
              <h3>Location</h3>
              <p>Location de véhicule citadin, sportives & autre selon stock disponible.</p>
            </article>
            <article className="service-card">
              <div className="service-num">04</div>
              <h3>Logistique Mobile</h3>
              <p>Déploiement technique sur site pour flottes professionnelles et particuliers.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section map-section">
        <div className="container">
          <div className="map-block">
            <div className="map-block-content">
              <p className="eyebrow">Notre atelier</p>
              <h2 className="section-title">Où sommes-nous ?</h2>
              <p className="section-lead">60 Cours Carnot, 76500 Elbeuf, France</p>
              <div className="map-info-row">
                <div className="map-info-item">
                  <span className="map-info-label">Horaires</span>
                  <span className="map-info-value">Lun – Sam · 8h–19h</span>
                </div>
                <div className="map-info-item">
                  <span className="map-info-label">Téléphone</span>
                  <span className="map-info-value">09 87 58 68 65</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">Nous contacter</Link>
            </div>
            <div className="map-block-iframe">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7477.519444404036!2d1.0104611296782124!3d49.2889533879252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e11fef9cb3dced%3A0xb7372a9c8a7c2fa!2s100%25%20PNEUS%20100%25%20PARE-BRISE!5e1!3m2!1sfr!2sus!4v1770491407720!5m2!1sfr!2sus"
                loading="lazy"
                title="Localisation 100% Pneus"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
