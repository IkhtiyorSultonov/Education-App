import React, { useState,useRef ,forwardRef,ForwardedRef} from "react";
import styles from "./product.module.css";
import { productProps } from "./product.props";
import { Button, Card, Diveder, Rating, Review, ReviewForm, Tag } from "..";
import Image from "next/image";
import cn from "classnames";
import { convertToUSD, dedectReview } from "@/helpers/helpers";
import { motion } from "framer-motion";

export const product = motion(forwardRef(({
  product, className, ...props
}: productProps,ref:ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [reviewOpen, setreviewOpen] = useState<boolean>(false);
  const ReviewRef = useRef<HTMLDivElement>(null)
  const scrollToReview = () => {
		setreviewOpen(true);
		ReviewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const variant={
    visible:{
      opacity:1,
      height:'auto'
    },
    hidden:{
      opacity:0,
      height:0,
    }

  }
  return (
    <div className={className} ref={ref}>
      <Card className={styles.product}>
        <div className={styles.logo}>
          <Image
            src={product.images}
            alt={product.title}
            width={70}
            height={70} />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          {convertToUSD(product.price)}
          {product.oldPrice && (
            <Tag className={styles.oldprice} color="green">
              {convertToUSD(product.price - product.oldPrice)}
            </Tag>
          )}
        </div>
        <div className={styles.credit}>
          {convertToUSD(product.credit)}/
          <span className={styles.month}>month</span>
        </div>
        <div className={styles.rating}>
          <Rating rating={product.initialRating} />
        </div>
        <div className={styles.tags}>
          {product.tags.length &&
            product.tags.map((t) => (
              <Tag key={t} className={styles.category} color={"primary"}>
                {t}
              </Tag>
            ))}
        </div>
        <div className={styles.priceTitle}>Price</div>
        <div className={styles.creditTitle}>Credit</div>
        <div className={styles.rateTitle}>{product.reviewCount} <a href="#Review" onClick={scrollToReview}> {dedectReview(product.reviewCount)}</a></div>
        <Diveder className={styles.hr} />

        <div className={styles.description}>{product.description}</div>
        <div className={styles.features}>
          {product.characteristics.length &&
            product.characteristics.map((ch) => (
              <div className={styles.characteristic} key={ch.name}>
                <span className={styles.characteristicName}>{ch.name}</span>
                <span className={styles.characteristicDots}></span>
                <span className={styles.characteristicValue}>{ch.value}</span>
              </div>
            ))}
        </div>

        <div className={styles.advBlock}>
          {product.advantages && (
            <div className={styles.advantages}>
              <div className={styles.advantageTitle}>Advantages</div>
              <div>{product.advantages}</div>
            </div>
          )}

          {product.disadvantages && (
            <div className={styles.disadvantages}>
              <div className={styles.disadvantageTitle}>Disadvantages</div>
              <div>{product.disadvantages}</div>
            </div>
          )}
        </div>


        <Diveder className={styles.hr2} />

        <div className={styles.actions}>
          <Button appearence="primary">More Details</Button>
          <Button appearence="ghost" arrow={reviewOpen ? 'down' : 'right'} className={styles.reviewBtn} onClick={() => setreviewOpen(prev => !prev)}>Review</Button>
        </div>
      </Card>

      <motion.div animate={reviewOpen?"visible":"hidden"} variants={variant} initial={'hidden'} >
      <Card color="white" ref={ReviewRef}className={cn(styles.reviews)}>
        {product.reviews.map(r => (
          <div key={r._id}>
            <Review review={r} />
            <Diveder />
          </div>
        ))}

        <ReviewForm productid={product._id} />

      </Card>
      </motion.div>
    </div>
  );
}));



export default product