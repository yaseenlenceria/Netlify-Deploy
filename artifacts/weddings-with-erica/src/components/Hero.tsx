import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/IMG_8117_1780238892941.jpeg";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col md:flex-row overflow-hidden">
      {/* Left: text panel */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-28 md:py-0 bg-[hsl(40,33%,97%)] md:w-1/2 md:min-h-[100dvh]"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.25em] text-primary/70 mb-6 font-sans"
        >
          Weddings with Erica
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground mb-8 leading-[1.1]"
        >
          Enjoy Your Wedding,<br />
          <em className="not-italic text-primary">I'll Handle the Rest</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-base md:text-lg text-foreground/70 mb-10 max-w-md font-light leading-relaxed"
        >
          Planning your wedding should feel exciting — not stressful. I'm here to keep everything calm, organised, and running seamlessly so you can relax, feel fully present, and genuinely enjoy every moment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-10 py-6 text-xs uppercase tracking-widest shadow-sm transition-all hover:shadow-md duration-300"
            data-testid="hero-cta"
          >
            Let's Start Planning
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => document.getElementById("meet")?.scrollIntoView({ behavior: "smooth" })}
            className="text-primary hover:text-primary/70 rounded-none px-6 py-6 text-xs uppercase tracking-widest border border-primary/20 hover:border-primary/40 transition-all duration-300"
            data-testid="hero-learn-more"
          >
            Meet Erica
          </Button>
        </motion.div>
      </motion.div>

      {/* Right: image */}
      <div className="relative md:w-1/2 h-[55vw] md:h-auto md:min-h-[100dvh] order-first md:order-last">
        <img
          src={heroBg}
          alt="Beautiful wedding couple walking together"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(40,33%,97%)] via-transparent to-transparent md:w-24" />
      </div>
    </section>
  );
}
