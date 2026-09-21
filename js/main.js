/**
 * Narnaul Events - Master JavaScript
 * Clean vanilla JS handling navigation, gallery filter, accessible lightbox,
 * FAQ accordion, WhatsApp link generation, and subtle scroll reveals.
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------------
     1. Sticky Header Elevation on Scroll
     ------------------------------------------------------------------------ */
  const header = document.querySelector('.site-header');
  const handleHeaderScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  /* ------------------------------------------------------------------------
     2. Mobile Drawer Navigation
     ------------------------------------------------------------------------ */
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  const drawerClose = document.querySelector('.drawer-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer .btn');

  const openDrawer = () => {
    mobileDrawer.classList.add('open');
    mobileOverlay.classList.add('open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('open');
    mobileOverlay.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', openDrawer);
  }
  if (drawerClose) {
    drawerClose.addEventListener('click', closeDrawer);
  }
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeDrawer);
  }
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  /* ------------------------------------------------------------------------
     3. Active Nav Link on Scroll
     ------------------------------------------------------------------------ */
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');

  const highlightNavOnScroll = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        desktopLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  /* ------------------------------------------------------------------------
     4. Gallery: Ruixen 3D Image Stream Corridor & Lightbox Modal
     ------------------------------------------------------------------------ */
  const streamSection = document.getElementById('gallery');
  const streamStage = document.getElementById('stream-stage');
  const leftCards = Array.from(document.querySelectorAll('.stream-card-left'));
  const rightCards = Array.from(document.querySelectorAll('.stream-card-right'));
  const allStreamCards = [...leftCards, ...rightCards];
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  const filterBtns = document.querySelectorAll('.filter-btn');
  const viewStreamBtn = document.getElementById('view-stream-btn');
  const viewGridBtn = document.getElementById('view-grid-btn');

  let currentCategory = 'all';

  // View Switcher (3D Stream vs Classic Grid)
  if (viewStreamBtn && viewGridBtn && streamSection) {
    viewStreamBtn.addEventListener('click', () => {
      viewStreamBtn.classList.add('active');
      viewStreamBtn.setAttribute('aria-pressed', 'true');
      viewGridBtn.classList.remove('active');
      viewGridBtn.setAttribute('aria-pressed', 'false');
      streamSection.classList.remove('grid-mode-active');
    });

    viewGridBtn.addEventListener('click', () => {
      viewGridBtn.classList.add('active');
      viewGridBtn.setAttribute('aria-pressed', 'true');
      viewStreamBtn.classList.remove('active');
      viewStreamBtn.setAttribute('aria-pressed', 'false');
      streamSection.classList.add('grid-mode-active');
    });
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter') || 'all';

      // 1. Filter Grid items
      galleryItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (currentCategory === 'all' || cat === currentCategory) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });

      // 2. Filter 3D Stream Cards
      allStreamCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (currentCategory === 'all' || cat === currentCategory) {
          card.style.opacity = '1';
          card.style.filter = '';
        } else {
          card.style.opacity = '0.22';
          card.style.filter = 'grayscale(0.85) blur(1px)';
        }
      });

      // Update visible items pool for lightbox
      visibleItems = galleryItems.filter(item => !item.classList.contains('hidden'));
    });
  });

  // ------------------------------------------------------------------------
  // Professional 3D Corridor Spatial Parallax & Cursor Depth Engine
  // Natural, elegant perspective response to page scrolling and subtle cursor dynamics
  // ------------------------------------------------------------------------
  const streamCorridor = document.getElementById('stream-corridor');
  let cursorX = 0;
  let cursorY = 0;
  let targetOriginX = 50;
  let targetOriginY = 55;
  let currentOriginX = 50;
  let currentOriginY = 55;

  // 1. Natural Page Scroll Parallax
  function updateScrollParallax() {
    if (!streamSection || !streamStage || streamSection.classList.contains('grid-mode-active')) return;
    const rect = streamSection.getBoundingClientRect();
    const windowH = window.innerHeight;

    // Check if section is visible on screen
    if (rect.bottom >= 0 && rect.top <= windowH) {
      // Progress from 0 (section enters from bottom) to 1 (section exits to top)
      const scrollRatio = (windowH - rect.top) / (windowH + rect.height);
      const boundedRatio = Math.max(0, Math.min(1, scrollRatio));

      // Subtle, elegant vertical perspective origin shift (calm luxury parallax)
      targetOriginY = 49 + boundedRatio * 12;

      // Gentle spatial corridor pitch tilt that feels physical without distortion
      if (streamCorridor) {
        const pitch = (boundedRatio - 0.5) * 5; // max +/- 2.5deg
        const zShift = Math.sin(boundedRatio * Math.PI) * 2; // subtle forward breathing
        streamCorridor.style.transform = `rotateX(${pitch.toFixed(2)}deg) translateZ(${zShift.toFixed(1)}cqw)`;
      }
    }
  }

  window.addEventListener('scroll', updateScrollParallax, { passive: true });
  window.addEventListener('resize', updateScrollParallax, { passive: true });
  updateScrollParallax();

  // 2. Subtle Interactive Cursor Depth (Magnetic Holographic Feel)
  if (streamStage) {
    streamStage.addEventListener('mousemove', (e) => {
      const rect = streamStage.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const ny = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
      cursorX = nx * 8; // subtle +/- 4%
      cursorY = ny * 6; // subtle +/- 3%
    }, { passive: true });

    streamStage.addEventListener('mouseleave', () => {
      cursorX = 0;
      cursorY = 0;
    });
  }

  // Smooth render loop for gentle parallax settling
  function animateParallax() {
    if (streamStage && streamSection && !streamSection.classList.contains('grid-mode-active')) {
      currentOriginX += (50 + cursorX - currentOriginX) * 0.1;
      currentOriginY += (targetOriginY + cursorY - currentOriginY) * 0.1;
      streamStage.style.perspectiveOrigin = `${currentOriginX.toFixed(2)}% ${currentOriginY.toFixed(2)}%`;
    }
    requestAnimationFrame(animateParallax);
  }
  requestAnimationFrame(animateParallax);

  // Lightbox Modal Elements
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('.lightbox-img') : null;
  const lightboxCaption = lightbox ? lightbox.querySelector('.lightbox-caption') : null;
  const lightboxSub = lightbox ? lightbox.querySelector('.lightbox-sub') : null;
  const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;
  const lightboxPrev = lightbox ? lightbox.querySelector('.lightbox-prev') : null;
  const lightboxNext = lightbox ? lightbox.querySelector('.lightbox-next') : null;
  let visibleItems = [...galleryItems];
  let currentLightboxIndex = 0;
  let lastFocusedElement = null;

  const openUnifiedLightbox = (imgSrc, altText, captionText, tagText) => {
    lastFocusedElement = document.activeElement;
    if (lightboxImg) {
      lightboxImg.src = imgSrc;
      lightboxImg.alt = altText || 'Gallery Preview';
    }
    if (lightboxCaption) lightboxCaption.textContent = captionText || '';
    if (lightboxSub) lightboxSub.textContent = tagText || '';

    if (lightbox) {
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (lightboxClose) lightboxClose.focus();
    }
  };

  const updateLightboxContent = (index) => {
    if (!visibleItems.length) return;
    currentLightboxIndex = (index + visibleItems.length) % visibleItems.length;
    const currentItem = visibleItems[currentLightboxIndex];
    const imgEl = currentItem.querySelector('img');
    const captionEl = currentItem.querySelector('.gallery-caption');
    const tagEl = currentItem.querySelector('.gallery-tag');

    if (imgEl && lightboxImg) {
      lightboxImg.src = imgEl.getAttribute('data-full') || imgEl.src;
      lightboxImg.alt = imgEl.alt;
    }
    if (captionEl && lightboxCaption) {
      lightboxCaption.textContent = captionEl.textContent;
    }
    if (tagEl && lightboxSub) {
      lightboxSub.textContent = tagEl.textContent;
    }
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedElement) lastFocusedElement.focus();
  };

  // Bind Grid Item Clicks
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      currentLightboxIndex = visibleItems.indexOf(item);
      if (currentLightboxIndex === -1) currentLightboxIndex = 0;
      const imgEl = item.querySelector('img');
      const captionEl = item.querySelector('.gallery-caption');
      const tagEl = item.querySelector('.gallery-tag');
      openUnifiedLightbox(
        imgEl ? (imgEl.getAttribute('data-full') || imgEl.src) : '',
        imgEl ? imgEl.alt : '',
        captionEl ? captionEl.textContent : '',
        tagEl ? tagEl.textContent : ''
      );
    });
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });

  // Bind 3D Stream Card Clicks
  allStreamCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      const imgEl = card.querySelector('img');
      const captionEl = card.querySelector('.stream-card-caption');
      const tagEl = card.querySelector('.stream-card-tag');
      const fullSrc = card.getAttribute('data-full') || (imgEl ? imgEl.src : '');
      openUnifiedLightbox(
        fullSrc,
        imgEl ? imgEl.alt : '',
        captionEl ? captionEl.textContent : '',
        tagEl ? tagEl.textContent : ''
      );
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => updateLightboxContent(currentLightboxIndex - 1));
  }
  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => updateLightboxContent(currentLightboxIndex + 1));
  }

  // Close when clicking outside content area
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Keyboard accessibility for Lightbox (Esc, Left, Right)
  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      updateLightboxContent(currentLightboxIndex - 1);
    } else if (e.key === 'ArrowRight') {
      updateLightboxContent(currentLightboxIndex + 1);
    }
  });

  /* ------------------------------------------------------------------------
     5. Accessible FAQ Accordion
     ------------------------------------------------------------------------ */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Optional: Close other items for single-open behavior
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherTrigger = otherItem.querySelector('.faq-trigger');
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      } else {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* ------------------------------------------------------------------------
     6. Contact Form & WhatsApp Prefilled Message Generator
     ------------------------------------------------------------------------ */
  const enquiryForm = document.getElementById('enquiry-form');
  const formFeedback = document.getElementById('form-feedback');

  // Configured WhatsApp Number for Event Forever
  const WHATSAPP_PHONE_NUMBER = '918859953327'; 

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name')?.value.trim();
      const phone = document.getElementById('form-phone')?.value.trim();
      const eventType = document.getElementById('form-type')?.value;
      const eventDate = document.getElementById('form-date')?.value;
      const guestCount = document.getElementById('form-guests')?.value;
      const message = document.getElementById('form-message')?.value.trim();

      if (!name || !phone || !eventType) {
        if (formFeedback) {
          formFeedback.textContent = 'Please complete your name, phone number, and event type.';
          formFeedback.style.color = '#B04B47';
          formFeedback.style.display = 'block';
        }
        return;
      }

      // Build structured WhatsApp message
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

      if (formFeedback) {
        formFeedback.textContent = 'Connecting you directly to WhatsApp...';
        formFeedback.style.color = 'var(--accent)';
        formFeedback.style.display = 'block';
      }

      // Open WhatsApp chat in a new tab
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  /* ------------------------------------------------------------------------
     7. IntersectionObserver Subtle Fade-Up Reveal
     ------------------------------------------------------------------------ */
  const fadeElements = document.querySelectorAll('.fade-in-element');
  
  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    fadeElements.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  }
});


