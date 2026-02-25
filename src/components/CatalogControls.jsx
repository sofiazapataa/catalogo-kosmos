export default function CatalogControls({
  query,
  onQueryChange,
  category,
  onCategoryChange,
}) {
  return (
    <div className="controls">
      <input
        className="input"
        type="search"
        placeholder="Buscar productos…"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />

      <select
        className="select"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="all">Todos</option>
        <option value="combos">Combos</option>
        <option value="cremas">Cremas</option>
        <option value="serums">Serums</option>
        <option value="limpieza">Limpieza</option>
        <option value="tonicos">Tónicos</option>
      </select>
    </div>
  );
}