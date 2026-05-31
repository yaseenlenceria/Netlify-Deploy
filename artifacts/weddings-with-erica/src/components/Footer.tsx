import { motion } from "framer-motion";
import { Instagram, Phone, Mail, Heart } from "lucide-react";
import logoImg from "@assets/MAin_logo_1780239389448.png";

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main footer grid */}
      <div className="mx-auto px-8 md:px-12 max-w-7xl py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

        {/* Brand */}
        <div className="flex flex-col gap-5">
          <img
            src={logoImg}
            alt="Weddings with Erica"
            className="h-14 w-auto object-contain self-start brightness-0 invert opacity-80"
          />
          <p className="text-primary-foreground/45 text-[0.875rem] font-light leading-[1.8] max-w-xs">
            Ireland's boutique wedding planner. Keeping everything calm, organised, and seamlessly beautiful — so you can be fully present on your day.
          </p>
          <div className="flex items-center gap-4 mt-1">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-primary-foreground/20 text-primary-foreground/50 hover:border-primary-foreground/60 hover:text-primary-foreground transition-all duration-200"
              data-testid="footer-instagram-icon"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="tel:0872186100"
              className="w-9 h-9 flex items-center justify-center border border-primary-foreground/20 text-primary-foreground/50 hover:border-primary-foreground/60 hover:text-primary-foreground transition-all duration-200"
              data-testid="footer-phone-icon"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="mailto:wedwitherica@gmail.com"
              className="w-9 h-9 flex items-center justify-center border border-primary-foreground/20 text-primary-foreground/50 hover:border-primary-foreground/60 hover:text-primary-foreground transition-all duration-200"
              data-testid="footer-email-icon"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/35 font-sans mb-1">Navigation</p>
          {[
            { label: "Meet Erica", id: "meet" },
            { label: "Services", id: "services" },
            { label: "Testimonials", id: "testimonials" },
            { label: "Get in Touch", id: "contact" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left text-primary-foreground/50 hover:text-primary-foreground text-[0.9rem] font-light transition-colors duration-200 w-fit"
              data-testid={`footer-link-${link.id}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Services + Contact */}
        <div className="flex flex-col gap-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/35 font-sans mb-1">Services</p>
          {[
            "Signature Day Coordination",
            "Partial Planning Support",
            "Full Planning + Coordination",
            "Planning Power Hour",
          ].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo("services")}
              className="text-left text-primary-foreground/50 hover:text-primary-foreground text-[0.9rem] font-light transition-colors duration-200 w-fit"
              data-testid={`footer-service-${s.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {s}
            </button>
          ))}
          <div className="mt-4 pt-4 border-t border-primary-foreground/10 flex flex-col gap-1.5">
            <a href="tel:0872186100" className="text-primary-foreground/50 hover:text-primary-foreground text-[0.875rem] font-light transition-colors" data-testid="footer-phone">
              0872186100
            </a>
            <a href="mailto:wedwitherica@gmail.com" className="text-primary-foreground/50 hover:text-primary-foreground text-[0.875rem] font-light transition-colors" data-testid="footer-email">
              wedwitherica@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto px-8 md:px-12 max-w-7xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-primary-foreground/30 font-light font-sans">
            © {new Date().getFullYear()} Weddings with Erica. All rights reserved.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] text-primary-foreground/25 font-light font-sans flex items-center gap-1.5"
          >
            Made with <Heart className="w-3 h-3 fill-primary-foreground/30 text-primary-foreground/30" /> for Erica's couples
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
