import { Instagram, PlayCircle } from "lucide-react";
import ericaPortrait from "@assets/meet_erica_1780239389447.jpg";
import couplePlanning from "@assets/meet_erica_3_1780239389447.jpg";
import emmaJohn from "@assets/Emma_&_John_1780292849312.jpg";
import katieSteven from "@assets/Katie_&_Steven_1780292849313.jpg";
import jennyConor from "@assets/Jenny_&_Conor_1780246212053.jpg";

const INSTAGRAM_URL = "https://www.instagram.com/weddingswitherica/";

const instagramPosts = [
  {
    url: "https://www.instagram.com/weddingswitherica/reel/DchHoSZKc1M/",
    thumbnail: ericaPortrait,
    type: "Reel",
    title: "STOP THE WEDDING IF...",
    date: "2026-08-26",
    description:
      "A recent Weddings with Erica reel with wedding planning and ceremony advice for couples in Ireland.",
  },
  {
    url: "https://www.instagram.com/weddingswitherica/reel/DcX6v-huhmd/",
    thumbnail: couplePlanning,
    type: "Reel",
    title: "A super cute touch yesterday by the Bride and Groom",
    date: "2026-08-23",
    description:
      "A recent Weddings with Erica reel showing real wedding detail inspiration from an Irish wedding day.",
  },
  {
    url: "https://www.instagram.com/weddingswitherica/p/DcOq4khNbxU/",
    thumbnail: emmaJohn,
    type: "Post",
    title: "Something borrowed: Erin and Tim",
    date: "2026-08-19",
    description:
      "A Weddings with Erica post about Erin and Tim travelling from the U.S. to get married in Ireland.",
  },
  {
    url: "https://www.instagram.com/weddingswitherica/reel/DcPAx4cR2Qp/",
    thumbnail: katieSteven,
    type: "Reel",
    title: "Wedding content creator equipment and planning support",
    date: "2026-08-19",
    description:
      "A recent Weddings with Erica reel with behind-the-scenes wedding planning and content support context.",
  },
  {
    url: "https://www.instagram.com/weddingswitherica/p/DaA4KCvN0MF/",
    thumbnail: jennyConor,
    type: "Post",
    title: "Wedding review for Weddings with Erica",
    date: "2026-06-25",
    description:
      "A Weddings with Erica review post showing real couple feedback for Erica's planning and coordination support.",
  },
];

const instagramSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://weddingswitherica.com/#instagram-posts",
  name: "Recent Weddings with Erica Instagram videos and posts",
  description:
    "Recent Instagram reels and posts from Erica Egan, wedding planner in Ireland.",
  itemListElement: instagramPosts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item:
      post.type === "Reel"
        ? {
            "@type": "VideoObject",
            name: post.title,
            description: post.description,
            uploadDate: post.date,
            contentUrl: post.url,
            creator: {
              "@type": "Person",
              name: "Erica Egan",
            },
            publisher: {
              "@type": "Organization",
              name: "Weddings with Erica",
              sameAs: INSTAGRAM_URL,
            },
          }
        : {
            "@type": "SocialMediaPosting",
            headline: post.title,
            datePublished: post.date,
            url: post.url,
            image: post.url,
            sharedContent: {
              "@type": "CreativeWork",
              name: post.title,
              description: post.description,
            },
            publisher: {
              "@type": "Organization",
              name: "Weddings with Erica",
              sameAs: INSTAGRAM_URL,
            },
          },
  })),
};

export function InstagramFeed() {
  return (
    <section className="py-16 md:py-24 bg-[hsl(40,33%,97%)]" aria-labelledby="instagram-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(instagramSchema) }}
      />
      <div className="mx-auto px-6 md:px-10 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
          <div>
            <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-2 font-sans block">
              Latest Videos From Erica
            </span>
            <h2 id="instagram-heading" className="text-4xl md:text-5xl font-serif text-foreground leading-[1.08]">
              Wedding moments from <em className="not-italic text-primary">Erica's couples</em>
            </h2>
            <p className="text-foreground/60 font-light text-[0.98rem] leading-relaxed mt-3 max-w-2xl">
              Recent Instagram reels and posts from Weddings with Erica, presented as a clean profile-style video grid with direct links to Erica's real account.
            </p>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-[12px] uppercase tracking-[0.18em] hover:bg-primary/90 transition-colors shadow-sm"
          >
            <Instagram className="w-4 h-4" aria-hidden="true" />
            See Latest on Instagram
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 items-start">
          {instagramPosts.map((post) => (
            <article key={post.url} className="bg-white border border-border/25 shadow-sm overflow-hidden">
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label={`Open @weddingswitherica ${post.type.toLowerCase()}: ${post.title}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={post.thumbnail}
                    alt={`@weddingswitherica ${post.type.toLowerCase()} thumbnail for ${post.title}`}
                    loading="lazy"
                    width="520"
                    height="650"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/15" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-primary shadow-sm">
                    {post.type === "Reel" ? (
                      <PlayCircle className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Instagram className="h-4 w-4" aria-hidden="true" />
                    )}
                    {post.type}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <span className="text-[11px] uppercase tracking-[0.18em] text-white/78 font-sans">
                      @weddingswitherica / {new Date(`${post.date}T00:00:00`).toLocaleDateString("en-IE", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                    </span>
                    <h3 className="font-serif text-2xl text-white leading-tight mt-2">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </a>
              <p className="px-5 pb-5 text-foreground/62 font-light leading-[1.7] text-[0.95rem]">
                {post.description}
              </p>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-5 mb-5 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-primary hover:text-primary/75 transition-colors"
              >
                {post.type === "Reel" ? (
                  <PlayCircle className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                )}
                Watch on Erica's Instagram
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
