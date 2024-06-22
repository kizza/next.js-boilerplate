import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.scss"

interface Props {
  href: string
  children: React.ReactNode;
}

export default function NavLink ({href, children}: Props) {
  const pathname = usePathname();
  const className = href == pathname ? styles.active : ""
  return <Link href={href} className={className}>{children}</Link>
}
