import { motion } from "framer-motion";

const stats = [
  { value: "100+", label: "Weddings Coordinated", sub: "Across Ireland & internationally" },
  { value: "5.0★", label: "Average Review Rating", sub: "From every couple I've worked with" },
  { value: "10+", label: "Years of Experience", sub: "A decade of weddings, big and small" },
  { value: "48h", label: "Response Time", sub: "I always come back to you promptly" },
];

export function TestimonialsStats() {
  return (
    <section className="bg-[hsl(90,22%,26%)] py-16 md:py-20">
      <div className="mx-auto px-6 md:px-10 max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className="py-10 sm:py-0 sm:px-10 first:pl-0 last:pr-0 flex flex-col gap-2"
            >
              <p className="font-serif text-5xl md:text-[3.2rem] text-[hsl(90,35%,72%)] leading-none">{s.value}</p>
              <p className="text-primary-foreground text-[13px] uppercase tracking-[0.2em] font-sans mt-3">{s.label}</p>
              <p className="text-primary-foreground/45 font-light text-[0.9rem] leading-snug font-sans">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
