import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MeetErica } from "@/components/MeetErica";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      <main>
        <Hero />
        <MeetErica />
        <Services />
        <Testimonials />
        <section className="w-full">
          <img 
            src="/images/gallery-scenic.png" 
            alt="Beautiful wide scenic wedding shot" 
            className="w-full h-auto max-h-[70vh] object-cover" 
          />
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
