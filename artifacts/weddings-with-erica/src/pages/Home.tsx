import { useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MeetErica } from "@/components/MeetErica";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useScrollBlur } from "@/hooks/use-scroll-blur";
import aboveContactImg from "@assets/above_contact_1780239389448.png";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  useScrollBlur(mainRef);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      <main ref={mainRef}>
        <Hero />
        <MeetErica />
        <Services />
        <Testimonials />
        <div className="w-full overflow-hidden" style={{ maxHeight: "60vh" }}>
          <img
            src={aboveContactImg}
            alt="Erica with a happy couple at their wedding reception"
            className="w-full object-cover object-center"
            style={{ maxHeight: "60vh" }}
            loading="lazy"
          />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
