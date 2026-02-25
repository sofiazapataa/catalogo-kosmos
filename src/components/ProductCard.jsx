import { useList } from "../context/ListContext";

export default function ProductCard({ product }) {
  const { addToList, removeOne, getQty } = useList();
  const qty = getQty(product.id);

  return (
    <article className="card">
      {product.image ? (
        <div className="card-image">
          {product.discount > 0 && (
            <div className="badge">-{product.discount}%</div>
          )}
          <img src={product.image} alt={product.title} loading="lazy" />
        </div>
      ) : (
        <div className="card-image card-image--empty">
          {product.discount > 0 && (
            <div className="badge">-{product.discount}%</div>
          )}
        </div>
      )}

      <h3 className="card-title">{product.title}</h3>

      <div className="card-body">
        <p className="card-desc">{product.desc}</p>
      </div>

      <div className="card-foot">
        <div className="card-price">${product.price.toLocaleString("es-AR")}</div>

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
          <button className="btn btn-small" onClick={() => addToList(product)}>
            Agregar a la lista
          </button>
        )}
      </div>
    </article>
  );
}