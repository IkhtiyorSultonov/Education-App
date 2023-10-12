import React, { useState } from 'react'
import { reviewFormProps } from './review-form.props'
import cn from 'classnames'
import styles from "./review-form.module.css"
import { Button, Input, Rating, TextArea } from '..'

const ReviewForm = ({className,productid,...props}:reviewFormProps):JSX.Element => {
    const [rating, setrating] = useState<number>(0)
  return (
    <div className={cn(styles.form)} {...props}>
        <Input placeholder='Name' />
        <Input placeholder='Title' className={styles.title}/>
        <div className={styles.rating}>
            <span>Rating</span>
            <Rating  isEditablet rating={rating} setReting={setrating} />
        </div>
   
            <TextArea placeholder='Description' className={styles.description}/>
            <div className={styles.submit}>
                <Button appearence='primary'>
                    Submit
                </Button>
                <span className={styles.info}>* Your review will be moderated and reviewed before being published.</span>
            </div>
    </div>
  )
}

export default ReviewForm