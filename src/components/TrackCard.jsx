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
      </div>

      <div className="track-content">
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
      </div>
    </article>
  );
}
