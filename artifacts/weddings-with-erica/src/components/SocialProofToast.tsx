import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";

const notifications = [
  {
    name: "Sarah & James",
    location: "Cork",
    action: "just enquired about Day Coordination",
    initials: "SJ",
  },
  {
    name: "Emma & John",
    location: "Dublin",
    action: "left a 5★ review",
    initials: "EJ",
  },
  {
    name: "Siobhán & Ciarán",
    location: "Galway",
    action: "booked Full Planning",
    initials: "SC",
  },
  {
    name: "Rachel & Conor",
    location: "Killarney",
    action: "just enquired about Partial Planning",
    initials: "RC",
  },
];

const SHOW_MS = 5000;
const HIDE_MS = 9000;

export function SocialProofToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // First appearance after 4 seconds
    const initial = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(initial);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const hideTimer = setTimeout(() => {
      setVisible(false);
      const nextTimer = setTimeout(() => {
        setIndex((i) => (i + 1) % notifications.length);
        setVisible(true);
      }, HIDE_MS);
      return () => clearTimeout(nextTimer);
    }, SHOW_MS);
    return () => clearTimeout(hideTimer);
  }, [visible, index]);

  const n = notifications[index];

  return (
    <div className="fixed bottom-6 left-5 z-[60] pointer-events-none">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-[hsl(40,33%,97%)] border border-[hsl(40,20%,88%)] shadow-lg px-4 py-3.5 flex items-center gap-3.5 max-w-[260px] pointer-events-auto"
          >
            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
              <span className="text-[11px] font-sans font-medium text-primary tracking-wide">
                {n.initials}
              </span>
            </div>

            {/* Text */}
            <div className="min-w-0">
              <p className="text-[12px] font-sans text-foreground/80 leading-tight truncate">
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
