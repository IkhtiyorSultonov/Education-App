import React from 'react'
import { SidebarProps } from './sidebar.props'
import Menu from '../menu/menu'
import cn from "classnames"
import Link from 'next/link'
import Logo from "../logo.svg"
import styes from "./sidebar.module.css"
import { Diveder } from '@/components'
const sidebar = ({className,...props}:SidebarProps):JSX.Element => {
  return (
    <div className={cn(className,styes.sidebar)} {...props} >
      <Link href={'/'}>
        <Logo/>
        <Diveder/>
      </Link>
      <div>Search...</div>
      <Menu/>
    </div>
  )
}

export default sidebar