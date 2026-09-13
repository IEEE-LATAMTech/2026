import { organizingTeam } from "@/app/datos";
import PageIntro from "@/components/PageIntro";
import TeamMemberCard from "@/components/TeamMemberCard";

export default function TeamPage() {
  return (
    <main className="page-main team-page">
      <div className="shell">
        <PageIntro
          eyebrow="The People Behind the Summit"
          title="Organizing Team"
          text="A cross-disciplinary committee bringing IEEE CS LATAMTech Summit Costa Rica 2026 to life."
        />

        <div className="team-group">
          <div className="team-group-heading">
            <span className="block-label">Organizers</span>
            <span>04 members</span>
          </div>
          <div className="team-member-grid organizer-grid">
            {organizingTeam.organizers.map((member) => (
              <TeamMemberCard key={member.code} member={member} />
            ))}
          </div>
        </div>

        <div className="team-group team-group-collaborators">
          <div className="team-group-heading">
            <span className="block-label">Collaborators</span>
            <span>02 members</span>
          </div>
          <div className="team-member-grid collaborator-grid">
            {organizingTeam.collaborators.map((member) => (
              <TeamMemberCard key={member.code} member={member} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
