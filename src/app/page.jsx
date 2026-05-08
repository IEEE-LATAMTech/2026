import { stats } from "@/app/datos";
import FeatureCard from "@/components/FeatureCard";
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
            <div>
              <h1 className="hero-title">
                ENGINEERING
                <br />
                <span>THE FUTURE.</span>
              </h1>
              <p className="hero-subtitle">
                Convergence: Quantum, AI, trust, and decentralized systems in a
                premium summit experience for Latin American technical leaders.
              </p>
              <div className="hero-meta">
                <MetaPill icon="calendar_today" label="September 22-23, 2026" />
                <MetaPill icon="location_on" label="San Jose, Costa Rica" />
                <MetaPill icon="memory" label="24h hands-on lab format" />
              </div>
              <div className="hero-actions">
                <button className="button button-primary">Register Interest</button>
                <button className="button button-secondary" onClick={() => onNavigate("/tracks")}>
                  Explore Tracks
                </button>
              </div>
            </div>

            <div className="hero-panel glass-card">
              <div className="panel-kicker">Mission Profile</div>
              <h2>High-performance learning, not passive conference theater.</h2>
              <p>
                The summit combines technical immersion, certification pathways,
                and direct access to researchers, CTOs, and global partners.
              </p>
              <div className="signal-list">
                <SignalCard
                  accent="blue"
                  title="Competency Building"
                  text="Certification-oriented workshops with measurable outcomes."
                />
                <SignalCard
                  accent="orange"
                  title="Industry Engagement"
                  text="Mentorship and direct collaboration with global engineering teams."
                />
                <SignalCard
                  accent="cyan"
                  title="Regional Impact"
                  text="Infrastructure thinking tailored to LATAM realities and opportunities."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell">
        <SectionHeader
          eyebrow="Design Logic"
          title="A command-center visual language"
          text="Obsidian surfaces, glassmorphism layers, blue-first signaling, and precise spacing rules create a premium engineering aesthetic."
        />

        <div className="feature-grid">
          <FeatureCard
            accent="blue"
            title="Engineering Excellence"
            text="12-column rhythm, strong alignment, and quiet surfaces that let high-value content lead."
          />
          <FeatureCard
            accent="orange"
            title="Kinetic Energy"
            text="Orange accents and scanning lines signal action, urgency, and movement through the system."
          />
          <FeatureCard
            accent="cyan"
            title="Technical Precision"
            text="Caps labels, data rails, and crisp radii echo schematics and lab interfaces."
          />
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell">
          <SectionHeader
            eyebrow="Summit Snapshot"
            title="Built for depth"
            text="The home page acts as an executive overview before attendees branch into specialized pages."
          />

          <div className="stats-grid">
            {stats.map((item) => (
              <article key={item.label} className={`stat-card accent-${item.accent}`}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <SectionHeader
          eyebrow="Entry Points"
          title="Core pages in the React project"
          text="Each route is designed as a focused experience instead of a single overloaded landing page."
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
            text="Two-day timeline with strategic programming and certification labs."
            button="Open Agenda"
            onClick={() => onNavigate("/agenda")}
            accent="orange"
          />
          <RouteCard
            title="Sponsors"
            text="Tiered partner visibility and ecosystem positioning."
            button="Open Sponsors"
            onClick={() => onNavigate("/sponsors")}
            accent="cyan"
          />
          <RouteCard
            title="Venue"
            text="Travel logistics, hotel information, and regional innovation context."
            button="Open Venue"
            onClick={() => onNavigate("/venue")}
            accent="blue-soft"
          />
        </div>
      </section>
    </main>
  );
}
