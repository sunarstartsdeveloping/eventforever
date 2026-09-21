import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Event Forever | Weddings & Celebrations, Planned Beautifully",
  description:
    "Premier event planning, wedding coordination, mandap styling, and milestone celebrations in Zirakpur, Chandigarh Tricity, Punjab, Haryana, and beyond. Seamless, elegant, and stress-free.",
  keywords: [
    "Event Forever",
    "wedding planner in Chandigarh",
    "event management Zirakpur",
    "wedding decor Mohali",
    "mandap styling Panchkula",
    "sagai decoration",
    "luxury celebrations Punjab",
  ],
  authors: [{ name: "Event Forever" }],
  metadataBase: new URL("https://eventforever.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://eventforever.in/",
    title: "Event Forever | Weddings & Celebrations, Planned Beautifully",
    description:
      "Bespoke wedding planning, decor styling, and milestone celebrations in Zirakpur, Chandigarh Tricity, and neighboring regions.",
    images: [{ url: "/images/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Forever | Weddings & Celebrations",
    description:
      "Premier event management and wedding decor styling in Zirakpur, Chandigarh Tricity, and Punjab.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventVenue",
              additionalType: "https://schema.org/ProfessionalService",
              name: "Event Forever",
              description:
                "Weddings and celebrations, planned beautifully in Zirakpur, Chandigarh, and surrounding regions.",
              url: "https://eventforever.in",
              telephone: "+91-88599-53327",
              email: "eventforever.co.in@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Chandigarh City Centre, VIP Road, Baltana",
                addressLocality: "Zirakpur",
                addressRegion: "Punjab",
                postalCode: "140603",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "30.6425",
                longitude: "76.8173",
              },
              areaServed: [
                "Zirakpur",
                "Chandigarh",
                "Mohali",
                "Panchkula",
                "Punjab",
                "Haryana",
                "Himachal Pradesh",
                "Delhi NCR",
              ],
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
