import React from 'react'
import { HeaderProps } from './header.props'

const header = ({...props}:HeaderProps):JSX.Element => {
  return (
    <div {...props}>header</div>
  )
}

export default header