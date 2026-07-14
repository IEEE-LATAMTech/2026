export default function Downbar() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <div className="footer-brand">LATAMTech Summit</div>
          <p>
            Precision engineering for a connected region. IEEE-sponsored summit
            experience with a premium high-tech visual system.
          </p>
        </div>
        <div>
          <div className="footer-title">Resources</div>
          <a href="/tracks">Tracks</a>
          <a href="/agenda">Agenda</a>
          <a href="/venue">Venue</a>
        </div>
        <div>
          <div className="footer-title">Participation</div>
          <a href="/sponsors">Sponsors</a>
          <a href="/anniversary">80th Anniversary</a>
          <a href="/">Home</a>
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
