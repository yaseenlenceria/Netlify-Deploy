import { useLocation } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Seo,
  SITE_URL,
  businessSchema,
  websiteSchema,
  makeBreadcrumbSchema,
} from "@/components/Seo";

type LandingPageContent = {
  title: string;
  metaTitle: string;
  description: string;
  path: string;
  eyebrow: string;
  intro: string;
  focusTitle: string;
  focus: string[];
  closingTitle: string;
  closing: string;
};

const services = [
  {
    title: "Signature Day Coordination",
    copy: "For couples who have planned everything themselves but want to fully relax and enjoy the day. Erica steps in before the wedding, takes the reins, and keeps everything running seamlessly.",
  },
  {
    title: "Partial Planning Support",
    copy: "Ongoing guidance for couples who want expert support while still leading their own planning, with structure, recommendations, reassurance, and full on-the-day coordination.",
  },
  {
    title: "Full Planning + Coordination",
    copy: "Complete end-to-end support from the earliest stages of planning through to the wedding day, including venue, suppliers, styling, budgeting, and coordination.",
  },
  {
    title: "Planning Power Hour",
    copy: "A focused 1:1 consultation for couples who feel stuck or want professional reassurance, supplier recommendations, clarity on next steps, and follow-up notes.",
  },
];

const pages: Record<string, LandingPageContent> = {
  price: {
    title: "Wedding Planner in Ireland Price",
    metaTitle: "Wedding Planner in Ireland Price | Weddings with Erica",
    description:
      "Explore wedding planner pricing factors in Ireland and the planning, partial planning, power hour and day coordination support available from Weddings with Erica.",
    path: "/wedding-planner-in-ireland-price",
    eyebrow: "Wedding planning prices in Ireland",
    intro:
      "Wedding planner price depends on the level of support you need, how close your wedding is, and whether you want full planning, partial planning, a focused planning session, or calm day coordination.",
    focusTitle: "What affects the price",
    focus: [
      "Full Planning + Coordination covers venue, suppliers, styling, budgeting, and wedding day delivery.",
      "Partial Planning Support is usually right when you want guidance, supplier recommendations, structure, and full coordination while still leading your own plans.",
      "Signature Day Coordination is for couples who have planned the day and want practical support before and on the wedding day.",
      "Planning Power Hour is a focused 1:1 session for clarity, supplier guidance, and next steps.",
    ],
    closingTitle: "Ask for the right package",
    closing:
      "Every package is tailored around you, your vision, and what you need most. The best next step is to enquire with Erica and share where you are in the planning process.",
  },
  cost: {
    title: "Wedding Planner in Ireland Cost",
    metaTitle: "Wedding Planner in Ireland Cost | Weddings with Erica",
    description:
      "Learn what can shape the cost of a wedding planner in Ireland and compare full planning, partial planning, planning power hour and day coordination support.",
    path: "/wedding-planner-in-ireland-cost",
    eyebrow: "Wedding planner cost guide",
    intro:
      "The cost of a wedding planner in Ireland is shaped by how much support you want, when support begins, and how much supplier, timeline, budget, and day-of coordination you need.",
    focusTitle: "Choose the level of support",
    focus: [
      "Full planning gives complete support from first idea to last dance.",
      "Partial planning brings structure, recommendations, and reassurance during the planning journey.",
      "Day coordination gives you support behind the scenes so you can be fully present.",
      "A planning power hour is a focused way to get clarity and confidence in a single session.",
    ],
    closingTitle: "A calm, practical starting point",
    closing:
      "Erica keeps everything calm, organised, and seamlessly beautiful so you can enjoy the moment. Enquire to talk through the package that fits your plans.",
  },
  best: {
    title: "Best Wedding Planner in Ireland",
    metaTitle: "Best Wedding Planner in Ireland | Weddings with Erica",
    description:
      "Looking for the best wedding planner in Ireland for a calm, organised wedding day? Meet Weddings with Erica and explore planning and coordination support.",
    path: "/best-wedding-planner-in-ireland",
    eyebrow: "Finding the right planner",
    intro:
      "The best wedding planner for your day is someone who brings calm, organisation, practical guidance, and a reassuring presence throughout the planning process.",
    focusTitle: "What couples can expect",
    focus: [
      "A calm, organised presence throughout the process.",
      "Trusted supplier recommendations and guidance.",
      "Timeline creation, supplier communication, and practical wedding day support.",
      "Support behind the scenes so you can relax and genuinely enjoy every moment.",
    ],
    closingTitle: "Meet Erica",
    closing:
      "Erica Egan offers personal wedding planning, partial planning support, planning consultations, and wedding day coordination for couples across Ireland.",
  },
  book: {
    title: "Book a Wedding Planner in Ireland",
    metaTitle: "Book a Wedding Planner in Ireland | Weddings with Erica",
    description:
      "Book a wedding planner in Ireland with Weddings with Erica for full planning, partial planning, planning power hour sessions or day-of wedding coordination.",
    path: "/wedding-planner-book",
    eyebrow: "Ready to book support",
    intro:
      "If you are ready to book a wedding planner, start by sharing where you are in the planning process and what kind of support would make the biggest difference.",
    focusTitle: "Ways to work with Erica",
    focus: [
      "Book full planning if you want end-to-end support from first idea to wedding day.",
      "Book partial planning if you want expert guidance while still leading the planning yourself.",
      "Book Signature Day Coordination if your plans are mostly in place and you want the day handled properly.",
      "Book a Planning Power Hour if you need focused advice, supplier recommendations, and clear next steps.",
    ],
    closingTitle: "Start the conversation",
    closing:
      "Use the enquiry form to tell Erica about your date, location, plans, and the support you need most.",
  },
  destination: {
    title: "Destination Wedding Planner Ireland",
    metaTitle: "Destination Wedding Planner Ireland | Weddings with Erica",
    description:
      "Planning a destination wedding in Ireland? Weddings with Erica offers supplier guidance, timelines, planning support and wedding day coordination.",
    path: "/destination-wedding-planner",
    eyebrow: "Destination weddings in Ireland",
    intro:
      "Planning a destination wedding in Ireland can feel easier with calm, local support for suppliers, timelines, planning structure, and wedding day coordination.",
    focusTitle: "Support for Irish wedding plans",
    focus: [
      "Supplier recommendations and introductions for your plans in Ireland.",
      "Timeline creation and management so the day has a clear structure.",
      "Ongoing planning guidance if you want support before you arrive.",
      "On-the-day logistics and troubleshooting so you can be fully present.",
    ],
    closingTitle: "Plan with confidence",
    closing:
      "Erica supports couples across Ireland with planning and coordination that keeps the process calm, organised, and practical.",
  },
  international: {
    title: "International Wedding Planner for Ireland",
    metaTitle:
      "International Wedding Planner for Ireland | Weddings with Erica",
    description:
      "Planning an Irish wedding from abroad? Weddings with Erica offers calm planning guidance, supplier support, timelines and day-of coordination in Ireland.",
    path: "/international-wedding-planner",
    eyebrow: "Planning from abroad",
    intro:
      "If you are planning an Irish wedding from another country, a calm planning partner in Ireland can help with structure, supplier guidance, timelines, and coordination.",
    focusTitle: "Practical planning help",
    focus: [
      "Full planning and coordination for couples who want complete support.",
      "Partial planning support with regular check-ins and progress reviews.",
      "Supplier recommendations and communication to keep plans moving.",
      "Wedding day coordination from morning to evening.",
    ],
    closingTitle: "Support across Ireland",
    closing:
      "Weddings with Erica offers personal planning, partial planning, consultations, and wedding day coordination for couples across Ireland.",
  },
  coordinator: {
    title: "On the Day Wedding Coordinator Ireland",
    metaTitle: "On the Day Wedding Coordinator Ireland | Weddings with Erica",
    description:
      "On the day wedding coordinator in Ireland for couples who have planned their wedding and want calm, practical support before and on the day.",
    path: "/on-the-day-wedding-coordinator",
    eyebrow: "Wedding day coordination",
    intro:
      "On the day wedding coordination is ideal when you have planned the wedding yourself but want to relax, enjoy the day, and know the practical details are being handled.",
    focusTitle: "Signature Day Coordination includes",
    focus: [
      "Detailed pre-wedding planning call.",
      "Full supplier coordination and communication.",
      "Timeline creation and management.",
      "On-the-day logistics, troubleshooting, and personal support from morning to evening.",
    ],
    closingTitle: "Handled properly",
    closing:
      "Around six weeks before the wedding, Erica can step in, take the reins, and make sure everything runs seamlessly.",
  },
  olivia: {
    title: "Wedding Planner Olivia Search",
    metaTitle: "Wedding Planner Olivia Search | Weddings with Erica",
    description:
      "Comparing wedding planners in Ireland? Meet Weddings with Erica for calm full planning, partial planning, planning consultations and day coordination.",
    path: "/wedding-planner-olivia",
    eyebrow: "Comparing wedding planners",
    intro:
      "If your search for a wedding planner brought you here while comparing options, this page shares the planning and coordination support available from Erica Egan at Weddings with Erica.",
    focusTitle: "What Weddings with Erica offers",
    focus: [
      "Personal wedding planning and coordination for couples across Ireland.",
      "Full planning, partial planning support, planning consultations, and day coordination.",
      "Supplier recommendations, timelines, budgeting support, and calm practical guidance.",
      "A dedicated planner focused on keeping your wedding day organised and enjoyable.",
    ],
    closingTitle: "Meet Erica Egan",
    closing:
      "Erica brings a calm, organised presence to the planning process so couples can enjoy the moment while the details are handled.",
  },
};

