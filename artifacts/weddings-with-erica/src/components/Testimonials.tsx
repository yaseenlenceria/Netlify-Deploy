import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Planning a wedding overseas from the United States for our October 2025 wedding in Athlone, Ireland felt incredibly overwhelming at first, but Erica made the entire experience seamless, organized, and genuinely enjoyable from start to finish.\n\nErica was absolutely phenomenal every single step of the way. She kept us on track throughout the planning process, answered every question with patience and kindness, and made us feel completely supported despite the distance and time differences. Her professionalism, warmth, and attention to detail were unmatched.\n\nBy the end of this journey, we truly felt like we had gained a lifelong friend — not just an incredible wedding coordinator. Our wedding day was everything we dreamed of and more, and we could not have done it without her.",
    author: "An American couple",
    occasion: "Athlone 2025",
    image: "/images/testimonial-1.png"
  },
  {
    quote: "We were so happy to have Erica as our wedding coordinator! From our very first meeting, we instantly clicked, and she helped me make decisions I'd been stuck on within minutes.\n\nErica brought such a friendly, bubbly, and calm presence to our day while seamlessly running the show behind the scenes. She constantly reminded me to take it all in and enjoy every moment whenever the nerves started to creep in.\n\nShe helped us tailor the day perfectly to both us and our guests, and we honestly couldn't have been happier with how everything turned out. Our guests are still raving about the food, venue, and music!",
    author: "Emma & John",
    occasion: "Happy newly-weds",
    image: "/images/testimonial-2.png"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <Carousel opts={{ align: "center", loop: true }} className="w-full">
          <CarouselContent>
            {testimonials.map((t, index) => (
              <CarouselItem key={index}>
                <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-center">
                  <div className="aspect-[4/5] w-full max-w-md mx-auto md:mr-0 overflow-hidden shadow-sm">
                    <img src={t.image} alt="Happy couple" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center max-w-2xl py-8">
                    <span className="text-8xl font-serif text-primary/10 leading-[0.5] mb-4">"</span>
                    <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed whitespace-pre-line mb-10">
                      {t.quote}
                    </p>
                    <div>
                      <p className="text-primary font-medium tracking-wide uppercase text-sm">{t.author}</p>
                      <p className="text-muted-foreground text-sm font-light mt-1">{t.occasion}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center md:justify-end gap-4 mt-16 md:mt-0 md:-translate-y-24 md:mr-12">
            <CarouselPrevious className="static translate-y-0 h-14 w-14 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none" data-testid="test-prev" />
            <CarouselNext className="static translate-y-0 h-14 w-14 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none" data-testid="test-next" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
