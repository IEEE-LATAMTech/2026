import { agendaDays } from "@/app/datos";
import AgendaDay from "@/components/AgendaDay";
import PageIntro from "@/components/PageIntro";

export default function AgendaPage() {
  return (
    <main className="page-main shell">
      <PageIntro
        eyebrow="Schematic Overview"
        title="Event Agenda"
        text="A two-day structure that moves from strategy into advanced execution and certification."
      />

      <div className="agenda-grid">
        {agendaDays.map((day) => (
          <AgendaDay key={day.title} day={day} />
        ))}
      </div>
    </main>
  );
}
