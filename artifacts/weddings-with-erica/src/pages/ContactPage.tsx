import { Navigation } from "@/components/Navigation";
import { Contact } from "@/components/Contact";
import { ContactExtras } from "@/components/ContactExtras";
import { Footer } from "@/components/Footer";
import { Seo, businessSchema, contactPageSchema, makeBreadcrumbSchema } from "@/components/Seo";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Seo
        title="Contact Wedding Planner in Ireland | Weddings with Erica"
        description="Enquire with Erica Egan about full wedding planning, partial planning support, planning consultations or on-the-day coordination for weddings across Ireland."
        path="/contact"
        schema={[
          businessSchema,
          contactPageSchema,
          makeBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
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
