import { motion } from "framer-motion";
import { useLocation } from "wouter";
import heroImg from "@assets/hero_image_1780239389448.jpg";

const expectations = [
  "Honest advice, even when it's not what you expected to hear",
  "Recommendations tailored to your style, priorities and budget",
  "Quick replies when you're overthinking something at 10pm",
  "Calm problem-solving when things don't quite go to plan",
  "Someone who genuinely cares about your wedding as much as you do",
  "Plenty of WhatsApp messages along the way",
];

export function TestimonialsCTA() {
  const [, navigate] = useLocation();

  return (
    <>
      {/* ── A Few Things You Can Always Expect From Me ── */}
      <section className="py-20 md:py-28 bg-[hsl(40,18%,94%)]">
        <div className="mx-auto px-6 md:px-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-4 font-sans block">My Promise</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1]">
              A Few Things You Can Always <em className="not-italic text-primary">Expect From Me</em>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expectations.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.65, delay: (i % 3) * 0.1 }}
                className="bg-white p-8 border border-border/20"
              >
                <span className="font-serif text-3xl text-primary/25 leading-none block mb-4">🤍</span>
                <p className="font-serif text-[1.1rem] text-foreground/80 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <img src={heroImg} alt="Beautiful wedding" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-foreground/65" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto px-6 max-w-2xl text-center"
        >
          <span className="text-[13px] uppercase tracking-[0.3em] text-primary-foreground/55 font-sans mb-5 block">Your Turn</span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground leading-[1.1] mb-6">
            Ready to write your<br />
            <em className="not-italic text-white">own story?</em>
          </h2>
          <p className="text-primary-foreground/70 font-light text-[1.05rem] leading-relaxed mb-10 max-w-lg mx-auto">
            Every couple on this page was once exactly where you are now — wondering if they needed a wedding planner. They're all glad they did.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="btn-shine bg-primary text-primary-foreground px-10 py-4 text-[12px] uppercase tracking-[0.22em] shadow-sm hover:shadow-md hover:bg-primary/90 transition-all duration-300 font-sans"
          >
            Start Planning
          </button>
        </motion.div>
      </section>
    </>
  );
}
