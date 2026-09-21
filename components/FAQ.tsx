"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqData = [
  {
    question: "How far in advance should we book our event?",
    answer:
      "For peak wedding season (October to March), we recommend securing your dates 3 to 6 months in advance. For intimate sagai ceremonies, birthdays, and private dinners, a lead time of 3 to 6 weeks is usually sufficient.",
  },
  {
    question: "What is your typical budget range?",
    answer:
      "We work across diverse budget scales. During our initial consultation, we discuss your priorities and tailor decor, staging, and vendor recommendations to achieve the finest aesthetic outcome within your comfortable investment level.",
  },
  {
    question: "Do you manage events in nearby cities outside Zirakpur?",
    answer:
      "Yes, absolutely. We regularly manage events across Chandigarh, Mohali, Panchkula, Ludhiana, Ambala, Himachal Pradesh, and Delhi NCR. Our production fleet and stylist team travel seamlessly across the region.",
  },
  {
    question: "Can we customize the decor themes and bring our own vendors?",
    answer:
      "Yes. Every event design is bespoke. If you have preferred family caterers, photographers, or pandit ji, we gladly collaborate with them and coordinate their timeline so everything flows smoothly on the day.",
  },
  {
    question: "What are your payment terms and milestones?",
    answer:
      "We operate with transparent milestone schedules: an initial date-reservation retainer (typically 25%), an interim stage prior to vendor procurement, and the remainder upon final venue setup walkthrough.",
  },
  {
    question: "What happens if we need to reschedule our dates?",
    answer:
      "We understand that family plans can change. In the event of rescheduling, your initial deposit is credited towards a mutually available alternative date within 12 months with no cancellation penalty.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="section" id="faq" aria-labelledby="faq-heading">
      <div className="container faq-container">
        <ScrollReveal className="section-intro centered">
          <span className="accent-label">Questions Answered</span>
          <h2 id="faq-heading">Frequently asked questions</h2>
          <p>Everything you need to know about partnering with Event Forever for your upcoming celebration.</p>
        </ScrollReveal>

        <div className="faq-list">
          {faqData.map((item, idx) => (
            <ScrollReveal key={idx}>
              <div className={`faq-item${activeIndex === idx ? " active" : ""}`}>
                <button
                  className="faq-trigger"
                  aria-expanded={activeIndex === idx}
                  onClick={() => toggleItem(idx)}
                >
                  <span>{item.question}</span>
                  <svg className="icon faq-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className="faq-content">{item.answer}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
