import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroBg from "@assets/hero_image_1780239389448.png";

const promises = [
  "Calm, stress-free planning",
  "Full supplier management",
  "Seamless on-the-day coordination",
];

export function Hero() {
  const [, navigate] = useLocation();

  return (
    <section className="relative min-h-[100dvh] flex flex-col md:flex-row overflow-hidden pt-[76px]">
      {/* Left: text panel */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 flex flex-col justify-center px-8 md:px-14 lg:px-20 py-20 md:py-0 bg-[hsl(40,33%,97%)] md:w-[46%] md:min-h-[calc(100dvh-76px)]"
      >
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-[11px] uppercase tracking-[0.28em] text-primary/60 mb-5 font-sans"
        >
          Ireland's Boutique Wedding Planner
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: "easeOut" }}
          className="text-5xl md:text-[3.4rem] lg:text-[4rem] font-serif text-foreground mb-6 leading-[1.08]"
        >
          Enjoy Your Wedding,<br />
          <em className="not-italic text-primary">I'll Handle the Rest</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.5, ease: "easeOut" }}
          className="text-[1.05rem] text-foreground/60 mb-7 max-w-[400px] font-light leading-[1.85]"
        >
          Planning your wedding should feel exciting — not stressful. I'm here to keep everything calm, organised, and running seamlessly so you can relax and genuinely enjoy every moment.
        </motion.p>

        {/* Key promises */}
        <motion.ul
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-2.5 mb-9"
        >
          {promises.map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-[0.9rem] text-foreground/55 font-light">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary/60 shrink-0" />
              {p}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Button
            onClick={() => navigate("/contact")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-9 py-5 text-[12px] uppercase tracking-[0.22em] shadow-sm transition-all hover:shadow-md duration-300"
            data-testid="hero-cta"
          >
            Let's Start Planning
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => navigate("/meet-erica")}
            className="text-primary hover:text-primary/80 rounded-none px-6 py-5 text-[12px] uppercase tracking-[0.22em] border border-primary/25 hover:border-primary/50 hover:bg-transparent transition-all duration-300"
            data-testid="hero-meet"
          >
            Meet Erica
          </Button>
        </motion.div>

        {/* Awards strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 pt-7 border-t border-border/40 flex items-center gap-6 text-[11px] uppercase tracking-widest text-foreground/35 font-sans"
        >
          <span>Ireland</span>
          <span className="w-px h-3 bg-border/60" />
          <span>100+ Weddings</span>
          <span className="w-px h-3 bg-border/60" />
          <span>5★ Reviews</span>
          <span className="w-px h-3 bg-border/60" />
          <span>Est. 2014</span>
        </motion.div>
      </motion.div>

      {/* Right: image */}
      <div className="relative md:w-[54%] h-[56vw] md:h-auto md:min-h-[calc(100dvh-76px)] order-first md:order-last overflow-hidden">
        <img
          src={heroBg}
          alt="Beautiful wedding couple walking together through a castle gate"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[hsl(40,33%,97%)] to-transparent pointer-events-none hidden md:block" />
      </div>
    </section>
  );
}
