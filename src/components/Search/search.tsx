import { useState } from 'react'
import { SearchProps } from './search.props'
import { Button, Input } from '..'
import cn from 'classnames'
import SearchIco from "./search.svg"
import styles from "./search.module.css"
import { useRouter } from 'next/router'

const search = ({className,...props}:SearchProps):JSX.Element => {
    const [Search, setSearch] = useState("")
    const router =useRouter()
    const searchHandler=()=>{
        if(!Search.length)return;
        router.push({ pathname: '/search',  query:{q:Search} });
    }
  return (
    <div className={cn(className,styles.search)} {...props}>
        <Input placeholder='Search...' className={styles.input} value={Search} onChange={e=>setSearch(e.target.value)}/>
        <Button  appearence='primary' className={styles.button} onClick={searchHandler}>
        <SearchIco/>

        </Button>
    </div>
  )
}

export default search