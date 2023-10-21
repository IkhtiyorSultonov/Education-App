import { ButtonProps } from "./button.props"
import styles  from "./button.module.css"
import cn from "classnames"
import ArrowIcon from "./arrow.svg"

const Button = ({className ,appearence='primary',arrow='none',size='m',children,...props }:ButtonProps):JSX.Element => {
  return <button className={cn(className,styles.button,{
    [styles.primary]:appearence==='primary',
    [styles.ghost]:appearence==='ghost',
    [styles.success]:appearence==='success',
    [styles.failure]:appearence==='failure',
    [styles.s]:size==='s',
    [styles.m]:size==='m',
    [styles.l]:size==='l',
    [styles.right]:arrow==='right',
    [styles.none]:arrow==='none',

    
  })}{...props}>
    {children}

    {arrow !=='none'&&(
        <span className={cn(styles.arrow,{
            [styles.down]:arrow==='down',
        })}>
            <ArrowIcon/>
        </span>
    )}
  </button>
}

export default Button