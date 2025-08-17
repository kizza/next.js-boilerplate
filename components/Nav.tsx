"use client"

import Hamburger from "@/components/Hamburger";
import NavLink from "@/components/NavLink";
import classnames from "classnames";
import { useState } from "react";
import styles from "./Nav.module.scss";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMobileNav = (event: any) => {
    if (event.target.tagName !== "SUMMARY") {
      setIsOpen(false)
    }
  }

  // nb. Maintains react state with browser state
  const toggleOpen = (event: any) => {
    setIsOpen(event.target?.open)
  }

  return (
    <div onClick={closeMobileNav} className={classnames(styles.Nav, "")}>
      <details open={isOpen} onToggle={toggleOpen} className="">
        <Hamburger  styles="w-8 h-6 p-6 py-10 text-white hover:text-blue-200" barStyles="rounded-md h-0.5" />
      </details>
      <nav>
        <ul className="flex flex-col md:flex-row">
          <li><NavLink href="#top">Home</NavLink></li>
          <li><NavLink href="#about">About</NavLink></li>
          <li><NavLink href="#contact">Contact</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

