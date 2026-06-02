import { useState } from "react";
import { cn } from "@/lib/utils";

interface FadeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export function FadeImage({ src, alt, className, onLoad, ...props }: FadeImageProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
      className={cn(className, "transition-opacity duration-700 ease-out", loaded ? "opacity-100" : "opacity-0")}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      {...props}
    />
  );
}
