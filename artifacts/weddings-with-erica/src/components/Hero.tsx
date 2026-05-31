import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-secondary/10">
        <img 
          src="/images/hero.png" 
          alt="Beautiful outdoor wedding ceremony" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />
      </div>
      
      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center max-w-4xl pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-serif text-primary mb-6 leading-tight drop-shadow-sm"
        >
          Enjoy Your Wedding,<br />I'll Handle the Rest
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl font-light leading-relaxed"
        >
          Planning your wedding should feel exciting — not stressful.<br /><br />
          I'm here to keep everything calm, organised, and running seamlessly so you can relax, feel fully present, and genuinely enjoy every moment.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-10 py-7 text-sm uppercase tracking-widest shadow-xl transition-all hover:scale-105 duration-300"
            data-testid="hero-cta"
          >
            Let's Start Planning
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
