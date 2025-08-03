"use client"

import NavLink from "@/components/NavLink"
import styles from "./Nav.module.css"

export default function Nav() {
  return (
    <nav className={`${styles.Nav}`}>
      <ul className="flex">
        <li><NavLink href="/">Home</NavLink></li>
        <li><NavLink href="/about">About</NavLink></li>
        <li><NavLink href="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

