import ScrollReveal from "./ScrollReveal";
import ContactForm from "./ContactForm";
import ContactSidebar from "./ContactSidebar";

export default function Contact() {
  return (
    <section
      className="section"
      id="contact"
      aria-labelledby="contact-heading"
      style={{
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="container">
        <ScrollReveal className="section-intro">
          <span className="accent-label">Get in Touch</span>
          <h2 id="contact-heading">Let&rsquo;s Plan Your Forever Moment</h2>
          <p>Reach out and one of our event stylists will get back to you within 24 hours.</p>
        </ScrollReveal>

        <div className="contact-grid">
          <ContactForm />
          <ContactSidebar />
        </div>
      </div>
    </section>
  );
}
