import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import heroImg from "@assets/hero_image_1780239389448.jpg";
import { ChevronDown } from "lucide-react";

const planningStages = [
  {
    stage: "Just Getting Started",
    desc: "Guidance, recommendations and support when you're not quite sure where to begin.",
  },
  {
    stage: "Deep Into Planning",
    desc: "Helping you navigate suppliers, timelines, budgets and all the moving parts.",
  },
  {
    stage: "Nearly There",
    desc: "Bringing everything together in the final months so nothing gets missed.",
  },
  {
    stage: "Ready For The Big Day",
    desc: "Calm, organised coordination so you can relax and enjoy every moment.",
  },
];

const faqs = [
  {
    q: "Do I need a wedding planner if I've already booked some of my suppliers?",
    a: "Absolutely. Many of my couples come to me after they've secured their venue and a number of key suppliers. My role is to help bring everything together, provide guidance where needed, and ensure nothing falls through the cracks as the wedding approaches.",
  },
  {
    q: "What's the difference between Signature Day Coordination and Partial Planning?",
    a: "Both packages include on-the-day coordination, timeline management and the reassurance of having an experienced planner overseeing everything behind the scenes.\n\nSignature Day Coordination is designed for couples who are happy to manage the planning themselves but want professional support in the lead-up and on the wedding day. We begin working together around 6 weeks before the wedding, when I step in to finalise timelines, coordinate suppliers and ensure everything is ready to run smoothly.\n\nPartial Planning is for couples who would benefit from additional support throughout the planning journey. I come on board around 4 months before the wedding, providing supplier guidance, logistical management, ongoing advice and support, timeline creation and regular check-ins to help keep everything on track.\n\nIf you're finding yourself needing recommendations, second opinions, help making decisions or guidance navigating the final stages of planning, Partial Planning is usually the better fit.\n\nIf you've already planned everything and simply want to hand over the logistics and coordination closer to the day, Signature Day Coordination will likely give you everything you need.",
  },
  {
    q: "When should I book a wedding planner?",
    a: "The earlier, the better! However, it's never too late. Whether you're newly engaged or just a few months away from your wedding, I can step in at different stages to provide the support you need.",
  },
  {
    q: "Do you only work with certain suppliers?",
    a: "Not at all. I'm happy to work alongside any suppliers you've already chosen. If you're still looking for recommendations, I can also suggest trusted suppliers based on your style, priorities and budget.",
  },
  {
    q: "Do you travel for weddings?",
    a: "Yes! While I'm based in the Midlands of Ireland, I work with couples throughout Ireland and am happy to travel wherever your wedding takes place.",
  },
  {
    q: "Will you be there on the wedding day?",
    a: "Absolutely! In fact, it's my favourite part of the whole process.\n\nAfter months of planning together, there's nothing better than seeing everything come to life and watching you enjoy the day you've worked so hard to create.\n\nI'll be there behind the scenes coordinating suppliers, managing timelines, solving any little hiccups that arise and making sure everything runs smoothly — so you can focus on celebrating with your favourite people.\n\nAnd fair warning... I always bring extra tissues. Not for the couple — for me 🤍",
  },
  {
    q: "How involved do I need to be?",
    a: "That completely depends on you. Some couples love being heavily involved in the planning process, while others prefer more hands-on support. I'll tailor my involvement to suit your needs.",
  },
  {
    q: "What if I just need some advice before committing to planning services?",
    a: "My Planning Power Hour is perfect for couples who want professional guidance, reassurance or help working through specific questions without committing to a larger planning package.",
  },
];

function FaqItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
      className="border-b border-border/30 last:border-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left py-6 flex items-start justify-between gap-4 group"
      >
        <h3 className="font-serif text-[1.1rem] text-foreground leading-snug group-hover:text-primary transition-colors">{faq.q}</h3>
        <ChevronDown
          className={`w-5 h-5 text-primary/60 shrink-0 mt-0.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-foreground/65 font-light text-[1.05rem] leading-[1.85] pb-6 whitespace-pre-line">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ServicesProcess() {
  const [, navigate] = useLocation();

  return (
    <>
      {/* ── However You're Planning ── */}
      <section className="py-20 md:py-28 bg-background overflow-hidden">
        <div className="mx-auto px-6 md:px-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-4 font-sans block">Wherever You Are</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1]">
              However You're <em className="not-italic text-primary">Planning</em>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {planningStages.map((item, i) => (
              <motion.div
                key={item.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                className="p-8 bg-[hsl(40,18%,96%)] border border-border/20 hover:border-primary/20 transition-colors"
              >
                <div className="w-6 h-px bg-primary/40 mb-5" />
                <h3 className="font-serif text-xl text-foreground mb-3">{item.stage}</h3>
                <p className="text-foreground/60 font-light text-[1rem] leading-[1.8]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-20 md:py-28 bg-[hsl(40,18%,94%)]">
        <div className="mx-auto px-6 md:px-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-4 font-sans block">Questions</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1]">
              Frequently <em className="not-italic text-primary">Asked</em>
            </h2>
          </motion.div>

          <div className="divide-y divide-border/30">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
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
          <span className="text-[13px] uppercase tracking-[0.3em] text-primary-foreground/55 font-sans mb-5 block">Not Sure Where to Start?</span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground leading-[1.1] mb-6">
            Let's figure it out <em className="not-italic text-white">together</em>
          </h2>
          <p className="text-primary-foreground/70 font-light text-[1.05rem] leading-relaxed mb-10 max-w-lg mx-auto">
            A quick conversation is all it takes. I'll help you understand exactly what support would suit you best — no pressure, no commitment.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="btn-shine bg-primary text-primary-foreground px-10 py-4 text-[12px] uppercase tracking-[0.22em] shadow-sm hover:shadow-md hover:bg-primary/90 transition-all duration-300 font-sans"
          >
            Enquire Now
          </button>
        </motion.div>
      </section>
    </>
  );
}
