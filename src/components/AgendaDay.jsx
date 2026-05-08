export default function AgendaDay({ day }) {
  return (
    <section className="day-column">
      <div className="day-header">
        <div>
          <h2>{day.title}</h2>
          <span>{day.date}</span>
        </div>
        <div className="day-status">
          <span className="status-dot pulse blue" />
          <small>{day.status}</small>
        </div>
      </div>

      <div className="timeline">
        {day.sessions.map((session) => (
          <article
            key={`${day.title}-${session.time}-${session.title}`}
            className={`timeline-card glass-card accent-${session.accent}`}
          >
            <div className="timeline-node" />
            <div className="timeline-time">{session.time}</div>
            <div className="timeline-label">{session.label}</div>
            <h3>{session.title}</h3>
            <p>{session.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
