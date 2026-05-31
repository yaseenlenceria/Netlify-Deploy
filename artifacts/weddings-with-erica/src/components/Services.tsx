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
      "Perfect for couples who have planned everything themselves but want to fully relax and enjoy the day. Around 6 weeks before the wedding I'll step in, take the reins, and make sure everything runs seamlessly.",
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
      "Ongoing support for couples who would love expert guidance while still leading the planning themselves. I'll bring structure, recommendations, and reassurance at every stage.",
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
      "Full end-to-end support from the earliest stages of planning right through to your wedding day. Every detail handled with care — venue, suppliers, styling, budgeting, and full coordination.",
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
      "A focused 1:1 consultation designed to bring clarity and expert advice to your plans. Perfect for couples who feel stuck or want professional reassurance. Approx. 1.5 hours.",
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
    <section id="services" className="py-10 md:py-14 bg-[hsl(40,18%,94%)] overflow-hidden">
      <div className="mx-auto px-6 md:px-10 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-7 md:mb-9 flex flex-col md:flex-row md:items-end md:justify-between gap-2"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-1.5 font-sans block"
            >
              How I Can Help
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.75, delay: 0.22, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-serif text-foreground leading-[1.08]"
            >
              My <em className="not-italic text-primary">Services</em>
            </motion.h1>
          </div>
          <p className="text-foreground/60 font-light text-[0.95rem] max-w-sm leading-relaxed">
            Every package is tailored around you, your vision, and what you need most.
          </p>
        </motion.div>

        {/* ═══ MOBILE layout: tabs on top, card below ═══ */}
        <div className="lg:hidden flex flex-col gap-3">
          {/* Tab buttons */}
          {services.map((service, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`flex items-center gap-3 w-full text-left px-4 py-3 border transition-all duration-300 ${
                active === i
                  ? "bg-primary border-primary text-primary-foreground shadow-md"
                  : "bg-white border-border/25 text-foreground"
              }`}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-white/30">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover object-center" loading="lazy" />
              </div>
              <div className="flex-1 min-w-0">
                {service.tag && (
                  <p className={`text-[10px] uppercase tracking-widest font-sans mb-0.5 ${active === i ? "text-primary-foreground/70" : "text-primary/70"}`}>
                    {service.tag}
                  </p>
                )}
                <p className={`font-sans font-medium text-[0.9rem] uppercase tracking-[0.05em] leading-snug ${active === i ? "text-primary-foreground" : "text-foreground"}`}>
                  {service.title}
                </p>
              </div>
              <svg className={`w-4 h-4 shrink-0 ${active === i ? "text-primary-foreground" : "text-foreground/30"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          ))}

          {/* Selected service card — image + text, no overlay clipping */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-md overflow-hidden mt-1"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover object-center" loading="lazy" />
              </div>
              <div className="p-5">
                {s.tag && <span className="text-[11px] uppercase tracking-widest text-primary/80 font-sans mb-1.5 block">— {s.tag}</span>}
                <h3 className="text-xl font-serif text-foreground mb-0.5">{s.title}</h3>
                <p className="text-primary font-serif italic text-[0.9rem] mb-3">{s.tagline}</p>
                <p className="text-foreground/65 font-light text-[0.9rem] leading-[1.75] mb-4">{s.description}</p>
                <p className="text-[11px] uppercase tracking-widest text-foreground/45 font-sans mb-2">Includes:</p>
                <ul className="space-y-1.5 mb-5">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-foreground/70 font-light text-[0.9rem]">
                      <span className="mt-[0.45em] w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate("/contact")}
                  className="w-full bg-primary text-primary-foreground py-3 text-[11px] uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors font-sans"
                  data-testid={`service-enquire-${active}`}
                >
                  Enquire About This Package
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <p className="text-foreground/55 font-light text-[0.88rem] text-center font-sans">
            Not sure which is right for you?{" "}
            <button onClick={() => navigate("/contact")} className="text-primary underline underline-offset-4 hover:text-primary/70 transition-colors">
              Let's chat
            </button>
          </p>
        </div>

        {/* ═══ DESKTOP layout: image overlay left + tabs right ═══ */}
        <div className="hidden lg:flex gap-7 items-stretch">

          {/* LEFT: full-height image card with overlaid text */}
          <div className="w-[40%] xl:w-[38%] shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="relative overflow-hidden w-full h-full shadow-md"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  {s.tag && <span className="text-[11px] uppercase tracking-widest text-white/70 font-sans mb-1 block">{s.tag}</span>}
                  <h3 className="text-2xl font-serif text-white mb-1 leading-snug">{s.title}</h3>
                  <p className="text-white/75 font-light italic font-serif text-[1rem] mb-4">{s.tagline}</p>
                  <p className="text-[11px] uppercase tracking-widest text-white/55 font-sans mb-2">Includes:</p>
                  <ul className="space-y-1 mb-5">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-white/80 font-light text-[0.88rem]">
                        <span className="mt-[0.45em] w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate("/contact")}
                    className="w-full bg-white/15 backdrop-blur-sm border border-white/35 text-white py-2.5 text-[11px] uppercase tracking-[0.22em] hover:bg-white/25 transition-colors font-sans"
                    data-testid={`service-enquire-${active}`}
                  >
                    Enquire About This Package
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: tab list */}
          <div className="flex-1 flex flex-col justify-between gap-2">
            <div className="flex flex-col gap-2.5">
              {services.map((service, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className={`flex items-center gap-4 w-full text-left px-4 py-3.5 border transition-all duration-300 ${
                    active === i
                      ? "bg-primary border-primary text-primary-foreground shadow-md"
                      : "bg-white border-border/25 text-foreground hover:border-primary/40 hover:shadow-sm"
                  }`}
                  data-testid={`service-tab-${i}`}
                >
                  <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-white/30">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover object-center" loading="lazy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    {service.tag && (
                      <p className={`text-[11px] uppercase tracking-widest font-sans mb-0.5 ${active === i ? "text-primary-foreground/70" : "text-primary/70"}`}>
                        {service.tag}
                      </p>
                    )}
                    <p className={`font-sans font-medium text-[0.95rem] uppercase tracking-[0.05em] leading-snug ${active === i ? "text-primary-foreground" : "text-foreground"}`}>
                      {service.title}
                    </p>
                    <p className={`text-[0.82rem] font-light mt-0.5 leading-snug truncate ${active === i ? "text-primary-foreground/70" : "text-foreground/50"}`}>
                      {service.tagline}
                    </p>
                  </div>
                  <svg className={`w-4 h-4 shrink-0 transition-transform duration-200 ${active === i ? "text-primary-foreground translate-x-0.5" : "text-foreground/30"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              ))}
            </div>
            <p className="text-foreground/55 font-light text-[0.88rem] mt-1 font-sans">
              Not sure which is right for you?{" "}
              <button onClick={() => navigate("/contact")} className="text-primary underline underline-offset-4 hover:text-primary/70 transition-colors">
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
