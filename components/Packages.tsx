import ScrollReveal from "./ScrollReveal";

const CheckIcon = () => (
  <svg className="icon icon-sm" viewBox="0 0 24 24" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const packages = [
  {
    name: "Essential",
    desc: "Ideal for intimate ceremonies, sagais, roka events, and milestone birthdays up to 150 guests.",
    price: "Custom quote",
    featured: false,
    features: [
      "Initial venue styling & stage backdrop design",
      "Curated entry archway & welcoming signage",
      "Dedicated on-site coordinator on event day",
      "Sound & ambient lighting setup oversight",
      "Vendor choreography & schedule management",
    ],
    cta: "Inquire for Essential",
    btnClass: "btn btn-secondary",
  },
  {
    name: "Signature",
    desc: "Complete wedding planning and mandap styling tailored for classic regional Indian weddings.",
    price: "Custom quote",
    featured: true,
    badge: "Most Popular",
    features: [
      "Full concept moodboard & spatial layout design",
      "Architectural mandap styling with fresh floral artistry",
      "Baraat coordination, entrance gate & pathways",
      "Complete vendor sourcing (photography, sound, DJ)",
      "Full-day coordination team with senior lead planner",
    ],
    cta: "Inquire for Signature",
    btnClass: "btn btn-primary",
  },
  {
    name: "Bespoke",
    desc: "Multi-day celebrations, destination weddings, and grand multi-function estates across Haryana & Rajasthan.",
    price: "Custom quote",
    featured: false,
    features: [
      "Multi-day management: Mehendi, Haldi, Sangeet & Reception",
      "Custom structural stage builds & bespoke floral installations",
      "Outstation guest logistics, hotel blocks & transport",
      "Artist & entertainment curation, bespoke hospitality",
      "Dedicated shadow planner for bride & groom families",
    ],
    cta: "Inquire for Bespoke",
    btnClass: "btn btn-secondary",
  },
];

export default function Packages() {
  return (
    <section className="section" id="packages" aria-labelledby="packages-heading">
      <div className="container">
        <ScrollReveal className="section-intro centered">
          <span className="accent-label">Investment</span>
          <h2 id="packages-heading">Thoughtfully tiered packages</h2>
          <p>Every event is tailored to your scope. Choose a starting framework and we will personalize every line item.</p>
        </ScrollReveal>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <ScrollReveal key={pkg.name}>
              <div className={`package-card${pkg.featured ? " featured" : ""}`}>
                {pkg.badge && <div className="package-badge">{pkg.badge}</div>}
                <div className="package-header">
                  <h3>{pkg.name}</h3>
                  <p className="package-desc">{pkg.desc}</p>
                  <span className="package-price-tag">{pkg.price}</span>
                </div>
                <ul className="package-features">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="package-feature">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={pkg.btnClass} style={{ width: "100%" }}>
                  {pkg.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
