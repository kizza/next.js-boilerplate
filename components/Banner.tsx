"use client"

import classnames from "classnames";
import styles from "./Banner.module.scss"

interface Props {
  src: string
  alt: string
}

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

export default function Banner({ src }: Props) {
  return (
    <div className={classnames(styles.Banner, "relative overflow-x-clip")}>
      <img src={src} alt=""
        style={{
          "--min-width": "1000px",
          "--max-width": "1800px",
        }}
        className={
          classnames(
            "absolute -z-10 left-1/2 transform -translate-x-1/2",
            "w-auto max-w-none max-h-100 mx-auto",
            "md:w-full md:h-auto",
          )
        }
      />
    </div>
  )
}

