import "./Contact.css"

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="section contact-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1 className="section-title">Parlons de votre intervention</h1>
          <p className="section-lead">
            Un conseiller vous repond rapidement avec un devis clair et un creneau.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="card info-card">
              <h3>Coordonnees</h3>
              <p>06 12 34 56 78</p>
              <p>contact@100pneu.fr</p>
              <p>Zone ville + peripherie</p>
            </div>
            <div className="card info-card">
              <h3>Horaires</h3>
              <p>Lun - Sam : 8h00 - 19h00</p>
              <p>Dimanche : sur demande</p>
            </div>
            <div className="card info-card">
              <h3>Services rapides</h3>
              <p>Pare-brise, pneus, diagnostic et calibrage ADAS.</p>
            </div>
          </div>

          <form className="card contact-form">
            <div className="form-row">
              <div>
                <label htmlFor="name">Nom complet</label>
                <input id="name" name="name" placeholder="Nom et prenom" />
              </div>
              <div>
                <label htmlFor="phone">Telephone</label>
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
                  <option>Calibrage ADAS</option>
                  <option>Atelier mobile</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Expliquez votre besoin"></textarea>
            </div>
            <div className="form-actions">
              <button className="btn btn-primary" type="submit">Envoyer la demande</button>
              <span className="form-note">Retour sous 24h ouvrables.</span>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
