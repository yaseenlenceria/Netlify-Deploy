import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MeetErica } from "@/components/MeetErica";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import galleryImg from "@assets/IMG_8119_1780238892941.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      <main>
        <Hero />
        <MeetErica />
        <Services />
        <Testimonials />
        {/* Wide scenic image break between testimonials and contact */}
        <section className="w-full overflow-hidden" style={{ maxHeight: "65vh" }}>
          <img
            src={galleryImg}
            alt="Beautiful couple on their wedding day"
            className="w-full h-full object-cover object-center"
            style={{ maxHeight: "65vh" }}
            loading="lazy"
          />
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
