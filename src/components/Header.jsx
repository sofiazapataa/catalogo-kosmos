import { Link, useLocation } from "react-router-dom";
import { useList } from "../context/ListContext";

export default function Header({ right }) {
  const { count } = useList();
  const location = useLocation();
  const isMyList = location.pathname === "/mi-lista";

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="brand">
          <div className="brand-small">Catalogo</div>
          <div className="brand-big">Kosmos</div>
          <div className="brand-sub">Stock limitado - 2026</div>
        </div>

        <div className="topbar-right">
          <div className="contact">
            <div className="contact-title">Reservas por mensaje directo</div>
            <div className="contact-sub">Entrega inmediata</div>
            <div className="contact-sub">(2262) 357366</div>
            <div className="contact-sub">sofizapata2004@gmail.com</div>
          </div>

          <div className="topbar-cta">
            {!isMyList ? (
              <Link className="btn" to="/mi-lista">
                Mi Lista {count > 0 ? `(${count})` : ""}
              </Link>
            ) : (
              right
            )}
          </div>
        </div>
      </div>
    </header>
  );
}