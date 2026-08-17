import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroBg from "@assets/hero_image_1780239389448.jpg";
import { HeroSparkles } from "@/components/HeroSparkles";
import { FadeImage } from "@/components/FadeImage";

const promises = [
  "A calm, organised presence throughout the process",
  "Trusted supplier recommendations and guidance",
  "Support behind the scenes so you can be fully present",
];

export function Hero() {
  const [, navigate] = useLocation();

  return (
    <section className="flex flex-col md:flex-row overflow-hidden pt-[76px] min-h-[100dvh]">

      {/* ── MOBILE: clean image, no text ── */}
      <div className="md:hidden w-full shrink-0 overflow-hidden" style={{ height: "54svh" }}>
        <FadeImage
          src={heroBg}
          alt="Beautiful wedding couple walking together through a castle gate"
          className="w-full h-full object-cover object-[56%_40%]"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* ── Text panel: below image on mobile, left column on desktop ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="relative z-10 flex flex-col justify-center px-8 md:px-14 lg:px-20 py-10 md:py-0 bg-[hsl(40,33%,97%)] md:w-[46%] md:min-h-[calc(100dvh-76px)]"
      >
        {/* Eyebrow — desktop only */}
        <span className="hidden md:block text-[13px] uppercase tracking-[0.28em] text-primary/60 mb-5 font-sans">
          Calm Wedding Planning and Coordination Across Ireland
        </span>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
          className="text-[1.7rem] md:text-[3.4rem] lg:text-[4rem] font-serif text-foreground mb-3 md:mb-6 leading-[1.12]"
        >
          Wedding Planner in Ireland<br />
          <em className="not-italic text-primary">You Enjoy the Moment. I’ll Handle the Rest.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: "easeOut" }}
          className="text-[0.93rem] md:text-[1.05rem] text-foreground/70 mb-6 md:mb-7 max-w-[400px] font-light leading-[1.85]"
        >
          Planning your wedding should feel exciting — not stressful. I'm here to keep everything calm, organised, and running seamlessly so you can relax and genuinely enjoy every moment.
        </motion.p>

        {/* Key promises — desktop only */}
        <ul className="hidden md:flex flex-col gap-2.5 mb-9">
          {promises.map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-[1rem] text-foreground/70 font-light">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary/60 shrink-0" />
              {p}
            </li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Button
            onClick={() => navigate("/contact")}
            size="lg"
            className="btn-shine bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-9 py-5 text-[12px] uppercase tracking-[0.22em] shadow-sm transition-all hover:shadow-md duration-300"
            data-testid="hero-cta"
          >
            Let's Start Planning
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => navigate("/meet-erica")}
            className="hidden md:inline-flex text-primary hover:text-primary/80 rounded-none px-6 py-5 text-[12px] uppercase tracking-[0.22em] border border-primary/25 hover:border-primary/50 hover:bg-transparent transition-all duration-300"
            data-testid="hero-meet"
          >
            Meet Erica
          </Button>
        </motion.div>

        {/* Stats strip — desktop only */}
        <div className="hidden md:flex mt-10 pt-7 border-t border-border/40 items-center gap-4 md:gap-6 text-[12px] md:text-[13px] uppercase tracking-widest text-foreground/55 font-sans flex-wrap">
          <span>10+ Years Experience</span>
          <span className="w-px h-3 bg-border/60" />
          <span>One Dedicated Planner</span>
          <span className="w-px h-3 bg-border/60" />
          <span>Supporting Couples Across Ireland</span>
        </div>
      </motion.div>

      {/* ── DESKTOP: right image panel + sparkles ── */}
      <div className="relative hidden md:block md:w-[54%] md:min-h-[calc(100dvh-76px)] overflow-hidden">
        <HeroSparkles />
        <FadeImage
          src={heroBg}
          alt="Beautiful wedding couple walking together through a castle gate"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[hsl(40,33%,97%)] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
