import { Link } from "react-router-dom"
import "./NotFound.css"

export default function NotFoundPage() {
  return (
    <main className="notfound">
      <div className="container notfound-card">
        <p className="eyebrow">404</p>
        <h1 className="section-title">Page introuvable</h1>
        <p className="section-lead">
          La page demandee n'existe pas ou a ete deplacee.
        </p>
        <Link to="/" className="btn btn-primary">Retour accueil</Link>
      </div>
    </main>
  )
}
