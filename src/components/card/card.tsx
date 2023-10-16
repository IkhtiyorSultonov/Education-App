import React from 'react'
import { CardProps } from './cars.props'
import styles from "./card.module.css"
import cn from 'classnames';
import {forwardRef,ForwardedRef} from "react"
const card = forwardRef(({children,color='primary',className,...props}:CardProps,ref:ForwardedRef<HTMLDivElement>):JSX.Element => {
  return<div className={cn(className,styles.card,{
        [styles.primary]:color==='primary',
        [styles.white]:color==='white',
      })} {...props} ref={ref}>{children}</div>
  
  
})

export default card