import styles from"./text-area.module.css"
import cn from "classnames"
import { TextAreaprops } from "./text-area.props"

const  textarea= ({className,...props}:TextAreaprops):JSX.Element => {
  return <textarea className={cn(styles.textArea,className)} {...props}>
  </textarea>
}

export default textarea