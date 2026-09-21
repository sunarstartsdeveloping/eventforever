import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section
      className="section"
      id="about"
      aria-labelledby="about-heading"
      style={{
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container">
        <div className="about-grid">
          {/* Left Image Column */}
          <ScrollReveal className="about-image-wrapper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80"
              alt="Joyful wedding celebration toast with soft ambient warm lighting"
              width={600}
              height={675}
              loading="lazy"
            />
          </ScrollReveal>

          {/* Right Pillars Column */}
          <ScrollReveal className="about-content">
            <span className="accent-label">Why Choose Us</span>
            <h2 id="about-heading">Crafting peace of mind for your family</h2>
            <p>
              We treat every celebration as our own family occasion. Our team combines local expertise across Chandigarh
              Tricity, Punjab, and neighboring regions with contemporary aesthetic discernment.
            </p>

            <div className="pillars-list">
              {/* Pillar 1 */}
              <div className="pillar-item">
                <div className="pillar-icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div className="pillar-content">
                  <h3>Personal Attention</h3>
                  <p>
                    You will always collaborate directly with a senior planner who listens to your family&apos;s preferences
                    and attends to every minute detail.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="pillar-item">
                <div className="pillar-icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 24 24">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div className="pillar-content">
                  <h3>Transparent Pricing</h3>
                  <p>
                    Clear, itemized proposals with zero hidden markups or eleventh-hour surprises. You remain fully in
                    control of your budget.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="pillar-item">
                <div className="pillar-icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="pillar-content">
                  <h3>On-Time Execution</h3>
                  <p>
                    Disciplined vendor scheduling and rigorous rehearsals ensure your stage, catering, and rituals commence
                    precisely on time.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
