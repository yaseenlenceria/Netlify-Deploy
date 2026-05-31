import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";
import signatureImg from "@assets/Signature_Day_Coordination_1780239389447.jpg";
import partialImg from "@assets/PARTIAL_PLANNING_SUPPORT_1780239389446.png";
import fullImg from "@assets/FULL_PLANNING_1780239389446.png";
import powerHourImg from "@assets/PLANNING_POWER_HOUR_1780239389447.png";

const services = [
  {
    title: "Signature Day Coordination",
    tag: "Most Popular",
    description:
      "Perfect for couples who have planned everything themselves but want to fully relax and enjoy the day.\n\nFollowing a detailed planning call around 6 weeks before the wedding, I'll be there to manage the timelines, suppliers, logistics, and key moments — ensuring everything flows seamlessly from morning through to your first dance.",
    image: signatureImg,
  },
  {
    title: "Partial Planning Support",
    tag: "",
    description:
      "Ongoing support for couples who would love guidance throughout the planning process while still leading the planning themselves.\n\nFrom supplier recommendations and timelines to advice, structure, and coordination, I'll help bring calm and clarity every step of the way — while also being there on the wedding day to ensure everything runs seamlessly.\n\nTypically begins around 4 months before the wedding.",
    image: partialImg,
  },
  {
    title: "Full Planning + Coordination",
    tag: "",
    description:
      "Complete support from the early stages of planning right through to your wedding day.\n\nFrom venue sourcing and supplier management to timelines, logistics, styling, and full coordination — I'll guide every detail with a calm, organised, and thoughtful approach.\n\nDesigned to make the entire experience feel seamless and stress-free.",
    image: fullImg,
  },
  {
    title: "Planning Power Hour",
    tag: "",
    description:
      "A focused 1:1 consultation designed to bring clarity, guidance, and confidence to your wedding plans.\n\nPerfect for couples who feel stuck, overwhelmed, or simply want expert advice and reassurance before moving forward.\n\nUsually 1.5 hours.",
    image: powerHourImg,
  },
];

const GAP = 20;

export function Services() {
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [, navigate] = useLocation();

  const computeCardWidth = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.offsetWidth;
    let cols = 3.2;
    if (w < 900) cols = 2.1;
    if (w < 580) cols = 1.08;
    setCardWidth((w - GAP * (Math.floor(cols) - 1)) / cols);
  }, []);

  useEffect(() => {
    computeCardWidth();
    const ro = new ResizeObserver(computeCardWidth);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [computeCardWidth]);

  const maxIndex = services.length - 1;
  const offset = -(current * (cardWidth + GAP));

  return (
    <section id="services" className="py-16 md:py-24 bg-[hsl(40,18%,94%)] overflow-hidden">
      <div className="mx-auto px-6 md:px-10 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-5"
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-primary/75 font-sans mb-3 block">How I Can Help</span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-serif text-foreground mb-3">Services</h2>
            <p className="text-foreground/70 font-light text-[1rem] max-w-md leading-relaxed">
              From complete wedding planning to on-the-day coordination — every package is tailored around you, your vision, and what you need most.
            </p>
          </div>
          <div className="flex gap-2.5 shrink-0">
            <button
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
              className={`h-11 w-11 flex items-center justify-center border transition-all duration-200 ${
                current > 0
                  ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  : "border-border/30 text-border/40 cursor-not-allowed"
              }`}
              data-testid="services-prev"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setCurrent((c) => Math.min(maxIndex, c + 1))}
              disabled={current === maxIndex}
              className={`h-11 w-11 flex items-center justify-center border transition-all duration-200 ${
                current < maxIndex
                  ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  : "border-border/30 text-border/40 cursor-not-allowed"
              }`}
              data-testid="services-next"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* Track */}
        <div ref={containerRef} className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: offset }}
            transition={{ type: "spring", stiffness: 320, damping: 40 }}
            style={{ gap: GAP }}
          >
            {services.map((service, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col bg-white overflow-hidden group hover:shadow-xl transition-shadow duration-500"
                style={{ width: cardWidth || "32%" }}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  {service.tag && (
                    <span className="text-[10px] uppercase tracking-widest text-primary/80 font-sans mb-3 inline-block">
                      — {service.tag}
                    </span>
                  )}
                  <h3 className="text-xl md:text-2xl font-serif text-foreground mb-4 leading-snug">{service.title}</h3>
                  <div className="text-foreground/75 font-light text-[0.95rem] leading-[1.85] whitespace-pre-line flex-grow">
                    {service.description}
                  </div>
                  <button
                    onClick={() => navigate("/contact")}
                    className="mt-7 text-[11px] uppercase tracking-widest text-primary border-b border-primary/30 hover:border-primary pb-0.5 self-start transition-colors duration-200 font-sans"
                    data-testid={`service-enquire-${i}`}
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                current === i ? "bg-primary w-6" : "bg-border/60 w-1"
              }`}
              data-testid={`service-dot-${i}`}
              aria-label={`Service ${i + 1}`}
            />
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-foreground/60 font-light text-[0.9rem] mt-10 font-sans"
        >
          Not sure which package is right for you?{" "}
          <button onClick={() => navigate("/contact")} className="text-primary underline underline-offset-4 hover:text-primary/70 transition-colors">
            Let's chat
          </button>{" "}
          — I'll help you figure it out.
        </motion.p>
      </div>
    </section>
  );
}
