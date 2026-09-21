export default function ContactSidebar() {
  return (
    <div className="contact-sidebar fade-in-element is-visible">
      <div className="sidebar-info-card">
        <span className="accent-label">Direct Contact</span>
        <h3>Studio &amp; Office</h3>

        <div className="sidebar-info-list">
          {/* Phone */}
          <div className="sidebar-info-item">
            <div className="sidebar-info-icon" aria-hidden="true">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="sidebar-info-text">
              <strong>Call Us</strong>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <a href="tel:+918859953327">+91 88599 53327</a>
                <a href="tel:+918800768858">+91 88007 68858</a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="sidebar-info-item">
            <div className="sidebar-info-icon" aria-hidden="true">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="sidebar-info-text">
              <strong>Email Us</strong>
              <a href="mailto:eventforever.co.in@gmail.com">eventforever.co.in@gmail.com</a>
            </div>
          </div>

          {/* Address */}
          <div className="sidebar-info-item">
            <div className="sidebar-info-icon" aria-hidden="true">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="sidebar-info-text">
              <strong>Studio Address</strong>
              <span>Chandigarh City Centre, VIP Road, Baltana, Zirakpur, Punjab - 140603</span>
            </div>
          </div>

          {/* Instagram */}
          <div className="sidebar-info-item">
            <div className="sidebar-info-icon" aria-hidden="true">
              <svg className="icon" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div className="sidebar-info-text">
              <strong>Instagram</strong>
              <a href="https://instagram.com/eventforever" target="_blank" rel="noopener noreferrer">
                @eventforever
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Google Map Card */}
      <div className="map-placeholder-card">
        <div className="map-header">
          <svg className="icon icon-sm" viewBox="0 0 24 24" aria-hidden="true">
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
            <line x1="8" y1="2" x2="8" y2="18" />
            <line x1="16" y1="6" x2="16" y2="22" />
          </svg>
          <span>Chandigarh City Centre, Zirakpur &bull; Punjab</span>
        </div>
        <iframe
          className="map-embed-frame"
          src="https://maps.google.com/maps?q=Chandigarh+City+Centre,+VIP+Road,+Zirakpur,+Punjab+140603&t=&z=14&ie=UTF8&iwloc=&output=embed"
          title="Google Map of Event Forever, Zirakpur"
          loading="lazy"
        />
      </div>
    </div>
  );
}
