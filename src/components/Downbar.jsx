export default function Downbar({ onNavigate }) {
  return (
    <footer className="footer" id="contact">
      <div className="shell footer-grid">
        <div>
          <div className="footer-brand">
            IEEE CS LATAMTech Summit Costa Rica 2026
          </div>
          <p>
            An IEEE Computer Society event connecting technical depth,
            mentorship, and regional collaboration.
          </p>
        </div>
        <div>
          <div className="footer-title">Resources</div>
          <button className="footer-link" onClick={() => onNavigate("/tracks")}>
            Tracks
          </button>
          <button className="footer-link" onClick={() => onNavigate("/agenda")}>
            Agenda
          </button>
          <button className="footer-link" onClick={() => onNavigate("/venue")}>
            Venue
          </button>
        </div>
        <div>
          <div className="footer-title">Participation</div>
          <button className="footer-link" onClick={() => onNavigate("/sponsors")}>
            Sponsors
          </button>
          <button className="footer-link" onClick={() => onNavigate("/anniversary")}>
            80th Anniversary
          </button>
          <button className="footer-link" onClick={() => onNavigate("/")}>
            Home
          </button>
        </div>
        <div>
          <div className="footer-title">Status</div>
          <div className="status-box">
            <span className="status-dot pulse orange" />
            <span>Registration open</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
