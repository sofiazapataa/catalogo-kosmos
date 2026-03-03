import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useList } from "../context/ListContext";

const TRANSFER_OFF = 0.05;

function buildReserveText(items, totalNormal, totalTransfer, payTransfer) {
  const lines = items.map(
    (it) =>
      `- ${it.title} x${it.qty} ($${(it.price * it.qty).toLocaleString("es-AR")})`
  );

  const paymentLine = payTransfer
    ? "Pago: transferencia (5% OFF)"
    : "Pago: a coordinar";

  return `Hola! Quiero reservar:\n${lines.join(
    "\n"
  )}\n\nTotal: $${totalNormal.toLocaleString(
    "es-AR"
  )}\nTotal transferencia (5% OFF): $${totalTransfer.toLocaleString(
    "es-AR"
  )}\n${paymentLine}`;
}

export default function MyListPage() {
  const { items, clearList, total, addToList, removeOne, deleteItem } =
    useList();

  const [payTransfer, setPayTransfer] = useState(false);

  const totalTransfer = useMemo(() => {
    return Math.round(total * (1 - TRANSFER_OFF));
  }, [total]);

  const reserveText = useMemo(() => {
    return buildReserveText(items, total, totalTransfer, payTransfer);
  }, [items, total, totalTransfer, payTransfer]);

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

                {/* ✅ Pago + CTA */}
                <div className="reserve-actions">
                  <label className="pay-toggle">
                    <input
                      type="checkbox"
                      checked={payTransfer}
                      onChange={(e) => setPayTransfer(e.target.checked)}
                    />
                    <span>Pagar con transferencia (5% OFF)</span>
                  </label>

                  <a
                    className="btn"
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Comprar por WhatsApp
                  </a>
                </div>
              </>
            )}
          </div>

          {/* ✅ Totales (normal + transferencia) */}
          <div className="panel-foot totals">
            <div className="totals-left">
              <strong>Total</strong>
              <span className="totals-sub">
                Transferencia (5% OFF):{" "}
                <strong>${totalTransfer.toLocaleString("es-AR")}</strong>
              </span>
            </div>

            <div className="totals-right">
              <strong>${total.toLocaleString("es-AR")}</strong>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}