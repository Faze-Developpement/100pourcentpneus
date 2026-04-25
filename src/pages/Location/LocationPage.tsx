import backgroundVideo from "../../assets/background.mp4"
import "./Location.css"

export default function LocationPage() {
  return (
    <main className="location-page">
      <div className="location-video" aria-hidden="true">
        <video autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>

      <section className="location-hero">
        <div className="container location-hero-grid">
          <div className="location-hero-content">
            <p className="eyebrow">Location</p>
            <h1 className="section-title">Location rapide et simple</h1>
            <p className="section-lead">
              Véhicules disponibles pour dépannage, courte ou moyenne durée.
              Retrait express et options sur mesure.
            </p>
            <div className="location-hero-actions">
              <a className="btn btn-primary" href="/contact">Réserver</a>
              <a className="btn btn-outline" href="tel:+33987586865">09 87 58 68 65</a>
            </div>
            <div className="location-hero-pills">
              <span className="pill">Assurance incluse</span>
              <span className="pill">Franchise adaptée</span>
              <span className="pill">Assistance 24/7</span>
            </div>
          </div>

          <div className="location-hero-card">
            <h2>Flotte de véhicules</h2>
            <p>
              Disponibilité locale, véhicules entretenus, remise en main propre.
            </p>
            <ul>
              <li>Documents simples et rapides</li>
              <li>Véhicules propres et vérifiés</li>
              <li>Option de dépôt hors horaires</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section fleet-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Véhicules disponibles</h2>
          </div>
          <div className="fleet-grid">
            <article className="fleet-card">
              <span className="fleet-tag">Citadine</span>
              <h3>Compacte essence</h3>
              <p>Idéale pour la ville, consommation réduite.</p>
              <ul>
                <li>5 places</li>
                <li>Boîte manuelle</li>
                <li>Climatisation</li>
              </ul>
            </article>
            <article className="fleet-card">
              <span className="fleet-tag">Utilitaire</span>
              <h3>Fourgon 3 m³</h3>
              <p>Parfait pour un déménagement ou du transport.</p>
              <ul>
                <li>Charge utile 650 kg</li>
                <li>Diesel</li>
                <li>Bluetooth</li>
              </ul>
            </article>
            <article className="fleet-card">
              <span className="fleet-tag">Familial</span>
              <h3>SUV / 4x4</h3>
              <p>Confort sur route, idéal pour longue distance.</p>
              <ul>
                <li>5 places</li>
                <li>Boîte auto</li>
                <li>GPS intégré</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section location-section">
        <div className="container location-grid">
          <div className="card map-card">
            <div className="map-iframe">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7477.519444404036!2d1.0104611296782124!3d49.2889533879252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e11fef9cb3dced%3A0xb7372a9c8a7c2fa!2s100%25%20PNEUS%20100%25%20PARE-BRISE!5e1!3m2!1sfr!2sus!4v1770491407720!5m2!1sfr!2sus"
                width="800"
                height="600"
                loading="lazy"
                title="Localisation 100% Pneus Elbeuf"
              />
            </div>
            <div className="map-details">
              <h3>Atelier principal</h3>
              <p>60 Cours Carnot, 76500 Elbeuf</p>
              <p>Parking client gratuit</p>
            </div>
          </div>
          <div className="card location-info">
            <h3>Zone couverte</h3>
            <ul>
              <li>Centre-ville et périphérie proche</li>
              <li>Intervention mobile sur site pro</li>
              <li>Dépannage sur rendez-vous</li>
            </ul>
            <div className="location-hours">
              <h4>Horaires</h4>
              <p>Lun – Sam : 8 h 00 – 19 h 00</p>
              <p>Dimanche : fermé</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
