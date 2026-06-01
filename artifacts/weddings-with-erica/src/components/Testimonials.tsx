import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import emmajohnImg from "@assets/Emma_&_John_1780292849312.png";
import jennyconorImg from "@assets/Jenny_&_Conor_1780246212053.jpg";
import karinaAdrianImg from "@assets/Karina_&_Adrian_1780246238977.jpg";
import katiestevenImg from "@assets/Katie_&_Steven_1780292849313.png";
import andreluisImg from "@assets/Andre_&_Luis_1780247337187.jpg";
import amandamarcusImg from "@assets/Amanda_&_Marcus_1780246332890.png";

const testimonials = [
  {
    quote:
      "We were so happy to have Erica as our wedding coordinator! From our very first meeting, we instantly clicked, and she helped me make decisions I'd been stuck on within minutes.\n\nErica brought such a friendly and calm presence to our day while seamlessly running the show behind the scenes. She constantly reminded me to take it all in and enjoy every moment whenever the nerves started to creep in.\n\nShe helped us tailor the day perfectly to both us and our guests, and we honestly couldn't have been happier with how everything turned out. Our guests are still raving about the food, venue, and music! We would highly recommend Erica to anyone planning their wedding — she is such a kind, genuine person who truly goes above and beyond for her couples.",
    author: "Emma & John",
    occasion: "Ireland",
    image: emmajohnImg,
    imgPosition: "object-top",
  },
  {
    quote:
      "We couldn't recommend Erica more highly. From the first time I called her right through to our wedding celebration, she was an absolute joy to work with — professional, kind, calm, and completely organised from start to finish.\n\nPlanning a wedding can be very overwhelming, but from the moment I called Erica she put me at ease. She made the whole experience smooth and enjoyable. It was great to have someone with so much experience within the industry, recommending vendors that were perfectly suited to the day we were envisioning.\n\nWe are so grateful for Erica and we couldn't recommend her enough.",
    author: "Jenny & Conor",
    occasion: "Ireland",
    image: jennyconorImg,
    imgPosition: "object-top",
  },
  {
    quote:
      "We had the privilege of having Erica as our wedding planner for our wedding last May. From the get-go she was so helpful, friendly and put us at ease straight away. No question was too much, and she made sure we got the best deal with our wedding package.\n\nShe also gave us so many tips to make the day as streamlined as possible! We had a brilliant day and I definitely felt more organised from all her tips and advice. She's a wealth of knowledge — I would recommend her to anyone looking for help planning their wedding. She's amazing!",
    author: "Karina & Adrian",
    occasion: "Ireland",
    image: karinaAdrianImg,
    imgPosition: "object-center",
  },
  {
    quote:
      "Planning a wedding is never an easy feat, but having Erica by my side the whole way through made it one of my most treasured and easiest things I have ever done. There was no stone left unturned and she thought of everything so I didn't have to.\n\nNot only did the day go amazingly because of her, but seeing her lovely face and the warm hug we received when we saw her on the big day for the first time — it was like having your best friend by your side.\n\nErica is worth her weight in gold. And I can honestly say there is no one better in this industry than this woman. For any future couples — do yourselves a favour and make sure Erica is by your side on your big day.",
    author: "Katie & Steven",
    occasion: "Ireland",
    image: katiestevenImg,
    imgPosition: "object-top",
  },
  {
    quote:
      "We got married on the 23rd of March — we didn't have a specific theme in mind, just something small, intimate, and not very traditional. Erica dealt with planning our wedding with such ease.\n\nThe moment we stepped into the room we were amazed and emotional at how perfect the day was. The food, the music, the atmosphere — all simply perfect. It was and will always be the most perfect day that we will always remember, thanks to Erica.\n\nI would highly recommend Erica without hesitation.",
    author: "Andre & Luis",
    occasion: "Ireland",
    image: andreluisImg,
    imgPosition: "object-top",
  },
  {
    quote:
      "Planning a wedding overseas from the United States for our October 2025 wedding in Athlone, Ireland felt incredibly overwhelming at first — but Erica made the entire experience seamless, organised, and genuinely enjoyable from start to finish.\n\nShe kept us on track throughout the planning process, answered every question with patience and kindness, and made us feel completely supported despite the distance and time differences. Her professionalism, warmth, and attention to detail were unmatched.\n\nWhat makes Erica even more extraordinary is that she did all of this while also caring for her growing family. We were constantly amazed by her dedication and positivity. If you are considering Erica for your wedding, book her immediately. She is simply the best.",
    author: "Amanda & Marcus",
    occasion: "Athlone, Ireland — 2025",
    image: amandamarcusImg,
    imgPosition: "object-center",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
    // Reset auto-advance on manual interaction
    if (autoTimer.current) clearInterval(autoTimer.current);
    autoTimer.current = setInterval(() => {
      setCurrent((prev) => {
        setDirection(1);
        return (prev + 1) % testimonials.length;
      });
    }, 5000);
  };

  const prev = () => go(current === 0 ? testimonials.length - 1 : current - 1);
  const next = () => go((current + 1) % testimonials.length);

  // Auto-advance every 5 seconds
  useEffect(() => {
    autoTimer.current = setInterval(() => {
      setCurrent((prev) => {
        setDirection(1);
        return (prev + 1) % testimonials.length;
      });
    }, 5000);
    return () => { if (autoTimer.current) clearInterval(autoTimer.current); };
  }, []);

  // Touch/swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  const t = testimonials[current];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="mx-auto px-6 md:px-10 max-w-7xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-4 font-sans block"
          >
            Kind Words
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.85, delay: 0.3, ease: "easeOut" }}
            className="text-5xl md:text-[3.4rem] lg:text-[4rem] font-serif text-foreground mb-4 leading-[1.08]"
          >
            What <em className="not-italic text-primary">Couples Say</em>
          </motion.h1>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary/60 text-primary/60" />
              ))}
            </div>
            <span className="text-[14px] text-foreground/65 font-sans font-light">5.0 · 100+ reviews</span>
          </div>
          <p className="text-foreground/70 font-light text-[1.05rem] max-w-xl leading-relaxed">
            Real words from real couples who trusted me with their most important day — and who genuinely enjoyed every moment of it.
          </p>
        </motion.div>

        {/* Carousel — swipeable */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="grid md:grid-cols-[320px_1fr] lg:grid-cols-[380px_1fr] gap-8 md:gap-16 items-start"
            >
              {/* Left: Photo + controls (mobile-first so controls are always near the top) */}
              <div className="flex flex-col gap-4">
                {/* Photo */}
                <div className="w-full max-w-[320px] mx-auto md:mx-0 overflow-hidden shadow-md aspect-square">
                  <img
                    src={t.image}
                    alt={t.author}
                    className={`w-full h-full object-cover ${t.imgPosition}`}
                    loading="lazy"
                  />
                </div>

                {/* Author + navigation — right below the photo on mobile */}
                <div className="flex items-center justify-between max-w-[320px] mx-auto md:mx-0 w-full">
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-px bg-primary/40" />
                    <div>
                      <p className="text-[13px] uppercase tracking-[0.2em] text-primary font-sans">{t.author}</p>
                      <p className="text-[12px] text-foreground/50 font-light font-sans">{t.occasion}</p>
                    </div>
                  </div>

                  {/* Prev/Next arrows — always visible next to author */}
                  <div className="flex gap-2">
                    <button
                      onClick={prev}
                      className="h-11 w-11 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 active:scale-95"
                      data-testid="test-prev"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={next}
                      className="h-11 w-11 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 active:scale-95"
                      data-testid="test-next"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Dot indicators */}
                <div className="flex gap-2 items-center max-w-[320px] mx-auto md:mx-0">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => go(i)}
                      className={`h-[2px] rounded-full transition-all duration-500 ${
                        current === i ? "bg-primary w-8" : "bg-border w-4"
                      }`}
                      data-testid={`test-dot-${i}`}
                      aria-label={`Testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Right: Quote */}
              <div className="flex flex-col justify-center">
                <span className="font-serif text-7xl text-primary/10 leading-none select-none mb-3">"</span>
                <p className="text-lg md:text-xl font-serif text-foreground/80 leading-[1.75] whitespace-pre-line">
                  {t.quote}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Swipe hint — mobile only */}
        <p className="mt-6 text-center text-[12px] text-foreground/35 font-light font-sans md:hidden">
          Swipe left or right to read more
        </p>
      </div>
    </section>
  );
}
