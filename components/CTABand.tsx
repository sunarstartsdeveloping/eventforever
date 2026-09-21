import ScrollReveal from "./ScrollReveal";

export default function CTABand() {
  return (
    <ScrollReveal>
      <section className="cta-band" aria-labelledby="cta-heading">
        <div className="container">
          <span className="accent-label">Begin the Conversation</span>
          <h2 id="cta-heading">Every unforgettable memory starts with a simple conversation</h2>
          <p>
            Whether you need complete wedding production or understated decor for an auspicious family ritual, we are here
            to assist.
          </p>
          <div className="cta-band-actions">
            <a href="#contact" className="btn btn-white">
              <span>Schedule a consultation</span>
              <svg className="icon icon-sm" viewBox="0 0 24 24" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="https://wa.me/918859953327"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              <span>Chat on WhatsApp</span>
              <svg className="icon icon-sm" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
