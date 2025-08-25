import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./component/site-header";
import SiteFooter from "./component/site-footer";

export const metadata: Metadata = {
  title: "West Vic Energy",
  description: "West Vic Energy - Your Trusted Partner for Renewable Energy Solutions in Victoria, Australia",
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
