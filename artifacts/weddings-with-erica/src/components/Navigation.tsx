import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/ChatGPT_Image_May_31__2026__07_17_29_PM-removebg-preview_1780238892940.png";

const links = [
  { label: "Meet Erica", id: "meet" },
  { label: "Services", id: "services" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[hsl(40,33%,97%)]/90 backdrop-blur-md border-b border-border/40 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-6 md:px-10 h-20 flex items-center justify-between max-w-7xl">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
            data-testid="nav-logo"
          >
            <img
              src={logoImg}
              alt="Weddings with Erica logo"
              className="h-10 w-auto object-contain"
            />
            <span
              className={`font-serif text-lg tracking-wide transition-colors duration-300 hidden sm:block ${
                scrolled ? "text-foreground" : "text-foreground"
              }`}
            >
              Weddings with Erica
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-foreground/60 hover:text-primary transition-colors duration-200"
                data-testid={`nav-link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="bg-primary text-primary-foreground px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-primary/90 transition-colors duration-200"
              data-testid="nav-cta"
            >
              Enquire
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-foreground/70 hover:text-primary transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            data-testid="nav-hamburger"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[hsl(40,33%,97%)] flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-serif text-3xl text-foreground/80 hover:text-primary transition-colors"
                data-testid={`nav-mobile-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-4 bg-primary text-primary-foreground px-10 py-4 text-xs uppercase tracking-widest hover:bg-primary/90 transition-colors"
              data-testid="nav-mobile-cta"
            >
              Enquire
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
