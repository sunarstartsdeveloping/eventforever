import ScrollReveal from "./ScrollReveal";

const stats = [
  { number: "180+", label: "Events Planned" },
  { number: "160+", label: "Happy Families" },
  { number: "8+", label: "Years of Experience" },
  { number: "6+", label: "Cities Served" },
];

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Key Milestones and Statistics">
      <div className="container">
        <div className="trust-grid">
          {stats.map((stat) => (
            <ScrollReveal key={stat.label} className="trust-item">
              <div className="trust-number">{stat.number}</div>
              <div className="trust-label">{stat.label}</div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
