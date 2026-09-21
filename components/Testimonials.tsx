import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Rajesh & Sunita Yadav",
    role: "Daughter's Wedding • Zirakpur",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    quote:
      "“We wanted a graceful mandap decor that honored our rituals without feeling loud or crowded. Event Forever handled everything on time. Our relatives from Delhi praised the setup all evening.”",
  },
  {
    name: "Vikram & Ananya Sharma",
    role: "Sagai & Ring Ceremony • Chandigarh",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    quote:
      "“Organizing my brother's sagai while working in Gurgaon was daunting. The team gave us clear line-item costs, responded on WhatsApp immediately, and delivered a flawless evening in Chandigarh.”",
  },
  {
    name: "Pooja & Sameer Mittal",
    role: "25th Anniversary Celebration • Mohali",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
    quote:
      "“For my parents' 25th anniversary, we wanted an intimate gathering that felt warm and memorable. Every detail from the floral passage to the catering flow was executed with calm perfection.”",
  },
  {
    name: "Harpreet & Simran Singh",
    role: "Anand Karaj & Reception • Panchkula",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    quote:
      "“From the traditional morning floral decor to the vibrant night banquet, every promise was honored. No last-minute surprises, zero stress for our elders, and pure celebration throughout.”",
  },
  {
    name: "Dr. Arvind & Meenakshi Joshi",
    role: "Destination Wedding • Kasauli Hills",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    quote:
      "“Handling logistics on a hillside venue is notoriously tricky. Event Forever coordinated 14 vendor teams effortlessly. Our guests are still raving about the evening ambiance.”",
  },
  {
    name: "Kavita Ahuja",
    role: "Haldi & Mehendi Festival • Zirakpur",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
    quote:
      "“They transformed our private lawn into a bright pastel paradise with fragrant marigolds and bespoke seating. Transparent billing, respectful staff, and genuinely caring planners.”",
  },
];

export default function Testimonials() {
  return (
    <section
      className="section testimonials-section"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <ScrollReveal className="section-intro centered">
          <span className="accent-label">Kind Words</span>
          <h2 id="testimonials-heading">Stories from families we have served</h2>
          <p>
            Heartfelt words from couples and families whose most treasured milestones we have had the honor to orchestrate.
          </p>
        </ScrollReveal>
      </div>

      {/* Marquee with Edge Feathering Masks */}
      <div className="testimonials-marquee-wrapper" role="region" aria-label="Customer Testimonials Marquee">
        <div className="testimonials-marquee-track">
          {/* Primary Group */}
          <div className="testimonials-marquee-group">
            {testimonials.map((t) => (
              <article key={t.name} className="testimonial-card-marquee">
                <div>
                  <div className="testimonial-header">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.avatar} alt={t.name} className="testimonial-avatar" loading="lazy" />
                    <div className="testimonial-info">
                      <span className="testimonial-name">{t.name}</span>
                      <span className="testimonial-role">{t.role}</span>
                    </div>
                  </div>
                  <div className="testimonial-stars" aria-label="5 out of 5 stars">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <p className="testimonial-body">{t.quote}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Duplicate Group for Infinite Loop */}
          <div className="testimonials-marquee-group" aria-hidden="true">
            {testimonials.map((t, idx) => (
              <article key={`dup-${t.name}-${idx}`} className="testimonial-card-marquee">
                <div>
                  <div className="testimonial-header">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.avatar} alt={t.name} className="testimonial-avatar" loading="lazy" />
                    <div className="testimonial-info">
                      <span className="testimonial-name">{t.name}</span>
                      <span className="testimonial-role">{t.role}</span>
                    </div>
                  </div>
                  <div className="testimonial-stars" aria-label="5 out of 5 stars">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <p className="testimonial-body">{t.quote}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
