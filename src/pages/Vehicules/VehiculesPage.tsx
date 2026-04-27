import { Link } from "react-router-dom"
import "./Vehicules.css"

const VEHICULES = [
  {
    nom: "Mercedes A35 AMG",
    puissance: "306 ch",
    couple: "400 Nm",
    transmission: "4MATIC",
    boite: "AMG Speedshift DCT 7G",
    acceleration: "4.7 s (0→100)",
    cat: "Sport",
    desc: "La berline compacte qui ne fait aucun compromis. 306 ch sous le capot, 4 roues motrices, sons de sportive.",
  },
  {
    nom: "Volkswagen Golf 8 R",
    puissance: "333 ch",
    couple: "420 Nm",
    transmission: "4Motion",
    boite: "DSG7",
    acceleration: "4.6 s (0→100)",
    cat: "Performance",
    desc: "La référence. 333 chevaux disciplinés par le système 4Motion, pour une conduite précise sur tous les terrains.",
  },
  {
    nom: "Renault Clio 5",
    puissance: "140 ch",
    couple: "240 Nm",
    transmission: "Traction",
    boite: "EDC7",
    acceleration: "8.8 s (0→100)",
    cat: "Premium",
    desc: "Élégante et agile. La Clio 5 est la porte d'entrée idéale vers l'expérience de location premium.",
  },
]

export default function VehiculesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Flotte disponible</p>
          <h1 className="section-title">Location de véhicules</h1>
          <p className="section-lead">Des sportives sélectionnées pour leur caractère. Disponibles à la journée ou au week-end.</p>
        </div>
      </section>

      <section className="section vehicules-section">
        <div className="container">
          <div className="vehicules-grid">
            {VEHICULES.map(v => (
              <div key={v.nom} className="vehicule-detail-card">
                <div className="vehicule-detail-img">
                  <span className="tag">{v.cat}</span>
                  <span className="vehicule-photo-placeholder">Photo à venir</span>
                </div>
                <div className="vehicule-detail-body">
                  <h2 className="vehicule-detail-nom">{v.nom}</h2>
                  <p className="vehicule-detail-desc">{v.desc}</p>
                  <div className="vehicule-specs-grid">
                    <div className="spec"><span className="spec-label">Puissance</span><span className="spec-val">{v.puissance}</span></div>
                    <div className="spec"><span className="spec-label">Couple</span><span className="spec-val">{v.couple}</span></div>
                    <div className="spec"><span className="spec-label">Transmission</span><span className="spec-val">{v.transmission}</span></div>
                    <div className="spec"><span className="spec-label">Boîte</span><span className="spec-val">{v.boite}</span></div>
                    <div className="spec"><span className="spec-label">0→100</span><span className="spec-val">{v.acceleration}</span></div>
                  </div>
                  <Link to="/contact" className="btn btn-primary vehicule-cta">Demander un tarif</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vehicules-conditions">
        <div className="container">
          <p className="eyebrow">Conditions de location</p>
          <div className="conditions-grid">
            {["Permis B depuis 2 ans minimum", "Caution par empreinte CB", "Kilométrage limité (en fonction du véhicule)", "Assurance tous risques incluse"].map(c => (
              <div key={c} className="condition-item">
                <span className="condition-dot" />{c}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
