import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Heart, Calendar, Users, Star } from "lucide-react";
import ctaImg from "@assets/service-signature_1780246484112.jpg";
import aboveContactImg from "@assets/above_contact_1780239389448.jpg";

const steps = [
  {
    number: "01",
    title: "Initial Enquiry",
    description:
      "Drop me a message and tell me a little about your wedding. I'll come back to you within 48 hours to arrange a discovery call.",
  },
  {
    number: "02",
    title: "Discovery Call",
    description:
      "A relaxed, no-pressure chat where I get to know you, your vision, and what kind of support would help you most.",
  },
  {
    number: "03",
    title: "Planning Together",
    description:
      "Once booked, I'm in your corner — keeping things organised, calm, and moving in the right direction all the way to the big day.",
  },
  {
    number: "04",
    title: "Your Wedding Day",
    description:
      "You relax and enjoy every moment. I'll be there managing everything behind the scenes so nothing falls through the cracks.",
  },
];

const values = [
  { icon: Heart, title: "Genuine Care", body: "Every couple I work with feels like my only couple. Your wedding matters deeply to me — and it shows in every detail." },
  { icon: Calendar, title: "Calm & Organised", body: "No matter what comes up on the day, I handle it quietly and efficiently. You won't know a thing until it's all been sorted." },
  { icon: Users, title: "Built on Trust", body: "I work with a trusted network of the finest Irish wedding suppliers — from florists to photographers, caterers to musicians." },
  { icon: Star, title: "10+ Years Experience", body: "With over a decade of experience and 100+ weddings behind me, I bring a level of expertise that gives couples real peace of mind." },
];

export function EricaApproach() {
  const [, navigate] = useLocation();

  return (
    <>
      {/* ── My Approach — sage background with quote ── */}
      <section className="bg-[hsl(90,18%,94%)] py-20 md:py-28 overflow-hidden">
        <div className="mx-auto px-6 md:px-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-4 font-sans block">My Approach</span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] mb-8">
                Wedding planning should feel<br />
                <em className="not-italic text-primary">exciting, not overwhelming.</em>
              </h2>
              <div className="space-y-5 text-foreground/75 font-light leading-[1.9] text-[1.05rem]">
                <p>
                  I believe your wedding day should be about making memories, celebrating with the people you love, and being fully present in every moment — not worrying about timelines, logistics or what's happening behind the scenes.
                </p>
                <p>
                  That's why my approach is always centred around support. Whether you need someone to guide you through the entire planning process or simply bring everything together in the final weeks, I'll meet you where you are and provide the level of support that feels right for you.
                </p>
                <p>
                  Every couple plans differently, and every wedding is unique. My role is never to take over your vision — it's to help bring it to life with calm, organisation and a reassuring presence throughout the journey.
                </p>
                <p>
                  Because when the day arrives, I want you focused on what truly matters: celebrating, making memories and enjoying every moment.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              className="relative h-[520px] md:h-[600px] overflow-hidden"
            >
              <img
                src={aboveContactImg}
                alt="Erica with a happy couple"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-serif text-2xl text-white leading-relaxed italic">
                  "The best wedding days are the ones where the couple doesn't have to think about a single thing."
                </p>
                <p className="text-white/70 text-sm font-sans mt-3 uppercase tracking-widest">— Erica Egan</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What I Bring — 4 value cards ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto px-6 md:px-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-4 font-sans block">What I Bring</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1]">
              Why couples choose <em className="not-italic text-primary">Erica</em>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col gap-4 p-8 bg-[hsl(40,18%,96%)] border border-border/20 hover:border-primary/20 transition-colors"
              >
                <v.icon className="w-6 h-6 text-primary/70" />
                <h3 className="font-serif text-xl text-foreground">{v.title}</h3>
                <p className="text-foreground/65 font-light text-[1.05rem] leading-[1.8]">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works — process steps ── */}
      <section className="py-20 md:py-28 bg-[hsl(40,18%,94%)] overflow-hidden">
        <div className="mx-auto px-6 md:px-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-4 font-sans block">The Journey</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1]">
              What working with me<br />
              <em className="not-italic text-primary">looks like</em>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="flex flex-col"
              >
                <span className="font-serif text-5xl text-primary/20 mb-4 leading-none">{step.number}</span>
                <div className="w-8 h-px bg-primary/40 mb-5" />
                <h3 className="font-serif text-xl text-foreground mb-3">{step.title}</h3>
                <p className="text-foreground/65 font-light text-[1.05rem] leading-[1.8]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-bleed CTA ── */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <img
          src={ctaImg}
          alt="Wedding ceremony aisle with florals"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-foreground/65" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto px-6 max-w-2xl text-center"
        >
          <span className="text-[13px] uppercase tracking-[0.3em] text-primary-foreground/55 font-sans mb-5 block">Ready to Begin?</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.08] mb-6">
            Let's plan your<br />
            <em className="not-italic text-white">perfect day</em>
          </h2>
          <p className="text-primary-foreground/70 font-light text-[1.05rem] leading-relaxed mb-10 max-w-lg mx-auto">
            Whether you're just starting out or deep in the planning process, I'd love to hear from you and find out how I can help.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="btn-shine bg-primary text-primary-foreground px-10 py-4 text-[12px] uppercase tracking-[0.22em] shadow-sm hover:shadow-md hover:bg-primary/90 transition-all duration-300 font-sans"
          >
            Get in Touch
          </button>
        </motion.div>
      </section>
    </>
  );
}
