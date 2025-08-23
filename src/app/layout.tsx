import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./component/site-header";
import SiteFooter from "./component/site-footer";

export const metadata: Metadata = {
  title: "MyApp",
  description: "Next.js + Tailwind v4 starter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteHeader />
        <main id="content" className="min-h-dvh">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
