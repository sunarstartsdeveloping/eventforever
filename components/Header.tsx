"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} role="banner">
      <div className="container nav-container">
        <a href="#" className="brand-link" aria-label="Event Forever Homepage">
          <Image
            src="/images/logo.png"
            alt="Event Forever Crest Emblem"
            className="brand-emblem"
            width={31}
            height={44}
            priority
          />
          <div className="brand-text">
            <span className="brand-title">Event Forever</span>
            <span className="brand-subtitle">Planned Beautifully</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <ul className="nav-list">
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#process" className="nav-link">Process</a></li>
            <li><a href="#gallery" className="nav-link">Gallery</a></li>
            <li><a href="#packages" className="nav-link">Packages</a></li>
            <li><a href="#faq" className="nav-link">FAQ</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        {/* Header Action Button */}
        <div className="header-cta">
          <a href="#contact" className="btn btn-primary">
            <span>Plan your event</span>
            <svg className="icon icon-sm" viewBox="0 0 24 24" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <MobileToggleButton />
      </div>
    </header>
  );
}

function MobileToggleButton() {
  const handleClick = () => {
    const drawer = document.querySelector(".mobile-drawer");
    const overlay = document.querySelector(".mobile-overlay");
    if (drawer && overlay) {
      drawer.classList.add("open");
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <button
      className="mobile-toggle"
      aria-label="Open mobile menu"
      aria-expanded="false"
      aria-controls="mobile-nav-drawer"
      onClick={handleClick}
    >
      <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </button>
  );
}
