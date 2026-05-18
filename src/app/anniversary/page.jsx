const guestImage = "/images/grace.png";

export default function AnniversaryPage() {
  return (
    <main className="page-main anniversary-page">
      <div className="anniversary-ambient anniversary-ambient-orange" />
      <div className="anniversary-ambient anniversary-ambient-blue" />

      <div className="shell anniversary-stack">
        <section className="glass-card anniversary-hero accent-orange">
          <div className="anniversary-hero-content">
            <img
              className="anniversary-mark"
              src="/images/logo-IEEE-CS-80th-FINAL_Orange%20White.png"
              alt="IEEE Computer Society 80th Anniversary"
            />

            <div className="anniversary-badge">
              <span className="material-symbols-outlined">celebration</span>
              <span>80th Anniversary Special Edition</span>
            </div>

            <div className="anniversary-heading">
              <h1>
                Celebrating <span>80 Years</span> of Computing Excellence
              </h1>
              <p>
                LATAMTech Summit 2026 is a special regional edition honoring 80
                years of building the global computing community.
              </p>
            </div>
          </div>
        </section>

        <section className="anniversary-grid">
          <article className="glass-card anniversary-card accent-blue">
            <span className="material-symbols-outlined anniversary-icon">public</span>
            <div className="block-label">Global Legacy</div>
            <h2>80 years of worldwide impact</h2>
            <p>
              In 2026, the IEEE Computer Society celebrates 80 years of bringing
              the global computing community together. This commemoration
              recognizes the work of its members, volunteers, professionals, and
              technical communities who have driven publications, conferences,
              standards, local events, and programs that promote technological
              advancement since 1946.
            </p>
          </article>

          <article className="glass-card anniversary-card accent-orange">
            <span className="material-symbols-outlined anniversary-icon">route</span>
            <div className="block-label">Regional Connection</div>
            <h2>Connecting the milestone with LATAMTech</h2>
            <p>
              LATAMTech Summit 2026 forms part of this global celebration from
              Region 9, bringing to Latin America an experience focused on
              emerging technologies, technical certification, mentoring,
              industry engagement, and community building.
            </p>
          </article>
        </section>

        <section className="glass-card anniversary-guest accent-blue-soft">
          <div className="anniversary-guest-visual">
            <img src={guestImage} alt="Grace Lewis" />
          </div>

          <div className="anniversary-guest-copy">
            <div className="anniversary-badge anniversary-badge-soft">
              <span className="material-symbols-outlined">stars</span>
              <span>Special Guest</span>
            </div>
            <h2>Grace Lewis</h2>
            <p className="anniversary-guest-role">
              IEEE Computer Society 2026 President
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
