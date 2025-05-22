"use client";

import { useState, useEffect } from "react";

export default function VideoBackground({
  videoSrc,
  fallbackImageSrc,
  children,
  overlayClass = "bg-black opacity-45",
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {isClient ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
            {/* Fallback if video format not supported */}
            <img
              src={fallbackImageSrc || "/placeholder.svg"}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </video>
        ) : (
          // Server-side fallback
          <img
            src={fallbackImageSrc || "/placeholder.svg"}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Dark overlay to improve text readability */}
        <div className={`absolute inset-0 ${overlayClass}`}></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">{children}</div>
    </section>
  );
}
