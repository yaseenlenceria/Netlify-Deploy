import { motion } from "framer-motion";
import ericaPortrait from "@assets/IMG_2572_(1)_1780238892941.jpeg";
import coupleImg from "@assets/IMG_8119_1780238892941.jpeg";

export function MeetErica() {
  return (
    <section id="meet" className="py-24 md:py-36 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 lg:gap-32 items-center">

          {/* Images column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="relative flex gap-4 items-end order-last md:order-first"
          >
            {/* Tall primary portrait of Erica */}
            <div className="w-[55%] aspect-[3/4] overflow-hidden shadow-md flex-shrink-0">
              <img
                src={ericaPortrait}
                alt="Erica Egan — Wedding Planner"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            {/* Shorter couple/secondary image offset upward */}
            <div className="w-[42%] aspect-[2/3] overflow-hidden shadow-md mb-12">
              <img
                src={coupleImg}
                alt="Happy couple on their wedding day"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-28 h-28 border border-primary/20 -z-10 hidden md:block" />
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-primary/60 mb-5 font-sans">Meet Erica</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-[1.15]">
              Planning your wedding should feel exciting — not overwhelming.
            </h2>
            <div className="space-y-5 text-foreground/70 font-light leading-relaxed text-[17px]">
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
            <p className="mt-8 text-primary font-serif text-xl italic leading-relaxed">
              Think of me as the calm, organised presence in your corner… making sure your wedding feels as good as it looks.
            </p>
            <div className="mt-10 pt-10 border-t border-border/50 grid grid-cols-3 gap-6 text-center">
              {[
                { stat: "100+", label: "Weddings Planned" },
                { stat: "5★", label: "Client Rating" },
                { stat: "10+", label: "Years Experience" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-serif text-3xl text-primary mb-1">{item.stat}</p>
                  <p className="text-xs uppercase tracking-wider text-foreground/50 font-sans">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
