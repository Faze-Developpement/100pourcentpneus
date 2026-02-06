import "./Location.css"

export default function LocationPage() {
  return (
    <main className="location-page">
      <section className="section location-hero">
        <div className="container">
          <p className="eyebrow">Location</p>
          <h1 className="section-title">Notre atelier et notre zone mobile</h1>
          <p className="section-lead">
            Un atelier equipe et une equipe mobile qui couvre la ville et la peripherie.
          </p>
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
