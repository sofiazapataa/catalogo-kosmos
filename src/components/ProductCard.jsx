import { useMemo } from "react";
import { useList } from "../context/ListContext";

const TRANSFER_OFF = 0.05;

function formatARS(value) {
  return Number(value || 0).toLocaleString("es-AR");
}

export default function ProductCard({ product, onOpen }) {
  const { addToList, removeOne, getQty } = useList();
  const qty = getQty(product.id);

  const transferPrice = useMemo(() => {
    const p = Number(product.price || 0);
    return Math.round(p * (1 - TRANSFER_OFF));
  }, [product.price]);

  const canOpen = typeof onOpen === "function";

  function handleKeyOpen(e) {
    if (!canOpen) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen();
    }
  }

  return (
    <article className="card">
      {product.image ? (
        <div
          className="card-image"
          onClick={canOpen ? onOpen : undefined}
          onKeyDown={handleKeyOpen}
          role={canOpen ? "button" : undefined}
          tabIndex={canOpen ? 0 : undefined}
          aria-label={canOpen ? `Ver ${product.title}` : undefined}
        >
          {product.discount > 0 && (
            <div className="badge">-{product.discount}%</div>
          )}
          <img src={product.image} alt={product.title} loading="lazy" />
        </div>
      ) : (
        <div
          className="card-image card-image--empty"
          onClick={canOpen ? onOpen : undefined}
          onKeyDown={handleKeyOpen}
          role={canOpen ? "button" : undefined}
          tabIndex={canOpen ? 0 : undefined}
          aria-label={canOpen ? `Ver ${product.title}` : undefined}
        >
          {product.discount > 0 && (
            <div className="badge">-{product.discount}%</div>
          )}
        </div>
      )}

      <h3
        className="card-title"
        onClick={canOpen ? onOpen : undefined}
        onKeyDown={handleKeyOpen}
        role={canOpen ? "button" : undefined}
        tabIndex={canOpen ? 0 : undefined}
        aria-label={canOpen ? `Ver ${product.title}` : undefined}
        style={canOpen ? { cursor: "pointer" } : undefined}
      >
        {product.title}
      </h3>

      <div className="card-body">
        <p className="card-desc">{product.desc}</p>
      </div>

      <div className="card-foot">
        <div className="priceblock">
          <div className="card-price">${formatARS(product.price)}</div>
          <div className="card-price-off">
            Transferencia: <strong>${formatARS(transferPrice)}</strong>{" "}
            <span className="off-tag">(5% OFF)</span>
          </div>
        </div>

        {qty > 0 ? (
          <div className="qtybar">
            <button
              className="iconbtn"
              type="button"
              onClick={() => removeOne(product.id)}
              aria-label="Restar uno"
              title="Restar uno"
            >
              −
            </button>

            <span className="qtypill">x{qty}</span>

            <button
              className="iconbtn"
              type="button"
              onClick={() => addToList(product)}
              aria-label="Sumar uno"
              title="Sumar uno"
            >
              +
            </button>
          </div>
        ) : (
          <button
            className="btn btn-small"
            type="button"
            onClick={() => addToList(product)}
          >
            Agregar a la lista
          </button>
        )}
      </div>
    </article>
  );
}