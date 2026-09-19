import { agendaDays } from "@/app/datos";
import AgendaDay from "@/components/AgendaDay";
import PageIntro from "@/components/PageIntro";

export default function AgendaPage() {
  return (
    <main className="page-main shell">
      <PageIntro
        eyebrow="How It Works"
        title="Event Format & Agenda"
        text="A self-paced virtual preparation phase followed by two intensive in-person days in San José."
      />

      <div className="agenda-grid">
        {agendaDays.map((day) => (
          <AgendaDay key={day.title} day={day} />
        ))}
      </div>
    </main>
  );
}
