import {useState} from 'react'
import { HeaderProps } from './header.props'
import { LogoIco, Sidebar } from '..'
import styles from "./header.module.css"
import IcoButton from '@/components/icon-button/ico-button'
import { motion } from 'framer-motion'
import cn from 'classnames'


const header = ({className,...props}:HeaderProps):JSX.Element => {
  const [Open, setOpen] = useState<boolean>(false)
  const toggleMenu=()=>setOpen(prev=>!prev)
  const variants={
    Opened:{
      opacity:1,
      x:0,
      transiation:{
        stiffnes:20,
      }
    },
    Closed:{
      x:'100%',
      opacity:0,
    }
  }
  return (
    <div {...props} className={cn(styles.header)}>
      <LogoIco/>
      <IcoButton appearance='white' icon='Menu' className={styles.openMenu} onClick={toggleMenu}/>
      <motion.div  className={styles.mobileMenu}  variants={variants} animate={Open?"Opened":"Closed"} initial={'Closed'}>
        <IcoButton appearance='white' icon='Close' className={styles.CloseMenu} onClick={toggleMenu}/>
        <Sidebar/>
      </motion.div>
    </div>
  )
}

export default header