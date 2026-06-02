import { motion } from "framer-motion";
import { useLocation } from "wouter";
import ericaPortrait from "@assets/meet_erica_1780239389447.jpg";
import coupleImg from "@assets/meet_erica_3_1780239389447.jpg";
import { FadeImage } from "@/components/FadeImage";

export function MeetErica() {
  const [, navigate] = useLocation();

  return (
    <section id="meet" className="relative min-h-[calc(100dvh-76px)] flex flex-col lg:flex-row overflow-hidden bg-background">

      {/* ── Left: two equal images ── */}
      <motion.div
        initial={{ opacity: 0, x: -28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "-80px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative lg:w-[48%] xl:w-[52%] h-[80vw] lg:h-auto flex gap-2 md:gap-3 order-last lg:order-first"
      >
        <div className="flex-1 overflow-hidden">
          <FadeImage
            src={ericaPortrait}
            alt="Erica Egan — Wedding Planner"
            className="w-full h-full object-cover object-top"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="flex-1 overflow-hidden">
          <FadeImage
            src={coupleImg}
            alt="Happy couple at their wedding"
            className="w-full h-full object-cover object-top"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none hidden lg:block" />
      </motion.div>

      {/* ── Right: text panel ── */}
      <motion.div
        initial={{ opacity: 0, x: 28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "-80px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col justify-center px-8 md:px-14 lg:px-16 xl:px-20 py-20 lg:py-24 bg-background lg:w-[52%] xl:w-[48%] order-first lg:order-last"
      >
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-4 font-sans block"
        >
          Ireland's Boutique Wedding Planner
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.85, delay: 0.3, ease: "easeOut" }}
          className="text-5xl md:text-[3.4rem] lg:text-[4rem] font-serif text-foreground mb-6 leading-[1.08]"
        >
          Meet <em className="not-italic text-primary">Erica</em>
        </motion.h1>

        <p className="text-foreground/65 font-light text-[1.05rem] mb-5 max-w-md italic leading-relaxed">
          Ireland-based wedding planner with over 10 years experience — working with couples across the country and internationally.
        </p>

        <div className="space-y-3 text-foreground/75 font-light leading-[1.85] text-[1rem] max-w-lg">
          <p>
            I'm Erica, a wedding planner here to keep things calm, organised, and running exactly as they should. From the big decisions to the smallest details, I'll guide you through it all in a way that feels simple, supportive, and manageable.
          </p>
          <p>
            I know how important it is to feel fully present on your wedding day — not worrying about timelines, suppliers, or what's happening behind the scenes. That's where I come in.
          </p>
        </div>

        <p className="mt-6 text-primary font-serif text-xl xl:text-2xl leading-relaxed italic max-w-md">
          Think of me as the calm, organised presence in your corner — making sure your wedding feels as good as it looks.
        </p>

        {/* Stats */}
        <div className="mt-8 pt-7 border-t border-border/35 grid grid-cols-3 gap-6 max-w-sm">
          {[
            { stat: "100+", label: "Weddings" },
            { stat: "5★", label: "Rating" },
            { stat: "10+", label: "Years" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-serif text-3xl text-primary mb-1">{item.stat}</p>
              <p className="text-[13px] uppercase tracking-widest text-foreground/40 font-sans">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate("/contact")}
            className="btn-shine bg-primary text-primary-foreground px-10 py-4 text-[12px] uppercase tracking-[0.22em] shadow-sm hover:shadow-md hover:bg-primary/90 transition-all duration-300 font-sans w-fit"
          >
            Get in Touch
          </button>
          <button
            onClick={() => navigate("/services")}
            className="border border-primary/30 text-primary px-10 py-4 text-[12px] uppercase tracking-[0.22em] hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 font-sans w-fit"
          >
            View Services
          </button>
        </div>
      </motion.div>

    </section>
  );
}
