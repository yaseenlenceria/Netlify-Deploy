import { Navigation } from "@/components/Navigation";
import { MeetErica } from "@/components/MeetErica";
import { EricaApproach } from "@/components/EricaApproach";
import { EricaPersonal } from "@/components/EricaPersonal";
import { Footer } from "@/components/Footer";

export default function MeetEricaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      <main className="pt-[76px]">
        <MeetErica />
        <EricaPersonal />
        <EricaApproach />
      </main>
      <Footer />
    </div>
  );
}
