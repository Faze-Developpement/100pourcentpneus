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
              Interventions de précision sur pneumatiques, vitrages et systèmes ADAS. 
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
              <h3>Disponibilité</h3>
              <p>
                Protocoles rigoureux et suivi technique systématique. 
                Résultats garantis conformes constructeurs.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <strong>24H</strong>
                  <span>Réactivité</span>
                </div>
                <div className="stat">
                  <strong>1200</strong>
                  <span>Véhicules</span>
                </div>
                <div className="stat">
                  <strong>100%</strong>
                  <span>Conformité</span>
                </div>
              </div>
            </div>
            <div className="hero-strip">
              <div>• PNEUS : TOURISME | 4X4 | UTILITAIRES</div>
              <div>• VITRAGE : PARE-BRISE | LATÉRAL | LUNETTE</div>
              <div>• TECHNIQUE : CALIBRAGE ADAS</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Unités de service</p>
            <h2 className="section-title">Prestations Techniques</h2>
          </div>
          <div className="card-grid">
            <article className="service-card">
              <div className="service-icon">01</div>
              <h3>Pneumatiques</h3>
              <p>Montage industriel, équilibrage dynamique et géométrie laser.</p>
            </article>
            <article className="service-card">
              <div className="service-icon">02</div>
              <h3>Vitrages</h3>
              <p>Remplacement certifié et réparation d'impacts résine haute pression.</p>
            </article>
            <article className="service-card">
              <div className="service-icon">03</div>
              <h3>Systèmes ADAS</h3>
              <p>Recalibrage des caméras et capteurs après changement de vitrage.</p>
            </article>
            <article className="service-card">
              <div className="service-icon">04</div>
              <h3>Logistique Mobile</h3>
              <p>Déploiement technique sur site pour flottes et particuliers.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="container trust-grid">
          <div className="trust-content">
            <p className="eyebrow">Standards de qualité</p>
            <h2 className="section-title">Rigueur Opérationnelle</h2>
            <p className="section-lead">
              Sélection stricte des composants et transparence tarifaire totale.
            </p>
            <ul className="trust-list">
              <li>Composants certifiés origine constructeur.</li>
              <li>Gestion administrative directe avec assurances.</li>
              <li>Double contrôle qualité post-intervention.</li>
              <li>Traçabilité complète des prestations.</li>
            </ul>
          </div>
          <div className="trust-cards">
            <div className="trust-card">
              <h3>Gestion Flotte</h3>
              <p>Contrats de maintenance préventive pour entreprises.</p>
              <Link to="/contact" className="btn btn-outline">Espace Pro</Link>
            </div>
            <div className="trust-card alt">
              <h3>Service Particulier</h3>
              <p>Barèmes fixes et diagnostic technique immédiat.</p>
              <Link to="/contact" className="btn btn-primary">Prendre RDV</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Protocole</p>
            <h2 className="section-title">Flux d'intervention</h2>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <span className="step">01</span>
              <h3>Diagnostic</h3>
              <p>Analyse du besoin et validation technique.</p>
            </div>
            <div className="process-card">
              <span className="step">02</span>
              <h3>Chiffrage</h3>
              <p>Établissement du devis ferme sans frais cachés.</p>
            </div>
            <div className="process-card">
              <span className="step">03</span>
              <h3>Exécution</h3>
              <p>Réalisation selon normes de sécurité strictes.</p>
            </div>
            <div className="process-card">
              <span className="step">04</span>
              <h3>Validation</h3>
              <p>Contrôle de sortie et remise du rapport.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-card">
          <div>
            <p className="eyebrow">Urgence ou Planification</p>
            <h2 className="section-title">Mise en relation technique</h2>
            <p className="section-lead">Intervention sous 24h à 48h selon stock.</p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-ghost">Formulaire</Link>
            <a className="btn btn-primary" href="tel:+33612345678">Appel Direct</a>
          </div>
        </div>
      </section>
    </main>
  )
}