import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-grid">
          {/* Left Content Column */}
          <ScrollReveal className="hero-content">
            {/* Small Accent Label */}
            <span className="accent-label">Zirakpur, Chandigarh Tricity &amp; Surrounding Regions</span>

            {/* Big Single H1 Headline */}
            <h1 id="hero-heading" className="hero-headline">
              Weddings and celebrations, planned beautifully.
            </h1>

            {/* Supporting Line */}
            <p className="hero-supporting">
              Bespoke wedding planning, mandap decor, and intimate gatherings crafted with calm precision. We handle every detail so your family celebrates without stress.
            </p>

            {/* Dual CTA Action Buttons */}
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                <span>Get a free quote</span>
                <svg className="icon icon-sm" viewBox="0 0 24 24" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#gallery" className="btn btn-secondary">
                <span>View our work</span>
              </a>
            </div>

            {/* Trust Highlights Badge Row */}
            <div className="hero-badges">
              <div className="hero-badge-item">
                <svg className="icon icon-sm" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>Complete On-Ground Support</span>
              </div>
              <div className="hero-badge-item">
                <svg className="icon icon-sm" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Punctual Execution</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Media Column */}
          <ScrollReveal className="hero-media">
            <div className="hero-image-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85"
                alt="Romantic couple celebrating wedding moment amidst candlelit floral decor"
                className="hero-img"
                width={600}
                height={700}
                fetchPriority="high"
              />
            </div>

            {/* Floating Calm Metric Card */}
            <div className="hero-card-floating">
              <div className="hero-floating-icon">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="hero-floating-text">
                <strong>100% Curated Decor</strong>
                <span>Tailored to regional traditions</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
