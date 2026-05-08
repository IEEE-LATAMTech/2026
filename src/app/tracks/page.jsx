import { trackCards } from "@/app/datos";
import PageIntro from "@/components/PageIntro";
import TrackCard from "@/components/TrackCard";

export default function TracksPage() {
  return (
    <main className="page-main shell">
      <PageIntro
        eyebrow="Knowledge Ecosystem"
        title="Technical Tracks"
        text="Four rigorous domains built as deployable learning systems, not abstract marketing categories."
      />

      <div className="stack-xl">
        {trackCards.map((track) => (
          <TrackCard key={track.slug} track={track} />
        ))}
      </div>
    </main>
  );
}
