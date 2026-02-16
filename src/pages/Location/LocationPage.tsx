import backgroundVideo from "../../assets/background.mp4"
import "./Location.css"

export default function LocationPage() {
  return (
    <main className="location-page">
      <div className="location-video" aria-hidden="true">
        <video autoPlay loop muted playsInline className="location-hero-video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>

      <section className="location-hero">
        <div className="container location-hero-grid">
          <div className="location-hero-content">
            <p className="eyebrow">Location</p>
            <h1 className="section-title">Location rapide et simple</h1>
            <p className="section-lead">
              Vehicules disponibles pour depannage, courte ou moyenne duree.
              Retrait express et options sur mesure.
            </p>
            <div className="location-hero-actions">
              <a className="btn btn-primary" href="/contact">Reserver</a>
              <a className="btn btn-outline" href="tel:+339875865">09 87 58 68 65</a>
            </div>
            <div className="location-hero-pills">
              <span className="pill">Assurance incluse</span>
              <span className="pill">Franchise adaptee</span>
              <span className="pill">Assistance 24/7</span>
            </div>
          </div>

          <div className="location-hero-card">
            <h2>Flotte de vehicules</h2>
            <p>
              Disponibilite locale, vehicules entretenus, remise en main propre.
            </p>
            <ul>
              <li>Documents simples et rapides</li>
              <li>Vehicules propres et verifies</li>
              <li>Option de depot hors horaires</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section fleet-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Vehicules disponibles</h2>
          </div>
          <div className="fleet-grid">
            <article className="fleet-card">
              <span className="fleet-tag">Citadine</span>
              <h3>Compacte essence</h3>
              <p>Ideale pour la ville, consommation reduite.</p>
              <ul>
                <li>5 places</li>
                <li>Boite manuelle</li>
                <li>Climatisation</li>
              </ul>
            </article>
            <article className="fleet-card">
              <span className="fleet-tag">Utilitaire</span>
              <h3>Fourgon 3 m3</h3>
              <p>Parfait pour un demenagement ou du transport.</p>
              <ul>
                <li>Charge utile 650 kg</li>
                <li>Diesel</li>
                <li>Bluetooth</li>
              </ul>
            </article>
            <article className="fleet-card">
              <span className="fleet-tag">Familial</span>
              <h3>SUV / 4x4</h3>
              <p>Confort sur route, ideal pour longue distance.</p>
              <ul>
                <li>5 places</li>
                <li>Boite auto</li>
                <li>GPS integre</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container location-grid">
          <div className="card map-card">
            <div className="map-placeholder">
              <span>Plan de localisation</span>
            </div>
            <div className="map-details">
              <h3>Atelier principal</h3>
              <p>12 Rue de la Performance, 75000 Paris</p>
              <p>Parking client gratuit</p>
            </div>
          </div>
          <div className="card location-info">
            <h3>Zone couverte</h3>
            <ul>
              <li>Centre-ville et peripherie proche</li>
              <li>Intervention mobile sur site pro</li>
              <li>Depannage sur rendez-vous</li>
            </ul>
            <div className="location-hours">
              <h4>Horaires</h4>
              <p>Lun - Sam : 8h00 - 19h00</p>
              <p>Dimanche : sur demande</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
