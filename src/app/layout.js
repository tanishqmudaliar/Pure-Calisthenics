import "./globals.css";

export const metadata = {
  title: "Pure Calisthenics",
  description: "We Do Calisthenics Personal Training. (Online & Offline)",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
