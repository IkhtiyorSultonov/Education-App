import { TagProps } from "./tag.props"
import style  from "./tag.module.css"
import cn from "classnames"
const Tag = ({size='m' ,color='primary',children,...props}:TagProps):JSX.Element => {
  return <div className={cn(style.tag,{
   [ style.s]:size==='s',
   [ style.m]:size==='m',
   [ style.red]:color==='red',
   [ style.green]:color==='green',
   [ style.primary]:color==='primary',


  })}
  {...props}>{children}</div>
}

export default Tag