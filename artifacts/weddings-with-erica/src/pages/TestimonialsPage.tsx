import { Navigation } from "@/components/Navigation";
import { TestimonialsStats } from "@/components/TestimonialsStats";
import { Testimonials } from "@/components/Testimonials";
import { TestimonialsCTA } from "@/components/TestimonialsCTA";
import { Footer } from "@/components/Footer";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      <main className="pt-[76px]">
        <TestimonialsStats />
        <Testimonials />
        <TestimonialsCTA />
      </main>
      <Footer />
    </div>
  );
}
