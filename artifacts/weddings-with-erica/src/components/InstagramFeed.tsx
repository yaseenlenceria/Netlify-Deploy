import { Instagram } from "lucide-react";
import emmaJohn from "@assets/Emma_&_John_1780292849312.jpg";
import jennyConor from "@assets/Jenny_&_Conor_1780246212053.jpg";
import karinaAdrian from "@assets/Karina_&_Adrian_1780246238977.jpg";
import katieSteven from "@assets/Katie_&_Steven_1780292849313.jpg";
import andreLuis from "@assets/Andre_&_Luis_1780247337187.jpg";
import amandaMarcus from "@assets/Amanda_&_Marcus_1780246332890.png";

const INSTAGRAM_URL = "https://www.instagram.com/weddingswitherica/";

const moments = [
  { image: emmaJohn, alt: "Emma and John celebrating their wedding in Ireland" },
  { image: jennyConor, alt: "Jenny and Conor on their wedding day in Ireland" },
  { image: karinaAdrian, alt: "Karina and Adrian celebrating their Irish wedding" },
  { image: katieSteven, alt: "Katie and Steven enjoying their wedding day" },
  { image: andreLuis, alt: "Andre and Luis celebrating together on their wedding day" },
  { image: amandaMarcus, alt: "Amanda and Marcus at their wedding celebration" },
];

export function InstagramFeed() {
  return (
    <section className="py-16 md:py-24 bg-[hsl(40,33%,97%)]" aria-labelledby="instagram-heading">
      <div className="mx-auto px-6 md:px-10 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
          <div>
            <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-2 font-sans block">
              Real Weddings Across Ireland
            </span>
            <h2 id="instagram-heading" className="text-4xl md:text-5xl font-serif text-foreground leading-[1.08]">
              Follow the latest <em className="not-italic text-primary">wedding moments</em>
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-primary hover:text-primary/70 transition-colors"
          >
            <Instagram className="w-4 h-4" aria-hidden="true" />
            @weddingswitherica
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          {moments.map((moment) => (
            <a
              key={moment.alt}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-muted"
              aria-label={`${moment.alt} — view Weddings with Erica on Instagram`}
            >
              <img
                src={moment.image}
                alt={moment.alt}
                loading="lazy"
                width="500"
                height="500"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
