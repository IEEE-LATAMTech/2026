import { sponsorTiers } from "@/app/datos";
import PageIntro from "@/components/PageIntro";
import SponsorTier from "@/components/SponsorTier";

export default function SponsorsPage() {
  return (
    <main className="page-main shell">
      <PageIntro
        eyebrow="Recognized & Endorsed"
        title="Sponsors & Strategic Allies"
        text="Organizations supporting and endorsing LATAMTech Summit 2026."
      />

      <div className="stack-xl">
        {sponsorTiers.map((tier) => (
          <SponsorTier key={tier.tier} tier={tier} />
        ))}

        <section className="glass-card sponsor-cta accent-orange">
          <div>
            <div className="code-label">Partnership Opportunities</div>
            <h2>Support the next generation of regional engineering.</h2>
            <p>
              Sponsorship is framed as infrastructure investment: student grants,
              lab access, mentorship pipelines, and technical brand positioning.
            </p>
          </div>
          <div className="cta-actions">
            <button className="button button-primary">Download Prospectus</button>
            <button className="button button-ghost">Contact Partnerships</button>
          </div>
        </section>
      </div>
    </main>
  );
}
