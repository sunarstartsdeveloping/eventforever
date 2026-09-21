import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Wedding Planning",
    desc: "End-to-end wedding production including venue sourcing, timeline management, and guest hospitality.",
    icon: (
      <>
        <circle cx="8" cy="8" r="6" />
        <circle cx="16" cy="16" r="6" />
      </>
    ),
  },
  {
    title: "Engagement, Sagai & Roka",
    desc: "Warm and reverent arrangements for auspicious beginnings, ring ceremonies, and family milestone rituals.",
    icon: (
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    ),
  },
  {
    title: "Decor & Mandap Styling",
    desc: "Architectural mandaps, floral backdrops, bespoke entrance passages, and mood lighting installations.",
    icon: (
      <>
        <path d="M12 2a5 5 0 0 0-5 5v1a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z" />
        <path d="M19 11v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="20" x2="12" y2="22" />
      </>
    ),
  },
  {
    title: "Birthdays & Anniversaries",
    desc: "Intimate or grand milestone celebrations designed with themed decor, live culinary stations, and music.",
    icon: (
      <>
        <rect x="3" y="8" width="18" height="4" rx="1" />
        <path d="M12 8v13" />
        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
        <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
      </>
    ),
  },
  {
    title: "Private Functions & Sangeet",
    desc: "High-energy sangeet nights, Mehendi brunches, and quiet private dinners curated in your home or chosen lawn.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "Corporate Get-Togethers",
    desc: "Professional gala dinners, annual conferences, and executive meets organized with seamless hospitality.",
    icon: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-heading">
      <div className="container">
        <ScrollReveal className="section-intro centered">
          <span className="accent-label">What We Do</span>
          <h2 id="services-heading">Comprehensive event services</h2>
          <p>From initial venue selection to the farewell departure, we oversee every element with thoughtful care and quiet sophistication.</p>
        </ScrollReveal>

        <div className="services-grid">
          {services.map((service) => (
            <ScrollReveal key={service.title}>
              <article className="service-card">
                <div className="service-icon-box" aria-hidden="true">
                  <svg className="icon icon-lg" viewBox="0 0 24 24">
                    {service.icon}
                  </svg>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
