import { useEffect } from "react";

const SITE_URL = "https://weddingswitherica.com";
const DEFAULT_IMAGE = `${SITE_URL}/opengraph.jpg`;

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
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", DEFAULT_IMAGE);
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

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#business`,
  name: "Weddings with Erica",
  description: "Personal wedding planning and on-the-day coordination for couples across Ireland.",
  url: SITE_URL,
  image: DEFAULT_IMAGE,
  email: "wedwitherica@gmail.com",
  telephone: "+353872186100",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IE",
  },
  areaServed: {
    "@type": "Country",
    name: "Ireland",
  },
  founder: {
    "@type": "Person",
    name: "Erica Egan",
  },
  sameAs: [
    "https://www.instagram.com/weddingswitherica/",
    "https://www.tiktok.com/@weddingswitherica",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wedding Planning Services in Ireland",
    itemListElement: [
      "Signature Day Coordination",
      "Partial Planning Support",
      "Full Wedding Planning and Coordination",
      "Wedding Planning Power Hour",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name, areaServed: "Ireland" },
    })),
  },
};
