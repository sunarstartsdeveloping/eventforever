"use client";

import { useState, FormEvent } from "react";

const WHATSAPP_PHONE_NUMBER = "918859953327";

export default function ContactForm() {
  const [feedback, setFeedback] = useState<{ text: string; isError: boolean } | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("form-name") as HTMLInputElement)?.value.trim();
    const phone = (form.elements.namedItem("form-phone") as HTMLInputElement)?.value.trim();
    const eventType = (form.elements.namedItem("form-type") as HTMLSelectElement)?.value;
    const eventDate = (form.elements.namedItem("form-date") as HTMLInputElement)?.value;
    const guestCount = (form.elements.namedItem("form-guests") as HTMLSelectElement)?.value;
    const message = (form.elements.namedItem("form-message") as HTMLTextAreaElement)?.value.trim();

    if (!name || !phone || !eventType) {
      setFeedback({
        text: "Please complete your name, phone number, and event type.",
        isError: true,
      });
      return;
    }

    let waText = `Hello Event Forever! I would like to enquire about planning an event.\n\n`;
    waText += `*Name:* ${name}\n`;
    waText += `*Phone:* ${phone}\n`;
    waText += `*Event Type:* ${eventType}\n`;
    if (eventDate) waText += `*Preferred Date:* ${eventDate}\n`;
    if (guestCount) waText += `*Estimated Guests:* ${guestCount}\n`;
    if (message) waText += `*Additional Notes:* ${message}\n`;
    waText += `\nLooking forward to connecting with your event stylists!`;

    const encodedText = encodeURIComponent(waText);
    const waUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedText}`;

    setFeedback({
      text: "Connecting you directly to WhatsApp...",
      isError: false,
    });

    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="contact-card fade-in-element is-visible">
      <form id="enquiry-form" noValidate onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="form-name">Your Full Name *</label>
            <input type="text" id="form-name" name="form-name" className="form-input" placeholder="e.g. Vikram Sharma" required />
          </div>
          <div className="form-group">
            <label htmlFor="form-phone">Phone / WhatsApp *</label>
            <input type="tel" id="form-phone" name="form-phone" className="form-input" placeholder="e.g. +91 88599 53327" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="form-type">Event Type *</label>
            <select id="form-type" name="form-type" className="form-input" required defaultValue="">
              <option value="" disabled>Select event type</option>
              <option value="Wedding Planning & Mandap">Wedding Planning &amp; Mandap</option>
              <option value="Engagement / Sagai / Roka">Engagement / Sagai / Roka</option>
              <option value="Decor & Mandap Styling">Decor &amp; Mandap Styling</option>
              <option value="Birthday / Milestone Anniversary">Birthday / Milestone Anniversary</option>
              <option value="Private Function / Sangeet">Private Function / Sangeet</option>
              <option value="Corporate Get-Together">Corporate Get-Together</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="form-date">Estimated Date</label>
            <input type="date" id="form-date" name="form-date" className="form-input" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="form-guests">Approximate Guest Count</label>
          <select id="form-guests" name="form-guests" className="form-input" defaultValue="300 - 600 Guests">
            <option value="Under 100 Guests">Under 100 Guests (Intimate)</option>
            <option value="100 - 300 Guests">100 - 300 Guests (Mid-size)</option>
            <option value="300 - 600 Guests">300 - 600 Guests (Standard Wedding)</option>
            <option value="600+ Guests">600+ Guests (Grand Celebration)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="form-message">Notes or Venue Details</label>
          <textarea
            id="form-message"
            name="form-message"
            className="form-input"
            rows={3}
            placeholder="Tell us about your preferred venue, theme ideas, or specific rituals..."
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
          <span>Send WhatsApp Enquiry</span>
          <svg className="icon icon-sm" viewBox="0 0 24 24" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

        {feedback && (
          <div
            className="form-help"
            style={{
              display: "block",
              color: feedback.isError ? "#B04B47" : "var(--accent)",
            }}
          >
            {feedback.text}
          </div>
        )}

        <p className="form-help">
          <svg className="icon icon-sm" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>Submitting opens a pre-composed WhatsApp message directly to our planning team.</span>
        </p>
      </form>
    </div>
  );
}
