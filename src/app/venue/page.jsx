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
              <span className="eyebrow">San José, Costa Rica</span>
            </div>
            <h1>Venue & Travel</h1>
            <p>
              The in-person phase takes place September 22-23 in San José,
              following the self-paced virtual preparation phase.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="venue-grid">
          <article className="glass-card venue-main accent-orange">
            <div className="code-label">In-Person Summit</div>
            <h2>Four Points by Sheraton San José Costa Rica</h2>
            <p>
              The Summit brings participants together at the CLASYPCS venue for
              mentorship, keynotes, hands-on building, and two days of focused work.
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
              <div className="block-label">Before You Arrive</div>
              <h3>Complete the virtual phase</h3>
              <p>
                Follow the documentation, theory, setup, and asynchronous support
                path provided for your selected track.
              </p>
            </article>
            <article className="glass-card accent-blue side-panel">
              <div className="block-label">At the Venue</div>
              <h3>Work beside mentors and peers</h3>
              <p>
                Move from preparation into real technical work, expert guidance,
                keynotes, and collaboration in San José.
              </p>
            </article>
          </aside>
        </div>
      </section>
    </main>
  );
}
