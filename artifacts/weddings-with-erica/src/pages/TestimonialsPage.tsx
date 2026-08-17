import { Navigation } from "@/components/Navigation";
import { TestimonialsStats } from "@/components/TestimonialsStats";
import { Testimonials } from "@/components/Testimonials";
import { TestimonialsCTA } from "@/components/TestimonialsCTA";
import { Footer } from "@/components/Footer";
import { Seo, businessSchema, makeBreadcrumbSchema } from "@/components/Seo";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Seo
        title="Wedding Planner Reviews in Ireland | Weddings with Erica"
        description="Read reviews from couples who trusted Erica Egan for wedding planning, partial planning support and on-the-day wedding coordination in Ireland."
        path="/testimonials"
        schema={[
          businessSchema,
          makeBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Wedding Planner Reviews", path: "/testimonials" },
          ]),
        ]}
      />
      <Navigation />
      <main className="pt-[76px]">
        <TestimonialsStats />
        <Testimonials headingLevel="h1" />
        <TestimonialsCTA />
      </main>
      <Footer />
    </div>
  );
}
