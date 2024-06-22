import Footer from "@/components/Footer";
import Header from "@/components/Header";
import classnames from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/layout.scss";
import "./styles/typography.scss";

const font = Inter({ subsets: ["latin"] });

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
