import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Vision */}
          <div className="footer-brand">
            <a href="#" className="footer-brand-link" aria-label="Event Forever Homepage">
              <Image
                src="/images/logo.png"
                alt="Event Forever Crest Emblem"
                className="brand-emblem"
                width={31}
                height={44}
              />
              <div className="brand-text">
                <span className="brand-title footer-brand-title">Event Forever</span>
                <span className="brand-subtitle footer-brand-subtitle">Planned Beautifully</span>
              </div>
            </a>
            <p className="footer-brand-desc">
              Weddings and celebrations, planned beautifully. Delivering refined aesthetics, serene vendor orchestration,
              and cherished forever milestones across Chandigarh Tricity, Punjab, and neighboring regions.
            </p>
            <div className="footer-socials">
              <a
                href="https://instagram.com/eventforever"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Event Forever on Instagram"
              >
                <svg className="icon icon-sm" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://wa.me/918859953327"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Event Forever on WhatsApp"
              >
                <svg className="icon icon-sm" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
              <a
                href="mailto:eventforever.co.in@gmail.com"
                className="footer-social-link"
                aria-label="Send an email to Event Forever"
              >
                <svg className="icon icon-sm" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="footer-col">
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#process" className="footer-link">Our Process</a></li>
              <li><a href="#gallery" className="footer-link">Photo Gallery</a></li>
              <li><a href="#packages" className="footer-link">Curated Packages</a></li>
              <li><a href="#faq" className="footer-link">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Locations & Direct Contacts */}
          <div className="footer-col">
            <div className="footer-col-title">Regions Served</div>
            <ul className="footer-links">
              <li><span className="footer-link">Zirakpur &bull; Chandigarh</span></li>
              <li><span className="footer-link">Mohali &bull; Panchkula</span></li>
              <li><span className="footer-link">Punjab &bull; Haryana</span></li>
              <li><span className="footer-link">Himachal &bull; Delhi NCR</span></li>
              <li style={{ marginTop: "12px" }}><a href="tel:+918859953327" className="footer-link">+91 88599 53327</a></li>
              <li><a href="tel:+918800768858" className="footer-link">+91 88007 68858</a></li>
              <li><a href="mailto:eventforever.co.in@gmail.com" className="footer-link">eventforever.co.in@gmail.com</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="footer-bottom">
          <div>&copy; 2026 Event Forever. All rights reserved. Planned beautifully.</div>
          <div>Minimal &bull; Modern &bull; Calm &bull; Premium</div>
        </div>
      </div>
    </footer>
  );
}
