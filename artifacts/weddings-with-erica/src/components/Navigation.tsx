import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/MAin_logo_1780239389448.png";

const links = [
  { label: "Meet Erica", id: "meet" },
  { label: "Services", id: "services" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(40,33%,97%)] border-b border-[hsl(40,20%,88%)]">
        <div className="mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between max-w-7xl">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group shrink-0"
            data-testid="nav-logo"
          >
            <img
              src={logoImg}
              alt="Weddings with Erica"
              className="h-12 w-auto object-contain"
            />
            <span className="font-serif text-xl tracking-wide text-foreground/80 hidden sm:block leading-tight">
              Weddings with Erica
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-[11px] uppercase tracking-[0.18em] text-foreground/50 hover:text-primary transition-colors duration-200 font-sans"
                data-testid={`nav-link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="bg-primary text-primary-foreground px-6 py-2.5 text-[11px] uppercase tracking-[0.18em] hover:bg-primary/90 transition-colors duration-200 font-sans"
              data-testid="nav-cta"
            >
              Enquire
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-foreground/60 hover:text-primary transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            data-testid="nav-hamburger"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[hsl(40,33%,97%)] flex flex-col items-center justify-center gap-9 md:hidden"
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-serif text-3xl text-foreground/75 hover:text-primary transition-colors"
                data-testid={`nav-mobile-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-2 bg-primary text-primary-foreground px-12 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors font-sans"
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
