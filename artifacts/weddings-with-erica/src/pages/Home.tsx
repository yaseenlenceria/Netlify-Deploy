import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MeetErica } from "@/components/MeetErica";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Seo, businessSchema, websiteSchema, makeBreadcrumbSchema } from "@/components/Seo";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Seo
        title="Wedding Planner Ireland | Day-of Coordination | Weddings with Erica"
        description="Irish wedding planner Erica Egan offers full planning, partial planning, planning power hours and calm day-of coordination for couples across Ireland."
        schema={[businessSchema, websiteSchema, makeBreadcrumbSchema([{ name: "Home", path: "/" }])]}
      />
      <Navigation />
      <main>
        <Hero />
        <MeetErica />
        <Services />
        <Testimonials />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
