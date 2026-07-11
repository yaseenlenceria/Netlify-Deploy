import { Navigation } from "@/components/Navigation";
import { Contact } from "@/components/Contact";
import { ContactExtras } from "@/components/ContactExtras";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Seo
        title="Contact an Irish Wedding Planner | Weddings with Erica"
        description="Tell Erica about your wedding plans and enquire about wedding planning, planning support or day-of coordination anywhere in Ireland."
        path="/contact"
      />
      <Navigation />
      <main className="pt-[76px]">
        <Contact headingLevel="h1" />
        <ContactExtras />
      </main>
      <Footer />
    </div>
  );
}
