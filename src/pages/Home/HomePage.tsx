import { Link } from "react-router-dom"
import bgVideo from "../../assets/background.mp4"
import "./Home.css"

const TICKER = ["Pneus toutes marques", "Remplacement pare-brise", "Lavage professionnel", "Location sportive", "Pièces détachées", "Démarches administratives", "Montage & équilibrage", "Diagnostic électronique"]
const TICKER_ITEMS = [...TICKER, ...TICKER]

const SERVICES = [
  { num: "01", titre: "Pneumatiques", desc: "Toutes marques, tous véhicules. Montage, équilibrage, permutation." },
  { num: "02", titre: "Pare-brise", desc: "Remplacement et réparation. Prise en charge assurance." },
  { num: "03", titre: "Lavage", desc: "Nettoyage intérieur/extérieur, polish, lustrage." },
  { num: "04", titre: "Pièces & Démarches", desc: "Pièces d'origine et équivalents. Cartes grises, démarches simplifiées." },
]

const VEHICULES = [
  { nom: "Mercedes A35 AMG", puissance: "306 ch", transmission: "4MATIC", cat: "Sport" },
  { nom: "Volkswagen Golf 8 R", puissance: "333 ch", transmission: "4Motion", cat: "Performance" },
  { nom: "Renault Clio 5", puissance: "140 ch", transmission: "EDC", cat: "Premium" },
]

export default function HomePage() {
  return (
    <>
      {/* ---- Hero vidéo ---- */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content container">
          <p className="hero-eyebrow eyebrow">Performance · Caen &amp; Région</p>
          <h1 className="hero-title">
            L'excellence<br />
            <span className="hero-accent">automobile</span>
          </h1>
          <p className="hero-lead">
            Pneus, pare-brise, entretien — et la location des sportives qui font rêver.
          </p>
          <div className="hero-ctas">
            <Link to="/rendez-vous" className="btn btn-primary">Prendre RDV</Link>
            <Link to="/vehicules" className="btn btn-outline">Voir les véhicules</Link>
          </div>
        </div>
        <div className="hero-ticker">
          <div className="hero-ticker-track">
            {TICKER_ITEMS.map((item, i) => (
              <span key={i} className="hero-ticker-item">
                {item} <span className="hero-ticker-dot">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Services ---- */}
      <section className="section home-services">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Nos prestations</p>
            <h2 className="section-title">Tout pour votre véhicule</h2>
            <p className="section-lead">Interventions rapides, techniciens qualifiés, devis gratuit.</p>
          </div>
          <div className="home-services-grid">
            {SERVICES.map(s => (
              <div key={s.num} className="service-card">
                <span className="service-num">{s.num}</span>
                <h3 className="service-titre">{s.titre}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="home-services-cta">
            <Link to="/services" className="btn btn-outline">Tous nos services</Link>
          </div>
        </div>
      </section>

      {/* ---- Véhicules ---- */}
      <section className="section home-vehicules">
        <div className="container">
          <div className="home-vehicules-header section-header">
            <div>
              <p className="eyebrow">Location premium</p>
              <h2 className="section-title">La flotte sportive</h2>
            </div>
            <Link to="/vehicules" className="btn btn-outline">Toute la flotte</Link>
          </div>
          <div className="home-vehicules-grid">
            {VEHICULES.map(v => (
              <Link key={v.nom} to="/vehicules" className="vehicule-card">
                <div className="vehicule-card-img">
                  <span className="vehicule-card-cat tag">{v.cat}</span>
                </div>
                <div className="vehicule-card-info">
                  <h3 className="vehicule-card-nom">{v.nom}</h3>
                  <div className="vehicule-card-specs">
                    <span>{v.puissance}</span>
                    <span>{v.transmission}</span>
                  </div>
                  <span className="vehicule-card-link">Voir le véhicule →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA RDV ---- */}
      <section className="home-rdv">
        <div className="container">
          <div className="home-rdv-inner">
            <div>
              <h2 className="home-rdv-title">Prêt à passer à la vitesse supérieure ?</h2>
              <p className="home-rdv-sub">Réservez en ligne en moins de 2 minutes.</p>
            </div>
            <div className="home-rdv-ctas">
              <Link to="/rendez-vous" className="btn btn-primary">Prendre rendez-vous</Link>
              <a href="tel:+33XXXXXXXXX" className="btn btn-outline">Appeler directement</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
