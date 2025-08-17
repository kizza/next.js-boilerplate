import classnames from "classnames"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Block({ children, className }: Props) {
  return <div className={classnames("inner", className)}>
    {children}
  </div>
}
