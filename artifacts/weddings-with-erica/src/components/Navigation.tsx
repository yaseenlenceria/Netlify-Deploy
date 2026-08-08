import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import logoImg from "@assets/MAin_logo_1780239389448.png";

const links = [
  { label: "Meet Erica", href: "/meet-erica" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  const go = (href: string) => {
    navigate(href);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(40,33%,97%)] border-b border-[hsl(40,20%,88%)]">
        <div className="mx-auto px-6 md:px-10 h-[76px] flex items-center justify-between max-w-7xl">

          {/* Logo only — no text */}
          <button
            onClick={() => go("/")}
            className="shrink-0 group"
            data-testid="nav-logo"
            aria-label="Home"
          >
            <img
              src={logoImg}
              alt="Weddings with Erica"
              className="h-16 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80 bg-transparent"
            />
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className="text-[15px] tracking-[0.05em] text-foreground/65 hover:text-primary transition-colors duration-200 font-sans"
                data-testid={`nav-link-${link.href.replace("/", "")}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => go("/contact")}
              className="btn-shine bg-primary text-primary-foreground px-6 py-2.5 text-[12px] uppercase tracking-[0.22em] shadow-sm hover:shadow-md hover:bg-primary/90 transition-all duration-300 font-sans"
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
                key={link.href}
                onClick={() => go(link.href)}
                className="font-serif text-3xl text-foreground/75 hover:text-primary transition-colors"
                data-testid={`nav-mobile-${link.href.replace("/", "")}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => go("/contact")}
              className="mt-2 bg-primary text-primary-foreground px-12 py-4 text-[12px] uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors font-sans"
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
