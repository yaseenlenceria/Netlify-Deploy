import { motion } from "framer-motion";
import ericaPortrait from "@assets/meet_erica_1780239389447.png";
import coupleImg from "@assets/meet_erica_3_1780239389447.png";

export function MeetErica() {
  return (
    <section id="meet" className="relative min-h-[calc(100dvh-76px)] flex flex-col lg:flex-row overflow-hidden bg-background">

      {/* ── Left: text panel ── */}
      <motion.div
        initial={{ opacity: 0, x: -28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col justify-center px-8 md:px-14 lg:px-20 py-16 lg:py-0 bg-background lg:w-[52%] xl:w-[48%]"
      >
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary/55 font-sans mb-6 block">
          Meet Erica
        </span>

        <h2 className="font-serif text-[2.4rem] md:text-5xl lg:text-[3rem] xl:text-[3.4rem] text-foreground leading-[1.08] mb-8">
          Planning your wedding<br />
          <em className="not-italic text-primary">should feel exciting</em><br />
          — not overwhelming.
        </h2>

        <div className="space-y-4 text-foreground/60 font-light leading-[1.9] text-[1.05rem] max-w-lg">
          <p>
            I'm Erica, a wedding planner here to keep things calm, organised, and running exactly as they should. From the big decisions to the smallest details, I'll guide you through it all in a way that feels simple, supportive, and manageable.
          </p>
          <p>
            I know how important it is to feel fully present on your wedding day — not worrying about timelines, suppliers, or what's happening behind the scenes. That's where I come in.
          </p>
        </div>

        <p className="mt-7 text-primary font-serif text-xl xl:text-2xl leading-relaxed italic max-w-md">
          Think of me as the calm, organised presence in your corner — making sure your wedding feels as good as it looks.
        </p>

        {/* Stats */}
        <div className="mt-10 pt-8 border-t border-border/35 grid grid-cols-3 gap-6 max-w-sm">
          {[
            { stat: "100+", label: "Weddings" },
            { stat: "5★", label: "Rating" },
            { stat: "10+", label: "Years" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-serif text-3xl text-primary mb-1">{item.stat}</p>
              <p className="text-[11px] uppercase tracking-widest text-foreground/40 font-sans">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Right: two equal images ── */}
      <motion.div
        initial={{ opacity: 0, x: 28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative lg:w-[48%] xl:w-[52%] h-[80vw] lg:h-auto flex gap-2 md:gap-3"
      >
        {/* Left image */}
        <div className="flex-1 overflow-hidden">
          <img
            src={ericaPortrait}
            alt="Erica Egan — Wedding Planner"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>

        {/* Right image */}
        <div className="flex-1 overflow-hidden">
          <img
            src={coupleImg}
            alt="Happy couple at their wedding"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>

        {/* Soft left-fade into cream panel (desktop) */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none hidden lg:block" />
      </motion.div>
    </section>
  );
}
