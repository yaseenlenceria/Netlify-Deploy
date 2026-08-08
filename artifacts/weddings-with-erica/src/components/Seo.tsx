import { useEffect } from "react";

export const SITE_URL = "https://weddingswitherica.com";
export const DEFAULT_IMAGE = `${SITE_URL}/opengraph.jpg`;

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

function setMeta(selector: string, attribute: "name" | "property", value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.content = content;
}

export function Seo({ title, description, path = "/", noIndex = false, schema }: SeoProps) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path === "/" ? "/" : path}`;
    document.title = title;

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[name="robots"]', "name", "robots", noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", "Weddings with Erica");
    setMeta('meta[property="og:locale"]', "property", "og:locale", "en_IE");
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", DEFAULT_IMAGE);
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", DEFAULT_IMAGE);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const existingSchema = document.getElementById("page-schema");
    existingSchema?.remove();

    if (schema) {
      const script = document.createElement("script");
      script.id = "page-schema";
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => document.getElementById("page-schema")?.remove();
  }, [description, noIndex, path, schema, title]);

  return null;
}

const services = [
  {
    name: "Signature Day Coordination",
    description: "Wedding day coordination for couples in Ireland who have planned their wedding and want calm, practical support before and on the day.",
  },
  {
    name: "Partial Planning Support",
    description: "Flexible wedding planning support for Irish couples who want expert guidance, supplier recommendations, timelines and full day coordination.",
  },
  {
    name: "Full Wedding Planning and Coordination",
    description: "End-to-end wedding planning and coordination in Ireland, including venue sourcing, supplier management, timelines, budgeting and wedding day delivery.",
  },
  {
    name: "Wedding Planning Power Hour",
    description: "A focused wedding planning consultation for couples who need clarity, supplier guidance and next steps for their Irish wedding.",
  },
];

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#business`,
  name: "Weddings with Erica",
  alternateName: "Erica Egan Wedding Planner",
  description: "Personal wedding planning, partial planning support and wedding day coordination for couples across Ireland.",
  slogan: "Calm, organised wedding planning and coordination across Ireland.",
  url: SITE_URL,
  image: DEFAULT_IMAGE,
  logo: `${SITE_URL}/favicon.png`,
  email: "wedwitherica@gmail.com",
  telephone: "+353872186100",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IE",
  },
  areaServed: [
    { "@type": "Country", name: "Ireland" },
    { "@type": "AdministrativeArea", name: "County Cork" },
    { "@type": "AdministrativeArea", name: "County Kerry" },
    { "@type": "AdministrativeArea", name: "County Limerick" },
    { "@type": "AdministrativeArea", name: "County Clare" },
    { "@type": "AdministrativeArea", name: "County Galway" },
    { "@type": "AdministrativeArea", name: "County Dublin" },
  ],
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/meet-erica#erica-egan`,
    name: "Erica Egan",
    jobTitle: "Wedding Planner and Coordinator",
    url: `${SITE_URL}/meet-erica`,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer enquiries",
    email: "wedwitherica@gmail.com",
    telephone: "+353872186100",
    areaServed: "IE",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.instagram.com/weddingswitherica/",
    "https://www.tiktok.com/@weddingswitherica",
  ],
  knowsAbout: [
    "Wedding planning Ireland",
    "Wedding day coordination",
    "Irish wedding venues",
    "Wedding timelines",
    "Supplier coordination",
    "Wedding planning consultations",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wedding Planning Services in Ireland",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "Country", name: "Ireland" },
        serviceType: "Wedding planning and coordination",
      },
    })),
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Weddings with Erica",
  description: "Wedding planning and coordination services for couples across Ireland.",
  inLanguage: "en-IE",
  publisher: { "@id": `${SITE_URL}/#business` },
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/meet-erica#erica-egan`,
  name: "Erica Egan",
  jobTitle: "Wedding Planner and Coordinator",
  worksFor: { "@id": `${SITE_URL}/#business` },
  url: `${SITE_URL}/meet-erica`,
  image: DEFAULT_IMAGE,
  sameAs: [
    "https://www.instagram.com/weddingswitherica/",
    "https://www.tiktok.com/@weddingswitherica",
  ],
};

export const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/services#services`,
  url: `${SITE_URL}/services`,
  name: "Wedding Planning and Coordination Services Ireland",
  description: "Full wedding planning, partial planning support, wedding planning consultations and day-of wedding coordination across Ireland.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: services.map((service) => ({
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "Country", name: "Ireland" },
  })),
};

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#contact`,
  url: `${SITE_URL}/contact`,
  name: "Contact Weddings with Erica",
  description: "Enquire about wedding planning, partial planning support, planning consultations and day-of coordination in Ireland.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#business` },
};

export const makeBreadcrumbSchema = (items: Array<{ name: string; path: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path === "/" ? "/" : item.path}`,
  })),
});
