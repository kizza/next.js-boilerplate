import Block from "@/components/layout/Block";
import Nav from "@/components/Nav";
import classnames from "classnames";
import { Dancing_Script } from 'next/font/google';
import Link from "next/link";

const font = Dancing_Script({ subsets: ['latin'] });

export default function Header() {
  return <header className="md:pt-5">
    <Block className="flex flex-col md:flex-row items-center justify-between">
      <h1 className={classnames(font.className, "py-6 text-5xl font-md")}>
        <Link href="/" className="hover:no-underline">My new website</Link>
      </h1>
      <Nav />
    </Block>
  </header>
}
