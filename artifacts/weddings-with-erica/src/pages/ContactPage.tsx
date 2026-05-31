import { Navigation } from "@/components/Navigation";
import { Contact } from "@/components/Contact";
import { ContactExtras } from "@/components/ContactExtras";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      <main className="pt-[76px]">
        <Contact />
        <ContactExtras />
      </main>
      <Footer />
    </div>
  );
}
