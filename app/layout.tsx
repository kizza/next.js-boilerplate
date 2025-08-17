import Footer from "@/components/Footer";
import Header from "@/components/Header";
import classnames from "classnames";
import type { Metadata, Viewport } from "next";
import "./styles/global.css";
import "./styles/layout.scss";
import "./styles/typography.scss";
import Banner from "@/components/Banner";
import { bodyFont, logoFont } from "@/app/fonts";
import IntersectProvider from "@/lib/intersectProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export const viewport: Viewport = {
  themeColor: "#4a1c2c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
}

export const metadata: Metadata = {
  title: "Kenmore Vocal Studio - Crafting voices that resonate!",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classnames(bodyFont.className, logoFont.variable, "flex flex-col bg-black text-white")}>
        <Banner src="/images/background.jpg" alt="" />
        <Header />
          <IntersectProvider>
            {children}
          </IntersectProvider>
        <Footer />
      </body>

      <GoogleAnalytics gaId="G-DNVXK2FM13" />
    </html>
  );
}
