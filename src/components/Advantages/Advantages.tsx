/*eslint-disable semi*/
import React from 'react'
import styles from "./Advantages.module.css"
import CheckIcon from "./check.svg"
import { AdvantagesProps } from './Advantages.props'
import { Diveder } from '..'
const Advantages = ({advantages}:AdvantagesProps):JSX.Element => {
  return (
    <>
    {advantages.map(t=>(
      <div key={t.id} className={styles.advantages}>
        <CheckIcon/>
        <div className={styles.title}>
          {t.title}
        </div>
        <Diveder className={styles.vLine}/>
        <div className={styles.description}>
          {t.description}
        </div>
      </div>
    ))}
    </>
  )
}

export default Advantages