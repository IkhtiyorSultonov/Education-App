import React from 'react'
import { SidebarProps } from './sidebar.props'

const sidebar = ({...props}:SidebarProps):JSX.Element => {
  return (
    <div {...props}>sidebar</div>
  )
}

export default sidebar