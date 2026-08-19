import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/lucid/Navbar";
import { Hero } from "@/components/lucid/Hero";
import { DreamCapture } from "@/components/lucid/DreamCapture";
import { JournalInterface } from "@/components/lucid/JournalInterface";
import { PatternConstellation } from "@/components/lucid/PatternConstellation";
import { Timeline } from "@/components/lucid/Timeline";
import { InsightSection } from "@/components/lucid/InsightSection";
import { FinalCTA } from "@/components/lucid/FinalCTA";
import { Footer } from "@/components/lucid/Footer";

const title = "Lucid — Remember What Your Mind Creates";
const description =
  "Capture your dreams the moment you wake, discover recurring patterns, and understand the stories your mind creates at night.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <DreamCapture />
        <JournalInterface />
        <PatternConstellation />
        <Timeline />
        <InsightSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
