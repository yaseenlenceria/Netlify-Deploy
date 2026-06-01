import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroBg from "@assets/hero_image_1780239389448.png";
import { HeroSparkles } from "@/components/HeroSparkles";

const promises = [
  "Calm, stress-free planning",
  "Full supplier management",
  "Seamless on-the-day coordination",
];

export function Hero() {
  const [, navigate] = useLocation();

  return (
    <section className="relative min-h-[100dvh] flex flex-col md:flex-row overflow-hidden pt-[76px]">

      {/* Sparkle particles — mobile overlay + desktop image half */}
      <HeroSparkles />

      {/* ── MOBILE: full-bleed image with overlay ── */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={heroBg}
          alt="Beautiful wedding couple walking together through a castle gate"
          className="w-full h-full object-cover object-[56%_55%]"
          fetchPriority="high"
        />
        {/* Dark sage-green gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(90,25%,8%)]/50 via-[hsl(90,25%,6%)]/70 to-[hsl(90,25%,5%)]/92" />
      </div>

      {/* Left: text panel */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 flex flex-col justify-end md:justify-center px-8 md:px-14 lg:px-20 py-16 md:py-0 bg-transparent md:bg-[hsl(40,33%,97%)] min-h-[calc(100dvh-76px)] md:min-h-[calc(100dvh-76px)] md:w-[46%]"
      >
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-[13px] uppercase tracking-[0.28em] text-white/70 md:text-primary/60 mb-5 font-sans"
        >
          Ireland's Boutique Wedding Planner
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: "easeOut" }}
          className="text-5xl md:text-[3.4rem] lg:text-[4rem] font-serif text-white md:text-foreground mb-6 leading-[1.08]"
        >
          Enjoy Your Wedding,<br />
          <em className="not-italic text-white/85 md:text-primary">I'll Handle the Rest</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.5, ease: "easeOut" }}
          className="text-[1.05rem] text-white/80 md:text-foreground/75 mb-7 max-w-[400px] font-light leading-[1.85]"
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
            <li key={p} className="flex items-center gap-2.5 text-[1rem] text-white/75 md:text-foreground/70 font-light">
              <CheckCircle2 className="w-3.5 h-3.5 text-white/60 md:text-primary/60 shrink-0" />
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
            className="btn-shine bg-white md:bg-primary text-primary md:text-primary-foreground hover:bg-white/90 md:hover:bg-primary/90 rounded-none px-9 py-5 text-[12px] uppercase tracking-[0.22em] shadow-sm transition-all hover:shadow-md duration-300"
            data-testid="hero-cta"
          >
            Let's Start Planning
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => navigate("/meet-erica")}
            className="text-white md:text-primary hover:text-white/80 md:hover:text-primary/80 rounded-none px-6 py-5 text-[12px] uppercase tracking-[0.22em] border border-white/35 md:border-primary/25 hover:border-white/60 md:hover:border-primary/50 hover:bg-transparent transition-all duration-300"
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
          className="mt-10 pt-7 border-t border-white/20 md:border-border/40 flex items-center gap-4 md:gap-6 text-[12px] md:text-[13px] uppercase tracking-widest text-white/55 md:text-foreground/55 font-sans flex-wrap"
        >
          <span>Ireland</span>
          <span className="w-px h-3 bg-white/30 md:bg-border/60" />
          <span>100+ Weddings</span>
          <span className="w-px h-3 bg-white/30 md:bg-border/60" />
          <span>5★ Reviews</span>
          <span className="w-px h-3 bg-white/30 md:bg-border/60" />
          <span>Est. 2014</span>
        </motion.div>
      </motion.div>

      {/* ── DESKTOP: right image panel ── */}
      <div className="relative hidden md:block md:w-[54%] md:min-h-[calc(100dvh-76px)] overflow-hidden">
        <img
          src={heroBg}
          alt="Beautiful wedding couple walking together through a castle gate"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[hsl(40,33%,97%)] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
