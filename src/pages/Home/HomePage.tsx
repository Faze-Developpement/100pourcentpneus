import { Link } from "react-router-dom"
import backgroundVideo from "../../assets/background.mp4"
import "./Home.css"

export default function HomePage() {
  return (
    <main className="home">
      <div className="home-video" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="tag">Expertise Technique Pneus & Vitrage</span>
            <h1 className="hero-title">Maintenance & Location<br />automobile.</h1>
            <p className="hero-text">
              Interventions de précision sur pneumatiques, vitrages et location. 
              Équipement industriel pour une sécurité sans compromis.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Prendre RDV</Link>
              <a className="btn btn-outline" href="tel:+339875865">09 87 58 68 65</a>
            </div>
            <div className="hero-pills">
              <span className="pill">Réparation automobile</span>
              <span className="pill">Location</span>
              <span className="pill">Fournisseurs partenaires</span>
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-card">
              <h1>
                Pneus, vitrage et location<br />
                <span className="highlight">service rapide et local</span>
              </h1>

              <p className="hero-lead">
                Intervention sur rendez-vous ou en urgence.
                Véhicules particuliers, utilitaires et 4x4.
              </p>

              <ul className="hero-list">
                <li>Changement et réparation de pneus</li>
                <li>Remplacement pare-brise et vitrages</li>
                <li>Véhicules de location disponibles</li>
              </ul>

              <div className="hero-actions">
                <a href="/contact" className="btn btn-primary">Prendre rendez-vous</a>
                <a href="tel:01XXXXXXXX" className="btn btn-outline">Appeler</a>
              </div>
            </div>

            <div className="hero-strip">
              <div>PNEUS • TOURISME • 4X4 • UTILITAIRES</div>
              <div>VITRAGE • PARE-BRISE • LATÉRAL • LUNETTE</div>
              <div>LOCATION DE VÉHICULES</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Prestations</h2>
          </div>
          <div className="card-grid">
            <article className="service-card">
              <div className="service-icon">01</div>
              <h3>Pneumatiques</h3>
              <p>Montage industriel, parallélisme et géométrie laser.</p>
            </article>
            <article className="service-card">
              <div className="service-icon">02</div>
              <h3>Vitrages</h3>
              <p>Remplacement certifié et réparation d'impacts résine haute pression.</p>
            </article>
            <article className="service-card">
              <div className="service-icon">03</div>
              <h3>Location</h3>
              <p>Location de véhicule citadin, sportives & autre selon stock.</p>
            </article>
            <article className="service-card">
              <div className="service-icon">04</div>
              <h3>Logistique Mobile</h3>
              <p>Déploiement technique sur site pour flottes et particuliers.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="section-title">Où sommes-nous ?</h2>
              <p className="section-lead">
                60 Cours Carnot, 76500 Elbeuf, France
              </p>
            </div>

            <div className="cta-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7477.519444404036!2d1.0104611296782124!3d49.2889533879252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e11fef9cb3dced%3A0xb7372a9c8a7c2fa!2s100%25%20PNEUS%20100%25%20PARE-BRISE!5e1!3m2!1sfr!2sus!4v1770491407720!5m2!1sfr!2sus"
                width="800"
                height="600"
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}