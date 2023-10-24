import React from 'react'
import styles from "./ico-button.module.css"
import { IcoButtonProps ,icons} from './ico-button.props'
import cn from 'classnames'
const IcoButton = ({appearance,icon,className,...props}:IcoButtonProps):JSX.Element => {
    const IconComponents=icons[icon]
  return (

        <button className={cn(styles.iconButton,className,{
            [styles.primary]:appearance=="primary",
            [styles.white]:appearance=="white",
        })}
        {...props}
        >
            <IconComponents/>
        </button>
  )
}

export default IcoButton