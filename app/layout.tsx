import Footer from "@/components/Footer";
import Header from "@/components/Header";
import classnames from "classnames";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./styles/global.css";
// import "./styles/layout.css";
// import "./styles/typography.css";

const font = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
}

export const metadata: Metadata = {
  title: "My new website",
  description: "Let's get started!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classnames(font.className, "flex flex-col min-h-screen")}>
        <Header />
        <div className="flex-grow bg-grey-100">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
