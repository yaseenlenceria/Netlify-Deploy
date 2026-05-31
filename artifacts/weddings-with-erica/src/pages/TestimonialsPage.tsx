import { Navigation } from "@/components/Navigation";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      <main className="pt-[76px]">
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
