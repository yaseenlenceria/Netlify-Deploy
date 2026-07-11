import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MeetErica } from "@/components/MeetErica";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Seo, businessSchema } from "@/components/Seo";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Seo
        title="Wedding Planner Ireland | Weddings with Erica"
        description="Calm, personal wedding planning and day-of coordination across Ireland. Erica Egan helps couples plan with confidence and enjoy every moment."
        schema={businessSchema}
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
