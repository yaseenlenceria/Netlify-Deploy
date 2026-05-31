import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import signatureImg from "@assets/Signature_Day_Coordination_1780239389447.jpg";
import partialImg from "@assets/PARTIAL_PLANNING_SUPPORT_1780239389446.png";
import fullImg from "@assets/FULL_PLANNING_1780239389446.png";
import powerHourImg from "@assets/PLANNING_POWER_HOUR_1780239389447.png";

const services = [
  {
    title: "Signature Day Coordination",
    tag: "Most Popular",
    tagline: "Support for your wedding day, handled properly.",
    description:
      "Perfect for couples who have planned everything themselves but want to fully relax and enjoy the day. Around 6 weeks before the wedding I'll step in, take the reins, and make sure everything runs seamlessly from morning through to your first dance.",
    includes: [
      "Detailed pre-wedding planning call",
      "Full supplier coordination & communication",
      "Timeline creation and management",
      "On-the-day logistics and troubleshooting",
      "Personal support from morning to evening",
    ],
    image: signatureImg,
  },
  {
    title: "Partial Planning Support",
    tag: "",
    tagline: "Guidance and calm throughout your planning journey.",
    description:
      "Ongoing support for couples who would love expert guidance while still leading the planning themselves. I'll bring structure, recommendations, and reassurance at every stage — and be there on the day to ensure everything flows beautifully.",
    includes: [
      "Ongoing planning guidance & advice",
      "Supplier recommendations & introductions",
      "Timeline and structure creation",
      "Regular check-ins and progress reviews",
      "Full on-the-day coordination",
    ],
    image: partialImg,
  },
  {
    title: "Full Planning + Coordination",
    tag: "",
    tagline: "Complete support from first idea to last dance.",
    description:
      "Full end-to-end support from the earliest stages of planning right through to your wedding day. From venue sourcing and supplier management to styling guidance, budgeting, logistics, and full coordination — every detail handled with care.",
    includes: [
      "End-to-end wedding planning",
      "Venue sourcing and styling guidance",
      "Complete supplier management",
      "Budget planning and tracking",
      "Full on-the-day coordination",
    ],
    image: fullImg,
  },
  {
    title: "Planning Power Hour",
    tag: "",
    tagline: "Clarity and confidence in a single focused session.",
    description:
      "A focused 1:1 consultation designed to bring clarity, expert advice, and confidence to your plans. Perfect for couples who feel stuck, overwhelmed, or simply want professional reassurance before moving forward. Approx. 1.5 hours.",
    includes: [
      "1:1 expert consultation (approx. 1.5 hrs)",
      "Personalised planning advice",
      "Supplier recommendations",
      "Clarity on next steps",
      "Follow-up notes and action plan",
    ],
    image: powerHourImg,
  },
];

export function Services() {
  const [active, setActive] = useState(0);
  const [, navigate] = useLocation();
  const s = services[active];

  return (
    <section id="services" className="py-16 md:py-24 bg-[hsl(40,18%,94%)] overflow-hidden">
      <div className="mx-auto px-6 md:px-10 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-4 font-sans block"
          >
            How I Can Help
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.85, delay: 0.3, ease: "easeOut" }}
            className="text-5xl md:text-[3.4rem] lg:text-[4rem] font-serif text-foreground mb-4 leading-[1.08]"
          >
            My <em className="not-italic text-primary">Services</em>
          </motion.h1>
          <p className="text-foreground/70 font-light text-[1rem] max-w-md leading-relaxed">
            From complete wedding planning to on-the-day coordination — every package is tailored around you, your vision, and what you need most.
          </p>
        </motion.div>

        {/* Main layout: featured card left + tab list right */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">

          {/* ── LEFT: featured service card ── */}
          <div className="w-full lg:w-[44%] xl:w-[42%] shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="overflow-hidden bg-white shadow-md"
              >
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-7 md:p-8">
                  {s.tag && (
                    <span className="text-[13px] uppercase tracking-widest text-primary/80 font-sans mb-2 inline-block">
                      — {s.tag}
                    </span>
                  )}
                  <h3 className="text-2xl font-serif text-foreground mb-1 leading-snug">{s.title}</h3>
                  <p className="text-primary font-serif italic text-[1rem] mb-4">{s.tagline}</p>
                  <p className="text-foreground/70 font-light text-[1rem] leading-[1.85] mb-5">{s.description}</p>

                  <p className="text-[13px] uppercase tracking-widest text-foreground/50 font-sans mb-3">Includes:</p>
                  <ul className="space-y-1.5 mb-7">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-foreground/75 font-light text-[1rem]">
                        <span className="mt-[0.45em] w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigate("/contact")}
                    className="w-full bg-primary text-primary-foreground py-3.5 text-[12px] uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors font-sans"
                    data-testid={`service-enquire-${active}`}
                  >
                    Enquire About This Package
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── RIGHT: tab list ── */}
          <div className="flex-1 flex flex-col gap-3 w-full">
            {services.map((service, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`flex items-center gap-4 w-full text-left px-5 py-4 border transition-all duration-300 ${
                  active === i
                    ? "bg-primary border-primary text-primary-foreground shadow-md"
                    : "bg-white border-border/25 text-foreground hover:border-primary/40 hover:shadow-sm"
                }`}
                data-testid={`service-tab-${i}`}
              >
                {/* Circular thumbnail */}
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white/30">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  {service.tag && (
                    <p className={`text-[11px] uppercase tracking-widest font-sans mb-0.5 ${active === i ? "text-primary-foreground/70" : "text-primary/70"}`}>
                      {service.tag}
                    </p>
                  )}
                  <p className={`font-sans font-medium text-[1rem] uppercase tracking-[0.06em] leading-snug ${active === i ? "text-primary-foreground" : "text-foreground"}`}>
                    {service.title}
                  </p>
                  <p className={`text-[0.875rem] font-light mt-0.5 leading-snug truncate ${active === i ? "text-primary-foreground/70" : "text-foreground/50"}`}>
                    {service.tagline}
                  </p>
                </div>

                {/* Arrow */}
                <svg
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 ${active === i ? "text-primary-foreground translate-x-1" : "text-foreground/30"}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            ))}

            {/* Not sure prompt */}
            <p className="text-foreground/55 font-light text-[1rem] mt-4 font-sans text-center lg:text-left">
              Not sure which is right for you?{" "}
              <button
                onClick={() => navigate("/contact")}
                className="text-primary underline underline-offset-4 hover:text-primary/70 transition-colors"
              >
                Let's chat
              </button>{" "}
              — I'll help you figure it out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
