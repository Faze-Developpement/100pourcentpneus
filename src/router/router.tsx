import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/Home/HomePage"
import ContactPage from "../pages/Contact/ContactPage"
import LocationPage from "../pages/Location/LocationPage"
import NotFoundPage from "../pages/NotFound/NotFoundPage"

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
