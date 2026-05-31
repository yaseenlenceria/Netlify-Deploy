import { useLocation } from "wouter";
import { Instagram, Phone, Mail, Heart } from "lucide-react";
import logoImg from "@assets/MAin_logo_1780239389448.png";

const navLinks = [
  { label: "Meet Erica", href: "/meet-erica" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Get in Touch", href: "/contact" },
];

const services = [
  "Signature Day Coordination",
  "Partial Planning Support",
  "Full Planning + Coordination",
  "Planning Power Hour",
];

export function Footer() {
  const [, navigate] = useLocation();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto px-8 md:px-12 max-w-7xl py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

        {/* Brand */}
        <div className="flex flex-col gap-5">
          <img
            src={logoImg}
            alt="Weddings with Erica"
            className="h-14 w-auto object-contain self-start brightness-0 invert opacity-80"
          />
          <p className="text-primary-foreground/65 text-[0.9rem] font-light leading-[1.8] max-w-xs">
            Ireland's boutique wedding planner. Keeping everything calm, organised, and seamlessly beautiful — so you can be fully present on your day.
          </p>
          <div className="flex items-center gap-4 mt-1">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-primary-foreground/20 text-primary-foreground/50 hover:border-primary-foreground/60 hover:text-primary-foreground transition-all duration-200"
              aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="tel:0872186100"
              className="w-9 h-9 flex items-center justify-center border border-primary-foreground/20 text-primary-foreground/50 hover:border-primary-foreground/60 hover:text-primary-foreground transition-all duration-200"
              aria-label="Phone">
              <Phone className="w-4 h-4" />
            </a>
            <a href="mailto:wedwitherica@gmail.com"
              className="w-9 h-9 flex items-center justify-center border border-primary-foreground/20 text-primary-foreground/50 hover:border-primary-foreground/60 hover:text-primary-foreground transition-all duration-200"
              aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/55 font-sans mb-1">Navigation</p>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => navigate(link.href)}
              className="text-left text-primary-foreground/70 hover:text-primary-foreground text-[0.9rem] font-light transition-colors duration-200 w-fit"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Services + Contact */}
        <div className="flex flex-col gap-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/55 font-sans mb-1">Services</p>
          {services.map((s) => (
            <button
              key={s}
              onClick={() => navigate("/services")}
              className="text-left text-primary-foreground/70 hover:text-primary-foreground text-[0.9rem] font-light transition-colors duration-200 w-fit"
            >
              {s}
            </button>
          ))}
          <div className="mt-4 pt-4 border-t border-primary-foreground/10 flex flex-col gap-1.5">
            <a href="tel:0872186100" className="text-primary-foreground/70 hover:text-primary-foreground text-[0.9rem] font-light transition-colors">
              0872186100
            </a>
            <a href="mailto:wedwitherica@gmail.com" className="text-primary-foreground/70 hover:text-primary-foreground text-[0.9rem] font-light transition-colors">
              wedwitherica@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto px-8 md:px-12 max-w-7xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-primary-foreground/50 font-light font-sans">
            © {new Date().getFullYear()} Weddings with Erica. All rights reserved.
          </p>
          <p className="text-[11px] text-primary-foreground/45 font-light font-sans flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 fill-primary-foreground/50 text-primary-foreground/50" /> for Erica's couples
          </p>
        </div>
      </div>
    </footer>
  );
}
