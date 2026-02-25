import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useList } from "../context/ListContext";

function buildReserveText(items, total) {
  const lines = items.map(
    (it) => `- ${it.title} x${it.qty} ($${(it.price * it.qty).toLocaleString("es-AR")})`
  );
  return `Hola! Quiero reservar:\n${lines.join("\n")}\n\nTotal: $${total.toLocaleString(
    "es-AR"
  )}`;
}

export default function MyListPage() {
  const { items, clearList, total, addToList, removeOne, deleteItem } = useList();

  const reserveText = buildReserveText(items, total);

  async function copyReserve() {
    try {
      await navigator.clipboard.writeText(reserveText);
      alert("Mensaje copiado ✅ Pegalo en WhatsApp/Instagram DM");
    } catch {
      alert("No se pudo copiar. Copialo manualmente desde el texto.");
    }
  }

  const whatsappHref =
    "https://wa.me/542262357366?text=" + encodeURIComponent(reserveText);

  return (
    <>
      <Header
        right={
          <Link className="btn btn-outline" to="/">
            Volver
          </Link>
        }
      />

      <main className="container">
        <div className="panel">
          <div className="panel-head">
            <h2>Mi Lista</h2>
            <button className="linklike" type="button" onClick={clearList}>
              Borrar lista
            </button>
          </div>

          <div className="panel-body">
            {items.length === 0 ? (
              <p style={{ opacity: 0.7 }}>Tu lista está vacía.</p>
            ) : (
              <>
                <div className="list-table">
                  {items.map((it) => (
                    <div className="list-row" key={it.id}>
                      <div className="qtyctrl">
                        <button
                          className="iconbtn"
                          type="button"
                          onClick={() => removeOne(it.id)}
                          aria-label="Restar uno"
                          title="Restar uno"
                        >
                          −
                        </button>
                        <div className="qtypill">{it.qty}</div>
                        <button
                          className="iconbtn"
                          type="button"
                          onClick={() => addToList(it)}
                          aria-label="Sumar uno"
                          title="Sumar uno"
                        >
                          +
                        </button>
                      </div>

                      <div className="name">
                        <div className="name-title">{it.title}</div>
                        <div className="name-sub">
                          Unit: ${it.price.toLocaleString("es-AR")}
                        </div>
                      </div>

                      <div className="rightcol">
                        <div className="price">
                          ${(it.price * it.qty).toLocaleString("es-AR")}
                        </div>

                        <button
                          className="trash"
                          type="button"
                          onClick={() => deleteItem(it.id)}
                          aria-label="Eliminar producto"
                          title="Eliminar"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="reserve-actions">
                  <button className="btn" type="button" onClick={copyReserve}>
                    Copiar mensaje
                  </button>

                  <a className="btn btn-outline" href={whatsappHref} target="_blank" rel="noreferrer">
                    Enviar por WhatsApp
                  </a>
                </div>

                <details className="reserve-preview">
                  <summary>Ver mensaje</summary>
                  <pre>{reserveText}</pre>
                </details>
              </>
            )}
          </div>

          <div className="panel-foot">
            <strong>Total</strong>
            <strong>${total.toLocaleString("es-AR")}</strong>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}