import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyListPage from "./pages/MyListPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import WhatsAppFab from "./components/WhatsAppFab";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mi-lista" element={<MyListPage />} />
        <Route path="/sobre-la-marca" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>

      <WhatsAppFab />
    </BrowserRouter>
  );
}