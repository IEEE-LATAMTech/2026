export default function FeatureCard({ accent, title, text }) {
  return (
    <article className={`glass-card feature-card accent-${accent}`}>
      <div className="block-label">System Signal</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
