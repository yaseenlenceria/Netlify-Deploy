import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MeetErica } from "@/components/MeetErica";
import { Services } from "@/components/Services";
import { IrelandSeoContent } from "@/components/IrelandSeoContent";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { InstagramFeed } from "@/components/InstagramFeed";
import { TikTokCarousel } from "@/components/TikTokCarousel";
import { Seo, businessSchema, websiteSchema, tiktokVideoSchema, makeBreadcrumbSchema, makeFaqSchema } from "@/components/Seo";
import { homeFaqs } from "@/lib/seoContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Seo
        title="Wedding Planner in Ireland | Weddings with Erica"
        description="Wedding planner in Ireland Erica Egan offers full planning, partial planning, planning power hours and calm on-the-day coordination for couples across Ireland."
        schema={[businessSchema, websiteSchema, tiktokVideoSchema, makeFaqSchema(homeFaqs, "/#wedding-planner-ireland-faq"), makeBreadcrumbSchema([{ name: "Home", path: "/" }])]}
      />
      <Navigation />
      <main>
        <Hero />
        <MeetErica />
        <Services />
        <IrelandSeoContent />
        <Testimonials />
        <TikTokCarousel />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
