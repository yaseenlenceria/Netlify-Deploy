import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://weddingswitherica.com";
const OUT_DIR = path.resolve("dist/public");
const INDEX_PATH = path.join(OUT_DIR, "index.html");
const DEFAULT_IMAGE = `${SITE_URL}/opengraph.jpg`;

const baseBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#business`,
  name: "Weddings with Erica",
  alternateName: "Erica Egan Wedding Planner",
  description:
    "Personal wedding planning, partial planning support and wedding day coordination for couples across Ireland.",
  url: SITE_URL,
  image: DEFAULT_IMAGE,
  logo: `${SITE_URL}/favicon.png`,
  email: "wedwitherica@gmail.com",
  telephone: "+353872186100",
  priceRange: "EUR",
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
  sameAs: [
    "https://www.instagram.com/weddingswitherica/",
    "https://www.tiktok.com/@weddingswitherica",
    "https://maps.app.goo.gl/nym8XsmkajibUHyW9",
  ],
  knowsAbout: [
    "Wedding planning Ireland",
    "Wedding day coordination",
    "Irish wedding venues",
    "Wedding timelines",
    "Supplier coordination",
    "Destination wedding planner Ireland",
    "International wedding planner Ireland",
    "On the day wedding coordinator Ireland",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Weddings with Erica",
  description: "Wedding planning and coordination services for couples across Ireland.",
  inLanguage: "en-IE",
  publisher: { "@id": `${SITE_URL}/#business` },
};

const serviceNames = [
  "Full wedding planning Ireland",
  "Partial wedding planning support Ireland",
  "Signature day coordination Ireland",
  "Wedding planning power hour",
];

