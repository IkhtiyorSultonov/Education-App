import React from 'react'
import { CardProps } from './cars.props'
import styles from "./card.module.css"
import cn from 'classnames';

const card = ({children,color,className,...props}:CardProps):JSX.Element => {
  return<div className={cn(styles.card,{
        [styles.primary]:color==='primary',
        [styles.white]:color==='white',
      })} {...props}>{children}</div>
  
  
}

export default card