import { Link } from "react-router-dom"
import "./Services.css"

const SERVICES = [
  { num: "01", titre: "Pneumatiques", items: ["Montage & équilibrage", "Permutation saison", "Réparation crevaison", "Pneus été / hiver / 4 saisons", "Toutes marques disponibles"] },
  { num: "02", titre: "Pare-brise", items: ["Remplacement toutes marques", "Réparation impact", "Prise en charge assurance", "Recalibrage caméra ADAS", "Pose le jour même"] },
  { num: "03", titre: "Lavage", items: ["Lavage extérieur haute pression", "Nettoyage intérieur complet", "Polish carrosserie", "Lustrage & traitement", "Désodorisation habitacle"] },
  { num: "04", titre: "Pièces & Accessoires", items: ["Pièces d'origine constructeur", "Équivalents qualité premium", "Commande sous 24h", "Accessoires & équipements", "Conseil technique"] },
  { num: "05", titre: "Démarches Admin.", items: ["Carte grise", "Changement de titulaire", "Duplicata", "Déclaration de cession", "Immatriculation neuf"] },
  { num: "06", titre: "Location Sportive", items: ["Mercedes A35 AMG · 306 ch", "Volkswagen Golf 8 R · 333 ch", "Renault Clio 5 · 140 ch", "Location journée / week-end", "Tarifs sur demande"] },
]

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Ce que nous faisons</p>
          <h1 className="section-title">Nos services</h1>
          <p className="section-lead">Des prestations complètes pour votre véhicule, réalisées par des techniciens qualifiés.</p>
        </div>
      </section>

      <section className="section services-grid-section">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map(s => (
              <div key={s.num} className="service-block">
                <span className="service-block-num">{s.num}</span>
                <h2 className="service-block-titre">{s.titre}</h2>
                <ul className="service-block-list">
                  {s.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <h2 className="services-cta-title">Un besoin précis ?</h2>
          <p className="services-cta-sub">Contactez-nous ou prenez directement rendez-vous en ligne.</p>
          <div className="services-cta-btns">
            <Link to="/rendez-vous" className="btn btn-primary">Prendre RDV</Link>
            <a href="tel:+33XXXXXXXXX" className="btn btn-outline">Appeler</a>
          </div>
        </div>
      </section>
    </>
  )
}
