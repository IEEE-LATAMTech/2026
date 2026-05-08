export default function PageIntro({ eyebrow, title, text }) {
  return (
    <section className="page-intro">
      <div className="eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}
