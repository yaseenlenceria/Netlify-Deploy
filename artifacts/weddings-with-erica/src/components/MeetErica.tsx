import { motion } from "framer-motion";

export function MeetErica() {
  return (
    <section id="meet" className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] relative z-10 w-4/5 shadow-sm">
              <img src="/images/erica-portrait.png" alt="Erica Egan - Wedding Planner" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-1/4 right-0 w-3/5 aspect-square z-20 shadow-xl border-4 border-background">
              <img src="/images/erica-bride.png" alt="Erica with a bride" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              Planning your wedding should feel exciting — not overwhelming.
            </h2>
            <div className="space-y-6 text-foreground/80 font-light leading-relaxed text-lg">
              <p>
                I'm Erica, a wedding planner here to keep things calm, organised, and running exactly as they should. From the big decisions to the smallest details, I'll guide you through it all in a way that feels simple, supportive, and manageable.
              </p>
              <p>
                I know how important it is to feel fully present on your wedding day — not worrying about timelines, suppliers, or what's happening behind the scenes. That's where I come in.
              </p>
              <p>
                From the lead-up to the final dance, I'm there making sure everything flows seamlessly, everything is handled, and nothing falls back on you — so you can relax and truly enjoy every moment.
              </p>
              <p className="text-primary font-medium">
                Think of me as the calm, organised presence in your corner… making sure your wedding feels as good as it looks.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