const routes = [
  {
    path: "/",
    title: "Wedding Planner in Ireland | Weddings with Erica",
    description:
      "Wedding planner in Ireland Erica Egan offers full planning, partial planning, planning power hours and calm on-the-day coordination for couples across Ireland.",
    heading: "Wedding Planner in Ireland",
    summary:
      "Weddings with Erica provides calm, organised wedding planning and coordination across Ireland, including full planning, partial planning, power hour consultations and day-of support.",
    schemaType: "WebPage",
    priority: "1.0",
  },
  {
    path: "/services",
    title: "Wedding Planning Services in Ireland | Weddings with Erica",
    description:
      "Wedding planning services in Ireland: full planning, partial planning support, planning power hour consultations and calm on-the-day wedding coordination.",
    heading: "Wedding Planning Services in Ireland",
    summary:
      "Explore full planning, partial planning, Signature Day Coordination and planning consultations with Erica Egan.",
    schemaType: "CollectionPage",
    priority: "0.9",
  },
  {
    path: "/contact",
    title: "Contact Wedding Planner in Ireland | Weddings with Erica",
    description:
      "Enquire with Erica Egan about full wedding planning, partial planning support, planning consultations or on-the-day coordination for weddings across Ireland.",
    heading: "Contact Weddings with Erica",
    summary:
      "Contact Erica Egan to enquire about wedding planning, coordination and practical planning support for weddings in Ireland.",
    schemaType: "ContactPage",
    priority: "0.85",
  },
  {
    path: "/meet-erica",
    title: "Meet Erica Egan | Wedding Planner in Ireland",
    description:
      "Meet Erica Egan, the wedding planner in Ireland behind Weddings with Erica, offering calm, practical planning support and coordination for weddings across Ireland.",
    heading: "Meet Erica Egan",
    summary:
      "Erica Egan is the wedding planner and coordinator behind Weddings with Erica, supporting couples across Ireland with calm planning guidance.",
    schemaType: "ProfilePage",
    priority: "0.8",
  },
  {
    path: "/testimonials",
    title: "Wedding Planner Reviews in Ireland | Weddings with Erica",
    description:
      "Read reviews from couples who trusted Erica Egan for wedding planning, partial planning support and on-the-day wedding coordination in Ireland.",
    heading: "Wedding Planner Reviews in Ireland",
    summary:
      "Read real couple feedback for Weddings with Erica wedding planning, partial planning and coordination support.",
    schemaType: "WebPage",
    priority: "0.75",
  },
  {
    path: "/wedding-planner-in-ireland-price",
    title: "Wedding Planner in Ireland Price | Weddings with Erica",
    description:
      "Explore wedding planner pricing factors in Ireland and the planning, partial planning, power hour and day coordination support available from Weddings with Erica.",
    heading: "Wedding Planner in Ireland Price",
    summary:
      "Understand wedding planner price factors in Ireland and compare the level of planning support that fits your wedding.",
    schemaType: "WebPage",
    priority: "0.8",
  },
  {
    path: "/wedding-planner-in-ireland-cost",
    title: "Wedding Planner in Ireland Cost | Weddings with Erica",
    description:
      "Learn what can shape the cost of a wedding planner in Ireland and compare full planning, partial planning, planning power hour and day coordination support.",
    heading: "Wedding Planner in Ireland Cost",
    summary:
      "Compare the cost factors behind full planning, partial planning, consultations and day coordination in Ireland.",
    schemaType: "WebPage",
    priority: "0.8",
  },
  {
    path: "/best-wedding-planner-in-ireland",
    title: "Best Wedding Planner in Ireland | Weddings with Erica",
    description:
      "Looking for the best wedding planner in Ireland for a calm, organised wedding day? Meet Weddings with Erica and explore planning and coordination support.",
    heading: "Best Wedding Planner in Ireland",
    summary:
      "Weddings with Erica is a strong choice for couples seeking a calm, organised and personal wedding planner in Ireland.",
    schemaType: "WebPage",
    priority: "0.85",
  },
  {
    path: "/wedding-planner-book",
    title: "Book a Wedding Planner in Ireland | Weddings with Erica",
    description:
      "Book a wedding planner in Ireland with Weddings with Erica for full planning, partial planning, planning power hour sessions or day-of wedding coordination.",
    heading: "Book a Wedding Planner in Ireland",
    summary:
      "Start an enquiry with Erica Egan for full planning, partial planning, planning consultations or day coordination.",
    schemaType: "WebPage",
    priority: "0.75",
  },
  {
    path: "/destination-wedding-planner",
    title: "Destination Wedding Planner Ireland | Weddings with Erica",
    description:
      "Planning a destination wedding in Ireland? Weddings with Erica offers supplier guidance, timelines, planning support and wedding day coordination.",
    heading: "Destination Wedding Planner Ireland",
    summary:
      "Get calm local planning support for destination weddings in Ireland, including suppliers, timelines and wedding day coordination.",
    schemaType: "WebPage",
    priority: "0.75",
  },
  {
    path: "/international-wedding-planner",
    title: "International Wedding Planner for Ireland | Weddings with Erica",
    description:
      "Planning an Irish wedding from abroad? Weddings with Erica offers calm planning guidance, supplier support, timelines and day-of coordination in Ireland.",
    heading: "International Wedding Planner for Ireland",
    summary:
      "Erica supports couples planning an Irish wedding from abroad with supplier guidance, planning structure and coordination.",
    schemaType: "WebPage",
    priority: "0.75",
  },
  {
    path: "/on-the-day-wedding-coordinator",
    title: "On the Day Wedding Coordinator Ireland | Weddings with Erica",
    description:
      "On the day wedding coordinator in Ireland for couples who have planned their wedding and want calm, practical support before and on the day.",
    heading: "On the Day Wedding Coordinator Ireland",
    summary:
      "Signature Day Coordination gives couples calm, practical wedding day support after they have planned the main details themselves.",
    schemaType: "WebPage",
    priority: "0.85",
  },
];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function canonicalFor(routePath) {
  return `${SITE_URL}${routePath === "/" ? "/" : routePath}`;
}

function breadcrumbSchema(route) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      ...(route.path === "/"
        ? []
        : [
            {
              "@type": "ListItem",
              position: 2,
              name: route.heading,
              item: canonicalFor(route.path),
            },
          ]),
    ],
  };
}

