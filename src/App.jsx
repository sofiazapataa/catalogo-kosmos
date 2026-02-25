import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyListPage from "./pages/MyListPage";
import WhatsAppFab from "./components/WhatsAppFab";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mi-lista" element={<MyListPage />} />
      </Routes>
      <WhatsAppFab />
    </BrowserRouter>
  );
}