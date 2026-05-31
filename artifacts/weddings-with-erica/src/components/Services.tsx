import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Signature Day Coordination",
    tag: "Most Popular",
    description:
      "Perfect for couples who have planned everything themselves but want to fully relax and enjoy the day.\n\nFollowing a detailed planning call around 6 weeks before the wedding, I'll be there to manage the timelines, suppliers, logistics, and key moments behind the scenes — ensuring everything flows seamlessly from morning through to your first dance.",
    image: "/images/service-signature.png",
  },
  {
    title: "Partial Planning Support",
    tag: "",
    description:
      "Ongoing support for couples who would love guidance throughout the planning process while still leading the planning themselves.\n\nFrom supplier recommendations and timelines to advice, structure, and coordination, I'll help bring calm and clarity every step of the way — while also being there on the wedding day itself to ensure everything runs seamlessly.\n\nTypically begins around 4 months before the wedding.",
    image: "/images/service-partial.png",
  },
  {
    title: "Full Planning + Coordination",
    tag: "",
    description:
      "Complete support from the early stages of planning right through to your wedding day.\n\nFrom venue sourcing and supplier management to timelines, logistics, styling, and full coordination — I'll guide every detail with a calm, organised, and thoughtful approach.\n\nDesigned to make the entire experience feel seamless and stress-free.",
    image: "/images/service-full.png",
  },
  {
    title: "Planning Power Hour",
    tag: "",
    description:
      "A focused 1:1 consultation designed to bring clarity, guidance, and confidence to your wedding plans.\n\nPerfect for couples who feel stuck, overwhelmed, or simply want expert advice and reassurance before moving forward.\n\nUsually 1.5 hours.",
    image: "/images/service-power-hour.png",
  },
];

const GAP = 24; // px gap between cards

export function Services() {
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const computeCardWidth = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.offsetWidth;
    // On desktop show 3 cards + 0.25 peek; on tablet 2 + peek; mobile 1 + peek
    let cols = 3.25;
    if (w < 900) cols = 2.15;
    if (w < 600) cols = 1.1;
    setCardWidth((w - GAP * Math.floor(cols)) / cols);
  }, []);

  useEffect(() => {
    computeCardWidth();
    const ro = new ResizeObserver(computeCardWidth);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [computeCardWidth]);

  const maxIndex = services.length - 1;
  const canPrev = current > 0;
  const canNext = current < maxIndex;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  const offset = -(current * (cardWidth + GAP));

  return (
    <section id="services" className="py-24 md:py-36 bg-[hsl(40,20%,94%)] overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary/60 font-sans mb-4 block">Services</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">How Can I Help</h2>
            <p className="text-foreground/60 font-light text-base mt-3 max-w-md">
              Tailored support to ensure your day runs seamlessly — whatever level of help you need.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={prev}
              disabled={!canPrev}
              className={`h-12 w-12 flex items-center justify-center border transition-all duration-200 ${
                canPrev
                  ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  : "border-border/40 text-border cursor-not-allowed"
              }`}
              data-testid="services-prev"
              aria-label="Previous service"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={!canNext}
              className={`h-12 w-12 flex items-center justify-center border transition-all duration-200 ${
                canNext
                  ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  : "border-border/40 text-border cursor-not-allowed"
              }`}
              data-testid="services-next"
              aria-label="Next service"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div ref={containerRef} className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: offset }}
            transition={{ type: "spring", stiffness: 300, damping: 38, mass: 0.8 }}
            style={{ gap: GAP }}
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex-shrink-0 flex flex-col bg-white border border-border/30 hover:border-primary/20 hover:shadow-lg transition-all duration-500 overflow-hidden"
                style={{ width: cardWidth || "30%" }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  {service.tag && (
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest px-3 py-1.5 font-sans">
                      {service.tag}
                    </span>
                  )}
                </div>
                {/* Text */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-serif text-primary mb-4 leading-snug">{service.title}</h3>
                  <div className="text-foreground/65 font-light text-[15px] leading-relaxed whitespace-pre-line flex-grow">
                    {service.description}
                  </div>
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="mt-8 text-[11px] uppercase tracking-widest text-primary border-b border-primary/40 hover:border-primary pb-0.5 self-start transition-colors duration-200 font-sans"
                    data-testid={`service-enquire-${i}`}
                  >
                    Enquire About This
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === i ? "bg-primary w-6" : "bg-border w-1.5"
              }`}
              data-testid={`service-dot-${i}`}
              aria-label={`Go to service ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
