import Styles from "./text.module.css"
import { TextProps } from "./text.props"
import cn from "classnames"

const Text = ({size='m' , children}:TextProps):JSX.Element => {
  return <p className={cn(Styles.p,{
    [Styles.s]:size==='s',
    [Styles.m]:size==='m',
    [Styles.l]:size==='l',
  })}>{children}</p>
}

export default Text