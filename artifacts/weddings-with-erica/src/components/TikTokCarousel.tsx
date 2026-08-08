import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Music2 } from "lucide-react";

const tiktokVideos = [
  {
    id: "7666121794448919831",
    url: "https://www.tiktok.com/@weddingswitherica/video/7666121794448919831",
    title: "Wedding planning moments with Erica",
    description: "A behind-the-scenes TikTok from Weddings with Erica, sharing calm wedding planning and coordination inspiration for couples in Ireland.",
  },
];

export function TikTokCarousel() {
  const [active, setActive] = useState(0);
  const video = tiktokVideos[active];
  const hasMultipleVideos = tiktokVideos.length > 1;

  const goPrevious = () => {
    setActive((current) => (current === 0 ? tiktokVideos.length - 1 : current - 1));
  };

  const goNext = () => {
    setActive((current) => (current === tiktokVideos.length - 1 ? 0 : current + 1));
  };

  return (
    <aside className="bg-[hsl(40,33%,97%)] px-6 md:px-10 py-14 md:py-20" aria-label="Latest Weddings with Erica TikTok videos">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-primary/15 bg-white/85 shadow-sm overflow-hidden">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-0 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="p-7 md:p-10 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.26em] text-primary/70 font-sans mb-4">
              <Music2 className="w-4 h-4" />
              Latest on TikTok
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-4">
              Real wedding planning moments, <em className="not-italic text-primary">softly shared</em>
            </h2>
            <p className="text-foreground/65 font-light leading-[1.85] text-[0.98rem] md:text-[1.05rem] max-w-xl">
              Follow Erica for behind-the-scenes wedding planning tips, day-of coordination moments, supplier guidance and calm inspiration for couples planning a wedding in Ireland.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-7">
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex justify-center bg-primary text-primary-foreground px-6 py-3 text-[12px] uppercase tracking-[0.2em] shadow-sm hover:shadow-md hover:bg-primary/90 transition-all duration-300 font-sans"
              >
                Watch This TikTok
              </a>
              <a
                href="https://www.tiktok.com/@weddingswitherica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center border border-primary/25 text-primary px-6 py-3 text-[12px] uppercase tracking-[0.2em] hover:border-primary/50 transition-all duration-300 font-sans"
              >
                View Latest Videos
              </a>
            </div>
            <p className="text-foreground/40 text-[13px] mt-5 font-light">
              New videos are posted on TikTok first. This featured carousel can be updated with additional video links as Erica publishes new posts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
            className="relative bg-[hsl(90,18%,95%)] p-5 md:p-8 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[360px]">
              <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-black shadow-xl aspect-[9/16]">
                <iframe
                  key={video.id}
                  src={`https://www.tiktok.com/player/v1/${video.id}?autoplay=0&controls=1&description=1`}
                  title={video.title}
                  className="h-full w-full"
                  loading="lazy"
                  allow="fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-serif text-xl text-foreground">{video.title}</h3>
                <p className="text-[13px] text-foreground/55 font-light mt-1">{video.description}</p>
              </div>
            </div>

            {hasMultipleVideos && (
              <div className="absolute inset-x-5 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                <button
                  type="button"
                  onClick={goPrevious}
                  className="pointer-events-auto grid place-items-center w-10 h-10 rounded-full bg-white/90 text-primary shadow hover:bg-white transition-colors"
                  aria-label="Previous TikTok video"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="pointer-events-auto grid place-items-center w-10 h-10 rounded-full bg-white/90 text-primary shadow hover:bg-white transition-colors"
                  aria-label="Next TikTok video"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </aside>
  );
}
