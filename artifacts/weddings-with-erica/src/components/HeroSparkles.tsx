const sparkles = [
  { top: "18%", left: "12%", delay: "0s",    dur: "3.2s", size: 10 },
  { top: "55%", left: "6%",  delay: "1.1s",  dur: "4s",   size: 7  },
  { top: "80%", left: "22%", delay: "0.6s",  dur: "3.6s", size: 8  },
  { top: "28%", left: "30%", delay: "1.8s",  dur: "2.8s", size: 6  },
  { top: "70%", left: "38%", delay: "0.3s",  dur: "4.2s", size: 9  },
  { top: "42%", left: "18%", delay: "2.3s",  dur: "3.4s", size: 6  },
];

function StarIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 0 L8.8 6.5 L15 8 L8.8 9.5 L8 16 L7.2 9.5 L1 8 L7.2 6.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HeroSparkles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {sparkles.map((s, i) => (
        <div
          key={i}
          className="absolute text-white/30"
          style={{
            top: s.top,
            left: s.left,
            animation: `sparkle-twinkle ${s.dur} ease-in-out ${s.delay} infinite, sparkle-float ${parseFloat(s.dur) * 1.4}s ease-in-out ${s.delay} infinite`,
          }}
        >
          <StarIcon size={s.size} />
        </div>
      ))}

      {/* A few slightly brighter ones in the image half (right side, desktop only) */}
      {[
        { top: "22%", right: "20%", delay: "0.9s", dur: "3.8s", size: 9 },
        { top: "60%", right: "12%", delay: "1.5s", dur: "4.5s", size: 7 },
        { top: "40%", right: "35%", delay: "2.1s", dur: "3.2s", size: 11 },
        { top: "78%", right: "28%", delay: "0.4s", dur: "4.0s", size: 6  },
      ].map((s, i) => (
        <div
          key={`r-${i}`}
          className="absolute text-white/20 hidden md:block"
          style={{
            top: s.top,
            right: s.right,
            animation: `sparkle-twinkle ${s.dur} ease-in-out ${s.delay} infinite, sparkle-float ${parseFloat(s.dur) * 1.3}s ease-in-out ${s.delay} infinite`,
          }}
        >
          <StarIcon size={s.size} />
        </div>
      ))}
    </div>
  );
}