function pageSchema(page: LandingPageContent) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${page.path}#webpage`,
    url: `${SITE_URL}${page.path}`,
    name: page.title,
    description: page.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#business` },
    inLanguage: "en-IE",
  };
}

function SeoLandingPage({ page }: { page: LandingPageContent }) {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Seo
        title={page.metaTitle}
        description={page.description}
        path={page.path}
        schema={[
          businessSchema,
          websiteSchema,
          pageSchema(page),
          makeBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.title, path: page.path },
          ]),
        ]}
      />
      <Navigation />
      <main className="pt-[76px]">
        <section className="bg-[hsl(40,33%,97%)] px-6 md:px-10 py-14 md:py-20">
          <div className="mx-auto max-w-5xl">
            <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-4 font-sans block">
              {page.eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-foreground leading-[1.08] max-w-4xl">
              {page.title}
            </h1>
            <p className="text-foreground/68 font-light text-[1rem] md:text-[1.1rem] leading-[1.85] max-w-3xl mt-6">
              {page.intro}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => navigate("/contact")}
                className="btn-shine bg-primary text-primary-foreground px-8 py-4 text-[12px] uppercase tracking-[0.22em] shadow-sm hover:shadow-md hover:bg-primary/90 transition-all duration-300 font-sans"
              >
                Enquire With Erica
              </button>
              <button
                onClick={() => navigate("/services")}
                className="border border-primary/30 text-primary px-8 py-4 text-[12px] uppercase tracking-[0.22em] hover:border-primary/60 transition-all duration-300 font-sans"
              >
                View Services
              </button>
            </div>
          </div>
        </section>

        <section className="bg-[hsl(40,18%,94%)] px-6 md:px-10 py-12 md:py-16">
          <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14">
            <div>
              <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-3 font-sans block">
                Existing support
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-[1.1]">
                Wedding planning support, shaped around you
              </h2>
              <p className="text-foreground/62 font-light text-[0.98rem] leading-[1.8] mt-5">
                Planning your wedding should feel exciting, not stressful. Erica
                keeps everything calm, organised, and running seamlessly so you
                can relax and genuinely enjoy every moment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="bg-white border border-border/25 p-5 shadow-sm"
                >
                  <h3 className="font-serif text-2xl text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-foreground/65 font-light text-[0.94rem] leading-[1.75]">
                    {service.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background px-6 md:px-10 py-12 md:py-16">
          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-12">
            <div>
              <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-3 font-sans block">
                Page focus
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-[1.1]">
                {page.focusTitle}
              </h2>
            </div>
            <ul className="space-y-4">
              {page.focus.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-foreground/70 font-light leading-[1.75]"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary/70 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[hsl(90,22%,30%)] text-primary-foreground px-6 md:px-10 py-12 md:py-16">
          <div className="mx-auto max-w-5xl flex flex-col md:flex-row md:items-center md:justify-between gap-7">
            <div>
              <span className="text-[13px] uppercase tracking-[0.28em] text-primary-foreground/60 mb-3 font-sans block">
                Next step
              </span>
              <h2 className="text-3xl md:text-5xl font-serif leading-[1.1]">
                {page.closingTitle}
              </h2>
              <p className="text-primary-foreground/76 font-light text-[1rem] leading-[1.8] mt-4 max-w-2xl">
                {page.closing}
              </p>
            </div>
            <button
              onClick={() => navigate("/contact")}
              className="bg-primary-foreground text-primary px-7 py-4 text-[12px] uppercase tracking-[0.22em] hover:bg-primary-foreground/90 transition-all duration-300 font-sans inline-flex items-center justify-center gap-2 shrink-0"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function WeddingPlannerPricePage() {
  return <SeoLandingPage page={pages.price} />;
}

export function WeddingPlannerCostPage() {
  return <SeoLandingPage page={pages.cost} />;
}

export function BestWeddingPlannerPage() {
  return <SeoLandingPage page={pages.best} />;
}

export function WeddingPlannerBookPage() {
  return <SeoLandingPage page={pages.book} />;
}

export function DestinationWeddingPlannerPage() {
  return <SeoLandingPage page={pages.destination} />;
}

export function InternationalWeddingPlannerPage() {
  return <SeoLandingPage page={pages.international} />;
}

export function OnTheDayWeddingCoordinatorPage() {
  return <SeoLandingPage page={pages.coordinator} />;
}

export function WeddingPlannerOliviaPage() {
  return <SeoLandingPage page={pages.olivia} />;
}
