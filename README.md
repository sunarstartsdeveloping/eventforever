# Event Forever — Production Website

A minimal, modern, calm, and premium website built for **Event Forever** (Weddings & Celebrations, planned beautifully).

---

## Brand & Contact Details

- **Brand Name**: Event Forever
- **Tagline**: Weddings and celebrations, planned beautifully
- **Contact Headline**: Let's Plan Your Forever Moment
- **Contact Subtitle**: Reach out and one of our event stylists will get back to you within 24 hours.
- **Studio Address**: Chandigarh City Centre, VIP Road, Baltana, Zirakpur, Punjab - 140603
- **Call Us**: `+91 88599 53327` / `+91 88007 68858`
- **Email Us**: `eventforever.co.in@gmail.com`
- **WhatsApp**: `+91 88599 53327` (`https://wa.me/918859953327`)
- **Instagram**: `@eventforever` (`https://instagram.com/eventforever`)
- **Regions Served**: Zirakpur, Chandigarh, Mohali, Panchkula (Tricity), Punjab, Haryana, Himachal Pradesh & Delhi NCR

---

## Key Highlights

- **Design Language**: Minimal, modern, calm, premium.
- **Strict Color Tokens**:
  - Background: `#FAFAF8`
  - Surface (Cards/Sections): `#FFFFFF`
  - Body Text: `#141414`
  - Muted Text: `#6B6B6B`
  - Border: `#E8E6E1`
  - Accent (Warm Champagne): `#B08D57`
  - Dark Sections (CTA Band / Footer): `#141414` with light text `#F5F5F3`
- **Typography**: Strictly **Poppins** (Google Fonts weights 300, 400, 500, 600) via fluid `clamp()` sizing.
- **Icons**: Clean inline SVG line icons (Lucide-style, 1.5px stroke). Zero emojis.
- **Zero Frameworks / Zero Build Step**: 100% standard HTML5, CSS3, and vanilla JavaScript. Ready to deploy immediately on Netlify, Vercel, GitHub Pages, or cPanel.

---

## Project Structure

```text
Eventforever/
├── index.html            # Main semantic HTML document with all 13 sections & SEO
├── css/
│   └── style.css         # Master stylesheet with CSS variables, 8px grid, responsive styles
├── js/
│   └── main.js           # Navigation drawer, lightbox modal, FAQ accordion, WhatsApp link builder
├── assets/
│   └── images/
│       └── logo.png      # Gold crest emblem / brand logo
├── robots.txt            # Search engine crawl directives
├── sitemap.xml           # XML sitemap for SEO indexation
└── README.md             # This comprehensive guide
```

---

## How to Customize

### 1. Changing the WhatsApp Number & Contact Details

1. **In `js/main.js` (Line ~230)**:
   Change the `WHATSAPP_PHONE_NUMBER` constant to your target number without `+` or spaces:
   ```javascript
   const WHATSAPP_PHONE_NUMBER = '918859953327';
   ```

2. **In `index.html`**:
   The contact information is configured across:
   - **Call Us**: `+91 88599 53327` / `+91 88007 68858`
   - **Email**: `eventforever.co.in@gmail.com`
   - **Studio Address**: `Chandigarh City Centre, VIP Road, Baltana, Zirakpur, Punjab - 140603`
   - **JSON-LD Schema**: Included in the `<head>` `<script type="application/ld+json">` tag.

---

### 2. Full Image Registry (How to Swap Your Own Photos)

To swap photos with your own portfolio work, place the files in `assets/images/` and update the `src` attribute in `index.html`.

| Section | Element | Current Asset / URL | Recommended Dimensions | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Brand** | Crest Emblem | `assets/images/logo.png` | 200 × 200 px (PNG/SVG) | Gold "EF" crest emblem |
| **Hero** | Main Visual | `https://images.unsplash.com/photo-1519741497674-611481863552` | 1200 × 1440 px | Outdoor banquet table with florals |
| **About** | Story Visual | `https://images.unsplash.com/photo-1511285560929-80b456fea0bc` | 1000 × 1125 px | Joyful wedding toast moment |
| **Gallery** | Item 1 (Weddings) | `https://images.unsplash.com/photo-1606800052052-a08af7148866` | 1200 × 900 px | Grand Mandap & Floral Canopy |
| **Gallery** | Item 2 (Decor) | `https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6` | 1200 × 900 px | Candlelit Banquet Setup |
| **Gallery** | Item 3 (Weddings) | `https://images.unsplash.com/photo-1583939003579-730e3918a45a` | 1200 × 900 px | Traditional Vows & Ritual |
| **Gallery** | Item 4 (Small Functions) | `https://images.unsplash.com/photo-1530103862676-de8c9debad1d` | 1200 × 900 px | Sagai & Roka Stage |
| **Gallery** | Item 5 (Decor) | `https://images.unsplash.com/photo-1519225421980-715cb0215aed` | 1200 × 900 px | Floral Entryway Passage |
| **Gallery** | Item 6 (Weddings) | `https://images.unsplash.com/photo-1532712938310-34cb3982ef74` | 1200 × 900 px | Evening Lawn Reception |
| **Gallery** | Item 7 (Decor) | `https://images.unsplash.com/photo-1545232979-8bf68ee9b1af` | 1200 × 900 px | Golden Centerpieces & Tableware |
| **Gallery** | Item 8 (Small Functions) | `https://images.unsplash.com/photo-1464366400600-7168b8af9bc3` | 1200 × 900 px | Milestone Anniversary Dinner |
| **Gallery** | Item 9 (Small Functions) | `https://images.unsplash.com/photo-1527529482837-4698179dc6ce` | 1200 × 900 px | Sangeet & Dance Night |

---

## How to Deploy

### Option A: Deploy on Netlify (Fastest & Free)
1. Go to [Netlify.com](https://www.netlify.com/) and log in.
2. Under "Sites", drag and drop the entire `Eventforever` folder directly into the browser window.
3. Your site will be live immediately with free SSL and custom domain options.

### Option B: Deploy on Vercel
1. Run `npx vercel` inside this folder.
2. Follow the prompt to publish immediately.

### Option C: Deploy on cPanel / Shared Hosting
1. Compress all files in this folder into a ZIP archive.
2. In cPanel File Manager, upload to `public_html/` and click **Extract**.
