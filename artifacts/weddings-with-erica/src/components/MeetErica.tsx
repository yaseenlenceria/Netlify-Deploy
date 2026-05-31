import { motion } from "framer-motion";
import ericaPortrait from "@assets/meet_erica_1780239389447.png";
import coupleImg from "@assets/meet_erica_3_1780239389447.png";

export function MeetErica() {
  return (
    <section id="meet" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="mx-auto px-6 md:px-10 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85 }}
            className="relative flex gap-3 md:gap-4 items-end order-last md:order-first"
          >
            <div className="w-[57%] aspect-[3/4] overflow-hidden shadow-md">
              <img
                src={ericaPortrait}
                alt="Erica Egan — Wedding Planner"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="w-[40%] aspect-[2/3] overflow-hidden shadow-md mb-10">
              <img
                src={coupleImg}
                alt="Happy couple on their wedding day"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 w-24 h-24 border border-primary/15 -z-10 hidden md:block" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.12 }}
          >
            <span className="text-[11px] uppercase tracking-[0.25em] text-primary/60 mb-5 font-sans block">Meet Erica</span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.7rem] font-serif text-foreground mb-7 leading-[1.2]">
              Planning your wedding should feel exciting — not overwhelming.
            </h2>
            <div className="space-y-4 text-foreground/65 font-light leading-[1.85] text-[1.0rem]">
              <p>
                I'm Erica, a wedding planner here to keep things calm, organised, and running exactly as they should. From the big decisions to the smallest details, I'll guide you through it all in a way that feels simple, supportive, and manageable.
              </p>
              <p>
                I know how important it is to feel fully present on your wedding day — not worrying about timelines, suppliers, or what's happening behind the scenes. That's where I come in.
              </p>
              <p>
                From the lead-up to the final dance, I'm there making sure everything flows seamlessly, everything is handled, and nothing falls back on you — so you can relax and truly enjoy every moment.
              </p>
            </div>
            <p className="mt-7 text-primary font-serif text-xl leading-relaxed italic">
              Think of me as the calm, organised presence in your corner… making sure your wedding feels as good as it looks.
            </p>

            {/* Stats */}
            <div className="mt-9 pt-8 border-t border-border/40 grid grid-cols-3 gap-4 text-center">
              {[
                { stat: "100+", label: "Weddings" },
                { stat: "5★", label: "Rating" },
                { stat: "10+", label: "Years" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-serif text-2xl md:text-3xl text-primary mb-1">{item.stat}</p>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-sans">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
