import React from 'react'
import { Divederprops } from './diveder.props'
import cn from 'classnames'
import styles from "./divider.module.css"
const Diveder = ({className,...props}:Divederprops):JSX.Element => {
  return <hr className={cn(className,styles.diveder)}/>
}

export default Diveder