"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import Lightbox from "./Lightbox";

interface GalleryImage {
  src: string;
  full: string;
  alt: string;
  caption: string;
  tag: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80",
    full: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1600&q=85",
    alt: "Grand traditional wedding stage with bespoke floral hangings",
    caption: "Grand Mandap & Canopy",
    tag: "Weddings",
    category: "weddings",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=900&q=80",
    full: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=85",
    alt: "Warm champagne candlelit table setting with natural greens",
    caption: "Candlelit Banquet Setup",
    tag: "Decor",
    category: "decor",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
    full: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85",
    alt: "Bride and groom during traditional wedding ritual with warm festive attire",
    caption: "Traditional Vows",
    tag: "Weddings",
    category: "weddings",
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80",
    full: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1600&q=85",
    alt: "Vibrant pastel decor for an intimate sagai ring ceremony",
    caption: "Sagai & Roka Stage",
    tag: "Small Functions",
    category: "functions",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
    full: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=85",
    alt: "White blossom floral archway along wedding pathway",
    caption: "Floral Entryway Passage",
    tag: "Decor",
    category: "decor",
  },
  {
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=900&q=80",
    full: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1600&q=85",
    alt: "Outdoor lawn wedding reception lit with fairy lights under night sky",
    caption: "Evening Lawn Reception",
    tag: "Weddings",
    category: "weddings",
  },
  {
    src: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=900&q=80",
    full: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1600&q=85",
    alt: "Refined golden accents and floral arrangement on banquet table",
    caption: "Golden Centerpieces & Tableware",
    tag: "Decor",
    category: "decor",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80",
    full: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=85",
    alt: "Festive family dinner table with celebration cake",
    caption: "Milestone Anniversary Dinner",
    tag: "Small Functions",
    category: "functions",
  },
  {
    src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80",
    full: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1600&q=85",
    alt: "Celebrants dancing and enjoying an energetic music and sangeet night",
    caption: "Sangeet & Dance Night",
    tag: "Small Functions",
    category: "functions",
  },
];

