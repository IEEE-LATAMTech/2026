export default function RouteCard({ title, text, button, onClick, accent }) {
  return (
    <article className={`glass-card route-card accent-${accent}`}>
      <div className="block-label">Summit Section</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <button className="button button-ghost" onClick={onClick}>
        {button}
      </button>
    </article>
  );
}
