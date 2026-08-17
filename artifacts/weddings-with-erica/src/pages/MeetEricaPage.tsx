import { Navigation } from "@/components/Navigation";
import { MeetErica } from "@/components/MeetErica";
import { EricaApproach } from "@/components/EricaApproach";
import { EricaPersonal } from "@/components/EricaPersonal";
import { Footer } from "@/components/Footer";
import { Seo, businessSchema, personSchema, makeBreadcrumbSchema } from "@/components/Seo";

export default function MeetEricaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Seo
        title="Meet Erica Egan | Wedding Planner in Ireland"
        description="Meet Erica Egan, the wedding planner in Ireland behind Weddings with Erica, offering calm, practical planning support and coordination for weddings across Ireland."
        path="/meet-erica"
        schema={[
          businessSchema,
          personSchema,
          makeBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Meet Erica", path: "/meet-erica" },
          ]),
        ]}
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
