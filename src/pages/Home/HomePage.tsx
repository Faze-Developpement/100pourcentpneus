import { Link } from "react-router-dom"
import "./Home.css"

export default function HomePage() {
  return (
    <main className="home">
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="tag">Garage specialisé pneus | pare-brise</span>
            <h1 className="hero-title">Votre garage pour rouler serein.</h1>
            <p className="hero-text">
              Diagnostic rapide, pieces certifiees et intervention mobile.
              Nous gerons vos pneus, vitrages et capteurs ADAS en un seul passage.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Prendre rendez-vous</Link>
              <a className="btn btn-outline" href="tel:+33612345678">06 12 34 56 78</a>
            </div>
            <div className="hero-pills">
              <span className="pill">Devis clair en 10 min</span>
              <span className="pill">Atelier + mobile</span>
              <span className="pill">Assurances partenaires</span>
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-card">
              <h3>Intervention rapide</h3>
              <p>
                Atelier equipe, equipee mobile et suivi photo avant/apres pour
                garantir un service propre et pro.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <strong>24/48h</strong>
                  <span>Delai moyen</span>
                </div>
                <div className="stat">
                  <strong>+1200</strong>
                  <span>Clients servis</span>
                </div>
                <div className="stat">
                  <strong>100%</strong>
                  <span>Satisfactions</span>
                </div>
              </div>
            </div>
            <div className="hero-strip">
              <div>Pneus tourisme | 4x4 | utilitaires</div>
              <div>Pare-brise | vitres laterales | lunette</div>
              <div>Calibrage ADAS</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Nos services</p>
              <h2 className="section-title">Tout pour la securité de votre vehicule</h2>
              <p className="section-lead">
                Une equipe polyvalente, des pièces haut de gamme et des conseils clairs.
              </p>
            </div>
          </div>
          <div className="card-grid">
            <article className="card service-card">
              <div className="service-icon">01</div>
              <h3>Pneus toutes marques</h3>
              <p>Montage, équilibrage, géometrie et stockage saisonnier.</p>
            </article>
            <article className="card service-card">
              <div className="service-icon">02</div>
              <h3>Pare-brise & vitrage</h3>
              <p>Réparation impact, remplacement complet, joints et essuie-glaces.</p>
            </article>
            <article className="card service-card">
              <div className="service-icon">03</div>
              <h3>Calibrage ADAS</h3>
              <p>Remise a niveau des capteurs après remplacement vitrage.</p>
            </article>
            <article className="card service-card">
              <div className="service-icon">04</div>
              <h3>Atelier mobile</h3>
              <p>Intervention sur place pour particuliers et flottes.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="container trust-grid">
          <div className="trust-content">
            <p className="eyebrow">Pourquoi nous</p>
            <h2 className="section-title">Un garage qui respecte vos delais.</h2>
            <p className="section-lead">
              Diagnostic avant intervention, choix transparent et suivi client.
            </p>
            <ul className="trust-list">
              <li>Pieces certifiées et garanties.</li>
              <li>Prise en charge assurance simplifiée.</li>
              <li>Vehicule propre et controle final.</li>
              <li>Disponibilite rapide même en urgence.</li>
            </ul>
          </div>
          <div className="trust-cards">
            <div className="card trust-card">
              <h3>Service entreprise</h3>
              <p>Gestion flotte, contrats entretien</p>
              <Link to="/contact" className="btn btn-outline">Demander un devis</Link>
            </div>
            <div className="card trust-card alt">
              <h3>Service particulier</h3>
              <p>Tarifs adaptes, paiement et conseil personnalise.</p>
              <Link to="/contact" className="btn btn-primary">Voir les offres</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Process</p>
              <h2 className="section-title">Simple, rapide, efficace</h2>
            </div>
          </div>
          <div className="process-grid">
            <div className="card process-card">
              <span className="step">1</span>
              <h3>Prise de contact</h3>
              <p>Telephone ou formulaire, on confirme le besoin.</p>
            </div>
            <div className="card process-card">
              <span className="step">2</span>
              <h3>Devis clair</h3>
              <p>Prix annonce avant intervention, sans surprise.</p>
            </div>
            <div className="card process-card">
              <span className="step">3</span>
              <h3>Intervention</h3>
              <p>Atelier ou mobile, execution rapide et soignee.</p>
            </div>
            <div className="card process-card">
              <span className="step">4</span>
              <h3>Controle final</h3>
              <p>Verification et conseils pour prolonger la duree.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-card">
          <div>
            <p className="eyebrow">Besoin d'un rendez-vous ?</p>
            <h2 className="section-title">On planifie votre passage aujourd'hui</h2>
            <p className="section-lead">Reponse rapide, prise en charge directe.</p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">Contact</Link>
            <a className="btn btn-ghost" href="tel:+33612345678">Appeler</a>
          </div>
        </div>
      </section>
    </main>
  )
}
