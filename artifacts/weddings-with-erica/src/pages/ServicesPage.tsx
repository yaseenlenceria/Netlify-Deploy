import { Navigation } from "@/components/Navigation";
import { Services } from "@/components/Services";
import { ServicesProcess } from "@/components/ServicesProcess";
import { Footer } from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      <main className="pt-[76px]">
        <Services />
        <ServicesProcess />
      </main>
      <Footer />
    </div>
  );
}
