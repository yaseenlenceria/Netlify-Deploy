import { motion } from "framer-motion";
import { useLocation } from "wouter";
import ericaPortrait from "@assets/meet_erica_1780239389447.jpg";
import { FadeImage } from "@/components/FadeImage";

const pillars = [
  {
    number: "01",
    title: "100+ Weddings",
    body: "With over a decade of experience coordinating weddings across Ireland and internationally, you're in the most capable, experienced hands.",
  },
  {
    number: "02",
    title: "Responds within 48 hours",
    body: "Waiting for a reply is stressful — I know. I always come back to every enquiry promptly, personally, and with warmth.",
  },
  {
    number: "03",
    title: "A conversation, not a sales pitch",
    body: "My discovery call is genuinely about getting to know you. I'll listen far more than I talk, and there's no pressure — ever.",
  },
];

export function ContactExtras() {
  const [, navigate] = useLocation();

  return (
    <>
      {/* ── Why Erica — editorial split ── */}
      <section className="bg-[hsl(40,18%,94%)] overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[600px]">

          {/* Left: large portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative h-[60vw] lg:h-auto overflow-hidden order-last lg:order-first"
          >
            <FadeImage
              src={ericaPortrait}
              alt="Erica Egan — Wedding Planner"
              className="w-full h-full object-cover object-top"
              loading="lazy"
              decoding="async"
            />
            {/* subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[hsl(40,18%,94%)]/40 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent" />

            {/* Badge pinned bottom-left */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute bottom-8 left-8 bg-background/90 backdrop-blur-sm px-6 py-4 max-w-[220px]"
            >
              <p className="font-serif text-2xl text-foreground leading-none mb-1">100+</p>
              <p className="text-[11px] uppercase tracking-widest text-foreground/50 font-sans">Happy couples</p>
            </motion.div>
          </motion.div>

          {/* Right: text panel */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.95, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col justify-center px-8 md:px-14 lg:px-16 xl:px-20 py-20 lg:py-24"
          >
            <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-5 font-sans block">Why Erica</span>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.2rem] text-foreground leading-[1.08] mb-6">
              You're not just a<br />
              <em className="not-italic text-primary">booking to me.</em>
            </h2>

            <p className="text-foreground/68 font-light text-[1.05rem] leading-[1.9] mb-12 max-w-md">
              Every couple I work with is treated as if they're my only couple. I invest time, energy, and genuine care into every single wedding — not because it's my job, but because I know how much this day means to you.
            </p>

            <div className="space-y-0 divide-y divide-border/30">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.number}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.65, delay: i * 0.12 }}
                  className="py-7 flex gap-7 items-start"
                >
                  <span className="font-serif text-3xl text-primary/20 leading-none shrink-0 mt-1">{p.number}</span>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">{p.title}</h3>
                    <p className="text-foreground/60 font-light text-[1rem] leading-[1.8]">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => navigate("/meet-erica")}
              className="mt-10 border border-primary/30 text-primary px-10 py-4 text-[12px] uppercase tracking-[0.22em] hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 font-sans w-fit"
            >
              More About Erica
            </button>
          </motion.div>

        </div>
      </section>

      {/* ── What happens after you enquire ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto px-6 md:px-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-4 font-sans block">What Happens Next</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1]">
              After you press <em className="not-italic text-primary">send</em>
            </h2>
            <p className="text-foreground/65 font-light text-[1.05rem] mt-4 max-w-xl leading-relaxed">
              No automated responses, no long waits. Here's exactly what you can expect once your enquiry lands in my inbox.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border/30">
            {[
              {
                step: "Within 48 Hours",
                title: "A personal reply",
                desc: "I'll read your enquiry carefully and reply personally — not with an automated template. I want to understand your day before anything else.",
              },
              {
                step: "Next Step",
                title: "A discovery call",
                desc: "We'll arrange a relaxed call to get to know each other. No pressure, no pitch — just a genuine conversation about your wedding and what you need.",
              },
              {
                step: "If It's a Fit",
                title: "A tailored proposal",
                desc: "If we click and my services feel right for you, I'll send a personalised proposal and we can get the planning underway.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.65, delay: i * 0.12 }}
                className="py-10 sm:py-0 sm:px-10 first:pl-0 last:pr-0"
              >
                <span className="text-[11px] uppercase tracking-[0.28em] text-primary/55 font-sans mb-3 block">{item.step}</span>
                <h3 className="font-serif text-2xl text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/60 font-light text-[1rem] leading-[1.8]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
