"use client";

import { useState } from "react";

interface VideoDemoProps {
  videoUrl: string;
  title: string;
  orientation?: "portrait" | "landscape";
}

export default function VideoDemo({ videoUrl, title, orientation = "landscape" }: VideoDemoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerClass = orientation === "portrait" ? "video-portrait" : "video-landscape";

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-3 px-6 py-3 border border-[var(--color-ink-light)]/30 text-sm uppercase tracking-widest text-[var(--color-ink)] hover:text-[var(--color-muted-orange)] hover:border-[var(--color-muted-orange)] transition-colors"
        aria-expanded={isOpen}
        aria-controls="video-demo"
      >
        {isOpen ? "Hide video demo" : "See video demo"}
        <span className="text-base">→</span>
      </button>

      {isOpen && (
        <div
          id="video-demo"
          className={`relative ${containerClass} bg-[#1A1A1A] border border-[var(--color-ink-light)]/20 shadow-layered`}
        >
          <video
            muted
            playsInline
            controls
            preload="metadata"
            className="w-full h-full object-contain"
          >
            <source src={videoUrl} type="video/mp4" />
            {`Your browser does not support the video for ${title}.`}
          </video>
        </div>
      )}
    </div>
  );
}
