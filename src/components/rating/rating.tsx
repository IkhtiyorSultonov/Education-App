import { RatingProps } from "./rating.props";
import styles from "./rating.module.css";
import cn from "classnames";
import { useEffect, useState } from "react";
import StarIcon from "./rating.svg";



const Rating = ({
  rating,
  isEditablet = false,
  setReting,
  ...props
}: RatingProps):JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );
 //////
  useEffect(() => {
    renderRating(rating);
  }, [rating]);
///////////////////
  const renderRating = (currentRating: number) => {
    const updateArray = ratingArray.map((rating, idx) => (
      <span
        className={cn(styles.star, {
          [styles.filled]: idx < currentRating,
          [styles.editable]:isEditablet,
        })}
        onMouseEnter={()=>changeRatingDisplay(idx + 1)}
        // onMouseLeave={()=>changeRatingDisplay(rating)}
        onClick={()=>clickRatingHandler(idx+1)}

      >
        <StarIcon />
      </span>
    ));

    setRatingArray(updateArray);
  };
  ///////////////
  const changeRatingDisplay =(index:number)=>{
    if(!isEditablet){
        return;
    }

    renderRating(index)
  }
  //////////////


  const clickRatingHandler =(index:number)=>{
    if(!isEditablet){
      return;
    }
    // setReting(index)
  }
/////////////
  return (
    <div className={cn(styles.rating, {})} {...props}>
      {ratingArray.map((rating, idx) => (
        <span key={idx}>{rating}</span>
      ))}
    </div>
  );
};

export default Rating;
