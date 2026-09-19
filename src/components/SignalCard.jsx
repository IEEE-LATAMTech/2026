export default function SignalCard({ accent, title, text }) {
  return (
    <div className={`signal-card accent-${accent}`}>
      <strong>{title}</strong>
      <span>{text}</span>
    </div>
  );
}
