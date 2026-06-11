import { Fragment } from "react";
import { motion } from "framer-motion";
import coupleImg from "@assets/meet_erica_3_1780239389447.jpg";
import aboveContactImg from "@assets/above_contact_1780239389448.jpg";
import { FadeImage } from "@/components/FadeImage";

const facts = [
  {
    label: "Based In",
    value: "Ireland",
    detail: "Based in the Midlands of Ireland and working with couples across the country.",
  },
  {
    label: "Experience",
    value: "10+ Years",
    detail: "Over a decade helping couples navigate wedding planning with confidence and calm.",
  },
  {
    label: "Weddings",
    value: "100+",
    detail: "Every single one treated with the same care and dedication.",
  },
  {
    label: "Approach",
    value: "Calm & Personal",
    detail: "No agency feel — just one dedicated planner, firmly in your corner.",
  },
  {
    label: "Philosophy",
    value: "Present Moments",
    detail: "Helping you feel calm, present and able to enjoy every moment.",
  },
];

export function EricaPersonal() {
  return (
    <>
      {/* ── Personal strip ── */}
      <section className="py-20 md:py-28 bg-background overflow-hidden">
        <div className="mx-auto px-6 md:px-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-4 font-sans block">A Little About Me</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1]">
              The person behind <em className="not-italic text-primary">the planning</em>
            </h2>
            <p className="text-foreground/65 font-light text-[1.05rem] mt-5 max-w-xl leading-relaxed">
              I believe the planner behind your wedding matters just as much as the planning itself. Here's a little of what makes me, me.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr_1px_1fr] items-start gap-0">
            {facts.map((fact, i) => (
              <Fragment key={fact.label}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.65, delay: i * 0.1 }}
                  className="py-6 md:py-0 md:px-8 first:pl-0 flex flex-col gap-2 border-b md:border-b-0 border-border/20 last:border-0"
                >
                  <span className="text-[11px] uppercase tracking-[0.28em] text-primary/55 font-sans">{fact.label}</span>
                  <p className="font-serif text-[1.6rem] text-foreground leading-tight">{fact.value}</p>
                  <p className="text-foreground/55 font-light text-[0.9rem] leading-[1.7]">{fact.detail}</p>
                </motion.div>
                {i < facts.length - 1 && (
                  <div className="hidden md:block self-stretch w-px bg-border/25 mx-0" />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two-image editorial panel ── */}
      <section className="py-20 md:py-28 bg-[hsl(90,18%,94%)]">
        <div className="mx-auto px-6 md:px-10 max-w-7xl">
          <div className="grid lg:grid-cols-[55%_1fr] gap-10 lg:gap-16 items-center">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="grid grid-cols-2 gap-3 h-[500px] md:h-[580px]"
            >
              <div className="overflow-hidden">
                <FadeImage
                  src={aboveContactImg}
                  alt="Erica with a couple on their wedding day"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="overflow-hidden mt-12">
                <FadeImage
                  src={coupleImg}
                  alt="Happy couple celebrating"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              className="flex flex-col gap-7"
            >
              <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 font-sans block">Why It Matters</span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1]">
                I chose this work<br />
                <em className="not-italic text-primary">because I love it.</em>
              </h2>
              <div className="space-y-5 text-foreground/70 font-light leading-[1.9] text-[1.05rem]">
                <p>
                  I didn't fall into wedding planning — I sought it out. From the moment I coordinated my first wedding, I knew this was what I was meant to do.
                </p>
                <p>
                  I've also been on the other side of the process myself. When planning my own wedding in France, I worked with a wedding planner and experienced first-hand just how valuable it is to have someone guiding you through the decisions, logistics and little moments that can otherwise feel overwhelming.
                </p>
                <p>
                  There's something incredibly special about being trusted with one of the most meaningful days of someone's life.
                </p>
                <p>
                  Over the years, I've built wonderful relationships with some of Ireland's most talented wedding suppliers. It means that when my couples need recommendations, they're coming from real experience, trust and seeing those suppliers in action time and time again.
                </p>
                <p>
                  Outside of weddings, I'm a proud mum of three, a wife to a fellow wedding industry professional, and usually found juggling family life, wedding plans and a never-ending WhatsApp conversation or two.
                </p>
              </div>

              <blockquote className="border-l-2 border-primary/40 pl-6 mt-2">
                <p className="font-serif text-xl text-primary/80 italic leading-relaxed">
                  "Every couple I work with leaves a little mark on my heart. That's what makes this job unlike any other."
                </p>
                <footer className="mt-3 text-[12px] uppercase tracking-widest text-foreground/40 font-sans">— Erica Egan</footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
