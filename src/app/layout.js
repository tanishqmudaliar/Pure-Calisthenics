import "./globals.css";

export const metadata = {
  title: "Pure Calisthenics",
  description: "We Do Calisthenics Personal Training. (Online & Offline)",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  );
}
