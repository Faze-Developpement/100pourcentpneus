import "./Contact.css"

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="section contact-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1 className="section-title">Premier contact</h1>
          <p className="section-lead">
            Un membre de note équipe vous répond rapidement avec des solutions adaptées à votre besoin.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="card info-card">
              <h3>Coordonnées</h3>
              <p>09 87 58 68 65</p>
              <p>contact@100pourcentpneus.fr</p>
              <p>60 Cours Carnot, Elbeuf 76500</p>
            </div>
            <div className="card info-card">
              <h3>Horaires</h3>
              <p>Lun – Sam : 8 h 00 – 19 h 00</p>
              <p>Dimanche : fermé</p>
            </div>
            <div className="card info-card">
              <h3>Services rapides</h3>
              <p>Pneus, Pare-brise, Location & Autre</p>
            </div>
          </div>

          <form className="card contact-form">
            <div className="form-row">
              <div>
                <label htmlFor="name">Nom complet</label>
                <input id="name" name="name" placeholder="Nom et prénom" />
              </div>
              <div>
                <label htmlFor="phone">Téléphone</label>
                <input id="phone" name="phone" placeholder="06 12 34 56 78" />
              </div>
            </div>
            <div className="form-row">
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="email@email.fr" />
              </div>
              <div>
                <label htmlFor="service">Service</label>
                <select id="service" name="service">
                  <option>Pneus</option>
                  <option>Pare-brise</option>
                  <option>Location</option>
                  <option>Autre</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={9} placeholder="Expliquez votre besoin"></textarea>
            </div>
            <div className="form-actions">
              <button className="btn btn-primary" type="submit">Envoyer la demande</button>
              <span className="form-note">Retour sous 24–48 h ouvrables</span>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