function pageSchema(route) {
  return {
    "@context": "https://schema.org",
    "@type": route.schemaType,
    "@id": `${canonicalFor(route.path)}#webpage`,
    url: canonicalFor(route.path),
    name: route.title,
    headline: route.heading,
    description: route.description,
    inLanguage: "en-IE",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#business` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: DEFAULT_IMAGE,
    },
    ...(route.path === "/services"
      ? {
          mainEntity: serviceNames.map((name) => ({
            "@type": "Service",
            name,
            provider: { "@id": `${SITE_URL}/#business` },
            areaServed: { "@type": "Country", name: "Ireland" },
          })),
        }
      : {}),
  };
}

function routeSchema(route) {
  return [baseBusinessSchema, websiteSchema, pageSchema(route), breadcrumbSchema(route)];
}

function replaceOrInsertHead(html, selector, replacement) {
  const next = html.replace(selector, replacement);
  if (next !== html) return next;
  return html.replace("</head>", `  ${replacement}\n  </head>`);
}

function metaName(name) {
  return new RegExp(`<meta\\s+[^>]*name=["']${name}["'][^>]*>`, "i");
}

function metaProperty(property) {
  return new RegExp(`<meta\\s+[^>]*property=["']${property}["'][^>]*>`, "i");
}

function linkRel(rel) {
  return new RegExp(`<link\\s+[^>]*rel=["']${rel}["'][^>]*>`, "i");
}

function alternate(hreflang) {
  return new RegExp(
    `<link\\s+[^>]*rel=["']alternate["'][^>]*hreflang=["']${hreflang}["'][^>]*>`,
    "i",
  );
}

function applyRouteMetadata(baseHtml, route) {
  const canonical = canonicalFor(route.path);
  const escapedTitle = escapeHtml(route.title);
  const escapedDescription = escapeHtml(route.description);
  const escapedHeading = escapeHtml(route.heading);
  const escapedSummary = escapeHtml(route.summary);
  const schema = JSON.stringify(routeSchema(route));

  let html = baseHtml;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapedTitle}</title>`);
  html = replaceOrInsertHead(
    html,
    metaName("description"),
    `<meta name="description" content="${escapedDescription}" />`,
  );
  html = replaceOrInsertHead(
    html,
    linkRel("canonical"),
    `<link rel="canonical" href="${canonical}" />`,
  );
  html = replaceOrInsertHead(
    html,
    metaProperty("og:url"),
    `<meta property="og:url" content="${canonical}" />`,
  );
  html = replaceOrInsertHead(
    html,
    metaProperty("og:title"),
    `<meta property="og:title" content="${escapedTitle}" />`,
  );
  html = replaceOrInsertHead(
    html,
    metaProperty("og:description"),
    `<meta property="og:description" content="${escapedDescription}" />`,
  );
  html = replaceOrInsertHead(
    html,
    metaName("twitter:title"),
    `<meta name="twitter:title" content="${escapedTitle}" />`,
  );
  html = replaceOrInsertHead(
    html,
    metaName("twitter:description"),
    `<meta name="twitter:description" content="${escapedDescription}" />`,
  );
  html = html.replace(
    alternate("en-ie"),
    `<link rel="alternate" hreflang="en-ie" href="${canonical}" />`,
  );
  html = html.replace(
    alternate("x-default"),
    `<link rel="alternate" hreflang="x-default" href="${canonical}" />`,
  );
  html = html.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">${schema}</script>`,
  );
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"></div><noscript><main><h1>${escapedHeading}</h1><p>${escapedSummary}</p></main></noscript>`,
  );

  return html;
}

const baseHtml = await readFile(INDEX_PATH, "utf8");

for (const route of routes.filter((item) => item.path !== "/")) {
  const html = applyRouteMetadata(baseHtml, route);
  const routeDir = path.join(OUT_DIR, route.path.slice(1));
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), html);
}

console.log(`Prerendered SEO metadata for ${routes.length - 1} routes.`);
