import { Navigation } from "@/components/Navigation";
import { MeetErica } from "@/components/MeetErica";
import { EricaApproach } from "@/components/EricaApproach";
import { EricaPersonal } from "@/components/EricaPersonal";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";

export default function MeetEricaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Seo
        title="Meet Erica Egan | Wedding Planner Ireland"
        description="Meet Erica Egan, an experienced Irish wedding planner bringing calm, practical support and personal coordination to weddings across Ireland."
        path="/meet-erica"
      />
      <Navigation />
      <main className="pt-[76px]">
        <MeetErica headingLevel="h1" />
        <EricaPersonal />
        <EricaApproach />
      </main>
      <Footer />
    </div>
  );
}
