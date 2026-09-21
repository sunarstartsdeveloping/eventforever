"use client";

import { useState, useEffect, useCallback } from "react";

interface LightboxImage {
  full: string;
  alt: string;
  caption: string;
  tag: string;
}

interface LightboxProps {
  images: LightboxImage[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0
  );

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, goNext, goPrev]);

  if (!images.length) return null;

  const current = images[currentIndex];

  return (
    <div
      className="lightbox open"
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="lightbox-content">
        <button className="lightbox-btn lightbox-close" aria-label="Close image preview" onClick={onClose}>
          <svg className="icon" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <button className="lightbox-btn lightbox-prev" aria-label="Previous image" onClick={goPrev}>
          <svg className="icon" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="lightbox-img-wrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={current.full} alt={current.alt} className="lightbox-img" />
        </div>
        <button className="lightbox-btn lightbox-next" aria-label="Next image" onClick={goNext}>
          <svg className="icon" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
        <div className="lightbox-details">
          <div className="lightbox-caption">{current.caption}</div>
          <div className="lightbox-sub">{current.tag}</div>
        </div>
      </div>
    </div>
  );
}
