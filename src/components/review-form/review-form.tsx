import { useState } from "react";
import { reviewFormProps } from "./review-form.props";
import cn from "classnames";
import styles from "./review-form.module.css";
import { Button, Input, Rating, TextArea } from "..";
import { Controller, useForm } from "react-hook-form";
import { IReviewForm, IReviewResponse } from "./review-form.interface";
import CloseIcon from "./close.svg"
import axios from "axios";


const ReviewForm = ({
  className,
  productid,
  ...props
}: reviewFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
  
  const onSubmit = async (formData: IReviewForm) => {
    setError(false);
		setIsSuccess(false);
    try {
      const { status } = await axios.post<IReviewResponse>(
        `${process.env.NEXT_PUBLIC_API}/posts`,
        { ...formData, productId:productid }
      );
      
      if (status === 201) {
				setIsSuccess(true);
				reset();
			}
    } 
    
    catch (error) {
      setError(true);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.form)} {...props}>
        <Input
          placeholder="Name"
          {...register("name", {
            required: { value: true, message: "Name is required" },
          })}
          error={errors.name}
        />
        <Input
          placeholder="Title"
          className={styles.title}
          error={errors.title}
          {...register("title", {
            required: { value: true, message: "Title is required" },
          })}
        />
        <div className={styles.rating}>
          <span>Rating</span>
          <Controller
            control={control}
            rules={{ required: { value: true, message: "Rating is required" } }}
            name="rating"
            render={({ field }) => (
              <Rating
            
                error={errors.rating}
                rating={field.value}
                ref={field.ref}
              />
            )}
          />
        </div>

        <TextArea
          placeholder="Description"
          className={styles.description}
          {...register("dscription", {
            required: { value: true, message: "Description is required" },
          })}
          error={errors.dscription}
        />
        <div className={styles.submit}>
          <Button size="m" appearence="primary">Submit</Button>
          <span className={styles.info}>
            * Your review will be moderated and reviewed before being published.
          </span>
        </div>
      </div>
      
			{isSuccess && (
				<div className={cn(styles.success, styles.panel)}>
					<div className={styles.successTitle}>Review sent successfully</div>
					<div>Thanks your review will published after testing</div>
					<CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
				</div>
			)}

			{error && (
				<div className={cn(styles.error, styles.panel)}>
					<div className={styles.successTitle}>Something wen wrong</div>
					<CloseIcon className={styles.close} onClick={() => setError(false)} />
				</div>
			)}
    </form>
  );
};
export default ReviewForm;
