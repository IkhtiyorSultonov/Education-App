import React from 'react'
import { SortEnum, Sortprops } from './sort.props'
import SortIco from"./sort.svg"
import cn from 'classnames'
import styles from"./sort.module.css"

const sort = ({setSort,sort,className,...props}:Sortprops):JSX.Element => {
  return (
    <div className={cn(className,styles.sort)} {...props}>
        <span className={cn({
            [styles.active]:sort==SortEnum.Rating,

        })} onClick={()=>setSort(SortEnum.Rating)}>
            <SortIco className={styles.SortIco}/>Rating
        </span>
        <span className={cn({
            [styles.active]:sort==SortEnum.Price
            
        })}onClick={()=>setSort(SortEnum.Price)}>
            <SortIco className={styles.SortIco}/>Price
        </span>
    </div>
  )
}

export default sort