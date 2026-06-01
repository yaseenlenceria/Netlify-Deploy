import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, X } from "lucide-react";

const DISMISSED_KEY = "wwe_toast_dismissed";

const notifications = [
  {
    name: "Aoife & Ciarán",
    location: "Galway",
    action: "just enquired about Full Planning",
    initials: "AC",
  },
  {
    name: "Siobhán & Seán",
    location: "Cork",
    action: "left a 5★ review",
    initials: "SS",
  },
  {
    name: "Niamh & Pádraig",
    location: "Killarney",
    action: "just booked Day Coordination",
    initials: "NP",
  },
  {
    name: "Caoimhe & Oisín",
    location: "Westmeath",
    action: "enquired about Partial Planning",
    initials: "CO",
  },
  {
    name: "Róisín & Darragh",
    location: "Limerick",
    action: "just got in touch",
    initials: "RD",
  },
  {
    name: "Fionnuala & Tadhg",
    location: "Sligo",
    action: "booked a Planning Power Hour",
    initials: "FT",
  },
  {
    name: "Éabha & Cormac",
    location: "Dublin",
    action: "left a 5★ review",
    initials: "ÉC",
  },
];

const FIRST_DELAY_MS = 8000;
const SHOW_MS = 6000;
const PAUSE_MS = 16000;

export function SocialProofToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(() => {
    try {
      return localStorage.getItem(DISMISSED_KEY) === "true";
    } catch {
      return false;
    }
  });

  const handleClose = useCallback(() => {
    setVisible(false);
    setDismissed(true);
    try {
      localStorage.setItem(DISMISSED_KEY, "true");
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (dismissed) return;

    let hideTimer: ReturnType<typeof setTimeout>;
    let nextTimer: ReturnType<typeof setTimeout>;

    const showNext = (idx: number) => {
      setIndex(idx);
      setVisible(true);

      hideTimer = setTimeout(() => {
        setVisible(false);
        nextTimer = setTimeout(() => {
          showNext((idx + 1) % notifications.length);
        }, PAUSE_MS);
      }, SHOW_MS);
    };

    const firstTimer = setTimeout(() => {
      showNext(0);
    }, FIRST_DELAY_MS);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [dismissed]);

  if (dismissed) return null;

  const n = notifications[index];

  return (
    <div className="fixed bottom-6 right-5 z-[60] pointer-events-none">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 18, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-[hsl(40,33%,97%)] border border-[hsl(40,20%,88%)] shadow-lg px-4 py-3.5 flex items-center gap-3.5 max-w-[270px] pointer-events-auto relative"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              aria-label="Dismiss notification"
              className="absolute top-2 right-2 text-foreground/30 hover:text-foreground/60 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>

            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
              <span className="text-[11px] font-sans font-medium text-primary tracking-wide">
                {n.initials}
              </span>
            </div>

            {/* Text */}
            <div className="min-w-0 pr-3">
              <p className="text-[12px] font-sans text-foreground/80 leading-tight">
                <span className="font-medium">{n.name}</span>
                {" "}
                <span className="text-foreground/50">{n.action}</span>
              </p>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-primary/50 text-primary/50" />
                ))}
                <span className="text-[10px] text-foreground/35 font-sans ml-1">{n.location}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
