export default function MetaPill({ icon, label }) {
  return (
    <div className="meta-pill">
      <span className="material-symbols-outlined">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
