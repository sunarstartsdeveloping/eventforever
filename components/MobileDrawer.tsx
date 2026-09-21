"use client";

import { useCallback } from "react";
import Image from "next/image";

export default function MobileDrawer() {
  const closeDrawer = useCallback(() => {
    const drawer = document.querySelector(".mobile-drawer");
    const overlay = document.querySelector(".mobile-overlay");
    if (drawer && overlay) {
      drawer.classList.remove("open");
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }
  }, []);

  return (
    <>
      <div className="mobile-overlay" aria-hidden="true" onClick={closeDrawer} />
      <aside id="mobile-nav-drawer" className="mobile-drawer" aria-label="Mobile Navigation">
        <div className="drawer-header">
          <a href="#" className="brand-link" aria-label="Event Forever Homepage">
            <Image
              src="/images/logo.png"
              alt="Event Forever Crest Emblem"
              className="brand-emblem"
              width={28}
              height={40}
            />
            <div className="brand-text">
              <span className="brand-title">Event Forever</span>
              <span className="brand-subtitle">Planned Beautifully</span>
            </div>
          </a>
          <button className="drawer-close" aria-label="Close mobile menu" onClick={closeDrawer}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <ul className="mobile-nav-list">
          <li><a href="#services" className="mobile-nav-link" onClick={closeDrawer}>Services</a></li>
          <li><a href="#about" className="mobile-nav-link" onClick={closeDrawer}>About</a></li>
          <li><a href="#process" className="mobile-nav-link" onClick={closeDrawer}>Process</a></li>
          <li><a href="#gallery" className="mobile-nav-link" onClick={closeDrawer}>Gallery</a></li>
          <li><a href="#packages" className="mobile-nav-link" onClick={closeDrawer}>Packages</a></li>
          <li><a href="#faq" className="mobile-nav-link" onClick={closeDrawer}>FAQ</a></li>
          <li><a href="#contact" className="mobile-nav-link" onClick={closeDrawer}>Contact</a></li>
        </ul>
        <a href="#contact" className="btn btn-primary" style={{ width: "100%" }} onClick={closeDrawer}>
          <span>Plan your event</span>
          <svg className="icon icon-sm" viewBox="0 0 24 24" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </aside>
    </>
  );
}
