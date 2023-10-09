import React from 'react'
import { CardProps } from './cars.props'
import styles from "./card.module.css"
import cn from 'classnames';

const card = ({children,color='primary',className,...props}:CardProps):JSX.Element => {
  return<div className={cn(className,styles.card,{
        [styles.primary]:color==='primary',
        [styles.white]:color==='white',
      })} {...props}>{children}</div>
  
  
}

export default card