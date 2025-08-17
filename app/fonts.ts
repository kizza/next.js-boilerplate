import { Cinzel_Decorative, Junge } from "next/font/google";

// const font = Lora({ subsets: ["latin"], weight: ["400", "700"] });
export const bodyFont = Junge({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--body-font',
});

export const logoFont = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--logo-font',
});
