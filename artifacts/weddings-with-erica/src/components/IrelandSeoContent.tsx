import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";
import { homeFaqs, irelandSearchPages } from "@/lib/seoContent";

const serviceAreas = [
  "Cork",
  "Kerry",
  "Limerick",
  "Clare",
  "Galway",
  "Dublin",
  "wedding venues across Ireland",
];

export function IrelandSeoContent() {
  const [, navigate] = useLocation();

  return (
    <section className="bg-background px-6 md:px-10 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[0.86fr_1.14fr] gap-10 lg:gap-14 items-start">
          <div>
            <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-3 font-sans block">
              Wedding planner in Ireland
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-[1.08] max-w-2xl">
              Calm planning support for weddings across Ireland
            </h2>
            <p className="text-foreground/65 font-light text-[1rem] leading-[1.85] mt-5 max-w-2xl">
              Weddings with Erica supports couples who want a personal wedding
              planner in Ireland, practical planning guidance, trusted supplier
              recommendations and calm coordination before and on the wedding
              day.
            </p>
            <p className="text-foreground/65 font-light text-[1rem] leading-[1.85] mt-4 max-w-2xl">
              Whether you need full wedding planning, partial planning support,
              a focused planning power hour or on-the-day wedding coordination,
              Erica keeps the process organised so you can enjoy the moment.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="border border-primary/20 text-primary/80 px-3 py-1.5 text-[0.8rem] font-sans"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {irelandSearchPages.map((page) => (
              <button
                key={page.href}
                onClick={() => navigate(page.href)}
                className="bg-[hsl(40,18%,94%)] border border-border/25 p-5 text-left hover:border-primary/35 hover:bg-white transition-all duration-300"
              >
                <span className="text-[12px] uppercase tracking-[0.22em] text-primary/65 font-sans">
                  Ireland guide
                </span>
                <span className="block font-serif text-2xl text-foreground mt-2 leading-tight">
                  {page.label}
                </span>
                <span className="block text-foreground/62 font-light text-[0.92rem] leading-[1.65] mt-2">
                  {page.copy}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-12 border-t border-border/40 pt-10">
          <div>
            <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-3 font-sans block">
              Questions couples ask
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-[1.1]">
              Planning your Irish wedding with Erica
            </h2>
          </div>
          <div className="space-y-5">
            {homeFaqs.map((item) => (
              <article key={item.question} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary/65 shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-2xl text-foreground leading-tight">
                    {item.question}
                  </h3>
                  <p className="text-foreground/65 font-light text-[0.96rem] leading-[1.75] mt-2">
                    {item.answer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <button
            onClick={() => navigate("/contact")}
            className="bg-primary text-primary-foreground px-7 py-4 text-[12px] uppercase tracking-[0.22em] hover:bg-primary/90 transition-all duration-300 font-sans inline-flex items-center justify-center gap-2"
          >
            Enquire With Erica
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
