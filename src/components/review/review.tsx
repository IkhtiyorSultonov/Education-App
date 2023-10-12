import React from 'react'
import { reviewProps } from './review.props'
import cn from 'classnames'
import UserIco from "./user.svg"
import styles from "./review.module.css"
import { Rating } from '..'

const Review = ({review}:reviewProps ):JSX.Element=> {
  return (
    <div className={styles.review}>
        <UserIco className={styles.user}/>
        <div className={styles.title}>
            <span className={styles.name}>{review.name}</span>
            <span>{review.title}</span>            

        </div>
        <div className={styles.rating}>
            <Rating rating={review.rating}/>
        </div>
        <div className={styles.description}>{review.description}</div>

    </div>
  )
}

export default Review