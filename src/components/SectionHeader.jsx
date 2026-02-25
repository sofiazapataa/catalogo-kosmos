export default function SectionHeader({
  title,
  count,
  shown,
  onToggle,
  canToggle,
}) {
  return (
    <div className="section-head">
      <h2 className="section-title">{title}</h2>

      <div className="section-meta">
        <span className="pill">{count} items</span>

        {canToggle ? (
          <button className="linklike" type="button" onClick={onToggle}>
            {shown ? "Ver menos" : "Ver más"}
          </button>
        ) : null}
      </div>
    </div>
  );
}