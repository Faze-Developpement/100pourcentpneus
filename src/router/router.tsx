import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/Home/HomePage"
import ServicesPage from "../pages/Services/ServicesPage"
import VehiculesPage from "../pages/Vehicules/VehiculesPage"
import RendezVousPage from "../pages/RendezVous/RendezVousPage"
import ContactPage from "../pages/Contact/ContactPage"
import NotFoundPage from "../pages/NotFound/NotFoundPage"

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/vehicules" element={<VehiculesPage />} />
      <Route path="/rendez-vous" element={<RendezVousPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
