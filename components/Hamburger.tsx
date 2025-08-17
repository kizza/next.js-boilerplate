interface Props {
  styles?: string
  barStyles?: string
}

const SIZES = {
  6: "w-6 h-6",
  8: "w-8 h-8",
}

export default function Hamburger({
  styles: customStyles,
  barStyles: customBarStyles,
}: Props) {
  const barStyles = `bg-current w-full  ${customBarStyles}`
  return (
    <summary className={`flex flex-col box-content justify-between ${customStyles}`}>
      <div className={barStyles} />
      <div className={barStyles} />
      <div className={barStyles} />
    </summary>
  )
}

