export default function TrackCard({ track }) {
  return (
    <article className={`glass-card track-card accent-${track.accent}`}>
      <div className="track-side">
        <span className="code-label">{track.code}</span>
        <h2>{track.title}</h2>
        <p>{track.description}</p>
        <div className="tag-row">
          {track.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
        <div className="partner-note">{track.partner}</div>
        {track.speaker ? (
          <div className="track-speaker">
            <div className="block-label">Speaker</div>
            <div className="track-speaker-profile">
              <img src={track.speaker.image} alt={track.speaker.name} />
              <div>
                <strong>{track.speaker.name}</strong>
                <span>{track.speaker.role}</span>
              </div>
            </div>
            <p>{track.speaker.bio}</p>
          </div>
        ) : null}
      </div>

      <div className="track-content">
        {track.sections ? (
          track.sections.map((section) => (
            <div key={section.label} className="detail-block">
              <div className="block-label">{section.label}</div>
              <ul className="objective-list">
                {section.items.map((item, index) => (
                  <li key={item}>
                    <span>/{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div className="detail-block">
            <div className="block-label">Learning Objectives</div>
            <ul className="objective-list">
              {track.objectives.map((objective, index) => (
                <li key={objective}>
                  <span>/{String(index + 1).padStart(2, "0")}</span>
                  <p>{objective}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
