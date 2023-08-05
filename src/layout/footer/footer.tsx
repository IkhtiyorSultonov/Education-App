import React from 'react'
import { FooterProps } from './footer.module'
import styles from "./footer.module.css"
import cn from 'classnames';
import {format} from "date-fns"
const footer = ({className,...props}:FooterProps):JSX.Element => {
  return (
    <footer {...props} className={cn(className,styles.footer)}>
      <div>Sammi © 20022 - {format(new Date(),"yyy")}. All right reserver</div>
      <a href='#'>
        Terms of use
      </a>
      <a href='#'>
        Privacy of Policy
      </a>
    </footer>
  )
}

export default footer