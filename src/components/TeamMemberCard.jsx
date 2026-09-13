export default function TeamMemberCard({ member }) {
  return (
    <article className={`team-member accent-${member.accent}`}>
      <div className="team-member-portrait">
        {member.image ? (
          <img src={member.image} alt={member.name} />
        ) : (
          <span aria-hidden="true">{member.code}</span>
        )}
      </div>
      <div className="team-member-info">
        <span className="team-member-code">/{member.code}</span>
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
    </article>
  );
}
