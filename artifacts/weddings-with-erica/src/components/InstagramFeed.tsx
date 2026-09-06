import { Instagram, PlayCircle } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/weddingswitherica/";

const instagramPosts = [
  {
    url: "https://www.instagram.com/weddingswitherica/reel/DchHoSZKc1M/",
    type: "Reel",
    title: "STOP THE WEDDING IF...",
    date: "2026-08-26",
    description:
      "A recent Weddings with Erica reel with wedding planning and ceremony advice for couples in Ireland.",
  },
  {
    url: "https://www.instagram.com/weddingswitherica/reel/DcX6v-huhmd/",
    type: "Reel",
    title: "A super cute touch yesterday by the Bride and Groom",
    date: "2026-08-23",
    description:
      "A recent Weddings with Erica reel showing real wedding detail inspiration from an Irish wedding day.",
  },
  {
    url: "https://www.instagram.com/weddingswitherica/p/DcOq4khNbxU/",
    type: "Post",
    title: "Something borrowed: Erin and Tim",
    date: "2026-08-19",
    description:
      "A Weddings with Erica post about Erin and Tim travelling from the U.S. to get married in Ireland.",
  },
  {
    url: "https://www.instagram.com/weddingswitherica/reel/DcPAx4cR2Qp/",
    type: "Reel",
    title: "Wedding content creator equipment and planning support",
    date: "2026-08-19",
    description:
      "A recent Weddings with Erica reel with behind-the-scenes wedding planning and content support context.",
  },
  {
    url: "https://www.instagram.com/weddingswitherica/p/DaA4KCvN0MF/",
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
    "Recent playable Instagram reels and posts from Erica Egan, wedding planner in Ireland.",
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
            embedUrl: post.url,
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
              Real, playable Instagram reels and posts from Weddings with Erica, showing recent wedding planning tips, behind-the-scenes moments and real Irish wedding inspiration.
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

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 items-start">
          {instagramPosts.map((post) => (
            <article key={post.url} className="bg-white border border-border/25 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-border/20 flex items-start justify-between gap-4">
                <div>
                  <span className="text-[12px] uppercase tracking-[0.2em] text-primary/70 font-sans">
                    @weddingswitherica / {post.type} / {new Date(`${post.date}T00:00:00`).toLocaleDateString("en-IE", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <h3 className="font-serif text-2xl text-foreground leading-tight mt-2">
                    {post.title}
                  </h3>
                </div>
                {post.type === "Reel" ? (
                  <PlayCircle className="w-5 h-5 text-primary/70 shrink-0 mt-1" aria-hidden="true" />
                ) : (
                  <Instagram className="w-5 h-5 text-primary/70 shrink-0 mt-1" aria-hidden="true" />
                )}
              </div>
              <div className="bg-[hsl(40,33%,97%)] border-b border-border/20">
                <iframe
                  src={`${post.url}embed`}
                  title={`@weddingswitherica ${post.type.toLowerCase()}: ${post.title}`}
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  className="block w-full h-[620px] md:h-[680px] border-0 bg-white"
                />
              </div>
              <p className="px-5 pb-5 text-foreground/62 font-light leading-[1.7] text-[0.95rem]">
                {post.description}
              </p>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-5 mb-5 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-primary hover:text-primary/75 transition-colors"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
                Open on Erica's Instagram
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
