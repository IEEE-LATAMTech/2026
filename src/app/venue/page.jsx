import { venueFacts } from "@/app/datos";

export default function VenuePage() {
  return (
    <main>
      <section className="venue-hero">
        <div className="venue-overlay" />
        <div className="shell">
          <div className="page-intro narrow">
            <div className="eyebrow-row">
              <span className="status-dot pulse orange" />
              <span className="eyebrow">Primary Hub: San Jose</span>
            </div>
            <h1>Venue & Travel</h1>
            <p>
              Costa Rica anchors the summit with a high-tech corridor, premium
              hospitality, and strong logistics for international delegates.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="venue-grid">
          <article className="glass-card venue-main accent-orange">
            <div className="code-label">The Experience</div>
            <h2>Four Points by Sheraton / Marriott Sabana</h2>
            <p>
              A venue aligned with the system: controlled lighting, premium
              meeting zones, hybrid-ready rooms, and strong access to the broader
              innovation corridor.
            </p>
            <div className="facts-grid">
              {venueFacts.map((fact) => (
                <div key={fact.title} className="fact-card">
                  <strong>{fact.title}</strong>
                  <span>{fact.text}</span>
                </div>
              ))}
            </div>
          </article>

          <aside className="venue-side">
            <article className="glass-card accent-cyan side-panel">
              <div className="block-label">Travel Protocol</div>
              <h3>International attendee support</h3>
              <p>
                Visa guidance, transfer coordination, and accommodation
                recommendations are presented as part of the attendee workflow.
              </p>
            </article>
            <article className="glass-card accent-blue side-panel">
              <div className="block-label">Regional Context</div>
              <h3>The Silicon Forest narrative</h3>
              <p>
                The venue page reinforces Costa Rica as more than a location: it
                becomes part of the innovation story.
              </p>
            </article>
          </aside>
        </div>
      </section>
    </main>
  );
}
