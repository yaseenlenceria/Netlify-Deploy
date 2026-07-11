import { Navigation } from "@/components/Navigation";
import { Services } from "@/components/Services";
import { ServicesWhy } from "@/components/ServicesWhy";
import { ServicesProcess } from "@/components/ServicesProcess";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Seo
        title="Wedding Planning & Coordination Services Ireland"
        description="Explore full wedding planning, partial planning, planning consultations and on-the-day wedding coordination for couples across Ireland."
        path="/services"
      />
      <Navigation />
      <main className="pt-[76px]">
        <Services headingLevel="h1" />
        <ServicesWhy />
        <ServicesProcess />
      </main>
      <Footer />
    </div>
  );
}
