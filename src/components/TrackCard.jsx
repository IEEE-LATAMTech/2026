export default function TrackCard({ track }) {
  const speakers = track.speakers ?? (track.speaker ? [track.speaker] : []);

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
        {speakers.length > 0 ? (
          <div className="track-speakers">
            <div className="block-label">Speakers</div>
            {speakers.map((speaker) => (
              <div key={speaker.name} className="track-speaker">
                <div className="track-speaker-profile">
                  {speaker.image ? (
                    <img src={speaker.image} alt={speaker.name} />
                  ) : (
                    <div
                      className="track-speaker-placeholder"
                      role="img"
                      aria-label={`${speaker.name} photo unavailable`}
                    >
                      {speaker.initials}
                    </div>
                  )}
                  <div>
                    <strong>{speaker.name}</strong>
                    <span>{speaker.role}</span>
                  </div>
                </div>
                <p>{speaker.bio}</p>
              </div>
            ))}
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
