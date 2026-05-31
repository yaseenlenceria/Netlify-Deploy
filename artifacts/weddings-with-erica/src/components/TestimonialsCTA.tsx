import { motion } from "framer-motion";
import { useLocation } from "wouter";
import heroImg from "@assets/hero_image_1780239389448.png";
import review1Img from "@assets/review_1780239389448.jpg";
import review2Img from "@assets/review2_1780239389449.jpg";
import review3Img from "@assets/review3_1780239389449.jpg";

const highlights = [
  {
    image: review1Img,
    quote: "Our wedding day was everything we dreamed of and more.",
    author: "Overseas Couple",
    occasion: "Athlone, Ireland — 2025",
  },
  {
    image: review2Img,
    quote: "Erica brought such a calm, bubbly presence — she made every moment better.",
    author: "Emma & John",
    occasion: "Ireland — 2025",
  },
  {
    image: review3Img,
    quote: "Best decision we made for our wedding. Just book her.",
    author: "Emma & John",
    occasion: "Ireland — 2024",
  },
];

export function TestimonialsCTA() {
  const [, navigate] = useLocation();

  return (
    <>
      {/* ── Couple highlights grid ── */}
      <section className="py-20 md:py-28 bg-[hsl(40,18%,94%)]">
        <div className="mx-auto px-6 md:px-14 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-4 font-sans block">Their Words</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1]">
              Moments that <em className="not-italic text-primary">stay with you</em>
            </h2>
            <p className="text-foreground/65 font-light text-[1rem] mt-4 max-w-lg leading-relaxed">
              Every couple has their own story. Here's what a few of them said about their experience working with Erica.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="group overflow-hidden bg-white"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={h.image}
                    alt={h.author}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className="font-serif text-lg text-foreground/85 italic leading-relaxed mb-4">"{h.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-px bg-primary/40" />
                    <div>
                      <p className="text-[13px] uppercase tracking-[0.2em] text-primary font-sans">{h.author}</p>
                      <p className="text-[13px] text-foreground/45 font-light font-sans mt-0.5">{h.occasion}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <img src={heroImg} alt="Beautiful wedding" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-foreground/65" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto px-6 max-w-2xl text-center"
        >
          <span className="text-[13px] uppercase tracking-[0.3em] text-primary-foreground/55 font-sans mb-5 block">Your Turn</span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground leading-[1.1] mb-6">
            Ready to write your<br />
            <em className="not-italic text-primary/80">own story?</em>
          </h2>
          <p className="text-primary-foreground/70 font-light text-[1.05rem] leading-relaxed mb-10 max-w-lg mx-auto">
            Every couple on this page was once exactly where you are now — wondering if they needed a wedding planner. They're all glad they did.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-primary text-primary-foreground px-12 py-4 text-[14px] uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors font-sans"
          >
            Start Planning
          </button>
        </motion.div>
      </section>
    </>
  );
}
