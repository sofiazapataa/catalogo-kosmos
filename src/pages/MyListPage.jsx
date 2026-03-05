import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useList } from "../context/ListContext";

const TRANSFER_OFF = 0.05;

function buildReserveText(items, totalNormal, totalTransfer, paymentMethod) {
  const lines = items.map(
    (it) =>
      `- ${it.title} x${it.qty} ($${(it.price * it.qty).toLocaleString("es-AR")})`
  );

  let paymentLine = "Pago: a coordinar";
  if (paymentMethod === "transfer") paymentLine = "Pago: transferencia (5% OFF)";
  if (paymentMethod === "cash") paymentLine = "Pago: efectivo";
  if (paymentMethod === "other") paymentLine = "Pago: a coordinar";

  return `Hola! Quiero reservar:\n${lines.join(
    "\n"
  )}\n\nTotal: $${Number(totalNormal || 0).toLocaleString(
    "es-AR"
  )}\nTotal transferencia (5% OFF): $${Number(totalTransfer || 0).toLocaleString(
    "es-AR"
  )}\n${paymentLine}`;
}

export default function MyListPage() {
  const { items, clearList, total, addToList, removeOne, deleteItem } = useList();

  // ✅ método de pago
  const [paymentMethod, setPaymentMethod] = useState("transfer"); // transfer | cash | other

  const totalTransfer = useMemo(() => {
    return Math.round(Number(total || 0) * (1 - TRANSFER_OFF));
  }, [total]);

  const reserveText = useMemo(() => {
    return buildReserveText(items, total, totalTransfer, paymentMethod);
  }, [items, total, totalTransfer, paymentMethod]);

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
                          Unit: ${Number(it.price || 0).toLocaleString("es-AR")}
                        </div>
                      </div>

                      <div className="rightcol">
                        <div className="price">
                          ${Number((it.price || 0) * it.qty).toLocaleString("es-AR")}
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
                  <div className="pay-methods" role="group" aria-label="Método de pago">
                    <label className="pay-option">
                      <input
                        type="radio"
                        name="pay"
                        value="transfer"
                        checked={paymentMethod === "transfer"}
                        onChange={() => setPaymentMethod("transfer")}
                      />
                      <span>Transferencia (5% OFF)</span>
                    </label>

                    <label className="pay-option">
                      <input
                        type="radio"
                        name="pay"
                        value="cash"
                        checked={paymentMethod === "cash"}
                        onChange={() => setPaymentMethod("cash")}
                      />
                      <span>Efectivo</span>
                    </label>

                    <label className="pay-option">
                      <input
                        type="radio"
                        name="pay"
                        value="other"
                        checked={paymentMethod === "other"}
                        onChange={() => setPaymentMethod("other")}
                      />
                      <span>A coordinar</span>
                    </label>
                  </div>

                  <a className="btn" href={whatsappHref} target="_blank" rel="noreferrer">
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
              <strong>${Number(total || 0).toLocaleString("es-AR")}</strong>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}