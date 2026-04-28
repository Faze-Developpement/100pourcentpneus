import { useState } from "react"
import "./Contact.css"

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">On est là</p>
          <h1 className="section-title">Contact</h1>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <div>
              {sent ? (
                <div className="rdv-success">
                  <span className="rdv-success-icon">✓</span>
                  <h2 className="rdv-success-title">Message envoyé</h2>
                  <p>Nous vous répondrons rapidement.</p>
                </div>
              ) : (
                <form className="rdv-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group"><label htmlFor="prenom">Prénom</label><input id="prenom" type="text" placeholder="Jean" required /></div>
                    <div className="form-group"><label htmlFor="nom">Nom</label><input id="nom" type="text" placeholder="Dupont" required /></div>
                  </div>
                  <div className="form-group"><label htmlFor="email">Email</label><input id="email" type="email" placeholder="jean@email.fr" required /></div>
                  <div className="form-group"><label htmlFor="msg">Message</label><textarea id="msg" rows={5} placeholder="Votre message…" required /></div>
                  <button type="submit" className="btn btn-primary">Envoyer</button>
                </form>
              )}
            </div>
            <aside className="rdv-aside">
              <div className="rdv-info card">
                <h3 className="rdv-info-title">Nous trouver</h3>
                <div className="rdv-info-block">
                  <span className="rdv-info-label">Téléphone</span>
                  <div className="rdv-info-val"><a href="tel:+33XXXXXXXXX">02 XX XX XX XX</a></div>
                </div>
                <div className="rdv-info-block">
                  <span className="rdv-info-label">Adresse</span>
                  <address className="rdv-info-val">60 rue Cours Carnot<br />76500 Elbeuf</address>
                </div>
                <div className="rdv-info-block">
                  <span className="rdv-info-label">Horaires</span>
                  <div className="rdv-info-val"><span>Lun–Ven · 8h–18h</span><span>Sam · 9h–17h</span></div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
