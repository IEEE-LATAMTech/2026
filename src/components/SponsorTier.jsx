export default function SponsorTier({ tier }) {
  return (
    <section>
      <div className="tier-header">
        <h2>{tier.tier}</h2>
        <span>{tier.accent.toUpperCase()} SIGNAL</span>
      </div>
      <div className="sponsor-grid">
        {tier.companies.map((company) => (
          <article key={company} className={`glass-card sponsor-card accent-${tier.accent}`}>
            <div className="mock-logo">{company.slice(0, 2).toUpperCase()}</div>
            <h3>{company}</h3>
            <p>
              High-visibility placement across summit materials, technical
              programming, and curated networking moments.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
