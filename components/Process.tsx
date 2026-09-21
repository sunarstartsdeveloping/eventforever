import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We meet over tea or a call to understand your dates, guest count, aesthetic taste, and family expectations.",
  },
  {
    num: "02",
    title: "Planning",
    desc: "We present moodboards, curated vendor selections, layout floorplans, and clear timeline blueprints for review.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "Our ground team directs florals, staging, sound, lighting, and hospitality on-site prior to guest arrival.",
  },
  {
    num: "04",
    title: "Celebration",
    desc: "You and your loved ones immerse in every joyous ritual, confident that behind the scenes, everything is covered.",
  },
];

export default function Process() {
  return (
    <section className="section" id="process" aria-labelledby="process-heading">
      <div className="container">
        <ScrollReveal className="section-intro centered">
          <span className="accent-label">How We Work</span>
          <h2 id="process-heading">Our effortless four-step process</h2>
          <p>A structured, calm journey that turns complex logistics into a memorable celebration.</p>
        </ScrollReveal>

        <div className="process-steps">
          {steps.map((step) => (
            <ScrollReveal key={step.num}>
              <div className="step-card">
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
