import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Clock, MessageCircle, ShieldCheck } from "lucide-react";
import ericaPortrait from "@assets/meet_erica_1780239389447.png";

const pillars = [
  {
    icon: ShieldCheck,
    title: "100+ Weddings",
    body: "With over a decade of experience coordinating weddings across Ireland and internationally, you're in the most capable hands.",
  },
  {
    icon: Clock,
    title: "Responds within 48 hours",
    body: "I know that waiting for a reply can be stressful. I always come back to every enquiry promptly, with warmth and care.",
  },
  {
    icon: MessageCircle,
    title: "A conversation, not a sales pitch",
    body: "My discovery call is genuinely about getting to know you and figuring out how I can best support you — nothing more.",
  },
];

export function ContactExtras() {
  const [, navigate] = useLocation();

  return (
    <>
      {/* ── Why Erica ── */}
      <section className="py-20 md:py-28 bg-[hsl(40,18%,94%)]">
        <div className="mx-auto px-6 md:px-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left: image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative h-[480px] md:h-[560px] overflow-hidden order-last lg:order-first"
            >
              <img
                src={ericaPortrait}
                alt="Erica Egan"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </motion.div>

            {/* Right: text */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            >
              <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-4 font-sans block">Why Erica</span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] mb-8">
                You're not just a<br />
                booking to me.
              </h2>
              <p className="text-foreground/70 font-light text-[1.05rem] leading-[1.9] mb-10">
                Every couple I work with is treated as if they're my only couple. I invest time, energy, and genuine care into every single wedding — not because it's my job, but because I know how much this day means to you.
              </p>

              <div className="space-y-8">
                {pillars.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex gap-5"
                  >
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-primary/25 text-primary/70">
                      <p.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-foreground mb-1">{p.title}</h3>
                      <p className="text-foreground/65 font-light text-[1.05rem] leading-[1.8]">{p.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => navigate("/meet-erica")}
                className="mt-10 text-primary border border-primary/30 px-8 py-3.5 text-[14px] uppercase tracking-[0.2em] hover:border-primary/60 transition-colors font-sans"
              >
                More About Erica
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
