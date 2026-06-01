import { motion } from "framer-motion";
import { useLocation } from "wouter";
import heroImg from "@assets/hero_image_1780239389448.png";

const differences = [
  {
    number: "01",
    heading: "One planner. Full attention.",
    body: "You'll never be handed off to a junior coordinator or feel like one of many. From your first enquiry to your last dance, it's just me — fully present, fully invested, and fully across every detail of your day.",
  },
  {
    number: "02",
    heading: "A supplier network built over a decade.",
    body: "I've spent 10+ years forging genuine relationships with Ireland's finest photographers, florists, musicians, and caterers. When I recommend someone, it's because I've seen them work — not because they're on a paid list.",
  },
  {
    number: "03",
    heading: "Calm that's actually contagious.",
    body: "Wedding days can throw surprises. A missing buttonhole, a late supplier, a nervous groom. I handle it all quietly and efficiently — so you never know, and you never worry. My calm becomes your calm.",
  },
];

export function ServicesWhy() {
  const [, navigate] = useLocation();

  return (
    <>
      {/* ── What makes Erica different ── */}
      <section className="py-20 md:py-28 bg-[hsl(90,22%,26%)] overflow-hidden">
        <div className="mx-auto px-6 md:px-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <span className="text-[13px] uppercase tracking-[0.28em] text-primary-foreground/45 mb-4 font-sans block">The Difference</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground leading-[1.1] max-w-2xl">
              Not all wedding planners<br />
              are the <em className="not-italic text-[hsl(90,35%,72%)]">same.</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {differences.map((d, i) => (
              <motion.div
                key={d.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="py-10 md:py-0 md:px-12 first:pl-0 last:pr-0 flex flex-col gap-5"
              >
                <span className="font-serif text-5xl text-white/10 leading-none">{d.number}</span>
                <div className="w-8 h-px bg-[hsl(90,35%,55%)]/50" />
                <h3 className="font-serif text-2xl text-primary-foreground leading-[1.2]">{d.heading}</h3>
                <p className="text-primary-foreground/55 font-light text-[1.05rem] leading-[1.85]">{d.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <p className="font-serif text-xl text-primary-foreground/70 italic max-w-lg leading-relaxed">
              "I want you to remember your wedding for how it felt — not for how stressful the planning was."
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="btn-shine shrink-0 bg-primary text-primary-foreground px-10 py-4 text-[12px] uppercase tracking-[0.22em] shadow-sm hover:shadow-md hover:bg-primary/90 transition-all duration-300 font-sans"
            >
              Enquire Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Venue types strip ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto px-6 md:px-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-4 font-sans block">Every Style, Every Couple</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1]">
              Whatever your <em className="not-italic text-primary">wedding looks like</em>
            </h2>
            <p className="text-foreground/65 font-light text-[1.05rem] mt-4 max-w-xl leading-relaxed">
              From grand castle celebrations to intimate countryside gatherings — every wedding style gets the same level of care, calm, and expertise.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: "Castle & Estate", desc: "Grand venues, elaborate logistics — handled with precision and grace." },
              { style: "Countryside & Garden", desc: "Outdoor details and relaxed elegance, kept perfectly on schedule." },
              { style: "Hotel & Ballroom", desc: "Seamless coordination across multiple spaces and suppliers." },
              { style: "Destination & Abroad", desc: "Planning across time zones and cultures — calm, clear, and thorough." },
            ].map((item, i) => (
              <motion.div
                key={item.style}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                className="p-8 bg-[hsl(40,18%,96%)] border border-border/20 hover:border-primary/20 transition-colors"
              >
                <div className="w-6 h-px bg-primary/40 mb-5" />
                <h3 className="font-serif text-xl text-foreground mb-3">{item.style}</h3>
                <p className="text-foreground/60 font-light text-[1rem] leading-[1.8]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