const filters = [
  { key: "all", label: "All" },
  { key: "weddings", label: "Weddings" },
  { key: "decor", label: "Decor" },
  { key: "functions", label: "Small Functions" },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"stream" | "grid">("stream");
  const sectionRef = useRef<HTMLElement | null>(null);

  const visibleImages = galleryImages.filter(
    (img) => activeFilter === "all" || img.category === activeFilter
  );

  const openLightbox = useCallback((globalIndex: number) => {
    setLightboxIndex(globalIndex);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  useEffect(() => {
    if (viewMode === "grid") return;

    const section = sectionRef.current;
    if (!section) return;

    const stage = section.querySelector<HTMLElement>(".stream-stage");
    const corridor = section.querySelector<HTMLElement>(".stream-corridor");
    if (!stage) return;

    let cursorX = 0;
    let cursorY = 0;
    let targetOriginY = 55;
    let currentOriginX = 50;
    let currentOriginY = 55;
    let animFrameId: number;

    const updateScrollParallax = () => {
      if (!section || section.classList.contains("grid-mode-active")) return;
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;

      if (rect.bottom >= 0 && rect.top <= windowH) {
        const scrollRatio = (windowH - rect.top) / (windowH + rect.height);
        const boundedRatio = Math.max(0, Math.min(1, scrollRatio));
        targetOriginY = 49 + boundedRatio * 12;

        if (corridor) {
          const pitch = (boundedRatio - 0.5) * 5;
          const zShift = Math.sin(boundedRatio * Math.PI) * 2;
          corridor.style.transform = `rotateX(${pitch.toFixed(2)}deg) translateZ(${zShift.toFixed(1)}cqw)`;
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      cursorX = nx * 8;
      cursorY = ny * 6;
    };

    const handleMouseLeave = () => {
      cursorX = 0;
      cursorY = 0;
    };

    window.addEventListener("scroll", updateScrollParallax, { passive: true });
    window.addEventListener("resize", updateScrollParallax, { passive: true });
    stage.addEventListener("mousemove", handleMouseMove, { passive: true });
    stage.addEventListener("mouseleave", handleMouseLeave);
    updateScrollParallax();

    const animateParallax = () => {
      if (stage && !section.classList.contains("grid-mode-active")) {
        currentOriginX += (50 + cursorX - currentOriginX) * 0.1;
        currentOriginY += (targetOriginY + cursorY - currentOriginY) * 0.1;
        stage.style.perspectiveOrigin = `${currentOriginX.toFixed(2)}% ${currentOriginY.toFixed(2)}%`;
      }
      animFrameId = requestAnimationFrame(animateParallax);
    };

    animFrameId = requestAnimationFrame(animateParallax);

    return () => {
      window.removeEventListener("scroll", updateScrollParallax);
      window.removeEventListener("resize", updateScrollParallax);
      stage.removeEventListener("mousemove", handleMouseMove);
      stage.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animFrameId);
    };
  }, [viewMode]);

  return (
    <>
      <section
        ref={sectionRef}
        className={`stream-scroll-section${viewMode === "grid" ? " grid-mode-active" : ""}`}
        id="gallery"
        aria-labelledby="gallery-heading"
      >
        <div className="stream-sticky-viewport">
          {/* Top Header & Toolbar */}
          <div className="stream-top-bar">
            <div className="gallery-toolbar" style={{ marginBottom: 0 }}>
              <div className="gallery-filters" role="tablist" aria-label="Gallery Categories">
                {filters.map((f) => (
                  <button
                    key={f.key}
                    className={`filter-btn${activeFilter === f.key ? " active" : ""}`}
                    data-filter={f.key}
                    role="tab"
                    aria-selected={activeFilter === f.key}
                    onClick={() => setActiveFilter(f.key)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div className="view-mode-toggle" role="group" aria-label="Gallery View Mode">
                <button
                  className={`view-btn${viewMode === "stream" ? " active" : ""}`}
                  onClick={() => setViewMode("stream")}
                  aria-pressed={viewMode === "stream"}
                  title="3D Stream Corridor view"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  <span>3D Stream</span>
                </button>
                <button
                  className={`view-btn${viewMode === "grid" ? " active" : ""}`}
                  onClick={() => setViewMode("grid")}
                  aria-pressed={viewMode === "grid"}
                  title="Classic Grid view"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                  <span>Grid View</span>
                </button>
              </div>
            </div>

            <span className="stream-section-badge">Curated Spatial Portfolio</span>
            <h2 id="gallery-heading" className="stream-hero-title">
              Moments captured in<br />
              <span>timeless grace.</span>
            </h2>
          </div>

          {/* 3D Perspective Stage (Exact Ruixen ImageStreamHero Corridor) */}
          <div
            className="stream-stage"
            id="stream-stage"
            role="region"
            aria-label="3D Image Stream Corridor"
          >
            <div className="stream-corridor">
              {/* Left Rail (9 continuous streaming cards) */}
              {galleryImages.slice(0, 9).map((img, i) => {
                const isDimmed = activeFilter !== "all" && img.category !== activeFilter;
                return (
                  <div
                    key={`left-${i}`}
                    className="stream-card stream-card-left"
                    style={{
                      animationDelay: `${-i * 2}s`,
                      opacity: isDimmed ? 0.22 : 1,
                      filter: isDimmed ? "grayscale(0.85) blur(1px)" : undefined,
                    }}
                    onClick={() => {
                      const idx = galleryImages.findIndex((g) => g.src === img.src);
                      openLightbox(idx >= 0 ? idx : 0);
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${img.caption} image`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt} loading="lazy" />
                    <div className="stream-card-overlay">
                      <span className="stream-card-tag">{img.tag}</span>
                      <span className="stream-card-caption">{img.caption}</span>
                    </div>
                  </div>
                );
              })}

              {/* Right Rail (9 continuous streaming cards) */}
              {[...galleryImages.slice(1, 9), galleryImages[0]].map((img, i) => {
                const isDimmed = activeFilter !== "all" && img.category !== activeFilter;
                return (
                  <div
                    key={`right-${i}`}
                    className="stream-card stream-card-right"
                    style={{
                      animationDelay: `${-i * 2}s`,
                      opacity: isDimmed ? 0.22 : 1,
                      filter: isDimmed ? "grayscale(0.85) blur(1px)" : undefined,
                    }}
                    onClick={() => {
                      const idx = galleryImages.findIndex((g) => g.src === img.src);
                      openLightbox(idx >= 0 ? idx : 0);
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${img.caption} image`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt} loading="lazy" />
                    <div className="stream-card-overlay">
                      <span className="stream-card-tag">{img.tag}</span>
                      <span className="stream-card-caption">{img.caption}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Subtitle */}
          <div className="stream-bottom-bar">
            <p className="stream-hero-subtitle">
              A spatial showcase that leads with the images instead of describing them.<br />
              Hover or click any photograph to view full details in our curated lightbox.
            </p>
          </div>

          {/* Classic Grid View Container */}
          <div className="stream-grid-container" id="gallery-grid-view">
            <div className="gallery-grid">
              {galleryImages.map((image, idx) => {
                const isHidden = activeFilter !== "all" && image.category !== activeFilter;
                return (
                  <ScrollReveal
                    key={idx}
                    className={`gallery-item${isHidden ? " hidden" : ""}`}
                  >
                    <div
                      data-category={image.category}
                      tabIndex={0}
                      role="button"
                      aria-label={`View ${image.caption} image`}
                      onClick={() => !isHidden && openLightbox(idx)}
                      onKeyDown={(e) => {
                        if ((e.key === "Enter" || e.key === " ") && !isHidden) {
                          e.preventDefault();
                          openLightbox(idx);
                        }
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image.src}
                        data-full={image.full}
                        alt={image.alt}
                        width={450}
                        height={360}
                        loading="lazy"
                      />
                      <div className="gallery-overlay">
                        <div className="gallery-overlay-icon">
                          <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          </svg>
                        </div>
                        <span className="gallery-caption">{image.caption}</span>
                        <span className="gallery-tag">{image.tag}</span>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={visibleImages}
          initialIndex={
            // Map the global index to the filtered list index
            visibleImages.findIndex((img) => img === galleryImages[lightboxIndex])
          }
          onClose={closeLightbox}
        />
      )}
    </>
  );
}
