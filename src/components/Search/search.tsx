import { useState,ChangeEvent ,useContext} from 'react'
import { SearchProps } from './search.props'
import { Button, Input, Text } from '..'
import cn from 'classnames'
import SearchIco from "./search.svg"
import styles from "./search.module.css"
import { useRouter } from 'next/router'
import { AppContext } from '@/context/context'
import { PageItem } from '@/interfaces/menu.interface'
const search = ({className, ...props}:SearchProps):JSX.Element => {
    const {menu} =useContext(AppContext)
    const [Response, setResponse] = useState<PageItem[]>([])
    
    const [Search, setSearch] = useState("")
    const router =useRouter()
    const searchHandler=(id:string)=>{
      router.push(`/${router.query?.type || 'courses'}/${id}`);
      setResponse([]);
      setSearch('');
    }
    const changeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
      const allPages=menu.map(c=>c.pages).flat()
      const {value}=e.target
        setSearch(value)
        const response=allPages.filter(c=>c.title.toLowerCase().indexOf(value.toLowerCase())!==-1)
        setResponse(response)
      if(value.length==0)
      {
        setResponse([])
      }
    }
  return (
    <div className={cn(className,styles.search)} {...props}>
        <Input placeholder='Search...' className={styles.input} value={Search} onChange={changeHandler}/>
        <Button size='m' appearence='primary' className={styles.button} >
        <SearchIco/>

        </Button>
        {
          Response.length ?(
            <div className={styles.searchResponse}>
              {Response.map(c=> <div onClick={()=>searchHandler(c._id)}key={c._id}>{c.title}</div>)}
            </div>
          ):null
        }
    </div>
  )
}

export default search