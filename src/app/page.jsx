import {
  eventPhases,
  eventBenefits,
  registrationPrices,
} from "@/app/datos";
import MetaPill from "@/components/MetaPill";
import RouteCard from "@/components/RouteCard";
import SectionHeader from "@/components/SectionHeader";
import SignalCard from "@/components/SignalCard";

export default function HomePage({ onNavigate }) {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-backdrop" />
        <div className="hero-grid" />
        <div className="shell hero-content">
          <div className="eyebrow-row">
            <span className="status-dot pulse orange" />
            <span className="eyebrow">IEEE Computer Society | Region 9</span>
          </div>

          <div className="hero-layout">
            <div className="hero-copy">
              <div className="hero-heading">
                <div
                  className="hero-lockup"
                  aria-label="IEEE CS LATAMTech Summit Costa Rica 2026 and IEEE Computer Society"
                >
                  <img
                    className="hero-lockup-logo"
                    src="/images/latamtech-hero.png"
                    alt="IEEE CS LATAMTech Summit Costa Rica 2026 and IEEE Computer Society 80th anniversary"
                  />
                </div>
              </div>
              <p className="hero-subtitle">
                Convergence: Cybersecurity, AI, trust, and decentralized systems in a
                premium summit experience for Latin American technical leaders.
              </p>
              <div className="hero-meta">
                <MetaPill icon="calendar_today" label="Dates: September 22-23, 2026" />
                <MetaPill icon="location_on" label="San José, Costa Rica" />
                <MetaPill icon="memory" label="Two-phase: virtual + in-person" />
              </div>
              <div className="hero-actions">
                <button
                  className="button button-primary"
                  onClick={() =>
                    document
                      .getElementById("registration")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Pricing
                </button>
                <button className="button button-secondary" onClick={() => onNavigate("/tracks")}>
                  Explore Tracks
                </button>
              </div>

              <div className="hero-panel glass-card">
                <div className="panel-kicker">What This Is</div>
                <h2>Not a workshop on the basics. A real scientific problem - solved.</h2>
                <p>
                  You will not sit through introductory sessions. The Summit gives
                  you a genuine open problem and two focused days to move it forward.
                </p>
                <div className="signal-list">
                  <SignalCard
                    accent="blue"
                    title="Frontier-Grade"
                    text="Open problems drawn from active research, where clean answers do not yet exist."
                  />
                  <SignalCard
                    accent="orange"
                    title="Hands in the Work"
                    text="Real environments, datasets, and tooling: build, run, break, and iterate."
                  />
                  <SignalCard
                    accent="cyan"
                    title="Depth Over Breadth"
                    text="One track, two days, and mentors beside you for genuine technical depth."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell" id="registration">
        <SectionHeader
          eyebrow="Registration"
          title="Event pricing"
          text="Choose the rate that applies to you. All prices are listed in U.S. dollars."
        />

        <div className="pricing-grid">
          {registrationPrices.map((item) => (
            <article
              key={item.audience}
              className={`price-card accent-${item.accent}`}
            >
              <div className="price-audience">{item.audience}</div>
              <div className="price-amount" aria-label={`${item.price} U.S. dollars`}>
                <span>$</span>
                <strong>{item.price}</strong>
                <small>USD</small>
              </div>
              <div className="price-note">Per attendee</div>
            </article>
          ))}
        </div>

        <section className="registration-includes glass-card accent-cyan">
          <div className="credential-highlight">
            <div className="panel-kicker">Included with Every Registration</div>
            <div className="credential-heading">
              <div className="credential-hours" aria-label="24 hours">
                <strong>24</strong>
                <span>Hours</span>
              </div>
              <div>
                <h3>24-Hour Certification with IEEE Credentials</h3>
                <p>
                  Complete the program and earn a verifiable digital certificate
                  issued through IEEE Credentials.
                </p>
              </div>
            </div>
            <a
              className="button button-secondary"
              href="https://credentials.ieee.org/"
              target="_blank"
              rel="noreferrer"
            >
              Explore IEEE Credentials
            </a>
          </div>

          <div className="included-details">
            <div className="price-audience">Your Registration Also Includes</div>
            <ul className="event-benefits">
              {eventBenefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </section>

        <aside className="clasypcs-offer glass-card accent-orange">
          <div className="clasypcs-copy">
            <div className="panel-kicker">Exclusive CLASYPCS Participant Rate</div>
            <h3>Attending CLASYPCS? Why not experience both events?</h3>
            <p>
              All CLASYPCS participants can add full IEEE CS LATAMTech Summit
              Costa Rica 2026 access for an additional $60 USD.
            </p>
            <a
              className="clasypcs-brand"
              href="https://clasypcs2026.ieee-latamtech.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/partners/clasypcs-2026.png"
                alt="CLASYPCS 2026 official website mark"
              />
              <span>
                <strong>CLASYPCS 2026</strong>
                <small>Visit the official event website</small>
              </span>
            </a>
            <div className="clasypcs-note">
              Includes one additional hotel night at the venue.
            </div>
          </div>

          <div className="clasypcs-rate" aria-label="60 U.S. dollar add-on rate">
            <span>Add-on rate</span>
            <strong><small>$</small>60</strong>
            <em>USD</em>
          </div>
        </aside>
      </section>

      <section className="section section-alt">
        <div className="shell">
          <SectionHeader
            eyebrow="How It Works"
            title="A two-phase format"
            text="Prepare online at your own pace, then join mentors and peers for two intensive days in San José."
          />

          <div className="phase-grid">
            {eventPhases.map((phase) => (
              <article
                key={phase.number}
                className={`phase-card glass-card accent-${phase.accent}`}
              >
                <div className="phase-meta">
                  <span>{phase.number}</span>
                  <strong>{phase.mode}</strong>
                </div>
                <h3>{phase.title}</h3>
                <p>{phase.description}</p>
                <ul>
                  {phase.items.map((item) => (
                    <li key={item.title}>{item.title}</li>
                  ))}
                </ul>
                <div className="phase-schedule">{phase.schedule}</div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="section shell">
        <SectionHeader
          eyebrow="Explore the Summit"
          title="Plan your summit experience"
          text="Move from technical tracks to the event agenda, partner opportunities, and venue details."
        />

        <div className="route-grid">
          <RouteCard
            title="Tracks"
            text="Detailed technical domains, partner ecosystems, and objectives."
            button="Open Tracks"
            onClick={() => onNavigate("/tracks")}
            accent="blue"
          />
          <RouteCard
            title="Agenda"
            text="Virtual preparation followed by two intensive in-person Summit days."
            button="Open Agenda"
            onClick={() => onNavigate("/agenda")}
            accent="orange"
          />
          <RouteCard
            title="Sponsors"
            text="Official sponsors, institutional partners, and program endorsers."
            button="Open Sponsors"
            onClick={() => onNavigate("/sponsors")}
            accent="cyan"
          />
          <RouteCard
            title="Venue"
            text="In-person dates, hotel information, and arrival preparation for San José."
            button="Open Venue"
            onClick={() => onNavigate("/venue")}
            accent="blue-soft"
          />
        </div>
      </section>
    </main>
  );
}
