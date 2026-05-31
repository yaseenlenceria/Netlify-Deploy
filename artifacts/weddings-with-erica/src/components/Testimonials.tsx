import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import review1Img from "@assets/review_1780239389448.jpg";
import review2Img from "@assets/review2_1780239389449.jpg";
import review3Img from "@assets/review3_1780239389449.jpg";

const testimonials = [
  {
    quote:
      "Planning a wedding overseas from the United States for our October 2025 wedding in Athlone, Ireland felt incredibly overwhelming at first, but Erica made the entire experience seamless, organised, and genuinely enjoyable from start to finish.\n\nErica was absolutely phenomenal every single step of the way. She kept us on track, answered every question with patience and kindness, and made us feel completely supported despite the distance and time differences. Her professionalism, warmth, and attention to detail were unmatched.\n\nBy the end of this journey, we truly felt like we had gained a lifelong friend — not just an incredible wedding coordinator. Our wedding day was everything we dreamed of and more.",
    author: "Overseas Couple",
    occasion: "Athlone, Ireland — 2025",
    image: review1Img,
  },
  {
    quote:
      "We were so happy to have Erica as our wedding coordinator! From our very first meeting, we instantly clicked — she helped me make decisions I'd been stuck on within minutes.\n\nErica brought such a friendly, bubbly, and calm presence to our day while seamlessly running the show behind the scenes. She constantly reminded me to take it all in and enjoy every moment whenever the nerves crept in.\n\nShe helped us tailor the day perfectly to both us and our guests, and we honestly couldn't have been happier with how everything turned out. Our guests are still raving about the food, venue, and music!",
    author: "Emma & John",
    occasion: "Ireland — 2025",
    image: review2Img,
  },
  {
    quote:
      "I cannot recommend Erica highly enough. From our very first conversation, I knew she was exactly what we needed. She took every worry off our shoulders, handled every detail with such care, and made our wedding day feel effortless.\n\nHer calm, professional manner meant that even when small things didn't go to plan, everything was handled quietly and seamlessly — we didn't know a thing until after the day was over. We just got to enjoy every single moment.\n\nIf you're thinking about booking Erica, just do it. Best decision we made for our wedding.",
    author: "Emma & John",
    occasion: "Ireland — 2024",
    image: review3Img,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };

  const t = testimonials[current];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 50 : -50 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -50 : 50 }),
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="mx-auto px-6 md:px-10 max-w-7xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-20"
        >
          <span className="text-[11px] uppercase tracking-[0.28em] text-primary/60 font-sans block mb-3">
            Kind Words
          </span>
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-10 mb-4">
            <h2 className="text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-serif text-foreground">
              What Couples Say
            </h2>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-[18px] h-[18px] fill-primary/55 text-primary/55" />
                ))}
              </div>
              <span className="text-[13px] text-foreground/45 font-sans font-light tracking-wide">5.0 · 100+ reviews</span>
            </div>
          </div>
          <p className="text-foreground/50 font-light text-[1.05rem] max-w-xl leading-[1.85]">
            Real words from real couples who trusted me with their most important day — and who genuinely enjoyed every moment of it.
          </p>
        </motion.div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid md:grid-cols-[320px_1fr] lg:grid-cols-[400px_1fr] gap-12 md:gap-20 items-start"
          >
            {/* Photo */}
            <div className="w-full max-w-[300px] md:max-w-none mx-auto md:mx-0 overflow-hidden shadow-lg">
              <img
                src={t.image}
                alt={t.author}
                className="w-full aspect-[3/4] object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Quote */}
            <div className="flex flex-col justify-center pt-2 md:pt-8">
              <span className="font-serif text-[5rem] text-primary/12 leading-none select-none -mb-4">"</span>
              <p className="text-[1.2rem] md:text-[1.35rem] font-serif text-foreground/78 leading-[1.78] whitespace-pre-line mb-10">
                {t.quote}
              </p>
              <div className="flex items-center gap-5">
                <div className="w-10 h-px bg-primary/35" />
                <div>
                  <p className="text-[12px] uppercase tracking-[0.22em] text-primary font-sans font-medium">{t.author}</p>
                  <p className="text-[12px] text-foreground/40 font-light mt-1 font-sans tracking-wide">{t.occasion}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-between mt-14 md:mt-16">
          <div className="flex gap-2.5 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`h-[2px] rounded-full transition-all duration-300 ${
                  current === i ? "bg-primary w-10" : "bg-border/50 w-5"
                }`}
                data-testid={`test-dot-${i}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => go(Math.max(0, current - 1))}
              disabled={current === 0}
              className={`h-12 w-12 flex items-center justify-center border transition-all duration-200 ${
                current > 0
                  ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  : "border-border/30 text-border/40 cursor-not-allowed"
              }`}
              data-testid="test-prev"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(Math.min(testimonials.length - 1, current + 1))}
              disabled={current === testimonials.length - 1}
              className={`h-12 w-12 flex items-center justify-center border transition-all duration-200 ${
                current < testimonials.length - 1
                  ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  : "border-border/30 text-border/40 cursor-not-allowed"
              }`}
              data-testid="test-next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
