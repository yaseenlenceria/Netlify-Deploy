import { motion, useScroll, useTransform } from "framer-motion";

export function Navigation() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(253, 252, 248, 0)", "rgba(253, 252, 248, 0.85)"]
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(8px)"]
  );
  const borderBottom = useTransform(
    scrollY,
    [0, 50],
    ["1px solid rgba(230, 225, 215, 0)", "1px solid rgba(230, 225, 215, 0.5)"]
  );

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter, borderBottom }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-serif text-2xl tracking-wide text-primary"
          data-testid="nav-logo"
        >
          Weddings with Erica
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-muted-foreground">
          <button onClick={() => scrollTo("meet")} className="hover:text-primary transition-colors" data-testid="nav-link-meet">Meet Erica</button>
          <button onClick={() => scrollTo("services")} className="hover:text-primary transition-colors" data-testid="nav-link-services">Services</button>
          <button onClick={() => scrollTo("testimonials")} className="hover:text-primary transition-colors" data-testid="nav-link-testimonials">Testimonials</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors" data-testid="nav-link-contact">Contact</button>
        </div>
      </div>
    </motion.nav>
  );
}
