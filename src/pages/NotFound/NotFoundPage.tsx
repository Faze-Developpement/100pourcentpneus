import { Link } from "react-router-dom"
import "./NotFound.css"

export default function NotFoundPage() {
  return (
    <div className="notfound">
      <div className="container">
        <span className="notfound-code">404</span>
        <h1 className="notfound-title">Page introuvable</h1>
        <Link to="/" className="btn btn-outline">Retour à l'accueil</Link>
      </div>
    </div>
  )
}
