import { Navigation } from "@/components/Navigation";
import { Services } from "@/components/Services";
import { ServicesWhy } from "@/components/ServicesWhy";
import { ServicesProcess } from "@/components/ServicesProcess";
import { Footer } from "@/components/Footer";
import { Seo, businessSchema, servicesPageSchema, makeBreadcrumbSchema } from "@/components/Seo";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Seo
        title="Wedding Planning Services in Ireland | Weddings with Erica"
        description="Wedding planning services in Ireland: full planning, partial planning support, planning power hour consultations and calm on-the-day wedding coordination."
        path="/services"
        schema={[
          businessSchema,
          servicesPageSchema,
          makeBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Wedding Planning Services", path: "/services" },
          ]),
        ]}
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
