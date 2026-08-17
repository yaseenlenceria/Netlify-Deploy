import { useLocation, Link } from "wouter";
import { Instagram, Phone, Mail, Heart, MapPin } from "lucide-react";
import logoImg from "@assets/MAin_logo_1780239389448.png";

const INSTAGRAM = "https://www.instagram.com/weddingswitherica/";
const TIKTOK = "https://www.tiktok.com/@weddingswitherica";
const GOOGLE_MAPS = "https://maps.app.goo.gl/nym8XsmkajibUHyW9";

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

const popularPages = [
  { label: "Wedding Planner in Ireland Price", href: "/wedding-planner-in-ireland-price" },
  { label: "Wedding Planner in Ireland Cost", href: "/wedding-planner-in-ireland-cost" },
  { label: "Best Wedding Planner in Ireland", href: "/best-wedding-planner-in-ireland" },
  { label: "Book a Wedding Planner in Ireland", href: "/wedding-planner-book" },
  { label: "Destination Wedding Planner Ireland", href: "/destination-wedding-planner" },
  { label: "International Wedding Planner Ireland", href: "/international-wedding-planner" },
  { label: "On the Day Wedding Coordinator", href: "/on-the-day-wedding-coordinator" },
  { label: "Wedding Planner Olivia", href: "/wedding-planner-olivia" },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z"/>
    </svg>
  );
}

export function Footer() {
  const [, navigate] = useLocation();

  return (
    <footer className="bg-gradient-to-br from-[hsl(90,22%,30%)] via-[hsl(90,18%,24%)] to-[hsl(40,15%,16%)] text-primary-foreground">
      <div className="mx-auto px-8 md:px-12 max-w-7xl py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">

        {/* Brand */}
        <div className="flex flex-col gap-5">
          <img
            src={logoImg}
            alt="Weddings with Erica"
            className="h-24 w-auto object-contain self-start brightness-0 invert opacity-85 bg-transparent"
          />
          <p className="text-primary-foreground/75 text-[1rem] font-light leading-[1.8] max-w-xs">
            Keeping everything calm, organised, and seamlessly beautiful — so you can be fully present on your day.
          </p>
          <div className="flex items-center gap-3 mt-1">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-primary-foreground/25 text-primary-foreground/60 hover:border-primary-foreground/70 hover:text-primary-foreground transition-all duration-200"
              aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={TIKTOK} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-primary-foreground/25 text-primary-foreground/60 hover:border-primary-foreground/70 hover:text-primary-foreground transition-all duration-200"
              aria-label="TikTok">
              <TikTokIcon className="w-4 h-4" />
            </a>
            <a href={GOOGLE_MAPS} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-primary-foreground/25 text-primary-foreground/60 hover:border-primary-foreground/70 hover:text-primary-foreground transition-all duration-200"
              aria-label="Weddings with Erica on Google Maps">
              <MapPin className="w-4 h-4" />
            </a>
            <a href="tel:0872186100"
              className="w-9 h-9 flex items-center justify-center border border-primary-foreground/25 text-primary-foreground/60 hover:border-primary-foreground/70 hover:text-primary-foreground transition-all duration-200"
              aria-label="Phone">
              <Phone className="w-4 h-4" />
            </a>
            <a href="mailto:wedwitherica@gmail.com"
              className="w-9 h-9 flex items-center justify-center border border-primary-foreground/25 text-primary-foreground/60 hover:border-primary-foreground/70 hover:text-primary-foreground transition-all duration-200"
              aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <p className="text-[14px] uppercase tracking-[0.25em] text-primary-foreground/60 font-sans mb-1">Navigation</p>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => navigate(link.href)}
              className="text-left text-primary-foreground/80 hover:text-primary-foreground text-[1rem] font-light transition-colors duration-200 w-fit"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Popular Pages */}
        <div className="flex flex-col gap-4">
          <p className="text-[14px] uppercase tracking-[0.25em] text-primary-foreground/60 font-sans mb-1">Popular Pages</p>
          {popularPages.map((link) => (
            <button
              key={link.href}
              onClick={() => navigate(link.href)}
              className="text-left text-primary-foreground/80 hover:text-primary-foreground text-[0.95rem] font-light transition-colors duration-200 w-fit leading-snug"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Services + Contact */}
        <div className="flex flex-col gap-4">
          <p className="text-[14px] uppercase tracking-[0.25em] text-primary-foreground/60 font-sans mb-1">Services</p>
          {services.map((s) => (
            <button
              key={s}
              onClick={() => navigate("/services")}
              className="text-left text-primary-foreground/80 hover:text-primary-foreground text-[1rem] font-light transition-colors duration-200 w-fit"
            >
              {s}
            </button>
          ))}
          <div className="mt-4 pt-4 border-t border-primary-foreground/15 flex flex-col gap-2">
            <a href="tel:0872186100" className="text-primary-foreground/80 hover:text-primary-foreground text-[1rem] font-light transition-colors">
              0872186100
            </a>
            <a href="mailto:wedwitherica@gmail.com" className="text-primary-foreground/80 hover:text-primary-foreground text-[1rem] font-light transition-colors">
              wedwitherica@gmail.com
            </a>
            <a href={GOOGLE_MAPS} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground text-[1rem] font-light transition-colors">
              Weddings with Erica on Google Maps
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground text-[1rem] font-light transition-colors">
              @weddingswitherica
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto px-8 md:px-12 max-w-7xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-[13px] text-primary-foreground/55 font-light font-sans">
              © {new Date().getFullYear()} Weddings with Erica. All rights reserved.
            </p>
            <Link
              href="/privacy-policy"
              className="text-[13px] text-primary-foreground/50 hover:text-primary-foreground/80 font-light font-sans transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={TIKTOK} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors" aria-label="TikTok">
              <TikTokIcon className="w-4 h-4" />
            </a>
            <a href={GOOGLE_MAPS} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors" aria-label="Google Maps">
              <MapPin className="w-4 h-4" />
            </a>
            <p className="text-[13px] text-primary-foreground/50 font-light font-sans flex items-center gap-1.5">
              Made with <Heart className="w-3 h-3 fill-primary-foreground/55 text-primary-foreground/55" /> for Erica's couples
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
