import { motion } from "framer-motion";
import { useLocation } from "wouter";
import heroImg from "@assets/hero_image_1780239389448.png";

const steps = [
  {
    number: "01",
    title: "Send an Enquiry",
    description:
      "Fill in the contact form with a little about your wedding date, venue, and what kind of support you're looking for. No commitment needed — just a starting point.",
  },
  {
    number: "02",
    title: "Discovery Call",
    description:
      "We'll have a relaxed chat to get to know each other, talk through your plans, and figure out which package feels like the right fit for you both.",
  },
  {
    number: "03",
    title: "Booking & Planning",
    description:
      "Once you're happy to proceed, I'll send over your contract and we'll get started. From here, I'm fully in your corner — guiding, advising, and organising every step.",
  },
  {
    number: "04",
    title: "Your Wedding Day",
    description:
      "Everything handled. You get to be fully present — enjoying every moment, from getting ready in the morning right through to your first dance.",
  },
];

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "As soon as possible — popular dates fill up quickly. I'd recommend reaching out at least 6–12 months before your wedding date, though I'm always happy to discuss availability.",
  },
  {
    q: "Do you travel outside of Ireland?",
    a: "Yes! I work with couples internationally and have experience coordinating weddings for couples planning from abroad. Distance is never a barrier.",
  },
  {
    q: "What if I'm not sure which package I need?",
    a: "That's completely fine. A discovery call is the perfect opportunity to talk through where you are in planning and figure out together what support would help most.",
  },
  {
    q: "Do you work with a specific style of wedding?",
    a: "Not at all. Whether it's a grand castle celebration or an intimate countryside gathering, I bring the same care, calm, and attention to detail to every wedding I coordinate.",
  },
];

export function ServicesProcess() {
  const [, navigate] = useLocation();

  return (
    <>
      {/* ── How It Works ── */}
      <section className="py-20 md:py-28 bg-background overflow-hidden">
        <div className="mx-auto px-6 md:px-14 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <span className="text-[11px] uppercase tracking-[0.28em] text-primary/70 mb-4 font-sans block">The Process</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1]">
              How it <em className="not-italic text-primary">works</em>
            </h2>
            <p className="text-foreground/65 font-light text-[1rem] mt-4 max-w-xl leading-relaxed">
              From first message to your wedding day — a simple, guided process that keeps things calm and clear every step of the way.
            </p>
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
                <p className="text-foreground/65 font-light text-[0.95rem] leading-[1.8]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-20 md:py-28 bg-[hsl(40,18%,94%)]">
        <div className="mx-auto px-6 md:px-14 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <span className="text-[11px] uppercase tracking-[0.28em] text-primary/70 mb-4 font-sans block">Questions</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1]">
              Frequently <em className="not-italic text-primary">asked</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-8 border border-border/20"
              >
                <h3 className="font-serif text-lg text-foreground mb-3">{faq.q}</h3>
                <p className="text-foreground/65 font-light text-[0.95rem] leading-[1.8]">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <img src={heroImg} alt="Wedding" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-foreground/65" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto px-6 max-w-2xl text-center"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-primary-foreground/55 font-sans mb-5 block">Not Sure Where to Start?</span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground leading-[1.1] mb-6">
            Let's figure it out <em className="not-italic text-primary/80">together</em>
          </h2>
          <p className="text-primary-foreground/70 font-light text-[1.05rem] leading-relaxed mb-10 max-w-lg mx-auto">
            A quick conversation is all it takes. I'll help you understand exactly what support would suit you best — no pressure, no commitment.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-primary text-primary-foreground px-12 py-4 text-[12px] uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors font-sans"
          >
            Enquire Now
          </button>
        </motion.div>
      </section>
    </>
  );
}
