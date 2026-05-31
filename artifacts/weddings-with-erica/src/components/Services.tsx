import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const services = [
  {
    title: "Signature Day Coordination",
    description: "Perfect for couples who have planned everything themselves but want to fully relax and enjoy the day.\n\nFollowing a detailed planning call around 6 weeks before the wedding, I'll be there to manage the timelines, suppliers, logistics, and key moments behind the scenes — ensuring everything flows seamlessly from morning through to your first dance.",
    image: "/images/service-signature.png"
  },
  {
    title: "Partial Planning Support",
    description: "Ongoing support for couples who would love guidance throughout the planning process while still leading the planning themselves.\n\nFrom supplier recommendations and timelines to advice, structure, and coordination, I'll help bring calm and clarity every step of the way — while also being there on the wedding day itself to ensure everything runs seamlessly.\n\nTypically begins around 4 months before the wedding.",
    image: "/images/service-partial.png"
  },
  {
    title: "Full Planning + Coordination",
    description: "Complete support from the early stages of planning right through to your wedding day.\n\nFrom venue sourcing and supplier management to timelines, logistics, styling, and full coordination — I'll guide every detail with a calm, organised, and thoughtful approach.\n\nDesigned to make the entire experience feel seamless and stress-free.",
    image: "/images/service-full.png"
  },
  {
    title: "Planning Power Hour",
    description: "A focused 1:1 consultation designed to bring clarity, guidance, and confidence to your wedding plans.\n\nPerfect for couples who feel stuck, overwhelmed, or simply want expert advice and reassurance before moving forward.\n\nUsually 1.5 hours.",
    image: "/images/service-power-hour.png"
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">How Can I Help</h2>
            <p className="text-foreground/70 font-light text-lg">Tailored support to ensure your day runs seamlessly.</p>
          </div>
          <div className="flex gap-4 hidden md:flex" id="service-controls-desktop">
            {/* Nav buttons rendered via portal or just placed in carousel later, here we rely on the built-in Carousel controls inside */}
          </div>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-8">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col h-full bg-background border border-border hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-md"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-serif text-primary mb-4">{service.title}</h3>
                    <div className="text-foreground/80 font-light space-y-4 flex-grow text-[15px] leading-relaxed whitespace-pre-line">
                      {service.description}
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-4 mt-12">
            <CarouselPrevious className="static translate-y-0 h-14 w-14 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none transition-colors" data-testid="services-prev" />
            <CarouselNext className="static translate-y-0 h-14 w-14 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none transition-colors" data-testid="services-next" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
