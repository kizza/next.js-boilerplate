import Block from "@/components/layout/Block";
import Nav from "@/components/Nav";
import classnames from "classnames";
import { Cinzel_Decorative } from 'next/font/google';
import Link from "next/link";
import styles from "./Header.module.scss"

const font = Cinzel_Decorative({ subsets: ["latin"], weight: ["400", "700"] });

export default function Header() {
  return <header className={classnames(styles.Header, "text-white")}>
    <Block className="flex flex-col items-center space-y-4 md:space-y-0 md:space-x-6 md:flex-row md:items-end justify-between">
      <h1 className={classnames(font.className)}>
        <Link href="/" className="hover:no-underline">
          <img src="/images/logo.png" className={classnames(
            "motion-opacity-in-0 motion-blur-in-md motion-duration-[2s]",
            "max-w-60 w--[10em] md:max-w-full"
          )} alt="Kenmore Vocal Studio Logo" />
          <span className="sr-only">Kenmore Vocal Studio</span>
        </Link>
      </h1>
      <Nav />
    </Block>
  </header>
}
