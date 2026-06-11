import { motion } from "framer-motion";
import { useLocation } from "wouter";

const differences = [
  {
    number: "01",
    heading: "One planner. One point of contact.",
    body: "From your first enquiry to your last dance, you'll work directly with me. No handovers, no junior coordinators, and no feeling like just another wedding on a spreadsheet.\n\nI'll be the person answering your questions, guiding decisions, coordinating suppliers, and making sure everything comes together exactly as it should.",
  },
  {
    number: "02",
    heading: "Recommendations you can trust.",
    body: "Over the years, I've spent countless hours getting to know the people behind the weddings — from photographers and florists to musicians, makeup artists and venues.\n\nIt means when you're looking for recommendations, you're not starting from scratch. I'll help point you towards suppliers who genuinely fit your style, priorities and budget.",
  },
  {
    number: "03",
    heading: "Calm when you need it most.",
    body: "Wedding planning can feel overwhelming at times, and wedding days rarely go exactly to plan.\n\nA missing buttonhole, a delayed supplier, unexpected weather, a nervous groom — these things happen. My job is to handle them quietly and efficiently so you don't have to.\n\nThe less you notice me working, the better I'm doing my job.",
  },
];

export function ServicesWhy() {
  const [, navigate] = useLocation();

  return (
    <>
      {/* ── More Than Just Planning ── */}
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
              More Than Just <em className="not-italic text-[hsl(90,35%,72%)]">Planning.</em>
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
                <p className="text-primary-foreground/55 font-light text-[1.05rem] leading-[1.85] whitespace-pre-line">{d.body}</p>
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
    </>
  );
}
