import { useState } from "react"
import "./RendezVous.css"

const PRESTATIONS = ["Pneumatiques", "Pare-brise", "Lavage", "Pièces / Accessoires", "Démarches administratives", "Location véhicule", "Autre"]

export default function RendezVousPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Réservation en ligne</p>
          <h1 className="section-title">Prendre rendez-vous</h1>
          <p className="section-lead">Remplissez le formulaire, nous vous confirmons sous 2h.</p>
        </div>
      </section>

      <section className="section rdv-section">
        <div className="container">
          <div className="rdv-grid">
            <div className="rdv-form-col">
              {sent ? (
                <div className="rdv-success">
                  <span className="rdv-success-icon">✓</span>
                  <h2 className="rdv-success-title">Demande envoyée</h2>
                  <p>Nous vous confirmons votre rendez-vous dans les 2 heures.</p>
                </div>
              ) : (
                <form className="rdv-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="prenom">Prénom</label>
                      <input id="prenom" name="prenom" type="text" placeholder="Jean" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="nom">Nom</label>
                      <input id="nom" name="nom" type="text" placeholder="Dupont" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="tel">Téléphone</label>
                      <input id="tel" name="tel" type="tel" placeholder="06 00 00 00 00" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" placeholder="jean@email.fr" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="prestation">Prestation souhaitée</label>
                    <select id="prestation" name="prestation" required>
                      <option value="">— Choisir —</option>
                      {PRESTATIONS.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="vehicule">Véhicule (marque, modèle, année)</label>
                    <input id="vehicule" name="vehicule" type="text" placeholder="Ex : Peugeot 308, 2020" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Précisions</label>
                    <textarea id="message" name="message" rows={4} placeholder="Décrivez votre besoin…" />
                  </div>
                  <button type="submit" className="btn btn-primary rdv-submit">Envoyer la demande</button>
                </form>
              )}
            </div>

            <aside className="rdv-aside">
              <div className="rdv-info card">
                <h3 className="rdv-info-title">Nous contacter</h3>
                <div className="rdv-info-block">
                  <span className="rdv-info-label">Téléphone</span>
                  <a href="tel:+33XXXXXXXXX" className="rdv-info-val">02 XX XX XX XX</a>
                </div>
                <div className="rdv-info-block">
                  <span className="rdv-info-label">Adresse</span>
                  <address className="rdv-info-val">60 rue Cours Carnot<br />76500 Elbeuf</address>
                </div>
                <div className="rdv-info-block">
                  <span className="rdv-info-label">Horaires</span>
                  <div className="rdv-info-val">
                    <span>Lun–Ven · 8h–18h</span>
                    <span>Sam · 9h–17h</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
