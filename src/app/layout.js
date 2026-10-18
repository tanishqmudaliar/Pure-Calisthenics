import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://purecalisthenics.com"),
  title: {
    default: "Pure Calisthenics | Personal Training in Mumbai & Online",
    template: "%s | Pure Calisthenics",
  },
  description:
    "Premier calisthenics personal training in Mumbai and online. Build real strength, mobility, and body control with structured coaching.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pure Calisthenics | Personal Training in Mumbai & Online",
    description:
      "Premier calisthenics personal training in Mumbai and online. Build real strength, mobility, and body control with structured coaching.",
    url: "https://purecalisthenics.com",
    siteName: "Pure Calisthenics",
    images: [
      {
        url: "/images/thumbnail.webp",
        width: 1200,
        height: 630,
        alt: "Pure Calisthenics Personal Training",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Calisthenics | Personal Training in Mumbai & Online",
    description:
      "Premier calisthenics personal training in Mumbai and online. Build real strength, mobility, and body control with structured coaching.",
    images: ["/images/thumbnail.webp"],
  },
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/logo/favicon.png",
        type: "image/png",
        sizes: "32x32",
      },
      { rel: "icon", url: "/logo/icon-192.png", sizes: "192x192" },
      { rel: "icon", url: "/logo/icon-512.png", sizes: "512x512" },
    ],
    apple: "/logo/apple-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Pure Calisthenics",
  image: "https://purecalisthenics.com/logo/pure%20calisthenics%20black.png",
  telephone: "+919773968119",
  url: "https://purecalisthenics.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.instagram.com/pure__calisthenics",
    "https://www.youtube.com/channel/UCTa4HXD-6C2j4ROP1Vq0B3g",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
