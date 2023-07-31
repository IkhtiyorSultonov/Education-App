import styles from"./input.module.css"
import cn from "classnames"
import { InputProps } from "./input.props"
const input = ({className,...props}:InputProps):JSX.Element => {
  return <input className={cn(styles.input,className)} {...props}>
  </input>
}

export default input