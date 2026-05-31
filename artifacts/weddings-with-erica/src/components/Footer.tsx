import { useLocation } from "wouter";
import { Instagram, Phone, Mail } from "lucide-react";
import logoImg from "@assets/MAin_logo_1780239389448.png";

const navLinks = [
  { label: "Meet Erica", href: "/meet-erica" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Get in Touch", href: "/contact" },
];

const serviceLinks = [
  "Signature Day Coordination",
  "Partial Planning Support",
  "Full Planning + Coordination",
  "Planning Power Hour",
];

export function Footer() {
  const [, navigate] = useLocation();

  return (
    <footer className="bg-foreground text-primary-foreground">

      {/* Main grid */}
      <div className="mx-auto px-8 md:px-14 max-w-7xl py-20 md:py-28 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-14 md:gap-12">

        {/* Brand column */}
        <div className="flex flex-col gap-6">
          <img
            src={logoImg}
            alt="Weddings with Erica"
            className="h-16 w-auto object-contain self-start brightness-0 invert opacity-75"
          />
          <p className="text-primary-foreground/45 text-[1rem] font-light leading-[1.85] max-w-sm">
            Ireland's boutique wedding planner. Keeping everything calm, organised, and seamlessly beautiful — so you can be fully present on your most important day.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-primary-foreground/18 text-primary-foreground/45 hover:border-primary-foreground/55 hover:text-primary-foreground transition-all duration-250"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="tel:0872186100"
              className="w-10 h-10 flex items-center justify-center border border-primary-foreground/18 text-primary-foreground/45 hover:border-primary-foreground/55 hover:text-primary-foreground transition-all duration-250"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="mailto:wedwitherica@gmail.com"
              className="w-10 h-10 flex items-center justify-center border border-primary-foreground/18 text-primary-foreground/45 hover:border-primary-foreground/55 hover:text-primary-foreground transition-all duration-250"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-2 mt-1">
            <a href="tel:0872186100" className="text-primary-foreground/40 text-[0.9rem] font-light hover:text-primary-foreground/70 transition-colors">
              0872186100
            </a>
            <a href="mailto:wedwitherica@gmail.com" className="text-primary-foreground/40 text-[0.9rem] font-light hover:text-primary-foreground/70 transition-colors">
              wedwitherica@gmail.com
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-1">
          <p className="text-[10px] uppercase tracking-[0.28em] text-primary-foreground/30 font-sans mb-5">Navigate</p>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => navigate(link.href)}
              className="text-left text-primary-foreground/50 hover:text-primary-foreground text-[1rem] font-light transition-colors duration-200 w-fit py-1.5"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Services */}
        <div className="flex flex-col gap-1">
          <p className="text-[10px] uppercase tracking-[0.28em] text-primary-foreground/30 font-sans mb-5">Services</p>
          {serviceLinks.map((s) => (
            <button
              key={s}
              onClick={() => navigate("/services")}
              className="text-left text-primary-foreground/50 hover:text-primary-foreground text-[1rem] font-light transition-colors duration-200 w-fit py-1.5"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto px-8 md:px-14 max-w-7xl py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-primary-foreground/28 font-light font-sans tracking-wide">
            © {new Date().getFullYear()} Weddings with Erica · Ireland
          </p>
          <p className="text-[12px] text-primary-foreground/22 font-light font-sans">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
