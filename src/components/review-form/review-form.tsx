import { useState } from "react";
import { reviewFormProps } from "./review-form.props";
import cn from "classnames";
import styles from "./review-form.module.css";
import { Button, Input, Rating, TextArea } from "..";
import { Controller, useForm } from "react-hook-form";
import { IReviewForm } from "./review-form.interface";

const ReviewForm = ({
  className,
  productid,
  ...props
}: reviewFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IReviewForm>();
  const onSubmit = (data: IReviewForm) => {
    console.log(data);
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
                isEditablet
                setReting={field.onChange}
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
          <Button appearence="primary">Submit</Button>
          <span className={styles.info}>
            * Your review will be moderated and reviewed before being published.
          </span>
        </div>
      </div>
    </form>
  );
};
export default ReviewForm;
