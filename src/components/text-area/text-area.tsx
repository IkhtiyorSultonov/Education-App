import {forwardRef,ForwardedRef} from "react"
import { TextAreaprops } from "./text-area.props"
import styles from"./text-area.module.css"
import cn from "classnames"

const  textarea= forwardRef(({className,error,...props}:TextAreaprops,ref:ForwardedRef<HTMLTextAreaElement>):JSX.Element => {
  return <div className={cn(styles.TextAreaWrapper,className)}>
    <textarea className={cn(styles.textArea,className,{
        [styles.error]:error,
    })} ref={ref} {...props}>
  </textarea>
  {error&&<span  className={styles.errorMessage}>{error.message}</span>}
  </div>
})

export default textarea